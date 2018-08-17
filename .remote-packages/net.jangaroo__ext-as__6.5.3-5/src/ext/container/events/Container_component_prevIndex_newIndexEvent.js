Ext.define("ext.container.events.Container_component_prevIndex_newIndexEvent", function(Container_component_prevIndex_newIndexEvent) {/*package ext.container.events {
import ext.Component;
import ext.container.Container;

import net.jangaroo.ext.FlExtEvent;

public class Container_component_prevIndex_newIndexEvent extends FlExtEvent {
  /**
   * Fires after any →<code>ext.Component</code> has changed its ordinal position within the container.
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.Container.html#event-childmove Original Ext JS documentation of 'childmove'
   * @see ext.container.Container
   * @eventType onChildMove
   * /
  public static const CHILD_MOVE:String = "onChildMove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Container_component_prevIndex_newIndexEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "prevIndex", "newIndex", "eOpts"]);}/*;

  public*/ function Container_component_prevIndex_newIndexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xNKD(type, arguments);
  }/*

  /**
   * The component that was moved
   * /
  public native function get component():Component;

  /**
   * The new ordinal position of the Component
   * /
  public native function get newIndex():Number;

  /**
   * The previous ordinal position of the Component
   * /
  public native function get prevIndex():Number;

  public native function get source():Container;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Container_component_prevIndex_newIndexEvent$,
      super$xNKD: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHILD_MOVE: "onChildMove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
