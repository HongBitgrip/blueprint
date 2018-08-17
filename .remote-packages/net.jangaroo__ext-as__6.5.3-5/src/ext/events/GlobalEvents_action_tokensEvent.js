Ext.define("ext.events.GlobalEvents_action_tokensEvent", function(GlobalEvents_action_tokensEvent) {/*package ext.events {
import ext.Base;

import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_action_tokensEvent extends FlExtEvent {
  /**
   * Fires when the hash has changed and before any routes are executed. This allows
   * pre-processing to add additional →<code>null.before()</code> or
   * →<code>null.action()</code> handlers when the
   * →<code>null</code> is run.
   * <p>Route execution can be prevented by returning <code>false</code> in the listener
   * or executing the →<code>null.stop()</code> method on the action.</p>
   * @see null#before()
   * @see null#action()
   * @see null
   * @see null#stop()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-beforeroutes Original Ext JS documentation of 'beforeroutes'
   * @see ext.SGlobalEvents
   * @eventType onBeforeRoutes
   * /
  public static const BEFORE_ROUTES:String = "onBeforeRoutes";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_action_tokensEvent.__PARAMETER_SEQUENCE__=( ["action", "tokens", "eOpts"]);}/*;

  public*/ function GlobalEvents_action_tokensEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$msQI(type, arguments);
  }/*

  /**
   * An action that will be executed
   * prior to any route execution.
   * /
  public native function get action():Base;

  [ArrayElementType("String")]
  /**
   * An array of individual tokens in the hash.
   * /
  public native function get tokens():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_action_tokensEvent$,
      super$msQI: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ROUTES: "onBeforeRoutes",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
