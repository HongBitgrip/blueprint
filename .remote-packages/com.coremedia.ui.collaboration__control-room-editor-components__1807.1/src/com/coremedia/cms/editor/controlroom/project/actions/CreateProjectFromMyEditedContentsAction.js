Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsAction", function(CreateProjectFromMyEditedContentsAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
/**

 A <code>contentAction</code> that creates a content set from edited contents.

 * /
public class CreateProjectFromMyEditedContentsAction extends CreateProjectFromMyEditedContentsActionBase{

    public*/function CreateProjectFromMyEditedContentsAction$(config/*:CreateProjectFromMyEditedContentsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase,{});
    var defaults_$1/*:CreateProjectFromMyEditedContentsAction*/ =AS3.cast(CreateProjectFromMyEditedContentsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$7LJA(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase",
      constructor: CreateProjectFromMyEditedContentsAction$,
      super$7LJA: function() {
        com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectFromMyEditedContentsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
