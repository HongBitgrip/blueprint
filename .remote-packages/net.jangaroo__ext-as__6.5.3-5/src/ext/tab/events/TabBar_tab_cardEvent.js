Ext.define("ext.tab.events.TabBar_tab_cardEvent", function(TabBar_tab_cardEvent) {/*package ext.tab.events {
import ext.Component;
import ext.tab.Tab;
import ext.tab.TabBar;

import net.jangaroo.ext.FlExtEvent;

public class TabBar_tab_cardEvent extends FlExtEvent {
  /**
   * Fired when the currently-active tab has changed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Bar.html#event-change Original Ext JS documentation of 'change'
   * @see ext.tab.TabBar
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TabBar_tab_cardEvent.__PARAMETER_SEQUENCE__=( ["tabBar", "tab", "card", "eOpts"]);}/*;

  public*/ function TabBar_tab_cardEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$qxuk(type, arguments);
  }/*

  /**
   * The card that was just shown in the TabPanel
   * /
  public native function get card():Component;

  /**
   * The new Tab
   * /
  public native function get tab():Tab;

  /**
   * The TabBar
   * /
  public native function get tabBar():TabBar;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TabBar_tab_cardEvent$,
      super$qxuk: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
