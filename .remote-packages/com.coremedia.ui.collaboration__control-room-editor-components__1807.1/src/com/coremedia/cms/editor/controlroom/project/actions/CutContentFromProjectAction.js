Ext.define("com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction", function(CutContentFromProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class CutContentFromProjectAction extends CutContentFromProjectActionBase{

    public*/function CutContentFromProjectAction$(config/*:CutContentFromProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase,{});
    var defaults_$1/*:CutContentFromProjectAction*/ =AS3.cast(CutContentFromProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zWhi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: CutContentFromProjectAction$,
      super$zWhi: function() {
        com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
