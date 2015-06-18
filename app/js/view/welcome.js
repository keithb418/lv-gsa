define(function (require) {
  var App = require('app');
  var template = require('text!../../html/welcome.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'welcome',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {

    }

  });
});
