Ext.define("com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogAction", function(ShowAddProjectMemberDialogAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class ShowAddProjectMemberDialogAction extends ShowAddProjectMemberDialogActionBase{

    public*/function ShowAddProjectMemberDialogAction$(config/*:ShowAddProjectMemberDialogAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase,{});
    var defaults_$1/*:ShowAddProjectMemberDialogAction*/ =AS3.cast(ShowAddProjectMemberDialogAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$xNGl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase",
      constructor: ShowAddProjectMemberDialogAction$,
      super$xNGl: function() {
        com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.ShowAddProjectMemberDialogActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
