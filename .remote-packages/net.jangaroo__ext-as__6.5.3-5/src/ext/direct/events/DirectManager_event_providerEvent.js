Ext.define("ext.direct.events.DirectManager_event_providerEvent", function(DirectManager_event_providerEvent) {/*package ext.direct.events {
import ext.direct.DirectEvent;
import ext.direct.Provider;

import net.jangaroo.ext.FlExtEvent;

public class DirectManager_event_providerEvent extends FlExtEvent {
  /**
   * Fires after an event.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Manager.html#event-event Original Ext JS documentation of 'event'
   * @see ext.direct.SDirectManager
   * @eventType onEvent
   * /
  public static const EVENT:String = "onEvent";
  /**
   * Fires after an event exception.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.Manager.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.direct.SDirectManager
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DirectManager_event_providerEvent.__PARAMETER_SEQUENCE__=( ["event", "provider", "eOpts"]);}/*;

  public*/ function DirectManager_event_providerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$cSli(type, arguments);
  }/*

  /**
   * The →<code>ext.direct.DirectEvent</code> that occurred.
   * @see ext.direct.DirectEvent
   * /
  public native function get event():DirectEvent;

  /**
   * The →<code>ext.direct.Provider</code>
   * that provided the event.
   * @see ext.direct.Provider
   * /
  public native function get provider():Provider;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DirectManager_event_providerEvent$,
      super$cSli: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        EVENT: "onEvent",
        EXCEPTION: "onException",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
