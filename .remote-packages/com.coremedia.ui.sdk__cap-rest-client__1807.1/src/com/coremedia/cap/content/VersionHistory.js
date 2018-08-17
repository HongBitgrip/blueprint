Ext.define("com.coremedia.cap.content.VersionHistory", function(VersionHistory) {/*package com.coremedia.cap.content {
import com.coremedia.ui.data.RemoteBean;

/**
 * Fires when the items of this version history become available or changes.
 * @eventType items
 * @see VersionHistory#getItems()
 * /
[Event(name="items", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * The history of a content represented by its versions.
 * /
[PublicApi]
public interface VersionHistory extends RemoteBean {
  /**
   * Returns the list of versions of the content.
   * The working version (if any) is not contained in this list.
   * The list is topologically sorted, that is predecessor comes before successor.
   * Returns all versions of the content.
   *
   * @return all versions of the content
   * /
  function getItems():Vector.<Version>;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
