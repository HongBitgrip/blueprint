Ext.define("com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowAction", function(StartPullTranslationWorkflowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class StartPullTranslationWorkflowAction extends StartPullTranslationWorkflowActionBase{

    import mx.resources.ResourceManager;

    public*/function StartPullTranslationWorkflowAction$(config/*:StartPullTranslationWorkflowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase,{});
    var defaults_$1/*:StartPullTranslationWorkflowAction*/ =AS3.cast(StartPullTranslationWorkflowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_tooltip'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_startPullTranslationWorkflow_text')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$I45C(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase",
      constructor: StartPullTranslationWorkflowAction$,
      super$I45C: function() {
        com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.actions.StartPullTranslationWorkflowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
