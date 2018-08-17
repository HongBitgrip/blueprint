Ext.define("com.coremedia.cms.editor.sdk.sites.Site", function(Site) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.user.Group;
import com.coremedia.ui.data.Locale;

/**
 * An object describing a site and its relation to other sites.
 * /
[PublicApi]
public interface Site {
  /**
   * The site identifier.
   * /
  function getId():String;

  /**
   * The name of the site.
   * /
  function getName():String;

  /**
   * The locale of the site.
   * /
  function getLocale():Locale;

  /**
   * The site folder.
   * /
  function getSiteRootFolder():Content;

  /**
   * The site indicator document of the site.
   * /
  function getSiteIndicator():Content;

  /**
   * The document that serves as an home page of the site.
   * /
  function getSiteRootDocument():Content;

  /**
   * The master site or null if this is a root site.
   * /
  function getMasterSite():Site;

  /**
   * The sites that have been derived from this site as an array of site objects.
   * /
  function getDerivedSites():Array;

  /**
   * Whether the site is still under construction, that is, whether it is
   * being copied from its master and some contents might still be
   * incorrect or missing.
   * /
  function isUnderConstruction():Boolean;

  /**
   * The group that is registered as the manager group for this site.
   * /
  function getSiteManagerGroup():Group;

  /**
   * Return true if the site can be administrated by the current user.
   * /
  function isManagedByCurrentUser():Boolean;

  /**
   * Returns the translation strategy for the site.
   * @return the translation strategy
   * /
  function getTranslationStrategy():String;

  /**
   * Returns true if the site has the strategy "synchronization".
   * /
  function isSynchronizationTargetSite():Boolean;

  /**
   * Returns true if the site has the strategy "language translation".
   * /
  function isLanguageTranslationTargetSite():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
