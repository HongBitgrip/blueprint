Ext.define("ext.grid.locking.events.Lockable_store_operationEvent", function(Lockable_store_operationEvent) {/*package ext.grid.locking.events {
import ext.data.Store;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class Lockable_store_operationEvent extends FlExtEvent {
  /**
   * Fires before a request is made for a new data object. If the beforeload handler returns false the load
   * action will be canceled.
   * <p><b>Note:</b> If you are using a buffered store, you should use
   * →<code>ext.data.Store.event:onBeforePrefetch</code>.</p>
   * @see ext.data.Store#event:onBeforePrefetch
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.grid.locking.Lockable.html#event-beforeload Original Ext JS documentation of 'beforeload'
   * @see ext.grid.locking.Lockable
   * @eventType onBeforeLoad
   * /
  public static const BEFORE_LOAD:String = "onBeforeLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Lockable_store_operationEvent.__PARAMETER_SEQUENCE__=( ["store", "operation", "eOpts"]);}/*;

  public*/ function Lockable_store_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8Zqe(type, arguments);
  }/*

  /**
   * The Ext.data.operation.Operation object that will be passed to the Proxy to
   * load the Store
   * /
  public native function get operation():Operation;

  /**
   * This Store
   * /
  public native function get store():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Lockable_store_operationEvent$,
      super$8Zqe: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_LOAD: "onBeforeLoad",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
