Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.SiteFilterPanelBase", function(SiteFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.StringUtil;
import ext.form.RadioGroup;
import ext.form.field.Radio;
import ext.layout.container.ContainerLayout;

/**
 * The non-UI part of a filter for the collection view that allows to select
 * the site of documents to be included in the search result.
 * /
public class SiteFilterPanelBase extends FilterPanel {

  // The filter property storing the site.
  public static const SITE_PROPERTY:String = "site";

  public static const PREFERRED_SITE_VALUE:String = "PREFERRED";
  public static const NO_FILTER_VALUE:String = "ANY";

  // The item ID of the radio group.
  public static const RADIO_GROUP_ITEM_ID:String = 'radiogroup';
  // The group name for the radiobuttons
  public static const RADIO_GROUP_NAME:String = "siteFilterGroup";

  /**
   * The parameterizable query fragment to be passed to Solr.
   * /
  private static const*/var FILTER_QUERY_SITE$static/*:String*/ = "folderpath:<{0}>";/*

  /**
   * Whether the UI is currently being updated due to changes of the
   * model. When true, do not assume that the UI is in a consistent state
   * and do not update the model as a result of UI event.
   * /
  private var viewUpdateInProgress:Boolean = false;

  /**
   * The radio group component
   * /
  private var radioGroup:RadioGroup;

  /**
   * Create a new filter panel.
   *
   * @param config the configuration
   * /
  public*/ function SiteFilterPanelBase$(config/*:SiteFilterPanelBase = null*/) {if(arguments.length<=0)config=null;
    this.super$9zC1(config);
    this.addListener(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT,AS3.bind( this,"afterLazyItemsAdded$9zC1"));
  }/*

  private*/ function afterLazyItemsAdded()/*:void*/ {
    this.radioGroup$9zC1 =AS3.as( this.queryById(SiteFilterPanelBase.RADIO_GROUP_ITEM_ID),  Ext.form.RadioGroup);
    this.mon(this.radioGroup$9zC1, "change",AS3.bind( this,"radioGroupChanged$9zC1"));

    // Update the UI once and after state changes.
    this.getStateBean().addValueChangeListener(AS3.bind(this,"stateBeanChanged$9zC1"));
  }/*

  override protected*/ function afterLayout(layout/*:ContainerLayout*/)/*:void*/ {
    this.stateBeanChanged$9zC1();
    com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.afterLayout.call(this,layout);
  }/*

  //noinspection JSUnusedLocalSymbols
  /**
   * Called when the state of the value of the radio group has changed.
   * /
  private*/ function radioGroupChanged(radioGroup/*:RadioGroup*/, radio/*:Radio*/)/*:void*/ {
    if (this.viewUpdateInProgress$9zC1) {
      return;
    }
    this.getStateBean().set(SiteFilterPanelBase.SITE_PROPERTY, radio[this.getRadioGroupName()]);
  }/*

  protected*/ function getRadioGroupName()/*:String*/ {
    return SiteFilterPanelBase.RADIO_GROUP_NAME + this.getId();
  }/*

  /**
   * The model has changed. Update the UI.
   * /
  private*/ function stateBeanChanged()/*:void*/ {
    if (this.radioGroup$9zC1) {
      // Block events.
      this.viewUpdateInProgress$9zC1 = true;
      try {
        // Update site filter.
        var stateBean/*:Bean*/ = this.getStateBean();
        var selectedSiteId/*:String*/ = stateBean.get(SiteFilterPanelBase.SITE_PROPERTY) || "";
        var radioGroupValue/*:Object*/ = {};
        radioGroupValue[this.getRadioGroupName()] = selectedSiteId;
        this.radioGroup$9zC1.setValue(radioGroupValue);
      } finally {
        // React to events again.
        this.viewUpdateInProgress$9zC1 = false;
      }
    }
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function buildQuery()/*:String*/ {
    var stateBean/*:Bean*/ = this.getStateBean();
    var siteId/*:String*/ = stateBean.get(SiteFilterPanelBase.SITE_PROPERTY);
    if (siteId === SiteFilterPanelBase.PREFERRED_SITE_VALUE) {
      var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
      if (preferredSite) {
        var siteRootFolder/*:Content*/ = preferredSite.getSiteRootFolder();
        var query/*:String*/ = Ext.String.format(FILTER_QUERY_SITE$static, siteRootFolder.getUriPath());
        return query;
      }
    }
    // The entire filter can be omitted.
    return null;
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getDefaultState()/*:Object*/ {
    var state/*:Object*/ = {};
    state[SiteFilterPanelBase.SITE_PROPERTY] = SiteFilterPanelBase.NO_FILTER_VALUE;
    return state;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      viewUpdateInProgress$9zC1: false,
      radioGroup$9zC1: null,
      constructor: SiteFilterPanelBase$,
      super$9zC1: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      afterLazyItemsAdded$9zC1: afterLazyItemsAdded,
      afterLayout: afterLayout,
      radioGroupChanged$9zC1: radioGroupChanged,
      getRadioGroupName: getRadioGroupName,
      stateBeanChanged$9zC1: stateBeanChanged,
      buildQuery: buildQuery,
      getDefaultState: getDefaultState,
      statics: {
        SITE_PROPERTY: "site",
        PREFERRED_SITE_VALUE: "PREFERRED",
        NO_FILTER_VALUE: "ANY",
        RADIO_GROUP_ITEM_ID: 'radiogroup',
        RADIO_GROUP_NAME: "siteFilterGroup"
      },
      requires: [
        "Ext.String",
        "Ext.form.RadioGroup",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
