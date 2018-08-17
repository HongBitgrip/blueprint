Ext.define("ext.events.GlobalEvents_contextEvent", function(GlobalEvents_contextEvent) {/*package ext.events {
import net.jangaroo.ext.FlExtEvent;

public class GlobalEvents_contextEvent extends FlExtEvent {
  /**
   * Fires before →<code>ext.mixin.Responsive</code> perform any updates in response to
   * dynamic changes. This is prior to refreshing <code>responsiveFormulas</code>.
   * @since 5.0.1
   * @see ext.mixin.Responsive
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-beforeresponsiveupdate Original Ext JS documentation of 'beforeresponsiveupdate'
   * @see ext.SGlobalEvents
   * @eventType onBeforeResponsiveUpdate
   * /
  public static const BEFORE_RESPONSIVE_UPDATE:String = "onBeforeResponsiveUpdate";
  /**
   * Fires when →<code>ext.mixin.Responsive</code> is about to perform updates in response to
   * dynamic changes. At this point all <code>responsiveFormulas</code> have been refreshed.
   * @since 5.0.1
   * @see ext.mixin.Responsive
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-beginresponsiveupdate Original Ext JS documentation of 'beginresponsiveupdate'
   * @see ext.SGlobalEvents
   * @eventType onBeginResponsiveUpdate
   * /
  public static const BEGIN_RESPONSIVE_UPDATE:String = "onBeginResponsiveUpdate";
  /**
   * Fires after →<code>ext.mixin.Responsive</code> has performed updates in response to
   * dynamic changes.
   * @since 5.0.1
   * @see ext.mixin.Responsive
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-responsiveupdate Original Ext JS documentation of 'responsiveupdate'
   * @see ext.SGlobalEvents
   * @eventType onResponsiveUpdate
   * /
  public static const RESPONSIVE_UPDATE:String = "onResponsiveUpdate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEvents_contextEvent.__PARAMETER_SEQUENCE__=( ["context", "eOpts"]);}/*;

  public*/ function GlobalEvents_contextEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$LnXc(type, arguments);
  }/*

  /**
   * The context object used by <code>responsiveConfig</code> expressions.
   * /
  public native function get context():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEvents_contextEvent$,
      super$LnXc: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_RESPONSIVE_UPDATE: "onBeforeResponsiveUpdate",
        BEGIN_RESPONSIVE_UPDATE: "onBeginResponsiveUpdate",
        RESPONSIVE_UPDATE: "onResponsiveUpdate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
