Ext.define("ext.slider.events.MultiSlider_newValue_thumbEvent", function(MultiSlider_newValue_thumbEvent) {/*package ext.slider.events {
import ext.Base;
import ext.slider.MultiSlider;

import net.jangaroo.ext.FlExtEvent;

public class MultiSlider_newValue_thumbEvent extends FlExtEvent {
  /**
   * Fires when the slider value is changed by the user and any drag operations have completed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-changecomplete Original Ext JS documentation of 'changecomplete'
   * @see ext.slider.MultiSlider
   * @eventType onChangeComplete
   * /
  public static const CHANGE_COMPLETE:String = "onChangeComplete";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MultiSlider_newValue_thumbEvent.__PARAMETER_SEQUENCE__=( ["slider", "newValue", "thumb", "eOpts"]);}/*;

  public*/ function MultiSlider_newValue_thumbEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$3DCO(type, arguments);
  }/*

  /**
   * The new value which the slider has been changed to.
   * /
  public native function get newValue():Number;

  /**
   * The slider
   * /
  public native function get slider():MultiSlider;

  /**
   * The thumb that was changed
   * /
  public native function get thumb():Base;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MultiSlider_newValue_thumbEvent$,
      super$3DCO: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE_COMPLETE: "onChangeComplete",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
