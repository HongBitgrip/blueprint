Ext.define("ext.fx.events.Animator_startTimeEvent", function(Animator_startTimeEvent) {/*package ext.fx.events {
import ext.fx.Animator;

import net.jangaroo.ext.FlExtEvent;

public class Animator_startTimeEvent extends FlExtEvent {
  /**
   * Fires when the animation is complete.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Animator.html#event-afteranimate Original Ext JS documentation of 'afteranimate'
   * @see ext.fx.Animator
   * @eventType onAfterAnimate
   * /
  public static const AFTER_ANIMATE:String = "onAfterAnimate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Animator_startTimeEvent.__PARAMETER_SEQUENCE__=( ["source", "startTime", "eOpts"]);}/*;

  public*/ function Animator_startTimeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$w0Vz(type, arguments);
  }/*

  public native function get source():Animator;

  public native function get startTime():Date;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Animator_startTimeEvent$,
      super$w0Vz: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        AFTER_ANIMATE: "onAfterAnimate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
