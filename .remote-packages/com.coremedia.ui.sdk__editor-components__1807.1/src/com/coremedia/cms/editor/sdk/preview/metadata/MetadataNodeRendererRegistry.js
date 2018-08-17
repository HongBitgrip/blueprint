Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistry", function(MetadataNodeRendererRegistry) {/*package com.coremedia.cms.editor.sdk.preview.metadata {

public interface MetadataNodeRendererRegistry {

  /**
   * Registers a new MetadataNodeRenderer.
   *
   * Whenever a metadata node has to be rendered, the list of registered renderers
   * is consulted in reverse order until the first renderer chooses to render the
   * node.
   *
   * @param renderer The renderer to register
   * /
  function register(renderer:MetadataNodeRenderer):void;

  /**
   * check if a renderer is available
   *
   * @param metadataNode The metadata node to render
   * @return true if a renderer is available.
   * /
  function canRender(metadataNode:MetadataTreeNode):Boolean;

  /**
   * Returns a rendered text representation of the provided metadata node or undefined
   * if no appropriate renderer could be found.
   *
   * @param metadataNode The metadata node to render
   * @return A text representation of the provided node or undefined.
   * /
  function renderText(metadataNode:MetadataTreeNode):String;

  /**
   * Returns an icon class for the provided metadata node or undefined
   * if no appropriate renderer could be found.
   *
   * @param metadataNode The metadata node to render
   * @return An icon class for the provided node or undefined.
   * /
  function renderIconCls(metadataNode:MetadataTreeNode):String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
