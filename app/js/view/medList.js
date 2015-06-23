define(function (require) {
  'use strict';
  var App = require('app');
  var MedListItem = require('view/medListItem');
  
  return Backbone.Marionette.CollectionView.extend({
    tagName: "ul",
    className: "med-list",
    itemView: MedListItem
  });
});