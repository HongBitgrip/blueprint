Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterPanelBase", function(TranslationStatusFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class TranslationStatusFilterPanelBase extends FilterPanel {
  public static const SITE_PROPERTY:String = "site";

  public static const TRANSLATION_STATES:Array =*/function TRANSLATION_STATES$static_(){TranslationStatusFilterPanelBase.TRANSLATION_STATES=( [
    com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.UP_TO_DATE,
    com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.PSEUDO_STATE_IN_TRANSLATION,
    com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_LOCALIZED_YET,
    com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NEW_IN_MASTER,
    com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.NOT_UP_TO_DATE
  ]);}/*;

  public static*/ function getTranslationStates$static()/*:Array*/ {
    return TranslationStatusFilterPanelBase.TRANSLATION_STATES;
  }/*

  private var checkboxConfigsValueExpression:ValueExpression;

  public*/ function TranslationStatusFilterPanelBase$(config/*:TranslationStatusFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$BQpF(config);
    this.getStateBean().addPropertyChangeListener(TranslationStatusFilterPanelBase.SITE_PROPERTY,AS3.bind( this,"validateSite$BQpF"));
  }/*

  /**
   * In case a saved query established a site id that is no longer valid,
   * reset the site.
   * /
  private*/ function validateSite()/*:void*/ {
    var siteId/*:String*/ = this.getStateBean().get(TranslationStatusFilterPanelBase.SITE_PROPERTY);
    if (siteId && siteId !== com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(siteId);
      if (!com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil.isAppropriateSite(site)) {
        this.getStateBean().updateProperties(this.getDefaultState());
      }
    }
  }/*

  override public*/ function buildQuery()/*:String*/ {var this$=this;
    var derivedSiteId/*:String*/ = this.getStateBean().get(TranslationStatusFilterPanelBase.SITE_PROPERTY);

    var searchParameters/*:TranslationStatusSearchParameters*/ = new com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters();
    searchParameters.targetSiteId = derivedSiteId;
    searchParameters.translationStates = TranslationStatusFilterPanelBase.TRANSLATION_STATES.filter(function (translationState/*:String*/)/*:Boolean*/ {
      return ! !this$.getStateBean().get(translationState);
    });

    return com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.buildQuery(searchParameters);
  }/*

  override public*/ function getDefaultState()/*:Object*/ {
    var state/*:Object*/ = {};
    state[TranslationStatusFilterPanelBase.SITE_PROPERTY] = null;
    state[TranslationStatusFilterPanelBase.TRANSLATION_STATES[0]] = true;

    for (var i/*:int*/ = 1; i < TranslationStatusFilterPanelBase.TRANSLATION_STATES.length; i++) {
      state[TranslationStatusFilterPanelBase.TRANSLATION_STATES[i]] = false;
    }

    return state;
  }/*

  protected*/ function getCheckboxConfigsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.checkboxConfigsValueExpression$BQpF) {
      this.checkboxConfigsValueExpression$BQpF = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var checkboxConfigs/*:Array*/ = [];
        for (var i/*:int*/ = 0; i < TranslationStatusFilterPanelBase.TRANSLATION_STATES.length; i++) {
          var translationState/*:String*/ = TranslationStatusFilterPanelBase.TRANSLATION_STATES[i];
          var translationStatusFilterCheckboxCfg/*:TranslationStatusFilterCheckbox*/ = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterCheckbox,{});
          translationStatusFilterCheckboxCfg.itemId = translationState;
          AS3.setBindable(translationStatusFilterCheckboxCfg,"translationState" , translationState);
          AS3.setBindable(translationStatusFilterCheckboxCfg,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.create(translationState, this$.getStateBean()));
          checkboxConfigs.push(translationStatusFilterCheckboxCfg);
        }
        return checkboxConfigs;
      });
    }

    return this.checkboxConfigsValueExpression$BQpF;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getStateBean().removePropertyChangeListener(TranslationStatusFilterPanelBase.SITE_PROPERTY,AS3.bind( this,"validateSite$BQpF"));

    com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      checkboxConfigsValueExpression$BQpF: null,
      constructor: TranslationStatusFilterPanelBase$,
      super$BQpF: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      validateSite$BQpF: validateSite,
      buildQuery: buildQuery,
      getDefaultState: getDefaultState,
      getCheckboxConfigsValueExpression: getCheckboxConfigsValueExpression,
      beforeDestroy: beforeDestroy,
      statics: {
        SITE_PROPERTY: "site",
        TRANSLATION_STATES: undefined,
        getTranslationStates: getTranslationStates$static,
        __initStatics__: function() {
          TRANSLATION_STATES$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterCheckbox",
        "com.coremedia.cms.editor.sdk.collectionview.search.TranslationStatusFilterUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"
      ]
    };
});
