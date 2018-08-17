Ext.define("ext.events.Component_width_height_oldWidth_oldHeightEvent", function(Component_width_height_oldWidth_oldHeightEvent) {/*package ext.events {
import ext.Component;

import net.jangaroo.ext.FlExtEvent;

public class Component_width_height_oldWidth_oldHeightEvent extends FlExtEvent {
  /**
   * Fires after the component is resized. Note that this does <i>not</i> fire when the component is first laid out at its initial
   * size. To hook that point in the life cycle, use the →<code>event:onBoxReady</code> event.
   * <p>This event does not fire on components that use →<code>liquidLayout</code>, such as
   * <i>Buttons</i> (→<code>ext.button.Button</code>) and <i>Form Fields</i> (→<code>ext.form.field.BaseField</code>).</p>
   * @see ext.Component#event:onBoxReady
   * @see ext.Component#liquidLayout
   * @see ext.button.Button
   * @see ext.form.field.BaseField
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.Component.html#event-resize Original Ext JS documentation of 'resize'
   * @see ext.Component
   * @eventType onResize
   * /
  public static const RESIZE:String = "onResize";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Component_width_height_oldWidth_oldHeightEvent.__PARAMETER_SEQUENCE__=( ["source", "width", "height", "oldWidth", "oldHeight", "eOpts"]);}/*;

  public*/ function Component_width_height_oldWidth_oldHeightEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$lYTt(type, arguments);
  }/*

  /**
   * The new height that was set.
   * /
  public native function get height():Number;

  /**
   * The previous height.
   * /
  public native function get oldHeight():Number;

  /**
   * The previous width.
   * /
  public native function get oldWidth():Number;

  public native function get source():Component;

  /**
   * The new width that was set.
   * /
  public native function get width():Number;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Component_width_height_oldWidth_oldHeightEvent$,
      super$lYTt: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        RESIZE: "onResize",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
