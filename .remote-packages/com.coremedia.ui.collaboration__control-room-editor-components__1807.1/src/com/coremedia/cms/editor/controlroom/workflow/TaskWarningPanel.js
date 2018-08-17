Ext.define("com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanel", function(TaskWarningPanel) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.form.FieldContainer;
import com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class TaskWarningPanel extends TaskWarningPanelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.taskWarningPanel";

    public static const PROBLEM_DESCRIPTION_BUTTON_ITEM_ID:String = "problemDescriptionButton";

    public*/function TaskWarningPanel$(config/*:TaskWarningPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase,{});
    var defaults_$1/*:TaskWarningPanel*/ =AS3.cast(TaskWarningPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.header = false;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TaskWarningPanel_title'));
    config_$1.cls = "task-warning-panel";
    var ui_BindVisibilityPlugin_30_5_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_30_5_$1.bindTo = this.getWarningValueExpression(config);
    config_$1.plugins = [ui_BindVisibilityPlugin_30_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var fieldContainer_34_5_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_34_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'TaskWarningPanel_title')));
    var editor_ProblemDescriptionButton_37_9_$1/*:com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton,{});
    editor_ProblemDescriptionButton_37_9_$1.itemId =net.jangaroo.ext.Exml.asString( TaskWarningPanel.PROBLEM_DESCRIPTION_BUTTON_ITEM_ID);
    AS3.setBindable(editor_ProblemDescriptionButton_37_9_$1,"problemDescriptionValueExpression" , this.getWarningValueExpression(config));
    fieldContainer_34_5_$1.items = [editor_ProblemDescriptionButton_37_9_$1];
    config_$1.items = [fieldContainer_34_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wnuW(config_$1);
  }/*

    [Bindable]
    public var taskValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.taskWarningPanel",
      constructor: TaskWarningPanel$,
      super$wnuW: function() {
        com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {taskValueExpression: null},
      statics: {PROBLEM_DESCRIPTION_BUTTON_ITEM_ID: "problemDescriptionButton"},
      requires: [
        "Ext.form.FieldContainer",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase",
        "com.coremedia.cms.editor.sdk.workflow.ProblemDescriptionButton",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
