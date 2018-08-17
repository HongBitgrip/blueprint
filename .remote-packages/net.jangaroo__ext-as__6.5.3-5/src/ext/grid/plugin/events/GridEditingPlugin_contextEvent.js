Ext.define("ext.grid.plugin.events.GridEditingPlugin_contextEvent", function(GridEditingPlugin_contextEvent) {/*package ext.grid.plugin.events {
import ext.grid.plugin.GridEditingPlugin;

import net.jangaroo.ext.FlExtEvent;

public class GridEditingPlugin_contextEvent extends FlExtEvent {
  /**
   * Fires before editing is triggered. Return false from event handler to stop the editing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.Editing.html#event-beforeedit Original Ext JS documentation of 'beforeedit'
   * @see ext.grid.plugin.GridEditingPlugin
   * @eventType onBeforeEdit
   * /
  public static const BEFORE_EDIT:String = "onBeforeEdit";
  /**
   * Fires when the user started editing but then cancelled the edit.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.Editing.html#event-canceledit Original Ext JS documentation of 'canceledit'
   * @see ext.grid.plugin.GridEditingPlugin
   * @eventType onCancelEdit
   * /
  public static const CANCEL_EDIT:String = "onCancelEdit";
  /**
   * Fires after editing. Usage example:
   * <pre>
   * grid.on('edit', function(editor, e) {
   *     // commit the changes right after editing finished
   *     e.record.commit();
   * });
   * </pre>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.Editing.html#event-edit Original Ext JS documentation of 'edit'
   * @see ext.grid.plugin.GridEditingPlugin
   * @eventType onEdit
   * /
  public static const EDIT:String = "onEdit";
  /**
   * Fires after editing, but before the value is set in the record. Return false from event handler to
   * cancel the change.
   * <p>Usage example showing how to remove the red triangle (dirty record indicator) from some records (not all). By
   * observing the grid's validateedit event, it can be cancelled if the edit occurs on a targeted row (for example)
   * and then setting the field's new value in the Record directly:</p>
   * <pre>
   * grid.on('validateedit', function (editor, context) {
   *     var myTargetRow = 6;
   *
   *     if (context.rowIdx === myTargetRow) {
   *         context.record.data[context.field] = context.value;
   *     }
   * });
   * </pre>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.Editing.html#event-validateedit Original Ext JS documentation of 'validateedit'
   * @see ext.grid.plugin.GridEditingPlugin
   * @eventType onValidateEdit
   * /
  public static const VALIDATE_EDIT:String = "onValidateEdit";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GridEditingPlugin_contextEvent.__PARAMETER_SEQUENCE__=( ["editor", "context", "eOpts"]);}/*;

  public*/ function GridEditingPlugin_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$r1CQ(type, arguments);
  }/*

  /**
   * The editing context with the following properties:
   * <ul>
   * <li><code>grid:ext.grid.GridPanel</code> (optional) —
   * The owning grid Panel.
   * </li>
   * <li><code>record:ext.data.Model</code> (optional) —
   * The record being edited.
   * </li>
   * <li><code>field:String</code> (optional) —
   * The name of the field being edited.
   * </li>
   * <li><code>value</code> (optional) —
   * The field's current value.
   * </li>
   * <li><code>row:js.HTMLElement</code> (optional) —
   * The grid row element.
   * </li>
   * <li><code>column:ext.grid.column.Column</code> (optional) —
   * The Column being edited.
   * </li>
   * <li><code>rowIdx:Number</code> (optional) —
   * The index of the row being edited.
   * </li>
   * <li><code>colIdx:Number</code> (optional) —
   * The index of the column being edited.
   * </li>
   * <li><code>cancel:Boolean</code> (optional) —
   * Set this to <code>true</code> to cancel the edit or return false from your handler.
   * </li>
   * <li><code>originalValue</code> (optional) —
   * Alias for value (only when using →<code>ext.grid.plugin.CellEditingPlugin</code>).
   * </li>
   * </ul>
   * @see ext.grid.plugin.CellEditingPlugin
   * /
  public native function get context():Object;

  public native function get editor():GridEditingPlugin;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GridEditingPlugin_contextEvent$,
      super$r1CQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_EDIT: "onBeforeEdit",
        CANCEL_EDIT: "onCancelEdit",
        EDIT: "onEdit",
        VALIDATE_EDIT: "onValidateEdit",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
