Ext.define("com.coremedia.cms.editor.sdk.sites.SiteImpl", function(SiteImpl) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.user.Group;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.util.ObjectUtils;

/**
 * An object describing a site and its relation to other sites.
 * /
public class SiteImpl implements Site {
  private var siteId:String;
  private var siteRootFolder:Content;
  private var masterSiteId:String;
  private var siteIndicator:Content;
  private var siteRootDocument:Content;
  private var name:String;
  private var locale:Locale;
  private var allMasterSiteIds:Array;
  private var derivedSites:Array;
  private var underConstruction:Boolean;
  private var siteManagerGroup:Group;
  private var managedByCurrentUser:Boolean;
  private var translationStrategy:String;

  /**
   * Create a new object describing a site and its relation to other sites.
   *
   * @param siteId the site id
   * @param siteRootFolder the folder containing the site
   * @param masterSiteId the id of the master site
   * @param siteIndicator the site indicator document of the site
   * @param siteRootDocument the document that serves as an editorial entry point to the site
   * @param name the name of the site
   * @param locale the locale of the site
   * @param siteManagerGroup the manager group of the site
   * @param managedByCurrentUser whether the current user is member of the site manager group
   * @param underConstruction whether the site is under construction
   * @param translationStrategy the translationStrategy
   * /
  public*/ function SiteImpl$(siteId/*:String*/, siteRootFolder/*:Content*/, masterSiteId/*:String*/, siteIndicator/*:Content*/, siteRootDocument/*:Content*/,
                           name/*:String*/, locale/*:Locale*/,
                           siteManagerGroup/*:Group*/, managedByCurrentUser/*:Boolean*/,
                           underConstruction/*:Boolean*/, translationStrategy/*:String = TranslationStrategy.LANG_TRANSLATION*/) {if(arguments.length<=10)translationStrategy=com.coremedia.cms.editor.sdk.sites.TranslationStrategy.LANG_TRANSLATION;
    this.siteId$Ted3 = siteId;
    this.siteRootFolder$Ted3 = siteRootFolder;
    this.masterSiteId$Ted3 = masterSiteId;
    this.siteIndicator$Ted3 = siteIndicator;
    this.siteRootDocument$Ted3 = siteRootDocument;
    this.name$Ted3 = name;
    this.locale$Ted3 = locale;
    this.siteManagerGroup$Ted3 = siteManagerGroup;
    this.managedByCurrentUser$Ted3 = managedByCurrentUser;
    this.translationStrategy$Ted3 = translationStrategy;
    this.underConstruction$Ted3 = underConstruction;
  }/*

  public*/ function getId()/*:String*/ {
    return this.siteId$Ted3;
  }/*

  public*/ function getSiteRootFolder()/*:Content*/ {
    return this.siteRootFolder$Ted3;
  }/*

  internal*/ function getMasterSiteId()/*:String*/ {
    return this.masterSiteId$Ted3;
  }/*

  public*/ function getMasterSite()/*:Site*/ {
    return this.masterSiteId$Ted3 ? com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(this.masterSiteId$Ted3) : null;
  }/*

  public*/ function getSiteIndicator()/*:Content*/ {
    return this.siteIndicator$Ted3;
  }/*

  public*/ function getSiteRootDocument()/*:Content*/ {
    return this.siteRootDocument$Ted3;
  }/*

  public*/ function getName()/*:String*/ {
    return this.name$Ted3;
  }/*

  public*/ function getLocale()/*:Locale*/ {
    return this.locale$Ted3;
  }/*

  public*/ function getDerivedSites()/*:Array*/ {
    return this.derivedSites$Ted3;
  }/*

  public*/ function isUnderConstruction()/*:Boolean*/ {
    return this.underConstruction$Ted3;
  }/*

  public*/ function getSiteManagerGroup()/*:Group*/ {
    return this.siteManagerGroup$Ted3;
  }/*

  public*/ function isManagedByCurrentUser()/*:Boolean*/ {
    return this.managedByCurrentUser$Ted3;
  }/*

  public*/ function getTranslationStrategy()/*:String*/ {
    return this.translationStrategy$Ted3;
  }/*

  public*/ function isSynchronizationTargetSite()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.sites.TranslationStrategy.SYNC === this.translationStrategy$Ted3;
  }/*

  public*/ function isLanguageTranslationTargetSite()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.sites.TranslationStrategy.LANG_TRANSLATION === this.translationStrategy$Ted3;
  }/*

  /**
   * The chain of master sites of this site as an array of site root
   * folders, starting with the ultimate ancestor, ending with the
   * site root of this site.
   * /
  internal*/ function getAllMasterSiteIds()/*:Array*/ {
    return this.allMasterSiteIds$Ted3;
  }/*

  /**
   * Set the master site id to null.
   * /
  internal*/ function clearMasterSiteId()/*:void*/ {
    this.masterSiteId$Ted3 = null;
  }/*

  /**
   * Set the chain of master sites of this site as an array of site ids,
   * starting with the ultimate ancestor, ending with the
   * site root of this site.
   *
   * @param value the chain of master sites
   * /
  internal*/ function setAllMasterSiteIds(value/*:Array*/)/*:void*/ {
    this.allMasterSiteIds$Ted3 = value;
  }/*

  /**
   * Set the sites that have been derived from this site as an array
   * of site objects.
   *
   * @param value the sites that have been derived from this site
   * /
  internal*/ function setDerivedSites(value/*:Array*/)/*:void*/ {
    this.derivedSites$Ted3 = value;
  }/*

  internal*/ function allFieldsEqual(that/*:SiteImpl*/)/*:Boolean*/ {
    return this.siteId$Ted3 === that.siteId$Ted3 &&
            this.siteRootFolder$Ted3 === that.siteRootFolder$Ted3 &&
            this.masterSiteId$Ted3 === that.masterSiteId$Ted3 &&
            this.siteIndicator$Ted3 === that.siteIndicator$Ted3 &&
            this.siteRootDocument$Ted3 === that.siteRootDocument$Ted3 &&
            this.name$Ted3 === that.name$Ted3 &&
            this.locale$Ted3.equals(that.locale$Ted3) &&
            com.coremedia.ui.util.ObjectUtils.equal(this.allMasterSiteIds$Ted3, that.allMasterSiteIds$Ted3) &&
            this.derivedSitesEqual$Ted3(that) &&
            this.underConstruction$Ted3 === that.underConstruction$Ted3 &&
            this.siteManagerGroup$Ted3 === that.siteManagerGroup$Ted3 &&
            this.managedByCurrentUser$Ted3 === that.managedByCurrentUser$Ted3 &&
            this.translationStrategy$Ted3 === that.translationStrategy$Ted3;
  }/*

  private*/ function derivedSitesEqual(that/*:SiteImpl*/)/*:Boolean*/ {
    if (this.derivedSites$Ted3.length !== that.derivedSites$Ted3.length) {
      return false;
    }
    for (var i/*:int*/ = 0; i < this.derivedSites$Ted3.length; i++) {
      if (this.derivedSites$Ted3[i].siteId !== that.derivedSites$Ted3[i].siteId) {
        return false;
      }
    }
    return true;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.sites.Site"],
      siteId$Ted3: null,
      siteRootFolder$Ted3: null,
      masterSiteId$Ted3: null,
      siteIndicator$Ted3: null,
      siteRootDocument$Ted3: null,
      name$Ted3: null,
      locale$Ted3: null,
      allMasterSiteIds$Ted3: null,
      derivedSites$Ted3: null,
      underConstruction$Ted3: false,
      siteManagerGroup$Ted3: null,
      managedByCurrentUser$Ted3: false,
      translationStrategy$Ted3: null,
      constructor: SiteImpl$,
      getId: getId,
      getSiteRootFolder: getSiteRootFolder,
      getMasterSiteId: getMasterSiteId,
      getMasterSite: getMasterSite,
      getSiteIndicator: getSiteIndicator,
      getSiteRootDocument: getSiteRootDocument,
      getName: getName,
      getLocale: getLocale,
      getDerivedSites: getDerivedSites,
      isUnderConstruction: isUnderConstruction,
      getSiteManagerGroup: getSiteManagerGroup,
      isManagedByCurrentUser: isManagedByCurrentUser,
      getTranslationStrategy: getTranslationStrategy,
      isSynchronizationTargetSite: isSynchronizationTargetSite,
      isLanguageTranslationTargetSite: isLanguageTranslationTargetSite,
      getAllMasterSiteIds: getAllMasterSiteIds,
      clearMasterSiteId: clearMasterSiteId,
      setAllMasterSiteIds: setAllMasterSiteIds,
      setDerivedSites: setDerivedSites,
      allFieldsEqual: allFieldsEqual,
      derivedSitesEqual$Ted3: derivedSitesEqual,
      requires: [
        "com.coremedia.cms.editor.sdk.sites.Site",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.TranslationStrategy"
      ]
    };
});
