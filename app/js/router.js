define(function (require) {
  'use strict';
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({

    routeGroups: {
      base: {
        controller: new BaseController(),
        notLoggedInRoutes: {
          '': 'showWelcome',
          '*actions': 'showWelcome'
        },
        loggedInRoutes: {
          '': 'showWelcome',
          'graph': 'showGraph',
          '*actions': 'showWelcome'
        }
      }
    }
  });
});
