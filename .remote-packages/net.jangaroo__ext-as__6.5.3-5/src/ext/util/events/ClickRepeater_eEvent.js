Ext.define("ext.util.events.ClickRepeater_eEvent", function(ClickRepeater_eEvent) {/*package ext.util.events {
import ext.event.Event;
import ext.util.ClickRepeater;

import net.jangaroo.ext.FlExtEvent;

public class ClickRepeater_eEvent extends FlExtEvent {
  /**
   * Fires on a specified interval during the time the element is pressed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.ClickRepeater.html#event-click Original Ext JS documentation of 'click'
   * @see ext.util.ClickRepeater
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  /**
   * Fires when the mouse button is depressed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.ClickRepeater.html#event-mousedown Original Ext JS documentation of 'mousedown'
   * @see ext.util.ClickRepeater
   * @eventType onMouseDown
   * /
  public static const MOUSE_DOWN:String = "onMouseDown";
  /**
   * Fires when the mouse key is released.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.ClickRepeater.html#event-mouseup Original Ext JS documentation of 'mouseup'
   * @see ext.util.ClickRepeater
   * @eventType onMouseUp
   * /
  public static const MOUSE_UP:String = "onMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ClickRepeater_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function ClickRepeater_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$AViw(type, arguments);
  }/*

  public native function get e():Event;

  public native function get source():ClickRepeater;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ClickRepeater_eEvent$,
      super$AViw: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        MOUSE_DOWN: "onMouseDown",
        MOUSE_UP: "onMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
