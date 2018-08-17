Ext.define("ext.events.GlobalEvents_onlineEvent", function(GlobalEvents_onlineEvent) {/*package ext.events {
import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_onlineEvent extends FlExtEvent {
  /**
   * Fires when the online status of the page changes. See →<code>ext.Ext.isOnline()</code>
   * @since 6.2.1
   * @see ext.SExt#isOnline() ext.Ext.isOnline()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-onlinechange Original Ext JS documentation of 'onlinechange'
   * @see ext.SGlobalEvents
   * @eventType onOnlineChange
   * /
  public static const ONLINE_CHANGE:String = "onOnlineChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_onlineEvent.__PARAMETER_SEQUENCE__=( ["online", "eOpts"]);}/*;

  public*/ function GlobalEvents_onlineEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$iVvi(type, arguments);
  }/*

  /**
   * <code>true</code> if in an online state.
   * /
  public native function get online():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_onlineEvent$,
      super$iVvi: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ONLINE_CHANGE: "onOnlineChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
