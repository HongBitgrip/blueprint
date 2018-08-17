Ext.define("ext.events.Component_width_heightEvent", function(Component_width_heightEvent) {/*package ext.events {
import ext.Component;

import net.jangaroo.ext.FlExtEvent;

public class Component_width_heightEvent extends FlExtEvent {
  /**
   * Fires <i>one time</i> - after the component has been laid out for the first time at its initial size.
   * <p>This event does not fire on components that use →<code>liquidLayout</code>, such as
   * <i>Buttons</i> (→<code>ext.button.Button</code>) and <i>Form Fields</i> (→<code>ext.form.field.BaseField</code>).</p>
   * @see ext.Component#liquidLayout
   * @see ext.button.Button
   * @see ext.form.field.BaseField
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-boxready Original Ext JS documentation of 'boxready'
   * @see ext.Component
   * @eventType onBoxReady
   * /
  public static const BOX_READY:String = "onBoxReady";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_width_heightEvent.__PARAMETER_SEQUENCE__=( ["source", "width", "height", "eOpts"]);}/*;

  public*/ function Component_width_heightEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$g25m(type, arguments);
  }/*

  /**
   * The initial height.
   * /
  public native function get height():Number;

  public native function get source():Component;

  /**
   * The initial width.
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Component_width_heightEvent$,
      super$g25m: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BOX_READY: "onBoxReady",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
