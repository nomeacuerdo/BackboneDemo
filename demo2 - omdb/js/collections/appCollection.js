var app = app || {};

var appCollection = Backbone.Collection.extend({
    model: app.searchModel,
    url: 'http://api.giphy.com/v1/gifs/search',
    params: {
        "api_key": "dc6zaTOxFJmzC",
        "q": "",
        "offset": 0
    },

    initialize: function() {},
    buscarGif: function(query, offset) {
    	this.params.q = query;
    	this.params.offset = offset;

    	this.fetch({data: $.param(this.params)});
    }, 
    parse: function(response) {
    	this.pagination = response.pagination;

    	return response.data;
    }
});

app.appCollection = new appCollection();