Ext.define("com.coremedia.cms.editor.controlroom.ProjectsPanel", function(ProjectsPanel) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.cms.editor.controlroom.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import com.coremedia.ui.plugins.BindSelectionPlugin;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import ext.form.field.TextField;
import ext.view.TableView;
import ext.grid.plugin.GridViewDragDropPlugin;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProjectsPanel extends ProjectsPanelBase{

    import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;
    import com.coremedia.ui.skins.TableViewSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsPanel";

    public static const NAME_COLUMN_ID:String = "name";

    public*/function ProjectsPanel$(config/*:ProjectsPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.ProjectsPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ProjectsPanelBase,{});
    var defaults_$1/*:ProjectsPanel*/ =AS3.cast(ProjectsPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"ddGroup" , "projectDDGroup");
    AS3.setBindable(config_$1,"hideHeaders" , true);
    var ui_BindListPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_30_5_$1,"bindTo" , this.getProjectsVE());
    var ui_DataField_32_9_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_32_9_$1.name =net.jangaroo.ext.Exml.asString( ProjectsPanel.NAME_COLUMN_ID);
    ui_DataField_32_9_$1.mapping = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.NAME;
    AS3.setBindable(ui_BindListPlugin_30_5_$1,"fields" , [ui_DataField_32_9_$1]);
    var ui_ContextMenuPlugin_36_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var collab_ProjectsPanelContextMenu_38_9_$1/*: com.coremedia.cms.editor.controlroom.ProjectsPanelContextMenu*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ProjectsPanelContextMenu,{});
    AS3.setBindable(collab_ProjectsPanelContextMenu_38_9_$1,"selectedProjectsVE" , this.getSelectedProjectsVE());
    AS3.setBindable(collab_ProjectsPanelContextMenu_38_9_$1,"selectedContentsVE" , this.getSelectedContentsVE());
    AS3.setBindable(collab_ProjectsPanelContextMenu_38_9_$1,"workflowNameVE" , this.getWorkflowNameVE());
    AS3.setBindable(ui_ContextMenuPlugin_36_5_$1,"contextMenu" , collab_ProjectsPanelContextMenu_38_9_$1);
    var ui_BindSelectionPlugin_43_5_$1/*:com.coremedia.ui.plugins.BindSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindSelectionPlugin,{});
    AS3.setBindable(ui_BindSelectionPlugin_43_5_$1,"selectedValues" , this.getSelectedProjectsVE());
    config_$1.plugins = [ui_BindListPlugin_30_5_$1, ui_ContextMenuPlugin_36_5_$1, ui_BindSelectionPlugin_43_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var collab_ProjectsPanelToolbar_46_5_$1/*: com.coremedia.cms.editor.controlroom.ProjectsPanelToolbar*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ProjectsPanelToolbar,{});
    AS3.setBindable(collab_ProjectsPanelToolbar_46_5_$1,"selectedProjectsVE" , this.getSelectedProjectsVE());
    AS3.setBindable(collab_ProjectsPanelToolbar_46_5_$1,"selectedContentsVE" , this.getSelectedContentsVE());
    AS3.setBindable(collab_ProjectsPanelToolbar_46_5_$1,"workflowNameVE" , this.getWorkflowNameVE());
    AS3.setBindable(collab_ProjectsPanelToolbar_46_5_$1,"afterCreateHandler" , com.coremedia.cms.editor.controlroom.project.ProjectHelper.renameProjectInMyProjects);
    config_$1.tbar = collab_ProjectsPanelToolbar_46_5_$1;
    var local_ProjectIconColumn_52_5_$1/*: com.coremedia.cms.editor.controlroom.ProjectIconColumn*/ =AS3.cast(com.coremedia.cms.editor.controlroom.ProjectIconColumn,{});
    var editor_NameColumn_53_5_$1/*:com.coremedia.cms.editor.sdk.columns.grid.NameColumn*/ =AS3.cast(com.coremedia.cms.editor.sdk.columns.grid.NameColumn,{});
    editor_NameColumn_53_5_$1.flex = 1.0;
    var textField_55_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_55_9_$1.selectOnFocus = true;
    textField_55_9_$1.allowBlank = false;
    textField_55_9_$1.allowOnlyWhitespace = false;
    AS3.setBindable(editor_NameColumn_53_5_$1,"editor" , textField_55_9_$1);
    config_$1.columns = [local_ProjectIconColumn_52_5_$1, editor_NameColumn_53_5_$1];
    var gridView_63_5_$1/*:ext.view.TableView*/ =AS3.cast(Ext.view.Table,{});
    gridView_63_5_$1.stripeRows = true;
    gridView_63_5_$1.trackOver = true;
    gridView_63_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TableViewSkin.LIGHT.getSkin());
    var plugin_GridViewDragDrop_67_9_$1/*:ext.grid.plugin.GridViewDragDropPlugin*/ =AS3.cast(Ext.grid.plugin.DragDrop,{});
    plugin_GridViewDragDrop_67_9_$1.ddGroup = "ContentLinkDD";
    plugin_GridViewDragDrop_67_9_$1.pluginId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.ProjectsPanelBase.DRAG_DROP_PLUGIN_ID);
    plugin_GridViewDragDrop_67_9_$1.enableDrop = false;
    gridView_63_5_$1.plugins = [plugin_GridViewDragDrop_67_9_$1];
    config_$1["viewConfig"] = gridView_63_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KVLE(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.ProjectsPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsPanel",
      constructor: ProjectsPanel$,
      super$KVLE: function() {
        com.coremedia.cms.editor.controlroom.ProjectsPanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {NAME_COLUMN_ID: "name"},
      requires: [
        "Ext.form.field.Text",
        "Ext.grid.plugin.DragDrop",
        "Ext.view.Table",
        "com.coremedia.cms.editor.controlroom.ProjectsPanelBase",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindSelectionPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.TableViewSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.ProjectIconColumn",
        "com.coremedia.cms.editor.controlroom.ProjectsPanelContextMenu",
        "com.coremedia.cms.editor.controlroom.ProjectsPanelToolbar",
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"
      ]
    };
});
