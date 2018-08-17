Ext.define("ext.tree.events.TreePanel_oldParent_newParent_indexEvent", function(TreePanel_oldParent_newParent_indexEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_oldParent_newParent_indexEvent extends FlExtEvent {
  /**
   * Fires before this node is moved to a new location in the tree. Return false to cancel the move.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeitemmove Original Ext JS documentation of 'beforeitemmove'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemMove
   * /
  public static const BEFORE_ITEM_MOVE:String = "onBeforeItemMove";
  /**
   * Fires when this node is moved to a new location in the tree
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-itemmove Original Ext JS documentation of 'itemmove'
   * @see ext.tree.TreePanel
   * @eventType onItemMove
   * /
  public static const ITEM_MOVE:String = "onItemMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_oldParent_newParent_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "oldParent", "newParent", "index", "eOpts"]);}/*;

  public*/ function TreePanel_oldParent_newParent_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$yjQs(type, arguments);
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
      constructor: TreePanel_oldParent_newParent_indexEvent$,
      super$yjQs: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_MOVE: "onBeforeItemMove",
        ITEM_MOVE: "onItemMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
