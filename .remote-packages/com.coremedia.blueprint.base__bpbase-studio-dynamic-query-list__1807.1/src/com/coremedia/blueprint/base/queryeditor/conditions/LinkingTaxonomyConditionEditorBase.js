Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.LinkingTaxonomyConditionEditorBase", function(LinkingTaxonomyConditionEditorBase) {/*package com.coremedia.blueprint.base.queryeditor.conditions {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;

public class LinkingTaxonomyConditionEditorBase extends ConditionEditor {

  public*/ function LinkingTaxonomyConditionEditorBase$(config/*:ContextConditionEditor = null*/) {if(arguments.length<=0)config=null;
    this.super$19mn(config);
  }/*

  /**
   * Ensures that the substruct the condition editor
   * writes into is created.
   * /
  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.afterRender.call(this);
    var c/*:Content*/ = AS3.getBindable(this,"bindTo").getValue();
    var struct/*:Struct*/ = c.getProperties().get('localSettings');
    struct.getType().addStructProperty('fq');
    var fq/*:Struct*/ = struct.get('fq');
    fq.getType().addBooleanProperty(this.propertyName, true);
    fq.set(this.propertyName,true);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor",
      constructor: LinkingTaxonomyConditionEditorBase$,
      super$19mn: function() {
        com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      requires: ["com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditor"]
    };
});
