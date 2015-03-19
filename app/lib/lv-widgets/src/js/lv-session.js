//Session
// ---------
/*jshint -W117 */

LV.Session = function (opts) {
  var options = opts || {};
  this.resources = options.resources || new LV.Resources();
  this.showWarningInterval = 180000 || options.showWarningInterval;
  this.sleepCheckInterval = 20000 || options.sleepCheckInterval;
  this.sleepCheckThreshold = 60000 || options.sleepCheckThreshold;
  this.initialize.apply(this, arguments);
};

_.extend(LV.Session.prototype, Backbone.Events, {
  initialize: function () {
    if (this.resources.isLoggedIn()) {
      this.startSessionTimer();
      $(document).on('ajaxSuccess', this.resetSessionTimer);
      this.startSessionSleepTimer();
    }
  },
  startSessionTimer: function() {
    var timeLeft = this.getTimeToExpireInMilliSeconds();
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }
    if (this.endedTimer) {
      clearTimeout(this.endedTimer);
    }
    if (timeLeft > 0) {
      var _self = this;
      this.warningTimer = window.setTimeout(function () {
        _self.trigger('session:warning');
      }, timeLeft - _self.showWarningInterval);
      this.endedTimer = window.setTimeout(function () {
        _self.trigger('session:ended');
      }, timeLeft);
    }
  },
  startSessionSleepTimer: function () {
    this.lastActiveTime = new Date().getTime();
    this.sessionSleepThread();
  },
  sessionSleepThread: function () {
    var _self = this;
    window.setTimeout(function () {
      var currentTime = new Date().getTime();
      var diff = currentTime - _self.lastActiveTime - _self.sleepCheckInterval;
      if (diff > _self.sleepCheckThreshold) {
        _self.trigger('session:wokeUp');
      }
      _self.lastActiveTime = currentTime;
      window.setTimeout(_self.sessionSleepThread, _self.sleepCheckInterval);
    }, this.sleepCheckInterval);
  },
  resetSessionTimer: function() {
    var path = this.resources.get('user-session').href;
    $.ajax({
      url: path,
      dataType: 'json',
      global: false,
      success: function () {
        return true;
      }
    });
  },
  cleanUpSession: function () {
    if(this.warningTimer) {
      clearTimeout(this.warningTimer);
    }
    if (this.endedTimer) {
      clearTimeout(this.endedTimer);
    }
    if (this.sessionSleepThread) {
      clearTimeout(this.sessionSleepThread);
    }
    cleanUpSession();
  },
  getTimeToExpireInMilliSeconds: function () {
    var path = this.resources.get('last-accesstime').href;
    var _self = this;
    $.ajax({
      url: path,
      dataType: 'json',
      global: false,
      success: function (response) {
        return parseInt(response.timeToExpireInSeconds) * 1000;
      },
      error: function () {
        _self.trigger('session:ended');
      }
    });
    return 0;
  }
});
