Ext.define("com.coremedia.cms.editor.sdk.sites.SitesServiceImpl", function(SitesServiceImpl) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProperties;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.VersionHistory;
import com.coremedia.cap.user.Group;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.LocalesService;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ObjectUtils;

import ext.util.Observable;

/**
 * A singleton instance of this class is available through the editor context.
 * /
public class SitesServiceImpl extends Observable implements SitesService {
  private static const*/var PREFERRED_SITE_ID_PROPERTY_NAME$static/*:String*/ = "preferredSiteId";/*

  private var siteStructureValueExpression:ValueExpression;
  private var preferredSiteExpression:ValueExpression;
  private var preferredSiteId:String = null;
  private var requestedPreferredSiteId:String = null;

  private var sitesRemoteBean:SitesRemoteBean;

  private var isCurrentUserMemberOfSiteManagerGroups:Bean;
  private var translationManager:Boolean;

  private var groupByNameCache:Bean;

  private var groupsPossiblyLoaded:Array =*/function groupsPossiblyLoaded_(){this.groupsPossiblyLoaded$Dgo5=( []);}/*;

  private var siteStructure:* = undefined;

  public*/ function SitesServiceImpl$() {this.super$Dgo5();groupsPossiblyLoaded_.call(this);
    this.sitesRemoteBean$Dgo5 = new com.coremedia.cms.editor.sdk.sites.SitesRemoteBean();
    this.groupByNameCache$Dgo5 = com.coremedia.ui.data.beanFactory.createLocalBean();
    this.isCurrentUserMemberOfSiteManagerGroups$Dgo5 = com.coremedia.ui.data.beanFactory.createLocalBean();
    this.preferredSiteExpression$Dgo5 = com.coremedia.ui.data.ValueExpressionFactory.create(PREFERRED_SITE_ID_PROPERTY_NAME$static, this);
  }/*

  public*/ function load(callback/*:Function*/)/*:void*/ {var this$=this;
    AS3.cast(com.coremedia.ui.data.impl.BeanFactoryImpl,com.coremedia.ui.data.beanFactory).registerRemoteBeanClasses(com.coremedia.cms.editor.sdk.sites.SiteModelImpl);
    this.sitesRemoteBean$Dgo5.load(sitesRemoteBeanLoaded);

    function sitesRemoteBeanLoaded()/*:void*/ {
      AS3.cast(com.coremedia.cms.editor.sdk.sites.SiteModelImpl,this$.getSiteModel()).load(siteModelLoaded);
    }

    function siteModelLoaded()/*:void*/ {
      var translationManagerRole/*:String*/ = this$.getSiteModel().getTranslationManagerRole();
      if (translationManagerRole) {
        com.coremedia.cap.common.SESSION.getConnection().getUserRepository().getGroupByName(translationManagerRole,
                translationManagerRoleLoaded);
      } else {
        translationManagerRoleLoaded(null);
      }
    }

    function translationManagerRoleLoaded(group/*:Group*/)/*:void*/ {
      if (group) {
        com.coremedia.cap.common.SESSION.getUser().isMemberOf(group, isMemberOfCallback);
      } else {
        this$.translationManager$Dgo5 = false;
        callback();
      }
    }

    function isMemberOfCallback(result/*:Boolean*/)/*:void*/ {
      this$.translationManager$Dgo5 = result;
      callback();
    }
  }/*

  public*/ function getSiteModel()/*:SiteModel*/ {
    return this.sitesRemoteBean$Dgo5.getSiteModel();
  }/*

  /**
   * Return sites that are to be added to the sites computed from the
   * current repository state. Callers can expect this method to be
   * dependency-tracked.
   *
   * @return the site info objects, indexed by their id
   *
   * @see Site
   * /
  protected*/ function getSitesUnderConstruction()/*:Object*/ {
    return {};
  }/*

  /**
   * Compute the plain unstructured site objects as an unsorted array.
   *
   * @return the site objects
   * /
  private*/ function getRawSites()/*:Object*/ {
    var siteModel/*:SiteModel*/ = this.getSiteModel();
    if (siteModel === undefined) {
      return undefined;
    }

    var siteIndicatorDocumentType/*:String*/ = siteModel.getSiteIndicatorDocumentType();
    if (siteIndicatorDocumentType === undefined) {
      return undefined;
    }

    var siteIndicatorContentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(siteIndicatorDocumentType);
    if (siteIndicatorContentType === undefined) {
      return undefined;
    }

    var siteIndicators/*:Array*/ = siteIndicatorContentType ? siteIndicatorContentType.getInstances() : [];
    if (siteIndicators === undefined) {
      return undefined;
    }

    siteIndicators = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getAccessControl().filterReadableContents(siteIndicators);
    if (siteIndicators === undefined) {
      return undefined;
    }

    var siteTranslationStrategyMap/*:Bean*/ = com.coremedia.cms.editor.sdk.sites.SitesRemoteBean.getSiteTranslationStrategyMap();
    if (siteTranslationStrategyMap === undefined) {
      return undefined;
    } else if (siteTranslationStrategyMap === null) {
      siteTranslationStrategyMap = com.coremedia.ui.data.beanFactory.createLocalBean({});
    }

    var result/*:Object*/ = {};
    var needsRetry/*:Boolean*/ = false;
    for (var i/*:int*/ = 0; i < siteIndicators.length; i++) {
      var siteIndicator/*:Content*/ = siteIndicators[i];

      var site/*:SiteImpl*/ = this.analyzeSite$Dgo5(siteIndicator, siteTranslationStrategyMap);
      if (site === undefined) {
        needsRetry = true;
      } else if (site && this.mayInsertSite$Dgo5(result, site)) {
        result[site.getId()] = site;
      }
    }
    if (needsRetry) {
      return undefined;
    }

    return result;
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function mayInsertSite(sitesById/*:Object*/, newSite/*:Site*/)/*:Boolean*/ {
    var siteId/*:String*/ = newSite.getId();
    var existingSite/*:Site*/ = sitesById[siteId];
    if (!existingSite) {
      // The site id is not used elsewhere.
      return true;
    }
    var existingSiteId/*:uint*/ = com.coremedia.cap.common.IdHelper.parseContentId(existingSite.getSiteIndicator());
    var newSiteId/*:uint*/ = com.coremedia.cap.common.IdHelper.parseContentId(newSite.getSiteIndicator());
    // Insert the site only if its indicator is older
    // than the indicator of the other site.
    return existingSiteId > newSiteId;
  }/*

  private*/ function computeSiteRootFolder(document/*:Content*/)/*:Content*/ {
    // Ignore deleted documents.
    if (document.isDeleted()) {
      return null;
    }

    var siteIndicatorDepth/*:int*/ = this.getSiteModel().getSiteIndicatorDepth();
    var current/*:Content*/ = document;
    for (var i/*:uint*/ = 0; i < siteIndicatorDepth + 1; i++) {
      current = current.getParent();
      if (current === undefined) {
        return undefined;
      }
      if (current === null || current.isRoot()) {
        com.coremedia.ui.logging.Logger.warn("SitesImpl: document " + document.getId() + " is not nested deeply enough in the folder hierarchy; ignoring the document");
        return null;
      }
    }
    return current;
  }/*

  /**
   * Analyse the given site. Return undefined if the analysis has to be retried
   * at a later point. Return null if the given contents definitely do not define
   * a site.
   *
   * @param siteIndicator the site indicator
   * @param siteTranslationStrategyMap the siteTranslationStrategyMap
   * @return the site description
   * /
  private*/ function analyzeSite(siteIndicator/*:Content*/, siteTranslationStrategyMap/*:Bean*/)/*:SiteImpl*/ {
    try {
      var siteRootDocument/*:Content*/ = getLink$static(siteIndicator, this.getSiteModel().getRootProperty());
      if (siteRootDocument === undefined) {
        return undefined;
      } else if (siteRootDocument === null) {
        com.coremedia.ui.logging.Logger.warn("SitesImpl: site indicator " + (siteIndicator ? siteIndicator.getId() : "---") +
                " does not reference a site root document; ignoring the document");
        return null;
      }

      var siteRootFolder/*:Content*/ = this.computeSiteRootFolder$Dgo5(siteIndicator);
      if (siteRootFolder === undefined) {
        return undefined;
      }
      if (siteRootFolder === null) {
        return null;
      }
      // ensure that the site indicators path is always loaded
      if (siteRootFolder.getPath() === undefined) {
        return undefined;
      }

      var siteRootChildren/*:Object*/ = siteRootFolder.getChildrenByName();
      if (siteRootChildren === undefined) {
        return undefined;
      }
      var isUnderConstruction/*:Boolean*/ = ! !siteRootChildren['cloning...'];

      var languageTag/*:String*/ = getContentProperty$static(siteIndicator, this.getSiteModel().getLocaleProperty());
      if (languageTag === undefined) {
        return undefined;
      } else if (languageTag === null || languageTag === "") {
        com.coremedia.ui.logging.Logger.warn("SitesImpl: site indicator " + (siteIndicator ? siteIndicator.getId() : "---") +
                " does not provide a locale; ignoring the document");
        return null;
      }

      var localesService/*:LocalesService*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getLocalesService();
      var locale/*:Locale*/ = localesService.getLocale(languageTag);
      if (!locale) {
        locale = com.coremedia.ui.data.Locale.forLanguageTag(languageTag);
      }

      var siteId/*:String*/ = getContentProperty$static(siteIndicator, this.getSiteModel().getIdProperty());
      if (siteId === undefined) {
        return undefined;
      } else if (siteId === null || siteId === "") {
        com.coremedia.ui.logging.Logger.warn("SitesImpl: site indicator " + (siteIndicator ? siteIndicator.getId() : "---") +
                " does not provide an id; ignoring the document");
        return null;
      }

      var masterSiteIndicator/*:Content*/ = this.getMaster(siteIndicator);
      if (masterSiteIndicator === undefined) {
        return undefined;
      }

      var masterSiteId/*:String*/ = null;
      if (masterSiteIndicator) {
        //noinspection JSMismatchedCollectionQueryUpdate
        var readableContents/*:Array*/ = siteIndicator.getRepository().getAccessControl().filterReadableContents([masterSiteIndicator]);
        if (readableContents === undefined) {
          return undefined;
        }
        if (readableContents.length > 0) {
          masterSiteId = getContentProperty$static(masterSiteIndicator, this.getSiteModel().getIdProperty());
          if (masterSiteId === undefined) {
            return undefined;
          }
        }
      }

      var siteName/*:String*/ = getContentProperty$static(siteIndicator, this.getSiteModel().getNameProperty());
      if (siteName === undefined) {
        return undefined;
      }

      if (siteId === masterSiteId) {
        com.coremedia.ui.logging.Logger.warn("cyclic master relation for site " + siteName + " (id: " + siteId + "); ignoring the document");
        return null;
      }

      var siteManagerGroup/*:Group*/ = this.computeSiteManagerGroup$Dgo5(siteIndicator);
      if (!siteManagerGroup) {
        return undefined;
      }

      this.computeIsCurrentUserMemberOfGroup$Dgo5(siteManagerGroup);
      var isCurrentUserMemberOfSiteManagerGroup/*:Boolean*/ = this.isCurrentUserMemberOfSiteManagerGroups$Dgo5.get(siteManagerGroup.getUriPath());
      if (isCurrentUserMemberOfSiteManagerGroup === undefined || isCurrentUserMemberOfSiteManagerGroup === null) {
        return undefined;
      }

      var translationStrategy/*:String*/ = siteTranslationStrategyMap.get(siteId);
      if (!translationStrategy) {
        com.coremedia.ui.logging.Logger.info("No translation strategy for site " + siteName + " (id: " + siteId + "); using fallback LANG_TRANSLATION");
        translationStrategy = com.coremedia.cms.editor.sdk.sites.TranslationStrategy.LANG_TRANSLATION;
      }

      return new com.coremedia.cms.editor.sdk.sites.SiteImpl(siteId, siteRootFolder, masterSiteId, siteIndicator, siteRootDocument,
              siteName, locale,
              siteManagerGroup, isCurrentUserMemberOfSiteManagerGroup, isUnderConstruction, translationStrategy);
    } catch(e){if(AS3.is (e,AS3.Error)) {
      com.coremedia.ui.logging.Logger.warn("the site indicator " + siteIndicator.getId() + " could not be analysed; ignoring the document");
    }else throw e;}
    return null;
  }/*

  private*/ function computeSiteManagerGroup(siteIndicator/*:Content*/)/*:Group*/ {var this$=this;
    if (!siteIndicator) {
      return undefined;
    }

    if (siteIndicator.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
      siteIndicator.load();
      return undefined;
    }

    var connection/*:CapConnection*/ = com.coremedia.cap.common.SESSION.getConnection();

    var siteManagerGroupProperty/*:String*/ = this.getSiteModel().getSiteManagerGroupProperty();
    if (siteManagerGroupProperty) {
      var siteManagerGroupName/*:String*/ = siteIndicator.getProperties().get(siteManagerGroupProperty);
      if (siteManagerGroupName) {
        var groupByNameCacheEntry/*:**/ = this.groupByNameCache$Dgo5.get(siteManagerGroupName);
        if (groupByNameCacheEntry === null) {
          return connection.getUserRepository().getGroup('group/0');
        }
        if (this.groupsPossiblyLoaded$Dgo5.indexOf(siteManagerGroupName) === -1) {
          this.groupsPossiblyLoaded$Dgo5.push(siteManagerGroupName);
          connection.getUserRepository().getGroupByName(siteManagerGroupName, function (group/*:Group*/)/*:void*/ {
            this$.groupByNameCache$Dgo5.set(siteManagerGroupName, group);
          });
        }
        return groupByNameCacheEntry;
      }
    }

    return connection.getUserRepository().getGroup('group/0');
  }/*

  private*/ function computeIsCurrentUserMemberOfGroup(siteManagerGroup/*:Group*/)/*:void*/ {var this$=this;
    var uriPath/*:String*/ = siteManagerGroup.getUriPath();
    var isCurrentUserMemberOfSiteManagerGroup/*:Boolean*/ = this.isCurrentUserMemberOfSiteManagerGroups$Dgo5.get(uriPath);
    if (isCurrentUserMemberOfSiteManagerGroup === undefined) {
      this.isCurrentUserMemberOfSiteManagerGroups$Dgo5.set(uriPath, null);
      com.coremedia.cap.common.SESSION.getUser().isMemberOf(siteManagerGroup, function (result/*:Boolean*/)/*:void*/ {
        this$.isCurrentUserMemberOfSiteManagerGroups$Dgo5.set(uriPath, result);
      });
    }
  }/*

  public*/ function getMaster(content/*:Content*/)/*:Content*/ {
    var masterProperty/*:String*/ = this.getSiteModel().getMasterProperty();
    if (masterProperty) {
      return getLink$static(content, masterProperty);
    } else {
      return null;
    }
  }/*

  public*/ function getMasterVersionNumber(content/*:Content*/)/*:int*/ {
    var masterVersionProperty/*:String*/ = this.getSiteModel().getMasterVersionProperty();
    if (masterVersionProperty) {
      return getContentProperty$static(content, masterVersionProperty);
    }

    return 0;
  }/*

  public*/ function getMasterVersion(content/*:Content*/)/*:Version*/ {
    var masterVersionNumber/*:int*/ = this.getMasterVersionNumber(content);
    if (masterVersionNumber === undefined) {
      return undefined;
    }
    if (masterVersionNumber <= 0) {
      return null;
    }

    return this.getMasterVersionWithNumber$Dgo5(content, masterVersionNumber);
  }/*

  public*/ function getMasterVersionOrDerivedFromVersion(content/*:Content*/)/*:Version*/ {
    var masterVersion/*:Version*/ = this.getMasterVersion(content);
    if (masterVersion === undefined) {
      return undefined;
    }
    if (masterVersion) {
      return masterVersion;
    }

    // A negative masterVersionNumber means the content is not translated yet
    // and it has been derived from the master version -masterVersionNumber.
    var masterVersionNumber/*:int*/ = this.getMasterVersionNumber(content);
    if (masterVersionNumber < 0) {
      masterVersionNumber = -masterVersionNumber;
      return this.getMasterVersionWithNumber$Dgo5(content, masterVersionNumber);
    }

    return null;
  }/*

  private*/ function getMasterVersionWithNumber(content/*:Content*/, versionNumber/*:int*/)/*:Version*/ {
    var master/*:Content*/ = this.getMaster(content);
    if (master === undefined) {
      return undefined;
    }
    if (master === null) {
      return null;
    }

    var masterVersionHistory/*:VersionHistory*/ = master.getVersionHistory();
    if (!masterVersionHistory) {
      return undefined;
    }

    var items/*:**/ = masterVersionHistory.getItems();
    if (items === undefined) {
      return undefined;
    }

    var masterVersions/*:Array*/ =AS3.as( items,  Array);
    if (!masterVersions || masterVersions.length === 0) {
      return null;
    }

    for (var i/*:int*/ = 0; i < masterVersions.length; i++) {
      var version/*:Version*/ = masterVersions[i];
      if (version.getVersionNumber() === versionNumber) {
        return version;
      }
    }

    return null;
  }/*

  public*/ function isMultiLanguageSupportEnabled()/*:Boolean*/ {
    return ! !this.getSiteModel().getMasterProperty();
  }/*

  private static*/ function getLink$static(content/*:Content*/, property/*:String*/)/*:Content*/ {
    var links/*:**/ = getContentProperty$static(content, property);
    if (links === undefined) {
      return undefined;
    } else if (AS3.is(links,  Array) && links.length === 1) {
      return links[0];
    } else {
      return null;
    }
  }/*

  private static*/ function getContentProperty$static(content/*:Content*/, property/*:String*/)/*:**/ {
    if (!content) {
      return null;
    }
    var properties/*:ContentProperties*/ = content.getProperties();
    return properties === undefined ? undefined : properties.get(property);
  }/*

  /**
   * Validate the given URI segment and pass true or false as the single argument
   * to the callback function, indicating the given URI segment is valid or not.
   *
   * @param uriSegment the URI segment.
   * @param callback the callback function
   * /
  public*/ function validateUriSegment(uriSegment/*:String*/, callback/*:Function*/)/*:void*/ {
    var validateMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.sitesRemoteBean$Dgo5.getValidateUriSegmentUri(), 'POST', true, false, null, true);
    validateMethod.request({
              uriSegment: uriSegment
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              if (callback) {
                var responseJSON/*:Object*/ = response.getResponseJSON();
                callback(responseJSON['valid']);
              }
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              if (callback) {
                callback(false);
              }
            }
    );
  }/*

  public*/ function getSiteStructureValueExpression()/*:ValueExpression*/ {
    if (!this.siteStructureValueExpression$Dgo5) {
      this.siteStructureValueExpression$Dgo5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeSiteStructure$Dgo5"));
      this.siteStructureValueExpression$Dgo5.addChangeListener(AS3.bind(this,"siteStructureChanged$Dgo5"));
    }

    return this.siteStructureValueExpression$Dgo5;
  }/*

  private*/ function computeSiteStructure()/*:Object*/ {
    var sites/*:Object*/ = this.getRawSites$Dgo5();
    if (sites !== undefined) {
      this.clearInvalidMasterSites$Dgo5(sites);
      this.addSitesUnderConstruction$Dgo5(sites);
      this.computeDerivedSites$Dgo5(sites);
      this.computePaths$Dgo5(sites);

      var newSiteIds/*:Array*/ = com.coremedia.ui.util.ObjectUtils.getPropertyNames(sites);
      if (this.siteStructure$Dgo5 &&
              com.coremedia.ui.util.ObjectUtils.equal(newSiteIds, com.coremedia.ui.util.ObjectUtils.getPropertyNames(this.siteStructure$Dgo5))) {
        var unchanged/*:Boolean*/ = true;
        for (var i/*:int*/ = 0; i < newSiteIds.length; i++) {
          var siteId/*:String*/ = newSiteIds[i];
          if (!AS3.cast(com.coremedia.cms.editor.sdk.sites.SiteImpl,sites[siteId]).allFieldsEqual(this.siteStructure$Dgo5[siteId])) {
            unchanged = false;
            break;
          }
        }
        if (unchanged) {
          // Recycle old data structure to avoid unnecessary change events.
          sites = this.siteStructure$Dgo5;
        }
      }

      // A new valid site structure has been computed. Remember it
      // for future requests when it might be temporarily unavailable.
      this.siteStructure$Dgo5 = sites;
    }

    return this.siteStructure$Dgo5;
  }/*

  private*/ function addSitesUnderConstruction(sites/*:Object*/)/*:void*/ {
    var sitesUnderConstruction/*:Object*/ = this.getSitesUnderConstruction();

    for (var siteId/*:String*/ in sitesUnderConstruction) {
      if (sitesUnderConstruction.hasOwnProperty(siteId)) {
        sites[siteId] = sitesUnderConstruction[siteId];
      }
    }
  }/*

  //noinspection JSMethodCanBeStatic
  /**
   * Remove improper master sites.
   *
   * @param sitesById the site infos
   * @return the site structure infos
   * /
  private*/ function clearInvalidMasterSites(sitesById/*:Object*/)/*:void*/ {
    for/* each*/ (var $1 in sitesById) {var site/*:SiteImpl*/ =sitesById[$1];
      var masterSiteId/*:String*/ = site.getMasterSiteId();
      if (masterSiteId) {
        var masterSite/*:Site*/ = sitesById[masterSiteId];
        if (!masterSite) {
          var siteId/*:String*/ = site.getId();
          com.coremedia.ui.logging.Logger.warn("master site of " + siteId + " is computed as " + masterSiteId + ", " +
                  "which is not a known site; making the site a root site");
          site.clearMasterSiteId();
        }
      }
    }
  }/*

  private*/ function computeDerivedSites(sitesById/*:Object*/)/*:void*/ {
    var derivedSitesByMasterSiteId/*:Object*/ = this.computeDerivedSitesByMasterSiteId$Dgo5(sitesById);

    for/* each*/ (var $1 in sitesById) {var site/*:SiteImpl*/ =sitesById[$1];
      var derivedSites/*:Array*/ = derivedSitesByMasterSiteId[site.getId()] || [];
      // Normalize by sorting by site id.
      com.coremedia.ui.util.ArrayUtils.sortByAspects(derivedSites, function (site/*:Site*/)/*:String*/ {
        return site.getId();
      });
      site.setDerivedSites(derivedSites);
    }
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function computeDerivedSitesByMasterSiteId(sitesById/*:Object*/)/*:Object*/ {
    var derivedSitesByMasterSiteId/*:Object*/ = {};
    for/* each*/ (var $1 in sitesById) {var site/*:SiteImpl*/ =sitesById[$1];
      var masterSiteId/*:String*/ = site.getMasterSiteId();
      if (masterSiteId) {
        var derivedSites/*:Array*/ = derivedSitesByMasterSiteId[masterSiteId];
        if (!derivedSites) {
          derivedSitesByMasterSiteId[masterSiteId] = derivedSites = [];
        }
        derivedSites.push(site);
      }
    }
    return derivedSitesByMasterSiteId;
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function computePaths(sitesById/*:Object*/)/*:void*/ {
    for/* each*/ (var $1 in sitesById) {var site/*:SiteImpl*/ =sitesById[$1];
      var path/*:Array*/ = [];
      var current/*:SiteImpl*/ = site;
      while (true) {
        path.push(current.getId());
        var masterSiteId/*:String*/ = current.getMasterSiteId();
        if (!masterSiteId) {
          break;
        }
        current = sitesById[masterSiteId];
      }
      path.reverse();
      site.setAllMasterSiteIds(path);
    }
  }/*

  public*/ function getSitesById()/*:Object*/ {
    return this.getSiteStructureValueExpression().getValue();
  }/*

  public*/ function getSites()/*:Array*/ {
    var sitesById/*:Object*/ = this.getSitesById();
    if (!sitesById) {
      return undefined;
    }
    var sites/*:Array*/ = [];
    for/* each*/ (var $1 in sitesById) {var site/*:Site*/ =sitesById[$1];
      sites.push(site);
    }

    sites.sort(function (site1/*:Site*/, site2/*:Site*/)/*:Number*/ {
      var lowerCaseCompare/*:**/ = site1.getName().toLowerCase().localeCompare(site2.getName().toLocaleLowerCase());
      var actualCaseCompare/*:**/ = site1.getName().localeCompare(site2.getName());
      return lowerCaseCompare || actualCaseCompare;
    });

    return sites;
  }/*

  public*/ function getSite(siteId/*:String*/)/*:Site*/ {
    if (siteId === undefined) {
      return undefined;
    }
    if (siteId === null) {
      return null;
    }
    var infos/*:**/ = this.getSiteStructureValueExpression().getValue();
    if (!infos) {
      return undefined;
    }
    return infos[siteId] || null;
  }/*

  public*/ function getSiteRootDocument(siteId/*:String*/)/*:Content*/ {
    var site/*:Site*/ = this.getSite(siteId);
    if (site === undefined) {
      return undefined;
    }
    if (site === null) {
      return null;
    }
    return site.getSiteRootDocument();
  }/*

  public*/ function getSiteRootFolder(siteId/*:String*/)/*:Content*/ {
    var site/*:Site*/ = this.getSite(siteId);
    if (site === undefined) {
      return undefined;
    }
    if (site === null) {
      return null;
    }
    return site.getSiteRootFolder();
  }/*

  public*/ function getPreferredSiteId()/*:String*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, PREFERRED_SITE_ID_PROPERTY_NAME$static);
    return this.preferredSiteId$Dgo5;
  }/*

  //noinspection JSUnusedGlobalSymbols
  /**
   * Set the preferred site id. This method is typically
   * invoked from the preferred site value expression.
   *
   * @param siteId the preferred site id
   * /
  public*/ function setPreferredSiteId(siteId/*:String*/)/*:void*/ {
    this.requestedPreferredSiteId$Dgo5 = siteId;

    // Very likely, the preferred site has changed.
    this.updatePreferredSiteId$Dgo5();
  }/*

  private*/ function siteStructureChanged()/*:void*/ {
    // Maybe information about the preferred site has been loaded.
    this.updatePreferredSiteId$Dgo5();
  }/*

  private*/ function updatePreferredSiteId()/*:void*/ {
    var infos/*:**/ = this.getSiteStructureValueExpression().getValue();
    var oldSiteId/*:String*/ = this.preferredSiteId$Dgo5;
    if (infos && infos.hasOwnProperty(this.requestedPreferredSiteId$Dgo5)) {
      this.preferredSiteId$Dgo5 = this.requestedPreferredSiteId$Dgo5;
    } else {
      this.preferredSiteId$Dgo5 = null;
    }

    if (oldSiteId !== this.preferredSiteId$Dgo5) {
      this.fireEvent(PREFERRED_SITE_ID_PROPERTY_NAME$static);
    }
  }/*

  public*/ function getPreferredSite()/*:Site*/ {
    // Also gather dependencies.
    var preferredSiteId/*:String*/ = this.getPreferredSiteId();
    if (preferredSiteId) {
      return this.getSite(preferredSiteId);
    } else {
      return null;
    }
  }/*

  public*/ function getPreferredSiteName()/*:String*/ {
    var preferredSiteId/*:String*/ = this.getPreferredSiteId();
    if (preferredSiteId) {
      return this.getSiteName(preferredSiteId);
    } else {
      return null;
    }
  }/*

  /**
   * Returns the preferred site expression the user is working on.
   * @return the id of the preferred site
   * /
  public*/ function getPreferredSiteIdExpression()/*:ValueExpression*/ {
    return this.preferredSiteExpression$Dgo5;
  }/*

  public*/ function getSiteIdFor(content/*:Content*/)/*:String*/ {
    var site/*:Site*/ = this.getSiteFor(content);
    if (site === undefined) {
      return undefined;
    }
    if (!site) {
      return null;
    }
    return site.getId();
  }/*

  public*/ function getSiteFor(content/*:Content*/)/*:Site*/ {
    var sitesById/*:Object*/ = this.getSitesById();
    if (sitesById === undefined) {
      return undefined;
    }

    var sitesStructureInfoByRootFolder/*:Object*/ = {};
    for/* each*/ (var $1 in sitesById) {var site/*:Site*/ =sitesById[$1];
      sitesStructureInfoByRootFolder[site.getSiteRootFolder().getUriPath()] = site;
    }

    var current/*:Content*/ = content;
    while (current) {
      var currentSite/*:Site*/ = sitesStructureInfoByRootFolder[current.getUriPath()];
      if (currentSite) {
        return currentSite;
      }
      current = current.getParent();
    }

    // path is not loaded or content is not included in a site:
    return current === undefined ? undefined : null;
  }/*

  public*/ function getSiteNameFor(content/*:Content*/)/*:String*/ {
    return this.getSiteName(this.getSiteIdFor(content));
  }/*

  public*/ function getSiteName(siteId/*:String*/)/*:String*/ {
    var site/*:Site*/ = this.getSite(siteId);
    if (site === undefined) {
      return undefined;
    }
    if (site === null) {
      return null;
    }
    return site.getName();
  }/*

  public*/ function isTranslationManager()/*:Boolean*/ {
    return this.translationManager$Dgo5;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.cms.editor.sdk.sites.SitesService"],
      siteStructureValueExpression$Dgo5: null,
      preferredSiteExpression$Dgo5: null,
      preferredSiteId$Dgo5: null,
      requestedPreferredSiteId$Dgo5: null,
      sitesRemoteBean$Dgo5: null,
      isCurrentUserMemberOfSiteManagerGroups$Dgo5: null,
      translationManager$Dgo5: false,
      groupByNameCache$Dgo5: null,
      siteStructure$Dgo5: undefined,
      constructor: SitesServiceImpl$,
      super$Dgo5: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      load: load,
      getSiteModel: getSiteModel,
      getSitesUnderConstruction: getSitesUnderConstruction,
      getRawSites$Dgo5: getRawSites,
      mayInsertSite$Dgo5: mayInsertSite,
      computeSiteRootFolder$Dgo5: computeSiteRootFolder,
      analyzeSite$Dgo5: analyzeSite,
      computeSiteManagerGroup$Dgo5: computeSiteManagerGroup,
      computeIsCurrentUserMemberOfGroup$Dgo5: computeIsCurrentUserMemberOfGroup,
      getMaster: getMaster,
      getMasterVersionNumber: getMasterVersionNumber,
      getMasterVersion: getMasterVersion,
      getMasterVersionOrDerivedFromVersion: getMasterVersionOrDerivedFromVersion,
      getMasterVersionWithNumber$Dgo5: getMasterVersionWithNumber,
      isMultiLanguageSupportEnabled: isMultiLanguageSupportEnabled,
      validateUriSegment: validateUriSegment,
      getSiteStructureValueExpression: getSiteStructureValueExpression,
      computeSiteStructure$Dgo5: computeSiteStructure,
      addSitesUnderConstruction$Dgo5: addSitesUnderConstruction,
      clearInvalidMasterSites$Dgo5: clearInvalidMasterSites,
      computeDerivedSites$Dgo5: computeDerivedSites,
      computeDerivedSitesByMasterSiteId$Dgo5: computeDerivedSitesByMasterSiteId,
      computePaths$Dgo5: computePaths,
      getSitesById: getSitesById,
      getSites: getSites,
      getSite: getSite,
      getSiteRootDocument: getSiteRootDocument,
      getSiteRootFolder: getSiteRootFolder,
      getPreferredSiteId: getPreferredSiteId,
      setPreferredSiteId: setPreferredSiteId,
      siteStructureChanged$Dgo5: siteStructureChanged,
      updatePreferredSiteId$Dgo5: updatePreferredSiteId,
      getPreferredSite: getPreferredSite,
      getPreferredSiteName: getPreferredSiteName,
      getPreferredSiteIdExpression: getPreferredSiteIdExpression,
      getSiteIdFor: getSiteIdFor,
      getSiteFor: getSiteFor,
      getSiteNameFor: getSiteNameFor,
      getSiteName: getSiteName,
      isTranslationManager: isTranslationManager,
      requires: [
        "AS3.Error",
        "Ext.util.Observable",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.sites.SitesService",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.Locale",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.SiteImpl",
        "com.coremedia.cms.editor.sdk.sites.SiteModelImpl",
        "com.coremedia.cms.editor.sdk.sites.SitesRemoteBean",
        "com.coremedia.cms.editor.sdk.sites.TranslationStrategy"
      ]
    };
});
