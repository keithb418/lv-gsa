define(function (require) {
  'use strict';
  var App = require('app');

  return Backbone.Model.extend({
    defaults: {
      id: '',
      brandName: '',
      match: [],
      manufacturerName: ''
    }

  });
});
