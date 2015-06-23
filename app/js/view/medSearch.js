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
      'searchResults': '#search-results'
    },
    events: {
      'keyup #med-search': 'search',
      'click #action-btn': 'doAction',
      'click li button': 'closeResults'
    },
    initialize: function () {
      this.action = this.goToGraph;
      this.collection = new Drugs();
    },
    onShow: function () {
      var that = this;
      App.views.mainLayout.$el.addClass('med-search-layout');
      
      this.setupCall = $.ajax({
        url: '../MedCheckerResources/drugs/setup'
      });
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
    closeResults: function () {
      this.collection.reset();
      this.ui.searchResults.removeClass('open');
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
    }
  });
});