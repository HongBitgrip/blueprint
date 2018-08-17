Ext.define("ext.dd.events.DragTracker_e_targetEvent", function(DragTracker_e_targetEvent) {/*package ext.dd.events {
import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class DragTracker_e_targetEvent extends FlExtEvent {
  /**
   * Fires when the mouse enters the DragTracker's target element (or if →<code>delegate</code> is
   * used, when the mouse enters a delegate element).
   * <p><b>Only available when →<code>trackOver</code> is <code>true</code></b></p>
   * @see ext.dd.DragTracker#delegate
   * @see ext.dd.DragTracker#trackOver
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-mouseover Original Ext JS documentation of 'mouseover'
   * @see ext.dd.DragTracker
   * @eventType onMouseOver
   * /
  public static const MOUSE_OVER:String = "onMouseOver";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DragTracker_e_targetEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "target", "eOpts"]);}/*;

  public*/ function DragTracker_e_targetEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$BFB0(type, arguments);
  }/*

  /**
   * event object
   * /
  public native function get e():Object;

  public native function get source():Object;

  /**
   * The element mouseovered.
   * /
  public native function get target():HTMLElement;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DragTracker_e_targetEvent$,
      super$BFB0: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MOUSE_OVER: "onMouseOver",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
