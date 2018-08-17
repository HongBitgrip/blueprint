Ext.define("com.coremedia.ui.components.FloatingToolbarContainer", function(FloatingToolbarContainer) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class FloatingToolbarContainer extends FloatingToolbarContainerBase{


    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.floatingToolbarContainer";

    public*/function FloatingToolbarContainer$(config/*:FloatingToolbarContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.FloatingToolbarContainerBase*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbarContainerBase,{});
    var defaults_$1/*:FloatingToolbarContainer*/ =AS3.cast(FloatingToolbarContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Zp10(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.FloatingToolbarContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.floatingToolbarContainer",
      constructor: FloatingToolbarContainer$,
      super$Zp10: function() {
        com.coremedia.ui.components.FloatingToolbarContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.FloatingToolbarContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
