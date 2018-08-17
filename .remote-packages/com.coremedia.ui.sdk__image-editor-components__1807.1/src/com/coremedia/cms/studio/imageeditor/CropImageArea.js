Ext.define("com.coremedia.cms.studio.imageeditor.CropImageArea", function(CropImageArea) {/*package com.coremedia.cms.studio.imageeditor{
import com.coremedia.cms.studio.imageeditor.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.Binding;
public class CropImageArea extends CropImageAreaBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.studio.imageeditor.config.cropImageArea";

    public*/function CropImageArea$(config/*:CropImageArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.studio.imageeditor.CropImageAreaBase*/ =AS3.cast(com.coremedia.cms.studio.imageeditor.CropImageAreaBase,{});
    var defaults_$1/*:CropImageArea*/ =AS3.cast(CropImageArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.cls = "crop-container x-resizable x-component-resizable x-component-default-resizable x-resizable-pinned";
    var ui_Binding_32_5_$1/*:com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_32_5_$1,"destination" , this.getCropBoundsValueExpression(config));
    AS3.setBindable(ui_Binding_32_5_$1,"ifUndefined" , null);
    AS3.setBindable(ui_Binding_32_5_$1,"source" , com.coremedia.cms.studio.imageeditor.CropImageAreaBase.createStoredCropBoundsValueExpression(config));
    AS3.setBindable(ui_Binding_32_5_$1,"twoWay" , true);
    var ui_Binding_36_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_36_5_$1,"destination" , this.getTransformValueExpression(config));
    AS3.setBindable(ui_Binding_36_5_$1,"source" , this.getCropTransformationValueExpression(config));
    var ui_Binding_38_5_$1/*: com.coremedia.ui.plugins.Binding*/ =AS3.cast(com.coremedia.ui.plugins.Binding,{});
    AS3.setBindable(ui_Binding_38_5_$1,"destination" , "imageEditorViewModel." + com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP + AS3.getBindable(config,"variant").key);
    AS3.setBindable(ui_Binding_38_5_$1,"source" , AS3.getBindable(config,"imageSettingsValueExpression").extendBy('enlarge', AS3.getBindable(config,"variant").key));
    AS3.setBindable(ui_Binding_38_5_$1,"ifUndefined" , false);
    AS3.setBindable(ui_Binding_38_5_$1,"twoWay" , true);
    config_$1.plugins = [ui_Binding_32_5_$1, ui_Binding_36_5_$1, ui_Binding_38_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Yorr(config_$1);
  }/*

    /**
     * * A value expression which defines that the image settings may be written due to view model changes.
     * * If the image is still checked in, the document must not be checked out automatically. This would happen if
     * * the image editor computes different transform and relative properties for legacy content.
     * * If the content is checked out by the user, the new computed values are written back to the settings.
     * /
    [Bindable]
    public var imageSettingsWritableValueExpression:ValueExpression;

    [Bindable]
    public var variantBoxedImageDimensionValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.CropImageAreaBase",
      alias: "widget.com.coremedia.cms.studio.imageeditor.config.cropImageArea",
      constructor: CropImageArea$,
      super$Yorr: function() {
        com.coremedia.cms.studio.imageeditor.CropImageAreaBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        imageSettingsWritableValueExpression: null,
        variantBoxedImageDimensionValueExpression: null
      },
      requires: [
        "com.coremedia.cms.studio.imageeditor.CropImageAreaBase",
        "com.coremedia.ui.plugins.Binding",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase"]
    };
});
