Ext.define("ext.panel.events.Panel_newIconCls_oldIconClsEvent", function(Panel_newIconCls_oldIconClsEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newIconCls_oldIconClsEvent extends FlExtEvent {
  /**
   * Fires after the Panel iconCls has been set or changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-iconclschange Original Ext JS documentation of 'iconclschange'
   * @see ext.panel.Panel
   * @eventType onIconClsChange
   * /
  public static const ICON_CLS_CHANGE:String = "onIconClsChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newIconCls_oldIconClsEvent.__PARAMETER_SEQUENCE__=( ["source", "newIconCls", "oldIconCls", "eOpts"]);}/*;

  public*/ function Panel_newIconCls_oldIconClsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$NELR(type, arguments);
  }/*

  /**
   * The new iconCls.
   * /
  public native function get newIconCls():String;

  /**
   * The previous panel iconCls.
   * /
  public native function get oldIconCls():String;

  /**
   * The Panel which has the iconCls changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newIconCls_oldIconClsEvent$,
      super$NELR: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ICON_CLS_CHANGE: "onIconClsChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
