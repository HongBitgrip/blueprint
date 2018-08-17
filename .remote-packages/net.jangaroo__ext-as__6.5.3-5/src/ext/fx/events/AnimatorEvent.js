Ext.define("ext.fx.events.AnimatorEvent", function(AnimatorEvent) {/*package ext.fx.events {
import ext.fx.Animator;

import net.jangaroo.ext.FlExtEvent;

public class AnimatorEvent extends FlExtEvent {
  /**
   * Fires before the animation starts. A handler can return false to cancel the animation.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Animator.html#event-beforeanimate Original Ext JS documentation of 'beforeanimate'
   * @see ext.fx.Animator
   * @eventType onBeforeAnimate
   * /
  public static const BEFORE_ANIMATE:String = "onBeforeAnimate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AnimatorEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function AnimatorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$PyQD(type, arguments);
  }/*

  public native function get source():Animator;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AnimatorEvent$,
      super$PyQD: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_ANIMATE: "onBeforeAnimate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
