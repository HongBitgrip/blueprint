Ext.define("com.coremedia.cms.editor.sdk.premular.fields.richtext.LinkActionBase", function(LinkActionBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.richtext {
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.ckeditor.*;
import com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink;
import com.coremedia.ui.data.ValueExpression;

import ext.Action;
import ext.ComponentManager;

[PublicApi]
public class LinkActionBase extends Action {
  private var ckEditor:*;
  private var effectiveReadOnlyExpression:ValueExpression;
  private var externalLinkTargetTypeValueExpression:ValueExpression;

  public*/ function LinkActionBase$(config/*:LinkAction = null*/) {if(arguments.length<=0)config=null;
    this.super$2YYp(config);

    this.effectiveReadOnlyExpression$2YYp = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(
            AS3.getBindable(config,"bindTo"),
            AS3.getBindable(config,"forceReadOnlyValueExpression"));

    this.externalLinkTargetTypeValueExpression$2YYp = AS3.getBindable(config,"externalLinkTargetTypeValueExpression");

    this.selectionChange$2YYp();
  }/*

  /** @private * /
  [InjectFromExtParent]
  public*/ function setCKEditor(editor/*:**/)/*:void*/ {
    this.ckEditor$2YYp = editor;

    if (this.ckEditor$2YYp) {
      this.ckEditor$2YYp.on("selectionChange",AS3.bind( this,"selectionChange$2YYp"));
    }
  }/*

  private*/ function selectionChange()/*:void*/ {
    var selection/*:**/ = this.ckEditor$2YYp && this.ckEditor$2YYp.getSelection();
    var ascendant/*:**/ = selection && com.coremedia.ui.ckeditor.AnchorUtil.getSelectedAnchor(selection);

    this.setDisabled(this.effectiveReadOnlyExpression$2YYp.getValue() ||
            com.coremedia.ui.ckeditor.AnchorUtil.isLinkWithoutUrlScheme(ascendant) ||
            com.coremedia.ui.ckeditor.AnchorUtil.isLinkAnchorReference(ascendant));
  }/*


  internal*/ function exec()/*:void*/ {
    var dialogConfig/*:Dialog_cmlink*/ = AS3.cast(com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink,{});
    AS3.setBindable(dialogConfig,"editor" , this.ckEditor$2YYp);
    AS3.setBindable(dialogConfig,"targetTypeValueExpression" , this.externalLinkTargetTypeValueExpression$2YYp);

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
      ckEditor$2YYp: undefined,
      effectiveReadOnlyExpression$2YYp: null,
      externalLinkTargetTypeValueExpression$2YYp: null,
      constructor: LinkActionBase$,
      super$2YYp: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      setCKEditor: setCKEditor,
      selectionChange$2YYp: selectionChange,
      exec: exec,
      requires: [
        "Ext.Action",
        "Ext.ComponentManager",
        "com.coremedia.ui.ckeditor.AnchorUtil",
        "com.coremedia.ui.ckeditor.dialogs.Dialog_cmlink"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
