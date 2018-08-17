Ext.define("com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType", function(ComponentBasedWorkAreaTabType) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import ext.panel.Panel;
import net.jangaroo.ext.Exml;
public class ComponentBasedWorkAreaTabType extends ComponentBasedWorkAreaTabTypeBase{

    public*/function ComponentBasedWorkAreaTabType$(config/*:ComponentBasedWorkAreaTabType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase,{});
    var defaults_$1/*:ComponentBasedWorkAreaTabType*/ =AS3.cast(ComponentBasedWorkAreaTabType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$138F(config_$1);
  }/*

    /**
     A config object of the tab component used for creating new tabs of this tab type.
     * /
    [Bindable]
    public var tabComponent:ext.panel.Panel;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase",
      constructor: ComponentBasedWorkAreaTabType$,
      super$138F: function() {
        com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase.prototype.constructor.apply(this, arguments);
      },
      config: {tabComponent: null},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabTypeBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
