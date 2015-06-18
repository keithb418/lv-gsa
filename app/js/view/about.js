define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/about.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'about',
    tagName: 'div',
    className: '',
    template: _.template(template),

    serializeData: function () {
      return {
        appName: App.name,
        version: App.version
      };
    },

    events: {

    }

  });
});
