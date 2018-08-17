Ext.define("com.coremedia.cap.common.impl.CapLoginServiceImpl", function(CapLoginServiceImpl) {/*package com.coremedia.cap.common.impl {

import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cap.common.CapLoginServicePropertyNames;
import com.coremedia.cap.common.CapSession;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="loginService")]
public class CapLoginServiceImpl extends RemoteBeanImpl implements CapLoginService {

  private var retrieveServiceMethod:RemoteServiceMethod;

  public*/ function CapLoginServiceImpl$(path/*:String*/) {
    this.super$qGjX(path);
    this.retrieveServiceMethod$qGjX = new com.coremedia.ui.data.impl.RemoteServiceMethod(path + "/retrieve", "GET");
  }/*

  public*/ function getVersion()/*:String*/ {
    return this.get(com.coremedia.cap.common.CapLoginServicePropertyNames.VERSION);
  }/*

  public*/ function getDomains()/*:Array*/ {
    return this.get(com.coremedia.cap.common.CapLoginServicePropertyNames.DOMAINS);
  }/*

  public*/ function login(user/*:String*/, domain/*:String*/, password/*:String*/, callback/*:Function*/)/*:void*/ {var this$=this;
    var loginMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod('../login', 'POST', false, false, null, true);
    loginMethod.request(
            {
              'j_username': user + (domain ? '@' + domain : ''),
              'j_password': password
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              this$.retrieveSession(callback);
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var error/*:RemoteError*/ = response.getError();
              error && error.setHandled(true);

              callback(null);
            });
  }/*

  public*/ function retrieveSession(callback/*:Function*/)/*:void*/ {
    this.requestSession$qGjX(this.retrieveServiceMethod$qGjX, {}, function(session/*:CapSession*/)/*:void*/ {
      callback(session);
    });
  }/*

  private*/ function requestSession(remoteServiceMethod/*:RemoteServiceMethod*/, params/*:Object*/, callback/*:Function*/)/*:void*/ {
    var capSession/*:CapSession*/;
    var capConnection/*:CapConnectionImpl*/;

    function success(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var jsonResponse/*:Object*/ = response.getResponseJSON();
      if (!jsonResponse) {
        callback(null);
        return;
      }

      com.coremedia.ui.data.impl.RemoteService.initCsrfToken(jsonResponse.csrfToken);

      // set up the basic connection objects (session, repository, types)
      capSession = new com.coremedia.cap.common.impl.CapSessionImpl(jsonResponse.user, jsonResponse.connection);
      capConnection = AS3.cast(com.coremedia.cap.common.impl.CapConnectionImpl,capSession.getConnection());
      capConnection.load(connectionLoaded);
    }

    function connectionLoaded()/*:void*/ {
      AS3.cast(com.coremedia.ui.data.RemoteBean,capConnection.getContentRepository()).load(repositoryLoaded);
    }

    function repositoryLoaded()/*:void*/ {
      callback(capSession);
    }

    function failure(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var error/*:RemoteError*/ = response.getError();
      if (error) {
        error.setHandled(true);
        callback(null);
      }
    }

    remoteServiceMethod.request(params, success, failure);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.common.CapLoginService"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "loginService"
        ]
      ]},
      retrieveServiceMethod$qGjX: null,
      constructor: CapLoginServiceImpl$,
      super$qGjX: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getVersion: getVersion,
      getDomains: getDomains,
      login: login,
      retrieveSession: retrieveSession,
      requestSession$qGjX: requestSession,
      requires: [
        "com.coremedia.cap.common.CapLoginService",
        "com.coremedia.cap.common.CapLoginServicePropertyNames",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.cap.common.impl.CapConnectionImpl",
        "com.coremedia.cap.common.impl.CapSessionImpl"
      ]
    };
});
