Ext.define("ext.panel.events.TablePanel_ct_column_widthEvent", function(TablePanel_ct_column_widthEvent) {/*package ext.panel.events {
import ext.grid.column.Column;
import ext.grid.header.HeaderContainer;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_ct_column_widthEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Table.html#event-columnresize Original Ext JS documentation of 'columnresize'
   * @see ext.panel.TablePanel
   * @eventType onColumnResize
   * /
  public static const COLUMN_RESIZE:String = "onColumnResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_ct_column_widthEvent.__PARAMETER_SEQUENCE__=( ["ct", "column", "width", "eOpts"]);}/*;

  public*/ function TablePanel_ct_column_widthEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$wfjQ(type, arguments);
  }/*

  /**
   * The Column header Component which provides the column definition
   * /
  public native function get column():Column;

  /**
   * The grid's header Container which encapsulates all column headers.
   * /
  public native function get ct():HeaderContainer;

  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_ct_column_widthEvent$,
      super$wfjQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COLUMN_RESIZE: "onColumnResize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
