define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search.html');

  return Backbone.Marionette.CompositeView.extend({
	  template: template
  });
});