var app = app || {};

app.personModel = Backbone.Model.extend({
  //Atributos por default
  defaults: {
    id_person: 0,
    name: "",
    profile_path: ""
  }

});