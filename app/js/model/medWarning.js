define(function (require) {
  'use strict';
  var App = require('app');

  return Backbone.Model.extend({
    defaults: {
      id: '',
      brandName: '',
      warnings: []
    },
    parse: function (response) {
      response.warnings = this.parseWarningText(response.warnings);
      
      return response;
    },
    parseWarningText: function (warnings) {
      for (var i = 0; i < warnings.length; i++) {
        warnings[i] = warnings[i].replace(' warning', '');
      }
      
      return warnings;
    }

  });
});
