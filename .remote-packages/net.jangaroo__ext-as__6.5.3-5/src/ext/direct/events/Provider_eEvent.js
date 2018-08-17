Ext.define("ext.direct.events.Provider_eEvent", function(Provider_eEvent) {/*package ext.direct.events {
import ext.direct.DirectEvent;
import ext.direct.Provider;

import net.jangaroo.ext.FlExtEvent;

public class Provider_eEvent extends FlExtEvent {
  /**
   * Fires when the Provider receives data from the server-side. This event is fired
   * for valid responses as well as for exceptions.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Provider.html#event-data Original Ext JS documentation of 'data'
   * @see ext.direct.Provider
   * @eventType onData
   * /
  public static const DATA:String = "onData";
  /**
   * Fires when the Provider receives an exception from the server-side. This event is <i>not</i>
   * fired for valid responses.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Provider.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.direct.Provider
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Provider_eEvent.__PARAMETER_SEQUENCE__=( ["provider", "e", "eOpts"]);}/*;

  public*/ function Provider_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$slpc(type, arguments);
  }/*

  /**
   * The →<code>ext.direct.DirectEvent</code> that occurred.
   * @see ext.direct.DirectEvent
   * /
  public native function get e():DirectEvent;

  /**
   * The →<code>ext.direct.Provider</code> instance.
   * @see ext.direct.Provider
   * /
  public native function get provider():Provider;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Provider_eEvent$,
      super$slpc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DATA: "onData",
        EXCEPTION: "onException",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
