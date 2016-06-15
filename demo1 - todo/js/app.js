var app = app || {};
var ENTER_KEY = 13;

$(function() {
	new app.AppView();
});

Handlebars.registerHelper('ifOne', function(num, options) {
  if(num === 1) {
    return options.fn(this);
  }
  return options.inverse(this);
});