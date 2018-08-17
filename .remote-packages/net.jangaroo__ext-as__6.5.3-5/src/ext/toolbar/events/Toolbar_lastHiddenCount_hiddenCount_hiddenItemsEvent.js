Ext.define("ext.toolbar.events.Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent", function(Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent) {/*package ext.toolbar.events {
import net.jangaroo.ext.FlExtEvent;

public class Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent extends FlExtEvent {
  /**
   * Fires after the overflow state has changed if this toolbar has been configured with
   * an <code>→overflowHandler</code>.
   * @see ext.toolbar.Toolbar#overflowHandler
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.toolbar.Toolbar.html#event-overflowchange Original Ext JS documentation of 'overflowchange'
   * @see ext.toolbar.Toolbar
   * @eventType onOverflowChange
   * /
  public static const OVERFLOW_CHANGE:String = "onOverflowChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent.__PARAMETER_SEQUENCE__=( ["lastHiddenCount", "hiddenCount", "hiddenItems", "eOpts"]);}/*;

  public*/ function Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$ldk7(type, arguments);
  }/*

  /**
   * The number of overflowing items that are hidden now.
   * /
  public native function get hiddenCount():Number;

  /**
   * The hidden items
   * /
  public native function get hiddenItems():Array;

  /**
   * The number of overflowing items that used to be hidden.
   * /
  public native function get lastHiddenCount():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Toolbar_lastHiddenCount_hiddenCount_hiddenItemsEvent$,
      super$ldk7: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        OVERFLOW_CHANGE: "onOverflowChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
