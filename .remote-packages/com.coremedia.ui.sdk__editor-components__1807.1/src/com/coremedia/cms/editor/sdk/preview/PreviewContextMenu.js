Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewContextMenu", function(PreviewContextMenu) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
public class PreviewContextMenu extends PreviewContextMenuBase{

    import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeModel;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewContextMenu";

    /**
     * The itemId of the 'title' menu item.
     * /
    public static const TITLE_MENU_ITEM_ID:String = "title";

    /**
     * The itemId of the breadcrumb.
     * /
    public static const BREADCRUMB_ITEM_ID:String = "previewBreadcrumb";

    /**
     * The itemId of the 'open in tab' menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the 'open in background tab' menu item.
     * /
    public static const OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID:String = "openInBackgroundTab";

    /**
     * The itemId of the 'open in library' menu item.
     * /
    public static const OPEN_IN_LIBRARY_MENU_ITEM_ID:String = "openInLibrary";
    private var selectedNodeValueExpression:ValueExpression;
    private var metadataTreeValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:PreviewContextMenu*/)/*:void*/ {
      this.selectedNodeValueExpression$DJd6 = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME);
      this.metadataTreeValueExpression$DJd6 = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_TREE_VARIABLE_NAME);
    }/*

    public*/function PreviewContextMenu$(config/*:PreviewContextMenu = null*/){if(arguments.length<=0)config=null;this.__initialize__$DJd6(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase,{});
    var defaults_$1/*:PreviewContextMenu*/ =AS3.cast(PreviewContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"minWidth" , 200.0);
    config_$1.plain = false;
    var ui_HideObsoleteSeparatorsPlugin_56_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    AS3.setBindable(ui_HideObsoleteSeparatorsPlugin_56_5_$1,"initiallyVisible" , true);
    var ui_BEMPlugin_57_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_57_5_$1,"block" , "cm-preview-context-menu");
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_56_5_$1, ui_BEMPlugin_57_5_$1];
    var editor_Breadcrumb_60_5_$1/*:com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb,{});
    editor_Breadcrumb_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewContextMenu.BREADCRUMB_ITEM_ID);
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"treeModel" , new com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeModel(this.metadataTreeValueExpression$DJd6));
    editor_Breadcrumb_60_5_$1.enableOverflow = false;
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"disableNavigation" , true);
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"hideElementTexts" , true);
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"hideOnEmpty" , true);
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"disableElementStrategy" ,AS3.bind( this,"disableBreadcrumbElementStrategy"));
    AS3.setBindable(editor_Breadcrumb_60_5_$1,"selectedNodeValueExpression" , this.selectedNodeValueExpression$DJd6);
    config_$1.tbar = editor_Breadcrumb_60_5_$1;
    var menuItem_71_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_71_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewContextMenu.TITLE_MENU_ITEM_ID);
    AS3.setBindable(menuItem_71_5_$1,"iconCls" , "...");
    menuItem_71_5_$1.canActivate = false;
    var editor_ShowMetadataIconDisplayFieldAction_75_9_$1/*:com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction,{});
    AS3.setBindable(editor_ShowMetadataIconDisplayFieldAction_75_9_$1,"metadataVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME));
    AS3.setBindable(editor_ShowMetadataIconDisplayFieldAction_75_9_$1,"hideOnDisable" , true);
    menuItem_71_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction(editor_ShowMetadataIconDisplayFieldAction_75_9_$1);
    var ui_BEMMixin_80_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_80_9_$1,"bemElement" , "title");

    delete ui_BEMMixin_80_9_$1['xtype'];
    delete ui_BEMMixin_80_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(menuItem_71_5_$1, ui_BEMMixin_80_9_$1);
    var menuItem_84_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_MetadataToContentActionAdapter_86_9_$1/*:com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter,{});
    AS3.setBindable(editor_MetadataToContentActionAdapter_86_9_$1,"metadataVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME));
    editor_MetadataToContentActionAdapter_86_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    AS3.setBindable(editor_MetadataToContentActionAdapter_86_9_$1,"hideOnDisable" , true);
    AS3.setBindable(editor_MetadataToContentActionAdapter_86_9_$1,"useParentNode" , true);
    var editor_OpenInTabAction_92_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_MetadataToContentActionAdapter_86_9_$1,"backingAction" , new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_92_13_$1));
    menuItem_84_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter(editor_MetadataToContentActionAdapter_86_9_$1);
    var menuItem_98_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_MetadataToContentActionAdapter_100_9_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter,{});
    AS3.setBindable(editor_MetadataToContentActionAdapter_100_9_$1,"metadataVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME));
    editor_MetadataToContentActionAdapter_100_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewContextMenu.OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID);
    AS3.setBindable(editor_MetadataToContentActionAdapter_100_9_$1,"hideOnDisable" , true);
    AS3.setBindable(editor_MetadataToContentActionAdapter_100_9_$1,"useParentNode" , true);
    var editor_OpenInTabAction_106_13_$1/*: com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_106_13_$1,"background" , true);
    AS3.setBindable(editor_MetadataToContentActionAdapter_100_9_$1,"backingAction" , new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_106_13_$1));
    menuItem_98_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter(editor_MetadataToContentActionAdapter_100_9_$1);
    var menuItem_112_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_MetadataToContentActionAdapter_114_9_$1/*: com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter,{});
    AS3.setBindable(editor_MetadataToContentActionAdapter_114_9_$1,"metadataVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.CURRENT_PREVIEW_METADATA_SELECTION_VARIABLE_NAME));
    editor_MetadataToContentActionAdapter_114_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewContextMenu.OPEN_IN_LIBRARY_MENU_ITEM_ID);
    AS3.setBindable(editor_MetadataToContentActionAdapter_114_9_$1,"hideOnDisable" , true);
    AS3.setBindable(editor_MetadataToContentActionAdapter_114_9_$1,"useParentNode" , true);
    var editor_ShowInRepositoryAction_120_13_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_MetadataToContentActionAdapter_114_9_$1,"backingAction" , new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_120_13_$1));
    menuItem_112_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter(editor_MetadataToContentActionAdapter_114_9_$1);
    config_$1.items = [menuItem_71_5_$1, menuItem_84_5_$1, menuItem_98_5_$1, menuItem_112_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$DJd6(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewContextMenu",
      selectedNodeValueExpression$DJd6: null,
      metadataTreeValueExpression$DJd6: null,
      __initialize__$DJd6: __initialize__,
      constructor: PreviewContextMenu$,
      super$DJd6: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        TITLE_MENU_ITEM_ID: "title",
        BREADCRUMB_ITEM_ID: "previewBreadcrumb",
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID: "openInBackgroundTab",
        OPEN_IN_LIBRARY_MENU_ITEM_ID: "openInLibrary"
      },
      requires: [
        "Ext.menu.Item",
        "com.coremedia.cms.editor.sdk.preview.PreviewContextMenuBase",
        "com.coremedia.ui.context.ComponentContextManager",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter",
        "com.coremedia.cms.editor.sdk.actions.metadata.ShowMetadataIconDisplayFieldAction",
        "com.coremedia.cms.editor.sdk.components.breadcrumb.Breadcrumb",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeModel"
      ]
    };
});
