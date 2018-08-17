Ext.define("ext.slider.events.MultiSlider_eEvent", function(MultiSlider_eEvent) {/*package ext.slider.events {
import ext.event.Event;
import ext.slider.MultiSlider;

import net.jangaroo.ext.FlExtEvent;

public class MultiSlider_eEvent extends FlExtEvent {
  /**
   * Fires continuously during the drag operation while the mouse is moving.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-drag Original Ext JS documentation of 'drag'
   * @see ext.slider.MultiSlider
   * @eventType onDrag
   * /
  public static const DRAG:String = "onDrag";
  /**
   * Fires after the drag operation has completed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-dragend Original Ext JS documentation of 'dragend'
   * @see ext.slider.MultiSlider
   * @eventType onDragEnd
   * /
  public static const DRAG_END:String = "onDragEnd";
  /**
   * Fires after a drag operation has started.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.slider.Multi.html#event-dragstart Original Ext JS documentation of 'dragstart'
   * @see ext.slider.MultiSlider
   * @eventType onDragStart
   * /
  public static const DRAG_START:String = "onDragStart";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){MultiSlider_eEvent.__PARAMETER_SEQUENCE__=( ["slider", "e", "eOpts"]);}/*;

  public*/ function MultiSlider_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$5l0F(type, arguments);
  }/*

  /**
   * The event fired from Ext.dd.DragTracker
   * /
  public native function get e():Event;

  /**
   * The slider
   * /
  public native function get slider():MultiSlider;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: MultiSlider_eEvent$,
      super$5l0F: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DRAG: "onDrag",
        DRAG_END: "onDragEnd",
        DRAG_START: "onDragStart",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
