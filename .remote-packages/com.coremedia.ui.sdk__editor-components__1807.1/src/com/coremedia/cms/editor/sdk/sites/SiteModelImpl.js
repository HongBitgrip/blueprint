Ext.define("com.coremedia.cms.editor.sdk.sites.SiteModelImpl", function(SiteModelImpl) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="sites/model")]
public class SiteModelImpl extends RemoteBeanImpl implements SiteModel {
  public*/ function SiteModelImpl$(path/*:String*/) {
    this.super$93ic(path);
  }/*

  public*/ function getSiteIndicatorDocumentType()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.SITE_INDICATOR_DOCUMENT_TYPE);
  }/*

  public*/ function getSiteIndicatorDepth()/*:int*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.SITE_INDICATOR_DEPTH);
  }/*

  public*/ function getIdProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.ID_PROPERTY);
  }/*

  public*/ function getRootProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.ROOT_PROPERTY);
  }/*

  public*/ function getMasterProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.MASTER_PROPERTY);
  }/*

  public*/ function getMasterVersionProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.MASTER_VERSION_PROPERTY);
  }/*

  public*/ function getIgnoreUpdatesProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.IGNORE_UPDATES_PROPERTY);
  }/*

  public*/ function getLocaleProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.LOCALE_PROPERTY);
  }/*

  public*/ function getSiteManagerGroupProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.SITE_MANAGER_GROUP_PROPERTY);
  }/*

  public*/ function getTranslationManagerRole()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.TRANSLATION_MANAGER_ROLE);
  }/*

  public*/ function getUriSegmentPattern()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.URI_SEGMENT_PATTERN_PROPERTY);
  }/*

  public*/ function getSiteManagerGroupPattern()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.SITE_MANAGER_GROUP_PATTERN_PROPERTY);
  }/*

  public*/ function getNameProperty()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.NAME_PROPERTY);
  }/*

  public*/ function getTranslationWorkflowRobotUser()/*:String*/ {
    return this.get(com.coremedia.cms.editor.sdk.sites.SitesPropertyNames.TRANSLATION_WORKFLOW_ROBOT_USER);
  }/*

  public*/ function getTranslationSettingsDocumentType()/*:String*/ {
    return this.get("translationSettingsDocumentType");
  }/*

  public*/ function getTranslationSettingsPath()/*:String*/ {
    return this.get("translationSettingsPath");
  }/*

  public*/ function getTranslationSettingsProperty()/*:String*/ {
    return this.get("translationSettingsProperty");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cms.editor.sdk.sites.SiteModel"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "sites/model"
        ]
      ]},
      constructor: SiteModelImpl$,
      super$93ic: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getSiteIndicatorDocumentType: getSiteIndicatorDocumentType,
      getSiteIndicatorDepth: getSiteIndicatorDepth,
      getIdProperty: getIdProperty,
      getRootProperty: getRootProperty,
      getMasterProperty: getMasterProperty,
      getMasterVersionProperty: getMasterVersionProperty,
      getIgnoreUpdatesProperty: getIgnoreUpdatesProperty,
      getLocaleProperty: getLocaleProperty,
      getSiteManagerGroupProperty: getSiteManagerGroupProperty,
      getTranslationManagerRole: getTranslationManagerRole,
      getUriSegmentPattern: getUriSegmentPattern,
      getSiteManagerGroupPattern: getSiteManagerGroupPattern,
      getNameProperty: getNameProperty,
      getTranslationWorkflowRobotUser: getTranslationWorkflowRobotUser,
      getTranslationSettingsDocumentType: getTranslationSettingsDocumentType,
      getTranslationSettingsPath: getTranslationSettingsPath,
      getTranslationSettingsProperty: getTranslationSettingsProperty,
      requires: [
        "com.coremedia.cms.editor.sdk.sites.SiteModel",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ],
      uses: ["com.coremedia.cms.editor.sdk.sites.SitesPropertyNames"]
    };
});
