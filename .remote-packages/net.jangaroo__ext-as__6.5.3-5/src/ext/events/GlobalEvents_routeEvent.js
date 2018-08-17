Ext.define("ext.events.GlobalEvents_routeEvent", function(GlobalEvents_routeEvent) {/*package ext.events {
import ext.Base;

import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_routeEvent extends FlExtEvent {
  /**
   * Fires when a route was rejected from either a before action, →<code>ext.GlobalEvents.event:onBeforeRoutes</code> event
   * or →<code>ext.GlobalEvents.event:onBeforeRoute</code> event.
   * @see ext.SGlobalEvents#event:onBeforeRoutes ext.GlobalEvents.event:onBeforeRoutes
   * @see ext.SGlobalEvents#event:onBeforeRoute ext.GlobalEvents.event:onBeforeRoute
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-routereject Original Ext JS documentation of 'routereject'
   * @see ext.SGlobalEvents
   * @eventType onRouteReject
   * /
  public static const ROUTE_REJECT:String = "onRouteReject";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_routeEvent.__PARAMETER_SEQUENCE__=( ["route", "eOpts"]);}/*;

  public*/ function GlobalEvents_routeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$WRxC(type, arguments);
  }/*

  /**
   * The route which had it's execution rejected.
   * /
  public native function get route():Base;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_routeEvent$,
      super$WRxC: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ROUTE_REJECT: "onRouteReject",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
