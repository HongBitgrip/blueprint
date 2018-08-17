Ext.define("ext.direct.events.DirectManager_url_errorEvent", function(DirectManager_url_errorEvent) {/*package ext.direct.events {
import net.jangaroo.ext.FlExtEvent;

public class DirectManager_url_errorEvent extends FlExtEvent {
  /**
   * Fired by →<code>loadProvider()</code> when remoting API could not be loaded, or
   * Provider instance could not be created.
   * @see ext.direct.SDirectManager#loadProvider()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Manager.html#event-providerloaderror Original Ext JS documentation of 'providerloaderror'
   * @see ext.direct.SDirectManager
   * @eventType onProviderLoadError
   * /
  public static const PROVIDER_LOAD_ERROR:String = "onProviderLoadError";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DirectManager_url_errorEvent.__PARAMETER_SEQUENCE__=( ["url", "error", "eOpts"]);}/*;

  public*/ function DirectManager_url_errorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$nz_Q(type, arguments);
  }/*

  /**
   * The error that occured.
   * /
  public native function get error():String;

  /**
   * The URL used to retrieve remoting API.
   * /
  public native function get url():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DirectManager_url_errorEvent$,
      super$nz_Q: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROVIDER_LOAD_ERROR: "onProviderLoadError",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
