Ext.define("ext.view.events.DataView_nodeEvent", function(DataView_nodeEvent) {/*package ext.view.events {
import ext.dom.Element;
import ext.view.DataView;

import net.jangaroo.ext.FlExtEvent;

public class DataView_nodeEvent extends FlExtEvent {
  /**
   * Fires when a node is highlighted using keyboard navigation, or mouseover.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-highlightitem Original Ext JS documentation of 'highlightitem'
   * @see ext.view.DataView
   * @eventType onHighlightItem
   * /
  public static const HIGHLIGHT_ITEM:String = "onHighlightItem";
  /**
   * Fires when a node is unhighlighted using keyboard navigation, or mouseout.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.View.html#event-unhighlightitem Original Ext JS documentation of 'unhighlightitem'
   * @see ext.view.DataView
   * @eventType onUnhighlightItem
   * /
  public static const UNHIGHLIGHT_ITEM:String = "onUnhighlightItem";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DataView_nodeEvent.__PARAMETER_SEQUENCE__=( ["view", "node", "eOpts"]);}/*;

  public*/ function DataView_nodeEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$wzbX(type, arguments);
  }/*

  /**
   * The highlighted node.
   * /
  public native function get node():Element;

  /**
   * This View Component.
   * /
  public native function get view():DataView;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DataView_nodeEvent$,
      super$wzbX: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        HIGHLIGHT_ITEM: "onHighlightItem",
        UNHIGHLIGHT_ITEM: "onUnhighlightItem",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
