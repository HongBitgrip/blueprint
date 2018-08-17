Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusSiteSelectorBase", function(TranslationStatusSiteSelectorBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SiteImpl;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ArrayUtils;

import ext.container.Container;
import ext.data.Model;
import ext.data.Store;
import ext.form.field.ComboBox;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class TranslationStatusSiteSelectorBase extends Container {
  /**
   * The itemId of the root sites combo box.
   * /
  protected static const ROOT_SITES_COMBO_BOX_ITEM_ID:String = "rootSitesComboBox";

  /**
   * The itemId of the derived sites combo box.
   * /
  protected static const DERIVED_SITES_COMBO_BOX_ITEM_ID:String = "derivedSitesComboBox";

  /**
   * The ValueExpression evaluating to the site id.
   * /
  [Bindable]
  public var selectedSiteIdValueExpression:ValueExpression;

  // stores the available root site ids
  private var rootSitesComboBox:ComboBox;
  private var rootSitesStore:Store;
  // stores the derived site ids for the currently selected root site
  private var derivedSitesComboBox:ComboBox;
  private var derivedSitesStore:Store;

  private var lastSelectedLocale:Locale;

  private var preferresSiteVE:ValueExpression;

  public*/ function TranslationStatusSiteSelectorBase$(config/*:TranslationStatusSiteSelector = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$jQW5(config);

    this.rootSitesComboBox$jQW5 =AS3.as( this.getComponent(TranslationStatusSiteSelectorBase.ROOT_SITES_COMBO_BOX_ITEM_ID),  Ext.form.field.ComboBox);
    this.rootSitesStore$jQW5 =AS3.as( this.rootSitesComboBox$jQW5.getStore(),  Ext.data.Store);

    this.derivedSitesComboBox$jQW5 =AS3.as( this.getComponent(TranslationStatusSiteSelectorBase.DERIVED_SITES_COMBO_BOX_ITEM_ID),  Ext.form.field.ComboBox);
    this.derivedSitesStore$jQW5 =AS3.as( this.derivedSitesComboBox$jQW5.getStore(),  Ext.data.Store);

    var rootSitesVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getRootSites"));
    rootSitesVE.loadValue(function (rootSites/*:Array*/)/*:void*/ {
      this$.rootSitesStore$jQW5.setData(this$.convertSites$jQW5(rootSites));
      rootSites.length > 0 && this$.rootSitesComboBox$jQW5.select(rootSites[0]);
    });

    this.rootSitesComboBox$jQW5.on('change',AS3.bind( this,"selectedRootSiteChanged$jQW5"));
    this.derivedSitesComboBox$jQW5.on('change',AS3.bind( this,"selectedDerivedSiteChanged$jQW5"));

    AS3.getBindable(this,"selectedSiteIdValueExpression").addChangeListener(AS3.bind(this,"selectedSiteChanged$jQW5"));
    this.selectedSiteChanged$jQW5();

    this.preferresSiteVE$jQW5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Site*/ {
      return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    });
    this.preferresSiteVE$jQW5.addChangeListener(AS3.bind(this,"preferredSiteChanged$jQW5"));
    this.preferredSiteChanged$jQW5();
  }/*

  private*/ function preferredSiteChanged()/*:void*/ {
    var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    var model/*:Model*/ = this.rootSitesStore$jQW5.findRecord("id", com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID);
    if (preferredSite && preferredSite.isLanguageTranslationTargetSite()) {
      if (!model) {
        this.rootSitesStore$jQW5.insert(0, {
          id: com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID,
          name: this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_preferredSite_text'),
          localeDisplayName: preferredSite.getLocale() ? preferredSite.getLocale().getDisplayName() : '-'
        });
      }
    } else if (! !model) {
      this.rootSitesStore$jQW5.remove(model);
    }
  }/*

  private*/ function convertSites(sites/*:Array*/)/*:Array*/ {
    if (!sites) {
      return sites;
    }

    return sites.map(function (site/*:Site*/)/*:Object*/ {
      return {
        id: site.getId(),
        name: site.getName(),
        localeDisplayName: site.getLocale() ? site.getLocale().getDisplayName() : '-'
      };
    });
  }/*

  private*/ function selectedSiteChanged()/*:void*/ {
    var selectedSiteId/*:String*/ = AS3.getBindable(this,"selectedSiteIdValueExpression").getValue();

    if (!selectedSiteId || selectedSiteId === com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      this.rootSitesComboBox$jQW5.setValue(selectedSiteId);
    } else {
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(selectedSiteId);
      if (!site) {
        return;
      }

      // Remember the site id to be able to select an appropriate locale,
      // when the root site is changed.
      this.lastSelectedLocale$jQW5 = site.getLocale();

      // Determine root site of real site.
      site = com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil.getRootSite(site);
      this.rootSitesComboBox$jQW5.setValue(site.getId());
    }
  }/*

  protected*/ function getRootSites()/*:Array*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var sites/*:Array*/ = sitesService.getSites();
    if (!sites) {
      return undefined;
    }

    // Select the root sites in site hierarchies with more than one site.
    var result/*:Array*/ = sites.filter(function (site/*:Site*/)/*:Boolean*/ {
      return !site.getMasterSite() && site.getDerivedSites().length > 0 && !site.isUnderConstruction();
    });
    com.coremedia.ui.util.ArrayUtils.sortByAspects(result, function (site/*:Site*/)/*:String*/ {
      return site.getName();
    });

    // Add a pseudo-site for choosing the preferred site.
    var preferredSite/*:Site*/ = sitesService.getPreferredSite();
    if (preferredSite) {
      result.unshift(new com.coremedia.cms.editor.sdk.sites.SiteImpl(com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID, null, null, null, null,
              this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Filter_TranslationStatus_preferredSite_text'), null, null, false, false));
    }
    return result;
  }/*

  private*/ function selectedRootSiteChanged()/*:void*/ {
    var selectedRootSiteId/*:String*/ = this.rootSitesComboBox$jQW5.getValue();

    var derivedSites/*:Array*/ = getDerivedSites$static(this.rootSitesComboBox$jQW5.getValue());
    this.derivedSitesStore$jQW5.setData(this.convertSites$jQW5(derivedSites));

    if (!selectedRootSiteId || selectedRootSiteId === com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      this.derivedSitesComboBox$jQW5.setValue(null);
      this.derivedSitesComboBox$jQW5.hide();
      // Simply transfer special values.
      AS3.getBindable(this,"selectedSiteIdValueExpression").setValue(selectedRootSiteId);
    } else {
      this.derivedSitesComboBox$jQW5.show();
      if (derivedSites.length > 0) {
        if (this.lastSelectedLocale$jQW5) {
          for (var i/*:int*/ = 0; i < derivedSites.length; i++) {
            var site/*:Site*/ = derivedSites[i];
            var siteLocale/*:Locale*/ = site.getLocale();
            if (this.lastSelectedLocale$jQW5.equals(siteLocale)) {
              this.derivedSitesComboBox$jQW5.setValue(site.getId());
              return;
            }
          }
        }
        this.derivedSitesComboBox$jQW5.setValue(derivedSites[0].getId());
      }
    }
  }/*

  private*/ function selectedDerivedSiteChanged()/*:void*/ {
    var selectedDerivedSiteId/*:String*/ = this.derivedSitesComboBox$jQW5.getValue();
    if (selectedDerivedSiteId) {
      AS3.getBindable(this,"selectedSiteIdValueExpression").setValue(selectedDerivedSiteId);
    }
  }/*

  private static*/ function getDerivedSites$static(rootSiteId/*:String*/)/*:Array*/ {
    if (!rootSiteId) {
      return [];
    }

    var rootSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(rootSiteId);
    if (!rootSite) {
      return [];
    }
    return com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil.getAllDerivedSites(rootSite);
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.preferresSiteVE$jQW5.removeChangeListener(AS3.bind(this,"preferredSiteChanged$jQW5"));
    AS3.getBindable(this,"selectedSiteIdValueExpression").removeChangeListener(AS3.bind(this,"selectedSiteChanged$jQW5"));
    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      rootSitesComboBox$jQW5: null,
      rootSitesStore$jQW5: null,
      derivedSitesComboBox$jQW5: null,
      derivedSitesStore$jQW5: null,
      lastSelectedLocale$jQW5: null,
      preferresSiteVE$jQW5: null,
      constructor: TranslationStatusSiteSelectorBase$,
      super$jQW5: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      preferredSiteChanged$jQW5: preferredSiteChanged,
      convertSites$jQW5: convertSites,
      selectedSiteChanged$jQW5: selectedSiteChanged,
      getRootSites: getRootSites,
      selectedRootSiteChanged$jQW5: selectedRootSiteChanged,
      selectedDerivedSiteChanged$jQW5: selectedDerivedSiteChanged,
      beforeDestroy: beforeDestroy,
      config: {selectedSiteIdValueExpression: null},
      statics: {
        ROOT_SITES_COMBO_BOX_ITEM_ID: "rootSitesComboBox",
        DERIVED_SITES_COMBO_BOX_ITEM_ID: "derivedSitesComboBox"
      },
      requires: [
        "Ext.container.Container",
        "Ext.data.Store",
        "Ext.form.field.ComboBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.SiteImpl",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil"
      ]
    };
});
