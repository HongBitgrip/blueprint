Ext.define("ext.panel.events.Panel_newTitleRotation_oldTitleRotationEvent", function(Panel_newTitleRotation_oldTitleRotationEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newTitleRotation_oldTitleRotationEvent extends FlExtEvent {
  /**
   * Fires after the Panel titleRotation has been set or changed.
   * @since 6.5.1
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-titlerotationchange Original Ext JS documentation of 'titlerotationchange'
   * @see ext.panel.Panel
   * @eventType onTitleRotationChange
   * /
  public static const TITLE_ROTATION_CHANGE:String = "onTitleRotationChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newTitleRotation_oldTitleRotationEvent.__PARAMETER_SEQUENCE__=( ["source", "newTitleRotation", "oldTitleRotation", "eOpts"]);}/*;

  public*/ function Panel_newTitleRotation_oldTitleRotationEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$j19x(type, arguments);
  }/*

  public native function get newTitleRotation():String;

  public native function get oldTitleRotation():String;

  /**
   * the Panel which has the titleRotation changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newTitleRotation_oldTitleRotationEvent$,
      super$j19x: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TITLE_ROTATION_CHANGE: "onTitleRotationChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
