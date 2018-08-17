Ext.define("ext.dom.events.Element_infoEvent", function(Element_infoEvent) {/*package ext.dom.events {
import ext.dom.Element;

import net.jangaroo.ext.FlExtEvent;

public class Element_infoEvent extends FlExtEvent {
  /**
   * Important note: For the best performance on mobile devices, use this only when you absolutely need to monitor
   * a Element's size.
   * <p><b>Note:</b> This event is not available to be used with event delegation. Instead <code>→event:onResize</code> only fires if you explicitly
   * add at least one listener to it, for performance reasons.</p>
   * @see ext.dom.Element#event:onResize
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dom.Element.html#event-resize Original Ext JS documentation of 'resize'
   * @see ext.dom.Element
   * @eventType onResize
   * /
  public static const RESIZE:String = "onResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Element_infoEvent.__PARAMETER_SEQUENCE__=( ["source", "info", "eOpts"]);}/*;

  public*/ function Element_infoEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$1Rij(type, arguments);
  }/*

  /**
   * The element's new size parameters.
   * /
  public native function get info():Object;

  /**
   * The component instance.
   * /
  public native function get source():Element;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Element_infoEvent$,
      super$1Rij: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        RESIZE: "onResize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
