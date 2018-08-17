Ext.define("com.coremedia.cap.user.impl.UserImpl", function(UserImpl) {/*package com.coremedia.cap.user.impl {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="user/{id:[0-9]+}")]
public class UserImpl extends MemberImpl implements User {

  public*/ function UserImpl$(path/*:String*/, vars/*:Object*/) {
    this.super$mhwe(path, vars);
  }/*

  /**
   * Returns that this Member is a User.
   * @return true
   * /
  override public*/ function isUser()/*:Boolean*/ {
    return true;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getHomeFolder()/*:Content*/ {
    return this.get('homeFolder');
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isAdministrative()/*:Boolean*/ {
    return this.get('administrative');
  }/*

  /**
   * Return the URI for retrieving the initial worklist for this user.
   * Internal use, only.
   *
   * @return the URI for retrieving the initial worklist for this user
   * /
  public*/ function getWorklistUri()/*:String*/ {
    return this.get('worklistUri');
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function loadPreferences(callback/*:Function*/)/*:void*/ {
    var loadPreferencesMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/preferences", 'GET');
    loadPreferencesMethod.request(
      {},
      function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
        callback(AS3.as(response.getResponseJSON(),  com.coremedia.cap.struct.Struct));
      },
      function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
        callback(null, response.getError());
      }
    );
  }/*

  public*/ function changePassword(oldPassword/*:String*/, newPassword/*:String*/, callback/*:Function*/)/*:void*/ {
    var changePasswordMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/changePassword", 'POST');
    changePasswordMethod.request(
      {oldPassword: oldPassword, newPassword: newPassword},
      function()/*:void*/ {
        callback(null);
      },
      function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
        var error/*:RemoteError*/ = response.getError();
        callback(error);
      }
    );
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.user.impl.MemberImpl",
      mixins: ["com.coremedia.cap.user.User"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "user/{id:[0-9]+}"
        ]
      ]},
      constructor: UserImpl$,
      super$mhwe: function() {
        com.coremedia.cap.user.impl.MemberImpl.prototype.constructor.apply(this, arguments);
      },
      isUser: isUser,
      getHomeFolder: getHomeFolder,
      isAdministrative: isAdministrative,
      getWorklistUri: getWorklistUri,
      loadPreferences: loadPreferences,
      changePassword: changePassword,
      requires: [
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cap.user.User",
        "com.coremedia.cap.user.impl.MemberImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ]
    };
});
