Ext.define("ext.data.events.ProxyStore_optionsEvent", function(ProxyStore_optionsEvent) {/*package ext.data.events {
import net.jangaroo.ext.FlExtEvent;

public class ProxyStore_optionsEvent extends FlExtEvent {
  /**
   * Fired before a call to →<code>sync()</code> is executed. Return false from any listener to cancel the sync
   * @see ext.data.ProxyStore#sync()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.ProxyStore.html#event-beforesync Original Ext JS documentation of 'beforesync'
   * @see ext.data.ProxyStore
   * @eventType onBeforeSync
   * /
  public static const BEFORE_SYNC:String = "onBeforeSync";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ProxyStore_optionsEvent.__PARAMETER_SEQUENCE__=( ["options", "eOpts"]);}/*;

  public*/ function ProxyStore_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$98lA(type, arguments);
  }/*

  /**
   * Hash of all records to be synchronized, broken down into create, update and destroy
   * /
  public native function get options():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ProxyStore_optionsEvent$,
      super$98lA: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_SYNC: "onBeforeSync",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
