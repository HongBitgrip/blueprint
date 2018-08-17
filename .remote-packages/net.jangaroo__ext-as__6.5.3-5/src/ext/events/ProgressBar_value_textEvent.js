Ext.define("ext.events.ProgressBar_value_textEvent", function(ProgressBar_value_textEvent) {/*package ext.events {
import ext.ProgressBar;

import net.jangaroo.ext.FlExtEvent;

public class ProgressBar_value_textEvent extends FlExtEvent {
  /**
   * Fires after each update interval
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.ProgressBar.html#event-update Original Ext JS documentation of 'update'
   * @see ext.ProgressBar
   * @eventType onUpdate
   * /
  public static const UPDATE:String = "onUpdate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProgressBar_value_textEvent.__PARAMETER_SEQUENCE__=( ["source", "value", "text", "eOpts"]);}/*;

  public*/ function ProgressBar_value_textEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$M3$_(type, arguments);
  }/*

  public native function get source():ProgressBar;

  /**
   * The current progress text
   * /
  public native function get text():String;

  /**
   * The current progress value
   * /
  public native function get value():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ProgressBar_value_textEvent$,
      super$M3$_: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        UPDATE: "onUpdate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
