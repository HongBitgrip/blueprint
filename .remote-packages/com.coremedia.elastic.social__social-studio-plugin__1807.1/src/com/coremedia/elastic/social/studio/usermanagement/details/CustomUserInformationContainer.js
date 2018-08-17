Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainer", function(CustomUserInformationContainer) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.Component;
public class CustomUserInformationContainer extends CustomUserInformationContainerBase{

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.customUserInformationContainer";

    public*/function CustomUserInformationContainer$(config/*:CustomUserInformationContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase,{});
    var defaults_$1/*:CustomUserInformationContainer*/ =AS3.cast(CustomUserInformationContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"layout" , "anchor");
    var component_18_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(component_18_5_$1,"width" , 0);
    AS3.setBindable(component_18_5_$1,"height" , 0);
    config_$1.items = [component_18_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rKjN(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.customUserInformationContainer",
      constructor: CustomUserInformationContainer$,
      super$rKjN: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "com.coremedia.elastic.social.studio.usermanagement.details.CustomUserInformationContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
