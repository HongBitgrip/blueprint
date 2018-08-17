Ext.define("com.coremedia.ui.ckeditor.TableActionBase", function(TableActionBase) {/*package com.coremedia.ui.ckeditor {
import com.coremedia.ui.ckeditor.dialogs.Dialog_cmtable;

import ext.Action;
import ext.ComponentManager;

[PublicApi]
public class TableActionBase extends Action {
  private var ckEditor:*;

  public*/ function TableActionBase$(config/*: TableAction = null*/) {if(arguments.length<=0)config=null;
    this.super$yu40(config);
  }/*

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCKEditor(editor/*:**/)/*:void*/ {
    this.ckEditor$yu40 = editor;
  }/*

  internal*/ function exec()/*:void*/ {
     var dialogConfig/*:Dialog_cmtable*/ = AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmtable,{});
     AS3.setBindable(dialogConfig,"editor" , this.ckEditor$yu40);

     Ext.ComponentManager.create(dialogConfig).show();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {
        "": ["PublicApi"],
        setCKEditor: ["InjectFromExtParent"]
      },
      ckEditor$yu40: undefined,
      constructor: TableActionBase$,
      super$yu40: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      setCKEditor: setCKEditor,
      exec: exec,
      requires: [
        "Ext.Action",
        "Ext.ComponentManager"
      ],
      uses: ["com.coremedia.ui.ckeditor.dialogs.Dialog_cmtable"]
    };
});
