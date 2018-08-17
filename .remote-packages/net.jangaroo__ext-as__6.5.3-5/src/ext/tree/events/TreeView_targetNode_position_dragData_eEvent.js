Ext.define("ext.tree.events.TreeView_targetNode_position_dragData_eEvent", function(TreeView_targetNode_position_dragData_eEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class TreeView_targetNode_position_dragData_eEvent extends FlExtEvent {
  /**
   * Fires when a tree node is being targeted for a drag drop, return false to signal drop not allowed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.View.html#event-nodedragover Original Ext JS documentation of 'nodedragover'
   * @see ext.tree.TreeView
   * @eventType onNodeDragOver
   * /
  public static const NODE_DRAG_OVER:String = "onNodeDragOver";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeView_targetNode_position_dragData_eEvent.__PARAMETER_SEQUENCE__=( ["targetNode", "position", "dragData", "e", "eOpts"]);}/*;

  public*/ function TreeView_targetNode_position_dragData_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$bSBY(type, arguments);
  }/*

  /**
   * Data relating to the drag operation
   * /
  public native function get dragData():Object;

  /**
   * The event object for the drag
   * /
  public native function get e():Event;

  /**
   * The drop position, "before", "after" or "append",
   * /
  public native function get position():String;

  /**
   * The target node
   * /
  public native function get targetNode():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeView_targetNode_position_dragData_eEvent$,
      super$bSBY: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_DRAG_OVER: "onNodeDragOver",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
