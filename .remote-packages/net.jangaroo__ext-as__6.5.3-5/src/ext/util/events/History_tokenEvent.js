Ext.define("ext.util.events.History_tokenEvent", function(History_tokenEvent) {/*package ext.util.events {
import net.jangaroo.ext.FlExtEvent;

public class History_tokenEvent extends FlExtEvent {
  /**
   * Fires when navigation back or forwards within the local page's history occurs.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.util.History.html#event-change Original Ext JS documentation of 'change'
   * @see ext.util.SHistory
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){History_tokenEvent.__PARAMETER_SEQUENCE__=( ["token", "eOpts"]);}/*;

  public*/ function History_tokenEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Vz92(type, arguments);
  }/*

  /**
   * An identifier associated with the page state at that point in its history.
   * /
  public native function get token():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: History_tokenEvent$,
      super$Vz92: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
