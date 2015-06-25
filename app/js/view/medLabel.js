define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-label.html');

  return Backbone.Marionette.ItemView.extend({
    id: "med-label",
    template: _.template(template),
    
    events: {
      
    },
    onRender: function () {
      debugger;
    }
  });
});
