Ext.define("ext.form.events.FieldSetEvent", function(FieldSetEvent) {/*package ext.form.events {
import ext.form.FieldSet;

import net.jangaroo.ext.FlExtEvent;

public class FieldSetEvent extends FlExtEvent {
  /**
   * Fires before this FieldSet is collapsed. Return false to prevent the collapse.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldSet.html#event-beforecollapse Original Ext JS documentation of 'beforecollapse'
   * @see ext.form.FieldSet
   * @eventType onBeforeCollapse
   * /
  public static const BEFORE_COLLAPSE:String = "onBeforeCollapse";
  /**
   * Fires before this FieldSet is expanded. Return false to prevent the expand.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldSet.html#event-beforeexpand Original Ext JS documentation of 'beforeexpand'
   * @see ext.form.FieldSet
   * @eventType onBeforeExpand
   * /
  public static const BEFORE_EXPAND:String = "onBeforeExpand";
  /**
   * Fires after this FieldSet has collapsed.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldSet.html#event-collapse Original Ext JS documentation of 'collapse'
   * @see ext.form.FieldSet
   * @eventType onCollapse
   * /
  public static const COLLAPSE:String = "onCollapse";
  /**
   * Fires after this FieldSet has expanded.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.FieldSet.html#event-expand Original Ext JS documentation of 'expand'
   * @see ext.form.FieldSet
   * @eventType onExpand
   * /
  public static const EXPAND:String = "onExpand";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){FieldSetEvent.__PARAMETER_SEQUENCE__=( ["fieldset", "eOpts"]);}/*;

  public*/ function FieldSetEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$c1_Q(type, arguments);
  }/*

  /**
   * The FieldSet being collapsed.
   * /
  public native function get fieldset():FieldSet;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: FieldSetEvent$,
      super$c1_Q: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_COLLAPSE: "onBeforeCollapse",
        BEFORE_EXPAND: "onBeforeExpand",
        COLLAPSE: "onCollapse",
        EXPAND: "onExpand",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
