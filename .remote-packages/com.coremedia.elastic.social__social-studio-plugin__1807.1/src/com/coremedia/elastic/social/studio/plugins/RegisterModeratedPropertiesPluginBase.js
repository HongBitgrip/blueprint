Ext.define("com.coremedia.elastic.social.studio.plugins.RegisterModeratedPropertiesPluginBase", function(RegisterModeratedPropertiesPluginBase) {/*package com.coremedia.elastic.social.studio.plugins {
import com.coremedia.cms.editor.sdk.EditorPlugin;
import com.coremedia.cms.editor.sdk.IEditorContext;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;

[PublicApi]
public class RegisterModeratedPropertiesPluginBase implements EditorPlugin {

  private var moderatedPropertiesList:Array;

  public*/ function RegisterModeratedPropertiesPluginBase$(config/*:RegisterModeratedPropertiesPlugin = null*/) {if(arguments.length<=0)config=null;
    this.moderatedPropertiesList$FAw1 = AS3.getBindable(config,"propertyNames");
  }/*

  public*/ function init(editorContext/*:IEditorContext*/)/*:void*/ {

    (AS3.as(com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance(),  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).registerModeratedProperties(this.moderatedPropertiesList$FAw1);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      metadata: {"": ["PublicApi"]},
      moderatedPropertiesList$FAw1: null,
      constructor: RegisterModeratedPropertiesPluginBase$,
      init: init,
      requires: ["com.coremedia.cms.editor.sdk.EditorPlugin"],
      uses: ["com.coremedia.elastic.social.studio.model.impl.ModerationImpl"]
    };
});
