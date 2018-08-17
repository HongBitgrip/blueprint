Ext.define("com.coremedia.cms.editor.sdk.desktop.StartTab", function(StartTab) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
import ext.toolbar.Toolbar;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.ui.components.IconDisplayField;
import ext.Component;
import com.coremedia.cms.editor.sdk.desktop.StartTabWarnings;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CollaborationIcons')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class StartTab extends Panel{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.startTab";

    public static const WARNINGS_CONTAINER_ITEM_ID:String = "starttab-warnings-container";

    public*/function StartTab$(config/*:StartTab = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    var defaults_$1/*:StartTab*/ =AS3.cast(StartTab,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_tab_title'));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CORPORATE_IDENTITY.getSkin());
    var toolbar_34_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_34_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    AS3.setBindable(toolbar_34_5_$1,"height" , 40);
    config_$1.tbar = toolbar_34_5_$1;
    var panel_38_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_38_5_$1,"margin" , "90 0 0 100");
    AS3.setBindable(panel_38_5_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_title'));
    panel_38_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.SPECIAL_WELCOME_OUTER.getSkin());
    var panel_42_9_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_42_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_question_text'));
    panel_42_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.SPECIAL_WELCOME_INNER.getSkin());
    AS3.setBindable(panel_42_9_$1,"width" , 350);
    var layout_VBox_46_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_46_13_$1,"align" , "stretch");
    AS3.setBindable(panel_42_9_$1,"layout" , layout_VBox_46_13_$1);
    var ui_VerticalSpacingPlugin_49_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_49_13_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    panel_42_9_$1.plugins = [ui_VerticalSpacingPlugin_49_13_$1];
    var ui_IconDisplayField_52_13_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_52_13_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_info_dashboard_text'));
    ui_IconDisplayField_52_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LIGHT.getSkin());
    AS3.setBindable(ui_IconDisplayField_52_13_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_52_13_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_IconDisplayField_52_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'dashboard')));
    var ui_IconDisplayField_59_13_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_59_13_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_info_library_text'));
    ui_IconDisplayField_59_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LIGHT.getSkin());
    AS3.setBindable(ui_IconDisplayField_59_13_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_59_13_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_IconDisplayField_59_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'library')));
    var ui_IconDisplayField_66_13_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_66_13_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_info_controlroom_text'));
    ui_IconDisplayField_66_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LIGHT.getSkin());
    AS3.setBindable(ui_IconDisplayField_66_13_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_66_13_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_IconDisplayField_66_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CollaborationIcons', 'control_room')));
    var ui_IconDisplayField_73_13_$1/*: com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_73_13_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'StartTab_info_searchfolder_text'));
    ui_IconDisplayField_73_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LIGHT.getSkin());
    AS3.setBindable(ui_IconDisplayField_73_13_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_73_13_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_IconDisplayField_73_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'search_folder')));
    panel_42_9_$1.items = [ui_IconDisplayField_52_13_$1, ui_IconDisplayField_59_13_$1, ui_IconDisplayField_66_13_$1, ui_IconDisplayField_73_13_$1];
    panel_38_5_$1.items = [panel_42_9_$1];
    var component_83_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_83_5_$1.flex = 1.0;
    var editor_StartTabWarnings_84_5_$1/*:com.coremedia.cms.editor.sdk.desktop.StartTabWarnings*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.StartTabWarnings,{});
    editor_StartTabWarnings_84_5_$1.itemId =net.jangaroo.ext.Exml.asString( StartTab.WARNINGS_CONTAINER_ITEM_ID);
    AS3.setBindable(editor_StartTabWarnings_84_5_$1,"margin" , "0 0 0 20");
    config_$1.items = [panel_38_5_$1, component_83_5_$1, editor_StartTabWarnings_84_5_$1];
    var layout_VBox_88_5_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_88_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_88_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$E1J$(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.startTab",
      constructor: StartTab$,
      super$E1J$: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      statics: {WARNINGS_CONTAINER_ITEM_ID: "starttab-warnings-container"},
      requires: [
        "Ext.Component",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.icons.CollaborationIcons_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.StartTabWarnings"]
    };
});
