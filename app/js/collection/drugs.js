define(function (require) {
  'use strict';
  var App = require('app');
  var Drug = require('model/drug');

  return Backbone.Collection.extend({
    comparator: function (model) {
      return model.get('brandName').toLowerCase();
    },
    model: Drug
  });
});
