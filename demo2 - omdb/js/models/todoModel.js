var app = app || {};

app.Todo = Backbone.Model.extend({
  //Atributos por default
  defaults: {
    title: '',
    completed: false
  },

  //Funcion que pasa el elem. a completed
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});