define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/main-layout.html');

  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    className: 'layout',
    regions: {
      'subheaderRegion': '.subheader',
      'mainContentRegion': '.main-content'
    },
    events: {
      'click #show-graph-btn': 'showGraph'
    },
    showGraph: function () {
      window.location.hash = '#graph';
    },
    onRender: function () {
      this.rendered = true;
    },
    onClose: function () {
      this.rendered = false;
    }
  });
});