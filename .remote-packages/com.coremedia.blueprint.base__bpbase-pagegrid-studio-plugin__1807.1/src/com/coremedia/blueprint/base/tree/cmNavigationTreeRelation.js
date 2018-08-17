Ext.define("com.coremedia.blueprint.base.tree.cmNavigationTreeRelation", function(cmNavigationTreeRelation) {/*package com.coremedia.blueprint.base.tree {
import com.coremedia.cms.editor.sdk.sites.SiteRootChildrenLinkListContentTreeRelation;
import com.coremedia.ui.data.TreeRelation;

/**
 * The Blueprint's navigation tree relation.
 * /
public const cmNavigationTreeRelation:TreeRelation
        =*/function cmNavigationTreeRelation_(){return( new com.coremedia.cms.editor.sdk.sites.SiteRootChildrenLinkListContentTreeRelation('CMNavigation', 'children'));}/*;

}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: cmNavigationTreeRelation_,
      requires: ["com.coremedia.cms.editor.sdk.sites.SiteRootChildrenLinkListContentTreeRelation"]
    };
});
