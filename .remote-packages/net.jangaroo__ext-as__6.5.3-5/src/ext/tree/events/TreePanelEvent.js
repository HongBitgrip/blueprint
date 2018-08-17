Ext.define("ext.tree.events.TreePanelEvent", function(TreePanelEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanelEvent extends FlExtEvent {
  /**
   * Fires before this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeitemcollapse Original Ext JS documentation of 'beforeitemcollapse'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemCollapse
   * /
  public static const BEFORE_ITEM_COLLAPSE:String = "onBeforeItemCollapse";
  /**
   * Fires before this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeitemexpand Original Ext JS documentation of 'beforeitemexpand'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemExpand
   * /
  public static const BEFORE_ITEM_EXPAND:String = "onBeforeItemExpand";
  /**
   * Fires when this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-itemcollapse Original Ext JS documentation of 'itemcollapse'
   * @see ext.tree.TreePanel
   * @eventType onItemCollapse
   * /
  public static const ITEM_COLLAPSE:String = "onItemCollapse";
  /**
   * Fires when this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-itemexpand Original Ext JS documentation of 'itemexpand'
   * @see ext.tree.TreePanel
   * @eventType onItemExpand
   * /
  public static const ITEM_EXPAND:String = "onItemExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanelEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function TreePanelEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$2WXc(type, arguments);
  }/*

  /**
   * The collapsing node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreePanelEvent$,
      super$2WXc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_COLLAPSE: "onBeforeItemCollapse",
        BEFORE_ITEM_EXPAND: "onBeforeItemExpand",
        ITEM_COLLAPSE: "onItemCollapse",
        ITEM_EXPAND: "onItemExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
