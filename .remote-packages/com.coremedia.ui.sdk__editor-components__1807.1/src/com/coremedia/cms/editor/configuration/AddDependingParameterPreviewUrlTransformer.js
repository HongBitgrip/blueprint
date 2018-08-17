Ext.define("com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformer", function(AddDependingParameterPreviewUrlTransformer) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AddDependingParameterPreviewUrlTransformer extends AddDependingParameterPreviewUrlTransformerBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AddDependingParameterPreviewUrlTransformer$(config/*:AddDependingParameterPreviewUrlTransformer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase*/ =AS3.cast(com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase,{});
    var defaults_$1/*:AddDependingParameterPreviewUrlTransformer*/ =AS3.cast(AddDependingParameterPreviewUrlTransformer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$IRRy(config_$1);
  }/*

    /**
     * ValueExpression returning the value of the parameter to add to the preview URL.
     *
     * value must be a String
     *
     * @see com.coremedia.ui.data.ValueExpression
     * /
    [Bindable]
    public var valueExpression:ValueExpression;

    /**
     Name of the parameter to add to the preview URL.
     * /
    [Bindable]
    public var name:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddDependingParameterPreviewUrlTransformer$,
      super$IRRy: function() {
        com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        valueExpression: null,
        name: null
      },
      requires: [
        "com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
