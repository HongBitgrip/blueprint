Ext.define("com.coremedia.cms.editor.configuration.ConfigureDocumentTypesBase", function(ConfigureDocumentTypesBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.PreviewURI;
import com.coremedia.ui.data.BeanState;

public class ConfigureDocumentTypesBase implements EditorPlugin {

  private var config:ConfigureDocumentTypes;
  private var documentTypeNames:Array;

  public*/ function ConfigureDocumentTypesBase$(config/*:ConfigureDocumentTypes = null*/) {if(arguments.length<=0)config=null;
    this.config$VUyd = config;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    this.documentTypeNames$VUyd = AS3.getBindable(this.config$VUyd,"names").split(/\s*,\s*/);
    for (var i/*:int*/ = 0; i < this.documentTypeNames$VUyd.length; i++) {
      this.configureDocumentType(editorContext, this.documentTypeNames$VUyd[i]);
    }
  }/*

  public*/ function configureDocumentType(editorContext/*:IEditorContext*/, documentType/*:String*/)/*:void*/ {
    if (documentType) {
      if (AS3.getBindable(this.config$VUyd,"imageProperty")) {
        editorContext.registerImageDocumentType(documentType, AS3.getBindable(this.config$VUyd,"imageProperty"));
      }
      if (AS3.getBindable(this.config$VUyd,"richTextImageBlobProperty")) {
        editorContext.registerRichTextEmbeddableType(documentType, AS3.getBindable(this.config$VUyd,"richTextImageBlobProperty"));
      }
      if (AS3.getBindable(this.config$VUyd,"richTextLinkable")) {
        editorContext.registerRichTextLinkableType(documentType);
      }
      if (AS3.getBindable(this.config$VUyd,"exclude")) {
        editorContext.getExcludedDocumentTypes().push(documentType);
      }
      if (AS3.getBindable(this.config$VUyd,"excludeFromSearch")) {
        editorContext.getContentTypesExcludedFromSearch().push(documentType);
      }
      if (AS3.getBindable(this.config$VUyd,"hideInReferrers")) {
        editorContext.getDocumentTypesHiddenInReferrers().push(documentType);
      }
      if (AS3.getBindable(this.config$VUyd,"preview") === false) {
        editorContext.getDocumentTypesWithoutPreview().push(documentType);
      }
      if (AS3.getBindable(this.config$VUyd,"previewUrlTransformers")) {
        AS3.getBindable(this.config$VUyd,"previewUrlTransformers").forEach(AS3.bind(this,"registerPreviewUrlTransformer$VUyd"));
      }
      if (AS3.getBindable(this.config$VUyd,"mayCreate")) {
        (AS3.as(editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).addContentCreationFilter(documentType, AS3.getBindable(this.config$VUyd,"mayCreate"));
      }
      if (AS3.getBindable(this.config$VUyd,"mayPreview")) {
        (AS3.as(editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).addPreviewFilter(documentType, AS3.getBindable(this.config$VUyd,"mayPreview"));
      }
    }
  }/*

  private*/ function registerPreviewUrlTransformer(delegate/*:PreviewUrlTransformer*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.editorContext.registerPreviewUrlTransformer(function postProcessPreviewUrl(url/*:PreviewURI*/, callback/*:Function*/)/*:void*/ {
      if (AS3.is(url.getSource(),  com.coremedia.cap.content.Content)) {
        AS3.cast(com.coremedia.cap.content.Content,url.getSource()).load(function (content/*:Content*/)/*:void*/ {
          if (content.getState() === com.coremedia.ui.data.BeanState.READABLE && this$.isConfiguredRespectingSubtypes$VUyd(content.getType())) {
            delegate.postProcessPreviewUrl(url, callback);
          } else {
            callback();
          }
        });
      } else {
        //call back even it is not a content. Otherwise the preview of non-content will not work.
        callback();
      }
    });
  }/*

  private*/ function isConfiguredRespectingSubtypes(type/*:ContentType*/)/*:Boolean*/ {
    if (type) {
      for (var i/*:int*/ = 0; i < this.documentTypeNames$VUyd.length; i++) {
        if (this.documentTypeNames$VUyd[i] && type.isSubtypeOf(this.documentTypeNames$VUyd[i])) {
          return true;
        }
      }
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      config$VUyd: null,
      documentTypeNames$VUyd: null,
      constructor: ConfigureDocumentTypesBase$,
      init: init,
      configureDocumentType: configureDocumentType,
      registerPreviewUrlTransformer$VUyd: registerPreviewUrlTransformer,
      isConfiguredRespectingSubtypes$VUyd: isConfiguredRespectingSubtypes,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.ui.data.BeanState"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
