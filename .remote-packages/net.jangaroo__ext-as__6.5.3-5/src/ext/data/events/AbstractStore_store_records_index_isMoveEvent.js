Ext.define("ext.data.events.AbstractStore_store_records_index_isMoveEvent", function(AbstractStore_store_records_index_isMoveEvent) {/*package ext.data.events {
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class AbstractStore_store_records_index_isMoveEvent extends FlExtEvent {
  /**
   * Fired when one or more records have been removed from this Store.
   * <p><b>The signature for this event has changed in 5.0:</b></p>
   * @since 5.0.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.data.AbstractStore
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStore_store_records_index_isMoveEvent.__PARAMETER_SEQUENCE__=( ["store", "records", "index", "isMove", "eOpts"]);}/*;

  public*/ function AbstractStore_store_records_index_isMoveEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$hRnP(type, arguments);
  }/*

  /**
   * The index at which the records were removed.
   * /
  public native function get index():Number;

  /**
   * <code>true</code> if the child node is being removed so it can be
   * moved to another position in this Store.
   * /
  public native function get isMove():Boolean;

  [ArrayElementType("ext.data.Model")]
  /**
   * The records that were removed. In previous
   * releases this was a single record, not an array.
   * /
  public native function get records():Array;

  /**
   * The Store object
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStore_store_records_index_isMoveEvent$,
      super$hRnP: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REMOVE: "onRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
