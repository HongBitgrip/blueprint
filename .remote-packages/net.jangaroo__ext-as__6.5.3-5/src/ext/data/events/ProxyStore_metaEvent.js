Ext.define("ext.data.events.ProxyStore_metaEvent", function(ProxyStore_metaEvent) {/*package ext.data.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class ProxyStore_metaEvent extends FlExtEvent {
  /**
   * Fires when this store's underlying reader (available via the proxy) provides new metadata.
   * Metadata usually consists of new field definitions, but can include any configuration data
   * required by an application, and can be processed as needed in the event handler.
   * This event is currently only fired for JsonReaders.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.ProxyStore.html#event-metachange Original Ext JS documentation of 'metachange'
   * @see ext.data.ProxyStore
   * @eventType onMetaChange
   * /
  public static const META_CHANGE:String = "onMetaChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProxyStore_metaEvent.__PARAMETER_SEQUENCE__=( ["source", "meta", "eOpts"]);}/*;

  public*/ function ProxyStore_metaEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$umad(type, arguments);
  }/*

  /**
   * The JSON metadata
   * /
  public native function get meta():Object;

  public native function get source():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ProxyStore_metaEvent$,
      super$umad: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        META_CHANGE: "onMetaChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
