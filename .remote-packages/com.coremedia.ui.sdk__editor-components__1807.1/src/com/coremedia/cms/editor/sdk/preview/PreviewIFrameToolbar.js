Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar", function(PreviewIFrameToolbar) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import com.coremedia.cms.editor.sdk.plugins.OnlyIf;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.Component;
import ext.toolbar.Spacer;
import com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSlider;
import ext.toolbar.Fill;
import ext.container.Container;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction;
import com.coremedia.ui.components.IconSplitButton;
import com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu;
import ext.layout.container.HBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PreviewIFrameToolbar extends PreviewIFrameToolbarBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewIFrameToolbar";

    /**
     * The itemId for the 'full width' button.
     * /
    public static const FULL_WIDTH_BUTTON_ITEM_ID:String = "fullWidthButton";

    /**
     * The itemId for the preview iframe toolbar button wrapper.
     * /
    public static const PREVIEW_IFRAME_TOOLBAR_BUTTON_WRAPPER_ITEM_ID:String = "previewIframeToolbarButtonWrapper";

    /**
     * The itemId for the 'responsive mode' button.
     * /
    public static const RESPONSIVE_MODE_BUTTON_ITEM_ID:String = "responsiveModeButton";

    /**
     * The itemId for the 'development mode' button.
     * /
    public static const DEVELOPMENT_MODE_BUTTON_ITEM_ID:String = "developmentMode";

    public*/function PreviewIFrameToolbar$(config/*:PreviewIFrameToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase,{});
    var defaults_$1/*:PreviewIFrameToolbar*/ =AS3.cast(PreviewIFrameToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewIFrameToolbar_label'));
    AS3.setBindable(config_$1,"height" , 40);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.PREVIEW.getSkin());
    config_$1.excludeInputFields = true;
    var ui_HideObsoleteSeparatorsPlugin_77_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    var editor_OnlyIf_78_5_$1/*:com.coremedia.cms.editor.sdk.plugins.OnlyIf*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.OnlyIf,{});
    AS3.setBindable(editor_OnlyIf_78_5_$1,"isMemberOf" ,net.jangaroo.ext.Exml.asString( this.getDeveloperGroups()));
    var ui_AddItemsPlugin_80_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var editor_DevelopmentModeButton_82_13_$1/*: com.coremedia.cms.editor.sdk.preview.DevelopmentModeButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.DevelopmentModeButton,{});
    editor_DevelopmentModeButton_82_13_$1.itemId = "developmentMode";
    AS3.setBindable(ui_AddItemsPlugin_80_9_$1,"items" , [editor_DevelopmentModeButton_82_13_$1]);
    var component_85_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_85_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_SPACER_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_80_9_$1,"before" , [component_85_13_$1]);
    AS3.setBindable(editor_OnlyIf_78_5_$1,"then" , ui_AddItemsPlugin_80_9_$1);
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_77_5_$1, editor_OnlyIf_78_5_$1];
    var tbSpacer_92_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_92_5_$1,"width" , 18);
    tbSpacer_92_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_SPACER_ITEM_ID);
    AS3.setBindable(tbSpacer_92_5_$1,"hidden" , true);
    var editor_DeviceTypeSlider_96_5_$1/*:com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSlider*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSlider,{});
    editor_DeviceTypeSlider_96_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_ITEM_ID);
    AS3.setBindable(editor_DeviceTypeSlider_96_5_$1,"deviceInfoValueExpression" , AS3.getBindable(config,"deviceInfoValueExpression"));
    AS3.setBindable(editor_DeviceTypeSlider_96_5_$1,"selectedDeviceValueExpression" , AS3.getBindable(config,"selectedDeviceValueExpression"));
    var tbFill_99_5_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var container_101_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_101_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewIFrameToolbar.PREVIEW_IFRAME_TOOLBAR_BUTTON_WRAPPER_ITEM_ID);
    AS3.setBindable(container_101_5_$1,"hidden" , true);
    container_101_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GROUP.getSkin());
    var ui_IconButton_105_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_105_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewIFrameToolbar.RESPONSIVE_MODE_BUTTON_ITEM_ID);
    ui_IconButton_105_9_$1.enableToggle = true;
    ui_IconButton_105_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_DARK_GROUPED.getSkin());
    AS3.setBindable(ui_IconButton_105_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'preview_responsive')));
    var editor_SetScaleModeAction_110_13_$1/*:com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction,{});
    AS3.setBindable(editor_SetScaleModeAction_110_13_$1,"scaleModeValueExpression" , AS3.getBindable(config,"scaleModeValueExpression"));
    AS3.setBindable(editor_SetScaleModeAction_110_13_$1,"value" , false);
    ui_IconButton_105_9_$1.baseAction = new com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction(editor_SetScaleModeAction_110_13_$1);
    var ui_IconSplitButton_114_9_$1/*:com.coremedia.ui.components.IconSplitButton*/ =AS3.cast(com.coremedia.ui.components.IconSplitButton,{});
    ui_IconSplitButton_114_9_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewIFrameToolbar.FULL_WIDTH_BUTTON_ITEM_ID);
    ui_IconSplitButton_114_9_$1.enableToggle = true;
    ui_IconSplitButton_114_9_$1.menuAlign = "tr-br?";
    ui_IconSplitButton_114_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.TOOLBAR_DARK_GROUPED.getSkin());
    AS3.setBindable(ui_IconSplitButton_114_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'preview_overview')));
    var editor_SetScaleModeAction_120_13_$1/*: com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction,{});
    AS3.setBindable(editor_SetScaleModeAction_120_13_$1,"scaleModeValueExpression" , AS3.getBindable(config,"scaleModeValueExpression"));
    AS3.setBindable(editor_SetScaleModeAction_120_13_$1,"value" , true);
    ui_IconSplitButton_114_9_$1.baseAction = new com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction(editor_SetScaleModeAction_120_13_$1);
    var editor_PreviewZoomMenu_124_13_$1/*:com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu,{});
    AS3.setBindable(editor_PreviewZoomMenu_124_13_$1,"sliderZoomValueExpression" , AS3.getBindable(config,"sliderZoomValueExpression"));
    ui_IconSplitButton_114_9_$1.menu = editor_PreviewZoomMenu_124_13_$1;
    container_101_5_$1.items = [ui_IconButton_105_9_$1, ui_IconSplitButton_114_9_$1];
    var layout_HBox_129_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_101_5_$1,"layout" , layout_HBox_129_9_$1);
    config_$1.items = [tbSpacer_92_5_$1, editor_DeviceTypeSlider_96_5_$1, tbFill_99_5_$1, container_101_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mZXl(config_$1);
  }/*

    /**
     * Value expression holding the device information for the previewed object.
     * /
    [Bindable]
    public var deviceInfoValueExpression:ValueExpression;

    /**
     * Value expression holding the info of the currently selected device type.
     * /
    [Bindable]
    public var selectedDeviceValueExpression:ValueExpression;

    /**
     * Value expression holding the scale to width state.
     * /
    [Bindable]
    public var scaleModeValueExpression:ValueExpression;

    /**
     * The value expression evaluating to the zoom factor according to the slider in the menu.
     * 100 means maximally zoomed in; 0 means maximally zoomed out.
     * /
    [Bindable]
    public var sliderZoomValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewIFrameToolbar",
      constructor: PreviewIFrameToolbar$,
      super$mZXl: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        deviceInfoValueExpression: null,
        selectedDeviceValueExpression: null,
        scaleModeValueExpression: null,
        sliderZoomValueExpression: null
      },
      statics: {
        FULL_WIDTH_BUTTON_ITEM_ID: "fullWidthButton",
        PREVIEW_IFRAME_TOOLBAR_BUTTON_WRAPPER_ITEM_ID: "previewIframeToolbarButtonWrapper",
        RESPONSIVE_MODE_BUTTON_ITEM_ID: "responsiveModeButton",
        DEVELOPMENT_MODE_BUTTON_ITEM_ID: "developmentMode"
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.components.IconSplitButton",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.plugins.OnlyIf",
        "com.coremedia.cms.editor.sdk.preview.DevelopmentModeButton",
        "com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSlider",
        "com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu",
        "com.coremedia.cms.editor.sdk.preview.zoom.SetScaleModeAction"
      ]
    };
});
