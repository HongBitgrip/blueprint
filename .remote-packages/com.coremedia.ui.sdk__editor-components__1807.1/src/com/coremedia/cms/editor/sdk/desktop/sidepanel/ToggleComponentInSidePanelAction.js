Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelAction", function(ToggleComponentInSidePanelAction) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel{
import com.coremedia.cms.editor.sdk.desktop.sidepanel.*;
import net.jangaroo.ext.Exml;
/**
 This action can be used to toggle a component that has been registered at the sidePanelManager.
 @see sitePanelManager
 * /
public class ToggleComponentInSidePanelAction extends ToggleComponentInSidePanelActionBase{

    public*/function ToggleComponentInSidePanelAction$(config/*:ToggleComponentInSidePanelAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase,{});
    var defaults_$1/*:ToggleComponentInSidePanelAction*/ =AS3.cast(ToggleComponentInSidePanelAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gYE2(config_$1);
  }/*

    /**
     The id with that the desired component has been registered at the sidePanelManager.
     * /
    [Bindable]
    public var componentId:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase",
      constructor: ToggleComponentInSidePanelAction$,
      super$gYE2: function() {
        com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {componentId: null},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.ToggleComponentInSidePanelActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
