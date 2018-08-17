Ext.define("ext.tree.events.TreePanel_nodeEvent", function(TreePanel_nodeEvent) {/*package ext.tree.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_nodeEvent extends FlExtEvent {
  /**
   * Fires before a new child is appended, return false to cancel the append.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforeitemappend Original Ext JS documentation of 'beforeitemappend'
   * @see ext.tree.TreePanel
   * @eventType onBeforeItemAppend
   * /
  public static const BEFORE_ITEM_APPEND:String = "onBeforeItemAppend";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_nodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "eOpts"]);}/*;

  public*/ function TreePanel_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$autD(type, arguments);
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
      constructor: TreePanel_nodeEvent$,
      super$autD: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ITEM_APPEND: "onBeforeItemAppend",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
