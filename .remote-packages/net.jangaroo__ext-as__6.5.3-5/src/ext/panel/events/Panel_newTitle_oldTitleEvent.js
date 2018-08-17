Ext.define("ext.panel.events.Panel_newTitle_oldTitleEvent", function(Panel_newTitle_oldTitleEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class Panel_newTitle_oldTitleEvent extends FlExtEvent {
  /**
   * Fires after the Panel title has been set or changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-titlechange Original Ext JS documentation of 'titlechange'
   * @see ext.panel.Panel
   * @eventType onTitleChange
   * /
  public static const TITLE_CHANGE:String = "onTitleChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Panel_newTitle_oldTitleEvent.__PARAMETER_SEQUENCE__=( ["source", "newTitle", "oldTitle", "eOpts"]);}/*;

  public*/ function Panel_newTitle_oldTitleEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Z9mx(type, arguments);
  }/*

  /**
   * The new title.
   * /
  public native function get newTitle():String;

  /**
   * The previous panel title.
   * /
  public native function get oldTitle():String;

  /**
   * the Panel which has been resized.
   * /
  public native function get source():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Panel_newTitle_oldTitleEvent$,
      super$Z9mx: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TITLE_CHANGE: "onTitleChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
