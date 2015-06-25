define(function (require) {
  'use strict';
  var App = require('app');
  var MedWarning = require('model/medWarning');

  return Backbone.Collection.extend({
    model: MedWarning
  });
});
