Ext.define("ext.util.events.HistoryEvent", function(HistoryEvent) {/*package ext.util.events {
import ext.util.SHistory;

import net.jangaroo.ext.FlExtEvent;

public class HistoryEvent extends FlExtEvent {
  /**
   * Fires when the Ext.util.History singleton has been initialized and is ready for use.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.History.html#event-ready Original Ext JS documentation of 'ready'
   * @see ext.util.SHistory
   * @eventType onReady
   * /
  public static const READY:String = "onReady";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HistoryEvent.__PARAMETER_SEQUENCE__=( ["history", "eOpts"]);}/*;

  public*/ function HistoryEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SEny(type, arguments);
  }/*

  /**
   * The Ext.util.History singleton.
   * /
  public native function get history():SHistory;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HistoryEvent$,
      super$SEny: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        READY: "onReady",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
