Ext.define("com.coremedia.cms.editor.sdk.sites.SitesTreeBase", function(SitesTreeBase) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.ui.context.ComponentContextManager;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.TreeModel;

public class SitesTreeBase extends CommonSitesTreeBase {
  private var sitesTreeModel:TreeModel;
  private var currentSiteIdValueExpression:ValueExpression;

  public*/ function SitesTreeBase$(config/*:SitesTree = null*/) {if(arguments.length<=0)config=null;
    this.super$lZT$(config);
    this.expandAll();
  }/*

  protected*/ function getSitesTreeModel()/*:TreeModel*/ {
    if (!this.sitesTreeModel$lZT$) {
      this.sitesTreeModel$lZT$ = new com.coremedia.cms.editor.sdk.sites.SitesTreeModel(this.getSitesService());
    }
    return this.sitesTreeModel$lZT$;
  }/*

  protected*/ function getCurrentSiteIdValueExpression()/*:ValueExpression*/ {
    if (!this.currentSiteIdValueExpression$lZT$) {
      this.currentSiteIdValueExpression$lZT$ = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.sites.LocalizationManager.CURRENT_SITE_ID_VARIABLE_NAME);
    }
    return this.currentSiteIdValueExpression$lZT$;
  }/*

  protected*/ function getCurrentSiteValueExpression()/*:ValueExpression*/ {
    var sitesService/*:SitesService*/ = this.getSitesService();
    return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(this.getCurrentSiteIdValueExpression(),AS3.bind(
            sitesService,"getSite"), function (site/*:Site*/)/*:String*/ {
              return site ? site.getId() : null;
            });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase",
      sitesTreeModel$lZT$: null,
      currentSiteIdValueExpression$lZT$: null,
      constructor: SitesTreeBase$,
      super$lZT$: function() {
        com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase.prototype.constructor.apply(this, arguments);
      },
      getSitesTreeModel: getSitesTreeModel,
      getCurrentSiteIdValueExpression: getCurrentSiteIdValueExpression,
      getCurrentSiteValueExpression: getCurrentSiteValueExpression,
      requires: [
        "com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager",
        "com.coremedia.cms.editor.sdk.sites.SitesTreeModel"
      ]
    };
});
