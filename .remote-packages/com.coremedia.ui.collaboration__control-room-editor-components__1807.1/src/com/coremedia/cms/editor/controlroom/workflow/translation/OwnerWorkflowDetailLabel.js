Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabel", function(OwnerWorkflowDetailLabel) {/*package com.coremedia.cms.editor.controlroom.workflow.translation{
import com.coremedia.cms.editor.controlroom.workflow.translation.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class OwnerWorkflowDetailLabel extends OwnerWorkflowDetailLabelBase{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.ownerWorkflowDetailLabel";

    public*/function OwnerWorkflowDetailLabel$(config/*:OwnerWorkflowDetailLabel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase,{});
    var defaults_$1/*:OwnerWorkflowDetailLabel*/ =AS3.cast(OwnerWorkflowDetailLabel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowDetailPanel_owner_label')));
    AS3.setBindable(config_$1,"textValueExpression" , this.getOwnerVE(AS3.getBindable(config,"bindTo")));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$x_k1(config_$1);
  }/*

    /**
     * A value expression returning the process to show.
     * /
    [Bindable]
    public var bindTo:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.ownerWorkflowDetailLabel",
      constructor: OwnerWorkflowDetailLabel$,
      super$x_k1: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase.prototype.constructor.apply(this, arguments);
      },
      config: {bindTo: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.OwnerWorkflowDetailLabelBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
