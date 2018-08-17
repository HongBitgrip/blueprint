Ext.define("ext.events.GlobalEvents_route_actionEvent", function(GlobalEvents_route_actionEvent) {/*package ext.events {
import ext.Base;

import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_route_actionEvent extends FlExtEvent {
  /**
   * Fires when a route is about to be executed. This allows pre-processing to add additional
   * →<code>null.before()</code> or →<code>null.action()</code> handlers
   * when the →<code>null</code> is run.
   * <p>The route can be prevented from executing by returning <code>false</code> in a listener
   * or executing the →<code>null.stop()</code> method on the action.</p>
   * @see null#before()
   * @see null#action()
   * @see null
   * @see null#stop()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-beforeroute Original Ext JS documentation of 'beforeroute'
   * @see ext.SGlobalEvents
   * @eventType onBeforeRoute
   * /
  public static const BEFORE_ROUTE:String = "onBeforeRoute";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_route_actionEvent.__PARAMETER_SEQUENCE__=( ["route", "action", "eOpts"]);}/*;

  public*/ function GlobalEvents_route_actionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ItUp(type, arguments);
  }/*

  /**
   * The action that will be run.
   * /
  public native function get action():Base;

  /**
   * The route being executed.
   * /
  public native function get route():Base;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_route_actionEvent$,
      super$ItUp: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ROUTE: "onBeforeRoute",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
