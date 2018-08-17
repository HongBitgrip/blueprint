Ext.define("ext.picker.events.MonthPicker_valueEvent", function(MonthPicker_valueEvent) {/*package ext.picker.events {
import ext.picker.MonthPicker;

import net.jangaroo.ext.FlExtEvent;

public class MonthPicker_valueEvent extends FlExtEvent {
  /**
   * Fires when a month is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-monthclick Original Ext JS documentation of 'monthclick'
   * @see ext.picker.MonthPicker
   * @eventType onMonthClick
   * /
  public static const MONTH_CLICK:String = "onMonthClick";
  /**
   * Fires when a month is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-monthdblclick Original Ext JS documentation of 'monthdblclick'
   * @see ext.picker.MonthPicker
   * @eventType onMonthDblclick
   * /
  public static const MONTH_DBLCLICK:String = "onMonthDblclick";
  /**
   * Fires when the ok button is pressed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-okclick Original Ext JS documentation of 'okclick'
   * @see ext.picker.MonthPicker
   * @eventType onOkClick
   * /
  public static const OK_CLICK:String = "onOkClick";
  /**
   * Fires when a month/year is selected.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-select Original Ext JS documentation of 'select'
   * @see ext.picker.MonthPicker
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  /**
   * Fires when a year is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-yearclick Original Ext JS documentation of 'yearclick'
   * @see ext.picker.MonthPicker
   * @eventType onYearClick
   * /
  public static const YEAR_CLICK:String = "onYearClick";
  /**
   * Fires when a year is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-yeardblclick Original Ext JS documentation of 'yeardblclick'
   * @see ext.picker.MonthPicker
   * @eventType onYearDblclick
   * /
  public static const YEAR_DBLCLICK:String = "onYearDblclick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MonthPicker_valueEvent.__PARAMETER_SEQUENCE__=( ["source", "value", "eOpts"]);}/*;

  public*/ function MonthPicker_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$OAWy(type, arguments);
  }/*

  public native function get source():MonthPicker;

  /**
   * The current value
   * /
  public native function get value():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MonthPicker_valueEvent$,
      super$OAWy: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MONTH_CLICK: "onMonthClick",
        MONTH_DBLCLICK: "onMonthDblclick",
        OK_CLICK: "onOkClick",
        SELECT: "onSelect",
        YEAR_CLICK: "onYearClick",
        YEAR_DBLCLICK: "onYearDblclick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
