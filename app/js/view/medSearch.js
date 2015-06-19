define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search.html');

  return Backbone.Marionette.CompositeView.extend({
	  template: template,
    events: {
      'click #action-btn': 'doAction'
    },
    initialize: function () {
      this.action = this.goToGraph;
    },
    doAction: function () {
      this.action();
    },
    goToGraph: function () {
      window.location.hash = '#graph';
    }
  });
});