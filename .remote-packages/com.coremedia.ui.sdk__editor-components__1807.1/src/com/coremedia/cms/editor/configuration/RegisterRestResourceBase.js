Ext.define("com.coremedia.cms.editor.configuration.RegisterRestResourceBase", function(RegisterRestResourceBase) {/*package com.coremedia.cms.editor.configuration {
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.ui.data.impl.BeanFactoryImpl;

/**
 * Register a beanClass, annotated with [RestResource(uriTemplate='...')], to instantiate for remote Beans whose
 * uriPath matches the URI template.
 *
 * @see com.coremedia.ui.data.impl.BeanFactoryImpl#registerRemoteBeanClass()
 * @see com.coremedia.cms.editor.configuration.RegisterRestResource
 * /
public class RegisterRestResourceBase implements EditorPlugin {

  private var config:RegisterRestResource;

  public*/ function RegisterRestResourceBase$(config/*:RegisterRestResource = null*/) {if(arguments.length<=0)config=null;
    this.config$$mEK = config;
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {
    AS3.cast(com.coremedia.ui.data.impl.BeanFactoryImpl,editorContext.getBeanFactory()).registerRemoteBeanClass(AS3.getBindable(this.config$$mEK,"beanClass"));
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      config$$mEK: null,
      constructor: RegisterRestResourceBase$,
      init: init,
      requires: [
        "com.coremedia.cms.editor.sdk.EditorPlugin",
        "com.coremedia.ui.data.impl.BeanFactoryImpl"
      ]
    };
});
