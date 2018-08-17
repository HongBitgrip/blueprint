Ext.define("ext.form.field.events.ComboBox_queryPlanEvent", function(ComboBox_queryPlanEvent) {/*package ext.form.field.events {
import net.jangaroo.ext.FlExtEvent;

public class ComboBox_queryPlanEvent extends FlExtEvent {
  /**
   * Fires before all queries are processed. Return false to cancel the query or set the queryPlan's cancel
   * property to true.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.field.ComboBox.html#event-beforequery Original Ext JS documentation of 'beforequery'
   * @see ext.form.field.ComboBox
   * @eventType onBeforeQuery
   * /
  public static const BEFORE_QUERY:String = "onBeforeQuery";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){ComboBox_queryPlanEvent.__PARAMETER_SEQUENCE__=( ["queryPlan", "eOpts"]);}/*;

  public*/ function ComboBox_queryPlanEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$PVa7(type, arguments);
  }/*

  /**
   * An object containing details about the query to be executed.
   * <ul>
   * <li><code>combo:ext.form.field.ComboBox</code> (optional) —
   * A reference to this ComboBox.
   * </li>
   * <li><code>query:String</code> (optional) —
   * The query value to be used to match against the ComboBox's →<code>valueField</code>.
   * </li>
   * <li><code>forceAll:Boolean</code> (optional) —
   * If <code>true</code>, causes the query to be executed even if the minChars threshold is not met.
   * </li>
   * <li><code>cancel:Boolean</code> (optional) —
   * A boolean value which, if set to <code>true</code> upon return, causes the query not to be executed.
   * </li>
   * <li><code>rawQuery:Boolean</code> (optional) —
   * If <code>true</code> indicates that the raw input field value is being used, and upon store load,
   * </li>
   * </ul>
   * @see ext.form.field.ComboBox#valueField
   * /
  public native function get queryPlan():Object;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: ComboBox_queryPlanEvent$,
      super$PVa7: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_QUERY: "onBeforeQuery",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
