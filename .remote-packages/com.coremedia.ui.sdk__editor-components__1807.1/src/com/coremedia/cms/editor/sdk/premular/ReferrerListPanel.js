Ext.define("com.coremedia.cms.editor.sdk.premular.ReferrerListPanel", function(ReferrerListPanel) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn;
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn;
import com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import com.coremedia.ui.store.DataField;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.ui.components.SwitchingContainer;
import ext.form.Label;
import ext.panel.Panel;
import com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel;
import com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper;
import com.coremedia.ui.plugins.BEMPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.form.field.Checkbox;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 Shows which documents link to this document.
 * /
public class ReferrerListPanel extends ReferrerListPanelBase{

    import com.coremedia.cms.editor.sdk.util.SiteUtil;
    import com.coremedia.ui.bem.LinkListBEMEntities;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.ComponentUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.referrerListPanel";
    private var defaultColumns:Array;
    private var additionalLocalFields:Array;

    public*/function ReferrerListPanel$(config/*:ReferrerListPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase,{});
    var defaults_$1/*:ReferrerListPanel*/ =AS3.cast(ReferrerListPanel,{});
    var editor_ThumbnailColumn_35_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn,{});
    AS3.setBindable(editor_ThumbnailColumn_35_7_$1,"border" , false);
    editor_ThumbnailColumn_35_7_$1.menuDisabled = true;
    AS3.setBindable(editor_ThumbnailColumn_35_7_$1,"hidden" , (this.hidePreview(config)));
    var editor_TypeIconColumn_38_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn,{});
    editor_TypeIconColumn_38_7_$1.header = "";
    editor_TypeIconColumn_38_7_$1.sortable = false;
    editor_TypeIconColumn_38_7_$1.menuDisabled = true;
    var editor_NameColumn_41_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.NameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.NameColumn,{});
    editor_NameColumn_41_7_$1.sortable = false;
    editor_NameColumn_41_7_$1.menuDisabled = true;
    editor_NameColumn_41_7_$1.flex = 1.0;
    var editor_SiteNameColumn_44_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn,{});
    editor_SiteNameColumn_44_7_$1.sortable = false;
    editor_SiteNameColumn_44_7_$1.menuDisabled = true;
    var editor_SiteLocaleColumn_46_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn,{});
    editor_SiteLocaleColumn_46_7_$1.sortable = false;
    editor_SiteLocaleColumn_46_7_$1.menuDisabled = true;
    var editor_StatusColumn_48_7_$1/*:com.coremedia.cms.editor.sdk.columns.grid.StatusColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.StatusColumn,{});
    editor_StatusColumn_48_7_$1.header = "";
    editor_StatusColumn_48_7_$1.sortable = false;
    editor_StatusColumn_48_7_$1.menuDisabled = true;
    this.defaultColumns$yuZ5 = [editor_ThumbnailColumn_35_7_$1, editor_TypeIconColumn_38_7_$1, editor_NameColumn_41_7_$1, editor_SiteNameColumn_44_7_$1, editor_SiteLocaleColumn_46_7_$1, editor_StatusColumn_48_7_$1];
    var ui_DataField_53_7_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_53_7_$1.name = "siteName";
    ui_DataField_53_7_$1.mapping = "";
    ui_DataField_53_7_$1.ifUnreadable = "";
    ui_DataField_53_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteNameFor;
    var ui_DataField_57_7_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_57_7_$1.name = "siteLocale";
    ui_DataField_57_7_$1.mapping = "";
    ui_DataField_57_7_$1.ifUnreadable = "";
    ui_DataField_57_7_$1["convert"] = com.coremedia.cms.editor.sdk.util.SiteUtil.getSiteLocaleNameFor;
    this.additionalLocalFields$yuZ5 = [ui_DataField_53_7_$1, ui_DataField_57_7_$1];
    AS3.setBindable(defaults_$1,"additionalFields" , []);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ReferrerListPanel_label'));
    config_$1.itemId = "referrerListPanel";
    var container_90_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_90_5_$1.itemId = "toolbarWrapper";
    var ui_BEMMixin_97_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_97_9_$1,"bemElement" , undefined);

    delete ui_BEMMixin_97_9_$1['xtype'];
    delete ui_BEMMixin_97_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_90_5_$1, ui_BEMMixin_97_9_$1);
    var ui_BindVisibilityPlugin_100_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_100_9_$1.bindTo = this.getReferrerListValueExpression(config);
    AS3.setBindable(ui_BindVisibilityPlugin_100_9_$1,"transformer" ,AS3.bind( this,"toolbarVisibilityTransformer"));
    container_90_5_$1.plugins = [ui_BindVisibilityPlugin_100_9_$1];
    var toolbar_104_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_104_9_$1.itemId = "referrerToolbar";
    toolbar_104_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_107_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_107_13_$1.itemId = "openInTab";
    var editor_OpenInTabAction_109_17_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_109_17_$1,"contentValueExpression" , this.getSelectedValuesExpression());
    ui_IconButton_107_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_109_17_$1);
    var ui_IconButton_112_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_112_13_$1.itemId = "open";
    var editor_ShowInRepositoryAction_114_17_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_114_17_$1,"contentValueExpression" , this.getSelectedValuesExpression());
    ui_IconButton_112_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_114_17_$1);
    var tbSeparator_117_13_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    tbSeparator_117_13_$1.itemId = "openActionsSeparator";
    var ui_IconButton_118_13_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_118_13_$1.itemId = "copyToClipboard";
    var editor_CopyToClipboardAction_120_17_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_120_17_$1,"contentValueExpression" , this.getSelectedValuesExpression());
    ui_IconButton_118_13_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_120_17_$1);
    toolbar_104_9_$1.items = [ui_IconButton_107_13_$1, ui_IconButton_112_13_$1, tbSeparator_117_13_$1, ui_IconButton_118_13_$1];
    container_90_5_$1.items = [toolbar_104_9_$1];
    var ui_SwitchingContainer_127_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    AS3.setBindable(ui_SwitchingContainer_127_5_$1,"activeItemValueExpression" , this.getActiveItemValueExpression(config));
    var label_129_9_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    label_129_9_$1.itemId =net.jangaroo.ext.Exml.asString( this.EMPTY_REFERRER_LIST_LABEL_ITEM_ID);
    AS3.setBindable(label_129_9_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyText") || this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ReferrerListPanel_emptyListLabel')));
    var panel_131_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_131_9_$1.itemId =net.jangaroo.ext.Exml.asString( this.REFERRER_LIST_ITEM_ID);
    var editor_LinkListGridPanel_133_13_$1/*:com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel,{});
    editor_LinkListGridPanel_133_13_$1.enableColumnMove = false;
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"hideHeaders" , AS3.getBindable(config,"hideHeaders") || false);
    editor_LinkListGridPanel_133_13_$1.columns = com.coremedia.ui.util.ComponentUtil.cloneComponents(AS3.getBindable(config,"columns")) || this.defaultColumns$yuZ5;
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"additionalFields" , this.additionalLocalFields$yuZ5.concat(AS3.getBindable(config,"additionalFields")));
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"selectedValuesExpression" , this.getSelectedValuesExpression());
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"readOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true));
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"hideDropArea" , true);
    var editor_MemoryLinkListWrapper_141_17_$1/*:com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper,{});
    AS3.setBindable(editor_MemoryLinkListWrapper_141_17_$1,"linksVE" , this.getReferrerListValueExpression(config));
    AS3.setBindable(editor_LinkListGridPanel_133_13_$1,"linkListWrapper" , new com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper(editor_MemoryLinkListWrapper_141_17_$1));
    var ui_BEMPlugin_144_17_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_144_17_$1,"block" , com.coremedia.ui.bem.LinkListBEMEntities.BLOCK);
    AS3.setBindable(ui_BEMPlugin_144_17_$1,"bodyElement" , com.coremedia.ui.bem.LinkListBEMEntities.ELEMENT_LIST);
    AS3.setBindable(ui_BEMPlugin_144_17_$1,"modifier" , com.coremedia.ui.bem.LinkListBEMEntities.MODIFIER_WITH_HEADER);
    var ui_ContextMenuPlugin_147_17_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_PropertyFieldContextMenu_149_21_$1/*:com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu,{});
    AS3.setBindable(editor_PropertyFieldContextMenu_149_21_$1,"selectedItemsVE" , this.getSelectedValuesExpression());
    AS3.setBindable(ui_ContextMenuPlugin_147_17_$1,"contextMenu" , editor_PropertyFieldContextMenu_149_21_$1);
    editor_LinkListGridPanel_133_13_$1.plugins = [ui_BEMPlugin_144_17_$1, ui_ContextMenuPlugin_147_17_$1];
    editor_LinkListGridPanel_133_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var displayField_154_13_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_154_13_$1.itemId =net.jangaroo.ext.Exml.asString( this.LIST_LIMIT_LABEL_ITEM_ID);
    displayField_154_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.ITALIC);
    var ui_BindVisibilityPlugin_157_17_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_157_17_$1.bindTo = this.getListLimitLabelVisibility();
    var ui_BindPropertyPlugin_158_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_158_17_$1.bindTo = this.getListLimitLabelText(config);
    ui_BindPropertyPlugin_158_17_$1.componentProperty = "value";
    displayField_154_13_$1.plugins = [ui_BindVisibilityPlugin_157_17_$1, ui_BindPropertyPlugin_158_17_$1];
    panel_131_9_$1.items = [editor_LinkListGridPanel_133_13_$1, displayField_154_13_$1];
    ui_SwitchingContainer_127_5_$1.lazyItems = [label_129_9_$1, panel_131_9_$1];
    var checkbox_166_5_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_166_5_$1.itemId =net.jangaroo.ext.Exml.asString( this.INCLUDE_DELETED_ITEM_ID);
    checkbox_166_5_$1.hideLabel = true;
    AS3.setBindable(checkbox_166_5_$1,"hidden" , AS3.getBindable(config,"hideDeletedItemsCheckbox"));
    AS3.setBindable(checkbox_166_5_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ReferrerListPanel_list_include_deleted')));
    var ui_BindPropertyPlugin_171_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_171_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_171_9_$1.bindTo = this.getIncludeDeletedValueExpression();
    checkbox_166_5_$1.plugins = [ui_BindPropertyPlugin_171_9_$1];
    config_$1.items = [container_90_5_$1, ui_SwitchingContainer_127_5_$1, checkbox_166_5_$1];
    var editor_PropertyFieldPlugin_178_5_$1/*: com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin,{});
    AS3.setBindable(editor_PropertyFieldPlugin_178_5_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( ReferrerListPanel.xtype));
    config_$1.plugins = [editor_PropertyFieldPlugin_178_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yuZ5(config_$1);
  }/*


    /** Hides the headers of the grid, defaults to false. * /
    [Bindable]
    public var hideHeaders:Boolean;


    /** Adds border to the panels rows. Similar to link-lists. Defaults to false. * /
    [Bindable]
    public var addBorder:Boolean;


    /** If true, the checkbox for showing deleted content items is hidden. * /
    [Bindable]
    public var hideDeletedItemsCheckbox:Boolean;


    /**
     The data fields to be added to the store underlying the grid.
     Elements of the array are instances of datafield.

     @see ext.config.datafield
     * /
    [Bindable]
    public var additionalFields:Array;


    /** Set to true to show the preview image column. * /
    [Bindable]
    public var showThumbnail:Boolean;


    /**
     An array of <a href="Ext.grid.Column.html">columns</a>
     * /
    [Bindable]
    public var columns:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.referrerListPanel",
      defaultColumns$yuZ5: null,
      additionalLocalFields$yuZ5: null,
      constructor: ReferrerListPanel$,
      super$yuZ5: function() {
        com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        hideHeaders: false,
        addBorder: false,
        hideDeletedItemsCheckbox: false,
        additionalFields: null,
        showThumbnail: false,
        columns: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.Label",
        "Ext.form.field.Checkbox",
        "Ext.form.field.Display",
        "Ext.panel.Panel",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.premular.ReferrerListPanelBase",
        "com.coremedia.ui.bem.LinkListBEMEntities",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.ComponentUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.SiteLocaleColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.SiteNameColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.ThumbnailColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldPlugin",
        "com.coremedia.cms.editor.sdk.premular.fields.LinkListGridPanel",
        "com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu",
        "com.coremedia.cms.editor.sdk.util.MemoryLinkListWrapper",
        "com.coremedia.cms.editor.sdk.util.SiteUtil"
      ]
    };
});
