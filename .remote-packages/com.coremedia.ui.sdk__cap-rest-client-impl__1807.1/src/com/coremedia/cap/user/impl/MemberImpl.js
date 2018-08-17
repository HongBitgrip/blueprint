Ext.define("com.coremedia.cap.user.impl.MemberImpl", function(MemberImpl) {/*package com.coremedia.cap.user.impl {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.Group;
import com.coremedia.cap.user.Member;
import com.coremedia.cap.user.UserRepository;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class MemberImpl extends RemoteBeanImpl implements Member {

  private static const*/var NUMERIC_ID_PROPERTY$static/*:String*/ = "numericId";/*

  private var isMemberOfService:RemoteServiceMethod;

  /**
   * Do not call directly. Only used by subclasses.
   * /
  public*/ function MemberImpl$(path/*:String*/, vars/*:Object*/) {
    this.super$fagt(path);
    this.isMemberOfService$fagt = new com.coremedia.ui.data.impl.RemoteServiceMethod(path + "/ismemberof", "GET");
    var id/*:**/ = vars['id'];
    this.setImmediateProperty(NUMERIC_ID_PROPERTY$static,AS3.is( id,  Number) ? id : parseInt(id));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getRepository()/*:UserRepository*/ {
     return com.coremedia.cap.common.SESSION.getConnection().getUserRepository();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getName()/*:String*/ {
    return this.get('name');
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDomain()/*:String*/ {
    return this.get('domain');
  }/*


  /**
   * @inheritDoc
   * /
  public*/ function isGroup()/*:Boolean*/ {
    return !this.isUser();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isUser()/*:Boolean*/ {
    throw new AS3.Error("do not instantiate MemberImpl!");
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isBuiltIn()/*:Boolean*/ {
    return this.get('builtIn');
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isExternal()/*:Boolean*/ {
    return this.get('external');
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isDirectMemberOf(group/*:Group*/)/*:Boolean*/ {
    var directGroups/*:Array*/ = this.getDirectGroups();
    return directGroups && directGroups.indexOf(group) !== -1;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function isMemberOf(group/*:Group*/, callback/*:Function = null*/)/*:Boolean*/ {if(arguments.length<=1)callback=null;
    if (arguments.length == 2) {
      this.isMemberOfService$fagt.request({group: group},
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                var result/*:Boolean*/ = response.getResponseJSON();
                callback(result);
              },
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                callback(false);
              }
      );
    } else {
      var groups/*:Array*/ = this.getGroups();
      return groups && groups.indexOf(group) !== -1;
    }
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getDirectGroups()/*:Array*/ {
    return this.get('directGroups');
  }/*

  public*/ function getGroups()/*:Array*/ {
    var groupsToExpand/*:Array*/ = this.getDirectGroups();
    if (!groupsToExpand) {
      return undefined;
    }
    var allKnown/*:Boolean*/ = true;
    var groups/*:Array*/ = [];
    while (groupsToExpand.length) {
      var groupsToExpandNext/*:Array*/ = [];
      for/* each*/ (var $2=0;$2</* in*/ groupsToExpand.length;++$2) {var group/*:Group*/ =groupsToExpand[$2];
        groups.push(group);
        var directGroups/*:Array*/ = group.getDirectGroups();
        if (directGroups === undefined) {
          allKnown = undefined; // load of group triggered, but keep going to trigger as many groups as possible
        } else {
          for/* each*/ (var $1=0;$1</* in*/ directGroups.length;++$1) {var directGroup/*:Group*/ =directGroups[$1];
            if (groups.indexOf(directGroup) === -1) { // only expand once; ignores cycles
              groupsToExpandNext.push(directGroup);
            }
          }
        }
      }
      groupsToExpand = groupsToExpandNext;
    }
    return allKnown && groups;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.cap.user.Member"],
      isMemberOfService$fagt: null,
      constructor: MemberImpl$,
      super$fagt: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getRepository: getRepository,
      getName: getName,
      getDomain: getDomain,
      isGroup: isGroup,
      isUser: isUser,
      isBuiltIn: isBuiltIn,
      isExternal: isExternal,
      isDirectMemberOf: isDirectMemberOf,
      isMemberOf: isMemberOf,
      getDirectGroups: getDirectGroups,
      getGroups: getGroups,
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.Member",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ]
    };
});
