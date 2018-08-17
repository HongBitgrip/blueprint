Ext.define("ext.events.Widget_value_oldValueEvent", function(Widget_value_oldValueEvent) {/*package ext.events {
import ext.Widget;

import net.jangaroo.ext.FlExtEvent;

public class Widget_value_oldValueEvent extends FlExtEvent {
  /**
   * This event fires when <code>→disabled</code> changes.
   * @see ext.Widget#disabled
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-beforedisabledchange Original Ext JS documentation of 'beforedisabledchange'
   * @see ext.Widget
   * @eventType onBeforeDisabledChange
   * /
  public static const BEFORE_DISABLED_CHANGE:String = "onBeforeDisabledChange";
  /**
   * This event fires when <code>→height</code> changes.
   * @see ext.Widget#height
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-beforeheightchange Original Ext JS documentation of 'beforeheightchange'
   * @see ext.Widget
   * @eventType onBeforeHeightChange
   * /
  public static const BEFORE_HEIGHT_CHANGE:String = "onBeforeHeightChange";
  /**
   * This event fires when <code>→hidden</code> changes.
   * @see ext.Widget#hidden
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-beforehiddenchange Original Ext JS documentation of 'beforehiddenchange'
   * @see ext.Widget
   * @eventType onBeforeHiddenChange
   * /
  public static const BEFORE_HIDDEN_CHANGE:String = "onBeforeHiddenChange";
  /**
   * This event fires when <code>→width</code> changes.
   * @see ext.Widget#width
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-beforewidthchange Original Ext JS documentation of 'beforewidthchange'
   * @see ext.Widget
   * @eventType onBeforeWidthChange
   * /
  public static const BEFORE_WIDTH_CHANGE:String = "onBeforeWidthChange";
  /**
   * This event fires when <code>→disabled</code> changes.
   * @see ext.Widget#disabled
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-disabledchange Original Ext JS documentation of 'disabledchange'
   * @see ext.Widget
   * @eventType onDisabledChange
   * /
  public static const DISABLED_CHANGE:String = "onDisabledChange";
  /**
   * This event fires when <code>→height</code> changes.
   * @see ext.Widget#height
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-heightchange Original Ext JS documentation of 'heightchange'
   * @see ext.Widget
   * @eventType onHeightChange
   * /
  public static const HEIGHT_CHANGE:String = "onHeightChange";
  /**
   * This event fires when <code>→hidden</code> changes.
   * @see ext.Widget#hidden
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-hiddenchange Original Ext JS documentation of 'hiddenchange'
   * @see ext.Widget
   * @eventType onHiddenChange
   * /
  public static const HIDDEN_CHANGE:String = "onHiddenChange";
  /**
   * This event fires when <code>→width</code> changes.
   * @see ext.Widget#width
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Widget.html#event-widthchange Original Ext JS documentation of 'widthchange'
   * @see ext.Widget
   * @eventType onWidthChange
   * /
  public static const WIDTH_CHANGE:String = "onWidthChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Widget_value_oldValueEvent.__PARAMETER_SEQUENCE__=( ["sender", "value", "oldValue", "eOpts"]);}/*;

  public*/ function Widget_value_oldValueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$T$7l(type, arguments);
  }/*

  /**
   * The previous value of <code>→disabled</code>.
   * @see ext.Widget#disabled
   * /
  public native function get oldValue():Boolean;

  /**
   * The instance firing this event.
   * /
  public native function get sender():Widget;

  /**
   * The current value of <code>→disabled</code>.
   * @see ext.Widget#disabled
   * /
  public native function get value():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Widget_value_oldValueEvent$,
      super$T$7l: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DISABLED_CHANGE: "onBeforeDisabledChange",
        BEFORE_HEIGHT_CHANGE: "onBeforeHeightChange",
        BEFORE_HIDDEN_CHANGE: "onBeforeHiddenChange",
        BEFORE_WIDTH_CHANGE: "onBeforeWidthChange",
        DISABLED_CHANGE: "onDisabledChange",
        HEIGHT_CHANGE: "onHeightChange",
        HIDDEN_CHANGE: "onHiddenChange",
        WIDTH_CHANGE: "onWidthChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
