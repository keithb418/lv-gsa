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

