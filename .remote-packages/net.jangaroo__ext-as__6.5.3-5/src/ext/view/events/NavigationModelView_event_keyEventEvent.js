Ext.define("ext.view.events.NavigationModelView_event_keyEventEvent", function(NavigationModelView_event_keyEventEvent) {/*package ext.view.events {
import ext.event.Event;

import net.jangaroo.ext.FlExtEvent;

public class NavigationModelView_event_keyEventEvent extends FlExtEvent {
  /**
   * Fired when a key has been used to navigate around the view.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.view.NavigationModel.html#event-navigate Original Ext JS documentation of 'navigate'
   * @see ext.view.NavigationModelView
   * @eventType onNavigate
   * /
  public static const NAVIGATE:String = "onNavigate";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){NavigationModelView_event_keyEventEvent.__PARAMETER_SEQUENCE__=( ["event", "keyEvent", "eOpts"]);}/*;

  public*/ function NavigationModelView_event_keyEventEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$bdmS(type, arguments);
  }/*

  /**
   * <ul>
   * <li><code>previousRecordIndex:Number</code> (optional) —
   * The previously focused record index.
   * </li>
   * <li><code>previousRecord:ext.data.Model</code> (optional) —
   * The previously focused record.
   * </li>
   * <li><code>previousItem:js.HTMLElement</code> (optional) —
   * The previously focused view item.
   * </li>
   * <li><code>recordIndex:Number</code> (optional) —
   * The newly focused record index.
   * </li>
   * <li><code>record:ext.data.Model</code> (optional) —
   * the newly focused record.
   * </li>
   * <li><code>item:js.HTMLElement</code> (optional) —
   * the newly focused view item.
   * </li>
   * </ul>
   * /
  public native function get event():Object;

  /**
   * The key event which caused the navigation.
   * /
  public native function get keyEvent():Event;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: NavigationModelView_event_keyEventEvent$,
      super$bdmS: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        NAVIGATE: "onNavigate",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
