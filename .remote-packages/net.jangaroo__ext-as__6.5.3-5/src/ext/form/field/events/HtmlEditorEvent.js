Ext.define("ext.form.field.events.HtmlEditorEvent", function(HtmlEditorEvent) {/*package ext.form.field.events {
import ext.form.field.HtmlEditor;

import net.jangaroo.ext.FlExtEvent;

public class HtmlEditorEvent extends FlExtEvent {
  /**
   * Fires when the editor is first receives the focus. Any insertion must wait until after this event.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-activate Original Ext JS documentation of 'activate'
   * @see ext.form.field.HtmlEditor
   * @eventType onActivate
   * /
  public static const ACTIVATE:String = "onActivate";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-blur Original Ext JS documentation of 'blur'
   * @see ext.form.field.HtmlEditor
   * @eventType onBlur
   * /
  public static const BLUR:String = "onBlur";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-focus Original Ext JS documentation of 'focus'
   * @see ext.form.field.HtmlEditor
   * @eventType onFocus
   * /
  public static const FOCUS:String = "onFocus";
  /**
   * Fires when the editor is fully initialized (including the iframe)
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-initialize Original Ext JS documentation of 'initialize'
   * @see ext.form.field.HtmlEditor
   * @eventType onInitialize
   * /
  public static const INITIALIZE:String = "onInitialize";
  /**
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-specialkey Original Ext JS documentation of 'specialkey'
   * @see ext.form.field.HtmlEditor
   * @eventType onSpecialKey
   * /
  public static const SPECIAL_KEY:String = "onSpecialKey";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HtmlEditorEvent.__PARAMETER_SEQUENCE__=( ["source", "eOpts"]);}/*;

  public*/ function HtmlEditorEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$375U(type, arguments);
  }/*

  public native function get source():HtmlEditor;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HtmlEditorEvent$,
      super$375U: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ACTIVATE: "onActivate",
        BLUR: "onBlur",
        FOCUS: "onFocus",
        INITIALIZE: "onInitialize",
        SPECIAL_KEY: "onSpecialKey",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
