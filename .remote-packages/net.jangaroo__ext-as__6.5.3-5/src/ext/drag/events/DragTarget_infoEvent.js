Ext.define("ext.drag.events.DragTarget_infoEvent", function(DragTarget_infoEvent) {/*package ext.drag.events {
import ext.drag.DragInfo;
import ext.drag.DragTarget;

import net.jangaroo.ext.FlExtEvent;

public class DragTarget_infoEvent extends FlExtEvent {
  /**
   * Fires before a valid drop occurs. Return <code>false</code> to prevent the drop from
   * completing.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Target.html#event-beforedrop Original Ext JS documentation of 'beforedrop'
   * @see ext.drag.DragTarget
   * @eventType onBeforeDrop
   * /
  public static const BEFORE_DROP:String = "onBeforeDrop";
  /**
   * Fires when a drag enters this target.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Target.html#event-dragenter Original Ext JS documentation of 'dragenter'
   * @see ext.drag.DragTarget
   * @eventType onDragEnter
   * /
  public static const DRAG_ENTER:String = "onDragEnter";
  /**
   * Fires when a source leaves this target.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Target.html#event-dragleave Original Ext JS documentation of 'dragleave'
   * @see ext.drag.DragTarget
   * @eventType onDragLeave
   * /
  public static const DRAG_LEAVE:String = "onDragLeave";
  /**
   * Fires when a drag moves while inside this target.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Target.html#event-dragmove Original Ext JS documentation of 'dragmove'
   * @see ext.drag.DragTarget
   * @eventType onDragMove
   * /
  public static const DRAG_MOVE:String = "onDragMove";
  /**
   * Fires when a valid drop occurs.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.drag.Target.html#event-drop Original Ext JS documentation of 'drop'
   * @see ext.drag.DragTarget
   * @eventType onDrop
   * /
  public static const DROP:String = "onDrop";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DragTarget_infoEvent.__PARAMETER_SEQUENCE__=( ["source", "info", "eOpts"]);}/*;

  public*/ function DragTarget_infoEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$B4Zw(type, arguments);
  }/*

  /**
   * The drag info.
   * /
  public native function get info():DragInfo;

  /**
   * This target.
   * /
  public native function get source():DragTarget;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DragTarget_infoEvent$,
      super$B4Zw: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DROP: "onBeforeDrop",
        DRAG_ENTER: "onDragEnter",
        DRAG_LEAVE: "onDragLeave",
        DRAG_MOVE: "onDragMove",
        DROP: "onDrop",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
