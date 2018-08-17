Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewSearchContainer", function(CollectionViewSearchContainer) {/*package com.coremedia.cms.editor.sdk.collectionview{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.sdk.actions.DeleteAction;
import com.coremedia.cms.editor.sdk.actions.UndeleteAction;
import com.coremedia.cms.editor.sdk.util.ContentExportAction;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
[PublicApi]
public class CollectionViewSearchContainer extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collectionViewSearchContainer";

    public*/function CollectionViewSearchContainer$(config/*:CollectionViewSearchContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:CollectionViewSearchContainer*/ =AS3.cast(CollectionViewSearchContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.SEARCH_MODE);
    var editor_CutToClipboardAction_28_5_$1/*:com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction,{});
    AS3.setBindable(editor_CutToClipboardAction_28_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_CopyToClipboardAction_29_5_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_29_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_PasteFromClipboardAction_30_5_$1/*:com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction,{});
    AS3.setBindable(editor_PasteFromClipboardAction_30_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedFolderValueExpression"));
    var editor_ApproveAction_31_5_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_31_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_PublishAction_32_5_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_32_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_ApprovePublishAction_33_5_$1/*:com.coremedia.cms.editor.sdk.actions.ApprovePublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApprovePublishAction,{});
    AS3.setBindable(editor_ApprovePublishAction_33_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_WithdrawAction_34_5_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_34_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_DeleteAction_35_5_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteAction,{});
    AS3.setBindable(editor_DeleteAction_35_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_UndeleteAction_36_5_$1/*:com.coremedia.cms.editor.sdk.actions.UndeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteAction,{});
    AS3.setBindable(editor_UndeleteAction_36_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_ContentExportAction_37_5_$1/*:com.coremedia.cms.editor.sdk.util.ContentExportAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.ContentExportAction,{});
    AS3.setBindable(editor_ContentExportAction_37_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    var editor_BookmarkAction_38_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction,{});
    AS3.setBindable(editor_BookmarkAction_38_5_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsValueExpression"));
    AS3.setBindable(config_$1,"actionList" , [new com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction(editor_CutToClipboardAction_28_5_$1), new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_29_5_$1), new com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction(editor_PasteFromClipboardAction_30_5_$1), new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_31_5_$1), new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_32_5_$1), new com.coremedia.cms.editor.sdk.actions.ApprovePublishAction(editor_ApprovePublishAction_33_5_$1), new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_34_5_$1), new com.coremedia.cms.editor.sdk.actions.DeleteAction(editor_DeleteAction_35_5_$1), new com.coremedia.cms.editor.sdk.actions.UndeleteAction(editor_UndeleteAction_36_5_$1), new com.coremedia.cms.editor.sdk.util.ContentExportAction(editor_ContentExportAction_37_5_$1), new com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction(editor_BookmarkAction_38_5_$1)]);
    config_$1["actionList$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_IZ5(config_$1);
  }/*

    [Bindable]
    public var selectedItemsValueExpression:ValueExpression;

    [Bindable]
    public var selectedFolderValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collectionViewSearchContainer",
      constructor: CollectionViewSearchContainer$,
      super$_IZ5: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedItemsValueExpression: null,
        selectedFolderValueExpression: null
      },
      requires: [
        "Ext.container.Container",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel",
        "com.coremedia.cms.editor.sdk.util.ContentExportAction"
      ]
    };
});
