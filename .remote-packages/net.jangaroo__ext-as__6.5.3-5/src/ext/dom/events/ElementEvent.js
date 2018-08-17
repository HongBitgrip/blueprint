Ext.define("ext.dom.events.ElementEvent", function(ElementEvent) {/*package ext.dom.events {
import ext.dom.Element;

import net.jangaroo.ext.FlExtEvent;

public class ElementEvent extends FlExtEvent {
  /**
   * Fires whenever this Element actually becomes visible (painted) on the screen. This is useful when you need to
   * perform 'read' operations on the DOM element, i.e: calculating natural sizes and positioning.
   * <p><b>Note:</b> This event is not available to be used with event delegation. Instead <code>→event:onPainted</code> only fires if you explicitly
   * add at least one listener to it, for performance reasons.</p>
   * @see ext.dom.Element#event:onPainted
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-painted Original Ext JS documentation of 'painted'
   * @see ext.dom.Element
   * @eventType onPainted
   * /
  public static const PAINTED:String = "onPainted";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ElementEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function ElementEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$YqXQ(type, arguments);
  }/*

  /**
   * The component instance.
   * /
  public native function get source():Element;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ElementEvent$,
      super$YqXQ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PAINTED: "onPainted",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
