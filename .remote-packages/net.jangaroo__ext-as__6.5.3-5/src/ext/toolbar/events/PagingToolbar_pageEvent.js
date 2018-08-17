Ext.define("ext.toolbar.events.PagingToolbar_pageEvent", function(PagingToolbar_pageEvent) {/*package ext.toolbar.events {
import ext.toolbar.PagingToolbar;

import net.jangaroo.ext.FlExtEvent;

public class PagingToolbar_pageEvent extends FlExtEvent {
  /**
   * Fires just before the active page is changed. Return false to prevent the active page from being changed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.toolbar.Paging.html#event-beforechange Original Ext JS documentation of 'beforechange'
   * @see ext.toolbar.PagingToolbar
   * @eventType onBeforeChange
   * /
  public static const BEFORE_CHANGE:String = "onBeforeChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PagingToolbar_pageEvent.__PARAMETER_SEQUENCE__=( ["source", "page", "eOpts"]);}/*;

  public*/ function PagingToolbar_pageEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$EnQc(type, arguments);
  }/*

  /**
   * The page number that will be loaded on change
   * /
  public native function get page():Number;

  public native function get source():PagingToolbar;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PagingToolbar_pageEvent$,
      super$EnQc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_CHANGE: "onBeforeChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
