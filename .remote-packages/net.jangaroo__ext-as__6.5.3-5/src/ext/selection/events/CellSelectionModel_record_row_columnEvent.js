Ext.define("ext.selection.events.CellSelectionModel_record_row_columnEvent", function(CellSelectionModel_record_row_columnEvent) {/*package ext.selection.events {
import ext.data.Model;
import ext.selection.CellSelectionModel;

import net.jangaroo.ext.FlExtEvent;

public class CellSelectionModel_record_row_columnEvent extends FlExtEvent {
  /**
   * Fired after a cell is deselected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.CellModel.html#event-deselect Original Ext JS documentation of 'deselect'
   * @see ext.selection.CellSelectionModel
   * @eventType onDeselect
   * /
  public static const DESELECT:String = "onDeselect";
  /**
   * Fired after a cell is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.selection.CellModel.html#event-select Original Ext JS documentation of 'select'
   * @see ext.selection.CellSelectionModel
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CellSelectionModel_record_row_columnEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "row", "column", "eOpts"]);}/*;

  public*/ function CellSelectionModel_record_row_columnEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$77oh(type, arguments);
  }/*

  /**
   * The column index deselected
   * /
  public native function get column():Number;

  /**
   * The record of the deselected cell
   * /
  public native function get record():Model;

  /**
   * The row index deselected
   * /
  public native function get row():Number;

  public native function get source():CellSelectionModel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CellSelectionModel_record_row_columnEvent$,
      super$77oh: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DESELECT: "onDeselect",
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
