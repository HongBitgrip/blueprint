Ext.define("ext.data.events.ProxyStore_records_successful_operationEvent", function(ProxyStore_records_successful_operationEvent) {/*package ext.data.events {
import ext.data.Store;
import ext.data.operation.ReadOperation;

import net.jangaroo.ext.FlExtEvent;

public class ProxyStore_records_successful_operationEvent extends FlExtEvent {
  /**
   * Fires whenever the store reads data from a remote data source.
   * <p><b>Note:</b> If you are using a buffered store, you should use
   * →<code>ext.data.Store.event:onPrefetch</code>.</p>
   * @since 1.1.0
   * @see ext.data.Store#event:onPrefetch
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.ProxyStore.html#event-load Original Ext JS documentation of 'load'
   * @see ext.data.ProxyStore
   * @eventType onLoad
   * /
  public static const LOAD:String = "onLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProxyStore_records_successful_operationEvent.__PARAMETER_SEQUENCE__=( ["source", "records", "successful", "operation", "eOpts"]);}/*;

  public*/ function ProxyStore_records_successful_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5KMD(type, arguments);
  }/*

  /**
   * The
   * <i>Operation</i> (→<code>ext.data.operation.ReadOperation</code>) object that was used in the data
   * load call
   * @see ext.data.operation.ReadOperation
   * /
  public native function get operation():ReadOperation;

  [ArrayElementType("ext.data.Model")]
  /**
   * An array of records
   * /
  public native function get records():Array;

  public native function get source():Store;

  /**
   * True if the operation was successful.
   * /
  public native function get successful():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ProxyStore_records_successful_operationEvent$,
      super$5KMD: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        LOAD: "onLoad",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
