Ext.define("com.coremedia.ui.data.Calendar", function(Calendar) {/*package com.coremedia.ui.data {
import com.coremedia.ui.util.WithEquals;

import ext.DateUtil;

/**
 * This class is a representation of a time zone aware date.
 * Objects of this type are immutable.
 *
 * Calendar objects that are marked as normalized have to include a
 * correct offset value for the stored time zone and date.
 * /
[PublicApi]
public class Calendar extends Object implements WithEquals {

  // Raw date and time values down to seconds (See Date class for further details)
  private var year:Number;
  private var month:Number;
  private var day:Number;
  private var hour:Number;
  private var minute:Number;
  private var second:Number;

  // Time zone for this calendar object
  private var timeZone:String;

  // Offset of the selected time zone at the particular date and time
  private var offset:Number;

  // Whether this calendar object is known to contain the correct offset for the stored time zone
  private var normalized:Boolean;

  /**
   * Create a new immutable calendar object. The given data object may have the
   * following properties:
   * <ul>
   *   <li>year (Number)</li>
   *   <li>month (Number [0..11])</li>
   *   <li>day (Number [1..31])</li>
   *   <li>hour (Number [0..23]) optional</li>
   *   <li>minute (Number [0..59]) optional</li>
   *   <li>second (Number [0..59]) optional</li>
   *   <li>timeZone (String)</li>
   *   <li>offset (Number)</li>
   *   <li>normalized (Boolean)</li>
   * </ul>
   * @param data
   * /
  public*/ function Calendar$(data/*:**/) {
    this.year$PeR_ = data.year;
    this.month$PeR_ = data.month;
    this.day$PeR_ = data.day;
    this.hour$PeR_ = data.hour ? data.hour : 0;
    this.minute$PeR_ = data.minute ? data.minute : 0;
    this.second$PeR_ = data.second ? data.second : 0;
    this.timeZone$PeR_ = data.timeZone;
    this.offset$PeR_ = data.offset;
    this.normalized$PeR_ = data.normalized;
  }/*

  /**
   * Returns the calendar information as Date object with the client's time zone.
   * The raw values in the Date object might differ from the calendar values as the time
   * zone is changed to the client's time zone.
   *
   * This method requires the calendar's offset to be set.
   *
   * @return Date object representing the same point in time but in the client's time zone.
   * /
  public*/ function getDate()/*:Date*/ {
    if (isNaN(this.offset$PeR_)) {
      return null;
    } else {
      return Ext.Date.parse(this.getISO8601StringNoOffset$PeR_() + this.getISO8601OffsetString$PeR_(), "c");
    }
  }/*

  /**
   * Parse the date object without considering the offset.
   * Useful in a scenario where the calender object is used without server round trip
   * to calculate the offset.
   * Please note that the returned date object is always in the client timezone
   * even if the calendar object has an different offset.
   *
   * @private
   * @return
   * /
  public*/ function getDateWithoutOffset()/*:Date*/ {
    return Ext.Date.parse(this.getISO8601StringNoOffset$PeR_(), "c");
  }/*

  /**
   * Convert this calendar into a string representation that can be interpreted by the REST server.
   * The exact layout of the resulting string is subject to change.
   *
   * @return the string representation
   * /
  public*/ function marshal()/*:String*/ {
    var result/*:String*/ = this.getISO8601StringNoOffset$PeR_();
    result += ";" + this.timeZone$PeR_;
    if (!isNaN(this.offset$PeR_)) {
      result += ";" + this.offset$PeR_;
    }
    return result;
  }/*

  private*/ function getISO8601StringNoOffset()/*:String*/ {
    var result/*:String*/ = "";
    result += this.formatNumberLength$PeR_(this.year$PeR_, 4) + "-" + this.formatNumberLength$PeR_(this.month$PeR_ + 1, 2) + "-" + this.formatNumberLength$PeR_(this.day$PeR_, 2);
    result += "T" + this.formatNumberLength$PeR_(this.hour$PeR_, 2) + ":" + this.formatNumberLength$PeR_(this.minute$PeR_, 2) + ":" + this.formatNumberLength$PeR_(this.second$PeR_, 2);
    return result;
  }/*

  private*/ function getISO8601OffsetString()/*:String*/ {
    var result/*:String*/ = "";

    if (this.offset$PeR_ < 0) {
      result += "-";
    } else {
      result += "+";
    }

    var offsetInMinutesAbs/*:Number*/ = Math.abs(this.offset$PeR_) / 60000;
    var minuteOffset/*:Number*/ = offsetInMinutesAbs % 60;
    var hourOffset/*:Number*/ = (offsetInMinutesAbs - minuteOffset) / 60;
    result += this.formatNumberLength$PeR_(hourOffset, 2) + ":";
    result += this.formatNumberLength$PeR_(minuteOffset, 2);
    return result;
  }/*

  private*/ function formatNumberLength(num/*:Number*/, length/*:Number*/)/*:String*/ {
    var r/*:String*/ = "" + num;
    while (r.length < length) {
      r = "0" + r;
    }
    return r;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function equals(thatCal/*:Object*/)/*:Boolean*/ {
    var that/*:Calendar*/ =AS3.as( thatCal,  Calendar);
    if (!that) {
      return false;
    }
    var result/*:Boolean*/ = this.getYear() === that.getYear() &&
            this.getMonth() === that.getMonth() &&
            this.getDay() === that.getDay() &&
            this.getHour() === that.getHour() &&
            this.getMinute() === that.getMinute() &&
            this.getSecond() === that.getSecond() &&
            this.getTimeZone() === that.getTimeZone() &&
            this.getOffset() === that.getOffset();
    return result;
  }/*

  /**
   * Returns the year portion of this Calendar
   * @return this calendar's year
   * /
  public*/ function getYear()/*:Number*/ {
    return this.year$PeR_;
  }/*

  /**
   * Returns the month (0 for January, 1 for February, and so on) portion of this Calendar
   * @return this calendar's month (0 for January, 1 for February, and so on)
   * /
  public*/ function getMonth()/*:Number*/ {
    return this.month$PeR_;
  }/*

  /**
   * Returns the day of the month (a Number from 1 to 31) of this Calendar
   * @return this calendar's day (a Number from 1 to 31)
   * /
  public*/ function getDay()/*:Number*/ {
    return this.day$PeR_;
  }/*

  /**
   * Returns the hour value of this Calendar object
   * @return this calendar's hour value (a Number from 0 to 23)
   * /
  public*/ function getHour()/*:Number*/ {
    return this.hour$PeR_;
  }/*

  /**
   * Returns the minute value of this Calendar object
   * @return this calendar's minute value (a Number from 0 to 59)
   * /
  public*/ function getMinute()/*:Number*/ {
    return this.minute$PeR_;
  }/*

  /**
   * Returns the seconds value of this Calendar object
   * @return this calendar's 'second' value (a Number from 0 to 59)
   * /
  public*/ function getSecond()/*:Number*/ {
    return this.second$PeR_;
  }/*

  /**
   * The time zone of this calendar as a string.
   * @return this calendar's time zone as string.
   * /
  public*/ function getTimeZone()/*:String*/ {
    return this.timeZone$PeR_;
  }/*

  /**
   * The offset of this calendar in milliseconds
   * @return this calendar's offset in milliseconds
   * /
  public*/ function getOffset()/*:Number*/ {
    return this.offset$PeR_;
  }/*

  /**
   * Whether this calendar is normalized or not
   * @return true if this calendar is normalized
   * /
  public*/ function isNormalized()/*:Boolean*/ {
    return this.normalized$PeR_;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.WithEquals"],
      metadata: {"": ["PublicApi"]},
      year$PeR_: NaN,
      month$PeR_: NaN,
      day$PeR_: NaN,
      hour$PeR_: NaN,
      minute$PeR_: NaN,
      second$PeR_: NaN,
      timeZone$PeR_: null,
      offset$PeR_: NaN,
      normalized$PeR_: false,
      constructor: Calendar$,
      getDate: getDate,
      getDateWithoutOffset: getDateWithoutOffset,
      marshal: marshal,
      getISO8601StringNoOffset$PeR_: getISO8601StringNoOffset,
      getISO8601OffsetString$PeR_: getISO8601OffsetString,
      formatNumberLength$PeR_: formatNumberLength,
      equals: equals,
      getYear: getYear,
      getMonth: getMonth,
      getDay: getDay,
      getHour: getHour,
      getMinute: getMinute,
      getSecond: getSecond,
      getTimeZone: getTimeZone,
      getOffset: getOffset,
      isNormalized: isNormalized,
      requires: [
        "Ext.Date",
        "com.coremedia.ui.util.WithEquals"
      ]
    };
});
