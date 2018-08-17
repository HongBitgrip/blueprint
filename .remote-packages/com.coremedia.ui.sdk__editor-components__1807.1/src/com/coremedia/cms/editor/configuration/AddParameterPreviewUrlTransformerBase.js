Ext.define("com.coremedia.cms.editor.configuration.AddParameterPreviewUrlTransformerBase", function(AddParameterPreviewUrlTransformerBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.preview.PreviewURI;

public class AddParameterPreviewUrlTransformerBase implements PreviewUrlTransformer {

  private var config:AddParameterPreviewUrlTransformer;

  public*/ function AddParameterPreviewUrlTransformerBase$(config/*:AddParameterPreviewUrlTransformer = null*/) {if(arguments.length<=0)config=null;
    this.config$OGoz = config;
  }/*

  public*/ function postProcessPreviewUrl(url/*:PreviewURI*/, callback/*:Function*/)/*:void*/ {
    url.setParameter(AS3.getBindable(this.config$OGoz,"name"), AS3.getBindable(this.config$OGoz,"value"));
    callback();
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.configuration.PreviewUrlTransformer"],
      config$OGoz: null,
      constructor: AddParameterPreviewUrlTransformerBase$,
      postProcessPreviewUrl: postProcessPreviewUrl,
      requires: ["com.coremedia.cms.editor.configuration.PreviewUrlTransformer"]
    };
});
