Ext.define("com.coremedia.cms.editor.sdk.premular.fields.TextAreaStringPropertyField", function(TextAreaStringPropertyField) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ResizableTextArea;
import ext.layout.container.FitLayout;
[PublicApi]
/**
 A text area that binds to a string property being edited inside
 of a document form. Specify the propertyName property for selecting
 the string property.
 * /
public class TextAreaStringPropertyField extends StringPropertyField{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.textAreaStringPropertyField";

    public*/function TextAreaStringPropertyField$(config/*:TextAreaStringPropertyField = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField,{});
    var defaults_$1/*:TextAreaStringPropertyField*/ =AS3.cast(TextAreaStringPropertyField,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_ResizableTextArea_22_5_$1/*:com.coremedia.ui.components.ResizableTextArea*/ =AS3.cast(com.coremedia.ui.components.ResizableTextArea,{});
    ui_ResizableTextArea_22_5_$1.itemId = "textAreaPropertyField";
    AS3.setBindable(ui_ResizableTextArea_22_5_$1,"height" , 100);
    ui_ResizableTextArea_22_5_$1.anchor = "100%";
    config_$1.items = [ui_ResizableTextArea_22_5_$1];
    var layout_Fit_27_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_27_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SeM7(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.textAreaStringPropertyField",
      constructor: TextAreaStringPropertyField$,
      super$SeM7: function() {
        com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField",
        "com.coremedia.ui.components.ResizableTextArea",
        "net.jangaroo.ext.Exml"
      ]
    };
});
