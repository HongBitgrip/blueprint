Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowInfoFormBase", function(DefaultTranslationWorkflowInfoFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;

[PublicApi]
public class DefaultTranslationWorkflowInfoFormBase extends DefaultTranslationWorkflowFormBase {

  private var premularConfigurationsValueExpression:ValueExpression;
  private var _contentGridPanel:ContentGridPanel;

  public*/ function DefaultTranslationWorkflowInfoFormBase$(config/*:DefaultTranslationWorkflowInfoForm = null*/) {if(arguments.length<=0)config=null;
    this.super$VjK2(config);
  }/*

  internal*/ function getContentGridPanel()/*:ContentGridPanel*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, 'afterrender');

    if (!this._contentGridPanel$VjK2) {
      this._contentGridPanel$VjK2 =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.CONTENTS_ITEM_ID),  com.coremedia.cms.editor.sdk.components.ContentGridPanel);
    }

    return this._contentGridPanel$VjK2;
  }/*

  internal*/ function getSelectedPremularConfigurationsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.premularConfigurationsValueExpression$VjK2) {
      var that/*:DefaultTranslationWorkflowInfoFormBase*/ = this;
      this.premularConfigurationsValueExpression$VjK2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
        var contentGridPanel/*:ContentGridPanel*/ = that.getContentGridPanel();
        if (!contentGridPanel) {
          return undefined;
        }

        var selectedItems/*:Array*/ = contentGridPanel.getSelectedItems();
        var premularConfigurations/*:Array*/ = this$.getPremularConfigurationsValueExpression().getValue();

        if (!selectedItems) {
          return [];
        }

        if (premularConfigurations === undefined) {
          return undefined;
        }

        return premularConfigurations.filter(function (premularConfiguration/*:PremularConfiguration*/)/*:Boolean*/ {
          return selectedItems.indexOf(premularConfiguration.content) !== -1;
        });
      });
    }

    return this.premularConfigurationsValueExpression$VjK2;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
      metadata: {"": ["PublicApi"]},
      premularConfigurationsValueExpression$VjK2: null,
      _contentGridPanel$VjK2: null,
      constructor: DefaultTranslationWorkflowInfoFormBase$,
      super$VjK2: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.prototype.constructor.apply(this, arguments);
      },
      getContentGridPanel: getContentGridPanel,
      getSelectedPremularConfigurationsValueExpression: getSelectedPremularConfigurationsValueExpression,
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ]
    };
});
