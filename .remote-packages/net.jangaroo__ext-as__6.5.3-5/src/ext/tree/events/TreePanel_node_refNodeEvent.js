Ext.define("ext.tree.events.TreePanel_node_refNodeEvent", function(TreePanel_node_refNodeEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_node_refNodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is inserted, return false to cancel the insert.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeiteminsert Original Ext JS documentation of 'beforeiteminsert'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemInsert
   * /
  public static const BEFORE_ITEM_INSERT:String = "onBeforeItemInsert";
  /**
   * Fires when a new child node is inserted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-iteminsert Original Ext JS documentation of 'iteminsert'
   * @see ext.tree.TreePanel
   * @eventType onItemInsert
   * /
  public static const ITEM_INSERT:String = "onItemInsert";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_node_refNodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "refNode", "eOpts"]);}/*;

  public*/ function TreePanel_node_refNodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$XXIN(type, arguments);
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
      constructor: TreePanel_node_refNodeEvent$,
      super$XXIN: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_INSERT: "onBeforeItemInsert",
        ITEM_INSERT: "onItemInsert",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
