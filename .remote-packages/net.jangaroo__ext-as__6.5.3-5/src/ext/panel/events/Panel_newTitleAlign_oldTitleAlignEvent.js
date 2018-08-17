Ext.define("ext.panel.events.Panel_newTitleAlign_oldTitleAlignEvent", function(Panel_newTitleAlign_oldTitleAlignEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newTitleAlign_oldTitleAlignEvent extends FlExtEvent {
  /**
   * Fires after the Panel titleAlign has been set or changed.
   * @since 6.5.1
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-titlealignchange Original Ext JS documentation of 'titlealignchange'
   * @see ext.panel.Panel
   * @eventType onTitleAlignChange
   * /
  public static const TITLE_ALIGN_CHANGE:String = "onTitleAlignChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newTitleAlign_oldTitleAlignEvent.__PARAMETER_SEQUENCE__=( ["source", "newTitleAlign", "oldTitleAlign", "eOpts"]);}/*;

  public*/ function Panel_newTitleAlign_oldTitleAlignEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$jvtH(type, arguments);
  }/*

  public native function get newTitleAlign():String;

  public native function get oldTitleAlign():String;

  /**
   * the Panel which has the titleAlign changed.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newTitleAlign_oldTitleAlignEvent$,
      super$jvtH: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TITLE_ALIGN_CHANGE: "onTitleAlignChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
