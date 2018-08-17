Ext.define("ext.panel.events.PanelEvent", function(PanelEvent) {/*package ext.panel.events {
import ext.panel.Panel;

import net.jangaroo.ext.FlExtEvent;

public class PanelEvent extends FlExtEvent {
  /**
   * Fires before the user closes the panel. Return false from any listener to stop the close event being
   * fired
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-beforeclose Original Ext JS documentation of 'beforeclose'
   * @see ext.panel.Panel
   * @eventType onBeforeClose
   * /
  public static const BEFORE_CLOSE:String = "onBeforeClose";
  /**
   * Fires when the user closes the panel.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-close Original Ext JS documentation of 'close'
   * @see ext.panel.Panel
   * @eventType onClose
   * /
  public static const CLOSE:String = "onClose";
  /**
   * Fires after this Panel has collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-collapse Original Ext JS documentation of 'collapse'
   * @see ext.panel.Panel
   * @eventType onCollapse
   * /
  public static const COLLAPSE:String = "onCollapse";
  /**
   * Fires after this Panel has expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-expand Original Ext JS documentation of 'expand'
   * @see ext.panel.Panel
   * @eventType onExpand
   * /
  public static const EXPAND:String = "onExpand";
  /**
   * Fires after a collapsed Panel has been "floated" by clicking on
   * it's header. Only applicable when the Panel is an item in a
   * <i>Border Layout</i> (→<code>ext.layout.container.BorderLayout</code>).
   * @see ext.layout.container.BorderLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-float Original Ext JS documentation of 'float'
   * @see ext.panel.Panel
   * @eventType onFloat
   * /
  public static const FLOAT:String = "onFloat";
  /**
   * Fires after a "floated" Panel has returned to it's collapsed state
   * as a result of the mouse leaving the Panel. Only applicable when
   * the Panel is an item in a
   * <i>Border Layout</i> (→<code>ext.layout.container.BorderLayout</code>).
   * @see ext.layout.container.BorderLayout
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Panel.html#event-unfloat Original Ext JS documentation of 'unfloat'
   * @see ext.panel.Panel
   * @eventType onUnfloat
   * /
  public static const UNFLOAT:String = "onUnfloat";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PanelEvent.__PARAMETER_SEQUENCE__=( ["panel", "eOpts"]);}/*;

  public*/ function PanelEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$E93K(type, arguments);
  }/*

  /**
   * The Panel object
   * /
  public native function get panel():Panel;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PanelEvent$,
      super$E93K: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CLOSE: "onBeforeClose",
        CLOSE: "onClose",
        COLLAPSE: "onCollapse",
        EXPAND: "onExpand",
        FLOAT: "onFloat",
        UNFLOAT: "onUnfloat",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
