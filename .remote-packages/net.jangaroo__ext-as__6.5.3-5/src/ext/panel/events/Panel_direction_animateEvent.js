Ext.define("ext.panel.events.Panel_direction_animateEvent", function(Panel_direction_animateEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_direction_animateEvent extends FlExtEvent {
  /**
   * Fires before this panel is collapsed. Return false to prevent the collapse.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-beforecollapse Original Ext JS documentation of 'beforecollapse'
   * @see ext.panel.Panel
   * @eventType onBeforeCollapse
   * /
  public static const BEFORE_COLLAPSE:String = "onBeforeCollapse";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_direction_animateEvent.__PARAMETER_SEQUENCE__=( ["p", "direction", "animate", "eOpts"]);}/*;

  public*/ function Panel_direction_animateEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$eVo(type, arguments);
  }/*

  /**
   * True if the collapse is animated, else false.
   * /
  public native function get animate():Boolean;

  /**
   * . The direction of the collapse. One of
   * <ul>
   * <li>Ext.Component.DIRECTION_TOP</li>
   * <li>Ext.Component.DIRECTION_RIGHT</li>
   * <li>Ext.Component.DIRECTION_BOTTOM</li>
   * <li>Ext.Component.DIRECTION_LEFT</li>
   * </ul>
   * /
  public native function get direction():String;

  /**
   * The Panel being collapsed.
   * /
  public native function get p():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_direction_animateEvent$,
      super$$eVo: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_COLLAPSE: "onBeforeCollapse",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
