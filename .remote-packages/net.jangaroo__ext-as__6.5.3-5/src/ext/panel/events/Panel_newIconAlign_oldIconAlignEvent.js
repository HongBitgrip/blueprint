Ext.define("ext.panel.events.Panel_newIconAlign_oldIconAlignEvent", function(Panel_newIconAlign_oldIconAlignEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newIconAlign_oldIconAlignEvent extends FlExtEvent {
  /**
   * Fires after the Panel iconAlign has been set or changed.
   * @since 6.5.1
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-iconalignchange Original Ext JS documentation of 'iconalignchange'
   * @see ext.panel.Panel
   * @eventType onIconAlignChange
   * /
  public static const ICON_ALIGN_CHANGE:String = "onIconAlignChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newIconAlign_oldIconAlignEvent.__PARAMETER_SEQUENCE__=( ["source", "newIconAlign", "oldIconAlign", "eOpts"]);}/*;

  public*/ function Panel_newIconAlign_oldIconAlignEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$z8wx(type, arguments);
  }/*

  public native function get newIconAlign():String;

  public native function get oldIconAlign():String;

  /**
   * The Panel which has the iconAlign changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newIconAlign_oldIconAlignEvent$,
      super$z8wx: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ICON_ALIGN_CHANGE: "onIconAlignChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
