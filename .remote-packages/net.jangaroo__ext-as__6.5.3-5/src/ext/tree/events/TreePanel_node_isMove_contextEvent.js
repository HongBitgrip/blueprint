Ext.define("ext.tree.events.TreePanel_node_isMove_contextEvent", function(TreePanel_node_isMove_contextEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_node_isMove_contextEvent extends FlExtEvent {
  /**
   * Fires when a child node is removed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-itemremove Original Ext JS documentation of 'itemremove'
   * @see ext.tree.TreePanel
   * @eventType onItemRemove
   * /
  public static const ITEM_REMOVE:String = "onItemRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_node_isMove_contextEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "context", "eOpts"]);}/*;

  public*/ function TreePanel_node_isMove_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$V2bT(type, arguments);
  }/*

  /**
   * An object providing information about where the removed node came from. It contains the following properties:
   * <ul>
   * <li><code>parentNode:ext.data.NodeInterface</code> (optional) —
   * The node from which the removed node was removed.
   * </li>
   * <li><code>previousSibling:ext.data.NodeInterface</code> (optional) —
   * The removed node's former previous sibling.
   * </li>
   * <li><code>nextSibling:ext.data.NodeInterface</code> (optional) —
   * The removed node's former next sibling.
   * (a side effect of calling →<code>ext.data.NodeInterface.appendChild()</code> or
   * →<code>ext.data.NodeInterface.insertBefore()</code> with a node that already has a parentNode)
   * </li>
   * </ul>
   * @see ext.data.NodeInterface#appendChild()
   * @see ext.data.NodeInterface#insertBefore()
   * /
  public native function get context():Object;

  /**
   * <code>true</code> if the child node is being removed so it can be moved to another position in the tree.
   * /
  public native function get isMove():Boolean;

  /**
   * The removed node
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
      constructor: TreePanel_node_isMove_contextEvent$,
      super$V2bT: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_REMOVE: "onItemRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
