Ext.define("ext.data.events.TreeStore_node_refNodeEvent", function(TreeStore_node_refNodeEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_node_refNodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is inserted, return false to cancel the insert.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforeinsert Original Ext JS documentation of 'nodebeforeinsert'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeInsert
   * /
  public static const NODE_BEFORE_INSERT:String = "onNodeBeforeInsert";
  /**
   * Fires when a new child node is inserted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodeinsert Original Ext JS documentation of 'nodeinsert'
   * @see ext.data.TreeStore
   * @eventType onNodeInsert
   * /
  public static const NODE_INSERT:String = "onNodeInsert";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_node_refNodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "refNode", "eOpts"]);}/*;

  public*/ function TreeStore_node_refNodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$V8we(type, arguments);
  }/*

  /**
   * The child node to be inserted
   * /
  public native function get node():NodeInterface;

  /**
   * The child node the node is being inserted before
   * /
  public native function get refNode():NodeInterface;

  /**
   * This node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_node_refNodeEvent$,
      super$V8we: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_BEFORE_INSERT: "onNodeBeforeInsert",
        NODE_INSERT: "onNodeInsert",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
