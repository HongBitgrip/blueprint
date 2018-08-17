Ext.define("ext.panel.events.TablePanel_ct_column_fromIdx_toIdxEvent", function(TablePanel_ct_column_fromIdx_toIdxEvent) {/*package ext.panel.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_ct_column_fromIdx_toIdxEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-columnmove Original Ext JS documentation of 'columnmove'
   * @see ext.panel.TablePanel
   * @eventType onColumnMove
   * /
  public static const COLUMN_MOVE:String = "onColumnMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_ct_column_fromIdx_toIdxEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "fromIdx", "toIdx", "eOpts"]);}/*;

  public*/ function TablePanel_ct_column_fromIdx_toIdxEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5Vzg(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get fromIdx():Number;

  public native function get toIdx():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_ct_column_fromIdx_toIdxEvent$,
      super$5Vzg: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMN_MOVE: "onColumnMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
