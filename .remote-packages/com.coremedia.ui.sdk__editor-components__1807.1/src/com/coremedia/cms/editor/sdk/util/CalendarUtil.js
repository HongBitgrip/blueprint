Ext.define("com.coremedia.cms.editor.sdk.util.CalendarUtil", function(CalendarUtil) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.data.Calendar;

import ext.DateUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class CalendarUtil {
  public*/ function CalendarUtil$() {
    throw new AS3.Error("no no no!");
  }/*

  public static*/ function format$static(calendar/*:Calendar*/)/*:String*/ {
    if (!calendar) {
      return "";
    }
    var calendarFormat/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'calendarFormat');
    var date/*:Date*/ = calendar.getDateWithoutOffset();
    var calString/*:String*/ = Ext.Date.format(date, calendarFormat);
    calString += ' ' + com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.localizeTimeZoneID(calendar.getTimeZone());
    return calString;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CalendarUtil$,
      statics: {format: format$static},
      requires: [
        "AS3.Error",
        "Ext.Date",
        "com.coremedia.cms.editor.Editor_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal"]
    };
});
