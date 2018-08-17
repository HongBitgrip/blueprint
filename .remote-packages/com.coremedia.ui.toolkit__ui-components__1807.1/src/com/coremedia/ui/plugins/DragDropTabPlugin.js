Ext.define("com.coremedia.ui.plugins.DragDropTabPlugin", function(DragDropTabPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 A plugin for @see ext.TabPanel that adds some drag and drop functionality to the tab strips of the given tab panel.
 * /
public class DragDropTabPlugin extends DragDropTabPluginBase{

    public*/function DragDropTabPlugin$(config/*:DragDropTabPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.DragDropTabPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.DragDropTabPluginBase,{});
    var defaults_$1/*:DragDropTabPlugin*/ =AS3.cast(DragDropTabPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$waJ(config_$1);
  }/*

    /**

     If in drag mode and the drag source belongs to any of the given groups the corresponding tab will be opened after
     a certain delay when hovering over a tab strip.

     * /
    [Bindable]
    public var activateOnHoverDDGroups:Array;


    /**

     Specifies a delay if tab should not be opened immediately on hover.

     * /
    [Bindable]
    public var activateOnHoverDelay:int;


    /**

     If a valid ddGroup is set rearrange functionality will be activated for the @see ext.TabPanel meaning tab strips
     dragged tab strips can be dropped on the tab strip bar to rearrange the tabs.

     * /
    [Bindable]
    public var rearrangeDDGroup:String;


    /**

     Only applies if a valid rearrangeDDGroup is set.

     The function to call for removal of a dragged-and-dropped tab before it gets added again at its
     new position. The signature of the function is:
     &lt;code> @param tab The tab to remove.&lt;/code>
     &lt;code>function(tab:ext.Component):void&lt;/code>
     By default, &lt;code>Container.remove(tab, false)&lt;/code> is called.

     * /
    [Bindable]
    public var removeTabFunction:Function;


    /**

     Only applies if a valid rearrangeDDGroup is set.

     The function to call for adding a dragged-and-dropped tab at its new position.
     The signature of the function is:
     &lt;code> @param tab The tab panel's item index where the tab is added.&lt;/code>
     &lt;code> @param tab The tab to add.&lt;/code>
     &lt;code>function(index:int, tab:ext.Component):void&lt;/code>
     By default, &lt;code>Container.insert(index, tab):void&lt;/code> is called.

     * /
    [Bindable]
    public var addTabFunction:Function;


    /**

     Only applies if a valid rearrangeDDGroup is set as this makes tab strips draggable.

     An optional function that is called to customize drag and drop data.
     If can for example be used to add dd groups, to add additional drag data or
     to customize the looks of the drag ghost (or replace it entirely).
     The signature of the function is:
     &lt;code> @param tab The tab panel's item index where the tab is added.&lt;/code>
     &lt;code> @param tab The tab to add.&lt;/code>
     &lt;code>function(dragZone:ext.dd.DragZone, dragData:Object, dragGhost:ext.Element):void&lt;/code>

     * /
    [Bindable]
    public var customizeDragData:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.DragDropTabPluginBase",
      constructor: DragDropTabPlugin$,
      super$$waJ: function() {
        com.coremedia.ui.plugins.DragDropTabPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        activateOnHoverDDGroups: null,
        activateOnHoverDelay: 0,
        rearrangeDDGroup: null,
        removeTabFunction: null,
        addTabFunction: null,
        customizeDragData: null
      },
      requires: [
        "com.coremedia.ui.plugins.DragDropTabPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
