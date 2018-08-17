Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabel", function(TargetLocaleWorkflowDetailLabel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class TargetLocaleWorkflowDetailLabel extends TargetLocaleWorkflowDetailLabelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.targetLocaleWorkflowDetailLabel";

    public*/function TargetLocaleWorkflowDetailLabel$(config/*:TargetLocaleWorkflowDetailLabel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase,{});
    var defaults_$1/*:TargetLocaleWorkflowDetailLabel*/ =AS3.cast(TargetLocaleWorkflowDetailLabel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_targetLocale_label')));
    AS3.setBindable(config_$1,"textValueExpression" , this.getTargetLocaleValueExpression(AS3.getBindable(config,"bindTo")));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$B1T9(config_$1);
  }/*

    /**
     * A value expression returning the process to show.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.targetLocaleWorkflowDetailLabel",
      constructor: TargetLocaleWorkflowDetailLabel$,
      super$B1T9: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
