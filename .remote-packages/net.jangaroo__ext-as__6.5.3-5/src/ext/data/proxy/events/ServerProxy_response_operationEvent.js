Ext.define("ext.data.proxy.events.ServerProxy_response_operationEvent", function(ServerProxy_response_operationEvent) {/*package ext.data.proxy.events {
import ext.data.operation.Operation;
import ext.data.proxy.DataProxy;

import net.jangaroo.ext.FlExtEvent;

public class ServerProxy_response_operationEvent extends FlExtEvent {
  /**
   * Fires when the server returns an exception. This event may also be listened
   * to in the event that a request has timed out or has been aborted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.proxy.Server.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.data.proxy.ServerProxy
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ServerProxy_response_operationEvent.__PARAMETER_SEQUENCE__=( ["source", "response", "operation", "eOpts"]);}/*;

  public*/ function ServerProxy_response_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gQ2V(type, arguments);
  }/*

  /**
   * The operation that triggered the request
   * /
  public native function get operation():Operation;

  /**
   * The response that was received
   * /
  public native function get response():Object;

  public native function get source():DataProxy;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ServerProxy_response_operationEvent$,
      super$gQ2V: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        EXCEPTION: "onException",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
