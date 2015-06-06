TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show_board'],

  initialize: function (options) {
    this.model.lists().board = options.model;
    this.listenTo(this.model.lists(), 'add', this.addBoardSubview);
    this.listenTo(this.model, 'sync add', this.render);

    this.model.lists().each( function (list) {
      this.addBoardSubview(list);
    }.bind(this));

    var newListForm = new TrelloClone.Views.NewList({ collection: this.model.lists() });
    this.addSubview('div.new-list-form', newListForm);
  },

  addBoardSubview: function (list) {
    var listView = new TrelloClone.Views.BoardShowItem({
      model: list
    });

    this.addSubview('ul.board-list-group', listView);
  },



  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    this. attachSubviews();
    return this;
  }

});
