Ext.define("ext.events.ElementLoader_optionsEvent", function(ElementLoader_optionsEvent) {/*package ext.events {
import ext.ElementLoader;

import net.jangaroo.ext.FlExtEvent;

public class ElementLoader_optionsEvent extends FlExtEvent {
  /**
   * Fires before a load request is made to the server.
   * Returning false from an event listener can prevent the load
   * from occurring.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.ElementLoader.html#event-beforeload Original Ext JS documentation of 'beforeload'
   * @see ext.ElementLoader
   * @eventType onBeforeLoad
   * /
  public static const BEFORE_LOAD:String = "onBeforeLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ElementLoader_optionsEvent.__PARAMETER_SEQUENCE__=( ["source", "options", "eOpts"]);}/*;

  public*/ function ElementLoader_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$j6Gq(type, arguments);
  }/*

  /**
   * The options passed to the request
   * /
  public native function get options():Object;

  public native function get source():ElementLoader;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ElementLoader_optionsEvent$,
      super$j6Gq: function() {
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
