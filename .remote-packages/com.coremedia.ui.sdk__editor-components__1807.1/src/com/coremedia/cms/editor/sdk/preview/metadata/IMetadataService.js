Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService", function(IMetadataService) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
public interface IMetadataService {

  /**
   * Get the metadata tree for this metadata service (and thus for the preview
   * panel that the metadata service is associated with). Metadata embedded in
   * the previewed document is represented in terms of a tree. This metadata tree
   * originates from the DOM tree of the previewed document: Hierarchical
   * relationships between metadata tree nodes correspond to hierarchical relationships
   * between the DOM tree nodes that the respective metadata chunks are attached to.
   * If there are multiple metadata nodes attached to one DOM node the order of the
   * metadata nodes is translated to a new hierarchical relationship.
   *
   * It is possible to further filter the metadata tree by means of an optional
   * array of top level filter properties. If such an array is supplied, the metadata tree
   * contains only nodes that have at least one of the direct filter properties. In addition,
   * other top level properties than the given filter properties are filtered out. Consequently,
   * such a filtered metadata tree is a projection of the metadata tree that contains
   * all metadata.
   *
   * It is possible that the metadata of the associated preview panel is not yet loaded
   * when this method is called. For this purpose, the method is dependency-tracked.
   * It is possible to listen to changes to the returned metadata tree by using a
   * function value expression as shown in the following example:
   * <pre>
   *   var metadataLoadedVE:ValueExpression;
   *   metadataLoadedVE = ValueExpressionFactory.createFromFunction(function ():Boolean {
   *     var previewPnl:PreviewPanel = ... ;
   *     var metadataTree:MetadataTree = previewPnl.getMetadataService().getMetadataTree();
   *     return metadataTree.getRoot() ? true : false;
   *   }
   *   if (!metadataLoadedVE.getValue()) {
   *     // metadata not yet loaded
   *     metadataLoadedVE.addChangeListener( ... );
   *   }
   * </pre>
   *
   * Please see the PreviewPanel API documentation for further information on how to obtain
   * a preview panel component.
   *
   * @param filterProperties an optional array of top level metadata properties that is
   *   used to filter the metadata tree (other properties and nodes containing none of
   *   the provided top level properties are filtered out).
   * @return the (possibly filtered) metadata tree.
   *
   * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree
   * @see com.coremedia.ui.data.dependencies.DependencyTracker
   * @see com.coremedia.ui.data.ValueExpressionFactory.createFromFunction
   * @see com.coremedia.cms.editor.sdk.preview.PreviewPanel
   * /
  function getMetadataTree(filterProperties:Array = null):MetadataTree;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
