Ext.define("com.coremedia.cms.editor.sdk.actions.DeleteTabContentActionBase", function(DeleteTabContentActionBase) {/*package com.coremedia.cms.editor.sdk.actions {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import mx.resources.ResourceManager;

/**
 * An action to rename the target content in a pop-up dialog.
 * /
[ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
public class DeleteTabContentActionBase extends AbstractTabContextMenuContentAction {
  public*/ function DeleteTabContentActionBase$(config/*:DeleteTabContentAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"doDelete$3eDX"));
    this.super$3eDX(config);
  }/*

  private*/ function doDelete()/*:void*/ {
    var clickedContent/*:Content*/ = this.getContextClickedContent();
    if (!clickedContent) {
      return;
    }
    com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.startDelete([clickedContent]);
  }/*

  override protected*/ function checkHidden()/*:Boolean*/ {
    var clickedContent/*:Content*/ = this.getContextClickedContent();
    if (!clickedContent) {
      return true;
    }
    var hasMultipleParents/*:Boolean*/ = com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.hasMultipleParentsFor([clickedContent]);
    if (hasMultipleParents === undefined) {
      return undefined;
    }
    return com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction.prototype.checkHidden.call(this) || hasMultipleParents;
  }/*

  override protected*/ function checkDisabled()/*:Boolean*/ {
    var clickedContent/*:Content*/ = this.getContextClickedContent();
    if (!clickedContent) {
      return true;
    }
    return com.coremedia.cms.editor.sdk.actions.DeleteActionUtil.isDeleteDisabledFor([clickedContent]);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
      constructor: DeleteTabContentActionBase$,
      super$3eDX: function() {
        com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction.prototype.constructor.apply(this, arguments);
      },
      doDelete$3eDX: doDelete,
      checkHidden: checkHidden,
      checkDisabled: checkDisabled,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.DeleteActionUtil"]
    };
});
