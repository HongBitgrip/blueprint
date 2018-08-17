Ext.define("ext.grid.plugin.events.CellEditingPlugin_contextEvent", function(CellEditingPlugin_contextEvent) {/*package ext.grid.plugin.events {
import ext.grid.plugin.CellEditingPlugin;

import net.jangaroo.ext.FlExtEvent;

public class CellEditingPlugin_contextEvent extends FlExtEvent {
  /**
   * Fires before cell editing is triggered. Return false from event handler to stop the editing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.CellEditing.html#event-beforeedit Original Ext JS documentation of 'beforeedit'
   * @see ext.grid.plugin.CellEditingPlugin
   * @eventType onBeforeEdit
   * /
  public static const BEFORE_EDIT:String = "onBeforeEdit";
  /**
   * Fires when the user started editing a cell but then cancelled the edit.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.CellEditing.html#event-canceledit Original Ext JS documentation of 'canceledit'
   * @see ext.grid.plugin.CellEditingPlugin
   * @eventType onCancelEdit
   * /
  public static const CANCEL_EDIT:String = "onCancelEdit";
  /**
   * Fires after a cell is edited. Usage example:
   * <pre>
   * grid.on('edit', function(editor, e) {
   *     // commit the changes right after editing finished
   *     e.record.commit();
   * });
   * </pre>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.CellEditing.html#event-edit Original Ext JS documentation of 'edit'
   * @see ext.grid.plugin.CellEditingPlugin
   * @eventType onEdit
   * /
  public static const EDIT:String = "onEdit";
  /**
   * Fires after a cell is edited, but before the value is set in the record.
   * There are three possible outcomes when handling the validateedit event:
   * <ul>
   * <li>Return <code>true</code> - Return true to commit the change to the underlying record and
   * hide the editor</li>
   * <li>Return 'false' - Return false to prevent 1) the edit from being committed to
   * the underlying record and 2) the editor from hiding / blurring.</li>
   * <li>Set context.cancel: true and return <code>false</code> - Set the context param's cancel property
   * to true and returning false will 1) prevent the edit from being committed to
   * the underlying record but <i>will</i> allow the edit to hide once blurred.</li>
   * </ul>
   * <p>In the following example, entering 10 in the editor field and tabbing out /
   * blurring the editor field will result in the the editor remaining focused as the
   * required validation criteria has not been met.</p>
   * <pre>
   * grid.on('validateedit', function(editor, context) {
   *     if (context.value &lt; 10) {
   *         return false;
   *     }
   * });
   * </pre>
   * <p>If we modify the previous example by setting context.cancel to true then changing
   * the editor value from 2 to 10 and tabbing out of the field will result in the
   * editor hiding and the grid cell retaining the initial value of 2.</p>
   * <pre>
   * grid.on('validateedit', function(editor, context) {
   *     if (context.value &lt; 10) {
   *         context.cancel = true;
   *         return false;
   *     }
   * });
   * </pre>
   * <p>Below is a usage example showing how to remove the red triangle (dirty-record
   * indicator) from some records (not all). By observing the grid's validateedit
   * event, it can be cancelled if the edit occurs on a targeted row (for example) and
   * then setting the field's new value in the Record directly:</p>
   * <pre>
   * grid.on('validateedit', function(editor, e) {
   *   var myTargetRow = 6;
   *
   *   if (e.row == myTargetRow) {
   *     e.cancel = true;
   *     e.record.data[e.field] = e.value;
   *   }
   * });
   * </pre>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.plugin.CellEditing.html#event-validateedit Original Ext JS documentation of 'validateedit'
   * @see ext.grid.plugin.CellEditingPlugin
   * @eventType onValidateEdit
   * /
  public static const VALIDATE_EDIT:String = "onValidateEdit";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CellEditingPlugin_contextEvent.__PARAMETER_SEQUENCE__=( ["editor", "context", "eOpts"]);}/*;

  public*/ function CellEditingPlugin_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$3cOs(type, arguments);
  }/*

  /**
   * An editing context event with the following properties:
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
   * The →<code>ext.grid.column.Column</code> Column} being edited.
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
   * </ul>
   * @see ext.grid.column.Column
   * /
  public native function get context():Object;

  public native function get editor():CellEditingPlugin;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CellEditingPlugin_contextEvent$,
      super$3cOs: function() {
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
