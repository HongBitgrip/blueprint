Ext.define("ext.data.events.ProxyStore_store_operationEvent", function(ProxyStore_store_operationEvent) {/*package ext.data.events {
import ext.data.Store;
import ext.data.operation.Operation;

import net.jangaroo.ext.FlExtEvent;

public class ProxyStore_store_operationEvent extends FlExtEvent {
  /**
   * Fires before a request is made for a new data object. If the beforeload handler returns false the load
   * action will be canceled.
   * <p><b>Note:</b> If you are using a buffered store, you should use
   * →<code>ext.data.Store.event:onBeforePrefetch</code>.</p>
   * @since 1.1.0
   * @see ext.data.Store#event:onBeforePrefetch
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.ProxyStore.html#event-beforeload Original Ext JS documentation of 'beforeload'
   * @see ext.data.ProxyStore
   * @eventType onBeforeLoad
   * /
  public static const BEFORE_LOAD:String = "onBeforeLoad";
  /**
   * Fires whenever a successful write has been made via the configured <i>Proxy</i> (→<code>proxy</code>)
   * @since 3.4.0
   * @see ext.data.ProxyStore#proxy
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.ProxyStore.html#event-write Original Ext JS documentation of 'write'
   * @see ext.data.ProxyStore
   * @eventType onWrite
   * /
  public static const WRITE:String = "onWrite";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProxyStore_store_operationEvent.__PARAMETER_SEQUENCE__=( ["store", "operation", "eOpts"]);}/*;

  public*/ function ProxyStore_store_operationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$j7k$(type, arguments);
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
      constructor: ProxyStore_store_operationEvent$,
      super$j7k$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_LOAD: "onBeforeLoad",
        WRITE: "onWrite",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
