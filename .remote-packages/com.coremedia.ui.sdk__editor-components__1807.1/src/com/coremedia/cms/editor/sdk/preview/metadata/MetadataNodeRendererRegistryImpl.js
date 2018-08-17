Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistryImpl", function(MetadataNodeRendererRegistryImpl) {/*package com.coremedia.cms.editor.sdk.preview.metadata {

/**
 * Registry MetadataNodeRenderer instances.
 *
 * When a MetadataTreeNodes needs to be rendered the list of registered
 * renderer implementations is consulted in reverse order. The later a renderer
 * was registered sooner it is asked to render a given node.
 *
 * Once the first renderer chooses to render a MetadataTreeNode, the subsequent
 * renderer implementations are skipped.
 *
 * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode
 * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer
 * /
public class MetadataNodeRendererRegistryImpl implements MetadataNodeRendererRegistry {
  private var rendererList:Array =*/function rendererList_(){this.rendererList$U9Vm=( []);}/*;

  public*/ function MetadataNodeRendererRegistryImpl$() {rendererList_.call(this);
    this.register(new com.coremedia.cms.editor.sdk.preview.metadata.PropertyMetadataNodeRenderer());
    this.register(new com.coremedia.cms.editor.sdk.preview.metadata.ContentMetadataNodeRenderer());
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function register(renderer/*:MetadataNodeRenderer*/)/*:void*/ {
    this.rendererList$U9Vm.push(renderer);
  }/*


  /**
   * @inheritDoc
   * /
  public*/ function canRender(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    return this.getRenderer$U9Vm(metadataNode);
  }/*
  /**
   * @inheritDoc
   * /
  public*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    var renderer/*:MetadataNodeRenderer*/ = this.getRenderer$U9Vm(metadataNode);
    return renderer && renderer.renderText(metadataNode);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function renderIconCls(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    var renderer/*:MetadataNodeRenderer*/ = this.getRenderer$U9Vm(metadataNode);
    return renderer && renderer.renderIconCls(metadataNode);
  }/*

  private*/ function getRenderer(metadataNode/*:MetadataTreeNode*/)/*:MetadataNodeRenderer*/ {
    for(var i/*:int*/ = this.rendererList$U9Vm.length - 1; i >= 0; i--) {
      if ((AS3.as(this.rendererList$U9Vm[i],  com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer)).canRender(metadataNode)) {
        return AS3.as( this.rendererList$U9Vm[i],  com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer);
      }
    }
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistry"],
      constructor: MetadataNodeRendererRegistryImpl$,
      register: register,
      canRender: canRender,
      renderText: renderText,
      renderIconCls: renderIconCls,
      getRenderer$U9Vm: getRenderer,
      requires: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRendererRegistry"],
      uses: [
        "com.coremedia.cms.editor.sdk.preview.metadata.ContentMetadataNodeRenderer",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataNodeRenderer",
        "com.coremedia.cms.editor.sdk.preview.metadata.PropertyMetadataNodeRenderer"
      ]
    };
});
