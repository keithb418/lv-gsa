define(function (require) {
  'use strict';
  var App = require('app');
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({
    controller: new BaseController(),
    notLoggedInRoutes: {
      '': 'showWelcome',
      '*actions': 'showWelcome'
    },
    loggedInRoutes: {
      '': 'showMedList',
      'graph': 'showGraph',
      '*actions': 'showMedList'
    }
  });
});
