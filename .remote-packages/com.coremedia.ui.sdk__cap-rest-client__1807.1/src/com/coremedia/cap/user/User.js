Ext.define("com.coremedia.cap.user.User", function(User) {/*package com.coremedia.cap.user {
import com.coremedia.cap.content.Content;

/**
 * A user of the CMS.
 * /
[PublicApi]
public interface User extends Member {

  /**
   * Return the home folder of this user.
   *
   * @return the home folder of this user
   * /
  function getHomeFolder():Content;

  /**
   * Return whether this user is a member of an administrative group.
   *
   * @return whether this user is a member of an administrative group
   * /
  function isAdministrative():Boolean;

  /**
   * Retrieve a reference to the struct stored in the <code>EditorPreferences</code> document stored in the
   * user's home folder and pass it as the single argument to the callback function.
   * If no preference document exists and the user is the user who opened the current session,
   * the server tries to create the preferences document.
   * If no preference document could be determined, null is passed to the callback function.
   *
   * @param callback the callback function, signature <code>function(struct:Struct, error:RemoteError = null):void</code>
   * /
  function loadPreferences(callback:Function):void;

  /**
   * Changes the password of the user
   * The callback function is called when the change password process has finished.
   * It receives a RemoteError as its only parameter.
   * If the process succeeded, the error parameter is <code>null</code>.
   *
   * @param oldPassword the current password
   * @param newPassword the new password
   * @param callback the function to call after the operation. Signature:
   *   <code>function(error:RemoteError):void</code>
   * @see com.coremedia.ui.data.error.RemoteError
   * /
  function changePassword(oldPassword:String, newPassword:String, callback:Function):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.user.Member"],
      requires: ["com.coremedia.cap.user.Member"]
    };
});
