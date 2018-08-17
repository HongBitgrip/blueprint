Ext.define("com.coremedia.cms.editor.sdk.sites.DerivedContentsList", function(DerivedContentsList) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.form.Label;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn;
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import ext.grid.column.Column;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.ui.store.DataField;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 A list showing all contents that are derived from the content provided by the
 <code>bindTo</code> value expression.
 Derived contents are characterized by linking to the given content through
 the master property as configured in the site service.
 Deleted contents are ignored.
 Contents are sorted by site locale first, then by name.
 * /
public class DerivedContentsList extends DerivedContentsListBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.derivedContentsList";

    /**
     * the item id of the label showing a message for an empty sets of derived contents
     * /
    public static const MESSAGE_LABEL_ITEM_ID:String = "messageLabel";

    /**
     * the item id of the grid showing referrers
     * /
    public static const REFERRER_GRID_ITEM_ID:String = "referrerGrid";

    /**
     * Set to true to enable the thumbnail preview column
     * /
    [Bindable]
    public var showThumbnails:Boolean;

    public*/function DerivedContentsList$(config/*:DerivedContentsList = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase,{});
    var defaults_$1/*:DerivedContentsList*/ =AS3.cast(DerivedContentsList,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DerivedContentsList_title')));
    var layout_VBox_54_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_54_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_54_5_$1);
    var label_57_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    label_57_5_$1.itemId =net.jangaroo.ext.Exml.asString( DerivedContentsList.MESSAGE_LABEL_ITEM_ID);
    AS3.setBindable(label_57_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DerivedContentsList_emptyText')));
    var ui_BindVisibilityPlugin_60_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_60_9_$1.bindTo = this.getDerivedContentsExpression(AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ui_BindVisibilityPlugin_60_9_$1,"transformer" , function (contents/*:Array*/)/*:Boolean*/ {return contents && contents.length === 0;});
    label_57_5_$1.plugins = [ui_BindVisibilityPlugin_60_9_$1];
    var editor_ContentGridPanel_64_5_$1/*:com.coremedia.cms.editor.sdk.components.ContentGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.ContentGridPanel,{});
    editor_ContentGridPanel_64_5_$1.itemId =net.jangaroo.ext.Exml.asString( DerivedContentsList.REFERRER_GRID_ITEM_ID);
    AS3.setBindable(editor_ContentGridPanel_64_5_$1,"bindTo" , this.getDerivedContentsExpression(AS3.getBindable(config,"bindTo")));
    var ui_BindVisibilityPlugin_67_9_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_67_9_$1.bindTo = this.getDerivedContentsExpression(AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ui_BindVisibilityPlugin_67_9_$1,"transformer" , function (contents/*:Array*/)/*:Boolean*/ {return contents && contents.length > 0;});
    editor_ContentGridPanel_64_5_$1.plugins = [ui_BindVisibilityPlugin_67_9_$1];
    editor_ContentGridPanel_64_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var editor_ThumbnailColumn_72_9_$1/*:com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn,{});
    AS3.setBindable(editor_ThumbnailColumn_72_9_$1,"hidden" , !AS3.getBindable(config,"showThumbnails"));
    var editor_TypeIconColumn_73_9_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn,{});
    var editor_NameTranslationStatusColumn_74_9_$1/*: com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn,{});
    AS3.setBindable(editor_NameTranslationStatusColumn_74_9_$1,"role" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn.STATUS_ROLE_PROVIDER));
    var gridColumn_75_9_$1/*:ext.grid.column.Column*/ =AS3.cast(Ext.grid.column.Column,{});
    gridColumn_75_9_$1.dataIndex = "siteLocale";
    AS3.setBindable(gridColumn_75_9_$1,"width" , 180);
    var editor_StatusColumn_77_9_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    editor_ContentGridPanel_64_5_$1.columns = [editor_ThumbnailColumn_72_9_$1, editor_TypeIconColumn_73_9_$1, editor_NameTranslationStatusColumn_74_9_$1, gridColumn_75_9_$1, editor_StatusColumn_77_9_$1];
    var menu_81_9_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_81_9_$1.plain = true;
    var menuItem_83_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_83_13_$1.itemId = "masterComparison";
    var editor_OpenMasterComparisonAction_85_17_$1/*: com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction,{});
    AS3.setBindable(editor_OpenMasterComparisonAction_85_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_83_13_$1.baseAction = new com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction(editor_OpenMasterComparisonAction_85_17_$1);
    var menuItem_90_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_ShowInRepositoryAction_92_17_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_92_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_90_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_92_17_$1);
    var menuItem_96_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    var editor_CopyToClipboardAction_98_17_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_98_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.components.ContentGridPanel.SELECTED_ITEMS_VARIABLE_NAME));
    menuItem_96_13_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_98_17_$1);
    menu_81_9_$1.items = [menuItem_83_13_$1, menuItem_90_13_$1, menuItem_96_13_$1];
    AS3.setBindable(editor_ContentGridPanel_64_5_$1,"contextMenu" , menu_81_9_$1);
    var ui_DataField_106_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_106_9_$1.name = "translationStatus";
    ui_DataField_106_9_$1.ifUnreadable = "";
    ui_DataField_106_9_$1.ifError = "";
    ui_DataField_106_9_$1.mapping = "";
    ui_DataField_106_9_$1["convert"] =AS3.bind( this,"getProviderTranslationStatus");
    var ui_DataField_111_9_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_111_9_$1.name = "siteLocale";
    ui_DataField_111_9_$1.mapping = "";
    ui_DataField_111_9_$1.ifUnreadable = "";
    ui_DataField_111_9_$1["convert"] =AS3.bind( this,"getSiteLocaleNameFor");
    AS3.setBindable(editor_ContentGridPanel_64_5_$1,"additionalFields" , [ui_DataField_106_9_$1, ui_DataField_111_9_$1]);
    config_$1.items = [label_57_5_$1, editor_ContentGridPanel_64_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$G4nP(config_$1);
  }/*

    /**
     * An expression evaluating to the content bean being edited.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.derivedContentsList",
      constructor: DerivedContentsList$,
      super$G4nP: function() {
        com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        showThumbnails: false,
        bindTo: null
      },
      statics: {
        MESSAGE_LABEL_ITEM_ID: "messageLabel",
        REFERRER_GRID_ITEM_ID: "referrerGrid"
      },
      requires: [
        "Ext.form.Label",
        "Ext.grid.column.Column",
        "Ext.layout.container.VBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.sites.DerivedContentsListBase",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "com.coremedia.cms.editor.sdk.components.ContentGridPanel",
        "com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn",
        "com.coremedia.cms.editor.sdk.sites.OpenMasterComparisonAction"
      ]
    };
});
