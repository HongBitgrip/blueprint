Ext.define("com.coremedia.cms.editor.sdk.plugins.OnlyIfBase", function(OnlyIfBase) {/*package com.coremedia.cms.editor.sdk.plugins {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.Group;
import com.coremedia.cap.user.impl.UserImpl;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.Plugin;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class OnlyIfBase extends AbstractPlugin {
  private var isAdministrator:Boolean;
  private var isMemberOf:String;
  private var isNotMemberOf:String;
  private var condition:Function;

  private var then:Object;
  private var otherwise:Object;

  public*/ function OnlyIfBase$(config/*:OnlyIf = null*/) {if(arguments.length<=0)config=null;
    this.isAdministrator$YZI2 = AS3.getBindable(config,"isAdministrator");
    this.isMemberOf$YZI2 = AS3.getBindable(config,"isMemberOf");
    this.isNotMemberOf$YZI2 = AS3.getBindable(config,"isNotMemberOf");
    this.condition$YZI2 = AS3.getBindable(config,"condition");
    this.then$YZI2 = AS3.getBindable(config,"then");
    this.otherwise$YZI2 = AS3.getBindable(config,"otherwise");
    this.super$YZI2 (config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var execute/*:Boolean*/ = true;
    if (this.isAdministrator$YZI2 !== undefined) {
      execute = execute && com.coremedia.cap.common.SESSION.getUser().isAdministrative() === this.isAdministrator$YZI2;
    }

    if (this.isMemberOf$YZI2 || this.isNotMemberOf$YZI2) {
      var isMemberOfArray/*:Array*/ = (this.isMemberOf$YZI2 || "").split(",");
      var isNotMemberOfArray/*:Array*/ = (this.isNotMemberOf$YZI2 || "").split(",");
      var groups/*:Array*/ = AS3.cast(com.coremedia.cap.user.impl.UserImpl,com.coremedia.cap.common.SESSION.getUser()).getGroups();
      var isMember/*:Boolean*/ = false;
      for (var i/*:int*/ = 0; i < groups.length; i++) {
        var group/*:Group*/ = groups[i];
        var domain/*:String*/ = group.getDomain();
        var nameAtDomain/*:String*/ = group.getName() + (domain ? "@" + domain : "");
        isMember = isMember || isMemberOfArray.indexOf(nameAtDomain) !== -1;
        if (this.isNotMemberOf$YZI2) {
          execute = execute && isNotMemberOfArray.indexOf(nameAtDomain) === -1;
        }
      }

      if (this.isMemberOf$YZI2) {
        execute = execute && isMember;
      }
    }

    if (this.condition$YZI2) {
      execute = execute && this.condition$YZI2(component);
    }

    if (execute) {
      this.executePlugin$YZI2(this.then$YZI2, component);
    } else {
      this.executePlugin$YZI2(this.otherwise$YZI2, component);
    }
  }/*

  private*/ function executePlugin(pluginCfg/*:Object*/, component/*:Component*/)/*:void*/ {
    if (pluginCfg) {
      var plugin/*:Plugin*/ =AS3.as( pluginCfg,  ext.Plugin);
      if (!plugin) {
        com.coremedia.ui.logging.Logger.error("cannot instantiate plugin from config " + com.coremedia.ui.util.ObjectUtils.toJson(pluginCfg));
        return;
      }
      if (!plugin['isInstance']) {
        plugin =AS3.as( Ext.create(pluginCfg),  ext.Plugin);
      }
      plugin.init(component);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      isAdministrator$YZI2: false,
      isMemberOf$YZI2: null,
      isNotMemberOf$YZI2: null,
      condition$YZI2: null,
      then$YZI2: null,
      otherwise$YZI2: null,
      constructor: OnlyIfBase$,
      super$YZI2: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      executePlugin$YZI2: executePlugin,
      requires: [
        "Ext",
        "Ext.plugin.Abstract",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.impl.UserImpl",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ObjectUtils",
        "ext.Plugin"
      ]
    };
});
