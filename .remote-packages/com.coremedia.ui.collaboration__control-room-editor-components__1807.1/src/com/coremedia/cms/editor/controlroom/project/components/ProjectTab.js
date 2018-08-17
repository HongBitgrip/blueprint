Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectTab", function(ProjectTab) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.toolbar.Toolbar;
import ext.toolbar.TextItem;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectTab extends ProjectTabBase{

    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectTab";

    public static const CONTENT_VIEW_ID:String = "projectContentView";

    public static const TODOS_PANEL_ID:String = "projectTodosPanel";

    public static const GOALS_PANEL_ID:String = "projectGoalsPanel";

    public static const USERS_PANEL_ID:String = "projectUsersPanel";

    public static const CALENDAR_PANEL_ID:String = "projectCalendarPanel";
    private var computedProject:Project;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ProjectTab*/)/*:void*/ {
      this.computedProject$V59Z = AS3.getBindable(config,"project") || (AS3.as(AS3.getBindable(config,"entity","DUMMY"),  com.coremedia.cms.editor.controlroom.project.rest.Project));
    }/*

    public*/function ProjectTab$(config/*:ProjectTab = null*/){if(arguments.length<=0)config=null;this.__initialize__$V59Z(config);
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase,{});
    var defaults_$1/*:ProjectTab*/ =AS3.cast(ProjectTab,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DARK_200.getSkin());
    config_$1.bodyCls = "cm-project-tab-body";
    var container_45_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_45_5_$1.flex = 1.0;
    var ui_VerticalSpacingPlugin_47_9_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_47_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_45_5_$1.plugins = [ui_VerticalSpacingPlugin_47_9_$1];
    var collab_ProjectContentsPanel_50_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanel,{});
    collab_ProjectContentsPanel_50_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTab.CONTENT_VIEW_ID);
    AS3.setBindable(collab_ProjectContentsPanel_50_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_content_title'));
    AS3.setBindable(collab_ProjectContentsPanel_50_9_$1,"project" , this.computedProject$V59Z);
    var collab_ProjectTodosPanel_54_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel,{});
    collab_ProjectTodosPanel_54_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTab.TODOS_PANEL_ID);
    AS3.setBindable(collab_ProjectTodosPanel_54_9_$1,"project" , this.computedProject$V59Z);
    AS3.setBindable(collab_ProjectTodosPanel_54_9_$1,"selectedDateVE" , this.getSelectedDateVE());
    container_45_5_$1.items = [collab_ProjectContentsPanel_50_9_$1, collab_ProjectTodosPanel_54_9_$1];
    var container_59_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_59_5_$1,"width" , 380);
    var ui_VerticalSpacingPlugin_61_9_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_61_9_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    container_59_5_$1.plugins = [ui_VerticalSpacingPlugin_61_9_$1];
    var collab_ProjectGoalsPanel_64_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectGoalsPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectGoalsPanel,{});
    collab_ProjectGoalsPanel_64_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTab.GOALS_PANEL_ID);
    AS3.setBindable(collab_ProjectGoalsPanel_64_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_goals_title'));
    AS3.setBindable(collab_ProjectGoalsPanel_64_9_$1,"project" , this.computedProject$V59Z);
    var collab_ProjectMembersPanel_67_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanel,{});
    collab_ProjectMembersPanel_67_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTab.USERS_PANEL_ID);
    AS3.setBindable(collab_ProjectMembersPanel_67_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_users_title'));
    AS3.setBindable(collab_ProjectMembersPanel_67_9_$1,"project" , this.computedProject$V59Z);
    var collab_ProjectCalendarPanel_70_9_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel,{});
    collab_ProjectCalendarPanel_70_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectTab.CALENDAR_PANEL_ID);
    AS3.setBindable(collab_ProjectCalendarPanel_70_9_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_calendar_title'));
    AS3.setBindable(collab_ProjectCalendarPanel_70_9_$1,"project" , this.computedProject$V59Z);
    AS3.setBindable(collab_ProjectCalendarPanel_70_9_$1,"selectedDateVE" , this.getSelectedDateVE());
    container_59_5_$1.items = [collab_ProjectGoalsPanel_64_9_$1, collab_ProjectMembersPanel_67_9_$1, collab_ProjectCalendarPanel_70_9_$1];
    config_$1.items = [container_45_5_$1, container_59_5_$1];
    var layout_HBox_78_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_78_5_$1,"align" , "stretchmax");
    AS3.setBindable(config_$1,"layout" , layout_HBox_78_5_$1);
    var toolbar_81_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_81_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.WORKAREA.getSkin());
    var tbText_83_9_$1/*:ext.toolbar.TextItem*/ =AS3.cast(Ext.toolbar.TextItem,{});
    AS3.setBindable(tbText_83_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_toolbar_project')));
    tbText_83_9_$1.ui = "workarea";
    toolbar_81_5_$1.items = [tbText_83_9_$1];
    config_$1.tbar = toolbar_81_5_$1;
    var ui_HorizontalSpacingPlugin_89_5_$1/*: com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_89_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_HorizontalSpacingPlugin_89_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$V59Z(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectTab",
      computedProject$V59Z: null,
      __initialize__$V59Z: __initialize__,
      constructor: ProjectTab$,
      super$V59Z: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTENT_VIEW_ID: "projectContentView",
        TODOS_PANEL_ID: "projectTodosPanel",
        GOALS_PANEL_ID: "projectGoalsPanel",
        USERS_PANEL_ID: "projectUsersPanel",
        CALENDAR_PANEL_ID: "projectCalendarPanel"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.HBox",
        "Ext.toolbar.TextItem",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectTabBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectCalendarPanel",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanel",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectGoalsPanel",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectMembersPanel",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectTodosPanel",
        "com.coremedia.cms.editor.controlroom.project.rest.Project"
      ]
    };
});
