Ext.define("com.coremedia.cms.editor.sdk.sites.SitesTreeModel", function(SitesTreeModel) {/*package com.coremedia.cms.editor.sdk.sites {
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class SitesTreeModel implements TreeModel {

  public static const ARTIFICIAL_ROOT_ID:String = "root";

  private var sitesService:SitesService;

  public*/ function SitesTreeModel$(sitesService/*:SitesService*/) {
    this.sitesService$gU0x = sitesService;/*
    super()*/;
  }/*

  protected*/ function getSitesService()/*:SitesService*/ {
    return this.sitesService$gU0x;
  }/*

  public*/ function getRootId()/*:String*/ {
    return SitesTreeModel.ARTIFICIAL_ROOT_ID;
  }/*

  public*/ function isRootVisible()/*:Boolean*/ {
    return false;
  }/*

  public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var site/*:Site*/ =AS3.as( model,  com.coremedia.cms.editor.sdk.sites.Site);
    if (!site) {
      return [];
    }

    var path/*:Array*/ = [site.getId()];

    var currentSite/*:Site*/ = site;
    while (currentSite) {
      var master/*:Site*/ = currentSite.getMasterSite();
      if (master === undefined) {
        return undefined;
      }

      master && path.push(master.getId());
      currentSite = master;
    }

    return path.reverse();
  }/*

  private static*/ function computeNodeText$static(site/*:Site*/)/*:String*/ {
    var displayName/*:String*/ = site.getLocale().getDisplayName();
    var languageTag/*:String*/ = site.getLocale().getLanguageTag();
    var name/*:String*/ = site.getName();
    if (site.getMasterSite()) {
      return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Tree_site_child_name_pattern'), name, languageTag, displayName);
    } else {
      return Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Tree_site_topLevel_name_pattern'), name, languageTag, displayName);
    }
  }/*

  public*/ function getText(nodeId/*:String*/)/*:String*/ {
    if (nodeId === SitesTreeModel.ARTIFICIAL_ROOT_ID) {
      return "";
    }

    var sites/*:Object*/ = this.sitesService$gU0x.getSitesById();
    if (!sites) {
      return undefined;
    }

    var site/*:Site*/ = sites[nodeId];
    if (!site) {
      return "";
    }

    return computeNodeText$static(site);
  }/*

  public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    // Plain CSS rules are used to render icons
    return undefined;
  }/*

  public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    return "";
  }/*

  public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    var sites/*:Object*/ = this.sitesService$gU0x.getSitesById();
    if (!sites) {
      return undefined;
    }

    var isArtificialRoot/*:Boolean*/ = nodeId === SitesTreeModel.ARTIFICIAL_ROOT_ID;
    var expectedMasterSiteId/*:String*/ = isArtificialRoot ? null : nodeId;
    var childIds/*:Array*/ = [];
    var iconsByChildId/*:Object*/ = {};
    var textsByChildId/*:Object*/ = {};
    var isLeafByChildId/*:Object*/ = {};
    for/* each*/ (var $1 in sites) {var site/*:SiteImpl*/ =sites[$1];
      if (site.getMasterSiteId() === expectedMasterSiteId && this.includeChild(site)) {
        var id/*:String*/ = site.getId();
        childIds.push(id);
        textsByChildId[id] = computeNodeText$static(site);
        iconsByChildId[id] = com.coremedia.cms.editor.sdk.sites.ContentSiteUtil.getSiteIconCls(site);
        isLeafByChildId[id] = site.isUnderConstruction();
      }
    }
    childIds.sort(function (id1/*:String*/, id2/*:String*/)/*:Boolean*/ {
      var text1/*:String*/ = textsByChildId[id1];
      var text2/*:String*/ = textsByChildId[id2];
      if (text1 < text2) {
        return -1;
      } else if (text1 > text2) {
        return 1;
      } else {
        return 0;
      }
    });

    return new com.coremedia.ui.models.NodeChildren(childIds, textsByChildId, iconsByChildId, null, isLeafByChildId);
  }/*

  //noinspection JSMethodCanBeStatic
  protected*/ function includeChild(site/*:Site*/)/*:Boolean*/ {
    return true;
  }/*

  public*/ function getIdPath(nodeId/*:String*/)/*:Array*/ {
    if (nodeId == SitesTreeModel.ARTIFICIAL_ROOT_ID) {
      return [SitesTreeModel.ARTIFICIAL_ROOT_ID];
    }

    var sitesById/*:Object*/ = this.sitesService$gU0x.getSitesById();
    if (!sitesById) {
      return undefined;
    }

    var site/*:SiteImpl*/ = sitesById[nodeId];
    if (!site) {
      return [SitesTreeModel.ARTIFICIAL_ROOT_ID, nodeId];
    }

    return [SitesTreeModel.ARTIFICIAL_ROOT_ID].concat(site.getAllMasterSiteIds());
  }/*


  public*/ function getNodeId(entity/*:Object*/)/*:String*/ {
    var site/*:Site*/ = (AS3.as(entity,  com.coremedia.cms.editor.sdk.sites.Site));
    return site && site.getId();
  }/*

  public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    if (nodeId === SitesTreeModel.ARTIFICIAL_ROOT_ID) {
      return undefined;
    }

    var sites/*:Object*/ = this.sitesService$gU0x.getSitesById();
    if (!sites) {
      return undefined;
    }

    return sites[nodeId];
  }/*

  public*/ function isEditable(model/*:Object*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function rename(model/*:Object*/, newName/*:String*/, oldName/*:String*/, callback/*:Function*/)/*:void*/ {
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.TreeModel"],
      sitesService$gU0x: null,
      constructor: SitesTreeModel$,
      getSitesService: getSitesService,
      getRootId: getRootId,
      isRootVisible: isRootVisible,
      getIdPathFromModel: getIdPathFromModel,
      getText: getText,
      getIconCls: getIconCls,
      getTextCls: getTextCls,
      getChildren: getChildren,
      includeChild: includeChild,
      getIdPath: getIdPath,
      getNodeId: getNodeId,
      getNodeModel: getNodeModel,
      isEditable: isEditable,
      rename: rename,
      statics: {ARTIFICIAL_ROOT_ID: "root"},
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.models.NodeChildren",
        "com.coremedia.ui.models.TreeModel",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.sites.ContentSiteUtil",
        "com.coremedia.cms.editor.sdk.sites.Site"
      ]
    };
});
