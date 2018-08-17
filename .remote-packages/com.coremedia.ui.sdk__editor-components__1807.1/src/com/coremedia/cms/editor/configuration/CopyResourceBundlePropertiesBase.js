Ext.define("com.coremedia.cms.editor.configuration.CopyResourceBundlePropertiesBase", function(CopyResourceBundlePropertiesBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.ui.i18n.ResourceBundle;

public class CopyResourceBundlePropertiesBase implements EditorPlugin {

  private var config:CopyResourceBundleProperties;

  public*/ function CopyResourceBundlePropertiesBase$(config/*:CopyResourceBundleProperties = null*/) {if(arguments.length<=0)config=null;
    this.config$uftd = config;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    com.coremedia.ui.i18n.ResourceBundle.overrideProperties(AS3.getBindable(this.config$uftd,"destination"), AS3.getBindable(this.config$uftd,"source"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      config$uftd: null,
      constructor: CopyResourceBundlePropertiesBase$,
      init: init,
      requires: [
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.ui.i18n.ResourceBundle"
      ]
    };
});
