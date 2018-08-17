Ext.define("ext.form.field.events.HtmlEditor_htmlEvent", function(HtmlEditor_htmlEvent) {/*package ext.form.field.events {
import ext.form.field.HtmlEditor;

import net.jangaroo.ext.FlExtEvent;

public class HtmlEditor_htmlEvent extends FlExtEvent {
  /**
   * Fires before the iframe editor is updated with content from the textarea. Return false to cancel the
   * push.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-beforepush Original Ext JS documentation of 'beforepush'
   * @see ext.form.field.HtmlEditor
   * @eventType onBeforePush
   * /
  public static const BEFORE_PUSH:String = "onBeforePush";
  /**
   * Fires before the textarea is updated with content from the editor iframe. Return false to cancel the
   * sync.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-beforesync Original Ext JS documentation of 'beforesync'
   * @see ext.form.field.HtmlEditor
   * @eventType onBeforeSync
   * /
  public static const BEFORE_SYNC:String = "onBeforeSync";
  /**
   * Fires when the iframe editor is updated with content from the textarea.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-push Original Ext JS documentation of 'push'
   * @see ext.form.field.HtmlEditor
   * @eventType onPush
   * /
  public static const PUSH:String = "onPush";
  /**
   * Fires when the textarea is updated with content from the editor iframe.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.HtmlEditor.html#event-sync Original Ext JS documentation of 'sync'
   * @see ext.form.field.HtmlEditor
   * @eventType onSync
   * /
  public static const SYNC:String = "onSync";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){HtmlEditor_htmlEvent.__PARAMETER_SEQUENCE__=( ["source", "html", "eOpts"]);}/*;

  public*/ function HtmlEditor_htmlEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$sKVC(type, arguments);
  }/*

  public native function get html():String;

  public native function get source():HtmlEditor;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: HtmlEditor_htmlEvent$,
      super$sKVC: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_PUSH: "onBeforePush",
        BEFORE_SYNC: "onBeforeSync",
        PUSH: "onPush",
        SYNC: "onSync",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
