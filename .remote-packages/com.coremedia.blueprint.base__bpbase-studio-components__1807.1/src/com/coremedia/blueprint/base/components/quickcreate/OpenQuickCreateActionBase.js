Ext.define("com.coremedia.blueprint.base.components.quickcreate.OpenQuickCreateActionBase", function(OpenQuickCreateActionBase) {/*package com.coremedia.blueprint.base.components.quickcreate {
import com.coremedia.ui.actions.OpenDialogAction;

import ext.Ext;

/**
 * Action to open the quick create dialog.
 * We are using a subclassed OpenDialogAction here to provide the possibility to intercept
 * all quick create actions and apply an own dialog instead.
 * /
[PublicApi]
public class OpenQuickCreateActionBase extends OpenDialogAction {

  public static var overrideHandler:Function;
  private var qcConfig:Object;

  /**
   * @param config the config object
   * /
  public*/ function OpenQuickCreateActionBase$(config/*:OpenQuickCreateAction = null*/) {if(arguments.length<=0)config=null;
    this.qcConfig$sPoL = {contentType:AS3.getBindable(config,"contentType"),
      contentTypeExpression:AS3.getBindable(config,"contentTypeExpression"),
      inheritEditors:AS3.getBindable(config,"inheritEditors"),
      propertyName:AS3.getBindable(config,"propertyName"),
      bindTo:AS3.getBindable(config,"bindTo"),
      linkType:AS3.getBindable(config,"linkType"),
      model:AS3.getBindable(config,"model"),
      skipInitializers:AS3.getBindable(config,"skipInitializers"),
      defaultNameExpression:AS3.getBindable(config,"defaultNameExpression"),
      onSuccess:AS3.getBindable(config,"onSuccess"),
      defaultProperties:AS3.getBindable(config,"defaultProperties"),
      processingDataFactory:AS3.getBindable(config,"processingDataFactory"),
      appendResultAtEnd:AS3.getBindable(config,"appendResultAtEnd"),
      openInTab:AS3.getBindable(config,"openInTab"),
      sourceLinkListVE:AS3.getBindable(config,"sourceLinkListVE")};
    var qcdConfig/*:QuickCreateDialog*/ = AS3.cast(com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialog,Ext.apply({}, this.qcConfig$sPoL));

    AS3.setBindable(config,"dialog" , qcdConfig);
    this.super$sPoL(config);
  }/*


  override protected*/ function handlerFunction()/*:void*/ {
    if(OpenQuickCreateActionBase.overrideHandler) {
      OpenQuickCreateActionBase.overrideHandler.call(null, this.qcConfig$sPoL);
    }
    else {
      com.coremedia.ui.actions.OpenDialogAction.prototype.handlerFunction.call(this);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.OpenDialogAction",
      metadata: {"": ["PublicApi"]},
      qcConfig$sPoL: null,
      constructor: OpenQuickCreateActionBase$,
      super$sPoL: function() {
        com.coremedia.ui.actions.OpenDialogAction.prototype.constructor.apply(this, arguments);
      },
      handlerFunction: handlerFunction,
      statics: {overrideHandler: null},
      requires: [
        "Ext",
        "com.coremedia.ui.actions.OpenDialogAction"
      ],
      uses: ["com.coremedia.blueprint.base.components.quickcreate.QuickCreateDialog"]
    };
});
