Ext.define("com.coremedia.cms.editor.sdk.login.LogoutUtil", function(LogoutUtil) {/*package com.coremedia.cms.editor.sdk.login {
import com.coremedia.cap.common.SESSION;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.util.FormUtil;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.util.Format;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class LogoutUtil {
  private static const*/var AUTO_LOGOUT_DATE$static/*:String*/ = "autoLogout.date";/*

  public static*/ function logout$static()/*:void*/ {
    com.coremedia.cap.common.SESSION.close();

    // 'logout' triggers the Spring Security Logout Filter
    com.coremedia.ui.data.util.FormUtil.submitForm(com.coremedia.ui.data.impl.RemoteService.calculateRequestURI("../logout"));
  }/*

  public static*/ function autoLogout$static()/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(AUTO_LOGOUT_DATE$static, Ext.util.Format.date(new Date(), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat')));

    LogoutUtil.logout();
  }/*

  /**
   * Return the date of the last auto logout as a formatted string.
   * This method is destructive: It clears the the stored
   * auto logout date.
   *
   * @return the date
   * /
  public static*/ function getAndClearAutoLogoutDate$static()/*:String*/ {
    var result/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(AUTO_LOGOUT_DATE$static);
    com.coremedia.ui.util.LocalStorageUtil.removeItem(AUTO_LOGOUT_DATE$static);
    return result;
  }/*
}*/function LogoutUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: LogoutUtil$,
      statics: {
        logout: logout$static,
        autoLogout: autoLogout$static,
        getAndClearAutoLogoutDate: getAndClearAutoLogoutDate$static
      },
      requires: [
        "Ext.util.Format",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.util.FormUtil",
        "com.coremedia.ui.util.LocalStorageUtil",
        "mx.resources.ResourceManager"
      ]
    };
});
