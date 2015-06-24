define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search-empty.html');

  return Backbone.Marionette.ItemView.extend({
	  tagName: 'li',
    className: 'med-search-empty',
    template: _.template(template)
  });
});
