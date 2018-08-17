Ext.define("com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabActionBase", function(OpenSiteHomepageInTabActionBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.editorContext;

public class OpenSiteHomepageInTabActionBase extends ContentAction {
  public*/ function OpenSiteHomepageInTabActionBase$(config/*:OpenSiteHomepageInTabAction = null*/) {if(arguments.length<=0)config=null;
    this.super$BQ5y(AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'openSiteHomepageInTab', {handler:AS3.bind( this,"openSiteHomepageInTab$BQ5y")})));
  }/*

  private*/ function getSite(contents/*:Array*/)/*:Site*/ {
    if (!contents || contents.length !== 1) {
      return null;
    }
    var content/*:Content*/ =AS3.as( contents[0],  com.coremedia.cap.content.Content);
    if (!content) {
      return null;
    }
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(content);
    if (!site) {
      return null;
    }
    return content === site.getSiteRootFolder() ? site : null;
  }/*

  override protected*/ function isHiddenFor(contents/*:Array*/)/*:Boolean*/ {
    return !this.getSite$BQ5y(contents);
  }/*

  private*/ function openSiteHomepageInTab()/*:void*/ {
    var siteRootDocument/*:Content*/ = this.getSite$BQ5y(this.getContents()).getSiteRootDocument();
    com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(siteRootDocument);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      constructor: OpenSiteHomepageInTabActionBase$,
      super$BQ5y: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      getSite$BQ5y: getSite,
      isHiddenFor: isHiddenFor,
      openSiteHomepageInTab$BQ5y: openSiteHomepageInTab,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction"
      ]
    };
});
