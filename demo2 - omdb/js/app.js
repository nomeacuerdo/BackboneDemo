var app = app || {};
var ENTER_KEY = 13;
var API_URL = 'http://api.giphy.com/v1/gifs/search';
var API_KEY = 'dc6zaTOxFJmzC';

$(function() {
    var applicationView = new app.applicationView({model: app.searchModel});
});