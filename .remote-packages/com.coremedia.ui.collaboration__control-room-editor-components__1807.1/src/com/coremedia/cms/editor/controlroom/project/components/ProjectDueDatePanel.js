Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel", function(ProjectDueDatePanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
import ext.form.FieldContainer;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.button.Button;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectDueDatePanel extends ProjectDueDatePanelBase{

    import com.coremedia.ui.skins.ButtonSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectDueDatePanel";

    public static const DUE_DATE_FIELD_ID:String = "projectDueDateField";

    public*/function ProjectDueDatePanel$(config/*:ProjectDueDatePanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase,{});
    var defaults_$1/*:ProjectDueDatePanel*/ =AS3.cast(ProjectDueDatePanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var fieldContainer_25_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_25_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_dueDate_title')));
    fieldContainer_25_5_$1.labelAlign = "top";
    fieldContainer_25_5_$1.labelSeparator = "";
    var ui_StatefulDateField_31_9_$1/*:com.coremedia.ui.components.StatefulDateField*/ =AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    ui_StatefulDateField_31_9_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectDueDatePanel.DUE_DATE_FIELD_ID);
    ui_StatefulDateField_31_9_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Date_property_field'));
    ui_StatefulDateField_31_9_$1.format =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateFormat'));
    ui_StatefulDateField_31_9_$1.enableKeyEvents = true;
    ui_StatefulDateField_31_9_$1.formatText = "";
    var ui_BindPropertyPlugin_37_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_37_13_$1.bindTo = this.getDueDateValueExpression(AS3.getBindable(config,"project"));
    ui_BindPropertyPlugin_37_13_$1.reverseTransformer = function (date/*:**/)/*:Date*/ {return AS3.as( date,  Date);};
    ui_BindPropertyPlugin_37_13_$1.bidirectional = true;
    var ui_BindPropertyPlugin_40_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_40_13_$1.bindTo = this.getEmptyTextValueExpression();
    ui_BindPropertyPlugin_40_13_$1.componentProperty = "emptyText";
    ui_StatefulDateField_31_9_$1.plugins = [ui_BindPropertyPlugin_37_13_$1, ui_BindPropertyPlugin_40_13_$1];
    var button_44_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_44_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    button_44_9_$1.itemId = "reset";
    AS3.setBindable(button_44_9_$1,"handler" ,AS3.bind( this,"resetDate"));
    AS3.setBindable(button_44_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'DateTimePropertyField_dateReset_text')));
    fieldContainer_25_5_$1.items = [ui_StatefulDateField_31_9_$1, button_44_9_$1];
    var layout_HBox_50_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(fieldContainer_25_5_$1,"layout" , layout_HBox_50_9_$1);
    config_$1.items = [fieldContainer_25_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1uXK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectDueDatePanel",
      constructor: ProjectDueDatePanel$,
      super$1uXK: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase.prototype.constructor.apply(this, arguments);
      },
      statics: {DUE_DATE_FIELD_ID: "projectDueDateField"},
      requires: [
        "Ext.button.Button",
        "Ext.form.FieldContainer",
        "Ext.layout.container.HBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanelBase",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
