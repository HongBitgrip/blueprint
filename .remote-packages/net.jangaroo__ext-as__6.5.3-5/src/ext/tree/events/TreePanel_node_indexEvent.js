Ext.define("ext.tree.events.TreePanel_node_indexEvent", function(TreePanel_node_indexEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_node_indexEvent extends FlExtEvent {
  /**
   * Fires when a new child node is appended
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-itemappend Original Ext JS documentation of 'itemappend'
   * @see ext.tree.TreePanel
   * @eventType onItemAppend
   * /
  public static const ITEM_APPEND:String = "onItemAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_node_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "index", "eOpts"]);}/*;

  public*/ function TreePanel_node_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$kcEQ(type, arguments);
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
      constructor: TreePanel_node_indexEvent$,
      super$kcEQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_APPEND: "onItemAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
