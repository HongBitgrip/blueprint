Ext.define("com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectAction", function(AbstractProjectAction) {/*package com.coremedia.cms.editor.controlroom.project.actions{
import com.coremedia.cms.editor.controlroom.project.actions.*;
import net.jangaroo.ext.Exml;
public class AbstractProjectAction extends AbstractProjectActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function AbstractProjectAction$(config/*:AbstractProjectAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase,{});
    var defaults_$1/*:AbstractProjectAction*/ =AS3.cast(AbstractProjectAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FySB(config_$1);
  }/*

    /**
     * A value expression containing the projects the action shall apply to.
     * /
    [Bindable]
    public var projectsVE:ValueExpression;

    /**
     Predefined projects (optional)
     * /
    [Bindable]
    public var projects:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase",
      constructor: AbstractProjectAction$,
      super$FySB: function() {
        com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        projectsVE: null,
        projects: null
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.actions.AbstractProjectActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
