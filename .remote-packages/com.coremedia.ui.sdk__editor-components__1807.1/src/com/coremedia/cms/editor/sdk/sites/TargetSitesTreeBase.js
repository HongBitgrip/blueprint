Ext.define("com.coremedia.cms.editor.sdk.sites.TargetSitesTreeBase", function(TargetSitesTreeBase) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.TreeModel;

import ext.data.NodeInterface;
import ext.tree.TreePanel;

public class TargetSitesTreeBase extends CommonSitesTreeBase {
  private var sitesTreeModel:TreeModel;

  [ExtConfig]
  public var rootIdValueExpression:ValueExpression;

  public*/ function TargetSitesTreeBase$(config/*:TargetSitesTreeBase = null*/) {if(arguments.length<=0)config=null;
    this.super$SsPk(config);
    this.addListener("itemappend", TargetSitesTreeBase.itemAppended);
  }/*

  protected*/ function getSitesTreeModel(config/*:TargetSitesTreeBase*/)/*:TreeModel*/ {
    if (!this.sitesTreeModel$SsPk) {
      this.sitesTreeModel$SsPk = new com.coremedia.cms.editor.sdk.sites.TargetSitesTreeModel(this.getSitesService(), config.rootIdValueExpression);
    }
    return this.sitesTreeModel$SsPk;
  }/*

  protected static*/ function itemAppended$static(me/*:TreePanel*/, node/*:NodeInterface*/)/*:void*/ {
    node.expand();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase",
      sitesTreeModel$SsPk: null,
      rootIdValueExpression: null,
      constructor: TargetSitesTreeBase$,
      super$SsPk: function() {
        com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase.prototype.constructor.apply(this, arguments);
      },
      getSitesTreeModel: getSitesTreeModel,
      statics: {itemAppended: itemAppended$static},
      requires: ["com.coremedia.cms.editor.sdk.sites.CommonSitesTreeBase"],
      uses: ["com.coremedia.cms.editor.sdk.sites.TargetSitesTreeModel"]
    };
});
