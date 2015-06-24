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
      'keyup #med-search': 'search',
      'click #action-btn': 'doAction',
      'click li button': 'closeResults'
    },
    initialize: function () {
      var that = this;
      
      this.action = this.goToGraph;
      this.collection = new Drugs();
      
      App.vent.on('close:results', function () {
        that.closeResults();
      });
      App.vent.on('clear:search', function () {
        that.ui.medSearch.val('');
      });
      App.vent.on('update:action', function () {
        that.updateAction();
      });
      App.vent.on('show:hide:action', function () {
        that.showHideActionBtn();
      });
    },
    onShow: function () {
      var that = this;
      App.views.mainLayout.$el.addClass('med-search-layout');
      
      this.setupCall = $.ajax({
        url: '../MedCheckerResources/drugs/setup'
      });
      
      that.showHideActionBtn();
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
    search: function () {
      var that = this;
      var criteria = this.ui.medSearch.val();
      
      this.setupCall.done(function () {
        if (criteria.length > 2) {
          that.collection.fetch({
            url: '../MedCheckerResources/drugs/search/' + criteria,
            global: false,
            success: function () {
              that.ui.searchResults.addClass('open');
            }
          });
        } else {
          that.closeResults();
        }
      });
    },
    updateAction: function () {
      var numChecked = $('.med-list input[type="checkbox"]:checked').length;
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
    
  });
});