Ext.define("ext.data.events.TreeStore_oldParent_newParent_indexEvent", function(TreeStore_oldParent_newParent_indexEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_oldParent_newParent_indexEvent extends FlExtEvent {
  /**
   * Fires before this node is moved to a new location in the tree. Return false to cancel the move.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforemove Original Ext JS documentation of 'nodebeforemove'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeMove
   * /
  public static const NODE_BEFORE_MOVE:String = "onNodeBeforeMove";
  /**
   * Fires when this node is moved to a new location in the tree
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodemove Original Ext JS documentation of 'nodemove'
   * @see ext.data.TreeStore
   * @eventType onNodeMove
   * /
  public static const NODE_MOVE:String = "onNodeMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_oldParent_newParent_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "oldParent", "newParent", "index", "eOpts"]);}/*;

  public*/ function TreeStore_oldParent_newParent_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ZG15(type, arguments);
  }/*

  /**
   * The index it is being moved to
   * /
  public native function get index():Number;

  /**
   * The new parent this node is moving to
   * /
  public native function get newParent():NodeInterface;

  /**
   * The parent of this node
   * /
  public native function get oldParent():NodeInterface;

  /**
   * This node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_oldParent_newParent_indexEvent$,
      super$ZG15: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_BEFORE_MOVE: "onNodeBeforeMove",
        NODE_MOVE: "onNodeMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
