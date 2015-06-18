define(function (require) {
  'use strict';
  var App = require('app');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var AboutView = require('view/about');
  var MedListLayout = require('view/medListLayout');
  
  return Backbone.Marionette.Controller.extend({
    initialize: function () {
      App.views = {};
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.views.medListLayout = new MedListLayout();
      App.headerRegion.show(App.views.header);
      App.footerRegion.show(App.views.footer);
    },
    showIndex: function () {
      App.Resources.checkROA();
    },
    showGraph: function () {
      var GraphView = require('view/graph');
      App.contentRegion.show(new GraphView());
    },
    showAbout: function () {
      App.contentRegion.show(new AboutView());
    },
    showWelcome: function () {
      Backbone.history.navigate('/');
      var Welcome = require('view/welcome');
      App.contentRegion.show(new Welcome());
    },
    showMedList: function () {
      var MedList = require('view/medList');
      App.contentRegion.show(App.views.medListLayout);
      App.views.medListLayout.medListRegion.show(new MedList());
    }
    
  });
});
