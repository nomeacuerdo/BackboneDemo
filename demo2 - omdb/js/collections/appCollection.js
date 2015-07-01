var app = app || {};

var appCollection = Backbone.Collection.extend({
    model: app.searchModel,
    localStorage: new Backbone.LocalStorage('gifs'),

    initialize: function() {}
});

app.appCollection = new appCollection();