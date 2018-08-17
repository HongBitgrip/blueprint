Ext.define("ext.data.events.TreeStore_node_indexEvent", function(TreeStore_node_indexEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_node_indexEvent extends FlExtEvent {
  /**
   * Fires when a new child node is appended
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodeappend Original Ext JS documentation of 'nodeappend'
   * @see ext.data.TreeStore
   * @eventType onNodeAppend
   * /
  public static const NODE_APPEND:String = "onNodeAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_node_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "index", "eOpts"]);}/*;

  public*/ function TreeStore_node_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$UYth(type, arguments);
  }/*

  /**
   * The index of the newly appended node
   * /
  public native function get index():Number;

  /**
   * The newly appended node
   * /
  public native function get node():NodeInterface;

  /**
   * This node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_node_indexEvent$,
      super$UYth: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_APPEND: "onNodeAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
