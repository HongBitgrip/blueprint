Ext.define("ext.slider.events.MultiSlider_newValue_oldValue_thumb_typeEvent", function(MultiSlider_newValue_oldValue_thumb_typeEvent) {/*package ext.slider.events {
import ext.slider.MultiSlider;

import net.jangaroo.ext.FlExtEvent;

public class MultiSlider_newValue_oldValue_thumb_typeEvent extends FlExtEvent {
  /**
   * Fires before the slider value is changed. By returning false from an event handler, you can cancel the
   * event and prevent the slider from changing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-beforechange Original Ext JS documentation of 'beforechange'
   * @see ext.slider.MultiSlider
   * @eventType onBeforeChange
   * /
  public static const BEFORE_CHANGE:String = "onBeforeChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MultiSlider_newValue_oldValue_thumb_typeEvent.__PARAMETER_SEQUENCE__=( ["slider", "newValue", "oldValue", "thumb", "typeOfChange", "eOpts"]);}/*;

  public*/ function MultiSlider_newValue_oldValue_thumb_typeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$UVTM(type, arguments);
  }/*

  /**
   * The new value which the slider is being changed to, null if the change is a removal of a thumb.
   * /
  public native function get newValue():*;

  /**
   * The old value which the slider was previously, null if the change is an addition of a thumb.
   * /
  public native function get oldValue():*;

  /**
   * The slider
   * /
  public native function get slider():MultiSlider;

  /**
   * The thumb that was will be changed, null if the change is an addition of a thumb.
   * /
  public native function get thumb():*;

  /**
   * The type of change that is going to occur (add/update/remove)
   * /
  public native function get typeOfChange():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MultiSlider_newValue_oldValue_thumb_typeEvent$,
      super$UVTM: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CHANGE: "onBeforeChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
