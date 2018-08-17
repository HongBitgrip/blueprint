Ext.define("ext.container.events.Container_component_indexEvent", function(Container_component_indexEvent) {/*package ext.container.events {
import ext.Component;
import ext.container.Container;

import net.jangaroo.ext.FlExtEvent;

public class Container_component_indexEvent extends FlExtEvent {
  /**
   * Fires after any →<code>ext.Component</code> is added or inserted into the container.
   * @since 2.3.0
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-add Original Ext JS documentation of 'add'
   * @see ext.container.Container
   * @eventType onAdd
   * /
  public static const ADD:String = "onAdd";
  /**
   * Fires before any →<code>ext.Component</code> is added or inserted into the container.
   * A handler can return false to cancel the add.
   * @since 2.3.0
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-beforeadd Original Ext JS documentation of 'beforeadd'
   * @see ext.container.Container
   * @eventType onBeforeAdd
   * /
  public static const BEFORE_ADD:String = "onBeforeAdd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Container_component_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "index", "eOpts"]);}/*;

  public*/ function Container_component_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$DjI3(type, arguments);
  }/*

  /**
   * The component that was added
   * /
  public native function get component():Component;

  /**
   * The index at which the component was added to the container's items collection
   * /
  public native function get index():Number;

  public native function get source():Container;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Container_component_indexEvent$,
      super$DjI3: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD: "onAdd",
        BEFORE_ADD: "onBeforeAdd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
