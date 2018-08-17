Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainer", function(ClickableContainer) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets.translate{
import com.coremedia.cms.editor.sdk.dashboard.widgets.translate.*;
import net.jangaroo.ext.Exml;
public class ClickableContainer extends ClickableContainerBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.clickableContainer";

    public*/function ClickableContainer$(config/*:ClickableContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase,{});
    var defaults_$1/*:ClickableContainer*/ =AS3.cast(ClickableContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.event = "mouseup";
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bsHo(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.clickableContainer",
      constructor: ClickableContainer$,
      super$bsHo: function() {
        com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.widgets.translate.ClickableContainerBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
