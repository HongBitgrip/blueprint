Ext.define("com.coremedia.cms.editor.sdk.preferences.PreferenceWindow", function(PreferenceWindow) {/*package com.coremedia.cms.editor.sdk.preferences{
import com.coremedia.cms.editor.sdk.preferences.*;
import net.jangaroo.ext.Exml;
import ext.tab.TabPanel;
import ext.panel.Panel;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.form.CheckboxGroup;
import ext.form.field.Checkbox;
import ext.container.Container;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;
import ext.layout.container.HBoxLayout;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid;
import ext.button.Button;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class PreferenceWindow extends PreferenceWindowBase{

    import com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin;
    import com.coremedia.cms.editor.sdk.preview.PreviewPanelBase;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TabBarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.preferenceWindow";

    /**
     * the item id of the main preferences tab
     * /
    public static const GENERAL_TAB_ITEM_ID:String = "general";
    public static const SHORTCUTS_TAB_ITEM_ID:String = "shortcuts";

    public*/function PreferenceWindow$(config/*:PreferenceWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase,{});
    var defaults_$1/*:PreferenceWindow*/ =AS3.cast(PreferenceWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_title'));
    config_$1.stateId = "preferenceWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 480);
    config_$1["id"] = "studio-preferences-window";
    AS3.setBindable(config_$1,"height" , 365);
    config_$1.constrainHeader = true;
    var tabPanel_46_5_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    AS3.setBindable(tabPanel_46_5_$1,"activeTab" , 0);
    tabPanel_46_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL.getSkin());
    tabPanel_46_5_$1["id"] = "preferences-tab-panel";
    var panel_50_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_50_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    AS3.setBindable(panel_50_9_$1,"layout" , "anchor");
    tabPanel_46_5_$1["defaultType"] = panel_50_9_$1['xtype'];
    delete panel_50_9_$1['xtype'];
    delete panel_50_9_$1['xclass'];
    tabPanel_46_5_$1.defaults = panel_50_9_$1;
    var panel_54_9_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_54_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreferenceWindow.GENERAL_TAB_ITEM_ID);
    AS3.setBindable(panel_54_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_general_text'));
    var ui_LocalComboBox_57_13_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_57_13_$1.itemId = "localeComboBox";
    AS3.setBindable(ui_LocalComboBox_57_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_language_text')));
    AS3.setBindable(ui_LocalComboBox_57_13_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_57_13_$1,"store" , com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase.getLocaleStore());
    ui_LocalComboBox_57_13_$1.anchor = "100%";
    var ui_BindPropertyPlugin_63_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_63_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_63_17_$1.bindTo = this.getLocaleValueExpression();
    ui_LocalComboBox_57_13_$1.plugins = [ui_BindPropertyPlugin_63_17_$1];
    ui_LocalComboBox_57_13_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var checkboxGroup_68_13_$1/*:ext.form.CheckboxGroup*/ =AS3.cast(Ext.form.CheckboxGroup,{});
    AS3.setBindable(checkboxGroup_68_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_UserMenu_title')));
    checkboxGroup_68_13_$1.itemId = "preferencesUserMenu";
    checkboxGroup_68_13_$1.columns = 1;
    var checkbox_72_17_$1/*:ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_72_17_$1.itemId = "userMenuShowSiteNameCheckBox";
    AS3.setBindable(checkbox_72_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_userMenuShowSiteCheckBox_text')));
    var ui_BindPropertyPlugin_75_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_75_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_75_21_$1.bindTo = this.getShowSiteInUserMenuValueExpression();
    checkbox_72_17_$1.plugins = [ui_BindPropertyPlugin_75_21_$1];
    var checkbox_79_17_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_79_17_$1.itemId = "userMenuShowSiteLocaleCheckBox";
    AS3.setBindable(checkbox_79_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_userMenuShowSiteLocaleCheckBox_text')));
    var ui_BindPropertyPlugin_82_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_82_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_82_21_$1.bindTo = this.getShowSiteLocaleInUserMenuValueExpression();
    checkbox_79_17_$1.plugins = [ui_BindPropertyPlugin_82_21_$1];
    var checkbox_86_17_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_86_17_$1.itemId = "userMenuShowUserNameCheckBox";
    AS3.setBindable(checkbox_86_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_userMenuShowUserNameCheckBox_text')));
    var ui_BindPropertyPlugin_89_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_89_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_89_21_$1.bindTo = this.getShowUserNameInUserMenuValueExpression();
    checkbox_86_17_$1.plugins = [ui_BindPropertyPlugin_89_21_$1];
    checkboxGroup_68_13_$1.items = [checkbox_72_17_$1, checkbox_79_17_$1, checkbox_86_17_$1];
    var checkboxGroup_96_13_$1/*: ext.form.CheckboxGroup*/ =AS3.cast(Ext.form.CheckboxGroup,{});
    AS3.setBindable(checkboxGroup_96_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_Preview_title')));
    checkboxGroup_96_13_$1.itemId = "preferencesPreview";
    checkboxGroup_96_13_$1.columns = 1;
    var checkbox_100_17_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_100_17_$1.itemId = "showPreviewHoverFramesCheckBox";
    AS3.setBindable(checkbox_100_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_showPreviewHoverFrames_text')));
    var ui_BindPropertyPlugin_103_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_103_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_103_21_$1.bindTo = this.getShowPreviewHoverFramesValueExpression();
    checkbox_100_17_$1.plugins = [ui_BindPropertyPlugin_103_21_$1];
    var checkbox_107_17_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_107_17_$1.itemId = "showPreviewScrollbarsCheckBox";
    AS3.setBindable(checkbox_107_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_showPreviewScrollbars_text')));
    var ui_BindPropertyPlugin_110_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_110_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_110_21_$1.bindTo = this.getShowPreviewScrollbarsValueExpression();
    checkbox_107_17_$1.plugins = [ui_BindPropertyPlugin_110_21_$1];
    var container_114_17_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_114_17_$1,"margin" , "5 0 0 2");
    var displayField_116_21_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_116_21_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_reload_text_1'));
    var ui_StatefulNumberField_117_21_$1/*:com.coremedia.ui.components.StatefulNumberField*/ =AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    ui_StatefulNumberField_117_21_$1.itemId = "previewDelay";
    ui_StatefulNumberField_117_21_$1.allowBlank = false;
    ui_StatefulNumberField_117_21_$1.allowDecimals = false;
    AS3.setBindable(ui_StatefulNumberField_117_21_$1,"spinUpEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_117_21_$1,"spinDownEnabled" , true);
    AS3.setBindable(ui_StatefulNumberField_117_21_$1,"minValue" , 0.0);
    AS3.setBindable(ui_StatefulNumberField_117_21_$1,"width" , 50);
    AS3.setBindable(ui_StatefulNumberField_117_21_$1,"maxValue" , 10.0);
    var ui_BindPropertyPlugin_126_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_126_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_126_25_$1.ifUndefined = com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.DEFAULT_RELOAD_DELAY;
    ui_BindPropertyPlugin_126_25_$1.componentEvent = "spin";
    ui_BindPropertyPlugin_126_25_$1.bindTo = this.getPreviewReloadDelayValueExpression();
    var ui_BindPropertyPlugin_130_25_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_130_25_$1.bidirectional = true;
    ui_BindPropertyPlugin_130_25_$1.ifUndefined = com.coremedia.cms.editor.sdk.preview.PreviewPanelBase.DEFAULT_RELOAD_DELAY;
    ui_BindPropertyPlugin_130_25_$1.bindTo = this.getPreviewReloadDelayValueExpression();
    ui_StatefulNumberField_117_21_$1.plugins = [ui_BindPropertyPlugin_126_25_$1, ui_BindPropertyPlugin_130_25_$1];
    var displayField_135_21_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_135_21_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_reload_text_2'));
    container_114_17_$1.items = [displayField_116_21_$1, ui_StatefulNumberField_117_21_$1, displayField_135_21_$1];
    var ui_HorizontalSpacingPlugin_138_21_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    container_114_17_$1.plugins = [ui_HorizontalSpacingPlugin_138_21_$1];
    var layout_HBox_141_21_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_114_17_$1,"layout" , layout_HBox_141_21_$1);
    checkboxGroup_96_13_$1.items = [checkbox_100_17_$1, checkbox_107_17_$1, container_114_17_$1];
    var checkboxGroup_147_13_$1/*: ext.form.CheckboxGroup*/ =AS3.cast(Ext.form.CheckboxGroup,{});
    checkboxGroup_147_13_$1.columns = 1;
    AS3.setBindable(checkboxGroup_147_13_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_showAllTabsInForm_title')));
    var ui_BindVisibilityPlugin_150_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_150_17_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin.ADVANCED_TABS_ENABLED);
    checkboxGroup_147_13_$1.plugins = [ui_BindVisibilityPlugin_150_17_$1];
    var checkbox_154_17_$1/*: ext.form.field.Checkbox*/ =AS3.cast(Ext.form.field.Checkbox,{});
    checkbox_154_17_$1.itemId = "showAllTabsInFormCheckBox";
    AS3.setBindable(checkbox_154_17_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_showAllTabsInForm_text')));
    var ui_BindPropertyPlugin_157_21_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_157_21_$1.bidirectional = true;
    ui_BindPropertyPlugin_157_21_$1.bindTo = this.getShowAllTabsInFormValueExpression();
    checkbox_154_17_$1.plugins = [ui_BindPropertyPlugin_157_21_$1];
    checkboxGroup_147_13_$1.items = [checkbox_154_17_$1];
    panel_54_9_$1.items = [ui_LocalComboBox_57_13_$1, checkboxGroup_68_13_$1, checkboxGroup_96_13_$1, checkboxGroup_147_13_$1];
    var ui_VerticalSpacingPlugin_165_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    panel_54_9_$1.plugins = [ui_VerticalSpacingPlugin_165_13_$1];
    var panel_168_9_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_168_9_$1.flex = 1.0;
    AS3.setBindable(panel_168_9_$1,"scrollable" , true);
    AS3.setBindable(panel_168_9_$1,"autoScroll" , true);
    AS3.setBindable(panel_168_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_shortcuts_text'));
    var editor_ShortcutsGrid_173_13_$1/*:com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid*/ =AS3.cast(com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid,{});
    editor_ShortcutsGrid_173_13_$1.itemId =net.jangaroo.ext.Exml.asString( PreferenceWindow.SHORTCUTS_TAB_ITEM_ID);
    panel_168_9_$1.items = [editor_ShortcutsGrid_173_13_$1];
    tabPanel_46_5_$1.items = [panel_54_9_$1, panel_168_9_$1];
    config_$1.items = [tabPanel_46_5_$1];
    var button_180_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_180_5_$1.itemId = "saveBtn";
    button_180_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_180_5_$1,"scale" , "small");
    AS3.setBindable(button_180_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultSubmitButton_text')));
    AS3.setBindable(button_180_5_$1,"handler" ,AS3.bind( this,"saveAndClose"));
    var button_185_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_185_5_$1.itemId = "cancelBtn";
    button_185_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_185_5_$1,"scale" , "small");
    AS3.setBindable(button_185_5_$1,"handler" ,AS3.bind( this,"close"));
    AS3.setBindable(button_185_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    config_$1.buttons = [button_180_5_$1, button_185_5_$1];
    var layout_Fit_192_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_192_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$z4Lx(config_$1);
  }/*

    /** The optional item id of the tab that should be selected on show. * /
    [Bindable]
    public var selectedTabItemId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.preferenceWindow",
      constructor: PreferenceWindow$,
      super$z4Lx: function() {
        com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {selectedTabItemId: null},
      statics: {
        GENERAL_TAB_ITEM_ID: "general",
        SHORTCUTS_TAB_ITEM_ID: "shortcuts"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.CheckboxGroup",
        "Ext.form.field.Checkbox",
        "Ext.form.field.Display",
        "Ext.layout.container.Fit",
        "Ext.layout.container.HBox",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preferences.PreferenceWindowBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.TabExpandPlugin",
        "com.coremedia.cms.editor.sdk.preferences.shortcuts.ShortcutsGrid",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelBase"
      ]
    };
});
