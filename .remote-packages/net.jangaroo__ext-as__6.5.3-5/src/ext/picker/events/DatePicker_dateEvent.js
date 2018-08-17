Ext.define("ext.picker.events.DatePicker_dateEvent", function(DatePicker_dateEvent) {/*package ext.picker.events {
import ext.picker.DatePicker;

import net.jangaroo.ext.FlExtEvent;

public class DatePicker_dateEvent extends FlExtEvent {
  /**
   * Fires when a date is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Date.html#event-select Original Ext JS documentation of 'select'
   * @see ext.picker.DatePicker
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DatePicker_dateEvent.__PARAMETER_SEQUENCE__=( ["source", "date", "eOpts"]);}/*;

  public*/ function DatePicker_dateEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$4SHB(type, arguments);
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
      constructor: DatePicker_dateEvent$,
      super$4SHB: function() {
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
