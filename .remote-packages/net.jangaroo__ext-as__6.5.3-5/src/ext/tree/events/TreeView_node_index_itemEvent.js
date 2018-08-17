Ext.define("ext.tree.events.TreeView_node_index_itemEvent", function(TreeView_node_index_itemEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TreeView_node_index_itemEvent extends FlExtEvent {
  /**
   * Fires after an item has been visually collapsed and is no longer visible in the tree.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.View.html#event-afteritemcollapse Original Ext JS documentation of 'afteritemcollapse'
   * @see ext.tree.TreeView
   * @eventType onAfterItemCollapse
   * /
  public static const AFTER_ITEM_COLLAPSE:String = "onAfterItemCollapse";
  /**
   * Fires after an item has been visually expanded and is visible in the tree.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.View.html#event-afteritemexpand Original Ext JS documentation of 'afteritemexpand'
   * @see ext.tree.TreeView
   * @eventType onAfterItemExpand
   * /
  public static const AFTER_ITEM_EXPAND:String = "onAfterItemExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeView_node_index_itemEvent.__PARAMETER_SEQUENCE__=( ["node", "index", "item", "eOpts"]);}/*;

  public*/ function TreeView_node_index_itemEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Zct7(type, arguments);
  }/*

  /**
   * The index of the node
   * /
  public native function get index():Number;

  /**
   * The HTML element for the node that was collapsed
   * /
  public native function get item():HTMLElement;

  /**
   * The node that was collapsed
   * /
  public native function get node():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeView_node_index_itemEvent$,
      super$Zct7: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        AFTER_ITEM_COLLAPSE: "onAfterItemCollapse",
        AFTER_ITEM_EXPAND: "onAfterItemExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
