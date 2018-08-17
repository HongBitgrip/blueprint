Ext.define("ext.data.events.TreeStore_node_isMoveEvent", function(TreeStore_node_isMoveEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_node_isMoveEvent extends FlExtEvent {
  /**
   * Fires before a child is removed, return false to cancel the remove.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforeremove Original Ext JS documentation of 'nodebeforeremove'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeRemove
   * /
  public static const NODE_BEFORE_REMOVE:String = "onNodeBeforeRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_node_isMoveEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "eOpts"]);}/*;

  public*/ function TreeStore_node_isMoveEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$14AS(type, arguments);
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
      constructor: TreeStore_node_isMoveEvent$,
      super$14AS: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_BEFORE_REMOVE: "onNodeBeforeRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
