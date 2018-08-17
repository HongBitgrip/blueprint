Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSlider", function(DeviceTypeSlider) {/*package com.coremedia.cms.editor.sdk.preview.zoom{
import com.coremedia.cms.editor.sdk.preview.zoom.*;
import net.jangaroo.ext.Exml;
import ext.toolbar.Spacer;
import ext.slider.SliderField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.DeviceTypes')]
/**
 Slider component that is used for switching device type.
 * /
public class DeviceTypeSlider extends DeviceTypeSliderBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.deviceTypeSlider";

    public static const SLIDER_WIDTH:Number = 150.0;

    public*/function DeviceTypeSlider$(config/*:DeviceTypeSlider = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase,{});
    var defaults_$1/*:DeviceTypeSlider*/ =AS3.cast(DeviceTypeSlider,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"hidden" , true);
    AS3.setBindable(config_$1,"width" , Number(this.resourceManager.getString('com.coremedia.cms.editor.DeviceTypes', 'Device_label_width')) + DeviceTypeSlider.SLIDER_WIDTH);
    var tbSpacer_46_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_46_5_$1,"width" , 6);
    var sliderField_47_5_$1/*:ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    AS3.setBindable(sliderField_47_5_$1,"width" , DeviceTypeSlider.SLIDER_WIDTH);
    sliderField_47_5_$1.increment = com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.INCREMENT_VALUE;
    sliderField_47_5_$1.animated = false;
    sliderField_47_5_$1.useTips = false;
    sliderField_47_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.SLIDER_COMPONENT_ITEM_ID);
    var ui_BindPropertyPlugin_53_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_53_9_$1.componentProperty = "maxValue";
    var ui_ValueExpression_55_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_55_13_$1,"context" , this.getModel());
    AS3.setBindable(ui_ValueExpression_55_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.MODEL_MAXINDEX));
    ui_BindPropertyPlugin_53_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_55_13_$1);
    var ui_BindPropertyPlugin_59_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_59_9_$1.bidirectional = true;
    var ui_ValueExpression_61_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_61_13_$1,"context" , this.getModel());
    AS3.setBindable(ui_ValueExpression_61_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.MODEL_INDEX));
    ui_BindPropertyPlugin_59_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_61_13_$1);
    sliderField_47_5_$1.plugins = [ui_BindPropertyPlugin_53_9_$1, ui_BindPropertyPlugin_59_9_$1];
    var tbSpacer_67_5_$1/*: ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_67_5_$1,"width" , 6);
    var ui_IconDisplayField_68_5_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_68_5_$1,"scale" , "small");
    ui_IconDisplayField_68_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.DEFAULT.getSkin());
    AS3.setBindable(ui_IconDisplayField_68_5_$1,"width" , parseInt(this.resourceManager.getString('com.coremedia.cms.editor.DeviceTypes', 'Device_label_width')));
    var ui_BindPropertyPlugin_72_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_9_$1.bidirectional = false;
    ui_BindPropertyPlugin_72_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_72_9_$1.bindTo = AS3.getBindable(config,"selectedDeviceValueExpression");
    ui_BindPropertyPlugin_72_9_$1.transformer = com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.getLocalizedText;
    ui_BindPropertyPlugin_72_9_$1.ifUndefined = this.resourceManager.getString('com.coremedia.cms.editor.DeviceTypes', 'Device_default_text');
    var ui_BindPropertyPlugin_77_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_77_9_$1.bidirectional = false;
    ui_BindPropertyPlugin_77_9_$1.componentProperty = "iconCls";
    ui_BindPropertyPlugin_77_9_$1.bindTo = AS3.getBindable(config,"selectedDeviceValueExpression");
    ui_BindPropertyPlugin_77_9_$1.transformer = com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.getIconClass;
    ui_BindPropertyPlugin_77_9_$1.ifUndefined = this.resourceManager.getString('com.coremedia.cms.editor.DeviceTypes', 'Device_default_icon');
    ui_IconDisplayField_68_5_$1.plugins = [ui_BindPropertyPlugin_72_9_$1, ui_BindPropertyPlugin_77_9_$1];
    config_$1.items = [tbSpacer_46_5_$1, sliderField_47_5_$1, tbSpacer_67_5_$1, ui_IconDisplayField_68_5_$1];
    var layout_HBox_86_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_86_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_86_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_6ci(config_$1);
  }/*

    /**
     * Value expression holding the device information for the previewed object.
     * This component uses the expression read-only, it does not change its value.
     * /
    [Bindable]
    public var deviceInfoValueExpression:com.coremedia.ui.data.ValueExpression;

    /**
     * Value expression holding the currently selected device type. The device type includes all
     * the device information including width and height.
     * The value of the expression is updated when the user selects a different device or the
     * responsive info expression changes.
     * /
    [Bindable]
    public var selectedDeviceValueExpression:com.coremedia.ui.data.ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.deviceTypeSlider",
      constructor: DeviceTypeSlider$,
      super$_6ci: function() {
        com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        deviceInfoValueExpression: null,
        selectedDeviceValueExpression: null
      },
      statics: {SLIDER_WIDTH: 150.0},
      requires: [
        "Ext.layout.container.HBox",
        "Ext.slider.Single",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.DeviceTypes_properties",
        "com.coremedia.cms.editor.sdk.preview.zoom.DeviceTypeSliderBase",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
