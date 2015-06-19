define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/welcome.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'welcome',
    tagName: 'div',
    className: '',
    template: _.template(template),
    events: {
      'click #proceed-to-app-btn': 'changeToLoggedInRoutes'
    },
    onClose: function () {
      App.$el.removeClass('welcome');
    },
    changeToLoggedInRoutes: function () {
      App.reprocessRoutes(true);
      Backbone.history.stop();
      Backbone.history.start();
    }

  });
});
