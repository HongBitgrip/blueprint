Ext.define("ext.dashboard.events.DashboardEvent", function(DashboardEvent) {/*package ext.dashboard.events {
import net.jangaroo.ext.FlExtEvent;

public class DashboardEvent extends FlExtEvent {
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dashboard.Dashboard.html#event-beforedragover Original Ext JS documentation of 'beforedragover'
   * @see ext.dashboard.Dashboard
   * @eventType onBeforeDragOver
   * /
  public static const BEFORE_DRAG_OVER:String = "onBeforeDragOver";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dashboard.Dashboard.html#event-beforedrop Original Ext JS documentation of 'beforedrop'
   * @see ext.dashboard.Dashboard
   * @eventType onBeforeDrop
   * /
  public static const BEFORE_DROP:String = "onBeforeDrop";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dashboard.Dashboard.html#event-dragover Original Ext JS documentation of 'dragover'
   * @see ext.dashboard.Dashboard
   * @eventType onDragOver
   * /
  public static const DRAG_OVER:String = "onDragOver";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dashboard.Dashboard.html#event-drop Original Ext JS documentation of 'drop'
   * @see ext.dashboard.Dashboard
   * @eventType onDrop
   * /
  public static const DROP:String = "onDrop";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.dashboard.Dashboard.html#event-validatedrop Original Ext JS documentation of 'validatedrop'
   * @see ext.dashboard.Dashboard
   * @eventType onValidateDrop
   * /
  public static const VALIDATE_DROP:String = "onValidateDrop";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){DashboardEvent.__PARAMETER_SEQUENCE__=( ["eOpts"]);}/*;

  public*/ function DashboardEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$6vK(type, arguments);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: DashboardEvent$,
      super$$6vK: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_DRAG_OVER: "onBeforeDragOver",
        BEFORE_DROP: "onBeforeDrop",
        DRAG_OVER: "onDragOver",
        DROP: "onDrop",
        VALIDATE_DROP: "onValidateDrop",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
