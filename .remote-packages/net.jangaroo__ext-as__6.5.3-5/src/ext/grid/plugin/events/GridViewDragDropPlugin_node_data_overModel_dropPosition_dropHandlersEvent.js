Ext.define("ext.grid.plugin.events.GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent", function(GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent) {/*package ext.grid.plugin.events {
import ext.data.Model;

import js.HTMLElement;

import net.jangaroo.ext.FlExtEvent;

public class GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent extends FlExtEvent {
  /**
   * <b>This event is fired through the <i>GridView</i> (→<code>ext.view.TableView</code>) and its owning
   * <i>Grid</i> (→<code>ext.grid.GridPanel</code>). You can add listeners to the grid or grid <i>view config</i> (→<code>ext.grid.GridPanel.viewConfig</code>) object</b>
   * <p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop
   * position in the grid view.</p>
   * <p>Returning <code>false</code> to this event signals that the drop gesture was invalid and
   * animates the drag proxy back to the point from which the drag began.</p>
   * <p>The dropHandlers parameter can be used to defer the processing of this event. For
   * example, you can force the handler to wait for the result of a message box
   * confirmation or an asynchronous server call (<i>see the details of the dropHandlers
   * property for more information</i>).</p>
   * <pre>
   * grid.on('beforedrop', function(node, data, overModel, dropPosition, dropHandlers) {
   *     // Defer the handling
   *     dropHandlers.wait = true;
   *     Ext.MessageBox.confirm('Drop', 'Are you sure', function(btn){
   *         if (btn === 'yes') {
   *             dropHandlers.processDrop();
   *         } else {
   *             dropHandlers.cancelDrop();
   *         }
   *     });
   * });
   * </pre>
   * <p>Any other return value continues with the data transfer operation unless the wait
   * property is set.</p>
   * @see ext.view.TableView
   * @see ext.grid.GridPanel
   * @see ext.grid.GridPanel#viewConfig
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.DragDrop.html#event-beforedrop Original Ext JS documentation of 'beforedrop'
   * @see ext.grid.plugin.GridViewDragDropPlugin
   * @eventType onBeforeDrop
   * /
  public static const BEFORE_DROP:String = "onBeforeDrop";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent.__PARAMETER_SEQUENCE__=( ["node", "data", "overModel", "dropPosition", "dropHandlers", "eOpts"]);}/*;

  public*/ function GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Klvc(type, arguments);
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
   * This parameter allows the developer to control when the drop action takes place.
   * It is useful if any asynchronous processing needs to be completed before
   * performing the drop. This object has the following properties:
   * <ul>
   * <li><code>wait:Boolean</code> (optional) —
   * Indicates whether the drop should be deferred.
   * Set this property to true to defer the drop.
   * </li>
   * <li><code>processDrop:Function</code> (optional) —
   * A function to be called to complete
   * the drop operation.
   * </li>
   * <li><code>cancelDrop:Function</code> (optional) —
   * A function to be called to cancel the
   * drop operation.
   * </li>
   * </ul>
   * /
  public native function get dropHandlers():Object;

  /**
   * <code>"before"</code> or <code>"after"</code> depending on whether the
   * cursor is above or below the mid-line of the node.
   * /
  public native function get dropPosition():String;

  /**
   * The <i>grid view</i> (→<code>ext.view.TableView</code>) node <b>if any</b> over
   * which the cursor was positioned.
   * @see ext.view.TableView
   * /
  public native function get node():HTMLElement;

  /**
   * The Model over which the drop gesture took place
   * /
  public native function get overModel():Model;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GridViewDragDropPlugin_node_data_overModel_dropPosition_dropHandlersEvent$,
      super$Klvc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DROP: "onBeforeDrop",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
