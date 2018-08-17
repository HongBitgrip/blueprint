Ext.define("ext.events.ElementLoader_response_optionsEvent", function(ElementLoader_response_optionsEvent) {/*package ext.events {
import ext.ElementLoader;

import net.jangaroo.ext.FlExtEvent;

public class ElementLoader_response_optionsEvent extends FlExtEvent {
  /**
   * Fires after an unsuccessful load.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.ElementLoader.html#event-exception Original Ext JS documentation of 'exception'
   * @see ext.ElementLoader
   * @eventType onException
   * /
  public static const EXCEPTION:String = "onException";
  /**
   * Fires after a successful load.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.ElementLoader.html#event-load Original Ext JS documentation of 'load'
   * @see ext.ElementLoader
   * @eventType onLoad
   * /
  public static const LOAD:String = "onLoad";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ElementLoader_response_optionsEvent.__PARAMETER_SEQUENCE__=( ["source", "response", "options", "eOpts"]);}/*;

  public*/ function ElementLoader_response_optionsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$e4j2(type, arguments);
  }/*

  /**
   * The options passed to the request
   * /
  public native function get options():Object;

  /**
   * The response from the server
   * /
  public native function get response():Object;

  public native function get source():ElementLoader;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ElementLoader_response_optionsEvent$,
      super$e4j2: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        EXCEPTION: "onException",
        LOAD: "onLoad",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
