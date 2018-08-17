Ext.define("com.coremedia.ui.components.CustomizableDatePickerBase", function(CustomizableDatePickerBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.DatePickerCustomizer;

import ext.Ext;

import ext.dom.Element;
import ext.event.Event;

import ext.picker.DatePicker;

/**
 * A DatePicker with a customized DOM.
 * /
public class CustomizableDatePickerBase extends DatePicker {

  private var wheelQueued:Boolean = false;

  public var scrollOnTopBar:Boolean;

  [Bindable]
  public var selectedDateVE:ValueExpression;

  [Bindable]
  public var modifiersForDate:Function;

  public*/ function CustomizableDatePickerBase$(config/*:CustomizableDatePicker = null*/) {if(arguments.length<=0)config=null;
    this.super$dovz(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    Ext.picker.Date.prototype.initComponent.call(this);

    var datePickerCustomizer/*:DatePickerCustomizer*/ = new com.coremedia.ui.util.DatePickerCustomizer(this, AS3.getBindable(this,"modifiersForDate"), AS3.getBindable(this,"selectedDateVE"));
    datePickerCustomizer.init();
  }/*

  override protected*/ function onRender(container/*:Element*/, position/*:Number*/)/*:void*/ {
    Ext.picker.Date.prototype.onRender.call(this,container, position);
    if (this.scrollOnTopBar) {
      var me/*:CustomizableDatePickerBase*/ = this;
      // Remove MOUSEWHEEL scrolling of the date picker
      this.mun(me['eventEl'], 'mousewheel', me['handleMouseWheel'], me);

      // Add scrolling to Month Button
      // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
      var datePickerMonth/*:Element*/ = me['middleBtnEl'];
      datePickerMonth.on('wheel',AS3.bind( this,"handleMouseWheelCustom$dovz"), me);
    }
  }/*

  private*/ function handleMouseWheelCustom(e/*:Event*/)/*:void*/ {
    var event/*:Object*/ = e.browserEvent;
    if (!this.disabled && !this.wheelQueued$dovz) {
      this.wheelQueued$dovz = true;
      var deltaY/*:Number*/ = getDeltaY$static(event);
      if (deltaY > 1) {
        this.showNextMonth(e);
      }
      else if (deltaY < -1) {
        this.showPrevMonth(e);
      }
      this.wheelQueued$dovz = false;
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
  }/*

  private static*/ function getDeltaY$static(event/*:Object*/)/*:Number*/ {
    if (event.deltaY) {
      return event.deltaY * (event.deltaMode ? event.deltaMode * 14 : 1);
    }
    return 0;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.picker.Date",
      wheelQueued$dovz: false,
      scrollOnTopBar: false,
      constructor: CustomizableDatePickerBase$,
      super$dovz: function() {
        Ext.picker.Date.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      onRender: onRender,
      handleMouseWheelCustom$dovz: handleMouseWheelCustom,
      config: {
        selectedDateVE: null,
        modifiersForDate: null
      },
      requires: ["Ext.picker.Date"],
      uses: ["com.coremedia.ui.util.DatePickerCustomizer"]
    };
});
