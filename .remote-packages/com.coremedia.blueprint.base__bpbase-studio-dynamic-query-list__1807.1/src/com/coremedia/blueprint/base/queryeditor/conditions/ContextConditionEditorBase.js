Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ContextConditionEditorBase", function(ContextConditionEditorBase) {/*package com.coremedia.blueprint.base.queryeditor.conditions {

public class ContextConditionEditorBase extends ConditionEditor {

  public*/ function ContextConditionEditorBase$(config/*:ContextConditionEditor = null*/) {if(arguments.length<=0)config=null;
    this.super$kE3R(config);

    // Ensures that the substruct the condition editor writes into is created as this acts as an indicator if the
    // form is shown (even if no context is specified) or not.
    com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase.applyBaseStruct(AS3.getBindable(this,"bindTo"), this.contentType, this.propertyName);
  }/*

  protected*/ function resolvePropertyName(propertyName/*:String*/)/*:String*/ {
    return "localSettings.fq." + propertyName;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor",
      constructor: ContextConditionEditorBase$,
      super$kE3R: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.constructor.apply(this, arguments);
      },
      resolvePropertyName: resolvePropertyName,
      requires: ["com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor"],
      uses: ["com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase"]
    };
});
