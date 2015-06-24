define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-search-item.html');

  return Backbone.Marionette.ItemView.extend({
	  tagName: 'li',
    className: 'med-search-item',
    template: _.template(template),
    events: {
      "click button": "addItemToList"
    },
    "addItemToList": function(){
      if (App.collections.medList.length < 10) {
        App.collections.medList.add(this.model);
        App.collections.medList.sort();
        App.vent.trigger('refresh:med:list');
      }
      App.vent.trigger('clear:search');
      App.vent.trigger('show:hide:action');
    }
  });
});
