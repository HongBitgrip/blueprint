Ext.define("com.coremedia.cms.editor.sdk.sites.SiteModel", function(SiteModel) {/*package com.coremedia.cms.editor.sdk.sites {
/**
 * The site model defines parameters for working with multiple sites in
 * a single content repository. Each site must be contained in a single folder,
 * the site root folder. Each site must also contain a single entry document,
 * the site indicator. All site indicators must belong to a single document
 * type. The site indicators provide access to a site's id, locale, name, and
 * site root document. The site root document is the document that should be
 * presented to the user when entering a site, typically defining the main page
 * of a site. A site indicator may reference another site indicator as its master,
 * linking the two sites. A master site defines the source from which another site
 * is derived by translation or localization.
 * /
[PublicApi]
public interface SiteModel {
  /**
   * Return the name of the content type reserved for site indicators; null if site indicators are not used
   * @return the name of the content type
   * /
  function getSiteIndicatorDocumentType():String;

  /**
   * Return the number of folders that separate the site indicator document
   * from the site root folder. 0 means that the site indicator is placed directly
   * in the site root folder, 1 means that is it placed in a direct subfolder of the
   * site root folder, and so on.
   *
   * @return the number of folders
   * /
  function getSiteIndicatorDepth():int;

  /**
   * Return the name of the property of the site indicator document
   * that contains the link to the site root document.
   *
   * @return the name of the root property
   * /
  function getIdProperty():String;

  /**
   * Return the name of the property of the site indicator document
   * that contains the link to the site root document.
   *
   * @return the name of the root property
   * /
  function getRootProperty():String;

  /**
   * Return the name of the property that links to the document from which
   * any given document was derived.
   *
   * @return the name of the master property
   * /
  function getMasterProperty():String;

  /**
   * Return the name of the property that decides whether
   * a content should ignore updates from its master content.
   *
   * @return the name of the ignoreUpdates property
   * /
  function getIgnoreUpdatesProperty():String;

  /**
   * Return the name of the property that contains the version of the master document
   * to which the current document state corresponds.
   *
   * @return the name of the master version property
   * /
  function getMasterVersionProperty():String;

  /**
   * Return the name of the property that contains the locale
   * of any given content.
   *
   * @return the name of the locale property
   * /
  function getLocaleProperty():String;

  /**
   * Return the name of the property that holds the manager group for a site.
   *
   * @return the name of the site manager group property
   * /
  function getSiteManagerGroupProperty():String;

  /**
   * Return the name of the translation manager role.
   *
   * @return the name of the translation manager role
   * /
  function getTranslationManagerRole():String;

  /**
   * Return the property that holds the pattern for the uri segment.
   * @return property that holds the pattern for the uri segment
   * /
  function getUriSegmentPattern():String;

  /**
   * Return the property that holds the pattern for the site manager group name.
   * @return property that holds the pattern for the site manager group name
   * /
  function getSiteManagerGroupPattern():String;

  /**
   * Return the property name in the site indicator that holds the site name.
   * @return the property name in the site indicator that holds the site name
   * /
  function getNameProperty():String;

  /**
   * Return the user name of the user responsible for creating derived content during a translation workflow.
   *
   * @return the user name of the user responsible for creating derived content during a translation workflow
   * /
  function getTranslationWorkflowRobotUser():String;

  /**
   * Return the document type name of the translation settings document.
   *
   * @return the document type name
   * /
  function getTranslationSettingsDocumentType():String;

  /**
   * Return the path of the translation settings document relative from the site's root folder.
   *
   * @return the path
   * /
  function getTranslationSettingsPath():String;

  /**
   * Return the property name of the translation settings document that holds the settings.
   *
   * @return the property name
   * /
  function getTranslationSettingsProperty():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
