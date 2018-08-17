Ext.define("com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel", function(InnerPreviewPanel) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.container.Container;
import ext.Component;
import ext.layout.container.ContainerLayout;
public class InnerPreviewPanel extends InnerPreviewPanelBase{

    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.innerPreviewPanel";

    public static const DOCUMENT_DIMENSIONS_CHANGED_EVENT:String = "documentDimensionsChanged";

    private static const*/var PREVIEW_DEVICE_BLOCK$static/*:BEMBlock*/;/* =*/function PREVIEW_DEVICE_BLOCK$static_(){PREVIEW_DEVICE_BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-preview-device"));};/*
    private static const*/var PREVIEW_DEVICE_IFRAME_ELEMENT$static/*:BEMElement*/;/* =*/function PREVIEW_DEVICE_IFRAME_ELEMENT$static_(){PREVIEW_DEVICE_IFRAME_ELEMENT$static=( PREVIEW_DEVICE_BLOCK$static.createElement("iframe"));};/*
    private static const*/var PREVIEW_SCROLLBAR$static/*:String*/ = "preview-scrollbar";/*
    private static const*/var PREVIEW_DEVICE_SCROLLBAR$static/*:String*/ = "preview-device-scrollbar";/*

    public*/function InnerPreviewPanel$(config/*:InnerPreviewPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase,{});
    var defaults_$1/*:InnerPreviewPanel*/ =AS3.cast(InnerPreviewPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DARK.getSkin());
    var ui_BindPropertyPlugin_36_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_36_5_$1.componentProperty =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SCALE_MODE_PROPERTY);
    ui_BindPropertyPlugin_36_5_$1.bindTo = this.getDesktopModeScaleValueExpression();
    var ui_BindPropertyPlugin_38_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_38_5_$1.componentProperty =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SELECTED_DEVICE_PROPERTY);
    ui_BindPropertyPlugin_38_5_$1.bindTo = this.getSelectedDeviceValueExpression();
    var ui_BindPropertyPlugin_40_5_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_40_5_$1.componentProperty =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SLIDER_ZOOM_PROPERTY);
    ui_BindPropertyPlugin_40_5_$1.bindTo = this.getSliderZoomValueExpression();
    var ui_BEMPlugin_42_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_42_5_$1,"block" , "cm-preview-panel");
    config_$1.plugins = [ui_BindPropertyPlugin_36_5_$1, ui_BindPropertyPlugin_38_5_$1, ui_BindPropertyPlugin_40_5_$1, ui_BEMPlugin_42_5_$1];
    var container_46_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SCALING_CONTAINER_ITEM_ID);
    var editor_PreviewIFrame_49_9_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewIFrame*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewIFrame,{});
    editor_PreviewIFrame_49_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.IFRAME_ITEM_ID);
    editor_PreviewIFrame_49_9_$1.cls =net.jangaroo.ext.Exml.asString( PREVIEW_DEVICE_IFRAME_ELEMENT$static.getCSSClass());
    var box_52_9_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_52_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.DEVICE_SCROLLBAR_BOTTOM_ITEM_ID);
    box_52_9_$1.cls =net.jangaroo.ext.Exml.asString( PREVIEW_DEVICE_SCROLLBAR$static + " preview-scrollbar-bottom-container");
    AS3.setBindable(box_52_9_$1,"html" , "<div />");
    var box_55_9_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    box_55_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.DEVICE_SCROLLBAR_RIGHT_ITEM_ID);
    box_55_9_$1.cls =net.jangaroo.ext.Exml.asString( PREVIEW_DEVICE_SCROLLBAR$static + " preview-scrollbar-side-container");
    AS3.setBindable(box_55_9_$1,"html" , "<div class='preview-device-border-right-inner'/>");
    container_46_5_$1.items = [editor_PreviewIFrame_49_9_$1, box_52_9_$1, box_55_9_$1];
    var ui_BEMPlugin_60_9_$1/*: com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_60_9_$1,"block" , PREVIEW_DEVICE_BLOCK$static);
    container_46_5_$1.plugins = [ui_BEMPlugin_60_9_$1];
    var layout_Container_63_9_$1/*:ext.layout.container.ContainerLayout*/ =AS3.cast(Ext.layout.container.Container,{});
    AS3.setBindable(container_46_5_$1,"layout" , layout_Container_63_9_$1);
    var box_66_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    box_66_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SCROLLBAR_BOTTOM_ITEM_ID);
    box_66_5_$1.cls =net.jangaroo.ext.Exml.asString( PREVIEW_SCROLLBAR$static + " preview-scrollbar-bottom-container");
    AS3.setBindable(box_66_5_$1,"html" , "<div />");
    var box_69_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    box_69_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.SCROLLBAR_RIGHT_ITEM_ID);
    box_69_5_$1.cls =net.jangaroo.ext.Exml.asString( PREVIEW_SCROLLBAR$static + " preview-scrollbar-side-container");
    AS3.setBindable(box_69_5_$1,"html" , "<div />");
    config_$1.items = [container_46_5_$1, box_66_5_$1, box_69_5_$1];
    var layout_Container_74_5_$1/*: ext.layout.container.ContainerLayout*/ =AS3.cast(Ext.layout.container.Container,{});
    AS3.setBindable(config_$1,"layout" , layout_Container_74_5_$1);
    var editor_PreviewIFrameToolbar_77_5_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar,{});
    AS3.setBindable(editor_PreviewIFrameToolbar_77_5_$1,"selectedDeviceValueExpression" , this.getSelectedDeviceValueExpression());
    AS3.setBindable(editor_PreviewIFrameToolbar_77_5_$1,"hidden" , AS3.getBindable(config,"hideDeviceSlider"));
    AS3.setBindable(editor_PreviewIFrameToolbar_77_5_$1,"deviceInfoValueExpression" , this.getDeviceInfoValueExpression());
    AS3.setBindable(editor_PreviewIFrameToolbar_77_5_$1,"scaleModeValueExpression" , this.getDesktopModeScaleValueExpression());
    AS3.setBindable(editor_PreviewIFrameToolbar_77_5_$1,"sliderZoomValueExpression" , this.getSliderZoomValueExpression());
    config_$1.tbar = editor_PreviewIFrameToolbar_77_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Nl6I(config_$1);
  }/*

    /*
      Allows to hide the preview device slider
     * /
    [Bindable]
    public var hideDeviceSlider:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.innerPreviewPanel",
      constructor: InnerPreviewPanel$,
      super$Nl6I: function() {
        com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {hideDeviceSlider: false},
      statics: {
        DOCUMENT_DIMENSIONS_CHANGED_EVENT: "documentDimensionsChanged",
        PREVIEW_DEVICE_BLOCK: undefined,
        PREVIEW_DEVICE_IFRAME_ELEMENT: undefined,
        __initStatics__: function() {
          PREVIEW_DEVICE_BLOCK$static_();
          PREVIEW_DEVICE_IFRAME_ELEMENT$static_();
        }
      },
      requires: [
        "Ext.Component",
        "Ext.container.Container",
        "Ext.layout.container.Container",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrame",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar"
      ]
    };
});
