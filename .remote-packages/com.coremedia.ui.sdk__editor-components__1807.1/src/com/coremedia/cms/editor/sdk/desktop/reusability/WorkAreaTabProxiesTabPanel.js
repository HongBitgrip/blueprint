Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanel", function(WorkAreaTabProxiesTabPanel) {/*package com.coremedia.cms.editor.sdk.desktop.reusability{
import com.coremedia.cms.editor.sdk.desktop.*;
import com.coremedia.cms.editor.sdk.desktop.reusability.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.DragDropTabPlugin;
import com.coremedia.ui.plugins.TabContextMenuPlugin;
public class WorkAreaTabProxiesTabPanel extends WorkAreaTabProxiesTabPanelBase{

    import com.coremedia.cms.editor.sdk.desktop.*;
    import com.coremedia.cms.editor.sdk.util.UIBehaviour;
    import com.coremedia.ui.skins.TabBarSkin;

    public static const WORK_AREA_TAB_PROXIES_TABBAR_ID:String = "workAreaTabProxies";

    public static const xtype:String = "com.coremedia.cms.editor.sdk.desktop.workAreaTabProxiesTabPanel";

    public*/function WorkAreaTabProxiesTabPanel$(config/*:WorkAreaTabProxiesTabPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase,{});
    var defaults_$1/*:WorkAreaTabProxiesTabPanel*/ =AS3.cast(WorkAreaTabProxiesTabPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = null;
    config_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesTabPanel.WORK_AREA_TAB_PROXIES_TABBAR_ID);
    config_$1.flex = 1.0;
    var local_WorkAreaTabBar_29_5_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar,{});
    local_WorkAreaTabBar_29_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA.getSkin());
    local_WorkAreaTabBar_29_5_$1.flex = 1.0;
    var ui_BindVisibilityPlugin_32_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_32_9_$1.bindTo = this.getTabBarVisibilityVE();
    local_WorkAreaTabBar_29_5_$1.plugins = [ui_BindVisibilityPlugin_32_9_$1];
    AS3.setBindable(config_$1,"tabBar" , local_WorkAreaTabBar_29_5_$1);
    var editor_TabStateManagerPlugin_38_5_$1/*: com.coremedia.cms.editor.sdk.desktop.TabStateManagerPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.TabStateManagerPlugin,{});
    var ui_DragDropTabPlugin_39_5_$1/*:com.coremedia.ui.plugins.DragDropTabPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DragDropTabPlugin,{});
    AS3.setBindable(ui_DragDropTabPlugin_39_5_$1,"customizeDragData" , com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase.customizeDragData);
    AS3.setBindable(ui_DragDropTabPlugin_39_5_$1,"rearrangeDDGroup" ,net.jangaroo.ext.Exml.asString( 'tabSortDD' + WorkAreaTabProxiesTabPanel.WORK_AREA_TAB_PROXIES_TABBAR_ID));
    AS3.setBindable(ui_DragDropTabPlugin_39_5_$1,"activateOnHoverDDGroups" , com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DD_GROUPS);
    AS3.setBindable(ui_DragDropTabPlugin_39_5_$1,"activateOnHoverDelay" , com.coremedia.cms.editor.sdk.util.UIBehaviour.ACTIVATE_ON_HOVER_DELAY);
    var ui_TabContextMenuPlugin_43_5_$1/*:com.coremedia.ui.plugins.TabContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.TabContextMenuPlugin,{});
    var reusability_WorkAreaTabProxiesContextMenu_45_9_$1/*: com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu,{});
    AS3.setBindable(ui_TabContextMenuPlugin_43_5_$1,"contextMenu" , reusability_WorkAreaTabProxiesContextMenu_45_9_$1);
    config_$1.plugins = [editor_TabStateManagerPlugin_38_5_$1, ui_DragDropTabPlugin_39_5_$1, ui_TabContextMenuPlugin_43_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mtdb(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase",
      alias: "widget.com.coremedia.cms.editor.sdk.desktop.workAreaTabProxiesTabPanel",
      constructor: WorkAreaTabProxiesTabPanel$,
      super$mtdb: function() {
        com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {WORK_AREA_TAB_PROXIES_TABBAR_ID: "workAreaTabProxies"},
      requires: [
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesTabPanelBase",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.DragDropTabPlugin",
        "com.coremedia.ui.plugins.TabContextMenuPlugin",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.TabStateManagerPlugin",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu",
        "com.coremedia.cms.editor.sdk.util.UIBehaviour"
      ]
    };
});
