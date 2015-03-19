//Ajax Loader
// ---------

var appendHTML = function () {
  $('body').append('<div class="hide-me ajax-loading"><span class="loader-icon loading"></span></div>');
};

LV.AjaxLoader = function (opts) {
  var options = opts || {};
  appendHTML();
  this.$el = options.el || $('.ajax-loading');
  this.initialize.apply(this, arguments);
};

_.extend(LV.AjaxLoader.prototype, Backbone.Events, {
  initialize: function () {
    var _self = this;
    $(document).ajaxStart(function () {
      _self.show();
    }).ajaxStop(function () {
      _self.hide();
    }).ajaxError(function (event, jqxhr, settings, thrownError) {
      if (thrownError === 'timeout') {
        _self.trigger('timeout');
      }
    });
  },
  show: function () {
    this.$el.show();
  },
  hide: function () {
    this.$el.hide();
  }
});
