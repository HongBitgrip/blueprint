Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu", function(PreviewZoomMenu) {/*package com.coremedia.cms.editor.sdk.preview.zoom{
import com.coremedia.cms.editor.sdk.preview.zoom.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import ext.slider.SliderField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class PreviewZoomMenu extends PreviewZoomMenuBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    import ext.mixin.AdvancedFocusableContainerMixin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewZoomMenu";

    /**
     * the maximum slider value
     * /
    public static const MAX_VALUE:uint = 100;

    public*/function PreviewZoomMenu$(config/*:PreviewZoomMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase,{});
    var defaults_$1/*:PreviewZoomMenu*/ =AS3.cast(PreviewZoomMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.tabNavigationMode = ext.mixin.AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY;
    config_$1.plain = true;
    AS3.setBindable(config_$1,"height" , 200);
    AS3.setBindable(config_$1,"minWidth" , 18.0);
    AS3.setBindable(config_$1,"maxWidth" , 35.0);
    var ui_IconButton_41_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_41_5_$1,"scale" , "small");
    AS3.setBindable(ui_IconButton_41_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'zoom_in')));
    AS3.setBindable(ui_IconButton_41_5_$1,"handler" ,AS3.bind( this,"zoomIn"));
    AS3.setBindable(ui_IconButton_41_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewZoomMenu_zoom-in_text')));
    AS3.setBindable(ui_IconButton_41_5_$1,"margin" , "0 0 6 0");
    var sliderField_47_5_$1/*:ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    sliderField_47_5_$1.vertical = true;
    sliderField_47_5_$1.flex = 1.0;
    AS3.setBindable(sliderField_47_5_$1,"minValue" , 0.0);
    AS3.setBindable(sliderField_47_5_$1,"maxValue" , PreviewZoomMenu.MAX_VALUE);
    var ui_BindPropertyPlugin_52_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_52_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_52_9_$1.bindTo = AS3.getBindable(config,"sliderZoomValueExpression");
    sliderField_47_5_$1.plugins = [ui_BindPropertyPlugin_52_9_$1];
    var ui_IconButton_56_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_56_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(ui_IconButton_56_5_$1,"scale" , "small");
    AS3.setBindable(ui_IconButton_56_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'zoom_out')));
    AS3.setBindable(ui_IconButton_56_5_$1,"handler" ,AS3.bind( this,"zoomOut"));
    AS3.setBindable(ui_IconButton_56_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewZoomMenu_zoom-out_text')));
    AS3.setBindable(ui_IconButton_56_5_$1,"margin" , "6 0 0 0");
    config_$1.items = [ui_IconButton_41_5_$1, sliderField_47_5_$1, ui_IconButton_56_5_$1];
    var layout_VBox_65_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_65_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_65_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$z1vV(config_$1);
  }/*

    /**
     * The value expression evaluating to the zoom factor.
     * 100 means maximally zoomed in; 0 means maximally zoomed out.
     * /
    [Bindable]
    public var sliderZoomValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewZoomMenu",
      constructor: PreviewZoomMenu$,
      super$z1vV: function() {
        com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase.prototype.constructor.apply(this, arguments);
      },
      config: {sliderZoomValueExpression: null},
      statics: {MAX_VALUE: 100},
      requires: [
        "Ext.layout.container.VBox",
        "Ext.slider.Single",
        "com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "ext.mixin.AdvancedFocusableContainerMixin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
