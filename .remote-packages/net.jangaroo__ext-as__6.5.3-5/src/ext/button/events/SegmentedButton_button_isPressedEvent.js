Ext.define("ext.button.events.SegmentedButton_button_isPressedEvent", function(SegmentedButton_button_isPressedEvent) {/*package ext.button.events {
import ext.button.Button;
import ext.button.SegmentedButton;

import net.jangaroo.ext.FlExtEvent;

public class SegmentedButton_button_isPressedEvent extends FlExtEvent {
  /**
   * Fires when any child button's pressed state has changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.button.Segmented.html#event-toggle Original Ext JS documentation of 'toggle'
   * @see ext.button.SegmentedButton
   * @eventType onToggle
   * /
  public static const TOGGLE:String = "onToggle";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){SegmentedButton_button_isPressedEvent.__PARAMETER_SEQUENCE__=( ["source", "button", "isPressed", "eOpts"]);}/*;

  public*/ function SegmentedButton_button_isPressedEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$goek(type, arguments);
  }/*

  /**
   * The toggled button.
   * /
  public native function get button():Button;

  /**
   * <code>true</code> to indicate if the button was pressed.
   * /
  public native function get isPressed():Boolean;

  public native function get source():SegmentedButton;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: SegmentedButton_button_isPressedEvent$,
      super$goek: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TOGGLE: "onToggle",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
