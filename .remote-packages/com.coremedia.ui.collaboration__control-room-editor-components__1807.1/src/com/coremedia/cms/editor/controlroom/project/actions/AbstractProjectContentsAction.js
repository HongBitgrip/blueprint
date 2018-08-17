Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsAction", function(AbstractProjectContentsAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AbstractProjectContentsAction extends AbstractProjectContentsActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AbstractProjectContentsAction$(config/*:AbstractProjectContentsAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase,{});
    var defaults_$1/*:AbstractProjectContentsAction*/ =AS3.cast(AbstractProjectContentsAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BYt5(config_$1);
  }/*

    [Bindable]
    public var projectContentsListVE:ValueExpression;

    [Bindable]
    public var projectContentsList:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractProjectContentsAction$,
      super$BYt5: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        projectContentsListVE: null,
        projectContentsList: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectContentsActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
