Ext.define("com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl", function(ExtendedSitesServiceImpl) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;

public class ExtendedSitesServiceImpl extends SitesServiceImpl {

  private var sitesUnderConstructionValueExpression:ValueExpression;

  public*/ function getSitesUnderConstructionValueExpression()/*:ValueExpression*/ {
    if (!this.sitesUnderConstructionValueExpression$2K$U) {
      this.sitesUnderConstructionValueExpression$2K$U = com.coremedia.ui.data.ValueExpressionFactory.createFromValue({});
    }
    return this.sitesUnderConstructionValueExpression$2K$U;
  }/*

  protected override*/ function getSitesUnderConstruction()/*:Object*/ {
    return this.getSitesUnderConstructionValueExpression().getValue();
  }/*

  public*/ function addSiteUnderConstruction(site/*:Site*/)/*:void*/ {
    var oldValue/*:Object*/ = this.getSitesUnderConstructionValueExpression().getValue();
    var newValue/*:Object*/ = Ext.apply({}, oldValue);
    newValue[site.getId()] = site;

    this.getSitesUnderConstructionValueExpression().setValue(newValue);
  }/*

  public*/ function removeSiteUnderConstruction(site/*:Site*/)/*:void*/ {
    var oldValue/*:Object*/ = this.getSitesUnderConstructionValueExpression().getValue();
    var newValue/*:Object*/ = {};

    var siteId/*:String*/ = site.getId();

    for (var key/*:String*/ in oldValue) {
      if (oldValue.hasOwnProperty(key) && key !== siteId) {
        newValue[key] = oldValue[key];
      }
    }

    this.getSitesUnderConstructionValueExpression().setValue(newValue);
  }/*

}*/function ExtendedSitesServiceImpl$() {this.super$2K$U();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.SitesServiceImpl",
      sitesUnderConstructionValueExpression$2K$U: null,
      getSitesUnderConstructionValueExpression: getSitesUnderConstructionValueExpression,
      getSitesUnderConstruction: getSitesUnderConstruction,
      addSiteUnderConstruction: addSiteUnderConstruction,
      removeSiteUnderConstruction: removeSiteUnderConstruction,
      super$2K$U: function() {
        com.coremedia.cms.editor.sdk.sites.SitesServiceImpl.prototype.constructor.apply(this, arguments);
      },
      constructor: ExtendedSitesServiceImpl$,
      requires: [
        "Ext",
        "com.coremedia.cms.editor.sdk.sites.SitesServiceImpl",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
