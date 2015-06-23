define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-list-item.html');

  return Backbone.Marionette.ItemView.extend({
	  tagName: 'li',
    className: 'med-list-item',
    template: _.template(template)
  });
});
