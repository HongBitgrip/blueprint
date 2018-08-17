Ext.define("ext.flash.events.FlashComponentEvent", function(FlashComponentEvent) {/*package ext.flash.events {
import ext.flash.FlashComponent;

import net.jangaroo.ext.FlExtEvent;

public class FlashComponentEvent extends FlExtEvent {
  /**
   * Fired when the Flash movie embedding fails
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.flash.Component.html#event-failure Original Ext JS documentation of 'failure'
   * @see ext.flash.FlashComponent
   * @eventType onFailure
   * /
  public static const FAILURE:String = "onFailure";
  /**
   * Fired when the Flash movie has been successfully embedded
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.flash.Component.html#event-success Original Ext JS documentation of 'success'
   * @see ext.flash.FlashComponent
   * @eventType onSuccess
   * /
  public static const SUCCESS:String = "onSuccess";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FlashComponentEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function FlashComponentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$y1uZ(type, arguments);
  }/*

  public native function get source():FlashComponent;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FlashComponentEvent$,
      super$y1uZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        FAILURE: "onFailure",
        SUCCESS: "onSuccess",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
