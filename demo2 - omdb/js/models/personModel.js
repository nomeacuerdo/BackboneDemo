var app = app || {};

app.personModel = Backbone.Model.extend({
  urlRoot: 'http://api.themoviedb.org/3/search/person/',

/*
  ,
  //Atributos por default
  defaults: {
    id_person: 190,
    name: "Clint Eastwood",
    profile_path: "/n8h4ZHteFFXfmzUW6OEaPWanDnm.jpg"
  }
  /*
      var people = [{ id_person: 190, name: "Clint Eastwood", profile_path: "/n8h4ZHteFFXfmzUW6OEaPWanDnm.jpg" },
      { id_person: 287, name: "Brad Pitt", profile_path: "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg" },
      { id_person: 1370, name: "Brad Dourif", profile_path: "/6pqeGxtWEdDjYsnQfUkmzXLlDvs.jpg" }];
  */
});