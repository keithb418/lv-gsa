define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap', 'lv-widgets'], function () {
  'use strict';
  var App = new Backbone.Marionette.Application();

  App.name = 'GSA';
  App.version = '1.0.0';
  
  App.$el = $('body');

  App.AjaxLoader = new LV.AjaxLoader();

  App.addRegions({
    contentRegion: '#content',
    headerRegion: 'header',
    footerRegion: 'footer'
  });
  
  App.reprocessRoutes = function (loggedIn) {
    var routes = loggedIn ? App.router.loggedInRoutes : App.router.notLoggedInRoutes;

    App.router.processAppRoutes(
      App.router.controller,
      routes
    );
  };

  App.vent.on('route:startup', function () {
    Backbone.history.start();
  });
  App.vent.on('route:welcome', function () {
    App.router.controller.showWelcome();
  });

  return App;

});
