Ext.define("com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeModel", function(MetadataTreeModel) {/*package com.coremedia.cms.editor.sdk.preview.metadata {

import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.MetadataHelper;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.UrlUtil;

import mx.resources.ResourceManager;

/**
 * Tree model for a metadata tree.
 *
 * This model projects the metadata tree to a subtree based on the
 * metadata default property. Metadata nodes that do not contain a
 * default property are filtered out.
 * /
public class MetadataTreeModel implements TreeModel {
  private static const*/var ROOT_ID$static/*:String*/ = "root";/*
  private static const*/var CM_METADATA_BRIDGE_NODE_PREFIX$static/*:String*/ = "CM_METADATA_BRIDGE_";/*

  private var metadataTreeValueExpression:ValueExpression;

  public*/ function MetadataTreeModel$(metadataTreeValueExpression/*:ValueExpression*/) {
    this.metadataTreeValueExpression$$Rbz = metadataTreeValueExpression;
  }/*

  public*/ function getRootId()/*:String*/ {
    return ROOT_ID$static;
  }/*

  public*/ function isRootVisible()/*:Boolean*/ {
    return false;
  }/*

  public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var nodeId/*:String*/ = this.getNodeId(model);
    return this.getIdPath(nodeId);
  }/*

  public*/ function getText(nodeId/*:String*/)/*:String*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    if (metadataNode) {
      return MetadataTreeModel.renderText(metadataNode);
    }
    return undefined;
  }/*

  public static*/ function renderText$static(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getMetadataNodeRendererRegistry().renderText(metadataNode);
  }/*

  public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    if (metadataNode) {
      return MetadataTreeModel.renderIconCls(metadataNode);
    } else if (nodeId.indexOf(CM_METADATA_BRIDGE_NODE_PREFIX$static) > -1) {
      return mx.resources.ResourceManager.getInstance().getString("com.coremedia.icons.CoreIcons", "path_dots");
    }
    return undefined;
  }/*

  public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    return "";
  }/*

  public static*/ function renderIconCls$static(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getMetadataNodeRendererRegistry().renderIconCls(metadataNode);
  }/*

  public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    var children/*:Array*/ = metadataNode ? metadataNode.findChildrenByProperty(com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY, undefined, false) : null;
    if (!children) {
      return undefined;
    }

    var childIds/*:Array*/ = [];
    var textsByChildId/*:Object*/ = {};
    var iconsByChildId/*:Object*/ = {};
    for (var i/*:uint*/ = 0; i < children.length; i++) {
      var id/*:String*/ = this.getNodeId(children[i]);
      childIds.push(id);
      textsByChildId[id] = this.getText(id);
      iconsByChildId[id] = this.getIconCls(id);
    }
    return new com.coremedia.ui.models.NodeChildren(childIds, textsByChildId, iconsByChildId);
  }/*

  public*/ function getIdPath(nodeId/*:String*/)/*:Array*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    var path/*:Array*/ = [];
    while (metadataNode) {
      path.push(this.getNodeId(metadataNode));
      metadataNode = metadataNode.findParentByProperty(com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY);
    }
    path.reverse();

    // Do some repair magic to fix possible template issues.
    // This is just a workaround as it only fixes the breadcrumb appearance not any
    // highlighting happening within the preview.
    return this.repairMetadataPath$$Rbz(path);
  }/*

  // Filter duplicate direct children.
  private*/ function repairMetadataPath(path/*:Array*/)/*:Array*/ {
    if (path && path.length > 1) {
      var index/*:int*/ = 0;
      var refNodeId/*:String*/ = path[index++];
      var nodeId/*:String*/ = path[index++];
      var result/*:Array*/ = [refNodeId];
      while (nodeId) {
        var value1/*:**/ = (AS3.as(this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode)).getProperty(com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY);
        var value2/*:**/ = (AS3.as(this.getNodeModel(refNodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode)).getProperty(com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY);
        var redundant/*:Boolean*/ = false;
        if (value1 !== undefined && value2 !== undefined) { // No default property... better don't touch.
          redundant = com.coremedia.ui.util.ObjectUtils.compareObjects(value1, value2);
        }
        if (!redundant || com.coremedia.ui.util.UrlUtil.getHashParam("doNotFilterBreadcrumb")) {

          // Probably temporary workaround:
          // If two bean-holding MetadataTreeNodes are direct pre-/successors of each other,
          // we insert a fake 'bridging node' ID in the returned path.
          // As no MetadataTreeNode will be found under this ID in the MetadataTreeModel,
          // this path element will eventually be rendered with no text and the default
          // BreadcrumbElement iconCls (see BreadcrumbElementBase.computeIconCls()).
          if (AS3.is(value1,  com.coremedia.ui.data.Bean) &&AS3.is( value2,  com.coremedia.ui.data.Bean)) {
            result.push(CM_METADATA_BRIDGE_NODE_PREFIX$static + Math.random());
          }

          result.push(nodeId);

        } else {
          com.coremedia.ui.logging.Logger.info("Removed duplicate (direct child) metadata node from metadata path. Please review your preview metadata.");
        }
        refNodeId = nodeId;
        nodeId = path[index++];
      }
      return result.filter(AS3.bind(this,"isValidTreeNode$$Rbz"));
    }
    return path;
  }/*

  /**
   * Tree nodes are only valid if they are
   * (1) not null and
   * (2) can be rendered by MetadataNodeRendererRegistry and
   * (1) bean nodes or
   * (2) property nodes whose parent nodes aren't property nodes or
   * (3) bridge nodes
   * /
  private*/ function isValidTreeNode(metadataNodeId/*:String*/)/*:Boolean*/ {
    if (metadataNodeId.indexOf(CM_METADATA_BRIDGE_NODE_PREFIX$static) >= 0) {
      return true;
    }

    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(metadataNodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    if (!metadataNode) {
      return false;
    }

    //when there is no renderer then the node is not valid.
    var canRender/*:Boolean*/ = AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getMetadataNodeRendererRegistry().canRender(metadataNode);
    if (!canRender) {
      return false;
    }

    var isValidPropertyNode/*:Boolean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(metadataNode) && !com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(metadataNode.getParent());
    var isBeanNode/*:Boolean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(metadataNode);

    return isValidPropertyNode || isBeanNode;
  }/*

  public*/ function getNodeId(model/*:Object*/)/*:String*/ {
    var metadataTreeNode/*:MetadataTreeNode*/ = (AS3.as(model,  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode));
    return metadataTreeNode && metadataTreeNode.getId();
  }/*

  public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    return AS3.as( (AS3.as(this.metadataTreeValueExpression$$Rbz.getValue(),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree)).getNode(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
  }/*

  public*/ function isEditable(model/*:Object*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function rename(model/*:Object*/, newName/*:String*/, oldName/*:String*/, callback/*:Function*/)/*:void*/ {
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.TreeModel"],
      metadataTreeValueExpression$$Rbz: null,
      constructor: MetadataTreeModel$,
      getRootId: getRootId,
      isRootVisible: isRootVisible,
      getIdPathFromModel: getIdPathFromModel,
      getText: getText,
      getIconCls: getIconCls,
      getTextCls: getTextCls,
      getChildren: getChildren,
      getIdPath: getIdPath,
      repairMetadataPath$$Rbz: repairMetadataPath,
      isValidTreeNode$$Rbz: isValidTreeNode,
      getNodeId: getNodeId,
      getNodeModel: getNodeModel,
      isEditable: isEditable,
      rename: rename,
      statics: {
        renderText: renderText$static,
        renderIconCls: renderIconCls$static
      },
      requires: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.models.NodeChildren",
        "com.coremedia.ui.models.TreeModel",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.UrlUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode"
      ]
    };
});
