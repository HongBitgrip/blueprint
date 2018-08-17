Ext.define("ext.data.events.NodeInterface_oldParent_newParent_indexEvent", function(NodeInterface_oldParent_newParent_indexEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_oldParent_newParent_indexEvent extends FlExtEvent {
  /**
   * Fires before this node is moved to a new location in the tree. Return false to cancel the move.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforemove Original Ext JS documentation of 'beforemove'
   * @see ext.data.NodeInterface
   * @eventType onBeforeMove
   * /
  public static const BEFORE_MOVE:String = "onBeforeMove";
  /**
   * Fires when this node is moved to a new location in the tree
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-move Original Ext JS documentation of 'move'
   * @see ext.data.NodeInterface
   * @eventType onMove
   * /
  public static const MOVE:String = "onMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_oldParent_newParent_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "oldParent", "newParent", "index", "eOpts"]);}/*;

  public*/ function NodeInterface_oldParent_newParent_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$fkbH(type, arguments);
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
      constructor: NodeInterface_oldParent_newParent_indexEvent$,
      super$fkbH: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_MOVE: "onBeforeMove",
        MOVE: "onMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
