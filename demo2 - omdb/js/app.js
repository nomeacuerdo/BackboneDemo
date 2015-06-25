var app = app || {};
var ENTER_KEY = 13;
var API_URL = 'https://api.themoviedb.org/3/';
var API_KEY = 'de7fab6bd303eb74ed839e0239ca0cef';
var IMG_URL = 'http://image.tmdb.org/t/p/w500';

$(function() {
    var applicationView = new app.applicationView(API_URL);
});