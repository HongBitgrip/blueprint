Ext.define("ext.form.events.BasicForm_actionEvent", function(BasicForm_actionEvent) {/*package ext.form.events {
import ext.form.BasicForm;
import ext.form.action.Action;

import net.jangaroo.ext.FlExtEvent;

public class BasicForm_actionEvent extends FlExtEvent {
  /**
   * Fires when an action is completed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Basic.html#event-actioncomplete Original Ext JS documentation of 'actioncomplete'
   * @see ext.form.BasicForm
   * @eventType onActionComplete
   * /
  public static const ACTION_COMPLETE:String = "onActionComplete";
  /**
   * Fires when an action fails.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Basic.html#event-actionfailed Original Ext JS documentation of 'actionfailed'
   * @see ext.form.BasicForm
   * @eventType onActionFailed
   * /
  public static const ACTION_FAILED:String = "onActionFailed";
  /**
   * Fires before any action is performed. Return false to cancel the action.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Basic.html#event-beforeaction Original Ext JS documentation of 'beforeaction'
   * @see ext.form.BasicForm
   * @eventType onBeforeAction
   * /
  public static const BEFORE_ACTION:String = "onBeforeAction";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){BasicForm_actionEvent.__PARAMETER_SEQUENCE__=( ["source", "action", "eOpts"]);}/*;

  public*/ function BasicForm_actionEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$qR1$(type, arguments);
  }/*

  /**
   * The →<code>ext.form.action.Action</code> that completed
   * @see ext.form.action.Action
   * /
  public native function get action():Action;

  public native function get source():BasicForm;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: BasicForm_actionEvent$,
      super$qR1$: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTION_COMPLETE: "onActionComplete",
        ACTION_FAILED: "onActionFailed",
        BEFORE_ACTION: "onBeforeAction",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
