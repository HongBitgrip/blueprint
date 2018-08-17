Ext.define("ext.toolbar.events.Breadcrumb_node_prevNodeEvent", function(Breadcrumb_node_prevNodeEvent) {/*package ext.toolbar.events {
import ext.data.TreeModel;
import ext.toolbar.Breadcrumb;

import net.jangaroo.ext.FlExtEvent;

public class Breadcrumb_node_prevNodeEvent extends FlExtEvent {
  /**
   * Fires when the user changes the selected record. In contrast to the →<code>event:onSelectionChange</code> event, this does
   * <i>not</i> fire at render time, only in response to user activity.
   * @see ext.toolbar.Breadcrumb#event:onSelectionChange
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.toolbar.Breadcrumb.html#event-change Original Ext JS documentation of 'change'
   * @see ext.toolbar.Breadcrumb
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  /**
   * Fires when the selected node changes. At render time, this event will fire
   * indicating that the configured →<code>selection</code> has been selected.
   * @see ext.toolbar.Breadcrumb#selection
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.toolbar.Breadcrumb.html#event-selectionchange Original Ext JS documentation of 'selectionchange'
   * @see ext.toolbar.Breadcrumb
   * @eventType onSelectionChange
   * /
  public static const SELECTION_CHANGE:String = "onSelectionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Breadcrumb_node_prevNodeEvent.__PARAMETER_SEQUENCE__=( ["source", "node", "prevNode", "eOpts"]);}/*;

  public*/ function Breadcrumb_node_prevNodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$t8F(type, arguments);
  }/*

  /**
   * The selected node.
   * /
  public native function get node():TreeModel;

  /**
   * The previously selected node.
   * /
  public native function get prevNode():TreeModel;

  public native function get source():Breadcrumb;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Breadcrumb_node_prevNodeEvent$,
      super$$t8F: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        SELECTION_CHANGE: "onSelectionChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
