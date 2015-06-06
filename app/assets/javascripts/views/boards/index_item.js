TrelloClone.Views.BoardIndexItem = Backbone.View.extend({
  tagName: 'a',
  className: 'list-group-item list-group-item-info',
  template: JST['boards/index_item'],

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.$el.attr("href", "#/boards/" + this.model.get('id') );
    return this;
  }

});
