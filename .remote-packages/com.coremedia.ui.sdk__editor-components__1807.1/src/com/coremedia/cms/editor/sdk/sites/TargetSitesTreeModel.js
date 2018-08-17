Ext.define("com.coremedia.cms.editor.sdk.sites.TargetSitesTreeModel", function(TargetSitesTreeModel) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.NodeChildren;

public final class TargetSitesTreeModel extends SitesTreeModel {

  private var rootIdValueExpression:ValueExpression;

  public*/ function TargetSitesTreeModel$(sitesService/*:SitesService*/, rootIdValueExpression/*:ValueExpression*/) {
    this.rootIdValueExpression$ceyi = rootIdValueExpression;
    this.super$ceyi(sitesService);
  }/*

  override protected*/ function includeChild(site/*:Site*/)/*:Boolean*/ {
    return site.isSynchronizationTargetSite();
  }/*

  override public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    if (!nodeId) {
      nodeId = com.coremedia.cms.editor.sdk.sites.SitesTreeModel.ARTIFICIAL_ROOT_ID;
    }

    if (nodeId === com.coremedia.cms.editor.sdk.sites.SitesTreeModel.ARTIFICIAL_ROOT_ID && this.rootIdValueExpression$ceyi) {
      var rootId/*:String*/ = this.rootIdValueExpression$ceyi.getValue();
      if (rootId !== null) {
        return this.getChildren(rootId);
      }
    }

    return com.coremedia.cms.editor.sdk.sites.SitesTreeModel.prototype.getChildren.call(this,nodeId);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.SitesTreeModel",
      rootIdValueExpression$ceyi: null,
      constructor: TargetSitesTreeModel$,
      super$ceyi: function() {
        com.coremedia.cms.editor.sdk.sites.SitesTreeModel.prototype.constructor.apply(this, arguments);
      },
      includeChild: includeChild,
      getChildren: getChildren,
      requires: ["com.coremedia.cms.editor.sdk.sites.SitesTreeModel"]
    };
});
