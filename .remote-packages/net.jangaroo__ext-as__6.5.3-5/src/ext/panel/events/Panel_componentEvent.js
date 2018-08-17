Ext.define("ext.panel.events.Panel_componentEvent", function(Panel_componentEvent) {/*package ext.panel.events {
import ext.Component;
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_componentEvent extends FlExtEvent {
  /**
   * Fires when any →<code>ext.Component</code> is removed from the docked items.
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.DockingContainer.html#event-dockedremove Original Ext JS documentation of 'dockedremove'
   * @see ext.panel.Panel
   * @eventType onDockedRemove
   * /
  public static const DOCKED_REMOVE:String = "onDockedRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_componentEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "eOpts"]);}/*;

  public*/ function Panel_componentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$pi_M(type, arguments);
  }/*

  /**
   * The component being removed
   * /
  public native function get component():Component;

  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_componentEvent$,
      super$pi_M: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DOCKED_REMOVE: "onDockedRemove",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
