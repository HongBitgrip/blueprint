Ext.define("ext.panel.events.Panel_component_indexEvent", function(Panel_component_indexEvent) {/*package ext.panel.events {
import ext.Component;
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_component_indexEvent extends FlExtEvent {
  /**
   * Fires when any →<code>ext.Component</code> is added or inserted as a docked item.
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.DockingContainer.html#event-dockedadd Original Ext JS documentation of 'dockedadd'
   * @see ext.panel.Panel
   * @eventType onDockedAdd
   * /
  public static const DOCKED_ADD:String = "onDockedAdd";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_component_indexEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "index", "eOpts"]);}/*;

  public*/ function Panel_component_indexEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$XMgZ(type, arguments);
  }/*

  /**
   * The component being added
   * /
  public native function get component():Component;

  /**
   * The index at which the component will be added docked items collection
   * /
  public native function get index():Number;

  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_component_indexEvent$,
      super$XMgZ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DOCKED_ADD: "onDockedAdd",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
