var app = app || {};

app.searchModel = Backbone.Model.extend({
  urlRoot: 'http://api.giphy.com/v1/gifs/search',
  api_key: "dc6zaTOxFJmzC", 
  q: ""
/*
  //Atributos por default
  defaults: {
    id: 190,
    fixed_width_gif: "",
    fixed_width_still: "",
    total_count: ""
  }
  */
});