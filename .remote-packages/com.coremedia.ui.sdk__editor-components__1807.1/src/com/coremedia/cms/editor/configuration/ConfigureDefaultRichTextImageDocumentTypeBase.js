Ext.define("com.coremedia.cms.editor.configuration.ConfigureDefaultRichTextImageDocumentTypeBase", function(ConfigureDefaultRichTextImageDocumentTypeBase) {/*package com.coremedia.cms.editor.configuration {

import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;

/**
 * An editor plugin that can be used to set
 * the name of the document type of images that are typically inserted
 * into rich text values. When opening the collection window from a
 * rich text property field, this document type will be preselected.
 * /
[PublicApi]
public class ConfigureDefaultRichTextImageDocumentTypeBase implements EditorPlugin {
  private var defaultRichTextImageType:String;

  public*/ function ConfigureDefaultRichTextImageDocumentTypeBase$(config/*:ConfigureDefaultRichTextImageDocumentType = null*/) {if(arguments.length<=0)config=null;
    this.defaultRichTextImageType$ku5V = AS3.getBindable(config,"defaultRichTextImageType");
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    editorContext.setDefaultRichTextImageDocumentType(this.defaultRichTextImageType$ku5V);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      defaultRichTextImageType$ku5V: null,
      constructor: ConfigureDefaultRichTextImageDocumentTypeBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"]
    };
});
