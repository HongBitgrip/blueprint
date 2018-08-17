Ext.define("ext.events.GlobalEvents_width_heightEvent", function(GlobalEvents_width_heightEvent) {/*package ext.events {
import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_width_heightEvent extends FlExtEvent {
  /**
   * Fires when the browser window is resized. To avoid running resize handlers
   * too often resulting in sluggish window resizing, the resize event uses a buffer
   * of 100 milliseconds in the Classic toolkit, and fires on animation frame
   * in the Modern toolkit.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-resize Original Ext JS documentation of 'resize'
   * @see ext.SGlobalEvents
   * @eventType onResize
   * /
  public static const RESIZE:String = "onResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_width_heightEvent.__PARAMETER_SEQUENCE__=( ["width", "height", "eOpts"]);}/*;

  public*/ function GlobalEvents_width_heightEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$EhjV(type, arguments);
  }/*

  /**
   * The new height
   * /
  public native function get height():Number;

  /**
   * The new width
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_width_heightEvent$,
      super$EhjV: function() {
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
