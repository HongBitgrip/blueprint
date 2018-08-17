Ext.define("ext.container.events.Container_componentEvent", function(Container_componentEvent) {/*package ext.container.events {
import ext.Component;
import ext.container.Container;

import net.jangaroo.ext.FlExtEvent;

public class Container_componentEvent extends FlExtEvent {
  /**
   * Fires before any →<code>ext.Component</code> is removed from the container. A handler can return
   * false to cancel the remove.
   * @since 2.3.0
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-beforeremove Original Ext JS documentation of 'beforeremove'
   * @see ext.container.Container
   * @eventType onBeforeRemove
   * /
  public static const BEFORE_REMOVE:String = "onBeforeRemove";
  /**
   * Fires after any →<code>ext.Component</code> is removed from the container.
   * @since 2.3.0
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-remove Original Ext JS documentation of 'remove'
   * @see ext.container.Container
   * @eventType onRemove
   * /
  public static const REMOVE:String = "onRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Container_componentEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "eOpts"]);}/*;

  public*/ function Container_componentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$pI5s(type, arguments);
  }/*

  /**
   * The component being removed
   * /
  public native function get component():Component;

  public native function get source():Container;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Container_componentEvent$,
      super$pI5s: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_REMOVE: "onBeforeRemove",
        REMOVE: "onRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
