Ext.define("ext.events.Component_container_posEvent", function(Component_container_posEvent) {/*package ext.events {
import ext.Component;
import ext.container.Container;

import net.jangaroo.ext.FlExtEvent;

public class Component_container_posEvent extends FlExtEvent {
  /**
   * Fires after a Component had been added to a Container.
   * @since 3.4.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-added Original Ext JS documentation of 'added'
   * @see ext.Component
   * @eventType onAdded
   * /
  public static const ADDED:String = "onAdded";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_container_posEvent.__PARAMETER_SEQUENCE__=( ["source", "container", "pos", "eOpts"]);}/*;

  public*/ function Component_container_posEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gwIk(type, arguments);
  }/*

  /**
   * Parent Container
   * /
  public native function get container():Container;

  /**
   * position of Component
   * /
  public native function get pos():Number;

  public native function get source():Component;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Component_container_posEvent$,
      super$gwIk: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADDED: "onAdded",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
