var app = app || {};

var appCollection = Backbone.Collection.extend({
  model: app.personModel,
  //movieModel: app.movieModel,
  localStorage: new Backbone.LocalStorage('apidemo'),

  //Funcion para filtrar completados
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  }
});
app.appCollection = new appCollection();