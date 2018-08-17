Ext.define("com.coremedia.cms.editor.sdk.preview.MetadataWindowTreeModel", function(MetadataWindowTreeModel) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.metadata.*;
import com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.NodeChildren;
import com.coremedia.ui.models.TreeModel;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMModifier;

import mx.resources.ResourceManager;

public class MetadataWindowTreeModel implements TreeModel {
  private static const*/var ROOT_ID$static/*:String*/ = "root";/*

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-metadata-window-tree-model"));};/*
  private static const*/var MODIFIER_WARN$static/*:BEMModifier*/;/* =*/function MODIFIER_WARN$static_(){MODIFIER_WARN$static=( BLOCK$static.createModifier("warn"));};/*
  private static const*/var MODIFIER_ERROR$static/*:BEMModifier*/;/* =*/function MODIFIER_ERROR$static_(){MODIFIER_ERROR$static=( BLOCK$static.createModifier("error"));};/*

  private var metadataTreeValueExpression:ValueExpression;
  private var showWarningsValueExpression:ValueExpression;

  public*/ function MetadataWindowTreeModel$(metadataTreeValueExpression/*:ValueExpression*/,
                                          showWarningsValueExpression/*:ValueExpression*/)
  {
    this.metadataTreeValueExpression$Le7i = metadataTreeValueExpression;
    this.showWarningsValueExpression$Le7i = showWarningsValueExpression;
  }/*

  public*/ function getRootId()/*:String*/ {
    return ROOT_ID$static;
  }/*

  public*/ function isRootVisible()/*:Boolean*/ {
    return false;
  }/*

  public*/ function getText(nodeId/*:String*/)/*:String*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function getIconCls(nodeId/*:String*/)/*:String*/ {
    throw new AS3.Error("not implemented");
  }/*

  public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    return "";
  }/*

  public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var nodeId/*:String*/ = this.getNodeId(model);
    return this.getIdPath(nodeId);
  }/*

  protected*/ function renderText(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.EditorContextImpl,com.coremedia.cms.editor.sdk.editorContext).getMetadataNodeRendererRegistry().renderText(metadataNode);
  }/*

  protected*/ function renderIconCls(node/*:MetadataTreeNode*/)/*:String*/ {
    if (com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(node)) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'metadataTreeProperty_icon');
    }
    if (com.coremedia.cms.editor.sdk.preview.MetadataHelper.isIndexMetadataNode(node)) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'metadataTreeProperty_icon');
    }
    if (com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(node)) {
      var bean/*:Bean*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.getBeanMetadataValue(node);
      if (AS3.is(bean,  com.coremedia.cap.content.Content)) {
        var iconCls/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassForContentType(AS3.cast(com.coremedia.cap.content.Content,bean).getType());
        return iconCls;
      }
    }
    return "";
  }/*

  protected*/ function getValidationModifier(node/*:MetadataTreeNode*/)/*:BEMModifier*/ {
    if (!com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(node) && !com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(node) && !com.coremedia.cms.editor.sdk.preview.MetadataHelper.isIndexMetadataNode(node)) {
      return null;
    }

    var showWarnings/*:Boolean*/ = this.showWarningsValueExpression$Le7i.getValue();

    var parent/*:MetadataTreeNode*/ = node.getParent();
    if (com.coremedia.cms.editor.sdk.preview.MetadataHelper.getDefaultProperty(node) === com.coremedia.cms.editor.sdk.preview.MetadataHelper.getDefaultProperty(parent)) {
      // Repeated path element.
      return showWarnings ? MODIFIER_WARN$static : null;
    }

    if (!com.coremedia.cms.editor.sdk.preview.MetadataHelper.isBeanMetadataNode(node) && com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(parent)) {
      // Property after non-bean.
      return MODIFIER_ERROR$static;
    }

    if (!com.coremedia.cms.editor.sdk.preview.MetadataHelper.isPropertyMetadataNode(node) && com.coremedia.cms.editor.sdk.preview.MetadataHelper.isIndexMetadataNode(parent)) {
      // Index after non-property.
      return MODIFIER_ERROR$static;
    }

    return null;
  }/*

  protected*/ function renderCls(node/*:MetadataTreeNode*/)/*:String*/ {
    var validationModifier/*:BEMModifier*/ = this.getValidationModifier(node);
    if (!validationModifier) {
      return BLOCK$static.getCSSClass();
    } else {
      return BLOCK$static.getCSSClass() + " " + validationModifier.getCSSClass();
    }
  }/*

  public*/ function getChildren(nodeId/*:String*/)/*:NodeChildren*/ {
    var metadataNode/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    var children/*:Array*/ = metadataNode ? metadataNode.getChildren() : undefined;
    if (!children) {
      return undefined;
    }

    var childIds/*:Array*/ = [];
    var textsByChildId/*:Object*/ = {};
    var iconsByChildId/*:Object*/ = {};
    var clsByChildId/*:Object*/ = {};
    for (var i/*:uint*/ = 0; i < children.length; i++) {
      var child/*:MetadataTreeNode*/ = children[i];
      var id/*:String*/ = this.getNodeId(child);
      childIds.push(id);
      textsByChildId[id] = this.renderText(child);
      iconsByChildId[id] = this.renderIconCls(child);
      clsByChildId[id] = this.renderCls(child);
    }
    return new com.coremedia.ui.models.NodeChildren(childIds, textsByChildId, iconsByChildId, clsByChildId);
  }/*

  public*/ function getIdPath(nodeId/*:String*/)/*:Array*/ {
    var result/*:Array*/ = [];
    var current/*:MetadataTreeNode*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
    while (current) {
      result.push(current.getId());
      current = current.getParent();
    }
    result.reverse();
    return result;
  }/*

  public*/ function getNodeId(model/*:Object*/)/*:String*/ {
    var metadataTreeNode/*:MetadataTreeNode*/ = (AS3.as(model,  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode));
    return metadataTreeNode && metadataTreeNode.getId();
  }/*

  public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    var metadataTree/*:MetadataTree*/ =AS3.as( this.metadataTreeValueExpression$Le7i.getValue(),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree);
    return metadataTree &&AS3.as( metadataTree.getNode(nodeId),  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
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
      metadataTreeValueExpression$Le7i: null,
      showWarningsValueExpression$Le7i: null,
      constructor: MetadataWindowTreeModel$,
      getRootId: getRootId,
      isRootVisible: isRootVisible,
      getText: getText,
      getIconCls: getIconCls,
      getTextCls: getTextCls,
      getIdPathFromModel: getIdPathFromModel,
      renderText: renderText,
      renderIconCls: renderIconCls,
      getValidationModifier: getValidationModifier,
      renderCls: renderCls,
      getChildren: getChildren,
      getIdPath: getIdPath,
      getNodeId: getNodeId,
      getNodeModel: getNodeModel,
      isEditable: isEditable,
      rename: rename,
      statics: {
        BLOCK: undefined,
        MODIFIER_WARN: undefined,
        MODIFIER_ERROR: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          MODIFIER_WARN$static_();
          MODIFIER_ERROR$static_();
        }
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.models.NodeChildren",
        "com.coremedia.ui.models.TreeModel",
        "com.coremedia.ui.models.bem.BEMBlock",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.MetadataHelper",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree",
        "com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode",
        "com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"
      ]
    };
});
