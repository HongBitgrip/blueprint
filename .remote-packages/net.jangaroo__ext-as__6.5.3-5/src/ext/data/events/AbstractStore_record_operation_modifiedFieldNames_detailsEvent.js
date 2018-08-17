Ext.define("ext.data.events.AbstractStore_record_operation_modifiedFieldNames_detailsEvent", function(AbstractStore_record_operation_modifiedFieldNames_detailsEvent) {/*package ext.data.events {
import ext.data.Model;
import ext.data.Store;

import net.jangaroo.ext.FlExtEvent;

public class AbstractStore_record_operation_modifiedFieldNames_detailsEvent extends FlExtEvent {
  /**
   * Fires when a Model instance has been updated.
   * @since 1.1.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-update Original Ext JS documentation of 'update'
   * @see ext.data.AbstractStore
   * @eventType onUpdate
   * /
  public static const UPDATE:String = "onUpdate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStore_record_operation_modifiedFieldNames_detailsEvent.__PARAMETER_SEQUENCE__=( ["source", "record", "operation", "modifiedFieldNames", "details", "eOpts"]);}/*;

  public*/ function AbstractStore_record_operation_modifiedFieldNames_detailsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Ok7u(type, arguments);
  }/*

  /**
   * An object describing the change. See the
   * <i>itemchange event</i> (→<code>ext.util.Collection.event:onItemChange</code>) of the store's backing collection
   * @see ext.util.Collection#event:onItemChange
   * /
  public native function get details():Object;

  [ArrayElementType("String")]
  /**
   * Array of field names changed during edit.
   * /
  public native function get modifiedFieldNames():Array;

  /**
   * The update operation being performed. Value may be one of:
   * <pre>
   * Ext.data.Model.EDIT
   * Ext.data.Model.REJECT
   * Ext.data.Model.COMMIT
   * </pre>
   * /
  public native function get operation():String;

  /**
   * The Model instance that was updated
   * /
  public native function get record():Model;

  public native function get source():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStore_record_operation_modifiedFieldNames_detailsEvent$,
      super$Ok7u: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        UPDATE: "onUpdate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
