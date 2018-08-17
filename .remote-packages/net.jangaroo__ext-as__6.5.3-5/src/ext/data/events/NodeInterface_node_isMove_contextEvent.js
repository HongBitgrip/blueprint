Ext.define("ext.data.events.NodeInterface_node_isMove_contextEvent", function(NodeInterface_node_isMove_contextEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_node_isMove_contextEvent extends FlExtEvent {
  /**
   * Fires when a child node is removed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.data.NodeInterface
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_node_isMove_contextEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "context", "eOpts"]);}/*;

  public*/ function NodeInterface_node_isMove_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xGmu(type, arguments);
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
      constructor: NodeInterface_node_isMove_contextEvent$,
      super$xGmu: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REMOVE: "onRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
