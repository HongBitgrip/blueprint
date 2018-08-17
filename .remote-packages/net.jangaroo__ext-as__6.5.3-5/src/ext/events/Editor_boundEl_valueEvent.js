Ext.define("ext.events.Editor_boundEl_valueEvent", function(Editor_boundEl_valueEvent) {/*package ext.events {
import ext.Editor;
import ext.dom.Element;

import net.jangaroo.ext.FlExtEvent;

public class Editor_boundEl_valueEvent extends FlExtEvent {
  /**
   * Fires when editing is initiated, but before the value changes. Editing can be canceled by returning
   * false from the handler of this event.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-beforestartedit Original Ext JS documentation of 'beforestartedit'
   * @see ext.Editor
   * @eventType onBeforeStartEdit
   * /
  public static const BEFORE_START_EDIT:String = "onBeforeStartEdit";
  /**
   * Fires when this editor is displayed
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Editor.html#event-startedit Original Ext JS documentation of 'startedit'
   * @see ext.Editor
   * @eventType onStartEdit
   * /
  public static const START_EDIT:String = "onStartEdit";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Editor_boundEl_valueEvent.__PARAMETER_SEQUENCE__=( ["source", "boundEl", "value", "eOpts"]);}/*;

  public*/ function Editor_boundEl_valueEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$RTBj(type, arguments);
  }/*

  /**
   * The underlying element bound to this editor
   * /
  public native function get boundEl():Element;

  public native function get source():Editor;

  /**
   * The field value being set
   * /
  public native function get value():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Editor_boundEl_valueEvent$,
      super$RTBj: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_START_EDIT: "onBeforeStartEdit",
        START_EDIT: "onStartEdit",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
