Ext.define("com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonActionBase", function(OpenMasterComparisonActionBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType;
import com.coremedia.cms.editor.sdk.desktop.WorkArea;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.Premular;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class OpenMasterComparisonActionBase extends ContentAction {
  private var componentStateExpression:ValueExpression;

  public*/ function OpenMasterComparisonActionBase$(config/*:OpenMasterComparisonAction = null*/) {if(arguments.length<=0)config=null;
    var actionName/*:String*/ = 'openInTab';
    this.super$MOqu(AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, actionName, {handler:AS3.bind( this,"openInTab$MOqu")})));
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.removeComponent.call(this,comp);

    if (this.items.length === 0) {
      this.componentStateExpression$MOqu.removeChangeListener(AS3.bind(this,"updateComponents$MOqu"));
    }
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.addComponent.call(this,comp);

    if (this.items.length === 1){
      this.componentStateExpression$MOqu = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getComponentState$MOqu"));
      this.componentStateExpression$MOqu.addChangeListener(AS3.bind(this,"updateComponents$MOqu"));
    }
    this.updateComponents$MOqu();
  }/*

  private*/ function updateComponents()/*:void*/{
    this.setText(this.componentStateExpression$MOqu.getValue());
  }/*

  private*/ function getComponentState()/*: String*/ {
    var contents/*:Array*/ = this.getContents();

    if (contents === undefined || contents.length !== 1 ||
            (com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatus(contents[0]) !== com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_UP_TO_DATE)){

      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_openInTab_text');
    } else {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openMasterComparison_text');
    }
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var notAvailable/*:Boolean*/ = !contents.every(com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType.canBeOpenedInTab);

    //If only one content is to be opened and this is the active content anyway...
    //...then disable the action
    return notAvailable || (contents.length === 1 && contents[0] === com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION.getValue());
  }/*

  private*/ function openInTab(contents/*:**/)/*:void*/ {
    var myContents/*:Array*/ = (AS3.is(contents,  Array) && contents) || this.getContents();
    if (!this.isDisabledFor(myContents)) {
      com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(getTabStates$static, myContents).loadValue(function (tabStates/*:Array*/)/*:void*/{
        com.coremedia.cms.editor.sdk.editorContext.getWorkAreaTabManager().openTabs(tabStates, false);
      });
    }
  }/*

  private static*/ function getTabStates$static(myContents/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < myContents.length; i++) {
      var derived/*:Content*/ = myContents[i];
      var master/*:Content*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getMaster(derived);

      if (master === undefined) {
        return undefined;
      }

      if (master) {
        var tabState/*:Premular*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.Premular,{});
        var checkedIn/*:Boolean*/ = master.isCheckedIn();

        if (checkedIn === undefined) {
          return undefined;
        }

        if (com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatus(derived) === com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_UP_TO_DATE) {
          if (checkedIn) {
            AS3.setBindable(tabState,"readOnlyContentObject" , master.getCheckedInVersion());
          } else {
            AS3.setBindable(tabState,"readOnlyContentObject" , master.getCheckedOutVersion());
          }
        }

        tabState.content = derived;

        result.push(tabState);
      }
    }

    return result;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      componentStateExpression$MOqu: null,
      constructor: OpenMasterComparisonActionBase$,
      super$MOqu: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      removeComponent: removeComponent,
      addComponent: addComponent,
      updateComponents$MOqu: updateComponents,
      getComponentState$MOqu: getComponentState,
      isDisabledFor: isDisabledFor,
      openInTab$MOqu: openInTab,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedEntityWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.Premular",
        "com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"
      ]
    };
});
