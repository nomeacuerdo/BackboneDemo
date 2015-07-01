var app = app || {};

app.searchModel = Backbone.Model.extend({
    defaults: {
        id: '',
        images_fixed_width_still: '',
        images_fixed_width_url: '',
        images_original_url: '',
        url: ''
    },

    //Guardar la última busqueda
    saveSearch: function(query) {
        this.save({
            q: query
        });
    }
});