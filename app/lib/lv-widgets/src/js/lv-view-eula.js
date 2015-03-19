//Eula View
// ---------

LV.Views.EulaView = Backbone.Marionette.ItemView.extend({
  id: 'eula',
  tagName: 'div',
  template: function () {
    return JST['html/lv-view-eula.html']();
  },
  events: {
    'click #accept-button': 'accept',
    'click #decline-button': 'decline'
  },
  eulaDate: function () {
    return $(this.template()).find('#modified-date').text();
  },
  initialize: function (opts) {
    var options = opts || {};
    this.app = options.app || '';
    this.isUserSpecific = options.isUserSpecific || false;
    this.value = {};
  },
  accept: function (e) {
    e.preventDefault();
    this.value.DateAccepted = Date.now();
    localStorage.setItem(this.app + '/eula', JSON.stringify(this.value));
    window.location.reload();
  },
  decline: function (e) {
    e.preventDefault();
  }
});
