Ext.define("ext.slider.events.MultiSlider_newValue_thumb_typeEvent", function(MultiSlider_newValue_thumb_typeEvent) {/*package ext.slider.events {
import ext.slider.MultiSlider;

import net.jangaroo.ext.FlExtEvent;

public class MultiSlider_newValue_thumb_typeEvent extends FlExtEvent {
  /**
   * Fires when the slider value is changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-change Original Ext JS documentation of 'change'
   * @see ext.slider.MultiSlider
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MultiSlider_newValue_thumb_typeEvent.__PARAMETER_SEQUENCE__=( ["slider", "newValue", "thumb", "typeOfChange", "eOpts"]);}/*;

  public*/ function MultiSlider_newValue_thumb_typeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$hiGZ(type, arguments);
  }/*

  /**
   * The new value which the slider has been changed to, null if the change is the removal of a thumb.
   * /
  public native function get newValue():*;

  /**
   * The slider
   * /
  public native function get slider():MultiSlider;

  /**
   * The thumb that was changed, null if the change is the removal of a thumb.
   * /
  public native function get thumb():*;

  /**
   * The type of change that occurred (add/update/remove)
   * /
  public native function get typeOfChange():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MultiSlider_newValue_thumb_typeEvent$,
      super$hiGZ: function() {
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
