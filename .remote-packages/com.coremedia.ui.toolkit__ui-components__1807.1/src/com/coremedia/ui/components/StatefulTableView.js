Ext.define("com.coremedia.ui.components.StatefulTableView", function(StatefulTableView) {/*package com.coremedia.ui.components {

import com.coremedia.ui.mixins.IReadOnlyStateMixin;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.view.TableView;

public class StatefulTableView extends TableView implements IReadOnlyStateMixin, IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulTableView";

  public*/ function StatefulTableView$(config/*:StatefulTableView = null*/) {if(arguments.length<=0)config=null;
    this.super$g2TJ(config);
    this.initValidationStateMixin();
  }/*

  /** @private * /
  [Bindable]
  public native function set readOnly(newReadOnly:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get readOnly():Boolean;

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.view.Table",
      mixins: [
        "com.coremedia.ui.mixins.ReadOnlyStateMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      alias: "widget.com.coremedia.ui.config.statefulTableView",
      constructor: StatefulTableView$,
      super$g2TJ: function() {
        Ext.view.Table.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.view.Table",
        "com.coremedia.ui.mixins.ReadOnlyStateMixin",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
