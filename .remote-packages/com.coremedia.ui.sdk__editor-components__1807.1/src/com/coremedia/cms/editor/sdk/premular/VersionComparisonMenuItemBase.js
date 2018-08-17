Ext.define("com.coremedia.cms.editor.sdk.premular.VersionComparisonMenuItemBase", function(VersionComparisonMenuItemBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.LifecycleStatus;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;
import ext.menu.Item;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class VersionComparisonMenuItemBase extends Item {
  private var versionInfoValueExpression:ValueExpression;
  private var iconClsValueExpression:ValueExpression;
  private var isSelectedValueExpression:ValueExpression;

  public*/ function VersionComparisonMenuItemBase$(config/*:VersionComparisonMenuItem = null*/) {if(arguments.length<=0)config=null;
    this.super$MSd2(config);
  }/*

  [Bindable]
  public var version:Version;

  [Bindable]
  public var premular:Premular;

  protected*/ function openVersionComparison()/*:void*/ {
    AS3.getBindable(this,"version") && AS3.getBindable(this,"premular").openInReadOnlyDocumentPanel(AS3.getBindable(this,"version"));
  }/*

  protected*/ function getVersionInfoValueExpression()/*:ValueExpression*/ {
    if (!this.versionInfoValueExpression$MSd2) {
      this.versionInfoValueExpression$MSd2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeVersionInfo"));
    }

    return this.versionInfoValueExpression$MSd2;
  }/*

  protected*/ function computeVersionInfo()/*:String*/ {
    if (!AS3.getBindable(this,"version").isLoaded()) {
      AS3.getBindable(this,"version").load();
      return undefined;
    }
    if (AS3.getBindable(this,"version").isDestroyed()) {
      return "";
    }

    var content/*:Content*/ = AS3.getBindable(this,"version").getContainingContent();
    if (content.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
      return undefined;
    }
    if (content.isDestroyed()) {
      return "";
    }

    var newestVersion/*:Boolean*/ = AS3.getBindable(this,"version").isLatestVersion();
    var latestPublished/*:Boolean*/ = AS3.getBindable(this,"version").isLatestPublishedVersion();
    var latestTranslated/*:Boolean*/ = !AS3.getBindable(this,"premular").isInVersionComparisonMode() &&
            AS3.getBindable(this,"version") === AS3.getBindable(this,"premular").getMasterVersionValueExpression().getValue();
    var toBeTranslated/*:Boolean*/ = !AS3.getBindable(this,"premular").isInVersionComparisonMode() &&
            AS3.getBindable(this,"version") === com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getVersionToBeTranslated(content);
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var derivedFrom/*:Boolean*/ = AS3.getBindable(this,"version") === sitesService.getMasterVersionOrDerivedFromVersion(AS3.getBindable(this,"premular").getContent());


    var pattern/*:String*/;
    if (latestTranslated) {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_latestTranslated_text');
    } else if (toBeTranslated) {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_toBeTranslated_text');
    } else if (latestPublished) {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_latestPublished_text');
    } else if (newestVersion) {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_newestVersion_text');
    } else if (derivedFrom) {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_derivedFrom_text');
    } else {
      pattern = this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'VersionComparisonMenuItem_text');
    }

    return com.coremedia.cms.editor.sdk.util.FormatUtil.format(pattern,
            AS3.getBindable(this,"version").getVersionNumber(),
            com.coremedia.ui.util.EncodingUtil.encodeForHTML(AS3.getBindable(this,"version").getEditor().getName()),
            com.coremedia.ui.util.EncodingUtil.encodeForHTML(Ext.Date.format(AS3.getBindable(this,"version").getEditionDate(),
                    this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dateFormat'))));
  }/*

  protected*/ function getIconClsValueExpression()/*:ValueExpression*/ {
    if (!this.iconClsValueExpression$MSd2) {
      this.iconClsValueExpression$MSd2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeIconCls$MSd2"));
    }

    return this.iconClsValueExpression$MSd2;
  }/*

  private*/ function computeIconCls()/*:String*/ {
    if (!AS3.getBindable(this,"version").isLoaded()) {
      AS3.getBindable(this,"version").load();
      return undefined;
    }

    if (AS3.getBindable(this,"version").isDestroyed()) {
      return "";
    }

    var isLatestPublishedVersion/*:Boolean*/ = AS3.getBindable(this,"version").isLatestPublishedVersion();
    var publisher/*:User*/ = AS3.getBindable(this,"version").getPublisher();
    if (isLatestPublishedVersion || publisher != null) {
      var iconCls/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForStatus(com.coremedia.cap.content.LifecycleStatus.PUBLISHED);
      if (!isLatestPublishedVersion) {
        iconCls += " was-published";
      }
      return iconCls;
    }
    return "";
  }/*

  protected*/ function getIsSelectedValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.isSelectedValueExpression$MSd2) {
      this.isSelectedValueExpression$MSd2 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return AS3.getBindable(this$,"version") === AS3.getBindable(this$,"premular").getReadOnlyContentObject();
      });
    }

    return this.isSelectedValueExpression$MSd2;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Item",
      versionInfoValueExpression$MSd2: null,
      iconClsValueExpression$MSd2: null,
      isSelectedValueExpression$MSd2: null,
      constructor: VersionComparisonMenuItemBase$,
      super$MSd2: function() {
        Ext.menu.Item.prototype.constructor.apply(this, arguments);
      },
      openVersionComparison: openVersionComparison,
      getVersionInfoValueExpression: getVersionInfoValueExpression,
      computeVersionInfo: computeVersionInfo,
      getIconClsValueExpression: getIconClsValueExpression,
      computeIconCls$MSd2: computeIconCls,
      getIsSelectedValueExpression: getIsSelectedValueExpression,
      config: {
        version: null,
        premular: null
      },
      requires: [
        "Ext.Date",
        "Ext.menu.Item",
        "com.coremedia.cap.content.LifecycleStatus",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil",
        "com.coremedia.cms.editor.sdk.util.FormatUtil"
      ]
    };
});
