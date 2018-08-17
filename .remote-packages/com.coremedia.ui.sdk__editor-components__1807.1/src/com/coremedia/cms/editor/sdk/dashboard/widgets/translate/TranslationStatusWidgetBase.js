Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusWidgetBase", function(TranslationStatusWidgetBase) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate {

import com.coremedia.cms.editor.sdk.dashboard.Reloadable;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil;
import com.coremedia.ui.components.StatefulContainer;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.button.Button;
import ext.dom.Element;

[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class TranslationStatusWidgetBase extends StatefulContainer implements Reloadable, StateHolder {
  protected static const CHART_ITEM_ID:String = 'chart';
  protected static const TEXT_LINK_ITEM_ID:String = 'textLink';

  private var masterSiteDisplayNameValueExpression:ValueExpression;

  public*/ function TranslationStatusWidgetBase$(config/*:TranslationStatusWidget = null*/) {if(arguments.length<=0)config=null;
    this.super$R1P5(config);

    if (this.targetSiteId === com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteIdExpression().addChangeListener(AS3.bind(this,"reload"));
    }

    this.updateTitle$R1P5();

    this.on('afterlayout',AS3.bind( this,"fixTextLinkWidth$R1P5"));
  }/*

  protected*/ function  get$targetSiteId()/*:String*/ {
    return this.getModel().get('targetSiteId');
  }/*

  protected*/ function getMasterSiteDisplayNameValueExpression()/*:ValueExpression*/ {
    if (!this.masterSiteDisplayNameValueExpression$R1P5) {
      this.masterSiteDisplayNameValueExpression$R1P5 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeMasterSiteDisplayName"));
    }

    return this.masterSiteDisplayNameValueExpression$R1P5;
  }/*

  protected*/ function computeMasterSiteDisplayName()/*:String*/ {
    if (!this.targetSiteId) {
      return "";
    }
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.getSite(this.targetSiteId);
    if (!site) {
      return "";
    }
    var masterSite/*:Site*/ = site.getMasterSite();
    if (!masterSite || !site.isLanguageTranslationTargetSite()) {
      return this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_noMasterSite_text');
    }

    return com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusSiteUtil.getSiteDisplayName(masterSite);
  }/*

  public*/ function reload()/*:void*/ {
    this.updateTitle$R1P5();
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.getSite(this.targetSiteId);
    var chart/*:TranslationStatusChart*/ =AS3.as( this.getComponent(TranslationStatusWidgetBase.CHART_ITEM_ID),  com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart);
    if (site && site.isLanguageTranslationTargetSite()) {
      chart && chart.show();
      chart && chart.reload();
    } else {
      chart && chart.hide();
    }
  }/*

  private*/ function updateTitle()/*:String*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.getSite(this.targetSiteId);
    if (site && site.isLanguageTranslationTargetSite()) {
      this.getModel().set('title', com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusSiteUtil.getSiteDisplayName(site, false));
    } else {
      this.getModel().set('title', this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_TranslationStatus_name'));
    }
  }/*

  private*/ function fixTextLinkWidth()/*:void*/ {
    // for css-ellipsis the a element of the text link needs a fixed width
    var textLink/*:Component*/ =AS3.as( this.getComponent(TranslationStatusWidgetBase.TEXT_LINK_ITEM_ID),  Ext.button.Button);
    var textLinkEl/*:Element*/ = textLink && textLink.getEl();
    if (textLinkEl) {
      var width/*:Number*/ = textLinkEl.getWidth();
      if (width !== undefined) {
        var child/*:Element*/ = textLinkEl.child(textLink['buttonSelector']);
        child && child.setWidth(width);
      }
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    if (this.targetSiteId === com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil.PREFERRED_SITE_ID) {
      com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteIdExpression().removeChangeListener(AS3.bind(this,"reload"));
    }

    com.coremedia.ui.components.StatefulContainer.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulContainer",
      mixins: [
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.ui.data.StateHolder"
      ],
      masterSiteDisplayNameValueExpression$R1P5: null,
      constructor: TranslationStatusWidgetBase$,
      super$R1P5: function() {
        com.coremedia.ui.components.StatefulContainer.prototype.constructor.apply(this, arguments);
      },
      getMasterSiteDisplayNameValueExpression: getMasterSiteDisplayNameValueExpression,
      computeMasterSiteDisplayName: computeMasterSiteDisplayName,
      reload: reload,
      updateTitle$R1P5: updateTitle,
      fixTextLinkWidth$R1P5: fixTextLinkWidth,
      beforeDestroy: beforeDestroy,
      statics: {
        CHART_ITEM_ID: 'chart',
        TEXT_LINK_ITEM_ID: 'textLink'
      },
      __accessors__: {targetSiteId: {get: get$targetSiteId}},
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.Reloadable",
        "com.coremedia.ui.components.StatefulContainer",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusChart",
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.TranslationStatusSiteUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchUtil"
      ]
    };
});
