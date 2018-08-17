Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditor", function(ProjectsTodosWidgetEditor) {/*package com.coremedia.cms.editor.controlroom.project.widget{
import com.coremedia.cms.editor.controlroom.project.widget.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.components.BoundRadioGroup;
import ext.form.field.Radio;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidgetEditor extends ProjectsTodosWidgetEditorBase{

    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectsTodosWidgetEditor";

    public static const PROJECT_FILTER_ITEM_ID:String = "projectFilter";

    public static const OPEN_TODO_FILTER_ITEM_ID:String = "openTodoFilter";

    public*/function ProjectsTodosWidgetEditor$(config/*:ProjectsTodosWidgetEditor = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase,{});
    var defaults_$1/*:ProjectsTodosWidgetEditor*/ =AS3.cast(ProjectsTodosWidgetEditor,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"properties" , "assignedToUser,projectId");
    var ui_LocalComboBox_27_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    AS3.setBindable(ui_LocalComboBox_27_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_project_label')));
    ui_LocalComboBox_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetEditor.PROJECT_FILTER_ITEM_ID);
    AS3.setBindable(ui_LocalComboBox_27_5_$1,"displayField" , "value");
    ui_LocalComboBox_27_5_$1.valueField = "id";
    ui_LocalComboBox_27_5_$1.anchor = "100%";
    AS3.setBindable(ui_LocalComboBox_27_5_$1,"encodeItems" , true);
    var ui_BindListPlugin_35_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    AS3.setBindable(ui_BindListPlugin_35_9_$1,"bindTo" , this.getProjectsOfUserValueExpression());
    var data_AutoField_37_13_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_37_13_$1.name = "id";
    data_AutoField_37_13_$1.mapping = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.ID;
    var ui_DataField_39_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_39_13_$1.name = "value";
    ui_DataField_39_13_$1.mapping = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.NAME;
    ui_DataField_39_13_$1.defaultValue = "";
    ui_DataField_39_13_$1.encode = false;
    AS3.setBindable(ui_BindListPlugin_35_9_$1,"fields" , [data_AutoField_37_13_$1, ui_DataField_39_13_$1]);
    var ui_BindPropertyPlugin_45_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_45_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_45_9_$1.componentEvent = "change";
    ui_BindPropertyPlugin_45_9_$1.ifUndefined = "";
    ui_BindPropertyPlugin_45_9_$1.bindTo = this.getSelectedProjectExpression();
    ui_LocalComboBox_27_5_$1.plugins = [ui_BindListPlugin_35_9_$1, ui_BindPropertyPlugin_45_9_$1];
    ui_LocalComboBox_27_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var ui_BoundRadioGroup_52_5_$1/*:com.coremedia.ui.components.BoundRadioGroup*/ =AS3.cast(com.coremedia.ui.components.BoundRadioGroup,{});
    AS3.setBindable(ui_BoundRadioGroup_52_5_$1,"fieldLabel" , "");
    ui_BoundRadioGroup_52_5_$1.hideEmptyLabel = false;
    ui_BoundRadioGroup_52_5_$1.labelWidth = 90.0;
    ui_BoundRadioGroup_52_5_$1.columns = 1;
    ui_BoundRadioGroup_52_5_$1.toValue = com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase.transformAssignedUser;
    ui_BoundRadioGroup_52_5_$1.defaultValue = com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase.MY_PROJECTS;
    ui_BoundRadioGroup_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectsTodosWidgetEditor.OPEN_TODO_FILTER_ITEM_ID);
    AS3.setBindable(ui_BoundRadioGroup_52_5_$1,"bindTo" , this.getAssignedToUserExpression());
    var radio_61_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_61_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase.MY_PROJECTS);
    AS3.setBindable(radio_61_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom','Projects_Todos_Widget_show_my_open_todos')));
    var radio_63_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    radio_63_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase.ALL_PROJECTS);
    AS3.setBindable(radio_63_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom','Projects_Todos_Widget_show_all_open_todos')));
    ui_BoundRadioGroup_52_5_$1.items = [radio_61_9_$1, radio_63_9_$1];
    config_$1.items = [ui_LocalComboBox_27_5_$1, ui_BoundRadioGroup_52_5_$1];
    var layout_Anchor_69_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_69_5_$1);
    var object_72_5_$1/*:Object*/ = {};
    object_72_5_$1.assignedToUser = true;
    AS3.setBindable(config_$1,"propertyDefaults" , object_72_5_$1);
    var ui_VerticalSpacingPlugin_75_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_75_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1UUh(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectsTodosWidgetEditor",
      constructor: ProjectsTodosWidgetEditor$,
      super$1UUh: function() {
        com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PROJECT_FILTER_ITEM_ID: "projectFilter",
        OPEN_TODO_FILTER_ITEM_ID: "openTodoFilter"
      },
      requires: [
        "Ext.data.field.Field",
        "Ext.form.field.Radio",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditorBase",
        "com.coremedia.ui.components.BoundRadioGroup",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"]
    };
});
