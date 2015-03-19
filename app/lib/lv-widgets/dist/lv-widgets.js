// LV Widgets 
// ----------------------------------
// v1.0.6
//
// Copyright (c)2014 Longview INC.
// Distributed under MIT license
//

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'underscore', 'backbone', 'marionette'], function ($, _, Backbone) {
      root = factory(root, $, _, Backbone);
    });
  } else {
    root = factory(root, root.jQuery, root._, root.Backbone);
  }

}(this, function (root, $, _, Backbone) {

  var previousLV = root.LV;

  this["JST"] = this["JST"] || {};
  
  this["JST"]["html/lv-view-eula.html"] = function(obj) {
  obj || (obj = {});
  var __t, __p = '', __e = _.escape;
  with (obj) {
  __p += '<div class="container-full lv-eula-body">\n  <header class="header-fixed">\n    <div id="header">\n      <div class="layer title">\n        <img class="navbar-brand pull-right" src="assets/VAHealth-logo.png" alt="Veteran\'s Affairs Health Logo">\n      </div>\n    </div>\n  </header>\n  <div id="content" class="lv-eula-content">\n    <img src="assets/US-DeptOfVeteransAffairsLogo.png" class="lv-eula-logo" alt="Official seal of the United States Department of Veterans Affairs"> <br> <br>\n            <span><strong>End User License Agreement</strong><br>\n                  <strong>Effective 2/11/2014</strong><br><br>\n                By agreeing to install VA’s mobile application (“Application”) on to your device and by subsequent use of the Licensed Software, you agree to comply with the terms of this general End User License Agreement ("EULA") and Notice of Privacy Practices ("Notice"). If you do not agree to the terms of this EULA and Notice, do not install or use the Licensed Software but uninstall it from your device. This EULA and Notice applies to any upgrades and supplements to the original Licensed Software provided and is referred to on your opening screen.  A copy of the EULA is available from within the Licensed Software.  It is your responsibility to review any future changes to the EULA and to uninstall the software if you do not agree to the terms.<br> </br>\n              <ol><li>The Licensed Software is owned by VA. The Licensed Software is licensed, not sold, only on the terms of this EULA. Acceptance and use of the software indicates your acceptance of the terms and conditions of this EULA.</li>\n                <li>Upon accessing the Licensed Software, you will acquire the right to use the Licensed Software, directly from VA. You assume responsibility for the selection of the program to achieve your intended results, and for the access, use and results obtained from the Licensed Software.</li>\n                <li>VA and you acknowledge that this Agreement is concluded between VA and you only, and not with your hardware manufacturer, operating system vendor, or organization that provided the mechanism to download the software (i.e. Apple\'s App Store, VA Enterprise App Store, or other).  VA is solely responsible for the Licensed Software and its content.</li>\n                <li>In consideration of your acceptance of the terms and conditions contained in this EULA, VA grants you a non-exclusive license to use the Licensed Software and the associated documentation for your own needs on one device. You are not licensed to rent, lease, transfer, or distribute the Licensed Software.</li>\n                <li>Title to the Licensed Software, including media and documentation, remain with VA. You may not copy or reproduce, except as supported by the Licensed Software, in whole or in part, or as is necessary for back-up or archival purposes. You may not reverse engineer, translate, disassemble, decompile the software or create similar software in whole or in part.</li>\n                <li>The license is effective upon acceptance and access to the Licensed Software and shall continue with any subsequent use of the application. VA has the right to terminate this Agreement if you fail to comply with any term or condition of this EULA. Upon termination you shall stop all use of the Licensed Software.</li>\n                <li>Confidentiality of the Licensed Software will survive any termination of this EULA, to include the application, design, and functionality.</li>\n                <li>This Licensed Software is distributed AS IS, in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</li>\n                <li>In no event will VA be liable for any damages, including for loss of data, loss of use, or indirect, special, incidental or consequential damages in any way related to or arising out of the use of the Licensed Software whether based upon warranty, contract, or otherwise, whether or not injury was sustained by persons or property or otherwise, and whether or not loss was sustained from, or arose out of use of Licensed Software.  You agree to waive any and all claims against the U.S. Government, VA, its employees, its contractors, their subcontractors, and shall indemnify and hold harmless the U.S. Government, its contractors, and their subcontractors for any damage that you may incur from your use of the Licensed Software.</li>\n                <li>VA shall be neither liable nor responsible for any maintenance or updating of the provided Licensed Software, nor for correction of any errors in the Licensed Software.  The VA may discontinue the Licensed Software, potentially, but not necessarily, replacing it with a subsequent product.  Compatibility of data between products is not guaranteed.</li>\n                <li>This Agreement shall be construed and enforced in accordance with federal law and each party agrees to be subject to those relevant laws for all purposes.</li>\n                <li>It is understood and acknowledged that VA has the absolute right to obtain injunctive relief to protect VA\'s proprietary rights.</li>\n                <li>By using the Licensed Software, you further agree that this is the complete and exclusive statement of the Agreement which supersedes any proposal or prior agreement, oral or written, and any other communications relating to the subject matter of this EULA.</li>\n                <li>If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions will not be affected.</li>\n                <li>By agreeing to use VA software that allows you to access your health data, you are further agreeing based upon individual end-user access permissions to allow the application to access and display your available electronic personal health information from VA systems after proper identification and authentication.</li>\n                <li>Some applications may provide access to other Web sites outside VA control and jurisdiction. When you link to these Web sites, your communications no longer are protected by our privacy policies. VA is not responsible for the privacy practices or the content of non-VA Web sites. We encourage you to review the privacy policy or terms and conditions of those sites to fully understand what information is collected and how it is used.</li>\n                -<li>You have a responsibility to keep your health information safe. While VA ensures privacy and security of your personal health information while the data is in VA systems, VA cannot ensure privacy once you remove a copy of your information from a VA system.  Once information is downloaded, saved, printed, emailed, faxed or shared by other method, its protection is up to you.  When using an Application that allows display of your health information, remember that people may see your personal information on the screen. Turn the screen away from their view. Do not walk away from the mobile device or computer with your information showing. Always remember to log off when you have finished. If you must write information down, keep them in a safe place. If you print copies of your personal health information, be careful not to leave it in any public places and store copies in a safe place, like a locked file cabinet. If you share your personal health information with others, VA has no authority to ensure these people protect your privacy. Be careful of who you give copies of your personal health information, whether the information was entered by you or is from a VA system. Be sure to destroy printed copies of your health information preferably with a shredder. You are encouraged to enhance the security of your information by taking actions on any mobile device or computer used to access your health information. <br>\n                  - Recommended actions include but are not limited to the following: <br>\n                  - Use a password to protect access to your device.  Ensure that your password is easy for you to remember but difficult for others to guess. <br>\n                  - Use the autolock feature and/or timeout feature on your device. <br>\n                  - Do not jailbreak your device or download apps from sources other than designated app stores as these actions may expose you to security risk.</li>\n                <li>PRIVACY ACT STATEMENT: Use of VA Licensed Software by you may involve the collection of individually identifiable data that you enter into the Application and data about your use of the Application.   As authorized by 38 U.S.C. Section 501, VA is asking you to provide information via this Application which may be included with other information VA uses to deliver health care to you.  VA may disclose the information that you entered into the Application as permitted by law. VA may make a "routine use" disclosure of the information as outlined in the Privacy Act systems of records notices and in accordance with the Veterans Health Administration (VHA) Notice of Privacy Practices. VHA will explain these routine uses and privacy practices upon further request. Providing the information is voluntary.  Failure to furnish your identifying information (username and login) when required by an Application will prevent you from being able to use the Licensed Software, but will not have any effect on any other benefits or care to which you may be entitled. VA may also use this information to identify users of the Licensed Software, and for other purposes authorized or required by law.</li>\n                <li>The Licensed Software transfer of individually identifiable data will use secure methods to transmit the data.  Data collected by the Licensed Software for patient care purposes will be securely transmitted into VA data systems to be stored as part of your health care records covered under a Privacy Act system of records.</li>\n                <li>DATA USE: Data resulting from the use of the Licensed Software will be made available to VA authorized persons in the conduct of their official business.  Data may be used for statistical and management purposes in assessing the benefit of this software.  Data provided for research purposes will be made anonymous so that it is not personally identifiable.</li>\n                <li>DISCLAIMER: The content of this Application is intended for use only as an informative tool by the user.  It is not, is not intended to be, and should not be used in any way as a substitute for professional medical advice or training.  The accuracy of the information provided is not guaranteed.  The user acknowledges in initiating this Application that the information is not meant to diagnose a health condition or disease and is not meant to develop a health treatment plan.  If you are in an emergency or life-threatening medical situation, seek medical assistance immediately.  Dial emergency number (911 in the USA) for emergency medical services.</li>\n              </ol>\n\n            </span>\n  </div>\n  <footer class="row footer-fixed lv-eula-footer">\n    <div class="col-xs-6 text-center">\n      <a id="decline-button" href="/launchpad" class="">Decline</a>\n    </div>\n    <div class="col-xs-6 text-center">\n      <a id="accept-button" href="#home" class="">Accept</a>\n    </div>\n  </footer>\n</div>\n';
  
  }
  return __p
  };
  
  this["JST"]["html/lv-view-popup-layout.html"] = function(obj) {
  obj || (obj = {});
  var __t, __p = '', __e = _.escape;
  with (obj) {
  __p += '';
  
  }
  return __p
  };
  
  this["JST"]["html/lv-view-tab-layout.html"] = function(obj) {
  obj || (obj = {});
  var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
  function print() { __p += __j.call(arguments, '') }
  with (obj) {
  __p += '<ul class="lv-tabs nav nav-tabs nav-justified" role="tablist">\n    ';
   _.each(tabs, function (tab, tabname) { ;
  __p += '\n        ';
   if (tabname === defaultTab) { ;
  __p += '\n            <li class="active"><a class="lv-tab-' +
  ((__t = ( obj.tabname.toLowerCase() )) == null ? '' : __t) +
  '" href="#">' +
  ((__t = ( obj.tabname )) == null ? '' : __t) +
  '</a><div class="lv-tab-bottom"></div></li>\n        ';
   } else { ;
  __p += '\n            <li><a class="lv-tab-' +
  ((__t = ( obj.tabname.toLowerCase() )) == null ? '' : __t) +
  '" href="#">' +
  ((__t = ( obj.tabname )) == null ? '' : __t) +
  '</a><div class="lv-tab-bottom"></div></li>\n        ';
   } ;
  __p += '\n    ';
   }); ;
  __p += '\n</ul>\n<div class="lv-tab-content">\n\n</div>\n';
  
  }
  return __p
  };
  var JST = this['JST'];
  var LV = {};
  LV.VERSION = '1.0.6';
  LV.Views = {};
  LV.noConflict = function() {
    root.LV = previousLV;
    return this;
  };

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
  
  //Dateman
  // ---------
  
  var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var daysMin = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  var formatParts = /dd?|DD?|mm?|MM?|yy(?:yy)?/g;
  
  var _DEFAULT_DATE = new Date(-2209057200000);
  var _MS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
  var _GESTATION = 280;
  
  LV.Dateman = function (opts) {
    var options = opts || {};
    this.initialize.apply(this, arguments);
  };
  
  _.extend(LV.Dateman.prototype, {
    initialize: function () {},
    getGestation: function () { return _GESTATION; },
    getDefaultDate: function () { return _DEFAULT_DATE; },
    toUTC: function (date) {
      return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(),
        date.getSeconds(), date.getMilliseconds());
    },
    getZeroHourDate: function (date) {
      if (!date) {
        date = new Date();
      }
      date.setHours(0, 0, 0, 0);
      return date;
    },
    isDefaultDate: function (date) {
      if (date === _DEFAULT_DATE.getTime() || date === _DEFAULT_DATE.toISOString()) {
        return true;
      }
      else if (date instanceof Date) {
        return (+date === +_DEFAULT_DATE);
      }
      else { return false; }
    },
    changeDate: function (e) {
      var calendar = this.convertDate(e.date);
      $(e.target).parent().children('.dateform').val(calendar).trigger('change');
    },
    convertDate: function (date, format) {
      if (!(date instanceof Date)) { return ''; }
      if (!format) { format = 'mm/dd/yyyy'; }
      if (typeof format === 'string') {
        format = this.parseFormat(format);
      }
      var val = {
        d: date.getUTCDate(),
        D: daysShort[date.getUTCDay()],
        DD: days[date.getUTCDay()],
        m: date.getUTCMonth() + 1,
        M: monthsShort[date.getUTCMonth()],
        MM: months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.dd = (val.d < 10 ? '0' : '') + val.d;
      val.mm = (val.m < 10 ? '0' : '') + val.m;
      date = [];
      var seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length) {
          date.push(seps.shift());
        }
        date.push(val[format.parts[i]]);
      }
      return date.join('');
    },
    parseFormat: function (format) {
      var separators = format.replace(formatParts, '\0').split('\0');
      var parts = format.match(formatParts);
      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error('Invalid date format.');
      }
      return {separators: separators, parts: parts};
    },
    validateDate: function (datestr) {
      if (datestr instanceof Date) {
        return datestr;
      }
      if ($.isNumeric(datestr)) {
        return new Date(datestr);
      }
      var day, datearr;
      datearr = datestr.split(/\W+/).map(function (itm) {
        if ($.isNumeric(itm)) {
          return parseInt(itm, 10);
        }
        else {
          for (var i = 0; i < months.length; i++) {
            if (itm.toLowerCase().indexOf(months[i]) > -1) {
              return i + 1;
            }
          }
          return NaN;
        }
      });
      try {
        day = new Date(datearr[2], datearr[0] - 1, datearr[1]);
        if (day.getUTCMonth() + 1 === datearr[0] && day.getUTCDate() === datearr[1]) {
          return day;
        }
        throw 'Bad Date Format';
      }
      catch (err) {
        return NaN;
      }
    },
    dateFieldIsValid: function (field) {
      var val = field.val();
      var yearCheck = val.match(/\/\d\d$/g);
      if (yearCheck !== null) {
        yearCheck = yearCheck[0].substring(1);
        val = val.replace(/\/\d\d$/g, '/20' + yearCheck);
        field.val(val);
      }
      var dat = this.validateDate(val);
      var $helpSpace = field.parent().siblings('.help-block').children('.date-validate').first();
      if (dat) {
        var helpText = this.convertDate(dat, 'D mm/dd/yyyy');
        $helpSpace.removeClass('text-danger').attr('aria-live', 'polite')
          .text(helpText);
        return true;
      } else if (field.val().length > 0) {
        $helpSpace.addClass('text-danger').attr('aria-live', 'assertive')
          .text('Not a valid date.');
        return false;
      } else {
        $helpSpace.removeClass('text-danger').attr('aria-live', 'polite')
          .html('&nbsp');
        return false;
      }
    },
    addDays: function (date, numdays) {
      if (date) {
        return date.addDays(numdays);
      }
    },
    dateDiffInWeeks: function (a, b) {
      var utc1 = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
      var utc2 = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate());
  
      return Math.floor((utc2 - utc1) / _MS_PER_WEEK);
    },
    calculateAge: function (date) {
      var today = new Date();
      var age = today.getUTCFullYear() - date.getUTCFullYear();
      var m = today.getUTCMonth() - date.getUTCMonth();
      if ((m < 0) || (m === 0 && today.getUTCDate() < date.getUTCDate())) {
        age--;
      }
      return age;
    }
  });
  
  Date.prototype.addDays = function (numdays) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getUTCDate() + numdays);
    return dat;
  };
  
  
  //Resources
  // ---------
  
  var getJSON = function (path) {
    var response = $.ajax({url: path, dataType: 'json', async: false});
    return JSON.parse(response.responseText);
  };
  
  var cleanUpSession = function () {
    window.sessionStorage.token = null;
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
      jqXHR.setRequestHeader('Authorization', '');
    });
    document.cookie = encodeURIComponent('JSESSIONID') + '=deleted; expires=' + new Date(0).toUTCString();
  };
  
  LV.Resources = function (opts) {
    var options = opts || {};
    this.path = options.path || 'MobileHealthPlatformWeb';
    this.user = {};
    this.directory = {};
    this.store = {
      pool: {},
      put: function (tag, objectFunc) {
        this.pool[tag] = objectFunc;
      },
      get: function (tag) {
        if (typeof this.pool[tag] === 'function') {
          this.pool[tag] = new this.pool[tag]();
        }
        return this.pool[tag];
      }
    };
    this.initialize.apply(this, arguments);
  };
  
  _.extend(LV.Resources.prototype, {
    initialize: function () {
      var path = this.getResourcePath();
      this.directory = getJSON(path).link;
      this.parseToken();
      this.fetch('public-user-session');
  
      this.user = (this.isLoggedIn()) ? this.store.get('public-user-session').mhpuser : {};
    },
    get: function (tag) {
      return _.first(this.directory.filter(function (obj) { return obj.title === tag; }));
    },
    getResourcePath: function () {
      return window.location.protocol + '//' + window.location.host + '/' + this.path + '/rest/public/resource-directory';
    },
    getRedirectURI: function () {
      return '?redirect_uri=' + window.location.protocol + '//' + window.location.host + window.location.pathname;
    },
    fetch: function (tag) {
      this.store.put(tag, getJSON(this.get(tag).href));
    },
    instance: function (link) {
      return {
        directory: link,
        get: this.get
      };
    },
    parseToken: function () {
      var params = {}, queryString = location.search.substring(1),
        regex = /([^&=]+)=([^&]*)/g,
        m = regex.exec(queryString);
      if (m !== null) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
  
      var token = params.token;
  
      if (typeof token !== 'undefined' && token !== 'undefined' && token !== null && token !== 'null') {
        window.sessionStorage.token = JSON.stringify(token);
        window.location = window.location.protocol + '//' + window.location.host + window.location.pathname;
      }
  
      this.checkToken();
  
      $(document).ajaxError(function (e, jqxhr, settings) {
        var alertMessage = function () {
          alert('unknown error at url: ' + settings.url + '\nstatus code: ' + jqxhr.status);
        };
        switch (jqxhr.status) {
          case 0:
          case 200:
          case 400:
          case 404:
            return;
          case 401:
            if (jqxhr.responseText.indexOf('invalid_token') > 0) {
              cleanUpSession();
              $.ajax(settings);
            }
            return;
          case 403:
            cleanUpSession();
            if (typeof device !== 'undefined') {
              var ref = window.open(this.get('login').get('href') + this.getRedirectURI(), '_blank', 'location=no,toolbar=no');
              ref.addEventListener('loadstart', function (e) {
                var token = e.url.split('token=')[1];
                if (token) {
                  window.sessionStorage.token = JSON.stringify(token);
                  this.checkToken();
                  window.location.reload();
                  ref.close();
                }
              });
            }
            else {
              window.location = this.get('login').get('href') + this.getRedirectURI();
            }
            return;
          case 500:
            //Call alert if stack trace is included // This represents a dev alert
            if (jqxhr.responseText.indexOf('java.lang') > 0) {
              alertMessage.call();
            }
            return;
          default:
            alertMessage.call();
        }
      });
  
    },
    checkToken: function () {
      var storedToken = window.sessionStorage.token;
  
      if (typeof storedToken !== 'undefined' && storedToken !== 'undefined' && storedToken !== null && storedToken !== 'null') {
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
          var currentToken = JSON.parse(storedToken);
          jqXHR.setRequestHeader('Authorization', 'Bearer ' + currentToken);
  
        });
  
      } else {
        cleanUpSession();
      }
    },
    isLoggedIn: function () {
      return !!(this.store.get('public-user-session').mhpuser);
    },
    getUserName : function () {
      return this.user.displayName || '';
    },
    login: function () {
      window.location = this.get('login').href + this.getRedirectURI();
    },
    logout: function () {
      var tokenUrl = this.get('token').href,
          logoutUrl = this.get('logout').href;
  
      $.ajax({
        url: tokenUrl,
        type: 'DELETE',
        success: function () {
          cleanUpSession();
          window.location = logoutUrl;
        },
        error: function () {
          console.log('failed to delete authorization token');
        }
      });
  
    },
    checkROA: function () {
      if (this.isLoggedIn()) {
        if (!this.user.rightOfAccessAccepted) {
          window.location = this.get('roa').href + this.getRedirectURI();
        }
      }
    }
  });
  
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
  
  //Popup Region
  // ---------
  
  LV.PopupRegion = Backbone.Marionette.Region.extend({
    currentView: [],
    initialize: function (opts) {
      this.options = opts || {};
    },
    open: function (view) {
      this.ensureEl();
      this.$el.append(view.el);
    },
    close: function (views) {
        if (typeof views === 'object') {
          views = [views];
        }
        else if (!views || !_.isArray(views)) {
          views = this.currentView;
        }
  
        _.each(views, this._closeView, this);
  
        this._removeViews(views);
        Backbone.Marionette.triggerMethod.call(this, 'close', views);
  
        return this;
      },
  
      show: function (views) {
        if (typeof views === 'object') {
          views = [views];
        }
        else if (!views || !_.isArray(views)) {
          this.renderAll();
          return this;
        }
  
        _.each(views, this._showView, this);
  
        this._addViews(views);
        Backbone.Marionette.triggerMethod.call(this, 'show', views);
  
        return this;
      },
  
      _closeView: function (view) {
        if (view.close) {
          view.close();
        }
        else {
          view.remove();
        }
  
        Backbone.Marionette.triggerMethod.call(this, 'close', view);
      },
  
      _showView: function (view) {
        view.render();
        this.open(view);
  
        Backbone.Marionette.triggerMethod.call(view, 'show');
        Backbone.Marionette.triggerMethod.call(this, 'show', view);
      },
  
      _removeViews: function (views) {
        this.currentView = _.difference(this.currentView, views);
      },
  
      _addViews: function (views) {
        _.union(this.currentView, views);
      },
  
      attachView: function (view) {
        this.open(view);
        this.currentView.push(view);
  
        return this;
      },
  
      renderAll: function () {
        _.each(this.currentView, function (view) {
          view.render();
        });
  
        return this;
      }
  });
  

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
  
  //Popup Layout
  // ---------
  
  
  
  //Tab Layout
  // ---------
  
  LV.Views.TabLayout = Backbone.Marionette.Layout.extend({
    template: function () {
      var data = this.serializeData();
      return JST['html/lv-view-tab-layout.html'](this.mixinTemplateHelpers(data));
    },
    tabs: {
    },
    defaultTab: '',
    mixinTemplateHelpers: function (target) {
      target = target || {};
      var templateHelpers = this.templateHelpers;
      if (_.isFunction(templateHelpers)) {
        templateHelpers = templateHelpers.call(this);
      }
      return _.extend(target, templateHelpers, { tabs: this.tabs, defaultTab: this.defaultTab });
    },
    _defaultEvents: {
      'click .lv-tabs a': 'handleTabClicked'
    },
    _defaultRegions: {
      tabContent: '.lv-tab-content'
    },
    _defaultUi: {
      tabs: '.lv-tabs'
    },
    constructor: function () {
      this.events = _.extend({}, this._defaultEvents, this.events);
      this.regions = _.extend({}, this._defaultRegions, this.regions);
      this.ui = _.extend({}, this._defaultUi, this.ui);
      Backbone.Marionette.Layout.prototype.constructor.apply(this, arguments);
    },
    handleTabClicked: function (e) {
      e.preventDefault();
      var tab = $(e.target).text();
  
      if (this.tabs[tab] !== undefined) {
        this.setActiveTab(tab);
      }
    },
    loadTab: function (Target) {
      var View, viewInstance;
      if (Target instanceof Backbone.Marionette.View) {
        viewInstance = Target;
        viewInstance.delegateEvents();
      } else {
        if (Target.prototype && _.isFunction(Target.prototype.constructor)) {
          View = Target;
        } else {
          View = Backbone.Marionette.ItemView.extend({template: _.template(Target)});
        }
        viewInstance = new View();
      }
      this.listenToOnce(this, 'show', this.onShowTab);
  
      this.tabContent.show(viewInstance);
    },
    onShowTab: function () {},
    resetActiveTab: function () {
      this.ui.tabs.find('li').removeClass('active');
    },
    setActiveTab: function (tab) {
      this.resetActiveTab();
      var tabNames = _.keys(this.tabs),
        idx = _.indexOf(tabNames, tab);
      var target = this.tabs[tab];
      this.currentTab = tab;
      this.loadTab(target);
      this.ui.tabs.find('li')[idx].className += ' active';
    },
    render: function () {
      Backbone.Marionette.Layout.prototype.render.apply(this, arguments);
      if (this.defaultTab && this.tabs[this.defaultTab] && !this.currentTab) {
        this.loadTab(this.tabs[this.defaultTab]);
      } else if (this.currentTab) {
        this.setActiveTab(this.currentTab);
      }
      return this;
    }
  });
  

  root.LV = LV;

}));
