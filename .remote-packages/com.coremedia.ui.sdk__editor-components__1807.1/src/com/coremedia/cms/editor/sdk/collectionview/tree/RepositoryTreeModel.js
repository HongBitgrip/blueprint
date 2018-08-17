Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.RepositoryTreeModel", function(RepositoryTreeModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.authorization.impl.AccessControlImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.ContentSiteUtil;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.NodeChildren;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RepositoryTreeModel extends ContentTreeModel {

  public static const ID_PREFIX:String = "content/";

  public static const REPOSITORY_ROOT_ID:String =*/function REPOSITORY_ROOT_ID$static_(){RepositoryTreeModel.REPOSITORY_ROOT_ID=( RepositoryTreeModel.ID_PREFIX + "root");}/*;
  private static const*/var REPOSITORY_ROOT_TEXT$static/*:String*/ = "CMS";/*

  internal static const PREFERRED_SITE_LINK_NODE_ID_PREFIX:String =*/function PREFERRED_SITE_LINK_NODE_ID_PREFIX$static_(){RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX=( RepositoryTreeModel.ID_PREFIX + "site-");}/*;

  private var extraRootModels:Array =*/function extraRootModels_(){this.extraRootModels$ZOmY=( []);}/*;
  private var iconClsById:Object =*/function iconClsById_(){this.iconClsById$ZOmY=( {});}/*;

  public*/ function RepositoryTreeModel$() {this.super$ZOmY();extraRootModels_.call(this);iconClsById_.call(this);
    this.setIconCls(getUserHomeFolder$static(), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_userHomeFolder_icon'));
  }/*

  private static*/ function getUserHomeFolder$static()/*:Content*/ {
    return com.coremedia.cap.common.SESSION.getUser().getHomeFolder();
  }/*

  private static*/ function getRepositoryRootFolder$static()/*:Content*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
  }/*

  override public*/ function isEditable(model/*:Object*/)/*:Boolean*/ {
    // Allow editing whenever the content is shown as writable.
    // One might use the stricter check mayRename(), but that
    // would block write attempts without giving the user any
    // hint that something might be wrong. Better allow editing
    // and complain later.

    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    return content && AS3.cast(com.coremedia.cap.content.authorization.impl.AccessControlImpl,content.getRepository().getAccessControl()).isWritable(content);
  }/*

  public*/ function addExtraRootModel(content/*:Content*/)/*:void*/ {
    this.extraRootModels$ZOmY.push(content);
  }/*

  public*/ function setIconCls(model/*:Content*/, iconCls/*:String*/)/*:void*/ {
    this.iconClsById$ZOmY[this.getNodeId(model)] = iconCls;
  }/*

  override public*/ function getRootId()/*:String*/ {
    return RepositoryTreeModel.REPOSITORY_ROOT_ID;
  }/*

  override public*/ function isRootVisible()/*:Boolean*/ {
    return false;
  }/*

  private static*/ function isPreferredSiteLink$static(nodeId/*:String*/)/*:Boolean*/ {
    return ! !nodeId && nodeId.indexOf(RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX) === 0;
  }/*

  override public*/ function getText(nodeId/*:String*/)/*:String*/ {
    if (nodeId === RepositoryTreeModel.REPOSITORY_ROOT_ID) {
      return REPOSITORY_ROOT_TEXT$static;
    }
    else if (isPreferredSiteLink$static(nodeId)) {
      nodeId = nodeId.substr(RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX.length);
    }
    else if (nodeId === this.getNodeId(getRepositoryRootFolder$static())) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_contentRootFolder_treenode_title');
    }
    var content/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (site && site.getSiteRootFolder() === content) {
      return [site.getName(), site.getLocale().getDisplayName()].join(' - ');
    }
    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getText.call(this,nodeId);
  }/*

  override public*/ function getContentNodeState(nodeId/*:String*/)/*:NodeChildren*/ {
    if (isPreferredSiteLink$static(nodeId)) {
      // this is the "real" site folder: suppress children!
      return new com.coremedia.ui.models.NodeChildren([], {}, {});
    }

    var content/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    var subFolders/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.getChildModels(content);
    if (!subFolders) {
      return undefined;
    }
    var accessControl/*:AccessControl*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getAccessControl();
    var readableSubFolders/*:**/ = accessControl.filterReadableContents(subFolders);
    if (!readableSubFolders) {
      return undefined;
    }
    var childrenByText/*:Object*/ = content.getChildrenByName();
    if (!childrenByText) {
      // Should not happen, because subfolders are loaded, but anyway...
      return undefined;
    }

    var textsByChildId/*:Object*/ = this.computeTextByChildId(childrenByText);
    var filteredChildIds/*:Array*/ = [];
    var filteredTextsByChildId/*:Object*/ = {};
    var filteredIconsByChildId/*:Object*/ = {};
    var filteredClassByChildId/*:Object*/ = {};

    var baseHomeFolder/*:Content*/ = this.getBaseHomeFolder();

    var preferredSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    var preferredSiteRootFolder/*:Content*/ = preferredSite && preferredSite.getSiteRootFolder();

    for (var i/*:uint*/ = 0; i < readableSubFolders.length; i++) {
      if (this.extraRootModels$ZOmY.indexOf(readableSubFolders[i]) === -1 && readableSubFolders[i] !== baseHomeFolder) {
        var childId/*:String*/ = readableSubFolders[i] === preferredSiteRootFolder ? getPreferredSiteLinkNodeId$static(preferredSiteRootFolder) : this.getNodeId(readableSubFolders[i]);
        filteredChildIds.push(childId);
        filteredTextsByChildId[childId] = textsByChildId[childId] || this.getText(childId);
        filteredIconsByChildId[childId] = this.getIconCls(childId);
        filteredClassByChildId[childId] = this.getTextCls(childId);
      }
    }
    return new com.coremedia.ui.models.NodeChildren(filteredChildIds, filteredTextsByChildId, filteredIconsByChildId, filteredClassByChildId);
  }/*

  override public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    if (isPreferredSiteLink$static(nodeId)) {
      nodeId = nodeId.substr(RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX.length);
    }
    var nodeModel/*:Object*/ = this.getNodeModel(nodeId);
    var content/*:Content*/ =AS3.as( nodeModel,  com.coremedia.cap.content.Content);
    return com.coremedia.cms.editor.sdk.util.AccessControlUtil.calculateCSSClasses(content);
  }/*


  override public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    if (isPreferredSiteLink$static(nodeId)) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_preferredSiteLink_icon');
    }

    var nodeModel/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    if (nodeModel && nodeModel.isFolder()) {
      var specialIconCls/*:String*/ = this.iconClsById$ZOmY[nodeId];
      if (specialIconCls) {
        return specialIconCls;
      }

      var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
      var sites/*:Array*/ = sitesService.getSites();

      for/* each*/ (var $1=0;$1</* in*/ sites.length;++$1) {var site/*:Site*/ =sites[$1];
        if (site.getSiteRootFolder() === nodeModel) {
          return com.coremedia.cms.editor.sdk.sites.ContentSiteUtil.getSiteIconCls(site);
        }
      }
    }
    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getIconCls.call(this,nodeId);
  }/*

  override public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    if (nodeId === RepositoryTreeModel.REPOSITORY_ROOT_ID) {
      return this.getRepositoryRootNodeState$ZOmY();
    }
    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getChildren.call(this,nodeId);
  }/*

  private*/ function getRootNodeId(model/*:Object*/)/*:String*/ {
    if (model == RepositoryTreeModel.REPOSITORY_ROOT_ID) {
      return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot().getUriPath();
    }
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (content && content.isFolder()) {
      return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getNodeId.call(this,model);
    }
    return null;
  }/*

  override public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    if (isPreferredSiteLink$static(nodeId)) {
      var siteUriPath/*:String*/ = nodeId.substr(RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX.length);
      return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(siteUriPath),  com.coremedia.cap.content.Content);
    }
    if (nodeId === RepositoryTreeModel.REPOSITORY_ROOT_ID) {
      return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getRoot();
    }
    var content/*:Content*/ =AS3.as( com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getNodeModel.call(this,nodeId),  com.coremedia.cap.content.Content);
    if(content && content.isFolder()) {
      return content;
    }
    return null;
  }/*


  override public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (!content) {
      // No path exists.
      return null;
    }
    switch (content.isDeleted()) {
      case undefined:
        return undefined;
      case true:
        return null;
    }
    if (content.isDocument()) {
      content = content.getParent();
      if (content === undefined) {
        return undefined;
      }
    }
    var path/*:Array*/ = com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getIdPathFromModel.call(this,content);
    if(!path) {
      return undefined;
    }
    return [RepositoryTreeModel.REPOSITORY_ROOT_ID].concat(path);
  }/*

  private*/ function getRepositoryRootNodeState()/*:NodeChildren*/ {
    var rootModels/*:Array*/ = this.getVisibleRootModels();
    if (rootModels.some(com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.isUndefined)) {
      return undefined;
    }
    var childIds/*:Array*/ = [];
    var textsByChildId/*:Object*/ = {};
    var iconsByChildId/*:Object*/ = {};
    var classByChildId/*:Object*/ = {};
    for/* each*/ (var $1=0;$1</* in*/ rootModels.length;++$1) {var rootModel/*:Object*/ =rootModels[$1];
      if (rootModel) {
        var childId/*:String*/ = this.getRootNodeId$ZOmY(rootModel);
        childIds.push(childId);
        textsByChildId[childId] = this.getText(childId);
        iconsByChildId[childId] = this.getIconCls(childId);
        classByChildId[childId] = this.getTextCls(childId);
      }
    }
    return new com.coremedia.ui.models.NodeChildren(
            childIds,
            textsByChildId,
            iconsByChildId,
            classByChildId);
  }/*

  override protected*/ function getVisibleRootModels()/*:Array*/ {
    var result/*:Array*/ = [];
    result.push(getUserHomeFolder$static());
    var siteRootFolder/*:Content*/ = com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.getSiteRootFolder();
    if (siteRootFolder) {
      result.push(siteRootFolder);
    }
    result = result.concat(this.extraRootModels$ZOmY);
    result.push(getRepositoryRootFolder$static());
    return result;
  }/*

  private static*/ function getPreferredSiteLinkNodeId$static(siteRootFolder/*:Content*/)/*:String*/ {
    return RepositoryTreeModel.PREFERRED_SITE_LINK_NODE_ID_PREFIX + siteRootFolder.getUriPath();
  }/*

  public*/ function toString()/*:String*/ {
    return RepositoryTreeModel.ID_PREFIX;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel",
      constructor: RepositoryTreeModel$,
      super$ZOmY: function() {
        com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.constructor.apply(this, arguments);
      },
      isEditable: isEditable,
      addExtraRootModel: addExtraRootModel,
      setIconCls: setIconCls,
      getRootId: getRootId,
      isRootVisible: isRootVisible,
      getText: getText,
      getContentNodeState: getContentNodeState,
      getTextCls: getTextCls,
      getIconCls: getIconCls,
      getChildren: getChildren,
      getRootNodeId$ZOmY: getRootNodeId,
      getNodeModel: getNodeModel,
      getIdPathFromModel: getIdPathFromModel,
      getRepositoryRootNodeState$ZOmY: getRepositoryRootNodeState,
      getVisibleRootModels: getVisibleRootModels,
      toString: toString,
      statics: {
        ID_PREFIX: "content/",
        REPOSITORY_ROOT_ID: undefined,
        PREFERRED_SITE_LINK_NODE_ID_PREFIX: undefined,
        __initStatics__: function() {
          REPOSITORY_ROOT_ID$static_();
          PREFERRED_SITE_LINK_NODE_ID_PREFIX$static_();
        }
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.authorization.impl.AccessControlImpl",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.NodeChildren",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.sites.ContentSiteUtil",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil"
      ]
    };
});
