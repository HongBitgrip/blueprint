Ext.define("ext.picker.events.MonthPickerEvent", function(MonthPickerEvent) {/*package ext.picker.events {
import ext.picker.MonthPicker;

import net.jangaroo.ext.FlExtEvent;

public class MonthPickerEvent extends FlExtEvent {
  /**
   * Fires when the cancel button is pressed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Month.html#event-cancelclick Original Ext JS documentation of 'cancelclick'
   * @see ext.picker.MonthPicker
   * @eventType onCancelClick
   * /
  public static const CANCEL_CLICK:String = "onCancelClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MonthPickerEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function MonthPickerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gknk(type, arguments);
  }/*

  public native function get source():MonthPicker;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MonthPickerEvent$,
      super$gknk: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CANCEL_CLICK: "onCancelClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
