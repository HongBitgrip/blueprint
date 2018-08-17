Ext.define("com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanel", function(SidePanel) {/*package com.coremedia.cms.editor.sdk.desktop.sidepanel{
import com.coremedia.cms.editor.sdk.desktop.sidepanel.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.SwitchingContainer;
import ext.layout.container.FitLayout;
/**
 A panel that can display arbitrary components and interact with other side panels or side panel windows
 via drag and drop. A side panel can be added everywhere in the studio and registers itself at the sidePanelManager.

 In order to display a component in a side panel, the component has to be registered at the sidePanelManager.

 The panel can be resized with a splitbar at a configurable region and stores it's width in the browsers local storage.

 @see ISidePanelManager
 @see sidePanelManager
 @see SidePanelFloatingWindow
 * /
public class SidePanel extends SidePanelBase{

    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.sidePanel";

    public*/function SidePanel$(config/*:SidePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase,{});
    var defaults_$1/*:SidePanel*/ =AS3.cast(SidePanel,{});
    AS3.setBindable(defaults_$1,"dropZoneThresholdPixel" , 25);
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , "Side Panel Window");
    AS3.setBindable(config_$1,"hidden" , true);
    AS3.setBindable(config_$1,"border" , false);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DOCKED.getSkin());
    var ui_SwitchingContainer_46_5_$1/*:com.coremedia.ui.components.SwitchingContainer*/ =AS3.cast(com.coremedia.ui.components.SwitchingContainer,{});
    ui_SwitchingContainer_46_5_$1.itemId = "switching-container";
    AS3.setBindable(ui_SwitchingContainer_46_5_$1,"region" , "center");
    AS3.setBindable(ui_SwitchingContainer_46_5_$1,"activeItemValueExpression" , this.getActiveItemValueExpression());
    ui_SwitchingContainer_46_5_$1.bubbleEvents = ['show','hide','activeItem'];
    config_$1.items = [ui_SwitchingContainer_46_5_$1];
    var layout_Fit_53_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_53_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xAoW(config_$1);
  }/*

    /**
     A component or component id used as drop zone that other side panels or side panel windows can be dragged to.
     * /
    [Bindable]
    public var dropZone:Object;


    /**
     The number of pixels to increase the area of the dropZone in each direction.
     * /
    [Bindable]
    public var dropZoneThresholdPixel:Number;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.sidePanel",
      constructor: SidePanel$,
      super$xAoW: function() {
        com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        dropZone: null,
        dropZoneThresholdPixel: NaN
      },
      requires: [
        "Ext.layout.container.Fit",
        "com.coremedia.cms.editor.sdk.desktop.sidepanel.SidePanelBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
