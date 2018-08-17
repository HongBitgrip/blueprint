Ext.define("ext.util.events.HashMapEvent", function(HashMapEvent) {/*package ext.util.events {
import ext.util.HashMap;

import net.jangaroo.ext.FlExtEvent;

public class HashMapEvent extends FlExtEvent {
  /**
   * Fires when the hash is cleared.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.HashMap.html#event-clear Original Ext JS documentation of 'clear'
   * @see ext.util.HashMap
   * @eventType onClear
   * /
  public static const CLEAR:String = "onClear";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HashMapEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function HashMapEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Y9$Y(type, arguments);
  }/*

  public native function get source():HashMap;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HashMapEvent$,
      super$Y9$Y: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLEAR: "onClear",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
