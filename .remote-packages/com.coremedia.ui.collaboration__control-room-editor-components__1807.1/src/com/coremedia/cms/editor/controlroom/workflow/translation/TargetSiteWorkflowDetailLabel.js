Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabel", function(TargetSiteWorkflowDetailLabel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class TargetSiteWorkflowDetailLabel extends TargetSiteWorkflowDetailLabelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.targetSiteWorkflowDetailLabel";

    public*/function TargetSiteWorkflowDetailLabel$(config/*:TargetSiteWorkflowDetailLabel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase,{});
    var defaults_$1/*:TargetSiteWorkflowDetailLabel*/ =AS3.cast(TargetSiteWorkflowDetailLabel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_targetSite_label')));
    AS3.setBindable(config_$1,"textValueExpression" , this.getTargetSiteValueExpression(AS3.getBindable(config,"bindTo")));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$g3Zy(config_$1);
  }/*

    /**
     * A value expression returning the process to show.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.targetSiteWorkflowDetailLabel",
      constructor: TargetSiteWorkflowDetailLabel$,
      super$g3Zy: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
