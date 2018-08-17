Ext.define("ext.direct.events.ProviderEvent", function(ProviderEvent) {/*package ext.direct.events {
import ext.direct.Provider;

import net.jangaroo.ext.FlExtEvent;

public class ProviderEvent extends FlExtEvent {
  /**
   * Fires when the Provider connects to the server-side
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Provider.html#event-connect Original Ext JS documentation of 'connect'
   * @see ext.direct.Provider
   * @eventType onConnect
   * /
  public static const CONNECT:String = "onConnect";
  /**
   * Fires when the Provider disconnects from the server-side
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Provider.html#event-disconnect Original Ext JS documentation of 'disconnect'
   * @see ext.direct.Provider
   * @eventType onDisconnect
   * /
  public static const DISCONNECT:String = "onDisconnect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProviderEvent.__PARAMETER_SEQUENCE__=( ["provider", "eOpts"]);}/*;

  public*/ function ProviderEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$fWMC(type, arguments);
  }/*

  /**
   * The →<code>ext.direct.Provider</code>.
   * @see ext.direct.Provider
   * /
  public native function get provider():Provider;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ProviderEvent$,
      super$fWMC: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONNECT: "onConnect",
        DISCONNECT: "onDisconnect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
