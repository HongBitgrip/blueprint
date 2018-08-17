Ext.define("com.coremedia.cms.editor.sdk.premular.QueryForm", function(QueryForm) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.DocumentForm;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField;
import com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField;
public class QueryForm extends DocumentForm{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.queryForm";

    public*/function QueryForm$(config/*:QueryForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.DocumentForm*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentForm,{});
    var defaults_$1/*:QueryForm*/ =AS3.cast(QueryForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_StringPropertyField_17_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField,{});
    AS3.setBindable(editor_StringPropertyField_17_5_$1,"propertyName" , "Description");
    var editor_XmlPropertyField_18_5_$1/*:com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField,{});
    AS3.setBindable(editor_XmlPropertyField_18_5_$1,"propertyName" , "Expression");
    config_$1.items = [editor_StringPropertyField_17_5_$1, editor_XmlPropertyField_18_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$vudA(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.DocumentForm",
      alias: "widget.com.coremedia.cms.editor.sdk.config.queryForm",
      constructor: QueryForm$,
      super$vudA: function() {
        com.coremedia.cms.editor.sdk.premular.DocumentForm.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.DocumentForm",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.fields.StringPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.XmlPropertyField"
      ]
    };
});
