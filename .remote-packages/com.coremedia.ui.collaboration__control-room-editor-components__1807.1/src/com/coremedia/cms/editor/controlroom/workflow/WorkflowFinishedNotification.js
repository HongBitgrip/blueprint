Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowFinishedNotification", function(WorkflowFinishedNotification) {/*package com.coremedia.cms.editor.controlroom.workflow{
import com.coremedia.ui.components.AnimatedNotification;
import net.jangaroo.ext.Exml;
import ext.form.Label;
public class WorkflowFinishedNotification extends AnimatedNotification{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.workflowFinishedNotification";

    public*/function WorkflowFinishedNotification$(config/*:WorkflowFinishedNotification = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.ui.components.AnimatedNotification*/ =AS3.cast(com.coremedia.ui.components.AnimatedNotification,{});
    var defaults_$1/*:WorkflowFinishedNotification*/ =AS3.cast(WorkflowFinishedNotification,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"position" , "rc");
    var label_23_5_$1/*:ext.form.Label*/ =AS3.cast(Ext.form.Label,{});
    AS3.setBindable(label_23_5_$1,"text" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"text")));
    config_$1.items = [label_23_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$2coF(config_$1);
  }/*

    /**
     The text to display.
     * /
    [Bindable]
    public var text:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AnimatedNotification",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.workflowFinishedNotification",
      constructor: WorkflowFinishedNotification$,
      super$2coF: function() {
        com.coremedia.ui.components.AnimatedNotification.prototype.constructor.apply(this, arguments);
      },
      config: {text: null},
      requires: [
        "Ext.form.Label",
        "com.coremedia.ui.components.AnimatedNotification",
        "net.jangaroo.ext.Exml"
      ]
    };
});
