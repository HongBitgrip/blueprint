Ext.define("com.coremedia.blueprint.base.components.util.UserUtil", function(UserUtil) {/*package com.coremedia.blueprint.base.components.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.user.Group;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * Common user utility methods.
 * /
public class UserUtil {

  private static*/ var groups$static/*:Array*/;/* =*/function groups$static_(){groups$static=( []);};/*
  private static*/ var userName$static/*:String*/=null;/*
  private static*/ var home$static/*:Content*/=null;/*

  /**
   * Is invoked during the startup of the plugin.
   * It caches all direct groups of the current user group recursivly.
   * /
  public static*/ function init$static()/*:void*/ {
    var user/*:User*/ = com.coremedia.cap.common.SESSION.getUser();
    user.load(function ()/*:void*/ {
      userName$static = user.getName();
      home$static = user.getHomeFolder();
      home$static.load(function ()/*:void*/ {
        com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.content.ContentPropertyNames.PATH, home$static).loadValue(function ()/*:void*/ {
          //check the direct groups of the user for any match.
          var groups/*:Array*/ = user.getDirectGroups();
          for (var j/*:int*/ = 0; j < groups.length; j++) {
            var directGroup/*:Group*/ = groups[j];
            loadGroup$static(directGroup);
          }
        });
      });
    });
  }/*

  /**
   * Returns the home folder of the active user.
   * @return
   * /
  public static*/ function getHome$static()/*:Content*/ {
    return home$static;
  }/*

  /**
   * Recursive call for group loading.
   * @param group The group to load, including it's sub-groups.
   * /
  private static*/ function loadGroup$static(group/*:Group*/)/*:void*/ {
    group.load(function ()/*:void*/ {
      groups$static.push(group);
      var directGroups/*:Array*/ = group.getDirectGroups();
      directGroups.forEach(function (dGroup/*:Group*/)/*:void*/ {
        loadGroup$static(dGroup);
      });
    });
  }/*

  /**
   * Checks if the user is in the group with the given name.
   * Since we load the group name recursively, it can be a parent group too.
   * @param group The name of the group to check
   * @param domain Optional, the domain can also be passed via concatenated 'at' symbol (&#64;)
   * @return True, if the active user is member of the given group.
   * /
  public static*/ function isInGroup$static(groupName/*:String*/, domainName/*:String = undefined*/)/*:Boolean*/ {
    var name/*:String*/ = groupName;
    var domain/*:String*/ = domainName;
    if (groupName.indexOf("@") > 0) {
      name = groupName.substr(0, groupName.lastIndexOf("@"));
      domain = groupName.substr(groupName.lastIndexOf("@") + 1, groupName.length);
    }

    for (var i/*:int*/ = 0; i < groups$static.length; i++) {
      if (groups$static[i].getName() === name) {
        if (!domain) { //soft check
          return true;
        }
        if (groups$static[i].getDomain() === domain) {
          return true;
        }
      }
    }
    return false;
  }/*
}*/function UserUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: UserUtil$,
      statics: {
        groups: undefined,
        init: init$static,
        getHome: getHome$static,
        isInGroup: isInGroup$static,
        __initStatics__: function() {
          groups$static_();
        }
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
