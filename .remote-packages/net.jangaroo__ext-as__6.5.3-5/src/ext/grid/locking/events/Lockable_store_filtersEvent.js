Ext.define("ext.grid.locking.events.Lockable_store_filtersEvent", function(Lockable_store_filtersEvent) {/*package ext.grid.locking.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class Lockable_store_filtersEvent extends FlExtEvent {
  /**
   * Fired whenever the filter set changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-filterchange Original Ext JS documentation of 'filterchange'
   * @see ext.grid.locking.Lockable
   * @eventType onFilterChange
   * /
  public static const FILTER_CHANGE:String = "onFilterChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Lockable_store_filtersEvent.__PARAMETER_SEQUENCE__=( ["store", "filters", "eOpts"]);}/*;

  public*/ function Lockable_store_filtersEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$qjHK(type, arguments);
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
      constructor: Lockable_store_filtersEvent$,
      super$qjHK: function() {
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
