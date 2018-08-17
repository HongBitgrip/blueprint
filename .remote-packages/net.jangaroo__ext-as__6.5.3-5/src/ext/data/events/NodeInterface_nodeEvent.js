Ext.define("ext.data.events.NodeInterface_nodeEvent", function(NodeInterface_nodeEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterface_nodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is appended, return false to cancel the append.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforeappend Original Ext JS documentation of 'beforeappend'
   * @see ext.data.NodeInterface
   * @eventType onBeforeAppend
   * /
  public static const BEFORE_APPEND:String = "onBeforeAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterface_nodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "eOpts"]);}/*;

  public*/ function NodeInterface_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Wh1I(type, arguments);
  }/*

  /**
   * The child node to be appended
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
      constructor: NodeInterface_nodeEvent$,
      super$Wh1I: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_APPEND: "onBeforeAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
