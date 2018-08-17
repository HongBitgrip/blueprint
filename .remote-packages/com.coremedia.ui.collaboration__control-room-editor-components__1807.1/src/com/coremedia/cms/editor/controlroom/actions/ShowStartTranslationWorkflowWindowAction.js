Ext.define("com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowAction", function(ShowStartTranslationWorkflowWindowAction) {/*package com.coremedia.cms.editor.controlroom.actions{
import com.coremedia.cms.editor.controlroom.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ShowStartTranslationWorkflowWindowAction extends ShowStartTranslationWorkflowWindowActionBase{

    import mx.resources.ResourceManager;

    public*/function ShowStartTranslationWorkflowWindowAction$(config/*:ShowStartTranslationWorkflowWindowAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase,{});
    var defaults_$1/*:ShowStartTranslationWorkflowWindowAction*/ =AS3.cast(ShowStartTranslationWorkflowWindowAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"actionName" , "showStartTranslationWorkflowWindow");
    AS3.setBindable(config_$1,"tooltip" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_tooltip'));
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Action_showStartTranslationWorkflowWindow_text')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5Gz_(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase",
      constructor: ShowStartTranslationWorkflowWindowAction$,
      super$5Gz_: function() {
        com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.actions.ShowStartTranslationWorkflowWindowActionBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
