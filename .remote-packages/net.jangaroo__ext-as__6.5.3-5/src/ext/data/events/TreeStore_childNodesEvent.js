Ext.define("ext.data.events.TreeStore_childNodesEvent", function(TreeStore_childNodesEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_childNodesEvent extends FlExtEvent {
  /**
   * Fires when this node's childNodes are sorted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodesort Original Ext JS documentation of 'nodesort'
   * @see ext.data.TreeStore
   * @eventType onNodeSort
   * /
  public static const NODE_SORT:String = "onNodeSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_childNodesEvent.__PARAMETER_SEQUENCE__=( ["source", "childNodes", "eOpts"]);}/*;

  public*/ function TreeStore_childNodesEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$suDB(type, arguments);
  }/*

  [ArrayElementType("ext.data.NodeInterface")]
  /**
   * The childNodes of this node.
   * /
  public native function get childNodes():Array;

  /**
   * This node.
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_childNodesEvent$,
      super$suDB: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_SORT: "onNodeSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
