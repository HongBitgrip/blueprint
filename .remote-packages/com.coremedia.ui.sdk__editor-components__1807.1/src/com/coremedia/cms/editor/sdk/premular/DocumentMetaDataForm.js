Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentMetaDataForm", function(DocumentMetaDataForm) {/*package com.coremedia.cms.editor.sdk.premular{
import ext.container.Container;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.layout.container.AnchorLayout;
[PublicApi]
/**
 This is the base of all metadata document forms. The metadata form will be shown in an expandable area below the document form.
 Subtypes should be named after the ContentType which the form should edit. The itemId of a concrete DocumentMetaDataForm must contain the exact content type of documents for which this form
 is appropriate.
 DEPRECATED
 * /
public class DocumentMetaDataForm extends Container{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentMetaDataForm";

    public*/function DocumentMetaDataForm$(config/*:DocumentMetaDataForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var defaults_$1/*:DocumentMetaDataForm*/ =AS3.cast(DocumentMetaDataForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    var editor_PropertyField_31_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_31_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    editor_PropertyField_31_5_$1.labelSeparator = "";
    editor_PropertyField_31_5_$1.labelAlign = "top";
    config_$1["defaultType"] = editor_PropertyField_31_5_$1['xtype'];
    delete editor_PropertyField_31_5_$1['xtype'];
    delete editor_PropertyField_31_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_31_5_$1;
    var layout_Anchor_36_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_36_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$djAG(config_$1);
  }/*

    /**
     * a property path evaluating to the Content to be edited by this form.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentMetaDataForm",
      constructor: DocumentMetaDataForm$,
      super$djAG: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Anchor",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PropertyField"]
    };
});
