Ext.define("com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase", function(ElasticSocialStudioPluginBase) {/*package com.coremedia.elastic.social.studio {

import com.coremedia.cms.editor.configuration.StudioPlugin;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.elastic.social.studio.metadata.CommentMetadataNodeRenderer;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.elastic.social.studio.usermanagement.UserManagementWindow;
import com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink;
import com.coremedia.ui.data.ValueExpression;

import ext.ClassManager;
import ext.ComponentManager;

public class ElasticSocialStudioPluginBase extends StudioPlugin {
  private var moderation:Moderation;
  private var originalUnloadHandler:Function;
  private var userManagement:UserManagementWindow;
  private static*/ var me$static/*:ElasticSocialStudioPluginBase*/=null;/*

  public*/ function ElasticSocialStudioPluginBase$(config/*:StudioPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$STXs(config);
    this.addUnloadHandler$STXs();
    me$static = this;

    // we need to register the dialog for the cmlink as another xtype. this is needed as we need a "vanilla link plugin"
    // instead of the cmlink (See also link-dialog declaration in 'CommentToolbar.exml').
    Ext.ClassManager.set("com.coremedia.ui.config.dialog_link", com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink);

    (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getMetadataNodeRendererRegistry().register(new com.coremedia.elastic.social.studio.metadata.CommentMetadataNodeRenderer());

    this.initTenantForSiteHandler$STXs();
  }/*

  private*/ function initTenantForSiteHandler()/*:void*/ {var this$=this;
    (AS3.as(this.getModeration$STXs(false),  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).updateTenantInfo();

    var siteService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var preferredSiteIdExpression/*:ValueExpression*/ = siteService.getPreferredSiteIdExpression();
    preferredSiteIdExpression.addChangeListener(function ()/*:void*/ {
      (AS3.as(this$.getModeration$STXs(false),  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).updateTenantInfo();
    });
  }/*

  public static*/ function getInstance$static()/*:ElasticSocialStudioPluginBase*/ {
    return me$static;
  }/*

  private*/ function getModeration(doManualListPoll/*:Boolean = true*/)/*:Moderation*/ {if(arguments.length<=0)doManualListPoll=true;
    if (!this.moderation$STXs) {
      this.moderation$STXs = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance();
    }

    if (doManualListPoll && !this.moderation$STXs.getModerationContributionAdministration().isPolling()) {
      this.moderation$STXs.getModerationContributionAdministration().startPolling();
    }
    return this.moderation$STXs;
  }/*

  public*/ function showUserManagementList()/*:void*/ {
    this.showUserManagement(true, false);
  }/*

  public*/ function showUserManagement(detailWindowOpenViaList/*:Boolean*/, showDetails/*:Boolean*/)/*:void*/ {
    var userWindow/*:UserManagementWindow*/ = this.getUserManagementWindow$STXs(detailWindowOpenViaList);
    if (userWindow) {
      if (showDetails) {
        userWindow.switchToUserDetailPanel(detailWindowOpenViaList, this.getModeration$STXs().getUserAdministration());
      }
      if (AS3.getBindable(userWindow,"collapsed","DUMMY")) {
        userWindow.expand(true);
      }
    }
  }/*

  private*/ function addUnloadHandler()/*:void*/ {
    this.originalUnloadHandler$STXs = window.onunload;
    window.onunload =AS3.bind( this,"onUnload$STXs");
  }/*

  private*/ function onUnload()/*:void*/ {
    if (this.moderation$STXs) {
      this.moderation$STXs.getUserAdministration().cancelEditing(AS3.as(this.moderation$STXs.getModerationContributionAdministration().getDisplayed(),  com.coremedia.elastic.social.studio.model.User));
      this.moderation$STXs.getUserAdministration().cancelEditing(this.moderation$STXs.getUserAdministration().getEdited());
    }
    if (this.originalUnloadHandler$STXs) {
      this.originalUnloadHandler$STXs();
    }
  }/*

  private*/ function getUserManagementWindow(detailWindowOpenedViaList/*:Boolean*/)/*:UserManagementWindow*/ {
    if (!this.userManagement$STXs) {
      var userManagementWindowConfig/*:UserManagementWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.UserManagementWindow,{});
      AS3.setBindable(userManagementWindowConfig,"moderation" , this.getModeration$STXs(false));
      AS3.setBindable(userManagementWindowConfig,"detailWindowOpenedViaList" , detailWindowOpenedViaList);
      this.userManagement$STXs =AS3.as( Ext.ComponentManager.create(userManagementWindowConfig),  com.coremedia.elastic.social.studio.usermanagement.UserManagementWindow);
      this.userManagement$STXs.expand(true);
      this.userManagement$STXs.setWidth(650);
      this.userManagement$STXs.show();
      this.userManagement$STXs.addListener("destroy",AS3.bind( this,"destroyUserManagement$STXs"));
    }

    return this.userManagement$STXs;
  }/*

  private*/ function destroyUserManagement()/*:void*/ {
    this.userManagement$STXs = null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      moderation$STXs: null,
      originalUnloadHandler$STXs: null,
      userManagement$STXs: null,
      constructor: ElasticSocialStudioPluginBase$,
      super$STXs: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      initTenantForSiteHandler$STXs: initTenantForSiteHandler,
      getModeration$STXs: getModeration,
      showUserManagementList: showUserManagementList,
      showUserManagement: showUserManagement,
      addUnloadHandler$STXs: addUnloadHandler,
      onUnload$STXs: onUnload,
      getUserManagementWindow$STXs: getUserManagementWindow,
      destroyUserManagement$STXs: destroyUserManagement,
      statics: {getInstance: getInstance$static},
      requires: [
        "Ext.ClassManager",
        "Ext.ComponentManager",
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.metadata.CommentMetadataNodeRenderer",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.usermanagement.UserManagementWindow"
      ]
    };
});
