Ext.define("ext.menu.events.ColorPickerMenu_colorEvent", function(ColorPickerMenu_colorEvent) {/*package ext.menu.events {
import ext.picker.ColorPicker;

import net.jangaroo.ext.FlExtEvent;

public class ColorPickerMenu_colorEvent extends FlExtEvent {
  /**
   * Fires when a color is selected
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.menu.ColorPicker.html#event-select Original Ext JS documentation of 'select'
   * @see ext.menu.ColorPickerMenu
   * @eventType onSelect
   * /
  public static const SELECT:String = "onSelect";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ColorPickerMenu_colorEvent.__PARAMETER_SEQUENCE__=( ["source", "color", "eOpts"]);}/*;

  public*/ function ColorPickerMenu_colorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$_YTv(type, arguments);
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
      constructor: ColorPickerMenu_colorEvent$,
      super$_YTv: function() {
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
