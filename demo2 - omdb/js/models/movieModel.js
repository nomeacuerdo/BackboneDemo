var app = app || {};

app.movieModel = Backbone.Model.extend({
  //Atributos por default
  defaults: {
    id_movie: null,
    imdb_id: null,
    title: "",
    vote_average: null,
    poster_path: ""
  },

  //Funcion que pasa el elem. a completed
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});