var app = app || {};
var ENTER_KEY = 13;
var API_URL = 'http://api.giphy.com/v1/gifs/search';
var API_KEY = 'dc6zaTOxFJmzC';

$(function() {
    var applicationView = new app.applicationView();

    var k_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
	var k_index = 0;
	$(document).keydown(function(e){
	    if(e.keyCode === k_keys[k_index++]){
	        if(k_index === k_keys.length){
	           $('#hey').show();
	        }
	    }else{
	        k_index = 0;
	    }
	});
});