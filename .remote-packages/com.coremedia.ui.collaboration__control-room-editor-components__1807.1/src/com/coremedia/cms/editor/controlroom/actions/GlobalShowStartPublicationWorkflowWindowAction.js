Ext.define("com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowAction", function(GlobalShowStartPublicationWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
/**
 Action to start a publication workflow via the publication workflow window. In contrast to the
 ShowStartPublicationWorkflowWindowAction this action does not work on a selection but on all edited contents of the
 current user (via my edited contents).
 It does never hide itself and is disabled when there are no edited contents.
 * /
public class GlobalShowStartPublicationWorkflowWindowAction extends GlobalShowStartPublicationWorkflowWindowActionBase{

    import mx.resources.ResourceManager;

    public*/function GlobalShowStartPublicationWorkflowWindowAction$(config/*:GlobalShowStartPublicationWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase,{});
    var defaults_$1/*:GlobalShowStartPublicationWorkflowWindowAction*/ =AS3.cast(GlobalShowStartPublicationWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"actionName" , "globalShowStartPublicationWorkflowWindow");
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_globalShowStartPublicationWorkflowWindow_tooltip'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_globalShowStartPublicationWorkflowWindow_text')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$9qPy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase",
      constructor: GlobalShowStartPublicationWorkflowWindowAction$,
      super$9qPy: function() {
        com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.actions.GlobalShowStartPublicationWorkflowWindowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
