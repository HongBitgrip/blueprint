Ext.define("com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowActionBase", function(OpenCloneSiteWindowActionBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.Trigger;

import ext.Component;
import ext.window.Window;

public class OpenCloneSiteWindowActionBase extends OpenDialogAction {

  private var currentSiteId:String;
  private var currentSiteTrigger:Trigger =*/function currentSiteTrigger_(){this.currentSiteTrigger$Tuyr=( new com.coremedia.ui.data.dependencies.Trigger());}/*;
  private var disabledExpression:ValueExpression;


  public*/ function OpenCloneSiteWindowActionBase$(config/*:OpenCloneSiteWindowAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.super$Tuyr(config);currentSiteTrigger_.call(this);;
    this.disabledExpression$Tuyr = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateDisabled$Tuyr"));
  }/*

  private*/ function updateDisabledStatus()/*:void*/ {
    var value/*:**/ = this.disabledExpression$Tuyr.getValue();
    this.setDisabled(value);
  }/*

  private*/ function calculateDisabled()/*:Boolean*/ {
    this.currentSiteTrigger$Tuyr.dependOn();

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var sites/*:Object*/ = sitesService.getSitesById();

    return !this.currentSiteId$Tuyr || !sites || !sites[this.currentSiteId$Tuyr] || !sitesService.isTranslationManager();
  }/*

  override public*/ function addComponent(comp/*:Component*/)/*:void*/ {
    if (this.hasNoComponents$Tuyr()) {
      this.disabledExpression$Tuyr.addChangeListener(AS3.bind(this,"updateDisabledStatus$Tuyr"));
    }
    com.coremedia.ui.actions.OpenDialogAction.prototype.addComponent.call(this,comp);
    //broadcast the disable state after the add of a component
    this.updateDisabledStatus$Tuyr();
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.ui.actions.OpenDialogAction.prototype.removeComponent.call(this,comp);
    var isEmpty/*:Boolean*/ = this.hasNoComponents$Tuyr();
    if (isEmpty) {
      this.disabledExpression$Tuyr.removeChangeListener(AS3.bind(this,"updateDisabledStatus$Tuyr"));
    }
  }/*

  private*/ function hasNoComponents()/*:Boolean*/ {
    var isEmpty/*:Boolean*/ = true;
    this.each(function ()/*:void*/ {
      isEmpty = false;
    });
    return isEmpty;
  }/*

  [InjectFromExtParent]
  public*/ function setCurrentSiteId(currentSiteId/*:String*/)/*:void*/ {
    this.currentSiteId$Tuyr = currentSiteId;
    this.currentSiteTrigger$Tuyr && this.currentSiteTrigger$Tuyr.trigger();
  }/*

  protected override*/ function getDialogConfig(trigger/*:Component*/)/*:Window*/ {
    var dialogConfig/*:CloneSiteWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.sites.CloneSiteWindow,com.coremedia.ui.actions.OpenDialogAction.prototype.getDialogConfig.call(this,trigger));
    AS3.setBindable(dialogConfig,"siteId" , this.currentSiteId$Tuyr);
    return  dialogConfig;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.OpenDialogAction",
      metadata: {setCurrentSiteId: ["InjectFromExtParent"]},
      currentSiteId$Tuyr: null,
      disabledExpression$Tuyr: null,
      constructor: OpenCloneSiteWindowActionBase$,
      super$Tuyr: function() {
        com.coremedia.ui.actions.OpenDialogAction.prototype.constructor.apply(this, arguments);
      },
      updateDisabledStatus$Tuyr: updateDisabledStatus,
      calculateDisabled$Tuyr: calculateDisabled,
      addComponent: addComponent,
      removeComponent: removeComponent,
      hasNoComponents$Tuyr: hasNoComponents,
      setCurrentSiteId: setCurrentSiteId,
      getDialogConfig: getDialogConfig,
      requires: [
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.Trigger"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.CloneSiteWindow"
      ]
    };
});
