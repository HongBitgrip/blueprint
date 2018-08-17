Ext.define("ext.data.events.TreeStore_newRoot_oldRootEvent", function(TreeStore_newRoot_oldRootEvent) {/*package ext.data.events {
import net.jangaroo.ext.FlExtEvent;

public class TreeStore_newRoot_oldRootEvent extends FlExtEvent {
  /**
   * Fires any time the tree's root node changes.
   * @see https://docs.sencha.com/extjs/6.5.3/classic/Ext.data.TreeStore.html#event-rootchange Original Ext JS documentation of 'rootchange'
   * @see ext.data.TreeStore
   * @eventType onRootChange
   * /
  public static const ROOT_CHANGE:String = "onRootChange";
  public static const __PARAMETER_SEQUENCE__:Array =*/function __PARAMETER_SEQUENCE__$static_(){TreeStore_newRoot_oldRootEvent.__PARAMETER_SEQUENCE__=( ["newRoot", "oldRoot", "eOpts"]);}/*;

  public*/ function TreeStore_newRoot_oldRootEvent$(type/*:String*/, arguments/*:Array*/) {
    this.super$XUW8(type, arguments);
  }/*

  /**
   * The new root
   * /
  public native function get newRoot():*;

  /**
   * The old root
   * /
  public native function get oldRoot():*;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "net.jangaroo.ext.FlExtEvent",
      constructor: TreeStore_newRoot_oldRootEvent$,
      super$XUW8: function() {
        net.jangaroo.ext.FlExtEvent.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ROOT_CHANGE: "onRootChange",
        __PARAMETER_SEQUENCE__: undefined,
        __initStatics__: function() {
          __PARAMETER_SEQUENCE__$static_();
        }
      },
      requires: ["net.jangaroo.ext.FlExtEvent"]
    };
});
