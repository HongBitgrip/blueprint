Ext.define("ext.data.events.TreeStore_records_successful_operation_nodeEvent", function(TreeStore_records_successful_operation_nodeEvent) {/*package ext.data.events {
import ext.data.NodeInterface;
import ext.data.TreeStore;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_records_successful_operation_nodeEvent extends FlExtEvent {
  /**
   * Fires whenever the store reads data from a remote data source.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-load Original Ext JS documentation of 'load'
   * @see ext.data.TreeStore
   * @eventType onLoad
   * /
  public static const LOAD:String = "onLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_records_successful_operation_nodeEvent.__PARAMETER_SEQUENCE__=( ["source", "records", "successful", "operation", "node", "eOpts"]);}/*;

  public*/ function TreeStore_records_successful_operation_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$euVo(type, arguments);
  }/*

  /**
   * The node that was loaded.
   * /
  public native function get node():NodeInterface;

  /**
   * The operation that triggered this load.
   * /
  public native function get operation():Operation;

  [ArrayElementType("ext.data.TreeModel")]
  /**
   * An array of records.
   * /
  public native function get records():Array;

  public native function get source():TreeStore;

  /**
   * True if the operation was successful.
   * /
  public native function get successful():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_records_successful_operation_nodeEvent$,
      super$euVo: function() {
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
