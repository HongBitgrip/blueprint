Ext.define("com.coremedia.cms.editor.sdk.premular.fields.struct.CopyStructNodeAction", function(CopyStructNodeAction) {/*package com.coremedia.cms.editor.sdk.premular.fields.struct {
import com.coremedia.cms.editor.sdk.actions.ActionConfigUtil;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.ui.data.ValueExpression;

public class CopyStructNodeAction extends ContentAction {
  [Bindable]
  public var selectedNodeExpression:ValueExpression;

  public*/ function CopyStructNodeAction$(config/*: CopyStructNodeAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"selectedNodeExpression" , AS3.getBindable(config,"selectedNodeExpression"));
    this.super$_kQ8(AS3.cast(CopyStructNodeAction,com.coremedia.cms.editor.sdk.actions.ActionConfigUtil.extendConfig(config, "copyStructNode", {handler:AS3.bind( this,"copySelectedNode$_kQ8")})));
  }/*

  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.isDisabledFor.call(this,contents) ||
           !AS3.getBindable(this,"selectedNodeExpression").getValue();
  }/*

  private*/ function copySelectedNode()/*:void*/ {
    var selectedNode/*:StructTreeNode*/ = AS3.getBindable(this,"selectedNodeExpression").getValue();
    if (selectedNode) {
      com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardUtil.copyToClipboard(selectedNode);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      constructor: CopyStructNodeAction$,
      super$_kQ8: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      copySelectedNode$_kQ8: copySelectedNode,
      config: {selectedNodeExpression: null},
      requires: ["com.coremedia.cms.editor.sdk.actions.ContentAction"],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ActionConfigUtil",
        "com.coremedia.cms.editor.sdk.premular.fields.struct.StructClipboardUtil"
      ]
    };
});
