Ext.define("ext.drag.events.DragSource_info_eventEvent", function(DragSource_info_eventEvent) {/*package ext.drag.events {
import ext.drag.DragInfo;
import ext.drag.DragSource;
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class DragSource_info_eventEvent extends FlExtEvent {
  /**
   * Fires before drag starts on this source. Return <code>false</code> to cancel the drag.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Source.html#event-beforedragstart Original Ext JS documentation of 'beforedragstart'
   * @see ext.drag.DragSource
   * @eventType onBeforeDragStart
   * /
  public static const BEFORE_DRAG_START:String = "onBeforeDragStart";
  /**
   * Fires when a drag is cancelled.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Source.html#event-dragcancel Original Ext JS documentation of 'dragcancel'
   * @see ext.drag.DragSource
   * @eventType onDragCancel
   * /
  public static const DRAG_CANCEL:String = "onDragCancel";
  /**
   * Fires when the drag ends on this source.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Source.html#event-dragend Original Ext JS documentation of 'dragend'
   * @see ext.drag.DragSource
   * @eventType onDragEnd
   * /
  public static const DRAG_END:String = "onDragEnd";
  /**
   * Fires continuously as this source is dragged.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Source.html#event-dragmove Original Ext JS documentation of 'dragmove'
   * @see ext.drag.DragSource
   * @eventType onDragMove
   * /
  public static const DRAG_MOVE:String = "onDragMove";
  /**
   * Fires when the drag starts on this source.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Source.html#event-dragstart Original Ext JS documentation of 'dragstart'
   * @see ext.drag.DragSource
   * @eventType onDragStart
   * /
  public static const DRAG_START:String = "onDragStart";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DragSource_info_eventEvent.__PARAMETER_SEQUENCE__=( ["source", "info", "event", "eOpts"]);}/*;

  public*/ function DragSource_info_eventEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$Bdx9(type, arguments);
  }/*

  /**
   * The event.
   * /
  public native function get event():Event;

  /**
   * The drag info.
   * /
  public native function get info():DragInfo;

  /**
   * This source.
   * /
  public native function get source():DragSource;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DragSource_info_eventEvent$,
      super$Bdx9: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DRAG_START: "onBeforeDragStart",
        DRAG_CANCEL: "onDragCancel",
        DRAG_END: "onDragEnd",
        DRAG_MOVE: "onDragMove",
        DRAG_START: "onDragStart",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
