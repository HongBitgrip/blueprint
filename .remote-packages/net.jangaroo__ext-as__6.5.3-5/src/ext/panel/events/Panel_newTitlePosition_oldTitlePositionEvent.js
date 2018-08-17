Ext.define("ext.panel.events.Panel_newTitlePosition_oldTitlePositionEvent", function(Panel_newTitlePosition_oldTitlePositionEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newTitlePosition_oldTitlePositionEvent extends FlExtEvent {
  /**
   * Fires after the Panel titlePosition has been set or changed.
   * @since 6.5.1
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-titlepositionchange Original Ext JS documentation of 'titlepositionchange'
   * @see ext.panel.Panel
   * @eventType onTitlePositionChange
   * /
  public static const TITLE_POSITION_CHANGE:String = "onTitlePositionChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newTitlePosition_oldTitlePositionEvent.__PARAMETER_SEQUENCE__=( ["source", "newTitlePosition", "oldTitlePosition", "eOpts"]);}/*;

  public*/ function Panel_newTitlePosition_oldTitlePositionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$SmCR(type, arguments);
  }/*

  public native function get newTitlePosition():String;

  public native function get oldTitlePosition():String;

  /**
   * the Panel which has the titlePosition changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newTitlePosition_oldTitlePositionEvent$,
      super$SmCR: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TITLE_POSITION_CHANGE: "onTitlePositionChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
