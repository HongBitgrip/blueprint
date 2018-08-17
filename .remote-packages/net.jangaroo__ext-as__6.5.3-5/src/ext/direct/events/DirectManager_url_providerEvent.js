Ext.define("ext.direct.events.DirectManager_url_providerEvent", function(DirectManager_url_providerEvent) {/*package ext.direct.events {
import ext.direct.Provider;

import net.jangaroo.ext.FlExtEvent;

public class DirectManager_url_providerEvent extends FlExtEvent {
  /**
   * Fired by →<code>loadProvider()</code> after successfully loading RemotingProvider API
   * declaration and creating a new Provider instance.
   * @see ext.direct.SDirectManager#loadProvider()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Manager.html#event-providerload Original Ext JS documentation of 'providerload'
   * @see ext.direct.SDirectManager
   * @eventType onProviderLoad
   * /
  public static const PROVIDER_LOAD:String = "onProviderLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DirectManager_url_providerEvent.__PARAMETER_SEQUENCE__=( ["url", "provider", "eOpts"]);}/*;

  public*/ function DirectManager_url_providerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$zL01(type, arguments);
  }/*

  /**
   * The →<code>ext.direct.Provider</code>
   * instance that was created.
   * @see ext.direct.Provider
   * /
  public native function get provider():Provider;

  /**
   * The URL used to retrieve remoting API.
   * /
  public native function get url():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DirectManager_url_providerEvent$,
      super$zL01: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROVIDER_LOAD: "onProviderLoad",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
