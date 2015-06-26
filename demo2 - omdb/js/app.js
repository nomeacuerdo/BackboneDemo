var app = app || {};
var ENTER_KEY = 13;
var API_URL = 'http://api.giphy.com/v1/gifs/search';
var API_KEY = 'dc6zaTOxFJmzC';
var IMG_URL = 'http://image.tmdb.org/t/p/w500';

$(function() {
    var applicationView = new app.applicationView(API_URL);
});