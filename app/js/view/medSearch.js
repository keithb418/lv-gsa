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
    onShow: function () {
      App.views.mainLayout.$el.addClass('med-search-layout');
    },
    onClose: function () {
      App.views.mainLayout.$el.removeClass('med-search-layout');
    },
    doAction: function () {
      this.action();
    },
    goToGraph: function () {
      window.location.hash = '#graph';
    }
  });
});