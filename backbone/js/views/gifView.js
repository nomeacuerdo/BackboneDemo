var app = app || {};

app.gifView = Backbone.View.extend({
	tagName: 'li',
	className: 'col-xs-6 col-md-3 gif-view',
	template: Handlebars.compile( $('#gif-handlebars').html() ),
    
	events: {
		'mouseover img.gif': 'hoverImage',
		'mouseout img.gif': 'hoverOutImage',
		'click img.gif.active': 'showModal'
	},

	render: function() {
		var preload = new Image();		
		preload.src = this.model.images.fixed_width.url;
console.log("ID: "+this.model.id);
		this.$el.html( this.template( this.model ) );
		return this;
	},

	initialize: function() {
	},

	hoverImage: function(e) {
		var image = this.$el.find("img");
		image.addClass("active");
		image.attr("src", image.data("downsizeGif"));
	},

	hoverOutImage: function(e) {
		var image = this.$el.find("img");
		image.removeClass("active");
		image.attr("src", image.data("still"));
	},

	showModal: function(e) {
		var image = this.$el.find("img");
		
		$('#gifModal img.gif').attr("src", image.data("original-gif"));
		$('#gifModal input.url').val(image.data("original-gif"));
		$('#gifModal .giphy').attr("href", image.data("url"));
		$('#gifModal').modal();
	}
});