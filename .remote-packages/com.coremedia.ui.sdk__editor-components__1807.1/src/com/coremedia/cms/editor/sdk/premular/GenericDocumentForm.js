Ext.define("com.coremedia.cms.editor.sdk.premular.GenericDocumentForm", function(GenericDocumentForm) {/*package com.coremedia.cms.editor.sdk.premular{
import com.coremedia.cms.editor.sdk.premular.*;
import net.jangaroo.ext.Exml;
/**
 A form for editing documents of types for which no custom document form has been provided.
 Depending on the document type definition, property fields are heuristically added to the form.
 * /
public class GenericDocumentForm extends GenericDocumentFormBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.genericDocumentForm";

    public*/function GenericDocumentForm$(config/*:GenericDocumentForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase,{});
    var defaults_$1/*:GenericDocumentForm*/ =AS3.cast(GenericDocumentForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.items = com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase.generatePropertyEditors(config);
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase.getContent(config).getType().getName());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$k2QK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.genericDocumentForm",
      constructor: GenericDocumentForm$,
      super$k2QK: function() {
        com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.premular.GenericDocumentFormBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
