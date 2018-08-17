Ext.define("ext.button.events.Button_oldText_newTextEvent", function(Button_oldText_newTextEvent) {/*package ext.button.events {
import ext.button.Button;

import net.jangaroo.ext.FlExtEvent;

public class Button_oldText_newTextEvent extends FlExtEvent {
  /**
   * Fired when the button's text is changed by the →<code>setText</code> method.
   * @see ext.button.Button#setText
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Button.html#event-textchange Original Ext JS documentation of 'textchange'
   * @see ext.button.Button
   * @eventType onTextChange
   * /
  public static const TEXT_CHANGE:String = "onTextChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Button_oldText_newTextEvent.__PARAMETER_SEQUENCE__=( ["source", "oldText", "newText", "eOpts"]);}/*;

  public*/ function Button_oldText_newTextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$GxO$(type, arguments);
  }/*

  public native function get newText():String;

  public native function get oldText():String;

  public native function get source():Button;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Button_oldText_newTextEvent$,
      super$GxO$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TEXT_CHANGE: "onTextChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
