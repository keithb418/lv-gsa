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
       App.collections.medList.add(this.model);
    }
  });
});
