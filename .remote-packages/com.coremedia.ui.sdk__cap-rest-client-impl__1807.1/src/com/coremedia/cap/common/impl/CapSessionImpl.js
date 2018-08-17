Ext.define("com.coremedia.cap.common.impl.CapSessionImpl", function(CapSessionImpl) {/*package com.coremedia.cap.common.impl {

import com.coremedia.cap.common.CapConnection;
import com.coremedia.cap.common.CapSession;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.applicationContext;
import com.coremedia.ui.util.WindowUtil;

/**
 * A singleton (static methods only) representing the current user session on the client.
 * /
public class CapSessionImpl implements CapSession {

  /**
   * The property name under that the session instance is stored in the application context.
   *
   * @see com.coremedia.ui.data.applicationContext
   * /
  public static const CURRENT_SESSION_PROPERTY:String = "session";

  private var user:User;
  private var connection:CapConnectionImpl;

  /**
   * Do no invoke directly. Only used by CapLoginServiceImpl
   * /
  public*/ function CapSessionImpl$(user/*:User*/, connection/*:CapConnectionImpl*/) {
    this.user$Tu2X = user;
    this.connection$Tu2X = connection;
    com.coremedia.cap.common.SESSION = this;
    com.coremedia.ui.data.applicationContext.set(CapSessionImpl.CURRENT_SESSION_PROPERTY, this);
  }/*

  public*/ function getUser()/*:User*/ {
    return this.user$Tu2X;
  }/*

  public*/ function getConnection()/*:CapConnection*/ {
    return this.connection$Tu2X;
  }/*

  public*/ function close(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    this.connection$Tu2X.setAutomaticInvalidations(false);
    com.coremedia.ui.util.WindowUtil.disableUnloadWarning();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapSession"],
      user$Tu2X: null,
      connection$Tu2X: null,
      constructor: CapSessionImpl$,
      getUser: getUser,
      getConnection: getConnection,
      close: close,
      statics: {CURRENT_SESSION_PROPERTY: "session"},
      requires: [
        "com.coremedia.cap.common.CapSession",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.ui.data.applicationContext",
        "com.coremedia.ui.util.WindowUtil"
      ]
    };
});
