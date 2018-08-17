Ext.define("com.coremedia.blueprint.base.components.previewhighlighting.PlacementHighlightMetadata", function(PlacementHighlightMetadata) {/*package com.coremedia.blueprint.base.components.previewhighlighting {
import com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;

public class PlacementHighlightMetadata {
  private var metadataService:IMetadataService;

  public*/ function PlacementHighlightMetadata$(metadataService/*:IMetadataService*/) {
    this.metadataService$Dh_Y = metadataService;
  }/*

  public*/ function previewContainsPlacementMetadata()/*:Boolean*/ {
    var metadataTree/*:MetadataTree*/ = this.metadataService$Dh_Y.getMetadataTree();
    if (!metadataTree) {
      return undefined;
    }

    var root/*:MetadataTreeNode*/ = metadataTree.getRoot();
    if (!root) {
      return undefined;
    }

    var fragmentsOnPage/*:int*/ = root.findChildrenBy(AS3.bind(this,"selectIsPlacementRequest$Dh_Y")).length;
    var contains/*:Boolean*/ = fragmentsOnPage !== 0;
    return contains;
  }/*

  private*/ function selectIsPlacementRequest(node/*:MetadataTreeNode*/)/*:Boolean*/ {
    var property/*:Array*/ =AS3.as( node.getProperty("placementRequest"),  Array);
    if (property !== null && property.length > 0) {
      return true;
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadataService$Dh_Y: null,
      constructor: PlacementHighlightMetadata$,
      previewContainsPlacementMetadata: previewContainsPlacementMetadata,
      selectIsPlacementRequest$Dh_Y: selectIsPlacementRequest
    };
});
