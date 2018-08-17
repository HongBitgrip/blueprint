Ext.define("ext.panel.events.Panel_newIcon_oldIconEvent", function(Panel_newIcon_oldIconEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newIcon_oldIconEvent extends FlExtEvent {
  /**
   * Fires after the Panel icon has been set or changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-iconchange Original Ext JS documentation of 'iconchange'
   * @see ext.panel.Panel
   * @eventType onIconChange
   * /
  public static const ICON_CHANGE:String = "onIconChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newIcon_oldIconEvent.__PARAMETER_SEQUENCE__=( ["source", "newIcon", "oldIcon", "eOpts"]);}/*;

  public*/ function Panel_newIcon_oldIconEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$fT2v(type, arguments);
  }/*

  /**
   * The path to the new icon image.
   * /
  public native function get newIcon():String;

  /**
   * The path to the previous panel icon image.
   * /
  public native function get oldIcon():String;

  /**
   * The Panel which has the icon changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newIcon_oldIconEvent$,
      super$fT2v: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ICON_CHANGE: "onIconChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
