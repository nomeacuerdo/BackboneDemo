var app = app || {};

app.applicationView = Backbone.View.extend({
	el: '#todoapp',

    initialize:function(){	    
	    this.$input = this.$('#search');
	    this.$list = this.$('#list');

        this.collection = new appCollection(API_URL);
        this.render();
    },
	events: {
		'keypress #search': 'searchOnEnter'
	},

    render: function(){
    },

	searchOnEnter: function(e) {
		if ( e.which !== ENTER_KEY || !this.$input.val().trim() ) {
			return;
		}

		var gifs = new app.searchModel({api_key: "dc6zaTOxFJmzC", q: this.$input.val()});
		var that = this;
		
		this.$list.html("");

		gifs.fetch({
			data: $.param({api_key: "dc6zaTOxFJmzC", q: this.$input.val()}),
			success: function(dude){
				console.log(dude);
				_.each(dude.attributes.data, function(item){
			        var gifView = new app.gifView({
			            model: item
			        });
			        that.$list.append(gifView.render().el);
				}, this);
			}
		});
	}
});