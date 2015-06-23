define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search.html');
  var select2 = require('select2');

  return Backbone.Marionette.CompositeView.extend({
	  template: template,
    events: {
      'click #action-btn': 'doAction'
    },
    initialize: function () {
      this.action = this.goToGraph;
    },
    onShow: function () {
      var that = this;
      App.views.mainLayout.$el.addClass('med-search-layout');
      $('.med-search').select2({
        ajax: {
          url: 'http://localhost:8080/MedAnalyzerResources/drugs/search/',
          dataType: 'json',
          delay: 250,
          data: function (params) {
            this.url += params.term;
            return {};
          },
          processResults: function (data, page) {
            // parse the results into the format expected by Select2.
            // since we are using custom formatting functions we do not need to
            // alter the remote JSON data
            return {
              results: data
            };
          },
          cache: true
        },
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 2,
        templateResult: that.formatMed
        //templateSelection: formatRepoSelection
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
    formatMed: function (med) {
      if (med.loading) {return med.text;}

      var markup = '<div class="clearfix">' +
      '<div class="col-sm-1">' +
      //'<img src="' + med.owner.avatar_url + '" style="max-width: 100%" />' +
      '</div>' +
      '<div clas="col-sm-10">' +
      '<div class="clearfix">' +
      '<div class="col-sm-6">' + med.openfda.brand_name[0] + '</div>' +
      //'<div class="col-sm-3"><i class="fa fa-code-fork"></i> ' + med.forks_count + '</div>' +
      //'<div class="col-sm-2"><i class="fa fa-star"></i> ' + med.stargazers_count + '</div>' +
      '</div>';      

      markup += '</div></div>';

      return markup;
    }
  });
});