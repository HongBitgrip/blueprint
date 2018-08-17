Ext.define("ext.button.events.SplitButton_eEvent", function(SplitButton_eEvent) {/*package ext.button.events {
import ext.button.SplitButton;

import js.Event;

import net.jangaroo.ext.FlExtEvent;

public class SplitButton_eEvent extends FlExtEvent {
  /**
   * Fires when this button's arrow is clicked.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Split.html#event-arrowclick Original Ext JS documentation of 'arrowclick'
   * @see ext.button.SplitButton
   * @eventType onArrowClick
   * /
  public static const ARROW_CLICK:String = "onArrowClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SplitButton_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function SplitButton_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ipzk(type, arguments);
  }/*

  /**
   * The click event.
   * /
  public native function get e():Event;

  public native function get source():SplitButton;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SplitButton_eEvent$,
      super$ipzk: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ARROW_CLICK: "onArrowClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
