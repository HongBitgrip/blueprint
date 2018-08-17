Ext.define("com.coremedia.ui.components.FloatingToolbar", function(FloatingToolbar) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
public class FloatingToolbar extends FloatingToolbarBase{

    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.floatingToolbar";

    public*/function FloatingToolbar$(config/*:FloatingToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.FloatingToolbarBase*/ =AS3.cast(com.coremedia.ui.components.FloatingToolbarBase,{});
    var defaults_$1/*:FloatingToolbar*/ =AS3.cast(FloatingToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD_LIGHT.getSkin());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$0PL1(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.FloatingToolbarBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.floatingToolbar",
      constructor: FloatingToolbar$,
      super$0PL1: function() {
        com.coremedia.ui.components.FloatingToolbarBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.FloatingToolbarBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.ui.skins.ToolbarSkin"]
    };
});
