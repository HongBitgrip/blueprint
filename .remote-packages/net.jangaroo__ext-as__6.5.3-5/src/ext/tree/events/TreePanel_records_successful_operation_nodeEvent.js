Ext.define("ext.tree.events.TreePanel_records_successful_operation_nodeEvent", function(TreePanel_records_successful_operation_nodeEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;
import ext.data.TreeStore;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_records_successful_operation_nodeEvent extends FlExtEvent {
  /**
   * Fires whenever the store reads data from a remote data source.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-load Original Ext JS documentation of 'load'
   * @see ext.tree.TreePanel
   * @eventType onLoad
   * /
  public static const LOAD:String = "onLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_records_successful_operation_nodeEvent.__PARAMETER_SEQUENCE__=( ["source", "records", "successful", "operation", "node", "eOpts"]);}/*;

  public*/ function TreePanel_records_successful_operation_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$25rZ(type, arguments);
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
      constructor: TreePanel_records_successful_operation_nodeEvent$,
      super$25rZ: function() {
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
