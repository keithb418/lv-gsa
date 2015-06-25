define(function (require) {
  'use strict';
  var App = require('app');

  return Backbone.Model.extend({
    defaults: {
      adverse_reactions: '',            
  	  description: '',
  	  warnings: '',
  	  warnings_and_cautions: '',
  	  openfda: {
  	    brand_name: '',
  	    generic_name: '',
  	    manufacturer_name: ''
  	  }
    }
  });
});