Ext.define("ext.data.events.AbstractStoreEvent", function(AbstractStoreEvent) {/*package ext.data.events {
import net.jangaroo.ext.FlExtEvent;

public class AbstractStoreEvent extends FlExtEvent {
  /**
   * Fires when the →<code>beginUpdate()</code> method is called. Automatic synchronization as configured
   * by the →<code>ext.data.ProxyStore.autoSync</code> flag is deferred until the →<code>endUpdate()</code> method is called, so multiple
   * mutations can be coalesced into one synchronization operation.
   * @see ext.data.AbstractStore#beginUpdate()
   * @see ext.data.ProxyStore#autoSync
   * @see ext.data.AbstractStore#endUpdate()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-beginupdate Original Ext JS documentation of 'beginupdate'
   * @see ext.data.AbstractStore
   * @eventType onBeginUpdate
   * /
  public static const BEGIN_UPDATE:String = "onBeginUpdate";
  /**
   * Fired after the →<code>ext.data.Store.removeAll()</code> method is called.
   * @since 1.1.0
   * @see ext.data.Store#removeAll()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-clear Original Ext JS documentation of 'clear'
   * @see ext.data.AbstractStore
   * @eventType onClear
   * /
  public static const CLEAR:String = "onClear";
  /**
   * Fires for any data change in the store. This is a catch-all event that is typically fired
   * in conjunction with other events (such as <code>→event:onAdd</code>, <code>→event:onRemove</code>, <code>→event:onUpdate</code>, <code>→event:onRefresh</code>).
   * @since 1.1.0
   * @see ext.data.AbstractStore#event:onAdd
   * @see ext.data.AbstractStore#event:onRemove
   * @see ext.data.AbstractStore#event:onUpdate
   * @see ext.data.AbstractStore#event:onRefresh
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-datachanged Original Ext JS documentation of 'datachanged'
   * @see ext.data.AbstractStore
   * @eventType onDataChanged
   * /
  public static const DATA_CHANGED:String = "onDataChanged";
  /**
   * Fires when the →<code>endUpdate()</code> method is called. Automatic synchronization as configured
   * by the →<code>ext.data.ProxyStore.autoSync</code> flag is deferred until the →<code>endUpdate()</code> method is called, so multiple
   * mutations can be coalesced into one synchronization operation.
   * @see ext.data.AbstractStore#endUpdate()
   * @see ext.data.ProxyStore#autoSync
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-endupdate Original Ext JS documentation of 'endupdate'
   * @see ext.data.AbstractStore
   * @eventType onEndUpdate
   * /
  public static const END_UPDATE:String = "onEndUpdate";
  /**
   * Fires when the data cache has changed in a bulk manner (e.g., it has been sorted, filtered, etc.) and a
   * widget that is using this Store as a Record cache should refresh its view.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.AbstractStore.html#event-refresh Original Ext JS documentation of 'refresh'
   * @see ext.data.AbstractStore
   * @eventType onRefresh
   * /
  public static const REFRESH:String = "onRefresh";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractStoreEvent.__PARAMETER_SEQUENCE__=( ["eOpts"]);}/*;

  public*/ function AbstractStoreEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5Dyv(type, arguments);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractStoreEvent$,
      super$5Dyv: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEGIN_UPDATE: "onBeginUpdate",
        CLEAR: "onClear",
        DATA_CHANGED: "onDataChanged",
        END_UPDATE: "onEndUpdate",
        REFRESH: "onRefresh",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
