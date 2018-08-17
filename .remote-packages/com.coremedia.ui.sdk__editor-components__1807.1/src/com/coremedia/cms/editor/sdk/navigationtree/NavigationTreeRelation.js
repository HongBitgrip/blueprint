Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation", function(NavigationTreeRelation) {/*package com.coremedia.cms.editor.sdk.navigationtree {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.MessageBox;
import ext.StringUtil;

import mx.resources.ResourceManager;

public class NavigationTreeRelation implements ContentTreeRelation {

  public static const NAVIGATION_DOCUMENT_TYPE:String =*/function NAVIGATION_DOCUMENT_TYPE$static_(){NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_document_type'));}/*;
  public static const CHILDREN_PROPERTY:String =*/function CHILDREN_PROPERTY$static_(){NavigationTreeRelation.CHILDREN_PROPERTY=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_children_property'));}/*;

  private var showHiddenItems:Boolean = false;

  public*/ function NavigationTreeRelation$() {var this$=this;
    com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase.getHiddenStatusValueExpression().loadValue(function(showHidden/*:Boolean*/)/*:void*/ {
      if(showHidden) {
        this$.toggleView();
      }
    });
  }/*

  public*/ function toggleView()/*:Boolean*/ {
    this.showHiddenItems$1$wG = !this.showHiddenItems$1$wG;
    return this.showHiddenItems$1$wG;
  }/*

  public*/ function folderNodeType()/*:String*/ {
    return getFolderType$static();
  }/*

  public*/ function leafNodeType()/*:String*/ {
    return "Document_";
  }/*

  public*/ function isFolderNode(content/*:Content*/)/*:Boolean*/ {
    return content.getType().getName() == getFolderType$static();
  }/*

  public*/ function getSubFolders(content/*:Content*/)/*:Array*/ {
    var children/*:Array*/ = NavigationTreeRelation.getChildrenFor(content);
    var items/*:Array*/ = [];
    for/* each*/(var $1=0;$1</* in*/ children.length;++$1) {var child/*:Content*/ =children[$1];
      //handle deleted children!
      if (child == null) {
        continue;
      }
      if (!child.getProperties()) {
        return undefined;
      }

      if (!this.showHiddenItems$1$wG) {
        var hiddenInNavigation/*:Boolean*/ = child.getProperties().get(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel.HIDDEN_IN_NAVIGATION);
        if (hiddenInNavigation) {
          continue;
        }
      }
      items.push(child);
    }
    return items;
  }/*

  public*/ function getLeafContent(content/*:Content*/)/*:Array*/ {
    return NavigationTreeRelation.getChildrenFor(content);
  }/*

  public*/ function getParent(content/*:Content*/)/*:Content*/ {
    var refs/*:Array*/ = content.getReferrersWithNamedDescriptor(NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE, NavigationTreeRelation.CHILDREN_PROPERTY);
    if (refs === undefined) {
      return undefined;
    }

    if (refs.length > 0) {
      return refs[0];
    }
    return null;
  }/*

  public*/ function getParents(content/*:Content*/)/*:Array*/ {
    return [this.getParent(content)];
  }/*

  public*/ function mayCreate(folder/*:Content*/, contentType/*:ContentType*/)/*:Boolean*/ {
    if (folder.isCheckedOutByOther()) {
      return false;
    }
    if (contentType === NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE) {

    }

    return false;
  }/*

  public*/ function copy(contents/*:Array*/, newParent/*:Content*/, callback/*:Function = undefined*/)/*:void*/ {
  }/*

  public*/ function mayCopy(contents/*:Array*/, newParent/*:Content*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function move(contents/*:Array*/, newParent/*:Content*/, callback/*:Function = undefined*/)/*:void*/ {
  }/*

  public*/ function mayMove(contents/*:Array*/, newParent/*:Content*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function deleteContents(contents/*:Array*/, callback/*:Function = undefined*/)/*:void*/ {
  }/*

  public*/ function undeleteContents(contents/*:Array*/, callback/*:Function = undefined*/)/*:void*/ {
  }/*

  public*/ function mayDelete(contents/*:Array*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function showCheckoutError(target/*:Content*/)/*:void*/ {
    var docType/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.localizeDocumentTypeName(target.getType().getName());
    var msg/*:String*/ = Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'navigation_checkout_error_message'), docType, target.getName());
    Ext.MessageBox.alert(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'navigation_checkout_error_title'), msg);
  }/*

  public*/ function addChildNodes(treeParent/*:Content*/, sources/*:Array*/, callback/*:Function*/)/*:void*/ {
    var checkedIn/*:Boolean*/ = treeParent.isCheckedIn();
    for/* each*/ (var $1=0;$1</* in*/ sources.length;++$1) {var source/*:Content*/ =sources[$1];
      addChildNode$static(treeParent, source);
    }

    if (checkedIn) {
      treeParent.checkIn(callback);
    }
  }/*

  public*/ function addChildNeedsFolderCheckout(folder/*:Content*/, childType/*:String*/)/*:Boolean*/ {
    return childType === NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE;
  }/*

  public*/ function provideRepositoryFolderFor(contentType/*:ContentType*/, folderNode/*:Content*/, childNodeName/*:String*/, callback/*:Function*/)/*:void*/ {
    callback(folderNode.getParent());
  }/*

  public*/ function rename(content/*:Content*/, newName/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    content.rename(newName, callback);
  }/*

  public*/ function withdraw(contents/*:Array*/, publicationService/*:PublicationService*/, callback/*:Function*/)/*:void*/ {
    var repository/*:ContentRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
    repository.getPublicationService().withdrawAllFromTree(contents, NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE, NavigationTreeRelation.CHILDREN_PROPERTY, callback);
  }/*

  public*/ function showInTree(contents/*:Array*/, view/*:String = null*/, treeModelId/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:view=null;case 2:treeModelId=null;}
    contents.forEach(function (entity/*:Object*/)/*:void*/ {
      var hiddenInNavigation/*:Boolean*/ = entity.getProperties().get(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel.HIDDEN_IN_NAVIGATION);
      //don't even try to open it in the navigation tree
      if (hiddenInNavigation) {
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(AS3.cast(com.coremedia.cap.content.Content,entity), null, treeModelId);
        return;
      }

      var ve/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function (entity/*:Object*/)/*:Boolean*/ {
        return tryShowInNavigationTree$static(entity);
      }, entity);
      ve.loadValue(function ()/*:void*/ {
        var canShowInNavigationTree/*:Boolean*/ = ve.getValue();
        if (canShowInNavigationTree) {
          com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(AS3.cast(com.coremedia.cap.content.Content,entity), null, com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel.NAVIGATION_TREE_ID);
        }
        else {
          com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(AS3.cast(com.coremedia.cap.content.Content,entity), null, treeModelId);
        }
      });
    });
  }/*

  private static*/ function getFolderType$static()/*:String*/ {
    return NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE;
  }/*

  /**
   * Helper method to link a new navigation to a parent
   * @param treeParent the parent to link the content into
   * @param source the child item that should be linked to the parent.
   * /
  private static*/ function addChildNode$static(treeParent/*:Content*/, source/*:Content*/)/*:void*/ {
    var children/*:Array*/ = NavigationTreeRelation.getChildrenFor(treeParent).slice();
    children.push(source);
    treeParent.getProperties().set(NavigationTreeRelation.CHILDREN_PROPERTY, children);
  }/*

  private static*/ function tryShowInNavigationTree$static(entity/*:Object*/)/*:Boolean*/ {
    var tm/*:NavigationTreeModel*/ = new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel();
    var idPathFromModel/*:Array*/ = tm.getIdPathFromModel(entity);
    if (idPathFromModel === undefined) {
      return undefined;
    }
    return null !== idPathFromModel;
  }/*

  public static*/ function getChildrenFor$static(folder/*:Content*/)/*:Array*/ {
    var children/*:Array*/ = folder.getProperties().get(NavigationTreeRelation.CHILDREN_PROPERTY);
    return children.filter(function (item/*:Content*/)/*:Boolean*/ {
      return !item.isDeleted();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.ContentTreeRelation"],
      showHiddenItems$1$wG: false,
      constructor: NavigationTreeRelation$,
      toggleView: toggleView,
      folderNodeType: folderNodeType,
      leafNodeType: leafNodeType,
      isFolderNode: isFolderNode,
      getSubFolders: getSubFolders,
      getLeafContent: getLeafContent,
      getParent: getParent,
      getParents: getParents,
      mayCreate: mayCreate,
      copy: copy,
      mayCopy: mayCopy,
      move: move,
      mayMove: mayMove,
      deleteContents: deleteContents,
      undeleteContents: undeleteContents,
      mayDelete: mayDelete,
      showCheckoutError: showCheckoutError,
      addChildNodes: addChildNodes,
      addChildNeedsFolderCheckout: addChildNeedsFolderCheckout,
      provideRepositoryFolderFor: provideRepositoryFolderFor,
      rename: rename,
      withdraw: withdraw,
      showInTree: showInTree,
      statics: {
        NAVIGATION_DOCUMENT_TYPE: undefined,
        CHILDREN_PROPERTY: undefined,
        getChildrenFor: getChildrenFor$static,
        __initStatics__: function() {
          NAVIGATION_DOCUMENT_TYPE$static_();
          CHILDREN_PROPERTY$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.window.MessageBox",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.ContentTreeRelation",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel",
        "com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsActionBase",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
