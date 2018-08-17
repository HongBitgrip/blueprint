Ext.define("ext.resizer.events.Resizer_width_height_eEvent", function(Resizer_width_height_eEvent) {/*package ext.resizer.events {
import ext.event.Event;
import ext.resizer.Resizer;

import net.jangaroo.ext.FlExtEvent;

public class Resizer_width_height_eEvent extends FlExtEvent {
  /**
   * Fired before resize is allowed. Return false to cancel resize.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.resizer.Resizer.html#event-beforeresize Original Ext JS documentation of 'beforeresize'
   * @see ext.resizer.Resizer
   * @eventType onBeforeResize
   * /
  public static const BEFORE_RESIZE:String = "onBeforeResize";
  /**
   * Fired after a resize.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.resizer.Resizer.html#event-resize Original Ext JS documentation of 'resize'
   * @see ext.resizer.Resizer
   * @eventType onResize
   * /
  public static const RESIZE:String = "onResize";
  /**
   * Fires during resizing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.resizer.Resizer.html#event-resizedrag Original Ext JS documentation of 'resizedrag'
   * @see ext.resizer.Resizer
   * @eventType onResizeDrag
   * /
  public static const RESIZE_DRAG:String = "onResizeDrag";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Resizer_width_height_eEvent.__PARAMETER_SEQUENCE__=( ["source", "width", "height", "e", "eOpts"]);}/*;

  public*/ function Resizer_width_height_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$mWKx(type, arguments);
  }/*

  /**
   * The mousedown event
   * /
  public native function get e():Event;

  /**
   * The start height
   * /
  public native function get height():Number;

  public native function get source():Resizer;

  /**
   * The start width
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Resizer_width_height_eEvent$,
      super$mWKx: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_RESIZE: "onBeforeResize",
        RESIZE: "onResize",
        RESIZE_DRAG: "onResizeDrag",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
