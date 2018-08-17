Ext.define("ext.panel.events.Panel_animateEvent", function(Panel_animateEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_animateEvent extends FlExtEvent {
  /**
   * Fires before this panel is expanded. Return false to prevent the expand.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-beforeexpand Original Ext JS documentation of 'beforeexpand'
   * @see ext.panel.Panel
   * @eventType onBeforeExpand
   * /
  public static const BEFORE_EXPAND:String = "onBeforeExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_animateEvent.__PARAMETER_SEQUENCE__=( ["p", "animate", "eOpts"]);}/*;

  public*/ function Panel_animateEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$pd9o(type, arguments);
  }/*

  /**
   * True if the expand is animated, else false.
   * /
  public native function get animate():Boolean;

  /**
   * The Panel being expanded.
   * /
  public native function get p():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_animateEvent$,
      super$pd9o: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_EXPAND: "onBeforeExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
