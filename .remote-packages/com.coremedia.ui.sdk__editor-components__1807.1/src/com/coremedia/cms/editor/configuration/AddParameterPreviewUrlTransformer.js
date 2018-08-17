Ext.define("com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformer", function(AddParameterPreviewUrlTransformer) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AddParameterPreviewUrlTransformer extends AddParameterPreviewUrlTransformerBase{

    public*/function AddParameterPreviewUrlTransformer$(config/*:AddParameterPreviewUrlTransformer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase,{});
    var defaults_$1/*:AddParameterPreviewUrlTransformer*/ =AS3.cast(AddParameterPreviewUrlTransformer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2bVC(config_$1);
  }/*

    /**
     Name of the parameter to add to the preview URL.
     * /
    [Bindable]
    public var name:String;


    /**
     Value of the parameter to add to the preview URL.
     * /
    [Bindable]
    public var value:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddParameterPreviewUrlTransformer$,
      super$2bVC: function() {
        com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        name: null,
        value: null
      },
      requires: [
        "com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
