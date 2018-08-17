Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetState", function(ProjectsTodosWidgetState) {/*package com.coremedia.cms.editor.controlroom.project.widget{
import com.coremedia.cms.editor.sdk.dashboard.WidgetState;
import net.jangaroo.ext.Exml;
public class ProjectsTodosWidgetState extends WidgetState{

    public*/function ProjectsTodosWidgetState$(config/*:ProjectsTodosWidgetState = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.dashboard.WidgetState*/ =AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetState,{});
    var defaults_$1/*:ProjectsTodosWidgetState*/ =AS3.cast(ProjectsTodosWidgetState,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.widgetTypeId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget.xtype);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$G3wJ(config_$1);
  }/*

    /**
     The project id to use for this widget or undefined, if all projects of a user should be used.
     * /
    [Bindable]
    public var projectId:String;


    /**
     Whether all user project with open to-dos should be returned or only those which are assigned to the user.
     * /
    [Bindable]
    public var assignedToUser:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
      constructor: ProjectsTodosWidgetState$,
      super$G3wJ: function() {
        com.coremedia.cms.editor.sdk.dashboard.WidgetState.prototype.constructor.apply(this, arguments);
      },
      config: {
        projectId: null,
        assignedToUser: false
      },
      requires: [
        "com.coremedia.cms.editor.sdk.dashboard.WidgetState",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget"]
    };
});
