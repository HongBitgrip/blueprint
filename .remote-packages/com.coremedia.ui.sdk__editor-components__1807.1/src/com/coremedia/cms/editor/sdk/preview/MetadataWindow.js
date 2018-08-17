Ext.define("com.coremedia.cms.editor.sdk.preview.MetadataWindow", function(MetadataWindow) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import ext.tree.TreePanel;
import com.coremedia.ui.plugins.BindTreePlugin;
import com.coremedia.ui.plugins.BindTreeSelectionPlugin;
import ext.button.Button;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class MetadataWindow extends MetadataWindowBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.metadataWindow";

    public static const TREE_PANEL_ITEM_ID:String = "treePanel";

    public*/function MetadataWindow$(config/*:MetadataWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.MetadataWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.MetadataWindowBase,{});
    var defaults_$1/*:MetadataWindow*/ =AS3.cast(MetadataWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , "Metadata");
    config_$1.stateId = "metadataWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 600);
    AS3.setBindable(config_$1,"height" , 600);
    config_$1.constrainHeader = true;
    var treePanel_37_5_$1/*:ext.tree.TreePanel*/ =AS3.cast(Ext.tree.Panel,{});
    treePanel_37_5_$1.itemId =net.jangaroo.ext.Exml.asString( MetadataWindow.TREE_PANEL_ITEM_ID);
    AS3.setBindable(treePanel_37_5_$1,"scrollable" , true);
    treePanel_37_5_$1.rootVisible = false;
    var ui_BindTreePlugin_41_9_$1/*:com.coremedia.ui.plugins.BindTreePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreePlugin,{});
    AS3.setBindable(ui_BindTreePlugin_41_9_$1,"treeModel" , this.getTreeModel(config));
    var ui_BindTreeSelectionPlugin_42_9_$1/*:com.coremedia.ui.plugins.BindTreeSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreeSelectionPlugin,{});
    AS3.setBindable(ui_BindTreeSelectionPlugin_42_9_$1,"valueExpression" , AS3.getBindable(config,"selectionVE"));
    AS3.setBindable(ui_BindTreeSelectionPlugin_42_9_$1,"treeModel" , this.getTreeModel(config));
    treePanel_37_5_$1.plugins = [ui_BindTreePlugin_41_9_$1, ui_BindTreeSelectionPlugin_42_9_$1];
    config_$1.items = [treePanel_37_5_$1];
    var button_48_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_48_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_48_5_$1,"scale" , "small");
    AS3.setBindable(button_48_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCloseButton_text')));
    AS3.setBindable(button_48_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_48_5_$1];
    var toolbar_55_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_55_5_$1.itemId = "toolbar";
    AS3.setBindable(toolbar_55_5_$1,"height" , 30);
    var ui_IconButton_58_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_58_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'show_html')));
    AS3.setBindable(ui_IconButton_58_9_$1,"tooltip" , "Expand all");
    AS3.setBindable(ui_IconButton_58_9_$1,"handler" ,AS3.bind( this,"expandAll"));
    var ui_IconButton_61_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_61_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'warning')));
    AS3.setBindable(ui_IconButton_61_9_$1,"tooltip" , "Show warnings");
    ui_IconButton_61_9_$1.enableToggle = true;
    AS3.setBindable(ui_IconButton_61_9_$1,"pressed" , true);
    AS3.setBindable(ui_IconButton_61_9_$1,"handler" ,AS3.bind( this,"showWarnings"));
    toolbar_55_5_$1.items = [ui_IconButton_58_9_$1, ui_IconButton_61_9_$1];
    config_$1.tbar = toolbar_55_5_$1;
    var layout_Fit_70_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_70_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$23R$(config_$1);
  }/*

    [Bindable]
    public var treeVE:ValueExpression;

    [Bindable]
    public var selectionVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.MetadataWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.metadataWindow",
      constructor: MetadataWindow$,
      super$23R$: function() {
        com.coremedia.cms.editor.sdk.preview.MetadataWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        treeVE: null,
        selectionVE: null
      },
      statics: {TREE_PANEL_ITEM_ID: "treePanel"},
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.Fit",
        "Ext.toolbar.Toolbar",
        "Ext.tree.Panel",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preview.MetadataWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BindTreePlugin",
        "com.coremedia.ui.plugins.BindTreeSelectionPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
