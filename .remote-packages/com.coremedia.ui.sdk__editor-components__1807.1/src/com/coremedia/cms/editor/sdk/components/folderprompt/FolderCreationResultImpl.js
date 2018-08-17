Ext.define("com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResultImpl", function(FolderCreationResultImpl) {/*package com.coremedia.cms.editor.sdk.components.folderprompt {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.error.RemoteError;

public class FolderCreationResultImpl implements FolderCreationResult {
  public*/ function FolderCreationResultImpl$(success/*:Boolean*/,  createdFolders/*:Array*/,  baseFolder/*:Content*/, remoteError/*:RemoteError = null*/) {if(arguments.length<=3)remoteError=null;
    this['success'] = success;
    this['createdFolders'] = createdFolders;
    this['baseFolder'] = baseFolder;
    this['remoteError'] = remoteError;
  }/*

  public native function get success():Boolean;

  public native function get createdFolders():Array;

  public native function get baseFolder():Content;

  public native function get remoteError():RemoteError;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResult"],
      constructor: FolderCreationResultImpl$,
      requires: ["com.coremedia.cms.editor.sdk.components.folderprompt.FolderCreationResult"]
    };
});
