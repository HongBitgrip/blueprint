Ext.define("ext.data.proxy.events.DataProxy_metaEvent", function(DataProxy_metaEvent) {/*package ext.data.proxy.events {
import ext.data.proxy.DataProxy;

import net.jangaroo.ext.FlExtEvent;

public class DataProxy_metaEvent extends FlExtEvent {
  /**
   * Fires when this proxy's reader provides new metadata. Metadata usually consists
   * of new field definitions, but can include any configuration data required by an
   * application, and can be processed as needed in the event handler.
   * This event is currently only fired for JsonReaders. Note that this event is also
   * propagated by →<code>ext.data.Store</code>, which is typically where it would be handled.
   * @see ext.data.Store
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.proxy.Proxy.html#event-metachange Original Ext JS documentation of 'metachange'
   * @see ext.data.proxy.DataProxy
   * @eventType onMetaChange
   * /
  public static const META_CHANGE:String = "onMetaChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataProxy_metaEvent.__PARAMETER_SEQUENCE__=( ["source", "meta", "eOpts"]);}/*;

  public*/ function DataProxy_metaEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$BuYy(type, arguments);
  }/*

  /**
   * The JSON metadata
   * /
  public native function get meta():Object;

  public native function get source():DataProxy;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataProxy_metaEvent$,
      super$BuYy: function() {
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
