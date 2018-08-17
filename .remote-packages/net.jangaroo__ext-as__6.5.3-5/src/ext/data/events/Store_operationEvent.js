Ext.define("ext.data.events.Store_operationEvent", function(Store_operationEvent) {/*package ext.data.events {
import ext.data.Store;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class Store_operationEvent extends FlExtEvent {
  /**
   * Fires before a prefetch occurs. Return <code>false</code> to cancel.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.Store.html#event-beforeprefetch Original Ext JS documentation of 'beforeprefetch'
   * @see ext.data.Store
   * @eventType onBeforePrefetch
   * /
  public static const BEFORE_PREFETCH:String = "onBeforePrefetch";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Store_operationEvent.__PARAMETER_SEQUENCE__=( ["source", "operation", "eOpts"]);}/*;

  public*/ function Store_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SVnF(type, arguments);
  }/*

  /**
   * The associated operation.
   * /
  public native function get operation():Operation;

  public native function get source():Store;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Store_operationEvent$,
      super$SVnF: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_PREFETCH: "onBeforePrefetch",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
