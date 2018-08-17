Ext.define("com.coremedia.ui.components.StatefulProgressBar", function(StatefulProgressBar) {/*package com.coremedia.ui.components {
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.ProgressBar;

/**
 * A progress bar that changes its background color when its validation state is updated. Its background color changes to
 * red on error state and to green on success state.
 * /
[PublicApi]
public class StatefulProgressBar extends ProgressBar implements IValidationStateMixin {

  public static const xtype:String = "com.coremedia.ui.config.statefulProgressBar";

  public*/ function StatefulProgressBar$(config/*:StatefulProgressBar = null*/) {if(arguments.length<=0)config=null;
    this.super$ULfc(config);
    this.initValidationStateMixin();
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.ProgressBar",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.statefulProgressBar",
      constructor: StatefulProgressBar$,
      super$ULfc: function() {
        Ext.ProgressBar.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.ProgressBar",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ]
    };
});
