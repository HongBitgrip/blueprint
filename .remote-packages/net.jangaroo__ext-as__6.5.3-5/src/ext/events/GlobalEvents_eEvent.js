Ext.define("ext.events.GlobalEvents_eEvent", function(GlobalEvents_eEvent) {/*package ext.events {
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_eEvent extends FlExtEvent {
  /**
   * A mousedown listener on the document that is immune to stopPropagation()
   * used in cases where we need to know if a mousedown event occurred on the
   * document regardless of whether some other handler tried to stop it. An
   * example where this is useful is a menu that needs to be hidden whenever
   * there is a mousedown event on the document.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-mousedown Original Ext JS documentation of 'mousedown'
   * @see ext.SGlobalEvents
   * @eventType onMouseDown
   * /
  public static const MOUSE_DOWN:String = "onMouseDown";
  /**
   * A mouseup listener on the document that is immune to stopPropagation()
   * used in cases where we need to know if a mouseup event occurred on the
   * document regardless of whether some other handler tried to stop it. An
   * example where this is useful is a component which enters a "pressed" state
   * upon mousedown, and needs to exit that state even if the mouse exits
   * before being released.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-mouseup Original Ext JS documentation of 'mouseup'
   * @see ext.SGlobalEvents
   * @eventType onMouseUp
   * /
  public static const MOUSE_UP:String = "onMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_eEvent.__PARAMETER_SEQUENCE__=( ["e", "eOpts"]);}/*;

  public*/ function GlobalEvents_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$7fUm(type, arguments);
  }/*

  /**
   * The event object
   * /
  public native function get e():Event;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_eEvent$,
      super$7fUm: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
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
