var app = app || {};

app.applicationView = Backbone.View.extend({
	el: '#todoapp',

    initialize:function(){	    
		this.$input = this.$('#search');
		this.$list = this.$('#list');
		this.$results = this.$('#results');
		this.$more = this.$('#moar');

		this.listenTo(app.appCollection, 'search', this.searchShit);

		this.collection = app.appCollection;
		this.render();
    },

	events: {
		'keypress #search': 'searchOnEnter',
		'click #moar': 'searchMoar'
	},

    render: function(){
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
		this.$more.attr("data-page",(page+1));
		
		this.searchGif(this.$input.val(),page);
	},

	searchGif: function(query, off) {
		var gifs = new app.searchModel();
		var that = this;
		var qqq = query;

		this.$results.html("");
		if(off === 0) {
			this.$list.html("");
		}

		gifs.fetch({
			data: $.param({api_key: API_KEY, q: query, offset: off}),
			success: function(results){
				var total_count = results.attributes.pagination.total_count;
				var pg_count = results.attributes.pagination.count;
				var title = qqq+" - "+total_count+" results";

				if(total_count > (pg_count * (off + 1))) {
					that.$more.show();
				}
				that.$results.html(title);
				
				_.each(results.attributes.data, function(item, key){
					if(key < pg_count){
				        var gifView = new app.gifView({
				            model: item
				        });
				        that.$list.append(gifView.render().el);
				    }
				}, this);
			}
		});
	},

	searchShit : function () {	//Uses the filter for the search
		this.$input.val(app.collectionFilter);
		this.$list.html("");
		//this.model.saveSearch(app.collectionFilter); //Guardar en Localstorage
		this.searchGif(app.collectionFilter,0);
	}
});