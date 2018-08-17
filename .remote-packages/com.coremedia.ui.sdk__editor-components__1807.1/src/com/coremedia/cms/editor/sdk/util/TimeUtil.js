Ext.define("com.coremedia.cms.editor.sdk.util.TimeUtil", function(TimeUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;
import ext.StringUtil;

import joo.localeSupport;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TimeUtil {

  private static const*/var MILLIES_PER_DAY$static/*:Number*/ = 24 * 60 * 60 * 1000;/*
  private static const*/var NUMBER_OF_DAYS_PER_YEAR$static/*:Number*/ = 365;/*

  public static const DE_DATETIME_FORMAT:String = 'd.m.y H:i';
  public static const EN_DATETIME_FORMAT:String = 'm/d/y h:i A';

  public static*/ function getRelativeDateString$static(date/*:Date*/)/*:String*/ {
    date =AS3.as( date,  Date);

    if(!date) {
      return "";
    }

    var relativeDateMessage/*:String*/ = "";
    if (date) {
      // working with a copy of the date
      date = new Date(date.getTime());
      var today/*:Date*/ = new Date();
      today.setHours(0, 0, 0, 0);
      date.setHours(0, 0, 0, 0);

      var val/*:Number*/ = (date.getTime() - today.getTime()) / MILLIES_PER_DAY$static;
      var days/*:Number*/ = (val < 0) ? Math.ceil(val) : Math.floor(val);

      switch (days) {
        case 0 :
          relativeDateMessage = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'date_today_text');
          break;
        case -1 :
          relativeDateMessage = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'date_one_day_ago_text');
          break;
        case 1 :
          relativeDateMessage = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'date_in_one_day_text');
          break;
        default :
        {
          // relative time in the future
          if (days > 1 && days <= NUMBER_OF_DAYS_PER_YEAR$static) {
            relativeDateMessage = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'date_in_x_days_text'), days);
          } else if (days > NUMBER_OF_DAYS_PER_YEAR$static) {
            //noinspection JSUnresolvedFunction
            relativeDateMessage = com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(date, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'shortDateFormat')));
          }

          // relative time in the past
          if (days < -1 && days >= -NUMBER_OF_DAYS_PER_YEAR$static) {
            relativeDateMessage = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'date_x_days_ago_text'), Math.abs(days));
          } else if (days < -NUMBER_OF_DAYS_PER_YEAR$static) {
            //noinspection JSUnresolvedFunction
            relativeDateMessage = com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(date, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'shortDateFormat')));
          }
        }
        break;
      }
    }
    return relativeDateMessage;
  }/*

  public static*/ function isToday$static(date/*:Date*/)/*:Boolean*/ {
    var today/*:Date*/ = new Date();
    return date
            && today.getDate() === date.getDate()
            && today.getMonth() === date.getMonth()
            && today.getFullYear() === date.getFullYear();
  }/*

  public static*/ function isBeforeToday$static(date/*:Date*/)/*:Boolean*/ {
    var today/*:Date*/ = new Date();
    today.setHours(0, 0, 0, 0);
    return date && date.getTime() < today.getTime();
  }/*

  /**
   * Indicate whether the given date is within the given nextDays starting from today.
   *
   * @param date the date to check
   * @param nextDays the number of days to compare with the given date
   * @return true if date is within the given nextDays
   * /
  public static*/ function isSoon$static(date/*:Date*/, nextDays/*:int*/)/*:Boolean*/ {
    date =AS3.as( date,  Date);
    if (!date) {
      return false;
    }
    var nextDaysMillis/*:int*/ = 1000 * 60 * 60 * 24 * nextDays;
    var diffMillis/*:Number*/ = TimeUtil.getDayAtMidnight(date).getTime() - TimeUtil.getDayAtMidnight(new Date()).getTime();
    return diffMillis >= 0 && diffMillis <= nextDaysMillis;
  }/*

  /**
   * Comparison of two dates. Two dates are considered equal if
   * <ul>
   * <li>they are identical (===),</li>
   * <li>they have the same time.</li>
   * </ul>
   * Otherwise, the dates are considered not equal.
   *
   * @param d1 the first date to compare
   * @param d2 the second date to compare
   * @return whether both dates are equal.
   * /
  public static*/ function compareDates$static(d1/*:Date*/, d2/*:Date*/)/*:Number*/ {
    if (d1 === d2) {
      return 0;
    }

    if (d1 && d2) {
      var time1/*:Number*/ = d1.getTime();
      var time2/*:Number*/ = d2.getTime();
      if (time1 === time2) {
        return 0;
      } else if (time1 > time2) {
        return 1;
      }
      return -1;
    }

    if (!d1) {
      return 1;
    }

    if (!d2) {
      return -1;
    }
  }/*

  /**
   * Return the given date with time set to 0 (midnight).
   *
   * @param date the date with time or null for today
   * @return the given date without time (midnight) or today without time
   * /
  public static*/ function getDayAtMidnight$static(date/*:Date = null*/)/*:Date*/ {if(arguments.length<=0)date=null;
    date =AS3.as( date,  Date);
    if (!date) {
      return null;
    }
    var normalizedDay/*:Date*/ = date ? new Date(date.getTime()) : new Date();
    normalizedDay.setHours(0, 0, 0, 0);
    return normalizedDay;
  }/*


  /**
   * Formats the given date to the long date and time format
   * /
  public static*/ function formatDateTime$static(date/*:Date*/)/*:String*/ {
    if (!date) {
      return '-';
    }
    var locale/*:String*/ = joo.localeSupport.getLocale();
    var pattern/*:String*/ = TimeUtil.EN_DATETIME_FORMAT;
    if (locale.toLowerCase() === 'de') {
      pattern = TimeUtil.DE_DATETIME_FORMAT;
    }
    var dateString/*:String*/ = Ext.Date.format(date, pattern);
    return dateString;
  }/*

}*/function TimeUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TimeUtil$,
      statics: {
        DE_DATETIME_FORMAT: 'd.m.y H:i',
        EN_DATETIME_FORMAT: 'm/d/y h:i A',
        getRelativeDateString: getRelativeDateString$static,
        isToday: isToday$static,
        isBeforeToday: isBeforeToday$static,
        isSoon: isSoon$static,
        compareDates: compareDates$static,
        getDayAtMidnight: getDayAtMidnight$static,
        formatDateTime: formatDateTime$static
      },
      requires: [
        "Ext.Date",
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
