Ext.define("com.coremedia.cms.editor.sdk.plugins.OnlyIf", function(OnlyIf) {/*package com.coremedia.cms.editor.sdk.plugins{
import com.coremedia.cms.editor.sdk.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin that makes sure that another plugin (configured in the
 <code>then</code> attribute) is only executed if certain conditions
 are met. At the moment the supported conditions checks whether
 the current user is a member of an administrative group or
 a specifically named group. A custom condition may be supplied as
 a function.
 * /
public class OnlyIf extends OnlyIfBase{

    public*/function OnlyIf$(config/*:OnlyIf = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.plugins.OnlyIfBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.OnlyIfBase,{});
    var defaults_$1/*:OnlyIf*/ =AS3.cast(OnlyIf,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$e2eH(config_$1);
  }/*

    /**
     Whether to restrict the execution of the plugin to administrators
     or non-administrators.
     If true, execute only if the current user is
     a member of an administrative group.
     If false, execute only if the current user is not
     a member of an administrative group.
     Otherwise or if not set, this condition is skipped.
     * /
    [Bindable]
    public var isAdministrator:Boolean;


    /**
     Whether to restrict the execution of the plugin to members of the given group.
     If multiple groups are given as a comma-separated list, the plugin is executed for members of any group.
     * /
    [Bindable]
    public var isMemberOf:String;


    /**
     Whether to restrict the execution of the plugin to users who are not members of the given group.
     If multiple groups are given as a comma-separated list, the plugin is not executed for members of any group.
     This condition takes precedence over the isMemberOf condition.
     * /
    [Bindable]
    public var isNotMemberOf:String;


    /**
     A boolean function that takes this plugin's associated component as its single argument
     and that returns true if the condition holds.
     * /
    [Bindable]
    public var condition:Function;


    /**
     The plugin to execute if all specified conditions hold.
     * /
    [Bindable]
    public var then:Object;


    /**
     The plugin to execute if at least one specified conditions does not hold.
     * /
    [Bindable]
    public var otherwise:Object;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.plugins.OnlyIfBase",
      metadata: {"": ["PublicApi"]},
      constructor: OnlyIf$,
      super$e2eH: function() {
        com.coremedia.cms.editor.sdk.plugins.OnlyIfBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        isAdministrator: false,
        isMemberOf: null,
        isNotMemberOf: null,
        condition: null,
        then: null,
        otherwise: null
      },
      requires: [
        "com.coremedia.cms.editor.sdk.plugins.OnlyIfBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
