Ext.define("ext.menu.events.CheckItem_checkedEvent", function(CheckItem_checkedEvent) {/*package ext.menu.events {
import ext.menu.CheckItem;

import net.jangaroo.ext.FlExtEvent;

public class CheckItem_checkedEvent extends FlExtEvent {
  /**
   * Fires before a change event. Return false to cancel.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.CheckItem.html#event-beforecheckchange Original Ext JS documentation of 'beforecheckchange'
   * @see ext.menu.CheckItem
   * @eventType onBeforeCheckChange
   * /
  public static const BEFORE_CHECK_CHANGE:String = "onBeforeCheckChange";
  /**
   * Fires after a change event.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.CheckItem.html#event-checkchange Original Ext JS documentation of 'checkchange'
   * @see ext.menu.CheckItem
   * @eventType onCheckChange
   * /
  public static const CHECK_CHANGE:String = "onCheckChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CheckItem_checkedEvent.__PARAMETER_SEQUENCE__=( ["source", "checked", "eOpts"]);}/*;

  public*/ function CheckItem_checkedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$2SVg(type, arguments);
  }/*

  public native function get checked():Boolean;

  public native function get source():CheckItem;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CheckItem_checkedEvent$,
      super$2SVg: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CHECK_CHANGE: "onBeforeCheckChange",
        CHECK_CHANGE: "onCheckChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
