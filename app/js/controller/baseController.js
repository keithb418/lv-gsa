define(function (require) {
  var App = require('app');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var GraphView = require('view/graph');
  var AboutView = require('view/about');

  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.headerRegion.show(App.views.header);
      App.footerRegion.show(App.views.footer);
    },
    showIndex: function () {
      App.Resources.checkROA();
    },
    showGraph: function () {
      App.contentRegion.show(new GraphView());
    },
    showAbout: function () {
      App.contentRegion.show(new AboutView());
    }
  });
});
