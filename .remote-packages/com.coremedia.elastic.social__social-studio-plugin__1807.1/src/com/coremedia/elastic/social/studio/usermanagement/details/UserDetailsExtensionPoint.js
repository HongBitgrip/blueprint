Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPoint", function(UserDetailsExtensionPoint) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
public class UserDetailsExtensionPoint extends UserDetailsExtensionPointBase{

    import com.coremedia.elastic.social.studio.model.Moderation;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userDetailsExtensionPoint";

    public*/function UserDetailsExtensionPoint$(config/*:UserDetailsExtensionPoint = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase,{});
    var defaults_$1/*:UserDetailsExtensionPoint*/ =AS3.cast(UserDetailsExtensionPoint,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    var es_CustomUserInformationContainer_23_5_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer,{});
    es_CustomUserInformationContainer_23_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase.EXTENSION_CONTAINER_ITEM_ID);
    es_CustomUserInformationContainer_23_5_$1.anchor = "100%";
    config_$1.items = [es_CustomUserInformationContainer_23_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KiC2(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userDetailsExtensionPoint",
      constructor: UserDetailsExtensionPoint$,
      super$KiC2: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPointBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer"]
    };
});
