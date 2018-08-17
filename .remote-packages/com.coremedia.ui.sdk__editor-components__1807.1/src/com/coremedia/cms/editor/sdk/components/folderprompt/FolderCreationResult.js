Ext.define("com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResult", function(FolderCreationResult) {/*package com.coremedia.cms.editor.sdk.components.folderprompt {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.error.RemoteError;

public interface FolderCreationResult {

  /**
   * true if the creation of folders succeeded completely, false otherwise
   * /
  function get success():Boolean;

  /**
   * an array of created folders (represented through beans of type {@link Content}. These might be non-empty if
   * one particular required folder could not be created in the chain of folder creations. In this case, the success flag
   * is false, but the created folders are listed here regardless
   * /
  function get createdFolders():Array;

  /**
   * the base folder which did not have to be created, i.e. the topmost folder that was already in the repository when
   * the {@link createRequiredSubfolders} method was called
   * /
  function get baseFolder():Content;

  /**
   * the {@link RemoteError} that occurred during the attempt to create folders, or null on successful creation of
   * all folders
   * /
  function get remoteError():RemoteError;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
