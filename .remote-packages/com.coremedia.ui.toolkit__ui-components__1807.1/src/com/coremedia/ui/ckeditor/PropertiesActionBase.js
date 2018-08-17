Ext.define("com.coremedia.ui.ckeditor.PropertiesActionBase", function(PropertiesActionBase) {/*package com.coremedia.ui.ckeditor {

import com.coremedia.ui.actions.DependencyTrackedAction;
import com.coremedia.ui.ckeditor.dialogs.Dialog_cmproperties;

import ext.ComponentManager;

[PublicApi]
public class PropertiesActionBase extends DependencyTrackedAction {
  private var ckEditor:*;

  public*/ function PropertiesActionBase$(config/*: PropertiesAction = null*/) {if(arguments.length<=0)config=null;
    this.super$ibel(config);
  }/*

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCKEditor(editor/*:**/)/*:void*/ {
    this.ckEditor$ibel = editor;

    if (this.ckEditor$ibel) {
      this.ckEditor$ibel.on("selectionChange",AS3.bind( this,"selectionChange$ibel"));
    }
  }/*

  override protected*/ function calculateDisabled()/*:Boolean*/ {
    return !this.ckEditor$ibel || !isEditableImage$static(this.ckEditor$ibel.getSelection().getSelectedElement());
  }/*

  private*/ function selectionChange()/*:void*/ {
    this.setDisabled(this.calculateDisabled());
  }/*

  internal*/ function exec()/*:void*/ {
    var dialogConfig/*:Dialog_cmproperties*/ = AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmproperties,{});
    AS3.setBindable(dialogConfig,"editor" , this.ckEditor$ibel);

    Ext.ComponentManager.create(dialogConfig).show();
  }/*

  private static*/ function isEditableImage$static(element/*:**/)/*:Boolean*/ {
    //TODO: EXT6_API
    return ! !element && !element.isReadOnly() && element['is']('img');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedAction",
      metadata: {
        "": ["PublicApi"],
        setCKEditor: ["InjectFromExtParent"]
      },
      ckEditor$ibel: undefined,
      constructor: PropertiesActionBase$,
      super$ibel: function() {
        com.coremedia.ui.actions.DependencyTrackedAction.prototype.constructor.apply(this, arguments);
      },
      setCKEditor: setCKEditor,
      calculateDisabled: calculateDisabled,
      selectionChange$ibel: selectionChange,
      exec: exec,
      requires: [
        "Ext.ComponentManager",
        "com.coremedia.ui.actions.DependencyTrackedAction"
      ],
      uses: ["com.coremedia.ui.ckeditor.dialogs.Dialog_cmproperties"]
    };
});
