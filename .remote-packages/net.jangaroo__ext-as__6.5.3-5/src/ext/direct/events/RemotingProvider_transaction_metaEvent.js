Ext.define("ext.direct.events.RemotingProvider_transaction_metaEvent", function(RemotingProvider_transaction_metaEvent) {/*package ext.direct.events {
import ext.direct.RemotingProvider;
import ext.direct.Transaction;

import net.jangaroo.ext.FlExtEvent;

public class RemotingProvider_transaction_metaEvent extends FlExtEvent {
  /**
   * Fires immediately before the client-side sends off the RPC call. By returning
   * <code>false</code> from an event handler you can prevent the call from being made.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.RemotingProvider.html#event-beforecall Original Ext JS documentation of 'beforecall'
   * @see ext.direct.RemotingProvider
   * @eventType onBeforeCall
   * /
  public static const BEFORE_CALL:String = "onBeforeCall";
  /**
   * Fires immediately after the request to the server-side is sent. This does
   * NOT fire after the response has come back from the call.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.RemotingProvider.html#event-call Original Ext JS documentation of 'call'
   * @see ext.direct.RemotingProvider
   * @eventType onCall
   * /
  public static const CALL:String = "onCall";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){RemotingProvider_transaction_metaEvent.__PARAMETER_SEQUENCE__=( ["provider", "transaction", "meta", "eOpts"]);}/*;

  public*/ function RemotingProvider_transaction_metaEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$yqy6(type, arguments);
  }/*

  /**
   * The meta data
   * /
  public native function get meta():Object;

  public native function get provider():RemotingProvider;

  public native function get transaction():Transaction;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: RemotingProvider_transaction_metaEvent$,
      super$yqy6: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CALL: "onBeforeCall",
        CALL: "onCall",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
