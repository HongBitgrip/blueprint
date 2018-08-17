Ext.define("ext.events.GlobalEvents_componentEvent", function(GlobalEvents_componentEvent) {/*package ext.events {
import ext.Component;

import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_componentEvent extends FlExtEvent {
  /**
   * Fires when a Component is added to a Container.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-added Original Ext JS documentation of 'added'
   * @see ext.SGlobalEvents
   * @eventType onAdded
   * /
  public static const ADDED:String = "onAdded";
  /**
   * Fires when a Component is collapsed (e.g., a panel).
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-collapse Original Ext JS documentation of 'collapse'
   * @see ext.SGlobalEvents
   * @eventType onCollapse
   * /
  public static const COLLAPSE:String = "onCollapse";
  /**
   * Fires when a Component is expanded (e.g., a panel).
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-expand Original Ext JS documentation of 'expand'
   * @see ext.SGlobalEvents
   * @eventType onExpand
   * /
  public static const EXPAND:String = "onExpand";
  /**
   * Fires when a Component is hidden.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-hide Original Ext JS documentation of 'hide'
   * @see ext.SGlobalEvents
   * @eventType onHide
   * /
  public static const HIDE:String = "onHide";
  /**
   * Fires when a Component is removed from a Container.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-removed Original Ext JS documentation of 'removed'
   * @see ext.SGlobalEvents
   * @eventType onRemoved
   * /
  public static const REMOVED:String = "onRemoved";
  /**
   * Fires when a Component is shown.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-show Original Ext JS documentation of 'show'
   * @see ext.SGlobalEvents
   * @eventType onShow
   * /
  public static const SHOW:String = "onShow";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_componentEvent.__PARAMETER_SEQUENCE__=( ["component", "eOpts"]);}/*;

  public*/ function GlobalEvents_componentEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$PEyO(type, arguments);
  }/*

  public native function get component():Component;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_componentEvent$,
      super$PEyO: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADDED: "onAdded",
        COLLAPSE: "onCollapse",
        EXPAND: "onExpand",
        HIDE: "onHide",
        REMOVED: "onRemoved",
        SHOW: "onShow",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
