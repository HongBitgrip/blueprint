Ext.define("ext.events.Component_x_yEvent", function(Component_x_yEvent) {/*package ext.events {
import ext.Component;

import net.jangaroo.ext.FlExtEvent;

public class Component_x_yEvent extends FlExtEvent {
  /**
   * Fires after the component is moved.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-move Original Ext JS documentation of 'move'
   * @see ext.Component
   * @eventType onMove
   * /
  public static const MOVE:String = "onMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_x_yEvent.__PARAMETER_SEQUENCE__=( ["source", "x", "y", "eOpts"]);}/*;

  public*/ function Component_x_yEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$e2dI(type, arguments);
  }/*

  public native function get source():Component;

  /**
   * The new x position.
   * /
  public native function get x():Number;

  /**
   * The new y position.
   * /
  public native function get y():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Component_x_yEvent$,
      super$e2dI: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        MOVE: "onMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
