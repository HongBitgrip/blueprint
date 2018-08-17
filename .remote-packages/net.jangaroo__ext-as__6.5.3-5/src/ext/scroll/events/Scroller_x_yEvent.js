Ext.define("ext.scroll.events.Scroller_x_yEvent", function(Scroller_x_yEvent) {/*package ext.scroll.events {
import ext.scroll.Scroller;

import net.jangaroo.ext.FlExtEvent;

public class Scroller_x_yEvent extends FlExtEvent {
  /**
   * Fires whenever the scrolling is started.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.scroll.Scroller.html#event-scrollstart Original Ext JS documentation of 'scrollstart'
   * @see ext.scroll.Scroller
   * @eventType onScrollStart
   * /
  public static const SCROLL_START:String = "onScrollStart";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Scroller_x_yEvent.__PARAMETER_SEQUENCE__=( ["source", "x", "y", "eOpts"]);}/*;

  public*/ function Scroller_x_yEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$OLWi(type, arguments);
  }/*

  public native function get source():Scroller;

  /**
   * The current x position.
   * /
  public native function get x():Number;

  /**
   * The current y position.
   * /
  public native function get y():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Scroller_x_yEvent$,
      super$OLWi: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SCROLL_START: "onScrollStart",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
