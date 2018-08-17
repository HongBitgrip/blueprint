Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper", function(WidgetWrapper) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.panel.Panel;
import ext.container.Container;
import ext.toolbar.Toolbar;
import com.coremedia.ui.plugins.BEMMixin;
import ext.Component;
import ext.toolbar.TextItem;
import com.coremedia.ui.components.IconButton;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 A wrapper for widgets, which takes care of the proper layout of the widget in the dashboard.
 * /
public class WidgetWrapper extends WidgetWrapperBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.createComponentSelector;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.widgetWrapper";

    public*/function WidgetWrapper$(config/*:WidgetWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase,{});
    var defaults_$1/*:WidgetWrapper*/ =AS3.cast(WidgetWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.defaultFocus =net.jangaroo.ext.Exml.asString( com.coremedia.ui.util.createComponentSelector().focusable().build());
    var ui_BEMPlugin_39_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_39_5_$1,"block" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_WRAPPER_BLOCK);
    config_$1.plugins = [ui_BEMPlugin_39_5_$1];
    var panel_43_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.INNER_WRAPPER_ITEM_ID);
    panel_43_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.WIDGET.getSkin());
    AS3.setBindable(panel_43_5_$1,"layout" , "fit");
    var ui_BEMPlugin_47_9_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_47_9_$1,"block" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_BLOCK);
    AS3.setBindable(ui_BEMPlugin_47_9_$1,"modifier" , this.getModifierVE());
    panel_43_5_$1.plugins = [ui_BEMPlugin_47_9_$1];
    var container_51_9_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_51_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.DELEGATE_CONTAINER_ITEM_ID);
    AS3.setBindable(container_51_9_$1,"layout" , "fit");
    panel_43_5_$1.items = [container_51_9_$1];
    var toolbar_55_9_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_55_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.TOOLBAR_ITEM_ID);
    toolbar_55_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WIDGET_HEADER.getSkin());
    var ui_BEMMixin_58_13_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_58_13_$1,"bemElement" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_ELEMENT_TOOLBAR);

    delete ui_BEMMixin_58_13_$1['xtype'];
    delete ui_BEMMixin_58_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(toolbar_55_9_$1, ui_BEMMixin_58_13_$1);
    var component_61_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_61_13_$1,"width" , "16px");
    AS3.setBindable(component_61_13_$1,"margin" , "0 0 0 6");
    component_61_13_$1.renderTpl = com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.dragIconTemplate;
    var ui_BEMMixin_65_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_65_17_$1,"bemElement" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_ELEMENT_ICON);

    delete ui_BEMMixin_65_17_$1['xtype'];
    delete ui_BEMMixin_65_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(component_61_13_$1, ui_BEMMixin_65_17_$1);
    var tbText_68_13_$1/*:ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_68_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.LABEL_ITEM_ID);
    AS3.setBindable(tbText_68_13_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"title","DUMMY")));
    tbText_68_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WIDGET_HEADER.getSkin());
    tbText_68_13_$1.flex = 1.0;
    var ui_BEMMixin_73_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_73_17_$1,"bemElement" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_ELEMENT_TITLE);

    delete ui_BEMMixin_73_17_$1['xtype'];
    delete ui_BEMMixin_73_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(tbText_68_13_$1, ui_BEMMixin_73_17_$1);
    var ui_IconButton_76_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_76_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.EDIT_BUTTON_ITEM_ID);
    ui_IconButton_76_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE_INVERTED.getSkin());
    AS3.setBindable(ui_IconButton_76_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'pencil')));
    AS3.setBindable(ui_IconButton_76_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_Button_Edit_tooltip_text')));
    AS3.setBindable(ui_IconButton_76_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'Widget_Button_Edit_tooltip_text'));
    AS3.setBindable(ui_IconButton_76_13_$1,"handler" ,AS3.bind( this,"toggleEditMode"));
    toolbar_55_9_$1.items = [component_61_13_$1, tbText_68_13_$1, ui_IconButton_76_13_$1];
    var component_84_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    var ui_BEMMixin_86_17_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_86_17_$1,"bemElement" , com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_ELEMENT_TOOL);

    delete ui_BEMMixin_86_17_$1['xtype'];
    delete ui_BEMMixin_86_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(component_84_13_$1, ui_BEMMixin_86_17_$1);
    toolbar_55_9_$1["defaultType"] = component_84_13_$1['xtype'];
    delete component_84_13_$1['xtype'];
    delete component_84_13_$1['xclass'];
    toolbar_55_9_$1.defaults = component_84_13_$1;
    panel_43_5_$1.tbar = toolbar_55_9_$1;
    config_$1.items = [panel_43_5_$1];
    var editor_WidgetSeparator_95_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator,{});
    editor_WidgetSeparator_95_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.SEPARATOR_ITEM_ID);
    AS3.setBindable(editor_WidgetSeparator_95_5_$1,"dock" , "bottom");
    config_$1.dockedItems = [editor_WidgetSeparator_95_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MTBx(config_$1);
  }/*

    /** The state of the initial widget to wrap. * /
    [Bindable]
    public var widgetState:com.coremedia.cms.editor.sdk.dashboard.WidgetState;


    /** Whether to show the widget in edit mode. * /
    [Bindable]
    public var edit:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.widgetWrapper",
      constructor: WidgetWrapper$,
      super$MTBx: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        widgetState: null,
        edit: false
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.toolbar.TextItem",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.util.createComponentSelector",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.dashboard.WidgetSeparator"]
    };
});
