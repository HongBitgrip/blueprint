Ext.define("ext.data.events.NodeInterfaceEvent", function(NodeInterfaceEvent) {/*package ext.data.events {
import ext.data.NodeInterface;

import net.jangaroo.ext.FlExtEvent;

public class NodeInterfaceEvent extends FlExtEvent {
  /**
   * Fires before this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforecollapse Original Ext JS documentation of 'beforecollapse'
   * @see ext.data.NodeInterface
   * @eventType onBeforeCollapse
   * /
  public static const BEFORE_COLLAPSE:String = "onBeforeCollapse";
  /**
   * Fires before this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-beforeexpand Original Ext JS documentation of 'beforeexpand'
   * @see ext.data.NodeInterface
   * @eventType onBeforeExpand
   * /
  public static const BEFORE_EXPAND:String = "onBeforeExpand";
  /**
   * Fires when this node is collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-collapse Original Ext JS documentation of 'collapse'
   * @see ext.data.NodeInterface
   * @eventType onCollapse
   * /
  public static const COLLAPSE:String = "onCollapse";
  /**
   * Fires when this node is expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.NodeInterface.html#event-expand Original Ext JS documentation of 'expand'
   * @see ext.data.NodeInterface
   * @eventType onExpand
   * /
  public static const EXPAND:String = "onExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NodeInterfaceEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function NodeInterfaceEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$bgR1(type, arguments);
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
      constructor: NodeInterfaceEvent$,
      super$bgR1: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_COLLAPSE: "onBeforeCollapse",
        BEFORE_EXPAND: "onBeforeExpand",
        COLLAPSE: "onCollapse",
        EXPAND: "onExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
