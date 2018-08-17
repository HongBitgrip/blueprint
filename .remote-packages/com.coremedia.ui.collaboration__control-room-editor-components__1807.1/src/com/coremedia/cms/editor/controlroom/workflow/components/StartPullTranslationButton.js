Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButton", function(StartPullTranslationButton) {/*package com.coremedia.cms.editor.controlroom.workflow.components{
import com.coremedia.cms.editor.controlroom.workflow.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction;
public class StartPullTranslationButton extends StartPullTranslationButtonBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.startPullTranslationButton";

    public*/function StartPullTranslationButton$(config/*:StartPullTranslationButton = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase,{});
    var defaults_$1/*:StartPullTranslationButton*/ =AS3.cast(StartPullTranslationButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_StartPullTranslationWorkflowAction_27_5_$1/*:com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction,{});
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_27_5_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"contentVariableName")));
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_27_5_$1,"contentValueExpression" , AS3.getBindable(config,"contentValueExpression"));
    AS3.setBindable(collab_StartPullTranslationWorkflowAction_27_5_$1,"hideOnDisable" , AS3.getBindable(config,"hideOnDisable"));
    config_$1.baseAction = new com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction(collab_StartPullTranslationWorkflowAction_27_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$QD81(config_$1);
  }/*

    [Bindable]
    public var contentValueExpression:ValueExpression;

    [Bindable]
    public var contentVariableName:String;


    [Bindable]
    public var hideOnDisable:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.startPullTranslationButton",
      constructor: StartPullTranslationButton$,
      super$QD81: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        contentValueExpression: null,
        contentVariableName: null,
        hideOnDisable: false
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.workflow.components.StartPullTranslationButtonBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction"]
    };
});
