Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowForm", function(WorkflowForm) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.cms.editor.controlroom.workflow.*;
import net.jangaroo.ext.Exml;
import ext.form.field.BaseField;
import com.coremedia.cms.editor.sdk.premular.PropertyField;
import ext.layout.container.AnchorLayout;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
[PublicApi]
/**
 A base component that may be subclassed for providing custom forms for
 showing tasks and processes in the control room.
 A process or a task's containing process to be displayed
 is provided to instances of this class using a value expression
 passed to the form in the bindTo config option. If a task is displayed,
 it is passed using the bindToTask config option.
 The control room framework may pass some additional items to
 the form using the prefixItems config option. Such items are added to
 the list of items while a workflow form is instantiated.
 Using component defaults, the config options
 bindTo, bindToTask, and  forceReadOnlyValueExpression are forwarded
 to nested items of a workflow form.
 Workflow forms are registered with the Studio using the addWorkflowPlugin
 or one of its subclasses.

 @see com.coremedia.cms.editor.controlroom.config.addWorkflowPlugin
 * /
public class WorkflowForm extends WorkflowFormBase{

    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ContainerSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowForm";

    public*/function WorkflowForm$(config/*:WorkflowForm = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase,{});
    var defaults_$1/*:WorkflowForm*/ =AS3.cast(WorkflowForm,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.DARK_200.getSkin());
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.padding = "12px";
    var field_77_5_$1/*:ext.form.field.BaseField*/ =AS3.cast(Ext.form.field.Base,{});
    field_77_5_$1.labelAlign = "top";
    field_77_5_$1.labelSeparator = "";
    var editor_PropertyField_80_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyField*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyField,{});
    editor_PropertyField_80_9_$1["bindToTask"] = AS3.getBindable(config,"bindToTask");
    AS3.setBindable(editor_PropertyField_80_9_$1,"bindTo" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_PropertyField_80_9_$1,"forceReadOnlyValueExpression" , AS3.getBindable(config,"forceReadOnlyValueExpression"));

    delete editor_PropertyField_80_9_$1['xtype'];
    delete editor_PropertyField_80_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(field_77_5_$1, editor_PropertyField_80_9_$1);
    config_$1["defaultType"] = field_77_5_$1['xtype'];
    delete field_77_5_$1['xtype'];
    delete field_77_5_$1['xclass'];
    config_$1.defaults = field_77_5_$1;
    var layout_Anchor_88_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_88_5_$1);
    var ui_VerticalSpacingPlugin_92_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_92_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_92_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$JLhM(config_$1);
  }/*

    /**
     * A value expression returning the process to show.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    /**
     * A value expression returning the task to show.
     * If this form displays a process and not a task (especially in the finished list)
     * this option is null.
     * /
    [Bindable]
    public var bindToTask:ValueExpression;

    /**
     * An optional ValueExpression which makes the component read-only if it is evaluated to true.
     * /
    [Bindable]
    public var forceReadOnlyValueExpression:ValueExpression;

    public var processDefinitionName:String;


    /**
     An array of components that are prepended to the list of items given
     in the items config option. This option is set by the control room
     and is merged into the component-specific items when instantiating
     a workflow form.
     * /
    [Bindable]
    public var prefixItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowForm",
      constructor: WorkflowForm$,
      super$JLhM: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase.prototype.constructor.apply(this, arguments);
      },
      processDefinitionName: null,
      config: {
        bindTo: null,
        bindToTask: null,
        forceReadOnlyValueExpression: null,
        prefixItems: null
      },
      requires: [
        "Ext.form.field.Base",
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowFormBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyField",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
