define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({

    routeGroups: {
      base: {
        controller: new BaseController(),
        routes: {
          '': 'showIndex',
          'about': 'showAbout'
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
