Ext.define("ext.scroll.events.Scroller_x_y_deltaX_deltaYEvent", function(Scroller_x_y_deltaX_deltaYEvent) {/*package ext.scroll.events {
import ext.scroll.Scroller;

import net.jangaroo.ext.FlExtEvent;

public class Scroller_x_y_deltaX_deltaYEvent extends FlExtEvent {
  /**
   * Fires whenever the Scroller is scrolled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.scroll.Scroller.html#event-scroll Original Ext JS documentation of 'scroll'
   * @see ext.scroll.Scroller
   * @eventType onScroll
   * /
  public static const SCROLL:String = "onScroll";
  /**
   * Fires whenever the scrolling is ended.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.scroll.Scroller.html#event-scrollend Original Ext JS documentation of 'scrollend'
   * @see ext.scroll.Scroller
   * @eventType onScrollEnd
   * /
  public static const SCROLL_END:String = "onScrollEnd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Scroller_x_y_deltaX_deltaYEvent.__PARAMETER_SEQUENCE__=( ["source", "x", "y", "deltaX", "deltaY", "eOpts"]);}/*;

  public*/ function Scroller_x_y_deltaX_deltaYEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$6yeh(type, arguments);
  }/*

  /**
   * The change in x value.
   * /
  public native function get deltaX():Number;

  /**
   * The change in y value.
   * /
  public native function get deltaY():Number;

  public native function get source():Scroller;

  /**
   * The new x position.
   * /
  public native function get x():Number;

  /**
   * The new y position.
   * /
  public native function get y():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Scroller_x_y_deltaX_deltaYEvent$,
      super$6yeh: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SCROLL: "onScroll",
        SCROLL_END: "onScrollEnd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
