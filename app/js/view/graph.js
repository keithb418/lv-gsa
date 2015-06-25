define(function (require) {
  'use strict';
  var App = require('app');
  var bP = require('bP');
  var d3 = require('d3');
  var MedWarnings = require('collection/medWarnings');
  var template = require('text!../../html/graph.html');
  var emptyTemplate = require('text!../../html/empty-graph.html');
  var noWarningsTemplate = require('text!../../html/no-warnings-graph.html');

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
      
      _.bindAll(this, 'hideTooltip');
    },
    events: {
      'click .part0 .mainbar': 'showFullDrugName',
      'dblclick .part0 .mainbar': 'showLabel'
    },
    ui: {
      tooltip: '#tooltip'
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
            if (response.length) {
              that.collection.reset(response, {parse: true});
              that.drawSVG();
              that.selectFirstItem();
            } else {
              App.views.mainLayout.$el.removeClass('graph-layout');
              App.vent.trigger('hide:graph:instructions');
              that.$el.empty().append(_.template(noWarningsTemplate));
            }
          }
        });
        App.views.mainLayout.$el.addClass('graph-layout');
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
        bP.draw(data, svg, height, null);
      }, this));
      
      $window.resize();
    },
    selectFirstItem: function () {
      var e = document.createEvent('UIEvents');
      e.initUIEvent('click', true, true, window, 1);
      d3.select('#' + this.id + ' .mainbar').node().dispatchEvent(e);
      this.hideTooltip(true);
    },
    getDataSet: function () {
      var medData = this.collection.toJSON();
      var dataSet = [];
      
      _.each(medData, function(drug) {
        var brandName = drug.brandName.substr(0, 10) + '...';
        _.each(drug.warnings, function (warning) {
          dataSet.push([{name: brandName, id: drug.id}, warning, 1]);
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
    },
    showFullDrugName: function (e) {
      var $target = $(e.currentTarget);
      var active = $target.hasClass('active');
      var id = e.currentTarget.id;
      var brandName = App.collections.medList.get(id).get('brandName');
      var that = this;
      var position = $target.position();
      
      this.ui.tooltip.text(brandName);
      this.ui.tooltip.attr('style', 'left: ' + position.left + 'px; top: ' + position.top + 'px;');
      this.ui.tooltip.addClass('open');
      
      setTimeout(function () {
        that.hideTooltip();
      }, 5000);
    },
    showLabel: function (e) {
      var id = e.currentTarget.id;
      
      this.hideTooltip(true);
      App.vent.trigger('show:medLabel', new Backbone.Model({id: id}));
    },
    hideTooltip: function (now) {
      var that = this;
      var tooltip = $(this.ui.tooltip);
      tooltip.removeClass('open');
      if (now) {
        tooltip.attr('style', 'left: -1000px; top: -1000px;');
      } else {
        setTimeout(function () {
          tooltip.attr('style', 'left: -1000px; top: -1000px;');
        }, 150);
      }
    },
    onClose: function () {
      App.views.mainLayout.$el.removeClass('graph-layout');
    }
  });
});
