Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.CompoundChildTreeModel", function(CompoundChildTreeModel) {/*package com.coremedia.cms.editor.sdk.collectionview.tree {

import com.coremedia.ui.models.TreeModel;

/**
 * A TreeModel used for children that are applied to the CompoundTreeModel.
 * Some methods only used for the CompoundTreeModel that is used as root tree model for the library tree.
 * /
public interface CompoundChildTreeModel extends TreeModel {

  /**
   * Allows to enabled/disable the TreeModel
   * @param enabled true to enable the model and make it visible in the library
   * /
  function setEnabled(enabled:Boolean):void;

  /**
   * Returns true if the TreeModel is visible is the library tree.
   * /
  function isEnabled():Boolean;

  /**
   * Returns the id of the string, used to apply a collection view action on a specific tree model.
   * @return the id of the child compound tree model.
   * /
  function getTreeId():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.TreeModel"],
      requires: ["com.coremedia.ui.models.TreeModel"]
    };
});
