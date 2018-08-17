Ext.define("ext.data.events.TreeStore_node_isMove_contextEvent", function(TreeStore_node_isMove_contextEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_node_isMove_contextEvent extends FlExtEvent {
  /**
   * Fires when a child node is removed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-noderemove Original Ext JS documentation of 'noderemove'
   * @see ext.data.TreeStore
   * @eventType onNodeRemove
   * /
  public static const NODE_REMOVE:String = "onNodeRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_node_isMove_contextEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "context", "eOpts"]);}/*;

  public*/ function TreeStore_node_isMove_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$76ei(type, arguments);
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
      constructor: TreeStore_node_isMove_contextEvent$,
      super$76ei: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_REMOVE: "onNodeRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
