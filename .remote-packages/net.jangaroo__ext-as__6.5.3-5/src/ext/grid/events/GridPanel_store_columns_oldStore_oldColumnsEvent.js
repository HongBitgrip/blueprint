Ext.define("ext.grid.events.GridPanel_store_columns_oldStore_oldColumnsEvent", function(GridPanel_store_columns_oldStore_oldColumnsEvent) {/*package ext.grid.events {
import ext.data.Store;
import ext.grid.GridPanel;

import net.jangaroo.ext.FlExtEvent;

public class GridPanel_store_columns_oldStore_oldColumnsEvent extends FlExtEvent {
  /**
   * Fires before a reconfigure to enable modification of incoming Store and columns.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.Panel.html#event-beforereconfigure Original Ext JS documentation of 'beforereconfigure'
   * @see ext.grid.GridPanel
   * @eventType onBeforeReconfigure
   * /
  public static const BEFORE_RECONFIGURE:String = "onBeforeReconfigure";
  /**
   * Fires after a reconfigure.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.Panel.html#event-reconfigure Original Ext JS documentation of 'reconfigure'
   * @see ext.grid.GridPanel
   * @eventType onReconfigure
   * /
  public static const RECONFIGURE:String = "onReconfigure";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GridPanel_store_columns_oldStore_oldColumnsEvent.__PARAMETER_SEQUENCE__=( ["source", "store", "columns", "oldStore", "oldColumns", "eOpts"]);}/*;

  public*/ function GridPanel_store_columns_oldStore_oldColumnsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$qrfQ(type, arguments);
  }/*

  /**
   * The column configs that were passed to the →<code>reconfigure()</code> method
   * @see ext.grid.GridPanel#reconfigure()
   * /
  public native function get columns():Array;

  [ArrayElementType("ext.grid.column.Column")]
  /**
   * The column headers that will be replaced.
   * /
  public native function get oldColumns():Array;

  /**
   * The store that will be replaced
   * /
  public native function get oldStore():Store;

  public native function get source():GridPanel;

  /**
   * The store that was passed to the →<code>reconfigure()</code> method
   * @see ext.grid.GridPanel#reconfigure()
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GridPanel_store_columns_oldStore_oldColumnsEvent$,
      super$qrfQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_RECONFIGURE: "onBeforeReconfigure",
        RECONFIGURE: "onReconfigure",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
