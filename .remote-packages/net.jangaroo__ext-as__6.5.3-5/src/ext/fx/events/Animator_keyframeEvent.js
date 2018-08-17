Ext.define("ext.fx.events.Animator_keyframeEvent", function(Animator_keyframeEvent) {/*package ext.fx.events {
import ext.fx.Animator;

import net.jangaroo.ext.FlExtEvent;

public class Animator_keyframeEvent extends FlExtEvent {
  /**
   * Fires at each keyframe.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Animator.html#event-keyframe Original Ext JS documentation of 'keyframe'
   * @see ext.fx.Animator
   * @eventType onKeyframe
   * /
  public static const KEYFRAME:String = "onKeyframe";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Animator_keyframeEvent.__PARAMETER_SEQUENCE__=( ["source", "keyframe", "eOpts"]);}/*;

  public*/ function Animator_keyframeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$JfmQ(type, arguments);
  }/*

  /**
   * step number
   * /
  public native function get keyframe():Number;

  public native function get source():Animator;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Animator_keyframeEvent$,
      super$JfmQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        KEYFRAME: "onKeyframe",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
