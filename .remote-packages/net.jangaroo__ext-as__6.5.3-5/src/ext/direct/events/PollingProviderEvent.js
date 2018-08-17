Ext.define("ext.direct.events.PollingProviderEvent", function(PollingProviderEvent) {/*package ext.direct.events {
import ext.direct.PollingProvider;

import net.jangaroo.ext.FlExtEvent;

public class PollingProviderEvent extends FlExtEvent {
  /**
   * Fired immediately before a poll takes place.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.PollingProvider.html#event-beforepoll Original Ext JS documentation of 'beforepoll'
   * @see ext.direct.PollingProvider
   * @eventType onBeforePoll
   * /
  public static const BEFORE_POLL:String = "onBeforePoll";
  /**
   * Fired immediately after a poll takes place.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.direct.PollingProvider.html#event-poll Original Ext JS documentation of 'poll'
   * @see ext.direct.PollingProvider
   * @eventType onPoll
   * /
  public static const POLL:String = "onPoll";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PollingProviderEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function PollingProviderEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$05nZ(type, arguments);
  }/*

  public native function get source():PollingProvider;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PollingProviderEvent$,
      super$05nZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_POLL: "onBeforePoll",
        POLL: "onPoll",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
