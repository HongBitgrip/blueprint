Ext.define("com.coremedia.cms.editor.sdk.util.OpenHomepageActionBase", function(OpenHomepageActionBase) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;

import ext.Action;

/**
 * Utility action to open the home page of the preferred site.
 * /
public class OpenHomepageActionBase extends Action {

  public*/ function OpenHomepageActionBase$(config/*:OpenHomepageAction = null*/) {if(arguments.length<=0)config=null;
    this.super$$21n(config);
    this.setHandler(AS3.bind(this,"openHomepage$$21n"), this);
  }/*

  private*/ function openHomepage()/*:void*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if(site && site.getSiteRootDocument()) {
      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(site.getSiteRootDocument());
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      constructor: OpenHomepageActionBase$,
      super$$21n: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      openHomepage$$21n: openHomepage,
      requires: ["Ext.Action"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
