var app = app || {};

app.searchModel = Backbone.Model.extend({
//  urlRoot: 'http://api.giphy.com/v1/gifs/search',
//  api_key: "dc6zaTOxFJmzC", 
  q: "",
  url: function() {
    return 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + this.get("q");
  },

  //Guardar la última busqueda
  saveSearch: function(query) {
    this.save({
      q: query
    });
  }
});