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
