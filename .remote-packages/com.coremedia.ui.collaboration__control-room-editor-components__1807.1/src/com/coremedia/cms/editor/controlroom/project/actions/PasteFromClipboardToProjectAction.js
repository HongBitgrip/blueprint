Ext.define("com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction", function(PasteFromClipboardToProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class PasteFromClipboardToProjectAction extends PasteFromClipboardToProjectActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function PasteFromClipboardToProjectAction$(config/*:PasteFromClipboardToProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase,{});
    var defaults_$1/*:PasteFromClipboardToProjectAction*/ =AS3.cast(PasteFromClipboardToProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$N6NP(config_$1);
  }/*

    /**
     * If set the Content in the ValueExpression will content the pasted Content after a successful paste.
     * /
    [Bindable]
    public var contentValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase",
      constructor: PasteFromClipboardToProjectAction$,
      super$N6NP: function() {
        com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {contentValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
