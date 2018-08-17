Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTree", function(LibraryTree) {/*package com.coremedia.cms.editor.sdk.collectionview.tree{
import com.coremedia.cms.editor.sdk.collectionview.tree.*;
import net.jangaroo.ext.Exml;
import ext.tree.TreeColumn;
import ext.form.field.TextField;
import com.coremedia.ui.plugins.BindTreePlugin;
import com.coremedia.ui.plugins.BindTreeSelectionPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.ui.plugins.CellEditPlugin;
import ext.tree.TreeView;
import com.coremedia.cms.editor.sdk.premular.fields.plugins.LibraryTreeViewDragDropPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class LibraryTree extends LibraryTreeBase{

    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.mixin.IObservable;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.libraryTree";

    private static const*/var DD_GROUPS$static/*:Array*/;/* =*/function DD_GROUPS$static_(){DD_GROUPS$static=( ['ContentDD']);};/*

    public*/function LibraryTree$(config/*:LibraryTree = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase,{});
    var defaults_$1/*:LibraryTree*/ =AS3.cast(LibraryTree,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    AS3.setBindable(config_$1,"width" , 230);
    config_$1["id"] = "librarytree";
    config_$1.cls = "cm-library-tree";
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'TreeView_repository'));
    config_$1.rootVisible = false;
    AS3.setBindable(config_$1,"hideHeaders" , true);
    var treeColumn_58_5_$1/*:ext.tree.TreeColumn*/ =AS3.cast(Ext.tree.Column,{});
    treeColumn_58_5_$1.dataIndex = "text";
    treeColumn_58_5_$1.flex = 1.0;
    AS3.setBindable(treeColumn_58_5_$1,"align" , "left");
    treeColumn_58_5_$1.renderer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    var textField_63_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_63_9_$1.selectOnFocus = true;
    AS3.setBindable(treeColumn_58_5_$1,"editor" , textField_63_9_$1);
    config_$1.columns = [treeColumn_58_5_$1];
    var ui_BindTreePlugin_69_5_$1/*:com.coremedia.ui.plugins.BindTreePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreePlugin,{});
    AS3.setBindable(ui_BindTreePlugin_69_5_$1,"treeModel" , com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()['getLibraryTreeModel']());
    ui_BindTreePlugin_69_5_$1.encode = false;
    var ui_BindTreeSelectionPlugin_71_5_$1/*:com.coremedia.ui.plugins.BindTreeSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreeSelectionPlugin,{});
    AS3.setBindable(ui_BindTreeSelectionPlugin_71_5_$1,"valueExpression" , this.getSelectedFolderExpression());
    AS3.setBindable(ui_BindTreeSelectionPlugin_71_5_$1,"treeModel" , com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()['getLibraryTreeModel']());
    AS3.setBindable(ui_BindTreeSelectionPlugin_71_5_$1,"defaultValue" , com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase.getDefaultSelection());
    AS3.setBindable(ui_BindTreeSelectionPlugin_71_5_$1,"openPathValueExpression" , AS3.getBindable(config,"openPathValueExpression"));
    var ui_ContextMenuPlugin_75_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    AS3.setBindable(ui_ContextMenuPlugin_75_5_$1,"dblClickPrecondition" ,AS3.bind( this,"dblClickPrecondition"));
    var editor_TreeViewContextMenu_77_9_$1/*: com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu,{});
    AS3.setBindable(ui_ContextMenuPlugin_75_5_$1,"contextMenu" , editor_TreeViewContextMenu_77_9_$1);
    var ui_CellEditPlugin_80_5_$1/*:com.coremedia.ui.plugins.CellEditPlugin*/ =AS3.cast(com.coremedia.ui.plugins.CellEditPlugin,{});
    ui_CellEditPlugin_80_5_$1.clicksToEdit = 1.0;
    var object_82_9_$1/*:Object*/ = {};
    object_82_9_$1.beforeedit =AS3.bind( this,"beforeNameEdit");
    object_82_9_$1.validateedit =AS3.bind( this,"validateNameEdit");
    AS3.setBindable(ui_CellEditPlugin_80_5_$1,"listeners" , object_82_9_$1);
    config_$1.plugins = [ui_BindTreePlugin_69_5_$1, ui_BindTreeSelectionPlugin_71_5_$1, ui_ContextMenuPlugin_75_5_$1, ui_CellEditPlugin_80_5_$1];
    var treeView_88_5_$1/*:ext.tree.TreeView*/ =AS3.cast(Ext.tree.View,{});
    treeView_88_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_repositorytree_text'));
    treeView_88_5_$1["cellTpl"] = com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase.CELL_TPL;
    treeView_88_5_$1.loadMask = false;
    var editor_LibraryTreeViewDragDropPlugin_93_9_$1/*:com.coremedia.cms.editor.sdk.premular.fields.plugins.LibraryTreeViewDragDropPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.LibraryTreeViewDragDropPlugin,{});
    AS3.setBindable(editor_LibraryTreeViewDragDropPlugin_93_9_$1,"ddGroups" , DD_GROUPS$static);
    AS3.setBindable(editor_LibraryTreeViewDragDropPlugin_93_9_$1,"tree" , this);
    editor_LibraryTreeViewDragDropPlugin_93_9_$1.containerScroll = true;
    editor_LibraryTreeViewDragDropPlugin_93_9_$1.appendOnly = true;
    treeView_88_5_$1.plugins = [editor_LibraryTreeViewDragDropPlugin_93_9_$1];
    config_$1.viewConfig = treeView_88_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ul8Q(config_$1);
  }/*

    /**
     * a value expression whose value can be set to a Bean whose path should be
     * opened in the tree.
     * /
    [Bindable]
    public var openPathValueExpression:ValueExpression;

    [Bindable]
    public var createdContentValueExpression:ValueExpression;

    /**
     * The container of this TreePanel.
     * This is used to react on the events in the container of this TreePanel
     * for example the hide event of the CollectionView window. -->
     * /
    [Bindable]
    public var containerComponent:IObservable;

    /** Text field used to edit the tree node label. @see ext.tree.TreeEditor * /
    [Bindable]
    public var editorField:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.libraryTree",
      constructor: LibraryTree$,
      super$Ul8Q: function() {
        com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        openPathValueExpression: null,
        createdContentValueExpression: null,
        containerComponent: null,
        editorField: null
      },
      statics: {
        DD_GROUPS: undefined,
        __initStatics__: function() {
          DD_GROUPS$static_();
        }
      },
      requires: [
        "Ext.form.field.Text",
        "Ext.tree.Column",
        "Ext.tree.View",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.collectionview.tree.LibraryTreeBase",
        "com.coremedia.ui.plugins.BindTreePlugin",
        "com.coremedia.ui.plugins.BindTreeSelectionPlugin",
        "com.coremedia.ui.plugins.CellEditPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.LibraryTreeViewDragDropPlugin"
      ]
    };
});
