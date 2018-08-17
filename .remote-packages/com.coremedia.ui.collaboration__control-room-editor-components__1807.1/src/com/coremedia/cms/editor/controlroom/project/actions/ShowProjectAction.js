Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowProjectAction", function(ShowProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class ShowProjectAction extends ShowProjectActionBase{

    public*/function ShowProjectAction$(config/*:ShowProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase,{});
    var defaults_$1/*:ShowProjectAction*/ =AS3.cast(ShowProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$VlSG(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase",
      constructor: ShowProjectAction$,
      super$VlSG: function() {
        com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.ShowProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
