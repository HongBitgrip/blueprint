Ext.define("com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectAction", function(RenameTabProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class RenameTabProjectAction extends RenameTabProjectActionBase{

    public*/function RenameTabProjectAction$(config/*:RenameTabProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase,{});
    var defaults_$1/*:RenameTabProjectAction*/ =AS3.cast(RenameTabProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$G5BQ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase",
      constructor: RenameTabProjectAction$,
      super$G5BQ: function() {
        com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.RenameTabProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
