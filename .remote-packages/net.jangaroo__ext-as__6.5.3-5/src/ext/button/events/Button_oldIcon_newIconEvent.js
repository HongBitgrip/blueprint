Ext.define("ext.button.events.Button_oldIcon_newIconEvent", function(Button_oldIcon_newIconEvent) {/*package ext.button.events {
import ext.button.Button;

import net.jangaroo.ext.FlExtEvent;

public class Button_oldIcon_newIconEvent extends FlExtEvent {
  /**
   * Fired when the button's icon is changed by the →<code>setIcon()</code> or →<code>setIconCls()</code> methods.
   * @see ext.button.Button#setIcon()
   * @see ext.button.Button#setIconCls()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-iconchange Original Ext JS documentation of 'iconchange'
   * @see ext.button.Button
   * @eventType onIconChange
   * /
  public static const ICON_CHANGE:String = "onIconChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_oldIcon_newIconEvent.__PARAMETER_SEQUENCE__=( ["source", "oldIcon", "newIcon", "eOpts"]);}/*;

  public*/ function Button_oldIcon_newIconEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$uRAd(type, arguments);
  }/*

  public native function get newIcon():String;

  public native function get oldIcon():String;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_oldIcon_newIconEvent$,
      super$uRAd: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ICON_CHANGE: "onIconChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
