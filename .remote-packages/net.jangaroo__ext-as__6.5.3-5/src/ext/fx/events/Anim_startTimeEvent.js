Ext.define("ext.fx.events.Anim_startTimeEvent", function(Anim_startTimeEvent) {/*package ext.fx.events {
import ext.fx.Anim;

import net.jangaroo.ext.FlExtEvent;

public class Anim_startTimeEvent extends FlExtEvent {
  /**
   * Fires when the animation is complete.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Anim.html#event-afteranimate Original Ext JS documentation of 'afteranimate'
   * @see ext.fx.Anim
   * @eventType onAfterAnimate
   * /
  public static const AFTER_ANIMATE:String = "onAfterAnimate";
  /**
   * Fires when the animation's last frame has been set.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.fx.Anim.html#event-lastframe Original Ext JS documentation of 'lastframe'
   * @see ext.fx.Anim
   * @eventType onLastFrame
   * /
  public static const LAST_FRAME:String = "onLastFrame";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Anim_startTimeEvent.__PARAMETER_SEQUENCE__=( ["source", "startTime", "eOpts"]);}/*;

  public*/ function Anim_startTimeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$kHIJ(type, arguments);
  }/*

  public native function get source():Anim;

  public native function get startTime():Date;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Anim_startTimeEvent$,
      super$kHIJ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        AFTER_ANIMATE: "onAfterAnimate",
        LAST_FRAME: "onLastFrame",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
