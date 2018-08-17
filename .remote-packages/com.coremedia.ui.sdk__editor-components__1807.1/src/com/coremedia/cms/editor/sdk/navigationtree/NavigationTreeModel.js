Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeModel", function(NavigationTreeModel) {/*package com.coremedia.cms.editor.sdk.navigationtree {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtension;
import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal;
import com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Issues;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMModifier;

import mx.resources.ResourceManager;

/**
 * The tree model that is only responsible for displaying the tree in the library.
 * /
public class NavigationTreeModel extends ContentTreeModel {
  public static var NAVIGATION_TREE_ID:String = "navigationTree";
  public static const HIDDEN_IN_NAVIGATION:String =*/function HIDDEN_IN_NAVIGATION$static_(){NavigationTreeModel.HIDDEN_IN_NAVIGATION=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'hidden_in_navigation_property'));}/*;


  public static var BLOCK:BEMBlock =*/function BLOCK$static_(){NavigationTreeModel.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-access-control-util"));}/*;
  public static var MODIFIER_READ_ONLY:BEMModifier =*/function MODIFIER_READ_ONLY$static_(){NavigationTreeModel.MODIFIER_READ_ONLY=( NavigationTreeModel.BLOCK.createModifier("read-only"));}/*;

  private static*/ var activated$static/*:Boolean*/ = false;/*

  public*/ function NavigationTreeModel$() {this.super$Z5yL();
    this.addContentFilters();
  }/*

  /**
   * Special case: the user has never selected a preferred site.
   * In this case the tree relation should not be "seen" by the CompoundTreeModel and is therefore disabled.
   * /
  override public*/ function isEnabled()/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
  }/*

  /**
   * The getNodeModel return value determines if this TreeModel is applicable or not.
   * Additionally to the 'isEnabled' method, we have to return null here when no preferred site is selected.
   * @param nodeId the id of the node to retrieve the TreeModel for.
   * @return null if this model is not applicable
   * /
  override public*/ function getNodeModel(nodeId/*:String*/)/*:Object*/ {
    if(!this.isEnabled()) {
      return null;
    }
    //we are not responsible for the root
    if(nodeId === "content/1") {
      return null;
    }

    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getNodeModel.call(this,nodeId);
  }/*

  override public*/ function getIdPathFromModel(model/*:Object*/)/*:Array*/ {
    var content/*:Content*/ =AS3.as( model,  com.coremedia.cap.content.Content);
    if (!content) {
      // No path exists.
      return null;
    }
    if (!content.isLoaded()) {
      return undefined;
    }

    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (!site) {
      return null;
    }

    var contentType/*:ContentType*/ = content.getType();
    if (contentType) {
      var typeBean/*:RemoteBean*/ =AS3.as( contentType,  com.coremedia.ui.data.RemoteBean);
      if (typeBean && typeBean.isLoaded() && !contentType.isSubtypeOf(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE)) {
        return null;
      }
    }

    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getIdPathFromModel.call(this,model);
  }/*

  override public*/ function getRootId()/*:String*/ {
    return this.getNodeId(getNavigationRoot$static());
  }/*


  override public*/ function getTextCls(nodeId/*:String*/)/*:String*/ {
    var node/*:Content*/ =AS3.as( this.getNodeModel(nodeId),  com.coremedia.cap.content.Content);
    if (!node.isLoaded()) {
      node.load();
      return undefined;
    }

    var children/*:Array*/ = node.getProperties().get(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.CHILDREN_PROPERTY);
    if (children == undefined) {
      return undefined;
    }
    for/* each*/(var $1=0;$1</* in*/ children.length;++$1) {var child/*:Content*/ =children[$1];
      if (child.isDeleted()) {
        return "error";
      }
    }

    if (!node.getProperties()) {
      return undefined;
    }

    var hiddenInNavigation/*:Boolean*/ = node.getProperties().get(NavigationTreeModel.HIDDEN_IN_NAVIGATION);
    if (hiddenInNavigation) {
      return NavigationTreeModel.BLOCK.getCSSClass() + " " + NavigationTreeModel.MODIFIER_READ_ONLY.getCSSClass();
    }

    //load issues and visualize them
    var issuesVE/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create("issues", node);
    var issues/*:Issues*/ = issuesVE.getValue();
    if (issues === undefined) {
      return undefined;
    }
    if(!issues.isLoaded()) {
      issues.load();
      return undefined;
    }

    var nodeCls/*:String*/ = com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getTextCls.call(this,nodeId);
    for/* each*/(var $2=0,$3=/* in*/ issues.getAll();$2<$3.length;++$2) {var issue/*:Issue*/ =$3[$2];
      if(issue.severity === com.coremedia.ui.data.validation.Severity.WARN) {
        nodeCls = "warn";
      }
      else if(issue.severity === com.coremedia.ui.data.validation.Severity.ERROR) {
        nodeCls = "error";
        break; //can't get worse
      }
    }

    return nodeCls;
  }/*

  /**
   * Returns the visible name of the node.
   * We have to take care of the root node name here by comparing the node id.
   * @param nodeId the id of the node to retrieve the text for
   * /
  override public*/ function getText(nodeId/*:String*/)/*:String*/ {
    if (nodeId === this.getNodeId(getNavigationRoot$static())) {
      return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite().getName()
              + " - " + mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Navigation_root_suffix');
    }
    return com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.getText.call(this,nodeId);
  }/*

  override protected*/ function getVisibleRootModels()/*:Array*/ {
    return [getNavigationRoot$static()];
  }/*

  /**
   * The extension should only be active if there is an active site selected.
   * /
  private static*/ function getNavigationRoot$static()/*:Content*/ {
    var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getPreferredSite();
    if (site) {
      return site.getSiteRootDocument();
    }
    return null;
  }/*

  public*/ function toString()/*:String*/ {
    return NavigationTreeModel.NAVIGATION_TREE_ID;
  }/*

  override public*/ function getTreeId()/*:String*/ {
    return NavigationTreeModel.NAVIGATION_TREE_ID;
  }/*

  // ----------------------- Helper -----------

  /**
   * Used to apply the 'new content' filters for the configured document type.
   * We register all subtypes of the configured node type, but skipping the excluded ones.
   * /
  protected*/ function addContentFilters()/*:void*/ {
    var nodeContentType/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_document_type');
    var excludedTypes/*:Array*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'navigation_document_type_exclusions').split(",");
    var contentTypes/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentTypes();

    //add all subtypes of the give node content type, except the excluded ones
    for/* each*/(var $1=0;$1</* in*/ contentTypes.length;++$1) {var contentType/*:ContentType*/ =contentTypes[$1];
      if(contentType.isSubtypeOf(nodeContentType) && excludedTypes.indexOf(contentType.getName()) === -1) {
        (AS3.as(com.coremedia.cms.editor.sdk.editorContext,  com.coremedia.cms.editor.sdk.EditorContextImpl)).addContentCreationFilter(contentType.getName(),AS3.bind( this,"mayCreate"), false);
      }
    }
  }/*

  /**
   * Used for the new content drop down.
   * We simply check for subtypes of navigation elements and allow all subtypes to be created as new content.
   * The method is protected to allow an easier overriding.
   * @param selection the current selection in the repository tree
   * @param contentType the content type to check for creation
   * @return true if the given contentType can be created
   * /
  protected*/ function mayCreate(selection/*:Content*/, contentType/*:ContentType*/)/*:Boolean*/ {
    if (!selection.getType().getName()) {
      return undefined;
    }

    var extension/*:CollectionViewExtension*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().getExtension(selection);
    if (extension === undefined) {
      return undefined;
    }

    if (!selection.getType()) {
      return undefined;
    }

    if (AS3.is(extension,  com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeCollectionViewExtension)) {
      var ctName/*:String*/ = selection.getType().getName();
      var selectedContentType/*:ContentType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(ctName);
      if (selectedContentType.isSubtypeOf(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE)
              && contentType.isSubtypeOf(com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation.NAVIGATION_DOCUMENT_TYPE)) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * By default, each node of the navigation tree is validated and the error/warn state is visualized
   * inside the the tree. For large this tree, the behaviour can be disabled.
   * @return true if each node should be validated
   * /
  protected*/ function isValidationEnabled()/*:Boolean*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings', 'validation_enabled');
  }/*

  /**
   * Helper to simplify the extension registration.
   * @param priority the priority of the extension which is a applied when the extension calculation
   * for a selection is triggered.
   * /
  public static*/ function activate$static(priority/*:Number = 850*/)/*:void*/ {if(arguments.length<=0)priority=850;
    activated$static = true;

    var collectionViewManagerInternal/*:CollectionViewManagerInternal*/ =
            (AS3.as((com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager()),  com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal));

    var treeModel/*:NavigationTreeModel*/ = new NavigationTreeModel();
    collectionViewManagerInternal.addTreeModel(treeModel, new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeDragDropModel(treeModel));

    com.coremedia.cms.editor.sdk.editorContext.getCollectionViewExtender().addExtension(new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeCollectionViewExtension(), priority);
  }/*

  /**
   * To be checked by actions that should apply for the navigation tree.
   * /
  public static*/ function isActivated$static()/*:Boolean*/ {
    return activated$static;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel",
      constructor: NavigationTreeModel$,
      super$Z5yL: function() {
        com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel.prototype.constructor.apply(this, arguments);
      },
      isEnabled: isEnabled,
      getNodeModel: getNodeModel,
      getIdPathFromModel: getIdPathFromModel,
      getRootId: getRootId,
      getTextCls: getTextCls,
      getText: getText,
      getVisibleRootModels: getVisibleRootModels,
      toString: toString,
      getTreeId: getTreeId,
      addContentFilters: addContentFilters,
      mayCreate: mayCreate,
      isValidationEnabled: isValidationEnabled,
      statics: {
        NAVIGATION_TREE_ID: "navigationTree",
        HIDDEN_IN_NAVIGATION: undefined,
        BLOCK: undefined,
        MODIFIER_READ_ONLY: undefined,
        activate: activate$static,
        isActivated: isActivated$static,
        __initStatics__: function() {
          HIDDEN_IN_NAVIGATION$static_();
          BLOCK$static_();
          MODIFIER_READ_ONLY$static_();
        }
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.collectionview.tree.ContentTreeModel",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.models.bem.BEMBlock",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorContextImpl",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewManagerInternal",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeCollectionViewExtension",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeDragDropModel",
        "com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeRelation"
      ]
    };
});
