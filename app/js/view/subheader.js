define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/subheader.html');

  return Backbone.Marionette.ItemView.extend({
    template: _.template(template),
    events: {
      'click #action-btn': 'doAction'
    },
    doAction: function () {
      var button = this.model.get('button') || {};
      
      if (_.isFunction(button.action)) {
        button.action();
      }
    }
  });
});
