Ext.define("ext.dd.events.DragTracker_eEvent", function(DragTracker_eEvent) {/*package ext.dd.events {
import net.jangaroo.ext.FlExtEvent;

public class DragTracker_eEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-beforedragstart Original Ext JS documentation of 'beforedragstart'
   * @see ext.dd.DragTracker
   * @eventType onBeforeDragStart
   * /
  public static const BEFORE_DRAG_START:String = "onBeforeDragStart";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-drag Original Ext JS documentation of 'drag'
   * @see ext.dd.DragTracker
   * @eventType onDrag
   * /
  public static const DRAG:String = "onDrag";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-dragend Original Ext JS documentation of 'dragend'
   * @see ext.dd.DragTracker
   * @eventType onDragEnd
   * /
  public static const DRAG_END:String = "onDragEnd";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-dragstart Original Ext JS documentation of 'dragstart'
   * @see ext.dd.DragTracker
   * @eventType onDragStart
   * /
  public static const DRAG_START:String = "onDragStart";
  /**
   * Fires when the mouse button is pressed down, but before a drag operation begins. The
   * drag operation begins after either the mouse has been moved by →<code>tolerance</code> pixels,
   * or after the →<code>autoStart</code> timer fires.
   * <p>Return <code>false</code> to veto the drag operation.</p>
   * @see ext.dd.DragTracker#tolerance
   * @see ext.dd.DragTracker#autoStart
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-mousedown Original Ext JS documentation of 'mousedown'
   * @see ext.dd.DragTracker
   * @eventType onMouseDown
   * /
  public static const MOUSE_DOWN:String = "onMouseDown";
  /**
   * Fired when the mouse is moved. Returning false cancels the drag operation.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-mousemove Original Ext JS documentation of 'mousemove'
   * @see ext.dd.DragTracker
   * @eventType onMouseMove
   * /
  public static const MOUSE_MOVE:String = "onMouseMove";
  /**
   * Fires when the mouse exits the DragTracker's target element (or if →<code>delegate</code> is
   * used, when the mouse exits a delegate element).
   * <p><b>Only available when →<code>trackOver</code> is <code>true</code></b></p>
   * @see ext.dd.DragTracker#delegate
   * @see ext.dd.DragTracker#trackOver
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-mouseout Original Ext JS documentation of 'mouseout'
   * @see ext.dd.DragTracker
   * @eventType onMouseOut
   * /
  public static const MOUSE_OUT:String = "onMouseOut";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dd.DragTracker.html#event-mouseup Original Ext JS documentation of 'mouseup'
   * @see ext.dd.DragTracker
   * @eventType onMouseUp
   * /
  public static const MOUSE_UP:String = "onMouseUp";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DragTracker_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function DragTracker_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$8jf4(type, arguments);
  }/*

  /**
   * event object
   * /
  public native function get e():Object;

  public native function get source():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DragTracker_eEvent$,
      super$8jf4: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DRAG_START: "onBeforeDragStart",
        DRAG: "onDrag",
        DRAG_END: "onDragEnd",
        DRAG_START: "onDragStart",
        MOUSE_DOWN: "onMouseDown",
        MOUSE_MOVE: "onMouseMove",
        MOUSE_OUT: "onMouseOut",
        MOUSE_UP: "onMouseUp",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
