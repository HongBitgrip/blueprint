Ext.define("ext.tree.events.TreePanel_node_isMoveEvent", function(TreePanel_node_isMoveEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_node_isMoveEvent extends FlExtEvent {
  /**
   * Fires before a child is removed, return false to cancel the remove.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeitemremove Original Ext JS documentation of 'beforeitemremove'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemRemove
   * /
  public static const BEFORE_ITEM_REMOVE:String = "onBeforeItemRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_node_isMoveEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "eOpts"]);}/*;

  public*/ function TreePanel_node_isMoveEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$oiBD(type, arguments);
  }/*

  /**
   * <code>true</code> if the child node is being removed so it can be moved to another position in the tree.
   * (a side effect of calling →<code>ext.data.NodeInterface.appendChild()</code> or
   * →<code>ext.data.NodeInterface.insertBefore()</code> with a node that already has a parentNode)
   * @see ext.data.NodeInterface#appendChild()
   * @see ext.data.NodeInterface#insertBefore()
   * /
  public native function get isMove():Boolean;

  /**
   * The child node to be removed
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
      constructor: TreePanel_node_isMoveEvent$,
      super$oiBD: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_REMOVE: "onBeforeItemRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
