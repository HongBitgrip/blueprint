Ext.define("com.coremedia.cms.editor.sdk.premular.fields.DateTimePropertyFieldBase", function(DateTimePropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.impl.ContentRepositoryImpl;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.components.StatefulTimeField;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.DateUtil;
import ext.data.JsonStore;
import ext.data.Store;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class DateTimePropertyFieldBase extends AdvancedFieldContainer {
  public static const DATE_ITEM_ID:String = "date";
  public static const TIME_ITEM_ID:String = "time";
  public static const TIME_ZONE_ITEM_ID:String = "timeZone";

  /**
   * An optional ValueExpression that allows setting a custom dynamic time zone instead of the
   * Studio's default time zone. The ValueExpression must return the Calendar-compatible String-representation of
   * the time zone or null to use the built-in default value. The potential time zones
   * have to be part of the timezones listed in the property 'studio.timeZones' of the Studio's application.properties file.
   * /
  [Bindable]
  public var defaultTimeZoneValueExpression:ValueExpression;

  /**
   * A property path that can be used to check if the actual property is loaded.
   * This is needed when the actual property to write might not exist (e.g. when writing in a struct).
   * /
  [Bindable]
  public var isLoadedPropertyName:String;

  [Bindable]
  public var validValueExpression:ValueExpression;

  /**
   * Whether it is expected to update the property field only
   * with normalized calendar values. This is typically
   * the case when the property field's value is tied to
   * a remote bean.
   *
   * Defaults to true.
   *
   * @see Calendar
   * /
  [ExtConfig]
  public var expectNormalization:Boolean = true;

  /**
   * The default width for one character in combobox
   * /
  private static const*/var SINGLE_CHARACTER_WIDTH$static/*:Number*/ = 7;/*

  /**
   * The minimum font count to calculate the required size of the combobox
   * /
  private static const*/var FIELD_MIN_WIDTH$static/*:Number*/ = 10;/*

  private static*/ var timeZoneFieldMinWidth$static/*:Number*/ = NaN;/*

  private var model:Bean;
  private var propertyExpression:ValueExpression;
  private var isTimeZonePickerHidden:Boolean;
  private var validDateExpresson:ValueExpression;
  private var validTimeZoneExpresson:ValueExpression;


  private var lastCalendar:Calendar;

  private var dirty:Boolean = false;

  public*/ function DateTimePropertyFieldBase$(config/*:DateTimePropertyField = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$LVae(config);
    this.isTimeZonePickerHidden$LVae = AS3.getBindable(config,"timeZoneHidden");
    AS3.setBindable(this,"validValueExpression" , AS3.getBindable(config,"validValueExpression"));
    if (!AS3.getBindable(this,"defaultTimeZoneValueExpression")) {
      AS3.setBindable(this,"defaultTimeZoneValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(DateTimePropertyFieldBase.getDefaultTimeZone));
    }
    AS3.getBindable(this,"defaultTimeZoneValueExpression").addChangeListener(AS3.bind(this,"updateModelValues$LVae"));
    this.getValidDateExpression$LVae().addChangeListener(AS3.bind(this,"validateDateField$LVae"));
    this.getValidTimeZoneExpression$LVae().addChangeListener(AS3.bind(this,"validateDateField$LVae"));


    this.propertyExpression$LVae = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    this.getModel(config);

    var loadedExpression/*:ValueExpression*/ = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"isLoadedPropertyName"));
    loadedExpression.loadValue(function ()/*:void*/ {
      this$.updateModelValues$LVae();
      this$.model$LVae.addValueChangeListener(AS3.bind(this$,"handleModelChanges$LVae"));
      this$.propertyExpression$LVae.addChangeListener(AS3.bind(this$,"updateModelValues$LVae"));
    });

    this.addListener('beforedestroy',AS3.bind( this,"onBeforeDestroy$LVae"));
  }/*

  private*/ function onBeforeDestroy()/*:Boolean*/ {
    this.propertyExpression$LVae.removeChangeListener(AS3.bind(this,"updateModelValues$LVae"));
    this.model$LVae.removeValueChangeListener(AS3.bind(this,"handleModelChanges$LVae"));
    AS3.getBindable(this,"defaultTimeZoneValueExpression").removeChangeListener(AS3.bind(this,"updateModelValues$LVae"));
  }/*

  private*/ function getDateField()/*:StatefulDateField*/ {
    return AS3.as( this.getComponent(DateTimePropertyFieldBase.DATE_ITEM_ID),  com.coremedia.ui.components.StatefulDateField);
  }/*

  private*/ function getTimeField()/*:StatefulTimeField*/ {
    return AS3.as( this.getComponent(DateTimePropertyFieldBase.TIME_ITEM_ID),  com.coremedia.ui.components.StatefulTimeField);
  }/*

  /**
   * Write model changes back to content property
   * /
  private*/ function handleModelChanges(event/*:PropertyChangeEvent*/)/*:void*/ {
    var modelDate/*:Date*/ =AS3.as( this.model$LVae.get("date"),  Date);
    var modelTime/*:Date*/ =AS3.as( this.model$LVae.get("time"),  Date);

    if (event.property === 'time' && modelTime && !modelDate) {
      var today/*:Date*/ = new Date();
      this.model$LVae.set("date", today);
    } else if (event.property === 'date' && modelDate && !modelTime) {
      var midnight/*:Date*/ = new Date();
      midnight.setMilliseconds(0);
      midnight.setSeconds(0);
      midnight.setMinutes(0);
      midnight.setHours(0);
      this.model$LVae.set("time", midnight);
    }

    this.dirty$LVae = true;
    com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"save$LVae"));
  }/*

  private*/ function save()/*:void*/ {
    if (this.dirty$LVae) {
      this.dirty$LVae = false;
      var calendar/*:Calendar*/ = this.getModelCalendar();
      if (calendar) {
        if (this.isTimeZonePickerHidden$LVae) {
          this.handleModelChangePickerHidden$LVae(calendar);
        } else {
          this.handleModelChangePickerShown$LVae(calendar);
        }
      } else {
        if (this.lastCalendar$LVae !== null) {
          this.lastCalendar$LVae = null;
          this.propertyExpression$LVae.setValue(null);
        }
      }
    }
  }/*

  private*/ function handleModelChangePickerShown(calendar/*:Calendar*/)/*:void*/ {
    // Only write back to server if value has really changed
    if (!this.lastCalendar$LVae ||
            this.lastCalendar$LVae.getYear() !== calendar.getYear() ||
            this.lastCalendar$LVae.getMonth() !== calendar.getMonth() ||
            this.lastCalendar$LVae.getDay() !== calendar.getDay() ||
            this.lastCalendar$LVae.getHour() !== calendar.getHour() ||
            this.lastCalendar$LVae.getMinute() !== calendar.getMinute() ||
            this.lastCalendar$LVae.getSecond() !== calendar.getSecond() ||
            this.lastCalendar$LVae.getTimeZone() !== calendar.getTimeZone()) {
      this.lastCalendar$LVae = calendar;
      this.propertyExpression$LVae.setValue(calendar);
    }
  }/*

  private*/ function handleModelChangePickerHidden(calendar/*:Calendar*/)/*:void*/ {
    // Only write back to server if value has really changed
    var date/*:Date*/ = calendar.getDate();
    if (date && (!this.lastCalendar$LVae ||
            !com.coremedia.ui.util.ObjectUtils.equal(this.lastCalendar$LVae.getDate(), date) ||
            this.lastCalendar$LVae.getTimeZone() !== calendar.getTimeZone())) {
      this.lastCalendar$LVae = calendar;
      this.propertyExpression$LVae.setValue(calendar);
    }
  }/*

  internal*/ function getModelCalendar()/*:Calendar*/ {
    // Get date and build calendar out of it
    var modelDate/*:Date*/ =AS3.as( this.model$LVae.get("date"),  Date);
    var modelTime/*:Date*/ =AS3.as( this.model$LVae.get("time"),  Date);
    if (modelDate && modelTime) {
      var calendarConfig/*:**/ = {normalized: false};
      calendarConfig.year = modelDate.getFullYear();
      calendarConfig.month = modelDate.getMonth();
      calendarConfig.day = modelDate.getDate();

      calendarConfig.hour = modelTime.getHours();
      calendarConfig.minute = modelTime.getMinutes();
      calendarConfig.second = modelTime.getSeconds();

      // Add time zone if available
      var timeZone/*:String*/ = this.model$LVae.get("timeZone");
      if (timeZone) {
        calendarConfig.timeZone = timeZone;
      }

      // Add local time zone offset at selected date if time zone picker is hidden
      if (this.isTimeZonePickerHidden$LVae) {
        // TODO: Include model time to make offset selection more accurate.
        var localTimeZoneOffsetMinutes/*:Number*/ = -modelDate.getTimezoneOffset();
        calendarConfig.offset = localTimeZoneOffsetMinutes * (60*1000);
      }

      return new com.coremedia.ui.data.Calendar(calendarConfig);
    }
    return null;
  }/*

  /**
   * Updates the local model with the current content property values.
   * /
  private*/ function updateModelValues()/*:void*/ {
    var calendar/*:Calendar*/ =AS3.as( this.propertyExpression$LVae.getValue(),  com.coremedia.ui.data.Calendar);
    if (calendar) {
      // If the calendar is not normalized, the update can wait until the server has returned a normalized value.
      if (!this.expectNormalization || calendar.isNormalized()) {
        if (this.isTimeZonePickerHidden$LVae) {
          this.updateModelValuesPickerHidden$LVae(calendar);
        } else {
          this.updateModelValuesPickerShown$LVae(calendar);
        }
      }
    } else {
      if (this.lastCalendar$LVae) {
        this.lastCalendar$LVae = null;
      }
      this.resetAllModelValues();
    }
  }/*

  private*/ function updateModelValuesPickerHidden(calendar/*:Calendar*/)/*:void*/ {
    // Change date to client timezone
    var date/*:Date*/ = calendar.getDate();
    // Only update client model if value has really changed
    if (date && (!this.lastCalendar$LVae ||
                 !com.coremedia.ui.util.ObjectUtils.equal(this.lastCalendar$LVae.getDate(), date) ||
                 this.lastCalendar$LVae.getTimeZone() !== calendar.getTimeZone()))
    {
      this.lastCalendar$LVae = calendar;
      this.model$LVae.updateProperties({
        "date":date,
        "time":date,
        "timeZone":calendar.getTimeZone()
      });
    }
  }/*

  private*/ function updateModelValuesPickerShown(calendar/*:Calendar*/)/*:void*/ {
    // Only update client model if value has really changed
    if (!this.lastCalendar$LVae ||
         this.lastCalendar$LVae.getYear() !== calendar.getYear() ||
         this.lastCalendar$LVae.getMonth() !== calendar.getMonth() ||
         this.lastCalendar$LVae.getDay() !== calendar.getDay() ||
         this.lastCalendar$LVae.getHour() !== calendar.getHour() ||
         this.lastCalendar$LVae.getMinute() !== calendar.getMinute() ||
         this.lastCalendar$LVae.getSecond() !== calendar.getSecond() ||
         this.lastCalendar$LVae.getTimeZone() !== calendar.getTimeZone())
    {
      this.lastCalendar$LVae = calendar;

      var modelDate/*:Date*/ = new Date(calendar.getYear(), calendar.getMonth(), calendar.getDay(), 0, 0, 0, 0);
      var modelTime/*:Date*/ = new Date(calendar.getYear(), calendar.getMonth(), calendar.getDay(), calendar.getHour(), calendar.getMinute(), calendar.getSecond(), 0);

      this.model$LVae.updateProperties({
        "date":modelDate,
        "time":modelTime,
        "timeZone":calendar.getTimeZone()
      });
    }
  }/*


  internal*/ function resetAllModelValues()/*:void*/ {var this$=this;
    // reset model is not enough, must clear time field (see CMS-8449)
    this.getTimeField$LVae().clearValue();
    this.getTimeField$LVae().clearInvalid();

    AS3.getBindable(this,"defaultTimeZoneValueExpression").loadValue(function(timeZone/*:String*/)/*:void*/ {
      var defaultTimeZone/*:String*/ = timeZone;
      if (defaultTimeZone === null) {
        defaultTimeZone = DateTimePropertyFieldBase.getDefaultTimeZone(); // can potentially return null as well
      }
      this$.model$LVae.updateProperties({
        "date":null,
        "time":null,
        "timeZone":defaultTimeZone
      });
    });
    this.getValidDateExpression$LVae().setValue(true);
  }/*

  internal static*/ function getDateFormat$static()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateFormat');
  }/*

  internal static*/ function getTimeFormat$static()/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeFormat');
  }/*


  internal*/ function validateTime(value/*:String*/)/*:**/ {
    if (!value ||AS3.is( value,  Date)) {
      return true;
    }
    var timeFormat/*:String*/ = DateTimePropertyFieldBase.getTimeFormat();
    var timeDate/*:Date*/ = Ext.Date.parse(value, timeFormat, true);
    if (!timeDate) {
      this.getValidDateExpression$LVae().setValue(false);
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeValidator_message');
    }
    this.getValidDateExpression$LVae().setValue(true);
    return true;
  }/*

  internal*/ function validateTimeZone(value/*:String*/)/*:**/ {
    var isValid/*:Boolean*/ = DateTimePropertyFieldBase.getTimeZoneIds().some(function (timeZone/*:String*/)/*:Boolean*/ {
          return value === com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.localizeTimeZoneID(timeZone);
    });
    this.getValidTimeZoneExpression$LVae().setValue(isValid);
    if(!isValid){
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_timeZoneValidator_message');
    }
    return isValid;
  }/*

  internal static*/ function getTimeZoneIds$static()/*:Array*/ {
    return (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getTimeZones();
  }/*

  internal static*/ function getTimeZoneIdsWithLocalizedNames$static()/*:Store*/ {
    var timeZoneIds/*:Array*/ = DateTimePropertyFieldBase.getTimeZoneIds();
    var timeZoneDataArray/*:Array*/ = [];
    for (var i/*:Number*/ = 0; i<timeZoneIds.length; i++) {
      var entry/*:Object*/ = {
        id: timeZoneIds[i],
        localizedName: com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.localizeTimeZoneID(timeZoneIds[i])
      };
      timeZoneDataArray.push(entry);
    }
    var timeZoneStore/*:JsonStore*/ = new Ext.data.JsonStore(AS3.cast(Ext.data.JsonStore,{
      fields: [
        {'type': 'string', name: 'id'},
        {'type': 'string', name: 'localizedName'}
      ]
    }));
    timeZoneStore.loadData(timeZoneDataArray);
    return timeZoneStore;

  }/*

  internal static*/ function getDefaultTimeZone$static()/*:String*/ {
    return (AS3.as(com.coremedia.cap.common.SESSION.getConnection().getContentRepository(),  com.coremedia.cap.content.impl.ContentRepositoryImpl)).getDefaultTimeZone();
  }/*

  /**
   * calculate the needed width for combo
   * /
  internal static*/ function measureString$static()/*:Number*/ {
    if (!timeZoneFieldMinWidth$static) {
      var timeZoneFieldMinChars/*:Number*/ = FIELD_MIN_WIDTH$static;
      var timeZoneIds/*:Array*/ = DateTimePropertyFieldBase.getTimeZoneIds();
      for (var i/*:Number*/ = 0; i < timeZoneIds.length; i++) {
        var timeZoneId/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal.localizeTimeZoneID(timeZoneIds[i]);
        if (timeZoneId.length >= timeZoneFieldMinChars) {
          timeZoneFieldMinChars = timeZoneId.length;
        }
      }
      timeZoneFieldMinWidth$static = timeZoneFieldMinChars * SINGLE_CHARACTER_WIDTH$static;
    }
    return timeZoneFieldMinWidth$static;
  }/*

  internal*/ function getModel(config/*:DateTimePropertyField*/)/*:Bean*/ {
    if (!this.model$LVae) {
      if (AS3.getBindable(config,"model")) {
        this.model$LVae = AS3.getBindable(config,"model");
      } else {
        this.model$LVae = com.coremedia.ui.data.beanFactory.createLocalBean();
      }
    }
    return this.model$LVae;
  }/*

  private*/ function getValidDateExpression()/*:ValueExpression*/{
    if(!this.validDateExpresson$LVae){
      this.validDateExpresson$LVae = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.validDateExpresson$LVae;
  }/*

  private*/ function getValidValueExpression()/*:ValueExpression*/{
    if(!AS3.getBindable(this,"validValueExpression")){
      AS3.setBindable(this,"validValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined));
    }
    return AS3.getBindable(this,"validValueExpression");
  }/*

  private*/ function getValidTimeZoneExpression()/*:ValueExpression*/{
    if(!this.validTimeZoneExpresson$LVae){
      this.validTimeZoneExpresson$LVae = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.validTimeZoneExpresson$LVae;
  }/*

  private*/ function validateDateField()/*:void*/ {
    this.getValidValueExpression$LVae().setValue(this.getValidTimeZoneExpression$LVae().getValue() && this.getValidDateExpression$LVae().getValue());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      metadata: {"": ["PublicApi"]},
      expectNormalization: true,
      model$LVae: null,
      propertyExpression$LVae: null,
      isTimeZonePickerHidden$LVae: false,
      validDateExpresson$LVae: null,
      validTimeZoneExpresson$LVae: null,
      lastCalendar$LVae: null,
      dirty$LVae: false,
      constructor: DateTimePropertyFieldBase$,
      super$LVae: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      onBeforeDestroy$LVae: onBeforeDestroy,
      getDateField$LVae: getDateField,
      getTimeField$LVae: getTimeField,
      handleModelChanges$LVae: handleModelChanges,
      save$LVae: save,
      handleModelChangePickerShown$LVae: handleModelChangePickerShown,
      handleModelChangePickerHidden$LVae: handleModelChangePickerHidden,
      getModelCalendar: getModelCalendar,
      updateModelValues$LVae: updateModelValues,
      updateModelValuesPickerHidden$LVae: updateModelValuesPickerHidden,
      updateModelValuesPickerShown$LVae: updateModelValuesPickerShown,
      resetAllModelValues: resetAllModelValues,
      validateTime: validateTime,
      validateTimeZone: validateTimeZone,
      getModel: getModel,
      getValidDateExpression$LVae: getValidDateExpression,
      getValidValueExpression$LVae: getValidValueExpression,
      getValidTimeZoneExpression$LVae: getValidTimeZoneExpression,
      validateDateField$LVae: validateDateField,
      config: {
        defaultTimeZoneValueExpression: null,
        isLoadedPropertyName: null,
        validValueExpression: null
      },
      statics: {
        DATE_ITEM_ID: "date",
        TIME_ITEM_ID: "time",
        TIME_ZONE_ITEM_ID: "timeZone",
        getDateFormat: getDateFormat$static,
        getTimeFormat: getTimeFormat$static,
        getTimeZoneIds: getTimeZoneIds$static,
        getTimeZoneIdsWithLocalizedNames: getTimeZoneIdsWithLocalizedNames$static,
        getDefaultTimeZone: getDefaultTimeZone$static,
        measureString: measureString$static
      },
      requires: [
        "Ext.Date",
        "Ext.data.JsonStore",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.ContentRepositoryImpl",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.components.StatefulTimeField",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal"]
    };
});
