Ext.define("com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryActionBase", function(ShowTabContentInRepositoryActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.editorContext;

/**
 * An action to show the target content in the library.
 * /
public class ShowTabContentInRepositoryActionBase extends AbstractTabContextMenuContentAction {
  public*/ function ShowTabContentInRepositoryActionBase$(config/*:ShowTabContentInRepositoryAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"_handler$DVWY"));
    this.super$DVWY(config);
  }/*

  private*/ function _handler()/*:void*/ {
    if (!this.getContextClickedContent()) {
      // Should not happen as in this case the action should be disabled anyway
      return;
    }

    var content/*:Content*/ = this.getContextClickedContent();
    var contentTypeName/*:String*/ = content.getType().getName();
    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getContentTreeRelation(contentTypeName).showInTree([content]);
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    return !this.getContextClickedContent();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
      constructor: ShowTabContentInRepositoryActionBase$,
      super$DVWY: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction.prototype.constructor.apply(this, arguments);
      },
      _handler$DVWY: _handler,
      checkHidden: checkHidden,
      requires: ["com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
