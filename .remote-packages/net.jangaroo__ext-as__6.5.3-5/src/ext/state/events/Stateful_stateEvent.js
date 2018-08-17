Ext.define("ext.state.events.Stateful_stateEvent", function(Stateful_stateEvent) {/*package ext.state.events {
import ext.state.Stateful;

import net.jangaroo.ext.FlExtEvent;

public class Stateful_stateEvent extends FlExtEvent {
  /**
   * Fires before the state of the object is restored. Return false from an event handler to stop the restore.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.state.Stateful.html#event-beforestaterestore Original Ext JS documentation of 'beforestaterestore'
   * @see ext.state.Stateful
   * @eventType onBeforeStateRestore
   * /
  public static const BEFORE_STATE_RESTORE:String = "onBeforeStateRestore";
  /**
   * Fires before the state of the object is saved to the configured state provider. Return false to stop the save.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.state.Stateful.html#event-beforestatesave Original Ext JS documentation of 'beforestatesave'
   * @see ext.state.Stateful
   * @eventType onBeforeStateSave
   * /
  public static const BEFORE_STATE_SAVE:String = "onBeforeStateSave";
  /**
   * Fires after the state of the object is restored.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.state.Stateful.html#event-staterestore Original Ext JS documentation of 'staterestore'
   * @see ext.state.Stateful
   * @eventType onStateRestore
   * /
  public static const STATE_RESTORE:String = "onStateRestore";
  /**
   * Fires after the state of the object is saved to the configured state provider.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.state.Stateful.html#event-statesave Original Ext JS documentation of 'statesave'
   * @see ext.state.Stateful
   * @eventType onStateSave
   * /
  public static const STATE_SAVE:String = "onStateSave";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Stateful_stateEvent.__PARAMETER_SEQUENCE__=( ["source", "state", "eOpts"]);}/*;

  public*/ function Stateful_stateEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$HwIH(type, arguments);
  }/*

  public native function get source():Stateful;

  /**
   * The hash of state values returned from the StateProvider. If this
   * event is not vetoed, then the state object is passed to <i><code>applyState (→applyState())</code></i>. By default,
   * that simply copies property values into this object. The method maybe overriden to
   * provide custom state restoration.
   * @see ext.state.Stateful#applyState()
   * /
  public native function get state():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Stateful_stateEvent$,
      super$HwIH: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_STATE_RESTORE: "onBeforeStateRestore",
        BEFORE_STATE_SAVE: "onBeforeStateSave",
        STATE_RESTORE: "onStateRestore",
        STATE_SAVE: "onStateSave",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
