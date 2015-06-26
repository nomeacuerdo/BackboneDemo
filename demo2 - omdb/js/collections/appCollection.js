var app = app || {};

var appCollection = Backbone.Collection.extend({
  model: app.personModel,
  //movieModel: app.movieModel,
  localStorage: new Backbone.LocalStorage('apidemo'),
  url: 'https://api.themoviedb.org/3/',

  initialize: function(API_URL) {
    this.url = API_URL;
  },
  //Funcion para filtrar completados
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },
  
  sync: function(method, model, options) {
    model.setRequestHeader('api_key' , "de7fab6bd303eb74ed839e0239ca0cef");
  }
});