Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentMetaDataFormDispatcher", function(DocumentMetaDataFormDispatcher) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.form.Label;
[PublicApi]
/**
 The DocumentMetaDataFormDispatcher chooses based on the bindTo which DocumentMetaDataForm is appropriate for editing the metadata of the content.
 * /
public class DocumentMetaDataFormDispatcher extends SubtypeAwareSwitchingContainer{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentMetaDataFormDispatcher";

    public*/function DocumentMetaDataFormDispatcher$(config/*:DocumentMetaDataFormDispatcher = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer,{});
    var defaults_$1/*:DocumentMetaDataFormDispatcher*/ =AS3.cast(DocumentMetaDataFormDispatcher,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"activeItemValueExpression" , AS3.getBindable(config,"bindTo").extendBy('type.name'));
    var editor_PropertyField_29_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    AS3.setBindable(editor_PropertyField_29_5_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    config_$1["defaultType"] = editor_PropertyField_29_5_$1['xtype'];
    delete editor_PropertyField_29_5_$1['xtype'];
    delete editor_PropertyField_29_5_$1['xclass'];
    config_$1.defaults = editor_PropertyField_29_5_$1;
    var label_33_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_33_5_$1,"text" , "");
    config_$1.items = [label_33_5_$1];
    config_$1.itemTemplate = null;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$yDLN(config_$1);
  }/*

    /**
     * a property path to the Content to find a form for
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentMetaDataFormDispatcher",
      constructor: DocumentMetaDataFormDispatcher$,
      super$yDLN: function() {
        com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "Ext.form.Label",
        "com.coremedia.cms.editor.sdk.components.SubtypeAwareSwitchingContainer",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.PropertyField"]
    };
});
