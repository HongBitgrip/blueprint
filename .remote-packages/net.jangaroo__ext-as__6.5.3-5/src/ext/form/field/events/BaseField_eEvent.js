Ext.define("ext.form.field.events.BaseField_eEvent", function(BaseField_eEvent) {/*package ext.form.field.events {
import ext.event.Event;
import ext.form.field.BaseField;

import net.jangaroo.ext.FlExtEvent;

public class BaseField_eEvent extends FlExtEvent {
  /**
   * Fires when any key related to navigation (arrows, tab, enter, esc, etc.) is pressed. To handle other keys
   * see →<code>ext.util.KeyMap</code>. You can check →<code>ext.event.Event.getKey()</code> to determine which key was
   * pressed. For example:
   * <pre>
   * var form = new Ext.form.Panel({
   *     ...
   *     items: [{
   *             fieldLabel: 'Field 1',
   *             name: 'field1',
   *             allowBlank: false
   *         },{
   *             fieldLabel: 'Field 2',
   *             name: 'field2',
   *             listeners: {
   *                 specialkey: function(field, e){
   *                     // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
   *                     // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
   *                     if (e.getKey() == e.ENTER) {
   *                         var form = field.up('form').getForm();
   *                         form.submit();
   *                     }
   *                 }
   *             }
   *         }
   *     ],
   *     ...
   * });
   * </pre>
   * @see ext.util.KeyMap
   * @see ext.event.Event#getKey()
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.Base.html#event-specialkey Original Ext JS documentation of 'specialkey'
   * @see ext.form.field.BaseField
   * @eventType onSpecialKey
   * /
  public static const SPECIAL_KEY:String = "onSpecialKey";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){BaseField_eEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "eOpts"]);}/*;

  public*/ function BaseField_eEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$T$0l(type, arguments);
  }/*

  /**
   * The event object
   * /
  public native function get e():Event;

  public native function get source():BaseField;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: BaseField_eEvent$,
      super$T$0l: function() {
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
