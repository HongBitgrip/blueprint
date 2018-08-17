Ext.define("ext.data.events.NodeInterface_node_isMoveEvent", function(NodeInterface_node_isMoveEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_node_isMoveEvent extends FlExtEvent {
  /**
   * Fires before a child is removed, return false to cancel the remove.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforeremove Original Ext JS documentation of 'beforeremove'
   * @see ext.data.NodeInterface
   * @eventType onBeforeRemove
   * /
  public static const BEFORE_REMOVE:String = "onBeforeRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_node_isMoveEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "isMove", "eOpts"]);}/*;

  public*/ function NodeInterface_node_isMoveEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xR2e(type, arguments);
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
      constructor: NodeInterface_node_isMoveEvent$,
      super$xR2e: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_REMOVE: "onBeforeRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
