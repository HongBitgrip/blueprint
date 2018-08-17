Ext.define("ext.direct.events.RemotingProvider_event_transactionEvent", function(RemotingProvider_event_transactionEvent) {/*package ext.direct.events {
import ext.direct.DirectEvent;
import ext.direct.RemotingProvider;
import ext.direct.Transaction;

import net.jangaroo.ext.FlExtEvent;

public class RemotingProvider_event_transactionEvent extends FlExtEvent {
  /**
   * Fires before callback function is executed. By returning <code>false</code> from an event handler
   * you can prevent the callback from executing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.RemotingProvider.html#event-beforecallback Original Ext JS documentation of 'beforecallback'
   * @see ext.direct.RemotingProvider
   * @eventType onBeforeCallback
   * /
  public static const BEFORE_CALLBACK:String = "onBeforeCallback";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){RemotingProvider_event_transactionEvent.__PARAMETER_SEQUENCE__=( ["provider", "event", "transaction", "eOpts"]);}/*;

  public*/ function RemotingProvider_event_transactionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xLmF(type, arguments);
  }/*

  /**
   * Event associated with the callback invocation
   * /
  public native function get event():DirectEvent;

  /**
   * The provider instance
   * /
  public native function get provider():RemotingProvider;

  /**
   * Transaction for which the callback
   * is about to be fired
   * /
  public native function get transaction():Transaction;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: RemotingProvider_event_transactionEvent$,
      super$xLmF: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CALLBACK: "onBeforeCallback",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
