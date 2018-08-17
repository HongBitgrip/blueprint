Ext.define("ext.grid.plugin.events.GridViewDragDropPlugin_node_data_overModel_dropPositionEvent", function(GridViewDragDropPlugin_node_data_overModel_dropPositionEvent) {/*package ext.grid.plugin.events {
import ext.data.Model;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class GridViewDragDropPlugin_node_data_overModel_dropPositionEvent extends FlExtEvent {
  /**
   * <b>This event is fired through the <i>GridView</i> (→<code>ext.view.TableView</code>) and its owning
   * <i>Grid</i> (→<code>ext.grid.GridPanel</code>). You can add listeners to the grid or grid <i>view config</i> (→<code>ext.grid.GridPanel.viewConfig</code>) object</b>
   * <p>Fired when a drop operation has been completed and the data has been moved or
   * copied.</p>
   * @see ext.view.TableView
   * @see ext.grid.GridPanel
   * @see ext.grid.GridPanel#viewConfig
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.DragDrop.html#event-drop Original Ext JS documentation of 'drop'
   * @see ext.grid.plugin.GridViewDragDropPlugin
   * @eventType onDrop
   * /
  public static const DROP:String = "onDrop";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GridViewDragDropPlugin_node_data_overModel_dropPositionEvent.__PARAMETER_SEQUENCE__=( ["node", "data", "overModel", "dropPosition", "eOpts"]);}/*;

  public*/ function GridViewDragDropPlugin_node_data_overModel_dropPositionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$MP_t(type, arguments);
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
   * <li><code>view:ext.view.TableView</code> (optional) —
   * The source grid view from which the drag
   * originated
   * </li>
   * <li><code>ddel:js.HTMLElement</code> (optional) —
   * The drag proxy element which moves with the cursor
   * </li>
   * <li><code>item:js.HTMLElement</code> (optional) —
   * The grid view node upon which the mousedown event
   * was registered
   * </li>
   * <li><code>records:Array</code> (optional) —
   * An Array of Models representing the
   * selected data being dragged from the source grid view
   * </li>
   * </ul>
   * @see ext.dd.DragZone
   * @see ext.dd.DragZone#getDragData()
   * @see ext.grid.plugin.GridViewDragDropPlugin#copy
   * @see ext.grid.plugin.GridViewDragDropPlugin#allowCopy
   * /
  public native function get data():Object;

  /**
   * <code>"before"</code> or <code>"after"</code> depending on whether the
   * cursor is above or below the mid-line of the node.
   * /
  public native function get dropPosition():String;

  /**
   * The <i>GridView</i> (→<code>ext.view.TableView</code>) node <b>if any</b> over
   * which the cursor was positioned.
   * @see ext.view.TableView
   * /
  public native function get node():HTMLElement;

  /**
   * The Model over which the drop gesture took
   * place.
   * /
  public native function get overModel():Model;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GridViewDragDropPlugin_node_data_overModel_dropPositionEvent$,
      super$MP_t: function() {
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
