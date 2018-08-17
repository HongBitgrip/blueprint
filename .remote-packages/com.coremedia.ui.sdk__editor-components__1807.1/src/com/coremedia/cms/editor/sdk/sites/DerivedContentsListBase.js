Ext.define("com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase", function(DerivedContentsListBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.undoc.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.form.FieldContainer;

[PublicApi]
public class DerivedContentsListBase extends FieldContainer {
  private var derivedContentsExpression:ValueExpression;

  public*/ function DerivedContentsListBase$(config/*:DerivedContentsList = null*/) {if(arguments.length<=0)config=null;
    this.super$F$BA(config);
  }/*

  internal*/ function getDerivedContentsExpression(bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.derivedContentsExpression$F$BA) {
      this.derivedContentsExpression$F$BA = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeDerivedContents$F$BA"), bindTo);
    }
    return this.derivedContentsExpression$F$BA;
  }/*

  private*/ function computeDerivedContents(bindTo/*:ValueExpression*/)/*:Array*/ {var this$=this;
    var content/*:com.coremedia.cap.content.Content*/ = bindTo.getValue();
    if (content === undefined) {
      return undefined;
    }
    var siteContents/*:Array*/ = com.coremedia.cms.editor.sdk.sites.ContentSiteUtil.getDerivedContentsAndSites(content);
    if (siteContents === undefined) {
      return undefined;
    }
    // Sort by locale display name first, then by content name, then by id.
    siteContents.sort(function(sc1/*:Object*/, sc2/*:Object*/)/*:Number*/ {
      var locale1/*:String*/ = this$.getLocaleDisplayName$F$BA(sc1.site);
      var locale2/*:String*/ = this$.getLocaleDisplayName$F$BA(sc2.site);
      var content1/*:com.coremedia.cap.content.Content*/ = AS3.cast(com.coremedia.cap.content.Content,sc1.content);
      var name1/*:String*/ = content1.getName();
      var content2/*:com.coremedia.cap.content.Content*/ = AS3.cast(com.coremedia.cap.content.Content,sc2.content);
      var name2/*:String*/ = content2.getName();
      return locale1.toLowerCase().localeCompare(locale2.toLocaleLowerCase()) ||
              locale1.localeCompare(locale2) ||
              name1.toLowerCase().localeCompare(name2.toLocaleLowerCase()) ||
              name1.localeCompare(name2) ||
              com.coremedia.cap.common.IdHelper.parseContentId(content1) - com.coremedia.cap.common.IdHelper.parseContentId(content2);
    });
    return siteContents.map(function(sc/*:Object*/)/*:com.coremedia.cap.content.Content*/ {
      return sc.content;
    });
  }/*

  internal*/ function getProviderTranslationStatus(content/*:com.coremedia.cap.content.Content*/)/*:String*/ {
    if (this.isInTranslation$F$BA(content)) {
      return com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.PSEUDO_STATE_IN_TRANSLATION;
    } else {
      return com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatus(content);
    }
  }/*

  private*/ function isInTranslation(content/*:com.coremedia.cap.content.Content*/)/*:Boolean*/ {
    var mergeVersions/*:Array*/ = AS3.cast(com.coremedia.cap.undoc.content.Content,content).getMergeVersions();
    return mergeVersions && mergeVersions.length > 0;
  }/*

  // TODO: consolidate with Blueprint's SiteUtil class
  internal*/ function getSiteLocaleNameFor(content/*:com.coremedia.cap.content.Content*/)/*:String*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
    if (site === undefined) {
      // not loaded
      return undefined;
    }
    return this.getLocaleDisplayName$F$BA(site);
  }/*

  private*/ function getLocaleDisplayName(site/*:Site*/)/*:String*/ {
    if (!site) {
      return '';
    }
    var locale/*:Locale*/ = site.getLocale();
    if (!locale) {
      return ''; // attributes of Site can never by "undefined"
    }
    return locale.getDisplayName();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      metadata: {"": ["PublicApi"]},
      derivedContentsExpression$F$BA: null,
      constructor: DerivedContentsListBase$,
      super$F$BA: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      getDerivedContentsExpression: getDerivedContentsExpression,
      computeDerivedContents$F$BA: computeDerivedContents,
      getProviderTranslationStatus: getProviderTranslationStatus,
      isInTranslation$F$BA: isInTranslation,
      getSiteLocaleNameFor: getSiteLocaleNameFor,
      getLocaleDisplayName$F$BA: getLocaleDisplayName,
      requires: [
        "Ext.form.FieldContainer",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.undoc.content.Content",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.ContentSiteUtil",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"
      ]
    };
});
