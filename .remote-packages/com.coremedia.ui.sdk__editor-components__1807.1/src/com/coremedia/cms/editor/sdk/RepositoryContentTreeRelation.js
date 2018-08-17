Ext.define("com.coremedia.cms.editor.sdk.RepositoryContentTreeRelation", function(RepositoryContentTreeRelation) {/*package com.coremedia.cms.editor.sdk {

import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.impl.BulkUndeleteMethod;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cms.editor.sdk.bulkOperation.MoveResultWindow;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;

import mx.resources.ResourceManager;

/**
 * Intercepts the new content creation and updates the calculateDisabled/hidden state for catalog document types.
 * /
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class RepositoryContentTreeRelation implements ContentTreeRelation {

  private static const*/var CONTENT_TYPE_DOCUMENT$static/*:String*/ = "Document_";/*
  private static const*/var CONTENT_TYPE_FOLDER$static/*:String*/ = "Folder_";/*

  public*/ function RepositoryContentTreeRelation$() {
  }/*

  public*/ function folderNodeType()/*:String*/ {
    return CONTENT_TYPE_FOLDER$static;
  }/*

  public*/ function leafNodeType()/*:String*/ {
    return CONTENT_TYPE_DOCUMENT$static;
  }/*

  public*/ function isFolderNode(content/*:Content*/)/*:Boolean*/ {
    return content.isFolder();
  }/*

  public*/ function getParent(content/*:Content*/)/*:Content*/ {
    return content.getParent();
  }/*

  public*/ function getParents(content/*:Content*/)/*:Array*/ {
    var parent/*:Content*/ = this.getParent(content);
    return parent ? [parent] : [];
  }/*

  public*/ function getSubFolders(content/*:Content*/)/*:Array*/ {
    return content.getSubFolders();
  }/*

  public*/ function getLeafContent(content/*:Content*/)/*:Array*/ {
    return content.getChildDocuments();
  }/*

  public*/ function mayCreate(folder/*:Content*/, contentType/*:ContentType*/)/*:Boolean*/ {
    if(contentType.getName() === undefined) {
      return undefined;
    }
    if(folder.getType() === undefined) {
      return undefined;
    }
    if(folder.getType().getName() === undefined) {
      return undefined;
    }

    return folder.getType().getName() === CONTENT_TYPE_FOLDER$static;
  }/*

  public*/ function mayCopy(sources/*:Array*/, newParent/*:Content*/)/*:Boolean*/ {
    if (!newParent.isFolder()) {
      return false;
    }
    var accessControl/*:AccessControl*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getAccessControl();
    if (!accessControl.mayCopy(sources, newParent)) {
      return false;
    }
    return !com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.isReadOnly(newParent);
  }/*

  public*/ function copy(sources/*:Array*/, newParent/*:Content*/, callback/*:Function = undefined*/)/*:void*/ {
    var contentRepository/*:ContentRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
    contentRepository.copyRecursivelyTo(sources, newParent, callback);
  }/*

  public*/ function mayMove(sources/*:Array*/, newParent/*:Content*/)/*:Boolean*/ {
    if (sources.some(function (content/*:Content*/)/*:Boolean*/ {
              return content.getParent() === null;
            })) {
      return false;    // must not move root
    }
    if (!newParent) {
      return true; // assuming user can move it somewhere
      }
    if (!newParent.isFolder()) {
      return false;
    }
    var accessControl/*:AccessControl*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getAccessControl();
    if (!accessControl.mayMove(sources, newParent)) {
      return false;
    }
    for (var i/*:int*/ = 0; i < sources.length; i++) {
      var source/*:Content*/ = sources[i];
      //check drop on itself
      if (com.coremedia.cap.common.IdHelper.parseContentId(source) === com.coremedia.cap.common.IdHelper.parseContentId(newParent)) {
        return false;
      }

      var parent/*:Content*/ = this.getParent(source);
      // check for root node and move to same parent
      if (!parent || com.coremedia.cap.common.IdHelper.parseContentId(parent) === com.coremedia.cap.common.IdHelper.parseContentId(newParent)) {
        return false;
      }
      //check move into children
      var targetParent/*:Content*/ = this.getParent(newParent);
      while (targetParent) {
        if (com.coremedia.cap.common.IdHelper.parseContentId(targetParent) === com.coremedia.cap.common.IdHelper.parseContentId(source)) {
          return false;
        }
        targetParent = this.getParent(targetParent);
      }
    }
    return !com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.isReadOnly(newParent);
  }/*

  public*/ function move(sources/*:Array*/, newParent/*:Content*/, callback/*:Function = undefined*/)/*:void*/ {
    var contentRepository/*:ContentRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository();
    contentRepository.moveTo(sources, newParent, function (moveResult/*:BulkOperationResult*/)/*:void*/ {
      if (!moveResult.successful) {
        var moveResultWindowCfg/*:MoveResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.MoveResultWindow,{});
        AS3.setBindable(moveResultWindowCfg,"bulkResultItems" , moveResult.results);
        new com.coremedia.cms.editor.sdk.bulkOperation.MoveResultWindow(moveResultWindowCfg).show();
      } else if (callback) {
        callback(moveResult);
      }
    });
  }/*

  public*/ function deleteContents(contents/*:Array*/, callback/*:Function = undefined*/)/*:void*/ {
    var content/*:Content*/ = contents[0];
    content.getRepository().deleteAll(contents, callback);
  }/*


  public*/ function undeleteContents(contents/*:Array*/, callback/*:Function = undefined*/)/*:void*/ {
    new com.coremedia.cap.content.impl.BulkUndeleteMethod(contents[0].getRepository(), contents, callback).execute();
  }/*

  public*/ function mayDelete(contents/*:Array*/)/*:Boolean*/ {
    return true;
  }/*

  public*/ function addChildNeedsFolderCheckout(folder/*:Content*/, childType/*:String*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function showCheckoutError(target/*:Content*/)/*:void*/ {
    throw new AS3.Error("operation not supportet - no checkout needed for repository tree operations");
  }/*

  public*/ function addChildNodes(treeParent/*:Content*/, sources/*:Array*/, callback/*:Function*/)/*:void*/ {
    callback();
  }/*

  public*/ function provideRepositoryFolderFor(contentType/*:ContentType*/, folderNode/*:Content*/, name/*:String*/, callback/*:Function*/)/*:void*/ {
    callback(folderNode);
  }/*

  public*/ function rename(content/*:Content*/, newName/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    if (content && content.isFolder()) {
      content.load(function ()/*:void*/ {
        if (content.getChildren().length > 0 && content.getName() !== newName) {
          showConfirmationMessageBox$static(doRename);
        } else {
          doRename();
        }
      });
    } else {
      doRename();
    }

    function doRename()/*:void*/ {
      content.rename(newName, callback);
    }
  }/*

  private static*/ function showConfirmationMessageBox$static(onSuccess/*:Function*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderRenameTitle_text'),
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderRenameMessage_text'),
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dialog_confirmFolderRenameOkButtonText_text'),
            function (btn/*:String*/)/*:void*/ {
              if ("ok" === btn) {
                onSuccess();
              }
            });
  }/*

  public*/ function withdraw(contents/*:Array*/, publicationService/*:PublicationService*/, callback/*:Function*/)/*:void*/ {
    publicationService.withdrawAll(contents, callback);
  }/*


  public*/ function showInTree(contents/*:Array*/, view/*:String = null*/, treeModelId/*:String = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:view=null;case 2:treeModelId=null;}
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager().showInRepository(contents[0], view);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.ContentTreeRelation"],
      constructor: RepositoryContentTreeRelation$,
      folderNodeType: folderNodeType,
      leafNodeType: leafNodeType,
      isFolderNode: isFolderNode,
      getParent: getParent,
      getParents: getParents,
      getSubFolders: getSubFolders,
      getLeafContent: getLeafContent,
      mayCreate: mayCreate,
      mayCopy: mayCopy,
      copy: copy,
      mayMove: mayMove,
      move: move,
      deleteContents: deleteContents,
      undeleteContents: undeleteContents,
      mayDelete: mayDelete,
      addChildNeedsFolderCheckout: addChildNeedsFolderCheckout,
      showCheckoutError: showCheckoutError,
      addChildNodes: addChildNodes,
      provideRepositoryFolderFor: provideRepositoryFolderFor,
      rename: rename,
      withdraw: withdraw,
      showInTree: showInTree,
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.impl.BulkUndeleteMethod",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.ContentTreeRelation",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bulkOperation.MoveResultWindow",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"
      ]
    };
});
