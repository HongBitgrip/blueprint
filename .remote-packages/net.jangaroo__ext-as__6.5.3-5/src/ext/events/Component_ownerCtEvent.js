Ext.define("ext.events.Component_ownerCtEvent", function(Component_ownerCtEvent) {/*package ext.events {
import ext.Component;
import ext.container.Container;

import net.jangaroo.ext.FlExtEvent;

public class Component_ownerCtEvent extends FlExtEvent {
  /**
   * Fires when a component is removed from an Ext.container.Container
   * @since 3.4.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-removed Original Ext JS documentation of 'removed'
   * @see ext.Component
   * @eventType onRemoved
   * /
  public static const REMOVED:String = "onRemoved";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_ownerCtEvent.__PARAMETER_SEQUENCE__=( ["source", "ownerCt", "eOpts"]);}/*;

  public*/ function Component_ownerCtEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$K4G0(type, arguments);
  }/*

  /**
   * Container which holds the component
   * /
  public native function get ownerCt():Container;

  public native function get source():Component;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Component_ownerCtEvent$,
      super$K4G0: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        REMOVED: "onRemoved",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
