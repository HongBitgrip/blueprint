Ext.define("ext.container.events.DockingContainer_componentEvent", function(DockingContainer_componentEvent) {/*package ext.container.events {
import ext.Component;
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class DockingContainer_componentEvent extends FlExtEvent {
  /**
   * Fires when any →<code>ext.Component</code> is removed from the docked items.
   * @see ext.Component
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.container.DockingContainer.html#event-dockedremove Original Ext JS documentation of 'dockedremove'
   * @see ext.container.DockingContainer
   * @eventType onDockedRemove
   * /
  public static const DOCKED_REMOVE:String = "onDockedRemove";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DockingContainer_componentEvent.__PARAMETER_SEQUENCE__=( ["source", "component", "eOpts"]);}/*;

  public*/ function DockingContainer_componentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$gBHF(type, arguments);
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
      constructor: DockingContainer_componentEvent$,
      super$gBHF: function() {
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
