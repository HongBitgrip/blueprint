Ext.define("ext.data.events.NodeInterface_node_refNodeEvent", function(NodeInterface_node_refNodeEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_node_refNodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is inserted, return false to cancel the insert.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforeinsert Original Ext JS documentation of 'beforeinsert'
   * @see ext.data.NodeInterface
   * @eventType onBeforeInsert
   * /
  public static const BEFORE_INSERT:String = "onBeforeInsert";
  /**
   * Fires when a new child node is inserted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-insert Original Ext JS documentation of 'insert'
   * @see ext.data.NodeInterface
   * @eventType onInsert
   * /
  public static const INSERT:String = "onInsert";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_node_refNodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "refNode", "eOpts"]);}/*;

  public*/ function NodeInterface_node_refNodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$mE8S(type, arguments);
  }/*

  /**
   * The child node to be inserted
   * /
  public native function get node():NodeInterface;

  /**
   * The child node the node is being inserted before
   * /
  public native function get refNode():NodeInterface;

  /**
   * This node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: NodeInterface_node_refNodeEvent$,
      super$mE8S: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_INSERT: "onBeforeInsert",
        INSERT: "onInsert",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
