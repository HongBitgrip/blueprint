Ext.define("ext.events.Editor_value_startValueEvent", function(Editor_value_startValueEvent) {/*package ext.events {
import ext.Editor;

import net.jangaroo.ext.FlExtEvent;

public class Editor_value_startValueEvent extends FlExtEvent {
  /**
   * Fires after a change has been made to the field, but before the change is reflected in the underlying
   * field. Saving the change to the field can be canceled by returning false from the handler of this event.
   * Note that if the value has not changed and ignoreNoChange = true, the editing will still end but this
   * event will not fire since no edit actually occurred.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-beforecomplete Original Ext JS documentation of 'beforecomplete'
   * @see ext.Editor
   * @eventType onBeforeComplete
   * /
  public static const BEFORE_COMPLETE:String = "onBeforeComplete";
  /**
   * Fires after editing has been canceled and the editor's value has been reset.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-canceledit Original Ext JS documentation of 'canceledit'
   * @see ext.Editor
   * @eventType onCancelEdit
   * /
  public static const CANCEL_EDIT:String = "onCancelEdit";
  /**
   * Fires after editing is complete and any changed value has been written to the underlying field.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-complete Original Ext JS documentation of 'complete'
   * @see ext.Editor
   * @eventType onComplete
   * /
  public static const COMPLETE:String = "onComplete";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Editor_value_startValueEvent.__PARAMETER_SEQUENCE__=( ["source", "value", "startValue", "eOpts"]);}/*;

  public*/ function Editor_value_startValueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$VPaJ(type, arguments);
  }/*

  public native function get source():Editor;

  /**
   * The original field value
   * /
  public native function get startValue():Object;

  /**
   * The current field value
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Editor_value_startValueEvent$,
      super$VPaJ: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_COMPLETE: "onBeforeComplete",
        CANCEL_EDIT: "onCancelEdit",
        COMPLETE: "onComplete",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
