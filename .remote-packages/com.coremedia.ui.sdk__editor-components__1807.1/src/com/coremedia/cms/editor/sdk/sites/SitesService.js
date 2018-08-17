Ext.define("com.coremedia.cms.editor.sdk.sites.SitesService", function(SitesService) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.ui.data.ValueExpression;

/**
 * An object for retrieving the available sites and
 * for operating on sites.
 * /
[PublicApi]
public interface SitesService {
  /**
   * Return the site model, which defines parameters for computing
   * the set of sites and the properties of sites.
   *
   * @return the site model
   * /
  function getSiteModel():SiteModel;

  /**
   * Return the master content of the given content, if any.
   * If the master cannot be determined, return undefined.
   * If no master exists, return null.
   *
   * @param content the content
   * @return the master
   * /
  function getMaster(content:Content):Content;

  /**
   * Return the master version number of the given content if any, else 0.
   *
   * @param content the content
   * @return the master version number or 0
   * /
  function getMasterVersionNumber(content:Content):int;

  /**
   * Return the master version of the given content, if any.
   * If the master or master version cannot be determined, return undefined.
   * If no master or master version number exists, return null.
   *
   * @param content the content
   * @return the master version
   * /
  function getMasterVersion(content:Content):Version;

  /**
   * Return the master version or, if the master version number is negative, the version the given content was derived from.
   *
   * @return the master version or the derive-from version
   * /
  function getMasterVersionOrDerivedFromVersion(content:Content):Version;

  /**
   * Return true if a master content can be retrieved using the method
   * getMaster.
   *
   * @return false if multi-language support is disabled
   *
   * @see SiteModel#getMasterProperty
   * @see #getMaster
   * /
  function isMultiLanguageSupportEnabled():Boolean;

  /**
   * Return site objects for all sites stored in the content repository,
   * indexed by their id.
   * This method returns undefined as long as the set of sites has not been computed.
   * This method registers a dependency with the dependency tracker.
   *
   * @return site objects for all sites
   *
   * @see Site
   * /
  function getSitesById():Object;

  /**
   * Returns an array of all site objects, sorted by name.
   * This method returns undefined as long as the set of sites has not been computed.
   * This method registers a dependency with the dependency tracker.
   *
   * @return an array of all site objects
   *
   * @see Site
   * /
  function getSites():Array;

  /**
   * Return a site object for the site with the given id.
   * This method returns undefined as long as the site structure has not been computed.
   * This method registers a dependency with the dependency tracker.
   *
   * @param siteId the id
   * @return a site object or null if the given siteId is unknown or undefined if the site structure has not been computed
   * /
  function getSite(siteId:String):Site;

  /**
   * Return the site root document for the site with the given id.
   * This method returns undefined as long as the site structure has not been computed.
   * This method registers a dependency with the dependency tracker.
   *
   * @param siteId the id
   * @return the root document
   * /
  function getSiteRootDocument(siteId:String):Content;

  /**
   * Return the site root folder for the site with the given id.
   * This method returns undefined as long as the site structure has not been computed.
   * This method registers a dependency with the dependency tracker.
   * @param siteId the id
   * @return the root folder
   * /
  function getSiteRootFolder(siteId:String):Content;

  /**
   * Return the site name for the site with the given id.
   * This method returns undefined as long as the site structure has not been computed.
   * This method registers a dependency with the dependency tracker.
   * @param siteId the id
   * @return the root folder
   * /
  function getSiteName(siteId:String):String;

  /**
   * Returns a value expression that returns the preferred site the user is working on.
   *
   * @return the preferred site expression
   *
   * @see #getPreferredSiteId
   * /
  function getPreferredSiteIdExpression():ValueExpression;

  /**
   * Returns the preferred site id the user is working on.
   * This method registers a dependency with the dependency tracker.
   *
   * @return The preferred site id or null if no preferred site is set
   * /
  function getPreferredSiteId():String;

  /**
   * Returns the preferred site object the user is working on.
   * This method registers a dependency with the dependency tracker.
   *
   * @return The preferred site object or null if no preferred site is set
   * /
  function getPreferredSite():Site;

  /**
   * Returns the preferred site name the user is working on.
   * This method returns undefined as long as the site structure has not been computed.
   * This method registers a dependency with the dependency tracker.
   *
   * @return The preferred site name or null if no preferred site is set
   * /
  function getPreferredSiteName():String;

  /**
   * Returns the site id of a given content. The content's path property *must* be materialized (which means that
   * the content passed in here must be fully loaded, as well as all of the beans representing the folders that lead
   * to the path where the content resides.
   * @param content the content to determine the site for
   * @return the site id for the content, or null if the content "has no site", or undefined if the path property
   * is not materialized
   * /
  function getSiteIdFor(content:Content):String;

  /**
   * Returns the site object of a given content. If the content's path property is not yet materialized (which means that
   * the content passed in here must be fully loaded, as well as all of the beans representing the folders that lead
   * to the path where the content resides), undefined is returned.
   * @param content the content to determine the site for
   * @return the site name for the content, or null if the content "has no site", or undefined if the path property
   * is not materialized
   * /
  function getSiteFor(content:Content):Site;

  /**
   * Returns the site name of a given content. The content's path property *must* be materialized (which means that
   * the content passed in here must be fully loaded, as well as all of the beans representing the folders that lead
   * to the path where the content resides.
   * @param content the content to determine the site for
   * @return the site name for the content, or null if the content "has no site", or undefined if the path property
   * is not materialized
   * /
  function getSiteNameFor(content:Content):String;

  /**
   * Returns whether the current user is member of the translation manager role.
   *
   * @return whether the current user is member of the translation manager role
   * /
  function isTranslationManager():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
