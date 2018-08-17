Ext.define("ext.data.events.Store_records_successful_operationEvent", function(Store_records_successful_operationEvent) {/*package ext.data.events {
import ext.data.Store;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class Store_records_successful_operationEvent extends FlExtEvent {
  /**
   * Fires whenever records have been prefetched.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Store.html#event-prefetch Original Ext JS documentation of 'prefetch'
   * @see ext.data.Store
   * @eventType onPrefetch
   * /
  public static const PREFETCH:String = "onPrefetch";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Store_records_successful_operationEvent.__PARAMETER_SEQUENCE__=( ["source", "records", "successful", "operation", "eOpts"]);}/*;

  public*/ function Store_records_successful_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$GIsV(type, arguments);
  }/*

  /**
   * The associated operation.
   * /
  public native function get operation():Operation;

  [ArrayElementType("ext.data.Model")]
  /**
   * An array of records.
   * /
  public native function get records():Array;

  public native function get source():Store;

  /**
   * <code>true</code> if the operation was successful.
   * /
  public native function get successful():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Store_records_successful_operationEvent$,
      super$GIsV: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PREFETCH: "onPrefetch",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
