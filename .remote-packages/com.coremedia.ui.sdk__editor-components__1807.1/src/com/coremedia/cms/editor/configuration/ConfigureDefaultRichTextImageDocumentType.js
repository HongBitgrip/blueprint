Ext.define("com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentType", function(ConfigureDefaultRichTextImageDocumentType) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 An editor plugin that can be used to set
 the name of the document type of images that are typically inserted
 into rich text values. When opening the collection window from a
 rich text property field, this document type will be preselected.
 * /
public class ConfigureDefaultRichTextImageDocumentType extends ConfigureDefaultRichTextImageDocumentTypeBase{

    public*/function ConfigureDefaultRichTextImageDocumentType$(config/*:ConfigureDefaultRichTextImageDocumentType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase,{});
    var defaults_$1/*:ConfigureDefaultRichTextImageDocumentType*/ =AS3.cast(ConfigureDefaultRichTextImageDocumentType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Z6rk(config_$1);
  }/*

    /**
     The name of the document type of images that are typically inserted
     into rich text values.
     * /
    [Bindable]
    public var defaultRichTextImageType:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase",
      metadata: {"": ["PublicApi"]},
      constructor: ConfigureDefaultRichTextImageDocumentType$,
      super$Z6rk: function() {
        com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase.prototype.constructor.apply(this, arguments);
      },
      config: {defaultRichTextImageType: null},
      requires: [
        "com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
