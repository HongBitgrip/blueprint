Ext.define("ext.tab.events.TabPanel_newCard_oldCardEvent", function(TabPanel_newCard_oldCardEvent) {/*package ext.tab.events {
import ext.Component;
import ext.tab.TabPanel;

import net.jangaroo.ext.FlExtEvent;

public class TabPanel_newCard_oldCardEvent extends FlExtEvent {
  /**
   * Fires before a tab change (activated by →<code>setActiveTab()</code>). Return false in any listener to cancel
   * the tabchange
   * @see ext.tab.TabPanel#setActiveTab()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Panel.html#event-beforetabchange Original Ext JS documentation of 'beforetabchange'
   * @see ext.tab.TabPanel
   * @eventType onBeforeTabChange
   * /
  public static const BEFORE_TAB_CHANGE:String = "onBeforeTabChange";
  /**
   * Fires when a new tab has been activated (activated by →<code>setActiveTab()</code>).
   * @see ext.tab.TabPanel#setActiveTab()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.tab.Panel.html#event-tabchange Original Ext JS documentation of 'tabchange'
   * @see ext.tab.TabPanel
   * @eventType onTabChange
   * /
  public static const TAB_CHANGE:String = "onTabChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TabPanel_newCard_oldCardEvent.__PARAMETER_SEQUENCE__=( ["tabPanel", "newCard", "oldCard", "eOpts"]);}/*;

  public*/ function TabPanel_newCard_oldCardEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$o$AJ(type, arguments);
  }/*

  /**
   * The card that is about to be activated
   * /
  public native function get newCard():Component;

  /**
   * The card that is currently active
   * /
  public native function get oldCard():Component;

  /**
   * The TabPanel
   * /
  public native function get tabPanel():TabPanel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TabPanel_newCard_oldCardEvent$,
      super$o$AJ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_TAB_CHANGE: "onBeforeTabChange",
        TAB_CHANGE: "onTabChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
