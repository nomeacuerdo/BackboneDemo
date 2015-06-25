var app = app || {};

var TodoList = Backbone.Collection.extend({
    //Nombre del modelo
    'model': app.Todo,

    //Guarda en localstorage, namespace "todos"
    'localStorage': new Backbone.LocalStorage('todos'),

    //Funcion para filtrar completados
    completed: function() {
      return this.filter(function( todo ) {
        return todo.get('completed');
      });
    },

    //Funcion para filtrar incompletos
    remaining: function() {
      return this.without.apply( this, this.completed() );
    },

    //Genera el ID del siguiente task
    nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    //Ordena las tareas
    comparator: function( todo ) {
      return todo.get('order');
    }
  });

  //Crea la lista de To Dos
  app.Todos = new TodoList();