Ext.define("com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBoxBase", function(SiteSelectorComboBoxBase) {/*package com.coremedia.cms.editor.sdk.desktop {

import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EncodingUtil;

import ext.StringUtil;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class SiteSelectorComboBoxBase extends LocalComboBox {

  private var bindTo:ValueExpression;
  private var updatingValue:Boolean = false;

  public*/ function SiteSelectorComboBoxBase$(config/*:SiteSelectorComboBox = null*/) {if(arguments.length<=0)config=null;
    this.super$6mvW(config);

    this.bindTo$6mvW = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteIdExpression();
    this.bindTo$6mvW.addChangeListener(AS3.bind(this,"preferredSiteChanged$6mvW"));
    this.preferredSiteChanged$6mvW();

    this.addListener("change",AS3.bind( this,"siteSelected$6mvW"));
  }/*

  private*/ function siteSelected()/*:void*/ {
    if (!this.updatingValue$6mvW) {
      var siteId/*:**/ = this.getValue();
      if (siteId && siteId !== this.bindTo$6mvW.getValue()) {
        var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(siteId);
        if (site) {
          this.bindTo$6mvW.setValue(siteId);
          var collectionViewModel/*:CollectionViewModel*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getCollectionViewModel();
          collectionViewModel.getMainStateBean().set(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.FOLDER_PROPERTY, site.getSiteRootFolder());
        }
      }
    }
  }/*

  private*/ function preferredSiteChanged()/*:void*/ {
    this.updatingValue$6mvW = true;
    try {
      if (this.getValue() !== this.bindTo$6mvW.getValue()) {
        this.setValue(this.bindTo$6mvW.getValue());
      }
    } finally {
      this.updatingValue$6mvW = false;
    }
  }/*

  //noinspection JSMethodCanBeStatic
  /**
   * Creates the combo box store with the sites info.
   * @return
   * /
  protected*/ function getSitesStore()/*:Array*/ {
    var sitesStore/*:Array*/ = [];
    var sites/*:Array*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSites();
    if (sites) {
      for(var i/*:int*/ = 0; i<sites.length; i++) {
        var site/*:Site*/ = sites[i];
        var pattern/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_siteSelector_displayName_pattern');
        var calculatedSiteName/*:String*/ = Ext.String.format(pattern,
                com.coremedia.ui.util.EncodingUtil.encodeForHTML(site.getName()),
                site.getLocale().getLanguageTag(),
                site.getLocale().getDisplayName());
        sitesStore.push({id: site.getId(), name: calculatedSiteName} );
      }
    }
    return sitesStore;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      bindTo$6mvW: null,
      updatingValue$6mvW: false,
      constructor: SiteSelectorComboBoxBase$,
      super$6mvW: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      siteSelected$6mvW: siteSelected,
      preferredSiteChanged$6mvW: preferredSiteChanged,
      getSitesStore: getSitesStore,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
