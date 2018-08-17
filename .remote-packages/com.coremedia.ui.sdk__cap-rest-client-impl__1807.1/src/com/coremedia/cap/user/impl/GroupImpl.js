Ext.define("com.coremedia.cap.user.impl.GroupImpl", function(GroupImpl) {/*package com.coremedia.cap.user.impl {
import com.coremedia.cap.user.Group;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

import ext.Ext;

[RestResource(uriTemplate="group/{id:[0-9]+}")]
public class GroupImpl extends MemberImpl implements Group {

  public*/ function GroupImpl$(path/*:String*/, vars/*:Object*/) {
    this.super$9zx2(path, vars);
  }/*

  /**
   * Returns that this Member is not a User (but a Group).
   * @return false
   * /
  override public*/ function isUser()/*:Boolean*/ {
    return false;
  }/*

  public*/ function loadDirectMembers(success/*:Function*/, failure/*:Function = null*/)/*:void*/ {if(arguments.length<=1)failure=null;
    success = success || Ext.emptyFn;
    failure = failure || Ext.emptyFn;

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getUriPath() + "/directMembers", "GET", true);
    rsm.request(null,
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var directMembers/*:Array*/ = response.getResponseJSON()["items"];
              success(directMembers, null);
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure(null, response.getError());
            });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.user.impl.MemberImpl",
      mixins: ["com.coremedia.cap.user.Group"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "group/{id:[0-9]+}"
        ]
      ]},
      constructor: GroupImpl$,
      super$9zx2: function() {
        com.coremedia.cap.user.impl.MemberImpl.prototype.constructor.apply(this, arguments);
      },
      isUser: isUser,
      loadDirectMembers: loadDirectMembers,
      requires: [
        "Ext",
        "com.coremedia.cap.user.Group",
        "com.coremedia.cap.user.impl.MemberImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ]
    };
});
