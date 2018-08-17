Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.DateTimeMenuBase", function(DateTimeMenuBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.components.StatefulTimeField;
import com.coremedia.ui.data.Calendar;

import ext.DateUtil;
import ext.Ext;
import ext.data.JsonStore;
import ext.data.Store;
import ext.menu.Menu;
import ext.picker.DatePicker;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DateTimeMenuBase extends Menu {

  private var datePicker:DatePicker;
  private var timeField:StatefulTimeField;
  private var timeZoneField:LocalComboBox;
  private var initialOffset:int;
  private var initialTimeZone:String;

  public*/ function DateTimeMenuBase$(config/*:DateTimeMenu = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$NS3n(config);

    this.datePicker$NS3n = AS3.cast(Ext.picker.Date,this.find('itemId', 'date')[0]);
    this.timeField$NS3n = AS3.cast(com.coremedia.ui.components.StatefulTimeField,this.find('itemId', 'time')[0]);
    this.timeZoneField$NS3n = AS3.cast(com.coremedia.ui.components.LocalComboBox,this.find('itemId', 'timeZone')[0]);

    this.initializeFields$NS3n(AS3.getBindable(config,"initialCalendar"));

    // do not hide the menu if the time or timezone combobox has focus
    // thus, the menu does not close unless the user clicks outside the menu
    this.on('beforehide', function ()/*:Boolean*/ {
      var activeElement/*:**/ = window.document['activeElement'];
      if (!activeElement) {
        return true;
      }

      var activeElementId/*:String*/ = activeElement.id;
      if (activeElementId === this$.timeField$NS3n.getId() && this$.timeField$NS3n.isExpanded) {
        return false;
      }
      if (activeElementId === this$.timeZoneField$NS3n.getId() && this$.timeZoneField$NS3n.isExpanded) {
        return false;
      }
      return true;
    });

    this.on('hide', function ()/*:void*/ {
      config.onMenuCloseCallback && config.onMenuCloseCallback(this$.getCalendar$NS3n());
      this$.destroy();
    });
  }/*

  private*/ function initializeFields(initialCalendar/*:Calendar*/)/*:void*/ {
    if (initialCalendar) {
      var date/*:Date*/ = initialCalendar.getDateWithoutOffset();
      this.datePicker$NS3n.setValue(date);
      this.timeField$NS3n.setValue(Ext.Date.format(date, DateTimeMenuBase.getTimeFormat()));
      this.initialTimeZone$NS3n = initialCalendar.getTimeZone();
      this.timeZoneField$NS3n.setValue(this.initialTimeZone$NS3n);
      this.initialOffset$NS3n = initialCalendar.getOffset();
    } else {
      var midnight/*:Date*/ = new Date();
      midnight.setMilliseconds(0);
      midnight.setSeconds(0);
      midnight.setMinutes(0);
      midnight.setHours(0);
      this.timeField$NS3n.setValue(Ext.Date.format(midnight, DateTimeMenuBase.getTimeFormat()));
      this.timeZoneField$NS3n.setValue(getDefaultTimezone$static());
    }
  }/*

  private static*/ function getDefaultTimezone$static()/*:String*/ {
    return (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getDefaultTimeZone();
  }/*

  private*/ function getCalendar()/*:Calendar*/ {
    var date/*:Date*/ = this.datePicker$NS3n.getValue();
    var time/*:**/ = this.timeField$NS3n.getValue();
    var timeDate/*:Date*/;
    if (time) {
      timeDate =AS3.is( time,  Date) ? time : Ext.Date.parse(time, DateTimeMenuBase.getTimeFormat());
    }
    var timeZone/*:String*/ = this.timeZoneField$NS3n.getValue();
    return new com.coremedia.ui.data.Calendar({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: timeDate ? timeDate.getHours() : 0,
      minute: timeDate ? timeDate.getMinutes() : 0,
      second: timeDate ? timeDate.getSeconds() : 0,
      timeZone: timeZone,
      // The offset is calculated from the timezone and cannot be manually changed.
      // If the timezone has changed, then we let the server calculate the offset based on the timezone.
      // If the timezone hasn't changed, we leave the offset as it was initially.
      offset: timeZone === this.initialTimeZone$NS3n ? this.initialOffset$NS3n : undefined,
      normalized: false
    });
  }/*

  internal static*/ function getTimeZoneIdsWithLocalizedNames$static()/*:Store*/ {
    var timeZoneIds/*:Array*/ = DateTimeMenuBase.getTimeZoneIds();
    var timeZoneDataArray/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ timeZoneIds.length;++$1) {var timeZoneId/*:String*/ =timeZoneIds[$1];
      var entry/*:Object*/ = {
        id: timeZoneId,
        localizedName: com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.localizeTimeZoneID(timeZoneId)
      };
      timeZoneDataArray.push(entry);
    }
    var mystore/*:JsonStore*/ = Ext.create(Ext.data.JsonStore, {
      fields: [
        {'type': 'string', name: 'id'},
        {'type': 'string', name: 'localizedName'}
      ]
    });
    mystore.loadData(timeZoneDataArray);
    return mystore;
  }/*

  internal static*/ function getTimeZoneIds$static()/*:Array*/ {
    return (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getTimeZones();
  }/*

  internal static*/ function validateTime$static(value/*:**/)/*:**/ {
    if (!value) {
      return true;
    }
    if (AS3.is(value,  Date)) {
      return true;
    }
    var timeFormat/*:String*/ = DateTimeMenuBase.getTimeFormat();
    var timeDate/*:Date*/ = Ext.Date.parse(value, timeFormat, true);
    if (timeDate) {
      return true;
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeValidator_message');
  }/*

  internal static*/ function getTimeFormat$static()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeFormat');
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      datePicker$NS3n: null,
      timeField$NS3n: null,
      timeZoneField$NS3n: null,
      initialOffset$NS3n: 0,
      initialTimeZone$NS3n: null,
      constructor: DateTimeMenuBase$,
      super$NS3n: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      initializeFields$NS3n: initializeFields,
      getCalendar$NS3n: getCalendar,
      statics: {
        getTimeZoneIdsWithLocalizedNames: getTimeZoneIdsWithLocalizedNames$static,
        getTimeZoneIds: getTimeZoneIds$static,
        validateTime: validateTime$static,
        getTimeFormat: getTimeFormat$static
      },
      requires: [
        "Ext",
        "Ext.Date",
        "Ext.data.JsonStore",
        "Ext.menu.Menu",
        "Ext.picker.Date",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulTimeField",
        "com.coremedia.ui.data.Calendar",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal"]
    };
});
