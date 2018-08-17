Ext.define("com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase", function(CommonSitesTreeBase) {/*package com.coremedia.cms.editor.sdk.sites {

import ext.tree.TreePanel;

public class CommonSitesTreeBase extends TreePanel {
  private var sitesService:ExtendedSitesServiceImpl;

  public*/ function CommonSitesTreeBase$(config/*:CommonSitesTreeBase = null*/) {if(arguments.length<=0)config=null;
    this.super$bf1K(config);
  }/*

  protected*/ function getSitesService()/*:ExtendedSitesServiceImpl*/ {
    if (!this.sitesService$bf1K) {
      this.sitesService$bf1K = new com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl();
    }
    return this.sitesService$bf1K;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tree.Panel",
      sitesService$bf1K: null,
      constructor: CommonSitesTreeBase$,
      super$bf1K: function() {
        Ext.tree.Panel.prototype.constructor.apply(this, arguments);
      },
      getSitesService: getSitesService,
      requires: ["Ext.tree.Panel"],
      uses: ["com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl"]
    };
});
