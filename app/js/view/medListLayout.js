define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-list-layout.html');

  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    regions: {
      'medSearchRegion': '.med-search',
      'medListRegion': '.med-list'
    },
    events: {
      'click #show-graph-btn': 'showGraph'
    },
    showGraph: function () {
      window.location.hash = '#graph';
    }
  });
});