Ext.define("ext.fx.events.AnimEvent", function(AnimEvent) {/*package ext.fx.events {
import ext.fx.Anim;

import net.jangaroo.ext.FlExtEvent;

public class AnimEvent extends FlExtEvent {
  /**
   * Fires before the animation starts. A handler can return false to cancel the animation.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Anim.html#event-beforeanimate Original Ext JS documentation of 'beforeanimate'
   * @see ext.fx.Anim
   * @eventType onBeforeAnimate
   * /
  public static const BEFORE_ANIMATE:String = "onBeforeAnimate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AnimEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function AnimEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$xNQZ(type, arguments);
  }/*

  public native function get source():Anim;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AnimEvent$,
      super$xNQZ: function() {
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
