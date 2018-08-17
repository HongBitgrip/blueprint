Ext.define("com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentActionBase", function(SetPreferredSiteContentActionBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.cms.editor.sdk.editorContext;

[PublicApi]
public class SetPreferredSiteContentActionBase extends ContentAction {
  public*/ function SetPreferredSiteContentActionBase$(config/*:SetPreferredSiteContentAction = null*/) {if(arguments.length<=0)config=null;
    this.super$bqs_(AS3.cast(com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'setPreferredSite', {handler:AS3.bind( this,"setPreferredSite$bqs_")})));
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
    return !this.getSite$bqs_(contents);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    var site/*:Site*/ = this.getSite$bqs_(contents);
    return !site || site.getId() === com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteId();
  }/*

  private*/ function setPreferredSite()/*:void*/ {
    var site/*:Site*/ = this.getSite$bqs_(this.getContents());
    if (site) {
      com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSiteIdExpression().setValue(site.getId());
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {"": ["PublicApi"]},
      constructor: SetPreferredSiteContentActionBase$,
      super$bqs_: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      getSite$bqs_: getSite,
      isHiddenFor: isHiddenFor,
      isDisabledFor: isDisabledFor,
      setPreferredSite$bqs_: setPreferredSite,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction"
      ]
    };
});
