Ext.define("ext.panel.events.PanelHeader_eEvent", function(PanelHeader_eEvent) {/*package ext.panel.events {
import ext.event.Event;
import ext.panel.PanelHeader;

import net.jangaroo.ext.FlExtEvent;

public class PanelHeader_eEvent extends FlExtEvent {
  /**
   * Fires when the header is clicked. This event will not be fired
   * if the click was on a →<code>ext.panel.Tool</code>
   * @see ext.panel.Tool
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Header.html#event-click Original Ext JS documentation of 'click'
   * @see ext.panel.PanelHeader
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  /**
   * Fires when the header is double clicked. This event will not
   * be fired if the click was on a →<code>ext.panel.Tool</code>
   * @see ext.panel.Tool
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Header.html#event-dblclick Original Ext JS documentation of 'dblclick'
   * @see ext.panel.PanelHeader
   * @eventType onDblclick
   * /
  public static const DBLCLICK:String = "onDblclick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){PanelHeader_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function PanelHeader_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$iCzX(type, arguments);
  }/*

  public native function get e():Event;

  public native function get source():PanelHeader;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: PanelHeader_eEvent$,
      super$iCzX: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        DBLCLICK: "onDblclick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
