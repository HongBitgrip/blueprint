Ext.define("com.coremedia.cms.editor.sdk.plugins.EnableStateBasedPublicationButtonsPluginBase", function(EnableStateBasedPublicationButtonsPluginBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;

[PublicApi]
public class EnableStateBasedPublicationButtonsPluginBase implements EditorPlugin {
  private var adminOnly:Boolean;

  public*/ function EnableStateBasedPublicationButtonsPluginBase$(config/*:EnableStateBasedPublicationButtonsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.adminOnly$NNQ6 = AS3.getBindable(config,"adminOnly") || false;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    if (this.adminOnly$NNQ6 && !com.coremedia.cap.common.SESSION.getUser().isAdministrative()) {
      return;
    }

    AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,editorContext).enableStateBasedPublication();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      adminOnly$NNQ6: false,
      constructor: EnableStateBasedPublicationButtonsPluginBase$,
      init: init,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.EditorPlugin"
      ],
      uses: ["com.coremedia.cms.editor.sdk.EditorContextImpl"]
    };
});
