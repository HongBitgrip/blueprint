Ext.define("com.coremedia.cap.user.impl.UserRepositoryImpl", function(UserRepositoryImpl) {/*package com.coremedia.cap.user.impl {
import com.coremedia.cap.user.Group;
import com.coremedia.cap.user.Member;
import com.coremedia.cap.user.User;
import com.coremedia.cap.user.UserRepository;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

[RestResource(uriTemplate="user")]
public class UserRepositoryImpl extends RemoteBeanImpl implements UserRepository {

  private var groupByNameService:RemoteServiceMethod;

  /**
   * Do not invoke directly. Used by the bean factory to create a user repository object.
   * /
  public*/ function UserRepositoryImpl$(path/*:String*/) {
    this.super$f4yI(path);
    this.groupByNameService$f4yI = new com.coremedia.ui.data.impl.RemoteServiceMethod(path + "/getgroupbyname", "GET");
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function  get$builtInDomainName()/*:String*/ {
    return "";
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getMember(uriPath/*:String*/)/*:Member*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath),  com.coremedia.cap.user.Member);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getUser(uriPath/*:String*/)/*:User*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath),  com.coremedia.cap.user.User);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getGroup(uriPath/*:String*/)/*:Group*/ {
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(uriPath),  com.coremedia.cap.user.Group);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getGroupByName(nameAtDomain/*:String*/, callback/*:Function*/)/*:void*/ {
    this.groupByNameService$f4yI.request({
      nameAtDomain: nameAtDomain
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      callback(AS3.as(response.getResponseJSON(),  com.coremedia.cap.user.Group));
    }, function(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var error/*:RemoteError*/ = response.getError();
      if(error.status === 404) {
        error.setHandled(true);
      }
      callback(null);
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.user.UserRepository"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "user"
        ]
      ]},
      groupByNameService$f4yI: null,
      constructor: UserRepositoryImpl$,
      super$f4yI: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getMember: getMember,
      getUser: getUser,
      getGroup: getGroup,
      getGroupByName: getGroupByName,
      __accessors__: {builtInDomainName: {get: get$builtInDomainName}},
      requires: [
        "com.coremedia.cap.user.Group",
        "com.coremedia.cap.user.Member",
        "com.coremedia.cap.user.User",
        "com.coremedia.cap.user.UserRepository",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ]
    };
});
