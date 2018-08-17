Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget", function(ProjectsTodosWidget) {/*package com.coremedia.cms.editor.controlroom.project.widget{
import com.coremedia.cms.editor.controlroom.project.widget.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.plugins.BEMMixin;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidget extends ProjectsTodosWidgetBase{

    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsTodosWidget";

    public static const PROJECT_LIST_ITEM_ID:String = "projectListItemId";

    public static const PROJECT_NO_OPEN_TODOS_ITEM_ID:String = "projectNoOpenToDosItemId";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){ProjectsTodosWidget.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-projects-todos-widget"));}/*;
    public static const ELEMENT_PROJECT:BEMElement =*/function ELEMENT_PROJECT$static_(){ProjectsTodosWidget.ELEMENT_PROJECT=( ProjectsTodosWidget.BLOCK.createElement("project"));}/*;
    public static const ELEMENT_EMPTY:BEMElement =*/function ELEMENT_EMPTY$static_(){ProjectsTodosWidget.ELEMENT_EMPTY=( ProjectsTodosWidget.BLOCK.createElement("empty"));}/*;

    public*/function ProjectsTodosWidget$(config/*:ProjectsTodosWidget = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase,{});
    var defaults_$1/*:ProjectsTodosWidget*/ =AS3.cast(ProjectsTodosWidget,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    AS3.setBindable(config_$1,"properties" , "assignedToUser,projectId");
    var container_34_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_34_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidget.PROJECT_LIST_ITEM_ID);
    var ui_BindComponentsPlugin_36_9_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"valueExpression" , this.getProjectsVE());
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"configBeanParameterName" , "project");
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"afterUpdateCallback" ,AS3.bind( this,"updateLayout"));
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"reuseComponents" , false);
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"clearBeforeUpdate" , true);
    var collab_ProjectsTodosWidgetProject_42_13_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProject*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProject,{});
    AS3.setBindable(collab_ProjectsTodosWidgetProject_42_13_$1,"userVE" , this.getUserVE());
    AS3.setBindable(collab_ProjectsTodosWidgetProject_42_13_$1,"afterUpdateCallback" ,AS3.bind( this,"updateLayout"));
    var ui_BEMMixin_45_17_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_45_17_$1,"bemElement" , ProjectsTodosWidget.ELEMENT_PROJECT);

    delete ui_BEMMixin_45_17_$1['xtype'];
    delete ui_BEMMixin_45_17_$1['xclass'];
    net.jangaroo.ext.Exml.apply(collab_ProjectsTodosWidgetProject_42_13_$1, ui_BEMMixin_45_17_$1);
    AS3.setBindable(ui_BindComponentsPlugin_36_9_$1,"template" , collab_ProjectsTodosWidgetProject_42_13_$1);
    container_34_5_$1.plugins = [ui_BindComponentsPlugin_36_9_$1];
    var displayField_52_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidget.PROJECT_NO_OPEN_TODOS_ITEM_ID);
    AS3.setBindable(displayField_52_5_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_noOpenTodos_text'));
    var ui_BindVisibilityPlugin_55_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_55_9_$1.bindTo = this.getProjectsVE();
    AS3.setBindable(ui_BindVisibilityPlugin_55_9_$1,"transformer" , com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase.transformProjects);
    displayField_52_5_$1.plugins = [ui_BindVisibilityPlugin_55_9_$1];
    var ui_BEMMixin_59_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_59_9_$1,"bemElement" , ProjectsTodosWidget.ELEMENT_EMPTY);

    delete ui_BEMMixin_59_9_$1['xtype'];
    delete ui_BEMMixin_59_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(displayField_52_5_$1, ui_BEMMixin_59_9_$1);
    config_$1.items = [container_34_5_$1, displayField_52_5_$1];
    var ui_BEMPlugin_64_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_64_5_$1,"block" , ProjectsTodosWidget.BLOCK);
    config_$1.plugins = [ui_BEMPlugin_64_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KaYU(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsTodosWidget",
      constructor: ProjectsTodosWidget$,
      super$KaYU: function() {
        com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROJECT_LIST_ITEM_ID: "projectListItemId",
        PROJECT_NO_OPEN_TODOS_ITEM_ID: "projectNoOpenToDosItemId",
        BLOCK: undefined,
        ELEMENT_PROJECT: undefined,
        ELEMENT_EMPTY: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_PROJECT$static_();
          ELEMENT_EMPTY$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetBase",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProject"]
    };
});
