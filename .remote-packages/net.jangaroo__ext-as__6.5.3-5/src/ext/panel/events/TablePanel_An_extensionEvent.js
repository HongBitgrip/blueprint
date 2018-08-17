Ext.define("ext.panel.events.TablePanel_An_extensionEvent", function(TablePanel_An_extensionEvent) {/*package ext.panel.events {
import ext.grid.selection.Selection;
import ext.panel.TablePanel;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_An_extensionEvent extends FlExtEvent {
  /**
   * An event fired when an extension block is extended
   * using a drag gesture. Only fired when the SpreadsheetSelectionModel is used and
   * configured with the
   * →<code>ext.grid.selection.SpreadsheetModelSelection.extensible</code> config.
   * @see ext.grid.selection.SpreadsheetModelSelection#extensible
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-beforeselectionextend Original Ext JS documentation of 'beforeselectionextend'
   * @see ext.panel.TablePanel
   * @eventType onBeforeSelectionExtend
   * /
  public static const BEFORE_SELECTION_EXTEND:String = "onBeforeSelectionExtend";
  /**
   * An event fired when an extension block is dragged to
   * encompass a new range. Only fired when the SpreadsheetSelectionModel is used and
   * configured with the
   * →<code>ext.grid.selection.SpreadsheetModelSelection.extensible</code> config.
   * @see ext.grid.selection.SpreadsheetModelSelection#extensible
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-selectionextenderdrag Original Ext JS documentation of 'selectionextenderdrag'
   * @see ext.panel.TablePanel
   * @eventType onSelectionExtenderDrag
   * /
  public static const SELECTION_EXTENDER_DRAG:String = "onSelectionExtenderDrag";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_An_extensionEvent.__PARAMETER_SEQUENCE__=( ["grid", "An", "extension", "eOpts"]);}/*;

  public*/ function TablePanel_An_extensionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Pe42(type, arguments);
  }/*

  /**
   * object which encapsulates a contiguous selection block.
   * /
  public native function get An():Selection;

  /**
   * An object describing the type and size of extension.
   * <ul>
   * <li><code>type:String</code> (optional) —
   * <code>"rows"</code> or <code>"columns"</code>
   * </li>
   * <li><code>start:ext.grid.CellContext</code> (optional) —
   * The start (top left) cell of the extension area.
   * </li>
   * <li><code>end:ext.grid.CellContext</code> (optional) —
   * The end (bottom right) cell of the extension area.
   * </li>
   * <li><code>columns:Number</code> (optional) —
   * The number of columns extended (-ve means on the left side).
   * </li>
   * <li><code>rows:Number</code> (optional) —
   * The number of rows extended (-ve means on the top side).
   * </li>
   * </ul>
   * /
  public native function get extension():Object;

  /**
   * The owning grid.
   * /
  public native function get grid():TablePanel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_An_extensionEvent$,
      super$Pe42: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_SELECTION_EXTEND: "onBeforeSelectionExtend",
        SELECTION_EXTENDER_DRAG: "onSelectionExtenderDrag",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
