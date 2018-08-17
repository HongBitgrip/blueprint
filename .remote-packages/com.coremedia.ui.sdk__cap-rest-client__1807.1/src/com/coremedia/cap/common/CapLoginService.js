Ext.define("com.coremedia.cap.common.CapLoginService", function(CapLoginService) {/*package com.coremedia.cap.common {
import com.coremedia.ui.data.RemoteBean;

/**
 * Fires when the domains of this CapLoginService change.
 * @eventType com.coremedia.cap.common.CapLoginServicePropertyNames.DOMAINS
 * @see #getDomains()
 * /
[Event(name="domains", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * CapLoginService objects allow users to login to the CMS system.
 * The CapConnection remote service must be used to obtain a CapLoginService object.
 *
 * <p>A session can be retrieved either by login or by reconstructing a previous session.</p>
 *
 * @see #login()
 * @see #retrieveSession()
 * @see com.coremedia.cap.common.CapConnection
 * /
[PublicApi]
public interface CapLoginService extends RemoteBean {

  /**
   * Return the CMS remote service version.
   * @return the CMS remote service version
   *
   * @see CapLoginServicePropertyNames#VERSION
   * /
  function getVersion():String;

  /**
   * Return a list of all domain names known to this CMS remote service.
   * @return a list of all domain names (Array of Strings) known to this CMS remote service
   *
   * @see CapLoginServicePropertyNames#DOMAINS
   * @see #login()
   * /
  function getDomains():Array/* Vector.<String> * /;
  
  /**
   * Create a session using the given user credentials.
   * The callback function is called when the login process has finished.
   * It receives a CapSession as its only parameter.
   * If the login succeeded, a session is handed in, if it failed, the
   * session parameter is <code>null</code>.
   *
   * @param user the user name to use for login
   * @param domain the domain to use for login (default: built-in domain)
   * @param password the password to use for login
   * @param callback a function to call when the login has finished.
   *   If the login did not succeed the session is null.
   *   Signature: <code>function(session:CapSession):void</code>
   *
   * @see #retrieveSession()
   * @see #getDomains()
   * /
  function login(user:String, domain:String, password:String, callback:Function):void;

  /**
   * Obtain the current CapSession.
   * The callback function is called with the CapSession as its only parameter,
   * or <code>null</code> if no user is currently logged in.
   *
   * @param callback a function to call when the login has finished.
   *   Signature: <code>function(session:CapSession):void</code>
   *
   * @see #login()
   * @see CapSession
   * /
  function retrieveSession(callback:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
