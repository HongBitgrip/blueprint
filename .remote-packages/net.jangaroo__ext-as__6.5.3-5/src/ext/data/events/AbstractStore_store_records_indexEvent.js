Ext.define("ext.data.events.AbstractStore_store_records_indexEvent", function(AbstractStore_store_records_indexEvent) {/*package ext.data.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class AbstractStore_store_records_indexEvent extends FlExtEvent {
  /**
   * Fired when a Model instance has been added to this Store.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-add Original Ext JS documentation of 'add'
   * @see ext.data.AbstractStore
   * @eventType onAdd
   * /
  public static const ADD:String = "onAdd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStore_store_records_indexEvent.__PARAMETER_SEQUENCE__=( ["store", "records", "index", "eOpts"]);}/*;

  public*/ function AbstractStore_store_records_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SFd1(type, arguments);
  }/*

  /**
   * The index at which the records were inserted.
   * /
  public native function get index():Number;

  [ArrayElementType("ext.data.Model")]
  /**
   * The records that were added.
   * /
  public native function get records():Array;

  /**
   * The store.
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStore_store_records_indexEvent$,
      super$SFd1: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD: "onAdd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
