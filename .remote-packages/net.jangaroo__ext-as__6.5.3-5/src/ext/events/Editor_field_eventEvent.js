Ext.define("ext.events.Editor_field_eventEvent", function(Editor_field_eventEvent) {/*package ext.events {
import ext.Editor;
import ext.event.Event;
import ext.form.field.Field;

import net.jangaroo.ext.FlExtEvent;

public class Editor_field_eventEvent extends FlExtEvent {
  /**
   * Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. You can check
   * →<code>ext.event.Event.getKey()</code> to determine which key was pressed.
   * @see ext.event.Event#getKey()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-specialkey Original Ext JS documentation of 'specialkey'
   * @see ext.Editor
   * @eventType onSpecialKey
   * /
  public static const SPECIAL_KEY:String = "onSpecialKey";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Editor_field_eventEvent.__PARAMETER_SEQUENCE__=( ["source", "field", "event", "eOpts"]);}/*;

  public*/ function Editor_field_eventEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$0DIF(type, arguments);
  }/*

  /**
   * The event object
   * /
  public native function get event():Event;

  /**
   * The field attached to this editor
   * /
  public native function get field():Field;

  public native function get source():Editor;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Editor_field_eventEvent$,
      super$0DIF: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SPECIAL_KEY: "onSpecialKey",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
