Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRowBase", function(TranslationStatusChartRowBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.SearchState;
import com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel;
import com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.container.Container;
import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class TranslationStatusChartRowBase extends ClickableContainer {
  protected static const BAR_ITEM_ID:String = 'bar';

  protected static const TEXT_LABEL_WIDTH:Number = 120;
  protected static const COUNT_LABEL_WIDTH:Number = 30;
  protected static const COUNT_LABEL_MARGIN_RIGHT:Number = 6;
  protected static const BAR_MIN_WIDTH:Number = 4;

  public*/ function TranslationStatusChartRowBase$(config/*:TranslationStatusChartRow = null*/) {if(arguments.length<=0)config=null;
    this.super$bW4T(config);

    this.on("afterlayout",AS3.bind( this,"setBarWidth$bW4T"));
  }/*

  [Bindable]
  public var count:int;

  [Bindable]
  public var total:int;

  [Bindable]
  public var targetSiteId:String;

  [Bindable]
  public var translationState:String;

  protected*/ function showLibrary()/*:void*/ {
    var searchState/*:SearchState*/ = new com.coremedia.cms.editor.sdk.collectionview.SearchState();
    searchState.contentType = "Document_";

    var filterState/*:Object*/ = {};
    filterState[com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.SITE_PROPERTY] = AS3.getBindable(this,"targetSiteId");

    for (var i/*:int*/ = 0; i < com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.TRANSLATION_STATES.length; i++) {
      var ts/*:String*/ = com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.TRANSLATION_STATES[i];
      filterState[ts] = false;
    }

    filterState[AS3.getBindable(this,"translationState")] = true;
    searchState.setFilter(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel.FILTER_ID, filterState);

    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().openSearch(searchState, true, com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.LIST_VIEW);
  }/*

  private*/ function setBarWidth()/*:void*/ {
    var bar/*:Container*/ =AS3.as( this.getComponent(TranslationStatusChartRowBase.BAR_ITEM_ID),  Ext.container.Container);

    var computedWidth/*:Number*/ = this.getEl().getWidth();
    var ratio/*:Number*/ = AS3.getBindable(this,"count") && AS3.getBindable(this,"total") && AS3.getBindable(this,"count") / AS3.getBindable(this,"total");
    var width/*:Number*/ = Math.max(ratio * (computedWidth - (TranslationStatusChartRowBase.TEXT_LABEL_WIDTH + TranslationStatusChartRowBase.COUNT_LABEL_WIDTH + TranslationStatusChartRowBase.COUNT_LABEL_MARGIN_RIGHT)), TranslationStatusChartRowBase.BAR_MIN_WIDTH);

    bar.setWidth(width);
  }/*

  protected static*/ function abbreviateCount$static(count/*:int*/)/*:String*/ {
    if (count === undefined) {
      return "";
    }

    var countString/*:String*/;

    if (count >= 1000000) {
      countString = String(Math.round(count / 1000000)) +
      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_megaSuffix');
    } else if (count >= 1000) {
      countString = String(Math.round(count / 1000)) +
      mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_kiloSuffix');
    } else {
      countString = String(count);
    }

    return countString;
  }/*

  protected static*/ function formatCount$static(count/*:int*/)/*:String*/ {
    return Ext.util.Format.number(count, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_extIntegerFormat'));
  }/*

  protected static*/ function formatPercentage$static(percentage/*:Number*/)/*:String*/ {
    return percentage === undefined || isNaN(percentage) ?
            "" :
            Ext.util.Format.number(percentage, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_extDecimalFormat')) + '%';
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainer",
      constructor: TranslationStatusChartRowBase$,
      super$bW4T: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainer.prototype.constructor.apply(this, arguments);
      },
      showLibrary: showLibrary,
      setBarWidth$bW4T: setBarWidth,
      config: {
        count: 0,
        total: 0,
        targetSiteId: null,
        translationState: null
      },
      statics: {
        BAR_ITEM_ID: 'bar',
        TEXT_LABEL_WIDTH: 120,
        COUNT_LABEL_WIDTH: 30,
        COUNT_LABEL_MARGIN_RIGHT: 6,
        BAR_MIN_WIDTH: 4,
        abbreviateCount: abbreviateCount$static,
        formatCount: formatCount$static,
        formatPercentage: formatPercentage$static
      },
      requires: [
        "Ext.container.Container",
        "Ext.util.Format",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainer",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.collectionview.SearchState",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanel",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
