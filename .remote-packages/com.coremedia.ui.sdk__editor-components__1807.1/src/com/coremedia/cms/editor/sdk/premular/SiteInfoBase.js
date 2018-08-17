Ext.define("com.coremedia.cms.editor.sdk.premular.SiteInfoBase", function(SiteInfoBase) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[PublicApi]
public class SiteInfoBase extends CollapsibleFormPanel {
  private var siteValueExpression:ValueExpression;

  public*/ function SiteInfoBase$(config/*:SiteInfo = null*/) {if(arguments.length<=0)config=null;
    this.super$0tGe(config);
  }/*

  internal*/ function getSiteValueExpression(config/*:SiteInfo*/)/*:ValueExpression*/ {
    if (!this.siteValueExpression$0tGe) {
      this.siteValueExpression$0tGe = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Site*/ {
        var content/*:Content*/ = config.bindTo.getValue();
        switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(content)) {
          case undefined: return undefined;
          case false: return null;
        }
        var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
        return sitesService.getSiteFor(content);
      });
    }
    return this.siteValueExpression$0tGe;
  }/*

  internal*/ function siteToName(site/*:Site*/)/*:String*/ {
    if (site) {
      return site.getName();
    } else {
      return "-";
    }
  }/*

  internal*/ function siteToLocale(site/*:Site*/)/*:String*/ {
    if (site) {
      return site.getLocale().getDisplayName();
    } else {
      return "-";
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
      metadata: {"": ["PublicApi"]},
      siteValueExpression$0tGe: null,
      constructor: SiteInfoBase$,
      super$0tGe: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel.prototype.constructor.apply(this, arguments);
      },
      getSiteValueExpression: getSiteValueExpression,
      siteToName: siteToName,
      siteToLocale: siteToLocale,
      requires: [
        "com.coremedia.cms.editor.sdk.premular.CollapsibleFormPanel",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
