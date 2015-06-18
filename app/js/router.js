define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({

    routeGroups: {
      base: {
        controller: new BaseController(),
        routes: {
          '': 'showWelcome',
          'graph': 'showGraph',
          '*actions': 'showWelcome'
        }
      }
    },

    initialize: function () {
      _.each(this.routeGroups, function (router) {
        this.processAppRoutes(router.controller, router.routes);
      }, this);
    },
    getController: function (id) {
      return this.routeGroups[id].controller;
    }
  });
});
