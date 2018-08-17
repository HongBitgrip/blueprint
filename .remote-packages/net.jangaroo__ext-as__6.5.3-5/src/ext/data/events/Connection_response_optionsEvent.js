Ext.define("ext.data.events.Connection_response_optionsEvent", function(Connection_response_optionsEvent) {/*package ext.data.events {
import ext.data.Connection;

import net.jangaroo.ext.FlExtEvent;

public class Connection_response_optionsEvent extends FlExtEvent {
  /**
   * Fires if the request was successfully completed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Connection.html#event-requestcomplete Original Ext JS documentation of 'requestcomplete'
   * @see ext.data.Connection
   * @eventType onRequestComplete
   * /
  public static const REQUEST_COMPLETE:String = "onRequestComplete";
  /**
   * Fires if an error HTTP status was returned from the server. This event may also
   * be listened to in the event that a request has timed out or has been aborted.
   * See <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">HTTP Status Code Definitions</a>
   * for details of HTTP status codes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Connection.html#event-requestexception Original Ext JS documentation of 'requestexception'
   * @see ext.data.Connection
   * @eventType onRequestException
   * /
  public static const REQUEST_EXCEPTION:String = "onRequestException";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Connection_response_optionsEvent.__PARAMETER_SEQUENCE__=( ["conn", "response", "options", "eOpts"]);}/*;

  public*/ function Connection_response_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$pttt(type, arguments);
  }/*

  /**
   * This Connection object.
   * /
  public native function get conn():Connection;

  /**
   * The options config object passed to the →<code>request()</code> method.
   * @see ext.data.Connection#request()
   * /
  public native function get options():Object;

  /**
   * The XHR object containing the response data.
   * See <a href="http://www.w3.org/TR/XMLHttpRequest/">The XMLHttpRequest Object</a> for details.
   * /
  public native function get response():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Connection_response_optionsEvent$,
      super$pttt: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REQUEST_COMPLETE: "onRequestComplete",
        REQUEST_EXCEPTION: "onRequestException",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
