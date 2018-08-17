Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartBase", function(TranslationStatusChartBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import com.coremedia.cap.content.search.SearchResult;
import com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.skins.ContainerSkin;

import ext.Component;
import ext.Ext;
import ext.container.Container;

public class TranslationStatusChartBase extends Container {
  private var rowConfigsValueExpression:ValueExpression;

  public*/ function TranslationStatusChartBase$(config/*:TranslationStatusChart = null*/) {if(arguments.length<=0)config=null;
    this.super$Nuw$(config);

    this.reload();
  }/*

  [Bindable]
  public var targetSiteId:String;

  [Bindable]
  public var highlightedTranslationStates:Array;

  protected*/ function getRowConfigsValueExpression()/*:ValueExpression*/ {
    if (!this.rowConfigsValueExpression$Nuw$) {
      this.rowConfigsValueExpression$Nuw$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }

    return this.rowConfigsValueExpression$Nuw$;
  }/*

  public*/ function reload()/*:void*/ {var this$=this;
    if (!AS3.getBindable(this,"targetSiteId")) {
      this.getRowConfigsValueExpression().setValue([]);
      return;
    }

    var totalResult/*:SearchResult*/ = this.search$Nuw$(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.TRANSLATION_STATES.concat());

    var rowResults/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.TRANSLATION_STATES.length; i++) {
      var translationState/*:String*/ = com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase.TRANSLATION_STATES[i];
      rowResults[translationState] = this.search$Nuw$([translationState]);
    }

    var resultArray/*:Array*/ = [];
    for/* each*/ (var $1 in rowResults) {var result/*:SearchResult*/ =rowResults[$1];
      resultArray.push(result);
    }

    com.coremedia.ui.data.RemoteBeanUtil.loadAll(
            function ()/*:void*/ {
              var rowConfigs/*:Array*/ = this$.createRowConfigs$Nuw$(totalResult.getTotal(), rowResults);
              this$.getRowConfigsValueExpression().setValue(rowConfigs);
            },
            totalResult, resultArray);
  }/*

  private*/ function search(translationStates/*:Array*/)/*:SearchResult*/ {
    var searchParameters/*:TranslationStatusSearchParameters*/ = new com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters();
    searchParameters.targetSiteId = AS3.getBindable(this,"targetSiteId");
    searchParameters.translationStates = translationStates;
    searchParameters.excludeDeleted = true;

    return com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.search(searchParameters);
  }/*

  private*/ function createRowConfigs(total/*:uint*/, rowResults/*:Object*/)/*:Array*/ {
    var defaultConfig/*:TranslationStatusChartRow*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRow,{});
    AS3.setBindable(defaultConfig,"targetSiteId" , AS3.getBindable(this,"targetSiteId"));
    AS3.setBindable(defaultConfig,"total" , total);

    var rowConfigs/*:Array*/ = [];
    for (var translationState/*:String*/ in rowResults) {
      rowConfigs.push(this.createRowConfig$Nuw$(translationState, rowResults[translationState], defaultConfig));
    }
    return rowConfigs;
  }/*

  private*/ function createRowConfig(translationState/*:String*/,
                                   result/*:SearchResult*/,
                                   defaultConfig/*:TranslationStatusChartRow*/)/*:TranslationStatusChartRow*/ {
    var rowConfig/*:TranslationStatusChartRow*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRow,Ext.apply({}, Ext.apply({}, defaultConfig)));
    rowConfig.itemId = translationState;
    rowConfig.ui = com.coremedia.ui.skins.ContainerSkin.SPECIAL_TRANSLATION_CHART.getSkin();
    AS3.setBindable(rowConfig,"translationState" , translationState);
    AS3.setBindable(rowConfig,"count" , result.getTotal());
    AS3.setBindable(rowConfig,"highlighted" , ! !(AS3.getBindable(this,"highlightedTranslationStates") && AS3.getBindable(this,"highlightedTranslationStates").indexOf(translationState) !== -1));
    return rowConfig;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      rowConfigsValueExpression$Nuw$: null,
      constructor: TranslationStatusChartBase$,
      super$Nuw$: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getRowConfigsValueExpression: getRowConfigsValueExpression,
      reload: reload,
      search$Nuw$: search,
      createRowConfigs$Nuw$: createRowConfigs,
      createRowConfig$Nuw$: createRowConfig,
      onDestroy: onDestroy,
      config: {
        targetSiteId: null,
        highlightedTranslationStates: null
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.skins.ContainerSkin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChartRow",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil"
      ]
    };
});
