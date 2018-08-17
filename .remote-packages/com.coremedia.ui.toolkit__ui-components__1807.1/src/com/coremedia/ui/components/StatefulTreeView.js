Ext.define("com.coremedia.ui.components.StatefulTreeView", function(StatefulTreeView) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IReadOnlyStateMixin;
import ext.tree.TreeView;

public class StatefulTreeView extends TreeView implements IReadOnlyStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulTreeView";

  public*/ function StatefulTreeView$(config/*:StatefulTreeView = null*/) {if(arguments.length<=0)config=null;
    this.super$YDUZ(config);
  }/*

  /** @private * /
  [Bindable]
  public native function set readOnly(newReadOnly:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get readOnly():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tree.View",
      mixins: ["com.coremedia.ui.mixins.ReadOnlyStateMixin"],
      alias: "widget.com.coremedia.ui.config.statefulTreeView",
      constructor: StatefulTreeView$,
      super$YDUZ: function() {
        Ext.tree.View.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.tree.View",
        "com.coremedia.ui.mixins.ReadOnlyStateMixin"
      ]
    };
});
