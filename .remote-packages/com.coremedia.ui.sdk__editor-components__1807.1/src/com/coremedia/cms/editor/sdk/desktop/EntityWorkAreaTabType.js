Ext.define("com.coremedia.cms.editor.sdk.desktop.EntityWorkAreaTabType", function(EntityWorkAreaTabType) {/*package com.coremedia.cms.editor.sdk.desktop {

/**
 * A work area tab type that manages tabs that inherit from <code>WorkAreaTab</code>,
 * which (among other things) represents some entity.
 * /
[PublicApi]
public interface EntityWorkAreaTabType extends WorkAreaTabType {

  /**
   * Given some entity, compute the tab state that can be used to create a new tab (<code>createTab()</code>)
   * representing this entity.
   * <p>A result of <code>null</code> means that this tab type cannot handle the given
   * entity.
   * </p>
   * @param entity
   * @return
   * /
  function createTabState(entity:Object):Object;

  /**
   * Given some tab state, if this tab state is recognized by this tab type, extract and return the primary entity.
   * <p>A result of <code>null</code> means that this tab type cannot handle the given
   * tab state and that the entity is invalid (e.g. deleted).
   * </p>
   * @param tabState the tab state from which to extract the primary entity
   * @return the primary entity extracted from the given tab state or <code>null</code>
   * /
  function extractEntity(tabState:Object):Object;

  /**
   * To make tabs of this type draggable, provide a drag-drop-group name.
   * @return the drag-drop-group name to use when dragging tabs of this type
   * /
  function getDragDropGroup():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType"],
      requires: ["com.coremedia.cms.editor.sdk.desktop.WorkAreaTabType"]
    };
});
