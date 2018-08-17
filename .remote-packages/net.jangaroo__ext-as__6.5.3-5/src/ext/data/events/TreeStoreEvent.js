Ext.define("ext.data.events.TreeStoreEvent", function(TreeStoreEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreeStoreEvent extends FlExtEvent {
  /**
   * Fires before this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforecollapse Original Ext JS documentation of 'nodebeforecollapse'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeCollapse
   * /
  public static const NODE_BEFORE_COLLAPSE:String = "onNodeBeforeCollapse";
  /**
   * Fires before this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodebeforeexpand Original Ext JS documentation of 'nodebeforeexpand'
   * @see ext.data.TreeStore
   * @eventType onNodeBeforeExpand
   * /
  public static const NODE_BEFORE_EXPAND:String = "onNodeBeforeExpand";
  /**
   * Fires when this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodecollapse Original Ext JS documentation of 'nodecollapse'
   * @see ext.data.TreeStore
   * @eventType onNodeCollapse
   * /
  public static const NODE_COLLAPSE:String = "onNodeCollapse";
  /**
   * Fires when this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-nodeexpand Original Ext JS documentation of 'nodeexpand'
   * @see ext.data.TreeStore
   * @eventType onNodeExpand
   * /
  public static const NODE_EXPAND:String = "onNodeExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStoreEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function TreeStoreEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8OQr(type, arguments);
  }/*

  /**
   * The collapsing node
   * /
  public native function get source():NodeInterface;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStoreEvent$,
      super$8OQr: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NODE_BEFORE_COLLAPSE: "onNodeBeforeCollapse",
        NODE_BEFORE_EXPAND: "onNodeBeforeExpand",
        NODE_COLLAPSE: "onNodeCollapse",
        NODE_EXPAND: "onNodeExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
