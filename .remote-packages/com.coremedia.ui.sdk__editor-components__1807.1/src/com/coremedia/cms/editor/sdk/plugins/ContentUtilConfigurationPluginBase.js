Ext.define("com.coremedia.cms.editor.sdk.plugins.ContentUtilConfigurationPluginBase", function(ContentUtilConfigurationPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.cms.editor.sdk.util.contentUtil;

[PublicApi]
public class ContentUtilConfigurationPluginBase implements EditorPlugin {
  private var expandFolderLimit:uint;

  public*/ function ContentUtilConfigurationPluginBase$(config/*:ContentUtilConfigurationPlugin = null*/) {if(arguments.length<=0)config=null;
    this.expandFolderLimit$IjF7 = AS3.getBindable(config,"expandFolderLimit");
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.contentUtil.expandFolderLimit = this.expandFolderLimit$IjF7;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      expandFolderLimit$IjF7: 0,
      constructor: ContentUtilConfigurationPluginBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.cms.editor.sdk.util.contentUtil"]
    };
});
