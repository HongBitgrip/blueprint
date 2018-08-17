Ext.define("ext.view.events.AbstractViewEvent", function(AbstractViewEvent) {/*package ext.view.events {
import ext.view.DataView;

import net.jangaroo.ext.FlExtEvent;

public class AbstractViewEvent extends FlExtEvent {
  /**
   * Fires before the view is refreshed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-beforerefresh Original Ext JS documentation of 'beforerefresh'
   * @see ext.view.AbstractView
   * @eventType onBeforeRefresh
   * /
  public static const BEFORE_REFRESH:String = "onBeforeRefresh";
  /**
   * Fires when the view is refreshed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-refresh Original Ext JS documentation of 'refresh'
   * @see ext.view.AbstractView
   * @eventType onRefresh
   * /
  public static const REFRESH:String = "onRefresh";
  /**
   * Fires when the View's item elements representing Store items has been rendered. No items will be available
   * for selection until this event fires.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.AbstractView.html#event-viewready Original Ext JS documentation of 'viewready'
   * @see ext.view.AbstractView
   * @eventType onViewReady
   * /
  public static const VIEW_READY:String = "onViewReady";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){AbstractViewEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function AbstractViewEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$CejQ(type, arguments);
  }/*

  /**
   * The DataView object
   * /
  public native function get source():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: AbstractViewEvent$,
      super$CejQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_REFRESH: "onBeforeRefresh",
        REFRESH: "onRefresh",
        VIEW_READY: "onViewReady",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
