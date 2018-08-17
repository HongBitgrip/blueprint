Ext.define("ext.window.events.WindowEvent", function(WindowEvent) {/*package ext.window.events {
import ext.window.Window;

import net.jangaroo.ext.FlExtEvent;

public class WindowEvent extends FlExtEvent {
  /**
   * Fires after the window has been visually activated via →<code>setActive</code>.
   * @see ext.window.Window#setActive
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-activate Original Ext JS documentation of 'activate'
   * @see ext.window.Window
   * @eventType onActivate
   * /
  public static const ACTIVATE:String = "onActivate";
  /**
   * Fires after the window has been visually deactivated via →<code>setActive</code>.
   * @see ext.window.Window#setActive
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-deactivate Original Ext JS documentation of 'deactivate'
   * @see ext.window.Window
   * @eventType onDeactivate
   * /
  public static const DEACTIVATE:String = "onDeactivate";
  /**
   * Fires when this Window's modal mask is clicked or tapped. Returning <code>false</code> from
   * a handler will veto the subsequent preocessing of the →<code>maskClickAction</code>..
   * @see ext.window.Window#maskClickAction
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-maskclick Original Ext JS documentation of 'maskclick'
   * @see ext.window.Window
   * @eventType onMaskClick
   * /
  public static const MASK_CLICK:String = "onMaskClick";
  /**
   * Fires after the window has been maximized.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-maximize Original Ext JS documentation of 'maximize'
   * @see ext.window.Window
   * @eventType onMaximize
   * /
  public static const MAXIMIZE:String = "onMaximize";
  /**
   * Fires after the window has been minimized.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-minimize Original Ext JS documentation of 'minimize'
   * @see ext.window.Window
   * @eventType onMinimize
   * /
  public static const MINIMIZE:String = "onMinimize";
  /**
   * Fires after the window has been restored to its original size after being maximized.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.window.Window.html#event-restore Original Ext JS documentation of 'restore'
   * @see ext.window.Window
   * @eventType onRestore
   * /
  public static const RESTORE:String = "onRestore";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){WindowEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function WindowEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Al16(type, arguments);
  }/*

  public native function get source():Window;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: WindowEvent$,
      super$Al16: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTIVATE: "onActivate",
        DEACTIVATE: "onDeactivate",
        MASK_CLICK: "onMaskClick",
        MAXIMIZE: "onMaximize",
        MINIMIZE: "onMinimize",
        RESTORE: "onRestore",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
