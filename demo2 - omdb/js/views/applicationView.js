var app = app || {};

app.applicationView = Backbone.View.extend({
	el: '#main',

    initialize:function(){
    	var people = [{ id_person: 190, name: "Clint Eastwood", profile_path: "/n8h4ZHteFFXfmzUW6OEaPWanDnm.jpg" },
	    { id_person: 287, name: "Brad Pitt", profile_path: "/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg" },
	    { id_person: 1370, name: "Brad Dourif", profile_path: "/6pqeGxtWEdDjYsnQfUkmzXLlDvs.jpg" }];
	    
	    this.$input = this.$('#search');
	    this.$main = this.$('#main');
	    this.people = people;

        this.collection = new appCollection(this.people);
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
        this.$el.append(personView.render().el);
    },

	searchOnEnter: function(e) {
		if ( e.which !== ENTER_KEY || !this.$input.val().trim() ) {
			console.log("Blerp");
			return;
		}

		console.log("Search");
	}
});