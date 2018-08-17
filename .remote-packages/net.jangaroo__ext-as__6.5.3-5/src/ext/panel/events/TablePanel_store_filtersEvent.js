Ext.define("ext.panel.events.TablePanel_store_filtersEvent", function(TablePanel_store_filtersEvent) {/*package ext.panel.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class TablePanel_store_filtersEvent extends FlExtEvent {
  /**
   * Fired whenever the filter set changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-filterchange Original Ext JS documentation of 'filterchange'
   * @see ext.panel.TablePanel
   * @eventType onFilterChange
   * /
  public static const FILTER_CHANGE:String = "onFilterChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TablePanel_store_filtersEvent.__PARAMETER_SEQUENCE__=( ["store", "filters", "eOpts"]);}/*;

  public*/ function TablePanel_store_filtersEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$kSTe(type, arguments);
  }/*

  [ArrayElementType("ext.util.Filter")]
  /**
   * The array of Filter objects.
   * /
  public native function get filters():Array;

  /**
   * The store.
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TablePanel_store_filtersEvent$,
      super$kSTe: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FILTER_CHANGE: "onFilterChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
