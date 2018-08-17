Ext.define("com.coremedia.cms.editor.sdk.actions.metadata.MetadataBeanActionBase", function(MetadataBeanActionBase) {/*package com.coremedia.cms.editor.sdk.actions.metadata {
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.data.Bean;

/**
 * MetadataAction that works on a bean metadata node. Provides convenience
 * functionality to extract a bean from the default metadata property.
 * /
[PublicApi]
public class MetadataBeanActionBase extends MetadataAction {

  private var useParentNode:Boolean;

  public*/ function MetadataBeanActionBase$(config/*:MetadataBeanAction = null*/) {if(arguments.length<=0)config=null;
    this.useParentNode$teSQ = AS3.getBindable(config,"useParentNode");
    this.super$teSQ(config);
  }/*

  /**
   * @private because MetadataTreeNode parameter is not public API
   * /
  protected*/ function getBeanForMetadata(metadata/*:MetadataTreeNode*/)/*:Bean*/ {
    return AS3.as( com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(this.getBeanMetadataNodeForMetadata$teSQ(metadata)),  com.coremedia.ui.data.Bean);
  }/*

  private*/ function getBeanMetadataNodeForMetadata(metadata/*:MetadataTreeNode*/)/*:MetadataTreeNode*/ {
    var beanNode/*:MetadataTreeNode*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(metadata) ? metadata : undefined;
    if (this.useParentNode$teSQ) {
      beanNode = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getFirstBeanParentNode(metadata);
    }
    return beanNode;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction",
      metadata: {"": ["PublicApi"]},
      useParentNode$teSQ: false,
      constructor: MetadataBeanActionBase$,
      super$teSQ: function() {
        com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction.prototype.constructor.apply(this, arguments);
      },
      getBeanForMetadata: getBeanForMetadata,
      getBeanMetadataNodeForMetadata$teSQ: getBeanMetadataNodeForMetadata,
      requires: [
        "com.coremedia.cms.editor.sdk.actions.metadata.MetadataAction",
        "com.coremedia.ui.data.Bean"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.MetadataHelper"]
    };
});
