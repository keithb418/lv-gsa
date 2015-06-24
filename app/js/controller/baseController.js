define(function (require) {
  'use strict';
  var App = require('app');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var AboutView = require('view/about');
  var MainLayout = require('view/mainLayout');
  var Subheader = require('view/subheader');
  var Drugs = require('collection/drugs');
  
  return Backbone.Marionette.Controller.extend({
    initialize: function () {
      App.views = {};
      App.collections = {};
      App.selectedMeds = [];
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.views.mainLayout = new MainLayout();
      App.collections.medList = new Drugs();
      App.headerRegion.show(App.views.header);
      App.footerRegion.show(App.views.footer);
      
      App.vent.on('sync:local:storage', function () {
        localStorage.setItem('medList', JSON.stringify(App.collections.medList.toJSON()));
      });
      App.vent.on('sync:med:list', function () {
        App.collections.medList.reset(JSON.parse(localStorage.getItem('medList')), {parse: true});
      });
    },
    showGraph: function () {
      var GraphView = require('view/graph');
      this.showMainLayout();
      this.showSubheader({
        title: 'Medication Warnings Graph',
        button: {
          title: 'Show Medicine List',
          icon: 'fa-th-list',
          action: function () {
            window.location.hash = '#';
          }
        }
      });
      App.views.mainLayout.mainContentRegion.show(new GraphView());
    },
    showAbout: function () {
      App.contentRegion.show(new AboutView());
    },
    showWelcome: function () {
      Backbone.history.navigate('/');
      var Welcome = require('view/welcome');
      App.contentRegion.show(new Welcome());
    },
    showMainLayout: function () {
      if (!App.views.mainLayout.rendered) {
        App.contentRegion.show(App.views.mainLayout);
      }
    },
    showSubheader: function (options) {
      var model = new Backbone.Model(options);
      
      App.views.mainLayout.subheaderRegion.show(new Subheader({model: model}));
    },
    showMedList: function () {
      var MedList = require('view/medList');
      var MedSearch = require('view/medSearch');
      this.showMainLayout();
      App.views.mainLayout.subheaderRegion.show(new MedSearch());
      App.views.mainLayout.mainContentRegion.show(new MedList({
          "collection": App.collections.medList
      }));
      App.vent.trigger('sync:med:list');
    }
    
  });
});
