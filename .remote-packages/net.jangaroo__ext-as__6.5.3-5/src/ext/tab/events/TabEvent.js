Ext.define("ext.tab.events.TabEvent", function(TabEvent) {/*package ext.tab.events {
import ext.tab.Tab;

import net.jangaroo.ext.FlExtEvent;

public class TabEvent extends FlExtEvent {
  /**
   * Fired when the tab is activated.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Tab.html#event-activate Original Ext JS documentation of 'activate'
   * @see ext.tab.Tab
   * @eventType onActivate
   * /
  public static const ACTIVATE:String = "onActivate";
  /**
   * Fires if the user clicks on the Tab's close button, but before the →<code>event:onClose</code> event is fired. Return
   * false from any listener to stop the close event being fired
   * @see ext.tab.Tab#event:onClose
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Tab.html#event-beforeclose Original Ext JS documentation of 'beforeclose'
   * @see ext.tab.Tab
   * @eventType onBeforeClose
   * /
  public static const BEFORE_CLOSE:String = "onBeforeClose";
  /**
   * Fires to indicate that the tab is to be closed, usually because the user has clicked the close button.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Tab.html#event-close Original Ext JS documentation of 'close'
   * @see ext.tab.Tab
   * @eventType onClose
   * /
  public static const CLOSE:String = "onClose";
  /**
   * Fired when the tab is deactivated.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Tab.html#event-deactivate Original Ext JS documentation of 'deactivate'
   * @see ext.tab.Tab
   * @eventType onDeactivate
   * /
  public static const DEACTIVATE:String = "onDeactivate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TabEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function TabEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Ts6q(type, arguments);
  }/*

  public native function get source():Tab;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TabEvent$,
      super$Ts6q: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTIVATE: "onActivate",
        BEFORE_CLOSE: "onBeforeClose",
        CLOSE: "onClose",
        DEACTIVATE: "onDeactivate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
