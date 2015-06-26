var app = app || {};

app.gifView = Backbone.View.extend({
  tagName: 'li',
  className: 'col-xs-6 col-md-3 gif-view',
  template: Handlebars.compile( $('#gif-handlebars').html() ),

  render: function() {
    this.$el.html( this.template( this.model ) );
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'click', this.getUrl);
  },
  
  getUrl : function () {
    console.log("click");
  },

});