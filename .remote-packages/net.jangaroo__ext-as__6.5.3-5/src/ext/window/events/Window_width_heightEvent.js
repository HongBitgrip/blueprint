Ext.define("ext.window.events.Window_width_heightEvent", function(Window_width_heightEvent) {/*package ext.window.events {
import ext.window.Window;

import net.jangaroo.ext.FlExtEvent;

public class Window_width_heightEvent extends FlExtEvent {
  /**
   * Fires after the window has been resized.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-resize Original Ext JS documentation of 'resize'
   * @see ext.window.Window
   * @eventType onResize
   * /
  public static const RESIZE:String = "onResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Window_width_heightEvent.__PARAMETER_SEQUENCE__=( ["source", "width", "height", "eOpts"]);}/*;

  public*/ function Window_width_heightEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8Ull(type, arguments);
  }/*

  /**
   * The window's new height
   * /
  public native function get height():Number;

  public native function get source():Window;

  /**
   * The window's new width
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Window_width_heightEvent$,
      super$8Ull: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        RESIZE: "onResize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
