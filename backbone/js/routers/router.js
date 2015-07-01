var app = app || {};

var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function(param) {
        if (param) {
            param = param.trim();
        }
        app.collectionFilter = param || '';

        app.appCollection.trigger('search');
    }
});

app.ApiRouter = new Workspace();
Backbone.history.start();