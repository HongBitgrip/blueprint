Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowAction", function(ShowEmptyStartTranslationWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ShowEmptyStartTranslationWorkflowWindowAction extends ShowEmptyStartTranslationWorkflowWindowActionBase{

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.showEmptyStartTranslationWorkflowWindowAction";

    public*/function ShowEmptyStartTranslationWorkflowWindowAction$(config/*:ShowEmptyStartTranslationWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase,{});
    var defaults_$1/*:ShowEmptyStartTranslationWorkflowWindowAction*/ =AS3.cast(ShowEmptyStartTranslationWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_tooltip'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_text')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gEmN(config_$1);
  }/*

    [Bindable]
    public var processDefinitionNames:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.showEmptyStartTranslationWorkflowWindowAction",
      constructor: ShowEmptyStartTranslationWorkflowWindowAction$,
      super$gEmN: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {processDefinitionNames: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartTranslationWorkflowWindowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
