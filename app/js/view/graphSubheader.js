define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/graph-subheader.html');

  return Backbone.Marionette.ItemView.extend({
    template: _.template(template),
    events: {
      'click button': 'showMedList'
    },
    initialize: function () {
      var that = this;
      App.vent.on('hide:graph:instructions', function () {
        that.model.set('length', 0);
        that.render();
      });
    },
    showMedList: function (e) {
      window.location.hash = '#';
    }
  });
});