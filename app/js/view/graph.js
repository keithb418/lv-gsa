define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/graph.html');
  var bP = require('bP');
  var d3 = require('d3');

  return Backbone.Marionette.ItemView.extend({
    id: 'graph',
    className: 'fill-height',
    template: _.template(template),
    initialize: function () {
      this.collection = new Backbone.Collection([
        {
          id: '1',
          name: 'Ibuprofen',
          warnings: [
            'Liver Warning',
            'Stomach',
            'Bleeding'
          ]
        },
        {
          id: '2',
          name: 'Tylenol',
          warnings: [
            'Liver Warning',
            'Drowsiness',
          ]
        },
        {
          id: '3',
          name: 'Amoxicillin',
          warnings: [
            'Bleeding',
            'Stomach',
            'Seizure'
          ]
        }
      ]);
    },
    onShow: function() {
      this.drawSVG();
    },
    drawSVG: function () {
      var dataSet = this.getDataSet();
      
      var translate = {x: 150, y: 25};

      var svg = d3.select('#'+this.id)
        .append('svg')
        .append('g').attr('transform','translate(' + translate.x + ', ' + translate.y + ')');

      var data = [ 
        {data:bP.partData(dataSet,2), id:'MedWarnings', header:['Medication', 'Warning']}
      ];
      
      var $window = $(window);
      
      $window.resize(_.bind(function () {
        var height = this.getGraphHeight();
        
        this.$el.find('svg > g').empty();
        this.$el.find('svg').outerHeight(height + 30);
        bP.draw(data, svg, height);
      }, this));
      
      $window.resize();
    },
    getDataSet: function () {
      var medData = this.collection.toJSON();
      var dataSet = [];
      
      _.each(medData, function(drug) {
        _.each(drug.warnings, function (warning) {
          dataSet.push([drug.name, warning, 1]);
        });
      });
      
      return dataSet;
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
