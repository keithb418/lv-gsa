define(function (require) {
  'use strict';
  var App = require('app');
  var bP = require('bP');
  var d3 = require('d3');
  var MedWarnings = require('collection/medWarnings');
  var template = require('text!../../html/graph.html');
  var emptyTemplate = require('text!../../html/empty-graph.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'graph',
    className: 'graph fill-height',
    getTemplate: function () {
      if (App.collections.medList.length) {
        return _.template(template);
      }
      
      return _.template(emptyTemplate);
    },
    initialize: function () {
      this.collection = new MedWarnings();
    },
    onShow: function() {
      var that = this;
      
      if (App.collections.medList.length) {
        $.ajax({
          url: '../MedCheckerResources/drugs/graph',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(this.getMedListIds()),
          success: function (response) {
            that.collection.reset(response, {parse: true});
            that.drawSVG();
          }
        });
      }
    },
    drawSVG: function () {
      var dataSet = this.getDataSet();
      
      var translate = {x: 150, y: 25};

      var svg = d3.select('#' + this.id + ' svg')
        .append('g').attr('transform','translate(' + translate.x + ', ' + translate.y + ')');

      var data = [ 
        {data:bP.partData(dataSet,2), id:'MedWarnings', header:['Medication', 'Warning']}
      ];
      
      var $window = $(window);
      
      $window.resize(_.bind(function () {
        var height = this.getGraphHeight();
        
        this.$el.find('svg > g').empty();
        this.$el.find('svg').outerHeight(height + 30).outerWidth(500);
        bP.draw(data, svg, height);
      }, this));
      
      $window.resize();
      
      var e = document.createEvent('UIEvents');
      e.initUIEvent('click', true, true, window, 1);
      d3.select('#' + this.id + ' .mainbar').node().dispatchEvent(e);
    },
    getDataSet: function () {
      var medData = this.collection.toJSON();
      var dataSet = [];
      
      _.each(medData, function(drug) {
        _.each(drug.warnings, function (warning) {
          dataSet.push([drug.brandName, warning, 1]);
        });
      });
      
      return dataSet;
    },
    getMedListIds: function () {
      var medList = App.collections.medList.toJSON();
      var ids = [];
      
      _.each(medList, function (med) {
        ids.push(med.id);
      });
      
      return ids;
    },
    getGraphHeight: function () {
      var numMeds = this.collection.length;
      var minMedsHeight = (50 * numMeds) + 30;
      var currentHeight = this.$el.outerHeight() - 30;
      var height = currentHeight > minMedsHeight ? currentHeight : minMedsHeight;
      
      return height;
    }
  });
});
