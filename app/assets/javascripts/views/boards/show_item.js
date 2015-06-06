TrelloClone.Views.BoardShowItem = Backbone.View.extend({
  tagName: 'li',

  template: JST['boards/show_item'],

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  }

});
