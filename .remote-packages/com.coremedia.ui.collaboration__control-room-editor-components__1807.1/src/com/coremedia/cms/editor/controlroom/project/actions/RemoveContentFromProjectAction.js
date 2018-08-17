Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction", function(RemoveContentFromProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class RemoveContentFromProjectAction extends RemoveContentFromProjectActionBase{

    public*/function RemoveContentFromProjectAction$(config/*:RemoveContentFromProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase,{});
    var defaults_$1/*:RemoveContentFromProjectAction*/ =AS3.cast(RemoveContentFromProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$lW2o(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase",
      constructor: RemoveContentFromProjectAction$,
      super$lW2o: function() {
        com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
