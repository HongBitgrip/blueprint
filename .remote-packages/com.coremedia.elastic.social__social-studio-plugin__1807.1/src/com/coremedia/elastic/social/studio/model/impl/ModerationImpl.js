Ext.define("com.coremedia.elastic.social.studio.model.impl.ModerationImpl", function(ModerationImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationPropertyNames;
import com.coremedia.elastic.social.studio.model.ReviewPropertyNames;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserPropertyNames;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.Ext;

public class ModerationImpl extends BeanImpl implements Moderation {

  public static const ELASTIC_URI_SEGMENT:String = "elastic/";
  public static const ES_URI_SEGMENT:String =*/function ES_URI_SEGMENT$static_(){ModerationImpl.ES_URI_SEGMENT=( ModerationImpl.ELASTIC_URI_SEGMENT + "social");}/*;
  public static const TENANT_URI_SEGMENT:String = "tenant";

  private static*/ var moderation$static/*:Moderation*/=null;/*

  private var archivedContributionAdmin:ArchiveContributionAdministration;
  private var moderationContributionAdmin:AbstractContributionAdministration;
  private var userAdministration:UserAdministration;

  private var moderatedPropertiesList:Array =*/function moderatedPropertiesList_(){this.moderatedPropertiesList$CC_9=( [
    com.coremedia.elastic.social.studio.model.ReviewPropertyNames.TITLE,
    com.coremedia.elastic.social.studio.model.ReviewPropertyNames.RATING,
    com.coremedia.elastic.social.studio.model.CommentPropertyNames.TEXT,
    com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME,
    com.coremedia.elastic.social.studio.model.UserPropertyNames.GIVENNAME,
    com.coremedia.elastic.social.studio.model.UserPropertyNames.SURNAME,
    com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL,
    com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE
  ]);}/*;

  public static*/ function getInstance$static()/*:Moderation*/ {
    if (!moderation$static) {
      moderation$static = new ModerationImpl();
    }
    return moderation$static;
  }

  function ModerationImpl$() {this.super$CC_9();moderatedPropertiesList_.call(this);
    this.getBlacklistAdministration();
    this.getModerationContributionAdministration();
    this.getArchiveContributionAdministration();
    this.getUserAdministration();
  }/*

  public*/ function getBlacklistAdministration()/*:BlacklistAdministration*/ {
    var blacklistAdmin/*:BlacklistAdministration*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.BLACKLIST_ADMINISTRATION),  com.coremedia.elastic.social.studio.model.BlacklistAdministration);
    if (!blacklistAdmin) {
      blacklistAdmin = new com.coremedia.elastic.social.studio.model.impl.BlacklistAdministrationImpl(this);
      this.set(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.BLACKLIST_ADMINISTRATION, blacklistAdmin);
    }

    return blacklistAdmin;
  }/*

  public*/ function getModerationContributionAdministration()/*:AbstractContributionAdministration*/ {
    if (!this.moderationContributionAdmin$CC_9) {
      this.moderationContributionAdmin$CC_9 = new com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration(this);
    }

    return this.moderationContributionAdmin$CC_9;
  }/*

  public*/ function getArchiveContributionAdministration()/*:ArchiveContributionAdministration*/ {
    if (!this.archivedContributionAdmin$CC_9) {
      this.archivedContributionAdmin$CC_9 = new com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration(this);
    }

    return this.archivedContributionAdmin$CC_9;
  }/*

  public*/ function getActiveContributionAdministration()/*:AbstractContributionAdministration*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.ACTIVE_CONTRIBUTION_ADMINISTRATION);
  }/*

  public*/ function getUserAdministration()/*:UserAdministration*/ {
    if (!this.userAdministration$CC_9) {
      this.userAdministration$CC_9 = new com.coremedia.elastic.social.studio.model.impl.UserAdministrationImpl(this);
      this.set(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.USER_ADMINISTRATION, this.userAdministration$CC_9);
    }

    return this.userAdministration$CC_9;
  }/*

  public*/ function registerModeratedProperties(props/*:Array*/)/*:void*/ {var this$=this;
    props.forEach(function (prop/*:String*/)/*:void*/ {
      if (this$.moderatedPropertiesList$CC_9.indexOf(prop) === -1) {
        this$.moderatedPropertiesList$CC_9.push(prop);
      }
    });
  }/*

  public*/ function getModeratedProperties()/*:Array*/ {
    return this.moderatedPropertiesList$CC_9;
  }/*

  public*/ function updateTenantInfo(success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:success=null;case 1:failure=null;}
    success = success || Ext.emptyFn;
    failure = failure || Ext.emptyFn;

    var preferredSiteId/*:String*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();
    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(ModerationImpl.ELASTIC_URI_SEGMENT + ModerationImpl.TENANT_URI_SEGMENT + "?siteId=" + preferredSiteId, "GET");
    rsm.request(null,
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var tenantInfo/*:Object*/ = response.getResponseJSON();
              this$.updateProperties(tenantInfo);
              success(ModerationImpl.getInstance());
            },
            failure
    );
  }/*

  public*/ function ensureTenantAwareESUriPrefix(callback/*:Function*/)/*:void*/ {var this$=this;
    callback = (AS3.as(callback,  Function)) || Ext.emptyFn;
    if (this.getTenantAwareESUriPrefix()) {
      callback(this.getTenantAwareESUriPrefix());
    } else {
      this.updateTenantInfo(function ()/*:void*/ {
        callback(this$.getTenantAwareESUriPrefix());
      });
    }
  }/*

  public*/ function getTenantAwareESUriPrefix()/*:String*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.TENANT) + "/" + ModerationImpl.ES_URI_SEGMENT;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.Moderation"],
      archivedContributionAdmin$CC_9: null,
      moderationContributionAdmin$CC_9: null,
      userAdministration$CC_9: null,
      constructor: ModerationImpl$,
      super$CC_9: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      getBlacklistAdministration: getBlacklistAdministration,
      getModerationContributionAdministration: getModerationContributionAdministration,
      getArchiveContributionAdministration: getArchiveContributionAdministration,
      getActiveContributionAdministration: getActiveContributionAdministration,
      getUserAdministration: getUserAdministration,
      registerModeratedProperties: registerModeratedProperties,
      getModeratedProperties: getModeratedProperties,
      updateTenantInfo: updateTenantInfo,
      ensureTenantAwareESUriPrefix: ensureTenantAwareESUriPrefix,
      getTenantAwareESUriPrefix: getTenantAwareESUriPrefix,
      statics: {
        ELASTIC_URI_SEGMENT: "elastic/",
        ES_URI_SEGMENT: undefined,
        TENANT_URI_SEGMENT: "tenant",
        getInstance: getInstance$static,
        __initStatics__: function() {
          ES_URI_SEGMENT$static_();
        }
      },
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.elastic.social.studio.model.Moderation",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.BlacklistAdministration",
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModerationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ReviewPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration",
        "com.coremedia.elastic.social.studio.model.impl.BlacklistAdministrationImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.impl.UserAdministrationImpl"
      ]
    };
});
