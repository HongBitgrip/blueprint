Ext.define("ext.container.events.Container_layoutEvent", function(Container_layoutEvent) {/*package ext.container.events {
import ext.container.Container;
import ext.layout.container.ContainerLayout;

import net.jangaroo.ext.FlExtEvent;

public class Container_layoutEvent extends FlExtEvent {
  /**
   * Fires when the components in this container are arranged by the associated layout manager.
   * @since 2.3.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-afterlayout Original Ext JS documentation of 'afterlayout'
   * @see ext.container.Container
   * @eventType onAfterLayout
   * /
  public static const AFTER_LAYOUT:String = "onAfterLayout";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Container_layoutEvent.__PARAMETER_SEQUENCE__=( ["source", "layout", "eOpts"]);}/*;

  public*/ function Container_layoutEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$n49N(type, arguments);
  }/*

  /**
   * The ContainerLayout implementation for this container
   * /
  public native function get layout():ContainerLayout;

  public native function get source():Container;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Container_layoutEvent$,
      super$n49N: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        AFTER_LAYOUT: "onAfterLayout",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
