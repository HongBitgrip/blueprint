Ext.define("com.coremedia.cms.studio.imageeditor.ImageTransformationSlider", function(ImageTransformationSlider) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.slider.SliderField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.slider.SliderTip;
import ext.Component;
import ext.button.Button;
import com.coremedia.ui.actions.DependencyTrackedAction;
import ext.layout.container.HBoxLayout;
public class ImageTransformationSlider extends ImageTransformationSliderBase{

    import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.imageTransformationSlider";

    public*/function ImageTransformationSlider$(config/*:ImageTransformationSlider = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase,{});
    var defaults_$1/*:ImageTransformationSlider*/ =AS3.cast(ImageTransformationSlider,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var sliderField_48_5_$1/*:ext.slider.SliderField*/ =AS3.cast(Ext.slider.Single,{});
    sliderField_48_5_$1.itemId = "slider";
    AS3.setBindable(sliderField_48_5_$1,"width" , 201);
    AS3.setBindable(sliderField_48_5_$1,"minValue" , AS3.getBindable(config,"minValue"));
    AS3.setBindable(sliderField_48_5_$1,"maxValue" , AS3.getBindable(config,"maxValue"));
    sliderField_48_5_$1.decimalPrecision = AS3.getBindable(config,"decimalPrecision") || 0;
    sliderField_48_5_$1.increment = AS3.getBindable(config,"increment") || 1;
    var ui_BindPropertyPlugin_55_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_55_9_$1.bindTo = com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase.getSliderValueExpression(config);
    ui_BindPropertyPlugin_55_9_$1.componentEvent = "changecomplete";
    ui_BindPropertyPlugin_55_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_55_9_$1.ifUndefined = 0;
    var ui_BindPropertyPlugin_60_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_9_$1.bindTo = AS3.getBindable(config,"disabledValueExpression");
    ui_BindPropertyPlugin_60_9_$1.componentProperty = "disabled";
    var sliderTip_62_9_$1/*:ext.slider.SliderTip*/ =AS3.cast(Ext.slider.Tip,{});
    sliderField_48_5_$1.plugins = [ui_BindPropertyPlugin_55_9_$1, ui_BindPropertyPlugin_60_9_$1, sliderTip_62_9_$1];
    var component_65_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_65_5_$1.flex = 1.0;
    var button_66_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_66_5_$1.itemId = "reset";
    button_66_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    var ui_DependencyTrackedAction_69_9_$1/*:com.coremedia.ui.actions.DependencyTrackedAction*/ =AS3.cast(com.coremedia.ui.actions.DependencyTrackedAction,{});
    AS3.setBindable(ui_DependencyTrackedAction_69_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_label_reset')));
    AS3.setBindable(ui_DependencyTrackedAction_69_9_$1,"statusExpression" , AS3.getBindable(config,"undoHistory").createResetStatusValueExpression(
                                         AS3.getBindable(config,"disabledValueExpression"), AS3.getBindable(config,"propertyName"), AS3.getBindable(config,"defaultValue")
                                      ));
    AS3.setBindable(ui_DependencyTrackedAction_69_9_$1,"handler" , AS3.getBindable(config,"undoHistory").createPropertyResetCommand(
                                        AS3.getBindable(config,"resetCommandDescription"), AS3.getBindable(config,"propertyName"), AS3.getBindable(config,"defaultValue")
                                      ));
    button_66_5_$1.baseAction = new com.coremedia.ui.actions.DependencyTrackedAction(ui_DependencyTrackedAction_69_9_$1);
    config_$1.items = [sliderField_48_5_$1, component_65_5_$1, button_66_5_$1];
    var layout_HBox_81_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_81_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_81_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5ubY(config_$1);
  }/*

    [Bindable]
    public var disabledValueExpression:ValueExpression;

    [Bindable]
    public var undoHistory:UndoHistory;

    [Bindable]
    public var imageEditorViewModel:Bean;

    [Bindable]
    public var minValue:Number;


    [Bindable]
    public var maxValue:Number;


    [Bindable]
    public var defaultValue:Number;


    [Bindable]
    public var decimalPrecision:uint;


    [Bindable]
    public var increment:Number;


    [Bindable]
    public var propertyName:String;


    [Bindable]
    public var commandDescription:String;


    [Bindable]
    public var resetCommandDescription:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.imageTransformationSlider",
      constructor: ImageTransformationSlider$,
      super$5ubY: function() {
        com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        disabledValueExpression: null,
        undoHistory: null,
        imageEditorViewModel: null,
        minValue: NaN,
        maxValue: NaN,
        defaultValue: NaN,
        decimalPrecision: 0,
        increment: NaN,
        propertyName: null,
        commandDescription: null,
        resetCommandDescription: null
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.layout.container.HBox",
        "Ext.slider.Single",
        "Ext.slider.Tip",
        "com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase",
        "com.coremedia.ui.actions.DependencyTrackedAction",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
