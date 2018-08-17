Ext.define("ext.menu.events.DatePickerMenu_dateEvent", function(DatePickerMenu_dateEvent) {/*package ext.menu.events {
import ext.picker.DatePicker;

import net.jangaroo.ext.FlExtEvent;

public class DatePickerMenu_dateEvent extends FlExtEvent {
  /**
   * Fires when a date is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.DatePicker.html#event-select Original Ext JS documentation of 'select'
   * @see ext.menu.DatePickerMenu
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DatePickerMenu_dateEvent.__PARAMETER_SEQUENCE__=( ["source", "date", "eOpts"]);}/*;

  public*/ function DatePickerMenu_dateEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$YYmR(type, arguments);
  }/*

  /**
   * The selected date
   * /
  public native function get date():Date;

  /**
   * DatePicker
   * /
  public native function get source():DatePicker;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DatePickerMenu_dateEvent$,
      super$YYmR: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
