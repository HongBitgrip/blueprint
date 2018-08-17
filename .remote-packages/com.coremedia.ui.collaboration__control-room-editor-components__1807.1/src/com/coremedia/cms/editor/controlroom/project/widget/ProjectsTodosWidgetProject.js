Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProject", function(ProjectsTodosWidgetProject) {/*package com.coremedia.cms.editor.controlroom.project.widget{
import com.coremedia.cms.editor.controlroom.project.widget.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import com.coremedia.ui.plugins.BEMMixin;
import ext.button.Button;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.view.DataView;
import com.coremedia.ui.plugins.BindListPlugin;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BEMPlugin;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ProjectsTodosWidgetProject extends ProjectsTodosWidgetProjectBase{

    import com.coremedia.cms.editor.todo.model.TodoPropertyNames;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.XTemplate;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsTodosWidgetProject";

    public static const PROJECT_NAME_ITEM_ID:String = "projectNameItemId";

    public static const PROJECT_DUE_DATE_ITEM_ID:String = "projectDueDateItemId";

    public static const TODO_LIST_ITEM_ID:String = "todoListItemId";

    public static const PROJECT_BLOCK:BEMBlock =*/function PROJECT_BLOCK$static_(){ProjectsTodosWidgetProject.PROJECT_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-projects-todos-widget-project"));}/*;
    public static const PROJECT_ELEMENT_HEADER:BEMElement =*/function PROJECT_ELEMENT_HEADER$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_HEADER=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("header"));}/*;
    public static const PROJECT_ELEMENT_ICON:BEMElement =*/function PROJECT_ELEMENT_ICON$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_ICON=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("icon"));}/*;
    public static const PROJECT_ELEMENT_NAME:BEMElement =*/function PROJECT_ELEMENT_NAME$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_NAME=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("name"));}/*;
    public static const PROJECT_ELEMENT_DUE_DATE:BEMElement =*/function PROJECT_ELEMENT_DUE_DATE$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_DUE_DATE=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("due-date"));}/*;
    public static const PROJECT_ELEMENT_TODOS:BEMElement =*/function PROJECT_ELEMENT_TODOS$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_TODOS=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("todos"));}/*;
    public static const PROJECT_ELEMENT_TODO:BEMElement =*/function PROJECT_ELEMENT_TODO$static_(){ProjectsTodosWidgetProject.PROJECT_ELEMENT_TODO=( ProjectsTodosWidgetProject.PROJECT_BLOCK.createElement("todo"));}/*;

    public static const TODO_BLOCK:BEMBlock =*/function TODO_BLOCK$static_(){ProjectsTodosWidgetProject.TODO_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-projects-todos-widget-todo"));}/*;
    public static const TODO_ELEMENT_DESCRIPTION:BEMElement =*/function TODO_ELEMENT_DESCRIPTION$static_(){ProjectsTodosWidgetProject.TODO_ELEMENT_DESCRIPTION=( ProjectsTodosWidgetProject.TODO_BLOCK.createElement("description"));}/*;
    public static const TODO_ELEMENT_ASSIGNEES:BEMElement =*/function TODO_ELEMENT_ASSIGNEES$static_(){ProjectsTodosWidgetProject.TODO_ELEMENT_ASSIGNEES=( ProjectsTodosWidgetProject.TODO_BLOCK.createElement("assignees"));}/*;

    public*/function ProjectsTodosWidgetProject$(config/*:ProjectsTodosWidgetProject = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase,{});
    var defaults_$1/*:ProjectsTodosWidgetProject*/ =AS3.cast(ProjectsTodosWidgetProject,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var container_54_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_54_5_$1,"layout" , "column");
    var ui_BEMMixin_56_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_56_9_$1,"bemElement" , ProjectsTodosWidgetProject.PROJECT_ELEMENT_HEADER);

    delete ui_BEMMixin_56_9_$1['xtype'];
    delete ui_BEMMixin_56_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_54_5_$1, ui_BEMMixin_56_9_$1);
    var button_59_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_59_9_$1,"scale" , "small");
    button_59_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_59_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'project')));
    AS3.setBindable(button_59_9_$1,"handler" ,AS3.bind( this,"delayedOpenProjectTab"));
    var ui_BEMMixin_64_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_64_13_$1,"bemElement" , ProjectsTodosWidgetProject.PROJECT_ELEMENT_ICON);

    delete ui_BEMMixin_64_13_$1['xtype'];
    delete ui_BEMMixin_64_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_59_9_$1, ui_BEMMixin_64_13_$1);
    var displayField_67_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_67_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetProject.PROJECT_NAME_ITEM_ID);
    displayField_67_9_$1["columnWidth"] = 1.0;
    var ui_BindPropertyPlugin_70_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_70_13_$1.bindTo = this.getProjectNameVE();
    ui_BindPropertyPlugin_70_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_70_13_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    displayField_67_9_$1.plugins = [ui_BindPropertyPlugin_70_13_$1];
    var ui_BEMMixin_75_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_75_13_$1,"bemElement" , ProjectsTodosWidgetProject.PROJECT_ELEMENT_NAME);

    delete ui_BEMMixin_75_13_$1['xtype'];
    delete ui_BEMMixin_75_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(displayField_67_9_$1, ui_BEMMixin_75_13_$1);
    var ui_IconDisplayField_78_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_78_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetProject.PROJECT_DUE_DATE_ITEM_ID);
    AS3.setBindable(ui_IconDisplayField_78_9_$1,"width" , 80);
    var ui_BindPropertyPlugin_81_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_81_13_$1.bindTo = this.getProjectDueDateVE();
    ui_BindPropertyPlugin_81_13_$1.componentProperty = "value";
    var ui_BindVisibilityPlugin_83_13_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_83_13_$1.bindTo = this.getProjectDueDateVE();
    AS3.setBindable(ui_BindVisibilityPlugin_83_13_$1,"transformer" , function (value/*:Date*/)/*:Boolean*/ { return value; });
    var ui_BindPropertyPlugin_85_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_85_13_$1.componentProperty = "validationState";
    ui_BindPropertyPlugin_85_13_$1.bindTo = this.getProjectDueDateValidationStateVE();
    ui_IconDisplayField_78_9_$1.plugins = [ui_BindPropertyPlugin_81_13_$1, ui_BindVisibilityPlugin_83_13_$1, ui_BindPropertyPlugin_85_13_$1];
    var ui_BEMMixin_89_13_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_89_13_$1,"bemElement" , ProjectsTodosWidgetProject.PROJECT_ELEMENT_DUE_DATE);

    delete ui_BEMMixin_89_13_$1['xtype'];
    delete ui_BEMMixin_89_13_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_IconDisplayField_78_9_$1, ui_BEMMixin_89_13_$1);
    container_54_5_$1.items = [button_59_9_$1, displayField_67_9_$1, ui_IconDisplayField_78_9_$1];
    var dataView_94_5_$1/*:ext.view.DataView*/ =AS3.cast(Ext.view.View,{});
    dataView_94_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetProject.TODO_LIST_ITEM_ID);
    dataView_94_5_$1.itemSelector =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetProject.PROJECT_ELEMENT_TODO.getCSSSelector());
    AS3.setBindable(dataView_94_5_$1,"listeners" , {'itemclick':AS3.bind(this,"delayedOpenProjectTab")});
    var ui_BindListPlugin_98_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_98_9_$1,"bindTo" , this.getTodoListVE());
    var ui_DataField_100_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_100_13_$1.name = "id";
    ui_DataField_100_13_$1.mapping = com.coremedia.cms.editor.todo.model.TodoPropertyNames.ID;
    var ui_DataField_102_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_102_13_$1.name = "description";
    ui_DataField_102_13_$1.mapping = com.coremedia.cms.editor.todo.model.TodoPropertyNames.DESCRIPTION;
    ui_DataField_102_13_$1["convert"] = com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase.getFirstLine;
    var ui_DataField_106_13_$1/*: com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_106_13_$1.name = "assignees";
    ui_DataField_106_13_$1.mapping = com.coremedia.cms.editor.todo.model.TodoPropertyNames.ID;
    ui_DataField_106_13_$1["convert"] =AS3.bind( this,"getAssigneesInfo");
    AS3.setBindable(ui_BindListPlugin_98_9_$1,"fields" , [ui_DataField_100_13_$1, ui_DataField_102_13_$1, ui_DataField_106_13_$1]);
    dataView_94_5_$1.plugins = [ui_BindListPlugin_98_9_$1];
    var ui_BEMMixin_113_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_113_9_$1,"bemElement" , ProjectsTodosWidgetProject.PROJECT_ELEMENT_TODOS);

    delete ui_BEMMixin_113_9_$1['xtype'];
    delete ui_BEMMixin_113_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(dataView_94_5_$1, ui_BEMMixin_113_9_$1);
    dataView_94_5_$1.tpl = 


        new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="' + ProjectsTodosWidgetProject.PROJECT_ELEMENT_TODO + ' ' + ProjectsTodosWidgetProject.TODO_BLOCK + '">',
        '<p class="' + ProjectsTodosWidgetProject.TODO_ELEMENT_DESCRIPTION + '">{description}' +
        '<tpl if="assignees"><span class="' + ProjectsTodosWidgetProject.TODO_ELEMENT_ASSIGNEES + '">{assignees}</span></tpl>' +
        '</p>',
        '</div>',
        '</tpl>'
        );
    config_$1.items = [container_54_5_$1, dataView_94_5_$1];
    var ui_BEMPlugin_133_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_133_5_$1,"block" , ProjectsTodosWidgetProject.PROJECT_BLOCK);
    config_$1.plugins = [ui_BEMPlugin_133_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$pqoR(config_$1);
  }/*

    [Bindable]
    public var userVE:ValueExpression;

    [Bindable]
    public var afterUpdateCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsTodosWidgetProject",
      constructor: ProjectsTodosWidgetProject$,
      super$pqoR: function() {
        com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        userVE: null,
        afterUpdateCallback: null
      },
      statics: {
        PROJECT_NAME_ITEM_ID: "projectNameItemId",
        PROJECT_DUE_DATE_ITEM_ID: "projectDueDateItemId",
        TODO_LIST_ITEM_ID: "todoListItemId",
        PROJECT_BLOCK: undefined,
        PROJECT_ELEMENT_HEADER: undefined,
        PROJECT_ELEMENT_ICON: undefined,
        PROJECT_ELEMENT_NAME: undefined,
        PROJECT_ELEMENT_DUE_DATE: undefined,
        PROJECT_ELEMENT_TODOS: undefined,
        PROJECT_ELEMENT_TODO: undefined,
        TODO_BLOCK: undefined,
        TODO_ELEMENT_DESCRIPTION: undefined,
        TODO_ELEMENT_ASSIGNEES: undefined,
        __initStatics__: function() {
          PROJECT_BLOCK$static_();
          PROJECT_ELEMENT_HEADER$static_();
          PROJECT_ELEMENT_ICON$static_();
          PROJECT_ELEMENT_NAME$static_();
          PROJECT_ELEMENT_DUE_DATE$static_();
          PROJECT_ELEMENT_TODOS$static_();
          PROJECT_ELEMENT_TODO$static_();
          TODO_BLOCK$static_();
          TODO_ELEMENT_DESCRIPTION$static_();
          TODO_ELEMENT_ASSIGNEES$static_();
        }
      },
      requires: [
        "Ext.XTemplate",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.view.View",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetProjectBase",
        "com.coremedia.cms.editor.todo.model.TodoPropertyNames",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.store.DataField",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ]
    };
});
