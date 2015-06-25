var app = app || {};

app.personView = Backbone.View.extend({
  tagName: 'div',
  className: 'person-view',
  template: Handlebars.compile( $('#person-handlebars').html() ),
  //template: _.template( $('#item-template').html() ), // W/O Handlebars

  events: {
    'keypress #search': 'searchOnEnter'
  },

  initialize: function() {
  },

  render: function() {
    var params = this.model.attributes;
    params.img_url = IMG_URL;
    var $tpl = this.template( params );
    this.$el.html( $tpl );
    this.$input = this.$('#search');
        
    return this;
  },

  searchOnEnter: function( e ) {
    if ( e.which === ENTER_KEY ) {
      this.model.toggle();
    }
  }
});