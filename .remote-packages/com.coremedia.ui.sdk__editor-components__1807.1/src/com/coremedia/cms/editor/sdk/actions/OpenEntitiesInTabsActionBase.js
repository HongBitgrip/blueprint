Ext.define("com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsActionBase", function(OpenEntitiesInTabsActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ArrayUtils;

[PublicApi]
public class OpenEntitiesInTabsActionBase extends DependencyTrackedAction {
  private var entitiesValueExpression:ValueExpression;
  private var background:Boolean = false;

  public*/ function OpenEntitiesInTabsActionBase$(config/*:OpenEntitiesInTabsAction = null*/) {if(arguments.length<=0)config=null;
    this.entitiesValueExpression$Bta0 = AS3.getBindable(config,"entitiesValueExpression") || com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    this.background$Bta0 = ! !AS3.getBindable(config,"background");

    var actionName/*:String*/ = this.background$Bta0 ? 'openInBackgroundTab' : 'openInTab';
    this.super$Bta0(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, actionName, {handler:AS3.bind( this,"openInTab$Bta0")})));
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='entitiesVariableName')]
  public*/ function setEntities(entities/*:**/)/*:void*/ {
    this.entitiesValueExpression$Bta0.setValue(entities);
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    var entities/*:Array*/ = this.getEntitiesAsArray$Bta0();
    return !entities || !entities.some(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.canBeOpenedInTab);
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    var entities/*:Array*/ = this.getEntitiesAsArray$Bta0();
    return !entities || !entities.some(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.canBeOpenedInTab);
  }/*

  private*/ function getEntitiesAsArray()/*:Array*/ {
    var entitiesValue/*:**/ = this.entitiesValueExpression$Bta0.getValue();
    if (entitiesValue === undefined) {
      return undefined;
    }
    var entities/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(entitiesValue);
    return entities;
  }/*

  private*/ function openInTab()/*:void*/ {
    if (this.calculateDisabled() === false) {
      com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabsForEntities(this.getEntitiesAsArray$Bta0(), this.background$Bta0);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {
        "": ["PublicApi"],
        setEntities: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "entitiesVariableName"
          ]
        ]
      },
      entitiesValueExpression$Bta0: null,
      background$Bta0: false,
      constructor: OpenEntitiesInTabsActionBase$,
      super$Bta0: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setEntities: setEntities,
      calculateDisabled: calculateDisabled,
      calculateHidden: calculateHidden,
      getEntitiesAsArray$Bta0: getEntitiesAsArray,
      openInTab$Bta0: openInTab,
      requires: [
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
