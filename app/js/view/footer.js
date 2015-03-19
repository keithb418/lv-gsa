define(function (require) {
  var App = require('app');
  var template = require('text!../../html/footer.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'footer',
    tagName: 'div',
    className: '',
    template: _.template(template),

    serializeData: function () {
      return {
        appName: App.name,
        version: App.version
      };
    },

    events: {

    }

  });
});
