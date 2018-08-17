Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree", function(MetadataTree) {/*package com.coremedia.cms.editor.sdk.preview.metadata {
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.util.ObjectUtils;

import ext.JSON;

public class MetadataTree {

  private var rootNode:MetadataTreeNode;
  private var metadataNodeMap:Object =*/function metadataNodeMap_(){this.metadataNodeMap$DHaC=( {});}/*;
  private var rawMetadataTree:Object =*/function rawMetadataTree_(){this.rawMetadataTree$DHaC=( {});}/*;

  public*/ function MetadataTree$(rawMetadataTree/*:Object*/, filterProperties/*:Array = null*/, rawNodeTransformer/*:Function = null*/) {var this$=this;metadataNodeMap_.call(this);rawMetadataTree_.call(this);switch(Math.max(arguments.length,1)){case 1:filterProperties=null;case 2:rawNodeTransformer=null;}
    if (!rawMetadataTree) {
      return;
    }

    // Deep copy object so that this tree has its own set of node objects.
    // Also resolve bean references.
    this.rawMetadataTree$DHaC = com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(com.coremedia.ui.util.ObjectUtils.toJson(rawMetadataTree)));

    if (filterProperties) {
      this.projectToFilterProperties$DHaC(filterProperties);
    } else if (rawNodeTransformer) {
      this.rawMetadataTree$DHaC = this.transformRawMetadataTree$DHaC(rawNodeTransformer);
    }

    this.rootNode$DHaC = new com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode(this.rawMetadataTree$DHaC);

    this.rootNode$DHaC.getAllChildrenAsList().forEach(function (successor/*:MetadataTreeNode*/)/*:void*/ {
      if (successor.getId()) {
        this$.metadataNodeMap$DHaC[successor.getId()] = successor;
      }
    });
  }/*

  private*/ function projectToFilterProperties(filterProperties/*:Array*/)/*:void*/ {
    if (filterProperties) {
      this.rawMetadataTree$DHaC = this.transformRawMetadataTree$DHaC(function (node/*:Object*/)/*:**/ {
        var containsKey/*:Boolean*/ = false;
        filterProperties.forEach(function (key/*:String*/)/*:void*/ {
          if (node[key]) {
            containsKey = true;
          }
        });
        if (containsKey) {
          var filteredNode/*:Object*/ = {
            id:node.id,
            parentId:node.parentId,
            children:[]
          };

          filterProperties.forEach(function (key/*:String*/)/*:void*/ {
            if (node[key]) {
              filteredNode[key] = node[key];
            }
          });
          return filteredNode;
        } else {
          return false;
        }
      });
    }
  }/*

  // Transforms the raw metadata tree by means of a node transformer function
  // that will be applied to all tree nodes in breadth-first order.
  private*/ function transformRawMetadataTree(nodeTransformer/*:Function*/)/*:Object*/ {
    var transformedMetadataRoot/*:Object*/ = {
      children: []
    };
    this.transformRawMetadataTreeRecursively$DHaC(nodeTransformer, transformedMetadataRoot, this.rawMetadataTree$DHaC.children);

    return transformedMetadataRoot;
  }/*

  // Recursive transformation of the raw metadata tree by processing each node
  // (in breadth-first order) with a transformer function. If the transformer
  // function returns 'false' for a node, the node is not included at all
  // in the transformed tree. Otherwise, the node is included as returned
  // by the node transformer function.
  private*/ function transformRawMetadataTreeRecursively(nodeTransformer/*:Function*/, appendTo/*:Object*/, children/*:Array*/)/*:void*/ {var this$=this;
    children = children || [];
    children.forEach(function (child/*:Object*/)/*:void*/ {
      // clone
      var transformedChild/*:Object*/ = nodeTransformer(child);
      if (transformedChild) {
        !appendTo.children && (appendTo.children = []);
        appendTo.children.push(transformedChild);
        this$.transformRawMetadataTreeRecursively$DHaC(nodeTransformer, transformedChild, child.children);
      } else {
        this$.transformRawMetadataTreeRecursively$DHaC(nodeTransformer, appendTo, child.children);
      }
    });
  }/*

  /**
   * Get the root node of the metadata tree.
   *
   * @return the root node if it exists, undefined if no metadata exists.
   *
   * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode
   * /
  public*/ function getRoot()/*:MetadataTreeNode*/ {
    return this.rootNode$DHaC;
  }/*

  /**
   * Get the metadata tree node with the given ID.
   *
   * @return the metadata tree node with the given ID if it exists, undefined if a
   * node with the given ID metadata does not exist.
   *
   * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode
   * /
  public*/ function getNode(id/*:String*/)/*:MetadataTreeNode*/ {
    return this.metadataNodeMap$DHaC[id];
  }/*

  /**
   * Returns all metadata tree nodes as an array. The nodes are given in
   * the order that they are found in a breadth-first traversion of the
   * metadata tree.
   *
   * @return all metadata tree nodes as an array in breadth-first order.
   *
   * @see com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode
   * /
  public*/ function getAsList()/*:Array*/ {
    var result/*:Array*/ = [];
    for (var id/*:String*/ in this.metadataNodeMap$DHaC) {
      result.push(this.metadataNodeMap$DHaC[id]);
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      rootNode$DHaC: null,
      constructor: MetadataTree$,
      projectToFilterProperties$DHaC: projectToFilterProperties,
      transformRawMetadataTree$DHaC: transformRawMetadataTree,
      transformRawMetadataTreeRecursively$DHaC: transformRawMetadataTreeRecursively,
      getRoot: getRoot,
      getNode: getNode,
      getAsList: getAsList,
      requires: [
        "Ext.JSON",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode"]
    };
});
