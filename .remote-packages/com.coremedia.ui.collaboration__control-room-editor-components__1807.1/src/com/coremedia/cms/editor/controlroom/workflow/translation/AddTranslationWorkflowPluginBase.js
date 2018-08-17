Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.AddTranslationWorkflowPluginBase", function(AddTranslationWorkflowPluginBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;

/**
 * The base class of the <code>AddTranslationWorkflowPlugin</code>.
 * Do not instantiate this class directly. Use <code>AddTranslationWorkflowPlugin</code> instead.
 *
 * @see AddTranslationWorkflowPlugin
 * /
[PublicApi]
public class AddTranslationWorkflowPluginBase extends AddWorkflowPlugin {
  /**
   * Create an instance of this class.
   * Do not instantiate this class directly. Use <code>AddTranslationWorkflowPlugin</code> instead.
   *
   * @param config the configuration object
   * /
  public*/ function AddTranslationWorkflowPluginBase$(config/*:AddTranslationWorkflowPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$16A3(config);
    AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).registerTranslationProcessDefinition(AS3.getBindable(config,"processDefinitionName"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: AddTranslationWorkflowPluginBase$,
      super$16A3: function() {
        com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.AddWorkflowPlugin",
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
