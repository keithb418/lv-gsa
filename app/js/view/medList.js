define(function (require) {
  'use strict';
  var App = require('app');
  var MedListItem = require('view/medListItem');
  
  return Backbone.Marionette.CollectionView.extend({
    "tagName": "ul",
    "itemView": MedListItem
  });
});