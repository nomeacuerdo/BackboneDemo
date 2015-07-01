var app = app || {};

var appCollection = Backbone.Collection.extend({
    model: app.searchModel,
    localStorage: new Backbone.LocalStorage('gifs'),
    url: 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=bugs',
    params: {
        "api_key": "dc6zaTOxFJmzC",
        "q": "Test"
    },

    initialize: function() {},
    buscarGif: function(query) {
    	this.params.q = query;
    	this.fetch();
    	//this.fetch({
    		//data: $.param(this.params)
    	//});
    }, 
    parse: function(response) {
    	this.pagination = response.pagination;
    	console.log(response);
    	return response.data;
    }
});

app.appCollection = new appCollection();