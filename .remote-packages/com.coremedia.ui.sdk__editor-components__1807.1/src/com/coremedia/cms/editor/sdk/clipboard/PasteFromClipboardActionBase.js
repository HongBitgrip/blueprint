Ext.define("com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardActionBase", function(PasteFromClipboardActionBase) {/*package com.coremedia.cms.editor.sdk.clipboard {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ObjectUtils;

[PublicApi]
public class PasteFromClipboardActionBase extends ContentAction {

  private var selectedFolderValueExpression:ValueExpression;

  public*/ function PasteFromClipboardActionBase$(config/*:PasteFromClipboardAction = null*/) {if(arguments.length<=0)config=null;
    //If the selectedFolderValueExpression is configured...
    if (AS3.getBindable(config,"selectedFolderValueExpression")) {
      //...then take that
      this.selectedFolderValueExpression$NV6o = AS3.getBindable(config,"selectedFolderValueExpression");
    } else {
      //...otherwise create a value expression
      this.selectedFolderValueExpression$NV6o = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }

    this.super$NV6o(AS3.cast(com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, 'pasteFromClipboard', {handler:AS3.bind( this,"pasteFromClipboard$NV6o")})));
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent(variableNameConfig='selectedFolderVariableName')]
  public*/ function setSelectedFolder(selectedFolder/*:Content*/)/*:void*/ {
    this.selectedFolderValueExpression$NV6o.setValue(selectedFolder);
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    if (this.getContents().length !== 1) {
      return true;
    }
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    if (!contentsToPaste || contentsToPaste.length === 0) {
      return true;
    }
    var target/*:Content*/ = this.getContents()[0];
    var source/*:Content*/ = contentsToPaste[0];

    var collectionViewExtender/*:CollectionViewExtender*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender();

    var sourceExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(source);
    if (sourceExtension === undefined) {
      return undefined;
    }

    var targetExtension/*:CollectionViewExtension*/ = collectionViewExtender.getExtension(target);
    if (targetExtension === undefined) {
      return undefined;
    }

    if (!sourceExtension || !targetExtension) {
      return true;
    }

    if (!com.coremedia.ui.util.ObjectUtils.compareObjects(sourceExtension.getContentTreeRelation(), targetExtension.getContentTreeRelation())) {
      return true;
    }

    if (clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.COPY) {
      return !targetExtension.getContentTreeRelation().mayCopy(contentsToPaste, target);
    } else if (clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.MOVE) {
      return !targetExtension.getContentTreeRelation().mayMove(contentsToPaste, target);
    }
    return true;
  }/*

  /**
   * If there is no content ask the selected folder
   * @return
   * /
  override protected*/ function getContents()/*:Array*/ {
    var contents/*:Array*/ = com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.getContents.call(this);
    if (contents.length === 0 && this.selectedFolderValueExpression$NV6o.getValue()) {
      contents = [this.selectedFolderValueExpression$NV6o.getValue()];
    }

    return contents;
  }/*

  private*/ function pasteFromClipboard()/*:void*/ {
    var clipboard/*:Clipboard*/ = com.coremedia.cms.editor.sdk.clipboard.Clipboard.getInstance();
    var contentsToPaste/*:Array*/ = clipboard.getContents();
    if (clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.COPY) {
      (new com.coremedia.cms.editor.sdk.actions.CopyContentAction(contentsToPaste,AS3.as( this.getContents()[0],  com.coremedia.cap.content.Content))).execute();
    } else if (clipboard.getOperation() === com.coremedia.cms.editor.sdk.clipboard.Clipboard.MOVE) {
      (new com.coremedia.cms.editor.sdk.actions.MoveContentAction(contentsToPaste,AS3.as( this.getContents()[0],  com.coremedia.cap.content.Content))).execute(function ()/*:void*/ {
        clipboard.emptyClipboard();
      });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {
        "": ["PublicApi"],
        setSelectedFolder: [
          "InjectFromExtParent",
          [
            "variableNameConfig",
            "selectedFolderVariableName"
          ]
        ]
      },
      selectedFolderValueExpression$NV6o: null,
      constructor: PasteFromClipboardActionBase$,
      super$NV6o: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      setSelectedFolder: setSelectedFolder,
      isDisabledFor: isDisabledFor,
      getContents: getContents,
      pasteFromClipboard$NV6o: pasteFromClipboard,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.actions.CopyContentAction",
        "com.coremedia.cms.editor.sdk.actions.MoveContentAction",
        "com.coremedia.cms.editor.sdk.clipboard.Clipboard",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
