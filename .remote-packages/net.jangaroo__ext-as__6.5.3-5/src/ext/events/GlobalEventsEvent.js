Ext.define("ext.events.GlobalEventsEvent", function(GlobalEventsEvent) {/*package ext.events {
import net.jangaroo.ext.FlExtEvent;

public class GlobalEventsEvent extends FlExtEvent {
  /**
   * Fires when an event handler finishes its run, just before returning to
   * browser control.
   * <p>This includes DOM event handlers, Ajax (including JSONP) event handlers,
   * and <i>TaskRunners</i> (→<code>ext.util.TaskRunner</code>)</p>
   * <p>When called at the tail of a DOM event, the event object is passed as the
   * sole parameter.</p>
   * <p>This can be useful for performing cleanup, or update tasks which need to
   * happen only after all code in an event handler has been run, but which
   * should not be executed in a timer due to the intervening browser
   * reflow/repaint which would take place.</p>
   * @see ext.util.TaskRunner
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-idle Original Ext JS documentation of 'idle'
   * @see ext.SGlobalEvents
   * @eventType onIdle
   * /
  public static const IDLE:String = "onIdle";
  /**
   * Fires after global layout processing has been resumed in →<code>ext.Component.resumeLayouts()</code>.
   * @see ext.Component#resumeLayouts()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.GlobalEvents.html#event-resumelayouts Original Ext JS documentation of 'resumelayouts'
   * @see ext.SGlobalEvents
   * @eventType onResumeLayouts
   * /
  public static const RESUME_LAYOUTS:String = "onResumeLayouts";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){GlobalEventsEvent.__PARAMETER_SEQUENCE__=( ["eOpts"]);}/*;

  public*/ function GlobalEventsEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$nShM(type, arguments);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: GlobalEventsEvent$,
      super$nShM: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        IDLE: "onIdle",
        RESUME_LAYOUTS: "onResumeLayouts",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
