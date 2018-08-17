Ext.define("ext.data.events.TreeStore_nodeEvent", function(TreeStore_nodeEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStore_nodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is appended, return false to cancel the append.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforeappend Original Ext JS documentation of 'nodebeforeappend'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeAppend
   * /
  public static const NODE_BEFORE_APPEND:String = "onNodeBeforeAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_nodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "eOpts"]);}/*;

  public*/ function TreeStore_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$IQZU(type, arguments);
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
      constructor: TreeStore_nodeEvent$,
      super$IQZU: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_BEFORE_APPEND: "onNodeBeforeAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
