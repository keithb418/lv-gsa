require.config({
  paths: {
    //Libraries
    'bootstrap': '../lib/sass-bootstrap/dist/js/bootstrap',
    'jquery': '../lib/jquery/dist/jquery',
    'underscore': '../lib/underscore/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone.wreqr': '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter',
    'marionette': '../lib/marionette/lib/core/amd/backbone.marionette',
    'lv-widgets': '../lib/lv-widgets/dist/lv-widgets',

    //Plugins
    'text': '../lib/requirejs-text/text'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require(['app', 'router', 'controller/popupController'], function (App, Router, PopupController) {
  App.addInitializer(function () {
    this.router = new Router();
    this.popups = new PopupController();
    this.vent.trigger('route:startup');
  });
  App.start();
});
