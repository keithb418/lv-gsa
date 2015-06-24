define(function (require) {
  'use strict';
  var App = require('app');
  var MedListItem = require('view/medListItem');
  
  return Backbone.Marionette.CollectionView.extend({
    tagName: "ul",
    className: "med-list",
    itemView: MedListItem,
    initialize: function () {
      var that = this;
      
      App.vent.on('refresh:med:list', function () {
        that.render();
      });
    }
  });
});