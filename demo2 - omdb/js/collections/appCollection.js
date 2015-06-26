var app = app || {};

var appCollection = Backbone.Collection.extend({
  model: app.searchModel,
  //movieModel: app.movieModel,
  localStorage: new Backbone.LocalStorage('apidemo'),

  initialize: function() {
  },
  //Funcion para filtrar completados
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  }
});