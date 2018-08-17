Ext.define("ext.data.events.NodeInterface_node_indexEvent", function(NodeInterface_node_indexEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_node_indexEvent extends FlExtEvent {
  /**
   * Fires when a new child node is appended
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-append Original Ext JS documentation of 'append'
   * @see ext.data.NodeInterface
   * @eventType onAppend
   * /
  public static const APPEND:String = "onAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_node_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "index", "eOpts"]);}/*;

  public*/ function NodeInterface_node_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$vCvV(type, arguments);
  }/*

  /**
   * The index of the newly appended node
   * /
  public native function get index():Number;

  /**
   * The newly appended node
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
      constructor: NodeInterface_node_indexEvent$,
      super$vCvV: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        APPEND: "onAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
