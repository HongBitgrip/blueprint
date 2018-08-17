Ext.define("ext.data.events.Connection_optionsEvent", function(Connection_optionsEvent) {/*package ext.data.events {
import ext.data.Connection;

import net.jangaroo.ext.FlExtEvent;

public class Connection_optionsEvent extends FlExtEvent {
  /**
   * Fires before a network request is made to retrieve a data object.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Connection.html#event-beforerequest Original Ext JS documentation of 'beforerequest'
   * @see ext.data.Connection
   * @eventType onBeforeRequest
   * /
  public static const BEFORE_REQUEST:String = "onBeforeRequest";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Connection_optionsEvent.__PARAMETER_SEQUENCE__=( ["conn", "options", "eOpts"]);}/*;

  public*/ function Connection_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$m67V(type, arguments);
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
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Connection_optionsEvent$,
      super$m67V: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_REQUEST: "onBeforeRequest",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
