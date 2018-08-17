Ext.define("ext.list.events.Tree_infoEvent", function(Tree_infoEvent) {/*package ext.list.events {
import ext.list.Tree;

import net.jangaroo.ext.FlExtEvent;

public class Tree_infoEvent extends FlExtEvent {
  /**
   * @since 6.0.1
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.list.Tree.html#event-itemclick Original Ext JS documentation of 'itemclick'
   * @see ext.list.Tree
   * @eventType onItemClick
   * /
  public static const ITEM_CLICK:String = "onItemClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Tree_infoEvent.__PARAMETER_SEQUENCE__=( ["sender", "info", "eOpts"]);}/*;

  public*/ function Tree_infoEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$06DT(type, arguments);
  }/*

  /**
   * <ul>
   * <li><code>event:ext.event.Event</code> (optional) —
   * The DOM event that precipitated this
   * event.
   * </li>
   * <li><code>item:ext.list.AbstractTreeItem</code> (optional) —
   * The tree node that was clicked.
   * </li>
   * <li><code>tree:ext.list.Tree</code> (optional) —
   * The <code>treelist</code> that fired this event.
   * </li>
   * <li><code>select:Boolean</code> (optional) —
   * On input this is value is the result of the
   * →<code>isSelectionEvent</code> method. On return from event handlers (assuming a
   * <code>false</code> return does not cancel things) this property is used to determine
   * if the clicked node should be selected.
   * </li>
   * <li><code>toggle:Boolean</code> (optional) —
   * On input this is value is the result of the
   * →<code>isToggleEvent</code> method. On return from event handlers (assuming a
   * <code>false</code> return does not cancel things) this property is used to determine
   * if the clicked node's expand/collapse state should be toggled.
   * </li>
   * </ul>
   * @see ext.list.Tree#isSelectionEvent
   * @see ext.list.Tree#isToggleEvent
   * /
  public native function get info():Object;

  /**
   * The <code>treelist</code> that fired this event.
   * /
  public native function get sender():Tree;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Tree_infoEvent$,
      super$06DT: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ITEM_CLICK: "onItemClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
