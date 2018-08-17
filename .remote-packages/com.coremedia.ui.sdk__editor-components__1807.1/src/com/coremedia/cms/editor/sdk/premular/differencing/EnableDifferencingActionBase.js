Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingActionBase", function(EnableDifferencingActionBase) {/*package com.coremedia.cms.editor.sdk.premular.differencing {

import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.ui.actions.DependencyTrackedAction;

public class EnableDifferencingActionBase extends DependencyTrackedAction {

  public*/ function EnableDifferencingActionBase$(config/*:EnableDifferencingAction = null*/) {if(arguments.length<=0)config=null;
    this.super$HpZs(AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "enableDifferencing", {handler:AS3.bind( this,"triggerDifferencing")})));
  }/*

  public*/ function triggerDifferencing()/*:void*/ {
    var diffManager/*:DiffManager*/ = AS3.getBindable(AS3.cast(com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction,this.initialConfig),"premular").getDiffManager();
    diffManager.getPausedValueExpression().setValue(!diffManager.isPaused());
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      constructor: EnableDifferencingActionBase$,
      super$HpZs: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      triggerDifferencing: triggerDifferencing,
      requires: ["com.coremedia.ui.actions.DependencyTrackedAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.differencing.EnableDifferencingAction"
      ]
    };
});
