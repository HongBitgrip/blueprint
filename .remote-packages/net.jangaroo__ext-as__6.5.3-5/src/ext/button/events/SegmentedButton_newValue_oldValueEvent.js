Ext.define("ext.button.events.SegmentedButton_newValue_oldValueEvent", function(SegmentedButton_newValue_oldValueEvent) {/*package ext.button.events {
import ext.button.SegmentedButton;

import net.jangaroo.ext.FlExtEvent;

public class SegmentedButton_newValue_oldValueEvent extends FlExtEvent {
  /**
   * Fires when any child button's pressed state has changed and caused the value to change.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Segmented.html#event-change Original Ext JS documentation of 'change'
   * @see ext.button.SegmentedButton
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SegmentedButton_newValue_oldValueEvent.__PARAMETER_SEQUENCE__=( ["source", "newValue", "oldValue", "eOpts"]);}/*;

  public*/ function SegmentedButton_newValue_oldValueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$vmrZ(type, arguments);
  }/*

  /**
   * The new value.
   * /
  public native function get newValue():Array;

  /**
   * The old value.
   * /
  public native function get oldValue():Array;

  public native function get source():SegmentedButton;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SegmentedButton_newValue_oldValueEvent$,
      super$vmrZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
