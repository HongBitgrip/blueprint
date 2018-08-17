Ext.define("ext.data.events.AbstractStore_storeEvent", function(AbstractStore_storeEvent) {/*package ext.data.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class AbstractStore_storeEvent extends FlExtEvent {
  /**
   * Fires after a store is sorted.
   * <p>For <i>remotely sorted</i> (→<code>remoteSort</code>) stores, this will be upon the success of a load operation triggered by
   * changing the store's sorters.</p>
   * <p>For locally sorted stores, this will be just after the data items in the store's backing collection are sorted.</p>
   * @see ext.data.AbstractStore#remoteSort
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-sort Original Ext JS documentation of 'sort'
   * @see ext.data.AbstractStore
   * @eventType onSort
   * /
  public static const SORT:String = "onSort";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStore_storeEvent.__PARAMETER_SEQUENCE__=( ["store", "eOpts"]);}/*;

  public*/ function AbstractStore_storeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$njLN(type, arguments);
  }/*

  /**
   * The store being sorted
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStore_storeEvent$,
      super$njLN: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SORT: "onSort",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
