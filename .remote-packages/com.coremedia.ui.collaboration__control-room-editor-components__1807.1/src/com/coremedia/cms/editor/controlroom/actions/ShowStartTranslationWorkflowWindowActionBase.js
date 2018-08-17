Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase", function(ShowStartTranslationWorkflowWindowActionBase) {/*package com.coremedia.cms.editor.controlroom.actions {

import com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;

import ext.ComponentManager;
import ext.Ext;
import ext.window.Window;

public class ShowStartTranslationWorkflowWindowActionBase extends ShowStartWorkflowWindowAction {

  public*/ function ShowStartTranslationWorkflowWindowActionBase$(config/*:ShowStartTranslationWorkflowWindowAction = null*/) {if(arguments.length<=0)config=null;
    this.super$19jl(AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction,Ext.apply({
              'processDefinitionNames': AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getTranslationProcessDefinitions()
            },
            config)));
  }/*

  override protected*/ function createWorkflowWindow(defaultWorkflowName/*:String*/, availableProcessDefinitionNames/*:Array*/)/*:Window*/ {
    var startTranslationWorkflowWindowCfg/*:StartTranslationWorkflowWindow*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow,{});
    AS3.setBindable(startTranslationWorkflowWindowCfg,"contents" , this.getContents());
    AS3.setBindable(startTranslationWorkflowWindowCfg,"defaultWorkflowName" , defaultWorkflowName);
    AS3.setBindable(startTranslationWorkflowWindowCfg,"availableProcessDefinitionNames" , availableProcessDefinitionNames);
    var window/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(startTranslationWorkflowWindowCfg));
    return window;
  }/*

  override protected*/ function mayStartWorkflow()/*:Boolean*/ {
    if (!com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction.prototype.mayStartWorkflow.call(this)) {
      return false;
    }

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var sites/*:Array*/ = sitesService.getSites();
    var hasReadableSites/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < sites.length; i++) {
      var site/*:Site*/ = sites[i];
      if (site.isManagedByCurrentUser() && hasReadableSubSites$static(site)) {
        hasReadableSites = true;
        break;
      }
    }
    return hasReadableSites;
  }/*

  private static*/ function hasReadableSubSites$static(site/*:Site*/)/*:Boolean*/ {
    var derivedSites/*:Array*/ = site.getDerivedSites();
    for (var i/*:int*/ = 0; i < derivedSites.length; i++) {
      var derivedSite/*:Site*/ = derivedSites[i];
      if (derivedSite.getSiteRootFolder().getState().readable) {
        return true;
      }
    }
    return false;
  }/*
  
  override protected*/ function getContents()/*:Array*/ {
    return com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction.prototype.getContents.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction",
      constructor: ShowStartTranslationWorkflowWindowActionBase$,
      super$19jl: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction.prototype.constructor.apply(this, arguments);
      },
      createWorkflowWindow: createWorkflowWindow,
      mayStartWorkflow: mayStartWorkflow,
      getContents: getContents,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.window.Window",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartWorkflowWindowAction",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindow"]
    };
});
