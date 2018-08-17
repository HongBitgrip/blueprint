Ext.define("com.coremedia.cms.studio.imageeditor.ImageDimensionsDisplay", function(ImageDimensionsDisplay) {/*package com.coremedia.cms.studio.imageeditor{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.panel.Panel;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
/** Displays image dimensions * /
public class ImageDimensionsDisplay extends Container{

    import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
    import com.coremedia.ui.data.Blob;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.imageDimensionsDisplay";

    public*/function ImageDimensionsDisplay$(config/*:ImageDimensionsDisplay = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:ImageDimensionsDisplay*/ =AS3.cast(ImageDimensionsDisplay,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var ui_BindVisibilityPlugin_35_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_35_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('properties', AS3.getBindable(config,"propertyName"));
    AS3.setBindable(ui_BindVisibilityPlugin_35_5_$1,"transformer" , function(data/*:Blob*/)/*:Boolean*/ { return data && (data.getSize()!==undefined);});
    config_$1.plugins = [ui_BindVisibilityPlugin_35_5_$1];
    var panel_39_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    config_$1["defaultType"] = panel_39_5_$1['xtype'];
    delete panel_39_5_$1['xtype'];
    delete panel_39_5_$1['xclass'];
    config_$1.defaults = panel_39_5_$1;
    var displayField_42_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_42_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    AS3.setBindable(displayField_42_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_label_dimensions_original_size'));
    var displayField_45_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_45_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_label_dimensions_width') + ':'));
    displayField_45_5_$1.itemId = "width";
    var ui_BindPropertyPlugin_49_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_49_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_49_9_$1.transformer = function(dimensions/*:ImageDimensions*/)/*:String*/ {return dimensions.width + ' px';};
    var ui_ValueExpression_52_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_52_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.IMAGE_ORIGINAL_DIMENSIONS));
    AS3.setBindable(ui_ValueExpression_52_13_$1,"context" , AS3.getBindable(config,"model"));
    ui_BindPropertyPlugin_49_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_52_13_$1);
    displayField_45_5_$1.plugins = [ui_BindPropertyPlugin_49_9_$1];
    var displayField_58_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_58_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_label_dimensions_height') + ':'));
    displayField_58_5_$1.itemId = "height";
    var ui_BindPropertyPlugin_62_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_62_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_62_9_$1.transformer = function(dimensions/*:ImageDimensions*/)/*:String*/ {return dimensions.height + ' px';};
    var ui_ValueExpression_65_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_65_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.IMAGE_ORIGINAL_DIMENSIONS));
    AS3.setBindable(ui_ValueExpression_65_13_$1,"context" , AS3.getBindable(config,"model"));
    ui_BindPropertyPlugin_62_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_65_13_$1);
    displayField_58_5_$1.plugins = [ui_BindPropertyPlugin_62_9_$1];
    config_$1.items = [displayField_42_5_$1, displayField_45_5_$1, displayField_58_5_$1];
    var layout_VBox_73_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_73_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_73_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ntiT(config_$1);
  }/*

    [Bindable]
    public var bindTo:com.coremedia.ui.data.ValueExpression;

    [Bindable]
    public var propertyName:String;


    /** ImageEditor local bean * /
    [Bindable]
    public var model:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.imageDimensionsDisplay",
      constructor: ImageDimensionsDisplay$,
      super$ntiT: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {
        bindTo: null,
        propertyName: null,
        model: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase"]
    };
});
