Ext.define("com.coremedia.cms.editor.sdk.desktop.WorkArea", function(WorkArea) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.dashboard.Dashboard;
import ext.panel.Panel;
[PublicApi]
/**
 The work area is the center part of the Studio main view. It is a ext.TabPanel.
 * /
public class WorkArea extends WorkAreaBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.workArea";

    /**
     * Event that is fired for a tab after reuse.
     * /
    public static const BEFORE_TAB_REUSE_EVENT:String = "beforeTabReuseEvent";

    /**
     * Event that is fired after for a after reuse.
     *
     * Note that this event is fired as a callback of AsyncObserver.complete() after the tab is reused.
     * /
    public static const AFTER_TAB_REUSE_EVENT:String = "afterTabReuseEvent";

    /**
     * DEPRECATED: Use ACTIVE_CONTENT_VALUE_EXPRESSION instead
     * The property name of the application context that holds the currently active content.
     * /
    public static const ACTIVE_CONTENT_BEAN_NAME:String = "activeContent";

    /**
     * A value expression evaluating to the currently active content.
     * /
    public static const ACTIVE_CONTENT_VALUE_EXPRESSION:ValueExpression =*/function ACTIVE_CONTENT_VALUE_EXPRESSION$static_(){WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION=( com.coremedia.ui.data.ValueExpressionFactory.create(WorkArea.ACTIVE_CONTENT_BEAN_NAME));}/*;

    /**
     * A value expression evaluating to the currently active entity.
     * /
    public static const ACTIVE_ENTITY_VALUE_EXPRESSION:ValueExpression =*/function ACTIVE_ENTITY_VALUE_EXPRESSION$static_(){WorkArea.ACTIVE_ENTITY_VALUE_EXPRESSION=( com.coremedia.ui.data.ValueExpressionFactory.create('activeEntity'));}/*;

    /**
     * The itemId of the start tab.
     * /
    public static const START_TAB_ITEM_ID:String = "startTab";

    public*/function WorkArea$(config/*:WorkArea = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaBase,{});
    var defaults_$1/*:WorkArea*/ =AS3.cast(WorkArea,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["id"] = com.coremedia.cms.editor.sdk.desktop.WorkAreaBase.COMPONENT_ID;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'WorkArea_label'));
    AS3.setBindable(config_$1,"activeTab" , 0);
    var local_WorkAreaTabBar_60_5_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar,{});
    AS3.setBindable(local_WorkAreaTabBar_60_5_$1,"hidden" , true);
    AS3.setBindable(config_$1,"tabBar" , local_WorkAreaTabBar_60_5_$1);
    var editor_TabChangePlugin_63_5_$1/*: com.coremedia.cms.editor.sdk.desktop.TabChangePlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.TabChangePlugin,{});
    var editor_AriaMainRegionPlugin_64_5_$1/*: com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin,{});
    var editor_ContentTabManagerPlugin_65_5_$1/*: com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin,{});
    var editor_WorkAreaTabManagerPlugin_66_5_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPlugin,{});
    var editor_WorkAreaTabTypesPlugin_67_5_$1/*: com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin,{});
    AS3.setBindable(editor_WorkAreaTabTypesPlugin_67_5_$1,"defaultTabTypeId" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.StartTab.xtype));
    var editor_ComponentBasedWorkAreaTabType_69_9_$1/*: com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType,{});
    var editor_StartTab_71_13_$1/*: com.coremedia.cms.editor.sdk.desktop.StartTab*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.StartTab,{});
    editor_StartTab_71_13_$1.itemId =net.jangaroo.ext.Exml.asString( WorkArea.START_TAB_ITEM_ID);
    AS3.setBindable(editor_StartTab_71_13_$1,"closable" , false);
    AS3.setBindable(editor_ComponentBasedWorkAreaTabType_69_9_$1,"tabComponent" , editor_StartTab_71_13_$1);
    var editor_PremularWorkAreaTabType_75_9_$1/*: com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType,{});
    var editor_ComponentBasedWorkAreaTabType_76_9_$1/*: com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType,{});
    var editor_Dashboard_78_13_$1/*:com.coremedia.cms.editor.sdk.dashboard.Dashboard*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.Dashboard,{});
    AS3.setBindable(editor_Dashboard_78_13_$1,"closable" , false);
    AS3.setBindable(editor_ComponentBasedWorkAreaTabType_76_9_$1,"tabComponent" , editor_Dashboard_78_13_$1);
    AS3.setBindable(editor_WorkAreaTabTypesPlugin_67_5_$1,"tabTypes" , [new com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType(editor_ComponentBasedWorkAreaTabType_69_9_$1), new com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType(editor_PremularWorkAreaTabType_75_9_$1), new com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType(editor_ComponentBasedWorkAreaTabType_76_9_$1)]);
    config_$1.plugins = [editor_TabChangePlugin_63_5_$1, editor_AriaMainRegionPlugin_64_5_$1, editor_ContentTabManagerPlugin_65_5_$1, editor_WorkAreaTabManagerPlugin_66_5_$1, editor_WorkAreaTabTypesPlugin_67_5_$1];
    var panel_85_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    config_$1["defaultType"] = panel_85_5_$1['xtype'];
    delete panel_85_5_$1['xtype'];
    delete panel_85_5_$1['xclass'];
    config_$1.defaults = panel_85_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ng1g(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.workArea",
      constructor: WorkArea$,
      super$ng1g: function() {
        com.coremedia.cms.editor.sdk.desktop.WorkAreaBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        BEFORE_TAB_REUSE_EVENT: "beforeTabReuseEvent",
        AFTER_TAB_REUSE_EVENT: "afterTabReuseEvent",
        ACTIVE_CONTENT_BEAN_NAME: "activeContent",
        ACTIVE_CONTENT_VALUE_EXPRESSION: undefined,
        ACTIVE_ENTITY_VALUE_EXPRESSION: undefined,
        START_TAB_ITEM_ID: "startTab",
        __initStatics__: function() {
          ACTIVE_CONTENT_VALUE_EXPRESSION$static_();
          ACTIVE_ENTITY_VALUE_EXPRESSION$static_();
        }
      },
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard",
        "com.coremedia.cms.editor.sdk.desktop.AriaMainRegionPlugin",
        "com.coremedia.cms.editor.sdk.desktop.ComponentBasedWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.ContentTabManagerPlugin",
        "com.coremedia.cms.editor.sdk.desktop.PremularWorkAreaTabType",
        "com.coremedia.cms.editor.sdk.desktop.StartTab",
        "com.coremedia.cms.editor.sdk.desktop.TabChangePlugin",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabBar",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabManagerPlugin",
        "com.coremedia.cms.editor.sdk.desktop.WorkAreaTabTypesPlugin"
      ]
    };
});
