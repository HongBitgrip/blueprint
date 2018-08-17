Ext.define("ext.form.field.events.FileUploadField_valueEvent", function(FileUploadField_valueEvent) {/*package ext.form.field.events {
import ext.form.field.FileUploadField;

import net.jangaroo.ext.FlExtEvent;

public class FileUploadField_valueEvent extends FlExtEvent {
  /**
   * Fires when the underlying file input field's value has changed from the user selecting a new file from the system
   * file selection dialog.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.File.html#event-change Original Ext JS documentation of 'change'
   * @see ext.form.field.FileUploadField
   * @eventType onChange
   * /
  public static const CHANGE:String = "onChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FileUploadField_valueEvent.__PARAMETER_SEQUENCE__=( ["source", "value", "eOpts"]);}/*;

  public*/ function FileUploadField_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$vz9l(type, arguments);
  }/*

  public native function get source():FileUploadField;

  /**
   * The file value returned by the underlying file input field
   * /
  public native function get value():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FileUploadField_valueEvent$,
      super$vz9l: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CHANGE: "onChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
