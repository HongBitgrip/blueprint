Ext.define("com.coremedia.ui.components.IFrameAwareMenu", function(IFrameAwareMenu) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
/**
 A menu that shims iframes when it is shown and unshims iframe
 when it is hidden. That makes sure that a click outside the menu
 reliably closes the menu.

 @see com.coremedia.ui.components.IFrameMgr
 * /
public class IFrameAwareMenu extends IFrameAwareMenuBase{

    public static const xtype:String = "com.coremedia.ui.config.iFrameAwareMenu";

    public*/function IFrameAwareMenu$(config/*:IFrameAwareMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.IFrameAwareMenuBase*/ =AS3.cast(com.coremedia.ui.components.IFrameAwareMenuBase,{});
    var defaults_$1/*:IFrameAwareMenu*/ =AS3.cast(IFrameAwareMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2ZDb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IFrameAwareMenuBase",
      alias: "widget.com.coremedia.ui.config.iFrameAwareMenu",
      constructor: IFrameAwareMenu$,
      super$2ZDb: function() {
        com.coremedia.ui.components.IFrameAwareMenuBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.components.IFrameAwareMenuBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
