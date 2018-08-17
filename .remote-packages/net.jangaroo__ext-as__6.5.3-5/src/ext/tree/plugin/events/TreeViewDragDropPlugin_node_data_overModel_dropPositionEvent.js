Ext.define("ext.tree.plugin.events.TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent", function(TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent) {/*package ext.tree.plugin.events {
import ext.data.TreeModel;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent extends FlExtEvent {
  /**
   * <b>This event is fired through the →<code>ext.tree.TreeView</code> and its owning
   * <i>Tree</i> (→<code>ext.tree.TreePanel</code>). You can add listeners to the tree or tree <i>view config</i> (→<code>ext.tree.TreePanel.viewConfig</code>) object</b>
   * <p>Fired when a drop operation has been completed and the data has been moved or
   * copied.</p>
   * @see ext.tree.TreeView
   * @see ext.tree.TreePanel
   * @see ext.tree.TreePanel#viewConfig
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tree.plugin.TreeViewDragDrop.html#event-drop Original Ext JS documentation of 'drop'
   * @see ext.tree.plugin.TreeViewDragDropPlugin
   * @eventType onDrop
   * /
  public static const DROP:String = "onDrop";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent.__PARAMETER_SEQUENCE__=( ["node", "data", "overModel", "dropPosition", "eOpts"]);}/*;

  public*/ function TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Mr2t(type, arguments);
  }/*

  /**
   * The data object gathered at mousedown time by the
   * cooperating →<code>ext.dd.DragZone</code>'s →<code>ext.dd.DragZone.getDragData()</code> method. It contains the following properties:
   * <ul>
   * <li><code>copy:Boolean</code> (optional) —
   * The value of →<code>copy</code>. Or <code>true</code> if
   * →<code>allowCopy</code> is true <b>and</b> the control key was pressed as the drag
   * operation began.
   * </li>
   * <li><code>view:ext.tree.TreeView</code> (optional) —
   * The source tree view from which the drag
   * originated
   * </li>
   * <li><code>ddel:js.HTMLElement</code> (optional) —
   * The drag proxy element which moves with the cursor
   * </li>
   * <li><code>item:js.HTMLElement</code> (optional) —
   * The tree view node upon which the mousedown event
   * was registered
   * </li>
   * <li><code>records:Array</code> (optional) —
   * An Array of Models representing the
   * selected data being dragged from the source tree view
   * </li>
   * </ul>
   * @see ext.dd.DragZone
   * @see ext.dd.DragZone#getDragData()
   * @see ext.tree.plugin.TreeViewDragDropPlugin#copy
   * @see ext.tree.plugin.TreeViewDragDropPlugin#allowCopy
   * /
  public native function get data():Object;

  /**
   * <code>"before"</code> or <code>"after"</code> depending on whether the
   * cursor is above or below the mid-line of the node.
   * /
  public native function get dropPosition():String;

  /**
   * The <i>tree view</i> (→<code>ext.tree.TreeView</code>) node <b>if any</b> over
   * which the cursor was positioned.
   * @see ext.tree.TreeView
   * /
  public native function get node():HTMLElement;

  /**
   * The Model over which the drop gesture took
   * place.
   * /
  public native function get overModel():TreeModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeViewDragDropPlugin_node_data_overModel_dropPositionEvent$,
      super$Mr2t: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DROP: "onDrop",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
