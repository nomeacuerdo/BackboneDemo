var app = app || {};

app.applicationView = Backbone.View.extend({
	el: '#todoapp',

    initialize:function(){	    
	    this.$input = this.$('#search');
	    this.$main = this.$('#main');

        this.collection = new appCollection(API_URL);
        this.render();
    },
	events: {
		'keypress #search': 'searchOnEnter'
	},

    render: function(){
        var that = this;
        _.each(this.collection.models, function(item){
            that.renderPerson(item);
        }, this);
    },

    renderPerson:function(item){
        var personView = new app.personView({
            model: item
        });
        this.$main.append(personView.render().el);
    },

	searchOnEnter: function(e) {
		if ( e.which !== ENTER_KEY || !this.$input.val().trim() ) {
			return;
		}

		var person = new app.personModel({query: this.$input.val(), api_key: API_KEY});

		person.fetch({
			success: function(dude){
				console.log( 'Get response:' );
				console.log( dude );
			}
		});
	}
});