Ext.define("com.coremedia.cms.editor.sdk.actions.NewContentActionBase", function(NewContentActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentCreateResult;
import com.coremedia.cap.content.ContentErrorCodes;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.IssuesDetectedError;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.RemoteErrorHandlers;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.util.EventUtil;

import ext.Action;
import ext.Component;
import ext.Ext;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class NewContentActionBase extends Action {

  private var folderValueExpression:ValueExpression;
  private var createdContentValueExpression:ValueExpression;
  private var primaryDisabledExpression:ValueExpression;
  private var hideWhenDisabled:Boolean;
  private var contentType:ContentType;
  private var name:String;

  private var disabledExpression:ValueExpression;
  internal native function get items():Array;

  /**
   * @param config the config object
   * /
  public*/ function NewContentActionBase$(config/*:NewContentAction = null*/) {if(arguments.length<=0)config=null;
    this.super$lFQh(AS3.cast(com.coremedia.cms.editor.sdk.actions.NewContentAction,Ext.apply({'handler':AS3.bind( this,"newDocumentHandler$lFQh")}, config)));
    this.folderValueExpression$lFQh = AS3.getBindable(config,"folderValueExpression");
    this.createdContentValueExpression$lFQh = AS3.getBindable(config,"createdContentValueExpression");
    this.primaryDisabledExpression$lFQh = AS3.getBindable(config,"primaryDisabledExpression");
    this.hideWhenDisabled$lFQh = AS3.getBindable(config,"hideWhenDisabled");
    this.contentType$lFQh = (typeof AS3.getBindable(config,"contentType") === 'string') ? com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(String(AS3.getBindable(config,"contentType"))) :AS3.as( AS3.getBindable(config,"contentType"),  com.coremedia.cap.content.ContentType);
    this.name$lFQh = AS3.getBindable(config,"name") ? AS3.getBindable(config,"name") : mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_newContent_newDocumentName_text');

    this.disabledExpression$lFQh = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateDisabled$lFQh"));
    this.disabledExpression$lFQh.addChangeListener(AS3.bind(this,"updateDisabledStatus$lFQh"));
    this.updateDisabledStatus$lFQh();
  }/*

  private*/ function updateDisabledStatus()/*:void*/ {
    var value/*:**/ = this.disabledExpression$lFQh.getValue();
    if (this.hideWhenDisabled$lFQh) {
      this.setHidden(value === undefined || value);
    } else {
      this.setDisabled(value === undefined || value);
    }
  }/*

  private*/ function calculateDisabled()/*:Boolean*/ {
    var folder/*:Content*/ =AS3.as( this.folderValueExpression$lFQh.getValue(),  com.coremedia.cap.content.Content);
    if (!folder ||
            this.primaryDisabledExpression$lFQh && this.primaryDisabledExpression$lFQh.getValue() ||
            !folder.getRepository().getAccessControl().mayCreate(folder, this.contentType$lFQh)) {
      return true;
    }

    var mayCreateFunction/*:Function*/ = (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).getContentCreationFilter(this.contentType$lFQh.getName());
    if(mayCreateFunction) {
      var mayCreateResult/*:Boolean*/ = mayCreateFunction.call(null, folder, this.contentType$lFQh);
      if(mayCreateResult === undefined) {
        return undefined;
      }
      return !mayCreateResult;
    }

    var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();
    var collectionViewExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(folder);
    if (collectionViewExtension === undefined) {
      return undefined;
    }
    if (!collectionViewExtension) {
      return true;
    }

    var mayCreate/*:Boolean*/ = collectionViewExtension.getContentTreeRelation().mayCreate(folder, this.contentType$lFQh);
    if (mayCreate === undefined) {
      return undefined;
    }

    return !mayCreate;
  }/*

  private*/ function newDocumentHandler()/*:void*/ {var this$=this;
    if (!this.calculateDisabled$lFQh()) {
      var folderNode/*:Content*/ =AS3.as( this.folderValueExpression$lFQh.getValue(),  com.coremedia.cap.content.Content);
      if (folderNode) {
        com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().findExtension(folderNode, function(extension/*:CollectionViewExtension*/)/*:void*/ {
          if (extension) {
            var folderTreeRelation/*:ContentTreeRelation*/ = extension.getContentTreeRelation();
            if (folderTreeRelation.addChildNeedsFolderCheckout(folderNode, this$.contentType$lFQh.getName()) && folderNode.isCheckedOutByOther()) {
              folderTreeRelation.showCheckoutError(folderNode);
              return;
            }
            folderTreeRelation.provideRepositoryFolderFor(this$.contentType$lFQh, folderNode, this$.name$lFQh, function (repositoryFolder/*:Content*/)/*:void*/ {
              this$.contentType$lFQh.create(repositoryFolder, this$.name$lFQh, function (result/*:ContentCreateResult*/)/*:void*/ {
                this$.createCallback$lFQh(result, folderNode, folderTreeRelation);
              });
            });
          }
        });
      }
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function createCallback(result/*:ContentCreateResult*/, folder/*:Content*/, folderTreeRelation/*:ContentTreeRelation*/)/*:void*/ {var this$=this;
    var content/*:Content*/ = result.createdContent;
    if (content) {
      content.load(function()/*:void*/ {
        this$.beanLoaded$lFQh(content, folder, folderTreeRelation);
      });
    } else {
      failure$static(result.error);
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private static*/ function failure$static(error/*:RemoteError*/)/*:void*/ {
    if (AS3.is(error,  com.coremedia.cap.content.IssuesDetectedError)) {
      com.coremedia.cms.editor.sdk.RemoteErrorHandlers.showIssues(AS3.cast(com.coremedia.cap.content.IssuesDetectedError,error));
    } else if (error.errorCode === com.coremedia.cap.content.ContentErrorCodes.NOT_AUTHORIZED) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'notAuthorized_title'), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'notAuthorized_message'));
    } else {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError("HTTP Error", 'HTTP Error: ' + error.errorCode + " " + error.message);
    }
    error.setHandled(true);
  }/*

  private*/ function beanLoaded(content/*:Content*/, folder/*:Content*/, folderTreeRelation/*:ContentTreeRelation*/)/*:void*/ {var this$=this;
    folderTreeRelation.addChildNodes(folder, [content], function ()/*:void*/ {
      this$.contentCreated$lFQh(content);
    });
  }/*

  private*/ function contentCreated(content/*:Content*/)/*:void*/ {var this$=this;
    // Make sure to include the new content in the tree view.
    var repositoryFolder/*:Content*/ = content.getParent();
    repositoryFolder.invalidate(function()/*:void*/ {
      // Notify
      this$.createdContentValueExpression$lFQh.setValue(content);
    });

    // If the content is a document, ...
    if (!content.isFolder()) {
      // ... it might need initialization and should be opened in a tab..
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"initializeAndShow$lFQh"), content);
    }
  }/*

  private*/ function initializeAndShow(content/*:Content*/)/*:void*/ {
    var initializer/*:Function*/ = com.coremedia.cms.editor.sdk.editorContext.lookupContentInitializer(content.getType());
    if (initializer) {
      initializer(content);
    }
    // If no initializer ran, the flush is a no-op, but still calls the callback.
    content.flush(function()/*:void*/ {
      // The initial content has been written to the server. It should be possible to show the preview now.
      com.coremedia.cms.editor.sdk.editorContext.getContentTabManager().openDocument(content);
    });
  }/*

  override public*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    Ext.Action.prototype.removeComponent.call(this,comp);
    if (this.items && this.items.length === 0) {
      this.disabledExpression$lFQh && this.disabledExpression$lFQh.removeChangeListener(AS3.bind(this,"updateDisabledStatus$lFQh"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      folderValueExpression$lFQh: null,
      createdContentValueExpression$lFQh: null,
      primaryDisabledExpression$lFQh: null,
      hideWhenDisabled$lFQh: false,
      contentType$lFQh: null,
      name$lFQh: null,
      disabledExpression$lFQh: null,
      constructor: NewContentActionBase$,
      super$lFQh: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      updateDisabledStatus$lFQh: updateDisabledStatus,
      calculateDisabled$lFQh: calculateDisabled,
      newDocumentHandler$lFQh: newDocumentHandler,
      createCallback$lFQh: createCallback,
      beanLoaded$lFQh: beanLoaded,
      contentCreated$lFQh: contentCreated,
      initializeAndShow$lFQh: initializeAndShow,
      removeComponent: removeComponent,
      requires: [
        "Ext",
        "Ext.Action",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentErrorCodes",
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.cap.content.IssuesDetectedError",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.RemoteErrorHandlers",
        "com.coremedia.cms.editor.sdk.actions.NewContentAction",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
