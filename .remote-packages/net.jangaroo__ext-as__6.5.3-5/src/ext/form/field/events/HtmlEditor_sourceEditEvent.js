Ext.define("ext.form.field.events.HtmlEditor_sourceEditEvent", function(HtmlEditor_sourceEditEvent) {/*package ext.form.field.events {
import ext.form.field.HtmlEditor;

import net.jangaroo.ext.FlExtEvent;

public class HtmlEditor_sourceEditEvent extends FlExtEvent {
  /**
   * Fires when the editor switches edit modes
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-editmodechange Original Ext JS documentation of 'editmodechange'
   * @see ext.form.field.HtmlEditor
   * @eventType onEditModeChange
   * /
  public static const EDIT_MODE_CHANGE:String = "onEditModeChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HtmlEditor_sourceEditEvent.__PARAMETER_SEQUENCE__=( ["source", "sourceEdit", "eOpts"]);}/*;

  public*/ function HtmlEditor_sourceEditEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$$U4o(type, arguments);
  }/*

  public native function get source():HtmlEditor;

  /**
   * True if source edit, false if standard editing.
   * /
  public native function get sourceEdit():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HtmlEditor_sourceEditEvent$,
      super$$U4o: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        EDIT_MODE_CHANGE: "onEditModeChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
