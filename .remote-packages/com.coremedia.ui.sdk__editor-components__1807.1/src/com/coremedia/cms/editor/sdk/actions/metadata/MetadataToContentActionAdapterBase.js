Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapterBase", function(MetadataToContentActionAdapterBase) {/*package com.coremedia.cms.editor.sdk.actions.metadata {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.*;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;

import ext.Ext;

/**
 * Adapter that implements a MetadataAction based on a backing ContentAction.
 *
 * All critical methods are delegated to the backing ContentAction after extracting
 * a content from the underlying metadata. If no content can be obtained from
 * the MetadataTreeNode (or one of it's parents if useParentNode is enabled), the
 * backing content action is configured with an empty contents array.
 *
 * @see com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter
 * @see com.coremedia.cms.editor.sdk.actions.ContentAction
 * /
[PublicApi]
public class MetadataToContentActionAdapterBase extends MetadataBeanAction {

  private var backingContentAction:ContentAction;

  public*/ function MetadataToContentActionAdapterBase$(config/*:MetadataToContentActionAdapter = null*/) {if(arguments.length<=0)config=null;
    this.backingContentAction$RR5l = AS3.getBindable(config,"backingAction");
    var newConfig/*:MetadataToContentActionAdapter*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter,Ext.apply({
      iconCls: this.backingContentAction$RR5l.getIconCls(),
      text: this.backingContentAction$RR5l.getText(),
      handler:AS3.bind( this,"delegateToBackingAction$RR5l")
    }, config));
    this.super$RR5l(newConfig);
  }/*

  override protected*/ function isDisabledFor(metadata/*:MetadataTreeNode*/)/*:Boolean*/ {
    this.updateBackingContentAction$RR5l(metadata);
    return this.backingContentAction$RR5l['calculateDisabled']();
  }/*

  private*/ function delegateToBackingAction()/*:void*/ {
    this.updateBackingContentAction$RR5l(this.getMetadata());
    this.backingContentAction$RR5l.execute();
  }/*

  private*/ function updateBackingContentAction(metadata/*:MetadataTreeNode*/)/*:void*/ {
    var metadataContent/*:Content*/ = this.getContentForMetadata$RR5l(metadata);
    var contentArray/*:Array*/ = [];
    if (metadataContent) {
      contentArray.push(metadataContent);
    }
    this.backingContentAction$RR5l.setContents(contentArray);
  }/*

  private*/ function getContentForMetadata(metadata/*:MetadataTreeNode*/)/*:Content*/ {
    return AS3.as( this.getBeanForMetadata(metadata),  com.coremedia.cap.content.Content);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction",
      metadata: {"": ["PublicApi"]},
      backingContentAction$RR5l: null,
      constructor: MetadataToContentActionAdapterBase$,
      super$RR5l: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      delegateToBackingAction$RR5l: delegateToBackingAction,
      updateBackingContentAction$RR5l: updateBackingContentAction,
      getContentForMetadata$RR5l: getContentForMetadata,
      requires: [
        "Ext",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanAction"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.metadata.MetadataToContentActionAdapter"]
    };
});
