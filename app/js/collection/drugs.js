define(function (require) {
  'use strict';
  var App = require('app');
  var Drug = require('model/drug');

  return Backbone.Collection.extend({
    model: Drug
  });
});
