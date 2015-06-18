define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-list.html');

  return Backbone.Marionette.ItemView.extend({
    className: 'med-list',
    template: _.template(template),
    serializeData: function () {
      return {
        appName: App.name
      };
    }

  });
});