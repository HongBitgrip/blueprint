Ext.define("ext.state.events.Provider_key_valueEvent", function(Provider_key_valueEvent) {/*package ext.state.events {
import ext.state.Provider;

import net.jangaroo.ext.FlExtEvent;

public class Provider_key_valueEvent extends FlExtEvent {
  /**
   * Fires when a state change occurs.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.state.Provider.html#event-statechange Original Ext JS documentation of 'statechange'
   * @see ext.state.Provider
   * @eventType onStateChange
   * /
  public static const STATE_CHANGE:String = "onStateChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Provider_key_valueEvent.__PARAMETER_SEQUENCE__=( ["source", "key", "value", "eOpts"]);}/*;

  public*/ function Provider_key_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$f_HC(type, arguments);
  }/*

  /**
   * The state key which was changed
   * /
  public native function get key():String;

  /**
   * This state provider
   * /
  public native function get source():Provider;

  /**
   * The encoded value for the state
   * /
  public native function get value():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Provider_key_valueEvent$,
      super$f_HC: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        STATE_CHANGE: "onStateChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
