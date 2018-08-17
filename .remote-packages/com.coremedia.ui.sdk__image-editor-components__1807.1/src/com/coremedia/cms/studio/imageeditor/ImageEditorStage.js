Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditorStage", function(ImageEditorStage) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AutoLayout;
import com.coremedia.ui.plugins.Binding;
import ext.container.Container;
import com.coremedia.ui.plugins.BindStyleClassPlugin;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
public class ImageEditorStage extends ImageEditorStageBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.imageEditorStage";
    public static const ITEM_ID:String = "iestage";

    public*/function ImageEditorStage$(config/*:ImageEditorStage = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.ImageEditorStageBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorStageBase,{});
    var defaults_$1/*:ImageEditorStage*/ =AS3.cast(ImageEditorStage,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["focusable"] = true;
    config_$1.tabIndex = 0.0;
    var layout_AutoContainer_34_5_$1/*:ext.layout.container.AutoLayout*/ =AS3.cast(Ext.layout.container.Auto,{});
    AS3.setBindable(config_$1,"layout" , layout_AutoContainer_34_5_$1);
    var ui_Binding_37_5_$1/*:com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_37_5_$1,"destination" , this.getBackgroundColorExpression(AS3.getBindable(config,"imageEditorViewModel")));
    AS3.setBindable(ui_Binding_37_5_$1,"ifUndefined" , 'FFFFFFFF');
    AS3.setBindable(ui_Binding_37_5_$1,"source" , "imageSettings.coloring.background");
    AS3.setBindable(ui_Binding_37_5_$1,"twoWay" , true);
    config_$1.plugins = [ui_Binding_37_5_$1];
    var container_43_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.ITEM_ID_STAGE_INNER_CT);
    container_43_5_$1.cls =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK);
    var ui_BindStyleClassPlugin_46_9_$1/*:com.coremedia.ui.plugins.BindStyleClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindStyleClassPlugin,{});
    AS3.setBindable(ui_BindStyleClassPlugin_46_9_$1,"cls" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER));
    ui_BindStyleClassPlugin_46_9_$1.bindTo = this.createShowAllCropsValueExpression(AS3.getBindable(config,"showCropsValueExpression"));
    container_43_5_$1.plugins = [ui_BindStyleClassPlugin_46_9_$1];
    var ie_ImageArea_50_9_$1/*: com.coremedia.cms.studio.imageeditor.ImageArea*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.ImageArea,{});
    AS3.setBindable(ie_ImageArea_50_9_$1,"imageEditorViewModel" , AS3.getBindable(config,"imageEditorViewModel"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"readOnlyValueExpression" , AS3.getBindable(config,"readOnlyValueExpression"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"undoHistory" , AS3.getBindable(config,"undoHistory"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"imageSettingsValueExpression" , AS3.getBindable(config,"imageSettingsValueExpression"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"imageDimensionsValueExpression" , AS3.getBindable(config,"imageDimensionsValueExpression"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"boxedImageDimensionsValueExpression" , this.getBoxedImageDimensionsValueExpression(AS3.getBindable(config,"imageDimensionsValueExpression")));
    AS3.setBindable(ie_ImageArea_50_9_$1,"commonTransformationsValueExpression" , AS3.getBindable(config,"commonTransformationsValueExpression"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"variantsValueExpression" , AS3.getBindable(config,"variantsValueExpression"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"imageEditorStageBoundsValueExpression" , this.createImageEditorStageBoundsValueExpression());
    AS3.setBindable(ie_ImageArea_50_9_$1,"propertyName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"propertyName")));
    AS3.setBindable(ie_ImageArea_50_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(ie_ImageArea_50_9_$1,"hideIssues" , AS3.getBindable(config,"hideIssues"));
    container_43_5_$1["defaultType"] = ie_ImageArea_50_9_$1['xtype'];
    delete ie_ImageArea_50_9_$1['xtype'];
    delete ie_ImageArea_50_9_$1['xclass'];
    container_43_5_$1.defaults = ie_ImageArea_50_9_$1;
    var ui_Image_64_9_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_64_9_$1.itemId = "image";
    ui_Image_64_9_$1.cls =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.IMAGE_EDITOR_STAGE_IMAGE);
    var ui_BindPropertyPlugin_67_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_67_13_$1.componentProperty = "src";
    ui_BindPropertyPlugin_67_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeLocalImageUri"));
    ui_Image_64_9_$1.plugins = [ui_BindPropertyPlugin_67_13_$1];
    var ie_FocusAreaImageArea_71_9_$1/*: com.coremedia.cms.studio.imageeditor.FocusAreaImageArea*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.FocusAreaImageArea,{});
    ie_FocusAreaImageArea_71_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.ITEM_ID_FOCUS_AREA);
    AS3.setBindable(ie_FocusAreaImageArea_71_9_$1,"name" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_focusArea_imageArea_name')));
    var ie_FocusPointImageArea_73_9_$1/*: com.coremedia.cms.studio.imageeditor.FocusPointImageArea*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.FocusPointImageArea,{});
    ie_FocusPointImageArea_73_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.ITEM_ID_FOCUS_POINT);
    container_43_5_$1.items = [ui_Image_64_9_$1, ie_FocusAreaImageArea_71_9_$1, ie_FocusPointImageArea_73_9_$1];
    config_$1.items = [container_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$MDPv(config_$1);
  }/*

    [Bindable]
    public var showCropsValueExpression:ValueExpression;

    [Bindable]
    public var bindTo:ValueExpression;

    [Bindable]
    public var propertyName:String;


    [Bindable]
    public var hideIssues:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageEditorStageBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.imageEditorStage",
      constructor: ImageEditorStage$,
      super$MDPv: function() {
        com.coremedia.cms.studio.imageeditor.ImageEditorStageBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        showCropsValueExpression: null,
        bindTo: null,
        propertyName: null,
        hideIssues: false
      },
      statics: {ITEM_ID: "iestage"},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Auto",
        "com.coremedia.cms.studio.imageeditor.ImageEditorStageBase",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindStyleClassPlugin",
        "com.coremedia.ui.plugins.Binding",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.FocusAreaImageArea",
        "com.coremedia.cms.studio.imageeditor.FocusPointImageArea",
        "com.coremedia.cms.studio.imageeditor.ImageArea"
      ]
    };
});
