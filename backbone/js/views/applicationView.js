var app = app || {};

app.applicationView = Backbone.View.extend({
	el: '#todoapp',

    initialize:function(){	    
		this.$input = this.$('#search');
		this.$list = this.$('#list');
		this.$results = this.$('#results');
		this.$more = this.$('#moar');

		this.collection = app.appCollection;
		
		this.listenTo(app.appCollection, 'search', this.searchShit);
		this.listenTo(app.appCollection, 'sync', this.render);

		this.render();
    },

	events: {
		'keypress #search': 'searchOnEnter',
		'click #moar': 'searchMoar'
	},

    render: function(){ //Aqui va todo lo de mostrar datos
    	var that = this;
    	var pagination = this.collection.pagination;

    	_.each(this.collection.models, function(item, key){
			if(key < this.collection.pagination.count){
		        var gifView = new app.gifView({
		            model: item.attributes
		        });
		        that.$list.append(gifView.render().el);
		    }
		}, this);

		if( pagination && 
			pagination.total_count > (pagination.count * (pagination.offset + 1))) {
			this.$more.show();
		}
    },

	searchOnEnter: function(e) {
		if ( e.which !== ENTER_KEY || !this.$input.val().trim() ) {
			return;
		}

		app.ApiRouter.navigate("/"+encodeURIComponent(this.$input.val()), { trigger: true });//Busca por URL
	},

	searchMoar: function(e) {
		e.preventDefault();
		var page = this.$more.data("page");
		var offset = this.collection.pagination.count * page;
		this.$more.data("page",(page+1));
		this.$more.hide();

		this.collection.buscarGif(app.collectionFilter, offset);
	},

	searchShit : function () {	//Uses the filter for the search
		this.$input.val(app.collectionFilter);
		this.$list.html("");
		this.collection.buscarGif(app.collectionFilter, 0);
	}
});