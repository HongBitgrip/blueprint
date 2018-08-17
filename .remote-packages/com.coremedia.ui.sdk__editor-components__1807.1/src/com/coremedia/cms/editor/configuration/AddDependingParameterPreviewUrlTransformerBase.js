Ext.define("com.coremedia.cms.editor.configuration.AddDependingParameterPreviewUrlTransformerBase", function(AddDependingParameterPreviewUrlTransformerBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.preview.PreviewURI;

public class AddDependingParameterPreviewUrlTransformerBase implements PreviewUrlTransformer {

  private var config:AddDependingParameterPreviewUrlTransformer;

  public*/ function AddDependingParameterPreviewUrlTransformerBase$(config/*:AddDependingParameterPreviewUrlTransformer = null*/) {if(arguments.length<=0)config=null;
    this.config$VLFj = config;
  }/*

  public*/ function postProcessPreviewUrl(url/*:PreviewURI*/, callback/*:Function*/)/*:void*/ {
    var value/*:String*/ = AS3.getBindable(this.config$VLFj,"valueExpression") &&AS3.as( AS3.getBindable(this.config$VLFj,"valueExpression").getValue(),  String);
    url.setParameter(AS3.getBindable(this.config$VLFj,"name"), value);
    callback();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.configuration.PreviewUrlTransformer"],
      config$VLFj: null,
      constructor: AddDependingParameterPreviewUrlTransformerBase$,
      postProcessPreviewUrl: postProcessPreviewUrl,
      requires: ["com.coremedia.cms.editor.configuration.PreviewUrlTransformer"]
    };
});
