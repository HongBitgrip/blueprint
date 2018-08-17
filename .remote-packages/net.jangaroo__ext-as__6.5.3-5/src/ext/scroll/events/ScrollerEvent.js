Ext.define("ext.scroll.events.ScrollerEvent", function(ScrollerEvent) {/*package ext.scroll.events {
import ext.scroll.Scroller;

import net.jangaroo.ext.FlExtEvent;

public class ScrollerEvent extends FlExtEvent {
  /**
   * Fires whenever the Scroller is refreshed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.scroll.Scroller.html#event-refresh Original Ext JS documentation of 'refresh'
   * @see ext.scroll.Scroller
   * @eventType onRefresh
   * /
  public static const REFRESH:String = "onRefresh";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ScrollerEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function ScrollerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$aKX$(type, arguments);
  }/*

  public native function get source():Scroller;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ScrollerEvent$,
      super$aKX$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REFRESH: "onRefresh",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
