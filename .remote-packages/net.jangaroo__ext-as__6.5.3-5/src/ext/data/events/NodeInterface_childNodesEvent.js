Ext.define("ext.data.events.NodeInterface_childNodesEvent", function(NodeInterface_childNodesEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_childNodesEvent extends FlExtEvent {
  /**
   * Fires when this node's childNodes are sorted.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-sort Original Ext JS documentation of 'sort'
   * @see ext.data.NodeInterface
   * @eventType onSort
   * /
  public static const SORT:String = "onSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_childNodesEvent.__PARAMETER_SEQUENCE__=( ["source", "childNodes", "eOpts"]);}/*;

  public*/ function NodeInterface_childNodesEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$HYE$(type, arguments);
  }/*

  [ArrayElementType("ext.data.NodeInterface")]
  /**
   * The childNodes of this node.
   * /
  public native function get childNodes():Array;

  /**
   * This node.
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: NodeInterface_childNodesEvent$,
      super$HYE$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SORT: "onSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
