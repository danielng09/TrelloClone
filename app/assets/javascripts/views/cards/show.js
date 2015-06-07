TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/show'],
  className: "card",
  events: {
    'click button.delete-card': "deleteCard",
    'mouseenter': "showDelete",
    'mouseleave': 'hideDelete'
  },

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  },

  deleteCard: function (event) {
    event.preventDefault();
    this.model.destroy();
  },

  showDelete: function (event) {
    console.log("we're in the showDelete");
    $(event.target).toggleClass('hover');
  },

  hideDelete: function (event) {
    console.log("we're in the showDelete");
    $(event.target).toggleClass('hover');
  }
});
