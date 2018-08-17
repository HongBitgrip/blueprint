Ext.define("com.coremedia.cms.editor.sdk.dashboard.Dashboard", function(Dashboard) {/*package com.coremedia.cms.editor.sdk.dashboard{
import com.coremedia.cms.editor.sdk.dashboard.*;
import net.jangaroo.ext.Exml;
import ext.Component;
import ext.layout.container.ColumnLayout;
import ext.toolbar.Toolbar;
import ext.toolbar.Spacer;
import ext.toolbar.TextItem;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.plugins.DraggableItemsPlugin;

    [ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
/**
 A panel showing the configurable dashboard. The items are computed by
 the base class based on the configuration stored in the editor context
 and the last state of the dashboard as derived from the user's preferences.
 * /
public class Dashboard extends DashboardBase{

    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.dashboard";

    public static const ADD_WIDGET_BUTTON_ITEM_ID:String = "addWidgetButton";

    public static const LEFT_COLUMN_ITEM_ID:String = "left";

    public static const CENTER_COLUMN_ITEM_ID:String = "center";

    public static const RIGHT_COLUMN_ITEM_ID:String = "right";

    public static const FIRST_COLUMN_CSS_CLASS:String = "dashboard-first-column";

    public static const LAST_COLUMN_CSS_CLASS:String = "dashboard-last-column";

    public static const BORDER_WIDTH:uint = 54;

    public static const HORIZONTAL_WIDGET_DISTANCE:uint = 44;

    public*/function Dashboard$(config/*:Dashboard = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.dashboard.DashboardBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardBase,{});
    var defaults_$1/*:Dashboard*/ =AS3.cast(Dashboard,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'tab_title'));
    config_$1["ariaRole"] = "region";
    config_$1["focusable"] = true;
    AS3.setBindable(config_$1,"closable" , true);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.defaultFocus = ":focusable";
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CORPORATE_IDENTITY.getSkin());
    var box_55_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_55_5_$1,"width" , Dashboard.BORDER_WIDTH);
    AS3.setBindable(box_55_5_$1,"height" , 1);
    var editor_DashboardColumn_57_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.DashboardColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,{});
    editor_DashboardColumn_57_5_$1.itemId =net.jangaroo.ext.Exml.asString( Dashboard.LEFT_COLUMN_ITEM_ID);
    var box_58_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_58_5_$1,"width" , Dashboard.HORIZONTAL_WIDGET_DISTANCE);
    AS3.setBindable(box_58_5_$1,"height" , 1);
    var editor_DashboardColumn_60_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.DashboardColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,{});
    editor_DashboardColumn_60_5_$1.itemId =net.jangaroo.ext.Exml.asString( Dashboard.CENTER_COLUMN_ITEM_ID);
    var box_61_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_61_5_$1,"width" , Dashboard.HORIZONTAL_WIDGET_DISTANCE);
    AS3.setBindable(box_61_5_$1,"height" , 1);
    var editor_DashboardColumn_63_5_$1/*: com.coremedia.cms.editor.sdk.dashboard.DashboardColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,{});
    editor_DashboardColumn_63_5_$1.itemId =net.jangaroo.ext.Exml.asString( Dashboard.RIGHT_COLUMN_ITEM_ID);
    var box_64_5_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_64_5_$1,"width" , Dashboard.BORDER_WIDTH);
    AS3.setBindable(box_64_5_$1,"height" , 1);
    config_$1.items = [box_55_5_$1, editor_DashboardColumn_57_5_$1, box_58_5_$1, editor_DashboardColumn_60_5_$1, box_61_5_$1, editor_DashboardColumn_63_5_$1, box_64_5_$1];
    var layout_Column_68_5_$1/*:ext.layout.container.ColumnLayout*/ =AS3.cast(Ext.layout.container.Column,{});
    AS3.setBindable(config_$1,"layout" , layout_Column_68_5_$1);
    var toolbar_71_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_71_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    var tbSpacer_73_9_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_73_9_$1,"width" , 12);
    var tbText_74_9_$1/*:ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    tbText_74_9_$1.flex = 1.0;
    AS3.setBindable(tbText_74_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'tab_title')));
    tbText_74_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    var ui_IconButton_77_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_77_9_$1.itemId =net.jangaroo.ext.Exml.asString( Dashboard.ADD_WIDGET_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_77_9_$1,"scale" , "medium");
    ui_IconButton_77_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconButton_77_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'header_addWidget_tooltip')));
    AS3.setBindable(ui_IconButton_77_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'header_addWidget_tooltip'));
    AS3.setBindable(ui_IconButton_77_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'header_addWidget_icon')));
    AS3.setBindable(ui_IconButton_77_9_$1,"handler" ,AS3.bind( this,"addWidgetManually"));
    AS3.setBindable(ui_IconButton_77_9_$1,"hidden" , com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration().getManuallyCreatableTypes().length === 0);
    toolbar_71_5_$1.items = [tbSpacer_73_9_$1, tbText_74_9_$1, ui_IconButton_77_9_$1];
    config_$1.tbar = toolbar_71_5_$1;
    var ui_DraggableItemsPlugin_90_5_$1/*:com.coremedia.ui.plugins.DraggableItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.DraggableItemsPlugin,{});
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"ddGroup" , "dashboardDDGroup");
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"dropHandler" , com.coremedia.cms.editor.sdk.dashboard.DashboardBase.onWidgetDrop);
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"hideGhostWrapper" , true);
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"itemSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_WRAPPER_BLOCK.getCSSSelector()));
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"handleSelector" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_ELEMENT_TOOLBAR.getCSSSelector()));
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"ghostBuilder" , this.getWidgetDragGhostBuilder());
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"targetPlaceholderBuilder" , this.getWidgetTargetPlaceholderBuilder());
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"sourcePlaceholderBuilder" , this.getWidgetSourcePlaceholderBuilder());
    AS3.setBindable(ui_DraggableItemsPlugin_90_5_$1,"fallbackDropContainerFinder" ,AS3.bind( this,"columnFromEventFinder"));
    config_$1.plugins = [ui_DraggableItemsPlugin_90_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8TNW(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.DashboardBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.dashboard",
      constructor: Dashboard$,
      super$8TNW: function() {
        com.coremedia.cms.editor.sdk.dashboard.DashboardBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ADD_WIDGET_BUTTON_ITEM_ID: "addWidgetButton",
        LEFT_COLUMN_ITEM_ID: "left",
        CENTER_COLUMN_ITEM_ID: "center",
        RIGHT_COLUMN_ITEM_ID: "right",
        FIRST_COLUMN_CSS_CLASS: "dashboard-first-column",
        LAST_COLUMN_CSS_CLASS: "dashboard-last-column",
        BORDER_WIDTH: 54,
        HORIZONTAL_WIDGET_DISTANCE: 44
      },
      requires: [
        "Ext.Component",
        "Ext.layout.container.Column",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.TextItem",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.dashboard.DashboardBase",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.DraggableItemsPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.DashboardColumn",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
