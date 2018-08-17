Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel", function(ContentTreeModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.util.AccessControlUtil;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.NodeChildren;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ContentTreeModel implements CompoundChildTreeModel {
  private var enabled:Boolean = true;

  public*/ function ContentTreeModel$() {
  }/*


  public*/ function setEnabled(enabled/*:Boolean*/)/*:void*/ {
    this.enabled$Znyn = enabled;
  }/*

  public*/ function isEnabled()/*:Boolean*/ {
    return this.enabled$Znyn;
  }/*

  public*/ function rename(model/*:Object*/, newName/*:String*/, oldName/*:String*/, callback/*:Function*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(model, function(extension/*:CollectionViewExtension*/)/*:void*/ {
      extension && extension.getContentTreeRelation().rename(AS3.as(model,  com.coremedia.cap.content.Content), newName, callback);
    });
  }/*

  public*/ function isEditable(model/*:Object*/)/*:Boolean*/ {
    return true;
  }/*

  public*/ function getRootId()/*:String*/ {
    throw new AS3.Error("must be implemented by subclass");
  }/*

  public*/ function isRootVisible()/*:Boolean*/ {
    return true;
  }/*

  public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    return this.getContentNodeState(nodeId);
  }/*

  public*/ function getNodeId(model/*:Object*/)/*:String*/ {
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    return content && content.getUriPath();
  }/*

  public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(nodeId),  com.coremedia.cap.content.Content);
  }/*

  protected*/ function getVisibleRootModels()/*:Array*/ {
    return [this.getRoot$Znyn()];
  }/*

  private*/ function getRoot()/* :Object*/ {
    return this.getNodeModel(this.getRootId());
  }/*

  public static*/ function getParent$static(content/*:Content*/)/*:Content*/ {
    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(content);
    if (extension === undefined) {
      return undefined;
    }
    return extension && extension.getContentTreeRelation().getParent(content);
  }/*

  public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    var nodeModel/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    if (nodeModel) {
      if (nodeModel.isDocument()) {
        return "content-type-xs " + com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(nodeModel.getType());
      }
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'CollectionView_folder_icon');
  }/*

  public*/ function getText(nodeId/*:String*/)/*:String*/ {
    var model/*:Object*/ = this.getNodeModel(nodeId);
    if(model === undefined) {
      return undefined;
    }
    return (AS3.as(model,  com.coremedia.cap.content.Content)).getName();
  }/*

  protected static*/ function getChildModels$static(content/*:Content*/)/*:Array*/ {
    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(content);
    if (extension === undefined) {
      return undefined;
    }
    if (!extension) {
      return [];
    }
    return extension.getContentTreeRelation().getSubFolders(content);
  }/*

  public*/ function getIdPath(nodeId/*:String*/)/*:Array*/ {
    return this.getIdPathFromModel(this.getNodeModel(nodeId));
  }/*

  public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (!content) {
      // No path exists.
      return null;
    }
    if(!content.isLoaded()) {
      content.load();
      return undefined;
    }

    switch (content.isDeleted()) {
      case undefined:
        return undefined;
      case true:
        return null;
    }
    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(content);
    if (extension === undefined) {
      return undefined;
    }
    if (!extension) {
      return null;
    }

    var contentTreeRelation/*:ContentTreeRelation*/ = extension.getContentTreeRelation();
    if (!contentTreeRelation.isFolderNode(content)) {
      content = contentTreeRelation.getParent(content);
    }
    var path/*:Array*/ = [];
    var visibleRoots/*:Array*/ = this.getVisibleRootModels();
    while (content) {
      if (content.isDeleted()) {
        // No path exists.
        return null;
      }
      path.push(this.getNodeId(content));
      if (visibleRoots.indexOf(content) !== -1) {
        break;
      }
      content = ContentTreeModel.getParent(content);
      if (content === undefined) {
        // The path has not yet been loaded.
        return undefined;
      }
      if (!content) {
        return null;
      }
    }
    return path.reverse();
  }/*

  protected static*/ function isUndefined$static(value/*:**/)/*:Boolean*/ {
    return value === undefined;
  }/*

  public*/ function getContentNodeState(nodeId/*:String*/)/*:NodeChildren*/ {
    var content/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    var subFolders/*:Array*/ = ContentTreeModel.getChildModels(content);
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

    var rootModels/*:Array*/ = this.getVisibleRootModels();
    for (var i/*:uint*/ = 0; i < readableSubFolders.length; i++) {
      if (rootModels.indexOf(readableSubFolders[i]) === -1 && readableSubFolders[i] !== baseHomeFolder) {
        var childId/*:String*/ = this.getNodeId(readableSubFolders[i]);
        filteredChildIds.push(childId);
        var childText/*:String*/ = this.getText(childId);
        if(childText === undefined) {
          return undefined;
        }

        filteredTextsByChildId[childId] = textsByChildId[childId] || childText;
        filteredIconsByChildId[childId] = this.getIconCls(childId);
        filteredClassByChildId[childId] = this.getTextCls(nodeId);
      }
    }
    return new com.coremedia.ui.models.NodeChildren(filteredChildIds, filteredTextsByChildId, filteredIconsByChildId, filteredClassByChildId);
  }/*

  protected*/ function getBaseHomeFolder()/*:Content*/ {
    return com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getBaseHomeFolder();
  }/*

  protected*/ function computeTextByChildId(childrenByText/*:Object*/)/*:Object*/ {
    var textByChildId/*:Object*/ = {};
    for (var childText/*:String*/ in childrenByText) {
      var child/*:Content*/ =AS3.as( childrenByText[childText],  com.coremedia.cap.content.Content);
      if (child) {
        var nodeId/*:String*/ = this.getNodeId(child);
        textByChildId[nodeId] = childText;
      }
    }
    return textByChildId;
  }/*

  public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    var nodeModel/*:Object*/ = this.getNodeModel(nodeId);
    if(nodeModel === undefined) {
      return undefined;
    }
    var content/*:Content*/ =AS3.as( nodeModel,  com.coremedia.cap.content.Content);
    return com.coremedia.cms.editor.sdk.util.AccessControlUtil.calculateCSSClasses(content);
  }/*

  protected static*/ function getSiteRootFolder$static()/*:Content*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (!site) {
      return site === null ? null : undefined;
    }
    if (site.getName() === undefined || site.getLocale() === undefined || site.getLocale().getDisplayName() === undefined) {
      return undefined;
    }
    return site.getSiteRootFolder();
  }/*


  public*/ function getTreeId()/*:String*/ {
    return com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.TREE_MODEL_ID;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.collectionview.tree.CompoundChildTreeModel"],
      enabled$Znyn: true,
      constructor: ContentTreeModel$,
      setEnabled: setEnabled,
      isEnabled: isEnabled,
      rename: rename,
      isEditable: isEditable,
      getRootId: getRootId,
      isRootVisible: isRootVisible,
      getChildren: getChildren,
      getNodeId: getNodeId,
      getNodeModel: getNodeModel,
      getVisibleRootModels: getVisibleRootModels,
      getRoot$Znyn: getRoot,
      getIconCls: getIconCls,
      getText: getText,
      getIdPath: getIdPath,
      getIdPathFromModel: getIdPathFromModel,
      getContentNodeState: getContentNodeState,
      getBaseHomeFolder: getBaseHomeFolder,
      computeTextByChildId: computeTextByChildId,
      getTextCls: getTextCls,
      getTreeId: getTreeId,
      statics: {
        getParent: getParent$static,
        getChildModels: getChildModels$static,
        isUndefined: isUndefined$static,
        getSiteRootFolder: getSiteRootFolder$static
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.tree.CompoundChildTreeModel",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.NodeChildren",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.AccessControlUtil",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
