Ext.define("ext.tree.events.TreePanel_node_checked_eEvent", function(TreePanel_node_checked_eEvent) {/*package ext.tree.events {
import ext.data.TreeModel;
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class TreePanel_node_checked_eEvent extends FlExtEvent {
  /**
   * Fires when a node with a checkbox's checked property changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-beforecheckchange Original Ext JS documentation of 'beforecheckchange'
   * @see ext.tree.TreePanel
   * @eventType onBeforeCheckChange
   * /
  public static const BEFORE_CHECK_CHANGE:String = "onBeforeCheckChange";
  /**
   * Fires when a node with a checkbox's checked property changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.Panel.html#event-checkchange Original Ext JS documentation of 'checkchange'
   * @see ext.tree.TreePanel
   * @eventType onCheckChange
   * /
  public static const CHECK_CHANGE:String = "onCheckChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreePanel_node_checked_eEvent.__PARAMETER_SEQUENCE__=( ["node", "checked", "e", "eOpts"]);}/*;

  public*/ function TreePanel_node_checked_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$p3f$(type, arguments);
  }/*

  /**
   * The node's current checked state.
   * /
  public native function get checked():Boolean;

  /**
   * The click event.
   * /
  public native function get e():Event;

  /**
   * The node who's checked property is to be changed.
   * /
  public native function get node():TreeModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreePanel_node_checked_eEvent$,
      super$p3f$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CHECK_CHANGE: "onBeforeCheckChange",
        CHECK_CHANGE: "onCheckChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
