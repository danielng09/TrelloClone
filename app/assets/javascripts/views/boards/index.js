TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync add', this.render);

    this.collection.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));

    var newBoardForm = new TrelloClone.Views.BoardNew({ collection: this.collection });
    this.addSubview('div.new-board-form', newBoardForm);
  },

  render: function () {
    this.$el.html(this.template());

    this.attachSubviews();
    return this;
  },

  addBoardSubview: function (board) {
    var boardListItem = new TrelloClone.Views.BoardIndexItem({
      model: board
    });

    this.addSubview('div.board-index-items', boardListItem);
  }

});
