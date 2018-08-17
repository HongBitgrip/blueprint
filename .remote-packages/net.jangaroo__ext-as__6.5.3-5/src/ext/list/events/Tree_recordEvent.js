Ext.define("ext.list.events.Tree_recordEvent", function(Tree_recordEvent) {/*package ext.list.events {
import ext.data.TreeModel;
import ext.list.Tree;

import net.jangaroo.ext.FlExtEvent;

public class Tree_recordEvent extends FlExtEvent {
  /**
   * This event fires when →<code>ext.list.Tree.selection</code> changes
   * @see ext.list.Tree#selection
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.list.Tree.html#event-selectionchange Original Ext JS documentation of 'selectionchange'
   * @see ext.list.Tree
   * @eventType onSelectionChange
   * /
  public static const SELECTION_CHANGE:String = "onSelectionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Tree_recordEvent.__PARAMETER_SEQUENCE__=( ["treelist", "record", "eOpts"]);}/*;

  public*/ function Tree_recordEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$7hbQ(type, arguments);
  }/*

  /**
   * The currently selected node.
   * /
  public native function get record():TreeModel;

  /**
   * The component firing this event.
   * /
  public native function get treelist():Tree;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Tree_recordEvent$,
      super$7hbQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECTION_CHANGE: "onSelectionChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
