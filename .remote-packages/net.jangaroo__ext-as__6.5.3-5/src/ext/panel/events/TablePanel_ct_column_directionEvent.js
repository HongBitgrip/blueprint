Ext.define("ext.panel.events.TablePanel_ct_column_directionEvent", function(TablePanel_ct_column_directionEvent) {/*package ext.panel.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_ct_column_directionEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-sortchange Original Ext JS documentation of 'sortchange'
   * @see ext.panel.TablePanel
   * @eventType onSortChange
   * /
  public static const SORT_CHANGE:String = "onSortChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_ct_column_directionEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "direction", "eOpts"]);}/*;

  public*/ function TablePanel_ct_column_directionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$HGf1(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get direction():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_ct_column_directionEvent$,
      super$HGf1: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SORT_CHANGE: "onSortChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
