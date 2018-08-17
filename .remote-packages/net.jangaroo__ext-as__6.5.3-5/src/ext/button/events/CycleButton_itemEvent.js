Ext.define("ext.button.events.CycleButton_itemEvent", function(CycleButton_itemEvent) {/*package ext.button.events {
import ext.button.CycleButton;
import ext.menu.CheckItem;

import net.jangaroo.ext.FlExtEvent;

public class CycleButton_itemEvent extends FlExtEvent {
  /**
   * Fires after the button's active menu item has changed. Note that if a →<code>changeHandler</code> function is
   * set on this CycleButton, it will be called instead on active item change and this change event will not
   * be fired.
   * @see ext.button.CycleButton#changeHandler
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Cycle.html#event-change Original Ext JS documentation of 'change'
   * @see ext.button.CycleButton
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){CycleButton_itemEvent.__PARAMETER_SEQUENCE__=( ["source", "item", "eOpts"]);}/*;

  public*/ function CycleButton_itemEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$haGw(type, arguments);
  }/*

  /**
   * The menu item that was selected
   * /
  public native function get item():CheckItem;

  public native function get source():CycleButton;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: CycleButton_itemEvent$,
      super$haGw: function() {
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
