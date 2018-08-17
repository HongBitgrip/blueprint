Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindow", function(SidePanelFloatingWindow) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel{
import com.coremedia.cms.editor.sdk.desktop.sidepanel.*;
import net.jangaroo.ext.Exml;
/**
 A window that can display arbitrary components and interact with side panels via drag and drop.
 In order to display a component in a side panel window, the component has to be registered at the sidePanelManager.

 Side panel windows are created dynamically when a component is created by the sidePanelManger that has the config
 option docked = false, or when a component is dragged out of a side panel.

 The window stores it's size and position in the browsers local storage.

 @see ISidePanelManager
 @see sidePanelManager
 @see SidePanel
 * /
public class SidePanelFloatingWindow extends SidePanelFloatingWindowBase{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.sidePanelFloatingWindow";

    public*/function SidePanelFloatingWindow$(config/*:SidePanelFloatingWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase,{});
    var defaults_$1/*:SidePanelFloatingWindow*/ =AS3.cast(SidePanelFloatingWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , "Side Panel");
    AS3.setBindable(config_$1,"layout" , "fit");
    config_$1.closeAction = "hide";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.stateEvents = ['afterrender', 'resize', 'move'];
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'CollectionView_label'));
    config_$1.draggable = true;
    config_$1.constrainHeader = true;
    AS3.setBindable(config_$1,"hidden" , true);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$EHHM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.sidePanelFloatingWindow",
      constructor: SidePanelFloatingWindow$,
      super$EHHM: function() {
        com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelFloatingWindowBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
