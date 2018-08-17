Ext.define("ext.grid.selection.events.SpreadsheetModelSelection_grid_selectionEvent", function(SpreadsheetModelSelection_grid_selectionEvent) {/*package ext.grid.selection.events {
import ext.grid.GridPanel;
import ext.grid.selection.Selection;

import net.jangaroo.ext.FlExtEvent;

public class SpreadsheetModelSelection_grid_selectionEvent extends FlExtEvent {
  /**
   * Fired <i>by the grid</i> after the selection changes. Return <code>false</code> to veto the selection extension.
   * <p>Note that the behavior of selectionchange is different in Ext 6.x vs. Ext 5. In Ext 6.x, if rows
   * are being selected, a block of records is passed as the second parameter. In Ext 5, the selection
   * object was passed.</p>
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.selection.SpreadsheetModel.html#event-selectionchange Original Ext JS documentation of 'selectionchange'
   * @see ext.grid.selection.SpreadsheetModelSelection
   * @eventType onSelectionChange
   * /
  public static const SELECTION_CHANGE:String = "onSelectionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SpreadsheetModelSelection_grid_selectionEvent.__PARAMETER_SEQUENCE__=( ["grid", "selection", "eOpts"]);}/*;

  public*/ function SpreadsheetModelSelection_grid_selectionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8shV(type, arguments);
  }/*

  /**
   * The grid whose selection has changed.
   * /
  public native function get grid():GridPanel;

  /**
   * A subclass of
   * →<code>ext.grid.selection.Selection</code> describing the new selection.
   * @see ext.grid.selection.Selection
   * /
  public native function get selection():Selection;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SpreadsheetModelSelection_grid_selectionEvent$,
      super$8shV: function() {
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
