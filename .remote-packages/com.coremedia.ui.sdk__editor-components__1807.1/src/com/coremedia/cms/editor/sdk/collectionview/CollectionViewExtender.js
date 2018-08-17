Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewExtender", function(CollectionViewExtender) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cms.editor.sdk.ContentTreeRelation;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * Singleton to extend the collection with with new components, visible depending
 * on the current selection.
 * /
public class CollectionViewExtender {
  private var repositoryCollectionViewExtension:RepositoryCollectionViewExtension;
  private var extensionsByPriority:Object =*/function extensionsByPriority_(){this.extensionsByPriority$8Nsx=( {});}/*;
  private var priorities:Array =*/function priorities_(){this.priorities$8Nsx=( []);}/*;

  public*/ function CollectionViewExtender$() {extensionsByPriority_.call(this);priorities_.call(this);
    this.repositoryCollectionViewExtension$8Nsx = new com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension();
    this.addExtension(this.repositoryCollectionViewExtension$8Nsx, 2000);
  }/*

  /**
   * Returns the CollectionViewExtension for the repository which wil be used for
   * most cases as default extension.
   * /
  public*/ function getRepositoryCollectionViewExtension()/*:CollectionViewExtension*/ {
    return this.repositoryCollectionViewExtension$8Nsx;
  }/*

  /**
   * Return all extensions that have been added with #addExtension().
   * /
  public*/ function getAllExtensions()/*:Array*/ {
    var allExtensions/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < this.priorities$8Nsx.length; i++) {
      var priority/*:int*/ = this.priorities$8Nsx[i];
      var extensionsWithPriority/*:Array*/ = this.extensionsByPriority$8Nsx[priority];
      allExtensions = allExtensions.concat(extensionsWithPriority);
    }

    return allExtensions;
  }/*

  /**
   * Return the extension with the highest priority that is applicable for the given model
   * or null if no extension is applicable.
   * This method is dependency tracked and returns undefined
   * for as long as the decision which extension is applicable is undecided.
   *
   * Each CollectionViewExtension has to implement the "isApplicable" method for this.
   * For a callback-based version of this method see #findExtension()
   *
   * @param model the model to retrieve the collection view extension for
   * /
  public*/ function getExtension(model/*:Object*/)/*:CollectionViewExtension*/ {
    return this.createActiveExtensionValueExpression$8Nsx(model).getValue();
  }/*

  /**
   * Find the extension with the highest priority that is applicable for the given model.
   * The given callback will be called with the extension as its single argument or null,
   * if no applicable extension could be found.
   *
   * Each CollectionViewExtension has to implement the "isApplicable" method for this.
   * For a dependency tracked version of this method see #getExtension()
   *
   * @param model the model to retrieve the collection view extension for
   * @param callback the callback ( signature: function (extension:CollectionViewExtension):void )
   * /
  public*/ function findExtension(model/*:Object*/, callback/*:Function*/)/*:void*/ {
    var activeExtensionVE/*:ValueExpression*/ = this.createActiveExtensionValueExpression$8Nsx(model);
    activeExtensionVE.loadValue(callback);
  }/*

  /**
   * Return the ContentTreeRelation for the given content type.
   * Usually it is sufficient to retrieve the extension for the current tree selection.
   * In some cases this does not determine the correct ContentTreeRelation which is bound to a CollectionViewExtension,
   * e.g. the showInTree method of the ContentTreeRelation must be called depending on the selected type of the content,
   * not the corresponding CollectionViewExtension.
   *
   * @param contentType the content type the ContentTreeRelation is responsible for
   * /
  public*/ function getContentTreeRelation(contentType/*:String*/)/*:ContentTreeRelation*/ {
    var allExtensions/*:Array*/ = this.getAllExtensions();
    for (var i/*:int*/ = 0; i < allExtensions.length; i++) {
      var extension/*:CollectionViewExtension*/ = allExtensions[i];
      var contentTreeRelation/*:ContentTreeRelation*/ = extension.getContentTreeRelation();
      if (contentTreeRelation &&
              (contentTreeRelation.folderNodeType() === contentType ||
              contentTreeRelation.leafNodeType() === contentType)) {
        return extension.getContentTreeRelation();
      }
    }

    return this.getRepositoryCollectionViewExtension().getContentTreeRelation();
  }/*

  private*/ function createActiveExtensionValueExpression(model/*:Object*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:**/ {
      var applicableExtension/*:CollectionViewExtension*/ = null;
      var hasUndecidedExtensions/*:Boolean*/ = false;

      for (var i/*:int*/ = 0; i < this$.priorities$8Nsx.length; i++) {
        var priority/*:int*/ = this$.priorities$8Nsx[i];
        var extensionsWithPriority/*:Array*/ = this$.extensionsByPriority$8Nsx[priority];

        for (var j/*:int*/ = 0; j < extensionsWithPriority.length; j++) {
          var extension/*:CollectionViewExtension*/ = extensionsWithPriority[j];
          var applicable/*:Boolean*/ = extension.isApplicable(model);
          if (applicable === undefined) {
            hasUndecidedExtensions = true;
          } else if (applicable) {
            applicableExtension = extension;
          }
        }

        if (!hasUndecidedExtensions && applicableExtension) {
          return applicableExtension;
        }
      }

      return hasUndecidedExtensions ? undefined : applicableExtension;
    });
  }/*

  /**
   * Adds a CollectionViewExtension implementation to the extender.
   * The extender is applied if the library tree selection matches the isApplicable method
   * of the extension.
   * @param extension the extension to add
   * @param priority the priority of the extension (smaller value means a higher priority); defaults to 1000
   * /
  public*/ function addExtension(extension/*:CollectionViewExtension*/, priority/*:int = 1000*/)/*:CollectionViewExtender*/ {if(arguments.length<=1)priority=1000;
    if (this.priorities$8Nsx.indexOf(priority) === -1) {
      this.priorities$8Nsx.push(priority);
      // sort ascending -- sort(Array.NUMERIC) does not sort as expected
      this.priorities$8Nsx.sort(function (a/*:int*/, b/*:int*/)/*:int*/ {
        return a - b;
      });
    }

    if (!this.extensionsByPriority$8Nsx[priority]) {
      this.extensionsByPriority$8Nsx[priority] = [];
    }

    (AS3.as(this.extensionsByPriority$8Nsx[priority],  Array)).push(extension);
    return this;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      repositoryCollectionViewExtension$8Nsx: null,
      constructor: CollectionViewExtender$,
      getRepositoryCollectionViewExtension: getRepositoryCollectionViewExtension,
      getAllExtensions: getAllExtensions,
      getExtension: getExtension,
      findExtension: findExtension,
      getContentTreeRelation: getContentTreeRelation,
      createActiveExtensionValueExpression$8Nsx: createActiveExtensionValueExpression,
      addExtension: addExtension,
      requires: ["com.coremedia.ui.data.ValueExpressionFactory"],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.RepositoryCollectionViewExtension"]
    };
});
