Ext.define("ext.data.events.AbstractStore_store_sortersEvent", function(AbstractStore_store_sortersEvent) {/*package ext.data.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class AbstractStore_store_sortersEvent extends FlExtEvent {
  /**
   * Fires before a store is sorted.
   * <p>For <i>remotely sorted</i> (→<code>remoteSort</code>) stores, this will be just before the load operation triggered by changing the
   * store's sorters.</p>
   * <p>For locally sorted stores, this will be just before the data items in the store's backing collection are sorted.</p>
   * @see ext.data.AbstractStore#remoteSort
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-beforesort Original Ext JS documentation of 'beforesort'
   * @see ext.data.AbstractStore
   * @eventType onBeforeSort
   * /
  public static const BEFORE_SORT:String = "onBeforeSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStore_store_sortersEvent.__PARAMETER_SEQUENCE__=( ["store", "sorters", "eOpts"]);}/*;

  public*/ function AbstractStore_store_sortersEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$J$0k(type, arguments);
  }/*

  [ArrayElementType("ext.util.Sorter")]
  /**
   * Array of sorters applied to the store
   * /
  public native function get sorters():Array;

  /**
   * The store being sorted
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStore_store_sortersEvent$,
      super$J$0k: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_SORT: "onBeforeSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
