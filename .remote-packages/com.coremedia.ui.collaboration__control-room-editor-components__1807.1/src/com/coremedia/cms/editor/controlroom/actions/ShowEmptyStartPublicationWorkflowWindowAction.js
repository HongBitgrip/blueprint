Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowAction", function(ShowEmptyStartPublicationWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ShowEmptyStartPublicationWorkflowWindowAction extends ShowEmptyStartPublicationWorkflowWindowActionBase{

    import mx.resources.ResourceManager;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.showEmptyStartPublicationWorkflowWindowAction";

    public*/function ShowEmptyStartPublicationWorkflowWindowAction$(config/*:ShowEmptyStartPublicationWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase,{});
    var defaults_$1/*:ShowEmptyStartPublicationWorkflowWindowAction*/ =AS3.cast(ShowEmptyStartPublicationWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_globalShowStartPublicationWorkflowWindow_tooltip'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_globalShowStartPublicationWorkflowWindow_text')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wn0I(config_$1);
  }/*

    [Bindable]
    public var processDefinitionNames:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.showEmptyStartPublicationWorkflowWindowAction",
      constructor: ShowEmptyStartPublicationWorkflowWindowAction$,
      super$wn0I: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {processDefinitionNames: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.actions.ShowEmptyStartPublicationWorkflowWindowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
