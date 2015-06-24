define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/about.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'about',
    tagName: 'div',
    template: _.template(template)
  });
});
