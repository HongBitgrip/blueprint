Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectAction", function(AbstractTabContextMenuProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class AbstractTabContextMenuProjectAction extends AbstractTabContextMenuProjectActionBase{

    public*/function AbstractTabContextMenuProjectAction$(config/*:AbstractTabContextMenuProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase,{});
    var defaults_$1/*:AbstractTabContextMenuProjectAction*/ =AS3.cast(AbstractTabContextMenuProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$HlMo(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase",
      constructor: AbstractTabContextMenuProjectAction$,
      super$HlMo: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractTabContextMenuProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
