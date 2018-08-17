Ext.define("com.coremedia.cms.editor.sdk.login.LoginUtil", function(LoginUtil) {/*package com.coremedia.cms.editor.sdk.login {

import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.user.User;
import com.coremedia.cap.user.impl.UserImpl;
import com.coremedia.cms.editor.sdk.EditorContextImpl;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.util.WindowUtil;

public class LoginUtil {
  private static const*/var PARAMETER_LOGIN_NAME$static/*:String*/ = "login-name";/*
  private static const*/var PARAMETER_LOGIN_PWD$static/*:String*/ = "login-pwd";/*
  private static const*/var PARAMETER_LOGIN_DOMAIN$static/*:String*/ = "login-domain";/*

  /**
   * Try to log in using authentication data from the URL.
   * The callback function is called when the login process has finished.
   * It receives a CapSession as its only parameter.
   * If the login succeeded, a session is handed in, if it failed, the
   * session parameter is <code>null</code>.
   *
   * @param capLoginService the login service to use
   * @param callback a function to call when the login has finished.
   *   If the login did not succeed the session is null.
   *   Signature: <code>function(session:CapSession):void</code>
   * /
  public static*/ function autoLogin$static(capLoginService/*:CapLoginService*/, callback/*:Function*/)/*:void*/ {/*
    const*/var hashParamModel/*:Object*/ = com.coremedia.ui.util.WindowUtil.getHashParamsAsObject();
    var userName/*:String*/ = hashParamModel[PARAMETER_LOGIN_NAME$static];
    if (userName) {
      var pwd/*:String*/ = hashParamModel[PARAMETER_LOGIN_PWD$static];
      var domain/*:String*/ = hashParamModel[PARAMETER_LOGIN_DOMAIN$static];
      //rename login-name param to logout-name to prevent from relogin
      window.location.href = window.location.href.replace(PARAMETER_LOGIN_NAME$static, "logout-name");
      capLoginService.login(userName, domain || '', pwd, callback);
    } else {
      callback(null);
    }
  }/*

  /**
   * Load all standard objects (the session user and the user's preferences)
   * and invoke to the callback afterwards.
   *
   * @param callback the callback
   * /
  public static*/ function preload$static(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
    user.load(userLoaded);

    function userLoaded()/*:void*/ {
      com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Array*/{return AS3.cast(com.coremedia.cap.user.impl.UserImpl,user).getGroups();}).loadValue(userGroupsLoaded);
    }

    function userGroupsLoaded()/*:void*/ {
      // load the user preferences
      user.loadPreferences(preferencesRetrieved);
    }

    function preferencesRetrieved(preferencesStruct/*:Struct*/, error/*:RemoteError = null*/)/*:void*/ {if(arguments.length<=1)error=null;
      // skip error handling; preferences might not exist
      if (error) {
        error.setHandled(true);
      }
      com.coremedia.cms.editor.sdk.EditorContextImpl.getInstance().setPreferences(preferencesStruct);
      // load the preferences
      var preferencesStructRemoteBean/*:RemoteBean*/ =AS3.as( preferencesStruct,  com.coremedia.ui.data.RemoteBean);
      if (preferencesStructRemoteBean) {
        preferencesStructRemoteBean.load(preferencesLoaded);
      } else {
        preferencesLoaded();
      }
    }

    function preferencesLoaded()/*:void*/ {
      if (callback) {
        callback();
      }
    }
  }/*
}*/function LoginUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LoginUtil$,
      statics: {
        autoLogin: autoLogin$static,
        preload: preload$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.impl.UserImpl",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.WindowUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.EditorContextImpl"]
    };
});
