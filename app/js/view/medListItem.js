define(function (require) {
  'use strict';
  var App = require('app');
  var template = require('text!../../html/med-list-item.html');

  return Backbone.Marionette.ItemView.extend({
	  tagName: 'li',
    className: 'med-list-item',
    template: _.template(template),
    events: {
      'change input': 'updateAction',
      'click button': 'viewMedLabel'
    },
    updateAction: function (e) {
      var $target = this.$el.find(e.currentTarget);
      var checked = $target.is(':checked');
      var id = $target.attr('id');
      
      if (checked) {
        App.selectedMeds.push(id);
      } else {
        var index = App.selectedMeds.indexOf(id);
        App.selectedMeds.splice(index, 1);
      }
      
      App.vent.trigger('update:action');
    },
    viewMedLabel: function () {
      App.vent.trigger('show:medLabel', this.model);
    }
  });
});
