Ext.define("ext.panel.events.Tool_e_ownerEvent", function(Tool_e_ownerEvent) {/*package ext.panel.events {
import ext.Component;
import ext.event.Event;
import ext.panel.Tool;

import net.jangaroo.ext.FlExtEvent;

public class Tool_e_ownerEvent extends FlExtEvent {
  /**
   * Fires when the tool is clicked
   * @since 5.0.0
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.panel.Tool.html#event-click Original Ext JS documentation of 'click'
   * @see ext.panel.Tool
   * @eventType onClick
   * /
  public static const CLICK:String = "onClick";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){Tool_e_ownerEvent.__PARAMETER_SEQUENCE__=( ["source", "e", "owner", "eOpts"]);}/*;

  public*/ function Tool_e_ownerEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$RWTg(type, arguments);
  }/*

  /**
   * The event object
   * /
  public native function get e():Event;

  /**
   * The logical owner of the tool. In a typical
   * <code>→ext.panel.Panel</code>, this is set to the owning panel. This value comes from the
   * <code>→toolOwner</code> config.
   * Note that if the tool handler destroys the tool and/or its owner, the event
   * will not fire.
   * @see ext.panel.Panel
   * @see ext.panel.Tool#toolOwner
   * /
  public native function get owner():Component;

  public native function get source():Tool;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: Tool_e_ownerEvent$,
      super$RWTg: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLICK: "onClick",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
