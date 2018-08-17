Ext.define("ext.picker.events.ColorPicker_colorEvent", function(ColorPicker_colorEvent) {/*package ext.picker.events {
import ext.picker.ColorPicker;

import net.jangaroo.ext.FlExtEvent;

public class ColorPicker_colorEvent extends FlExtEvent {
  /**
   * Fires when a color is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.picker.Color.html#event-select Original Ext JS documentation of 'select'
   * @see ext.picker.ColorPicker
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ColorPicker_colorEvent.__PARAMETER_SEQUENCE__=( ["source", "color", "eOpts"]);}/*;

  public*/ function ColorPicker_colorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$LkS7(type, arguments);
  }/*

  /**
   * The 6-digit color hex code (without the # symbol)
   * /
  public native function get color():String;

  public native function get source():ColorPicker;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ColorPicker_colorEvent$,
      super$LkS7: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SELECT: "onSelect",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
