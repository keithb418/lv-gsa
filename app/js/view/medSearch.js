define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search.html');
  var MedSearchItem = require('view/medSearchItem');
  var MedSearchEmpty = require('view/medSearchEmpty');
  var Drugs = require('collection/drugs');

  return Backbone.Marionette.CompositeView.extend({
	  template: template,
    emptyView: MedSearchEmpty,
    itemView: MedSearchItem,
    itemViewContainer: '#search-results',
    ui: {
      'medSearch': '#med-search',
      'searchResults': '#search-results',
      'actionBtn': '#action-btn',
      'actionBtnIcon': '#action-btn .btn-icon'
    },
    events: {
      'keydown #med-search': 'search',
      'click #action-btn': 'doAction',
      'click li button': 'closeResults'
    },
    initialize: function () {
      var that = this;
      
      this.action = this.goToGraph;
      this.collection = new Drugs();
      
      App.vent.on('close:results', function () {
        that.bindUIElements();
        that.closeResults();
      });
      App.vent.on('update:action', function () {
        that.bindUIElements();
        that.updateAction();
      });
      App.vent.on('show:hide:action', function () {
        that.bindUIElements();
        that.showHideActionBtn();
      });
      App.vent.on('update:search', function () {
        that.bindUIElements();
        that.updateSearch();
      });
    },
    onShow: function () {
      App.views.mainLayout.$el.addClass('med-search-layout');
      this.showHideActionBtn();
      this.updateSearch();
    },
    onRender: function () {
      this.bindUIElements();
    },
    onClose: function () {
      App.views.mainLayout.$el.removeClass('med-search-layout');
    },
    doAction: function () {
      this.action();
    },
    goToGraph: function () {
      window.location.hash = '#graph';
    },
    deleteItems: function () {
      App.collections.medList.remove(App.selectedMeds);
      App.selectedMeds = [];
      App.vent.trigger('sync:local:storage');
      this.updateAction();
      this.showHideActionBtn();
      this.updateSearch();
    },
    showHideActionBtn: function () {
      var action = 'add';
      
      if (App.collections.medList.length) {
        action = 'remove';
        this.ui.actionBtn.removeClass('hide');
      }
      
      this.ui.actionBtn[action + 'Class']('hide');
    },
    closeResults: function () {
      this.collection.reset();
      if (this.ui.searchResults && _.isFunction(this.ui.searchResults.removeClass)) {
        this.ui.searchResults.removeClass('open');
      }
    },
    search: function (e) {
      var that = this;
      var criteria = this.ui.medSearch.val();
      
      if (e.which === 13 && criteria.length) {
        this.collection.fetch({
          url: '../MedCheckerResources/drugs/search/' + criteria,
          success: function () {
            that.ui.searchResults.addClass('open');
          },
          error: function () {
            that.collection.reset();
            that.ui.searchResults.addClass('open');
          }
        });
      } else {
        this.closeResults();
      }
    },
    updateAction: function () {
      var numChecked = App.selectedMeds.length;
      var icon = 'fa-bar-chart';
      var action = this.goToGraph;
      
      if (numChecked) {
        icon = 'fa-trash-o';
        action = this.deleteItems;
      }
      
      this.ui.actionBtnIcon.removeClass('fa-bar-chart fa-trash-o');
      this.ui.actionBtnIcon.addClass(icon);
      this.action = action;
    },
    updateSearch: function () {
      var numMeds = App.collections.medList.length;
      var disabled = false;
      var placeholder = 'Search for a medicine...';
      
      if (numMeds >= 10) {
        disabled = true;
        placeholder = 'Max number of meds reached';
      }
      
      this.ui.medSearch.val('');
      this.ui.medSearch.attr('placeholder', placeholder);
      this.ui.medSearch[0].disabled = disabled;
    }
  });
});