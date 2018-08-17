Ext.define("com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase", function(ProjectNotificationDetailsBase) {/*package com.coremedia.cms.editor.controlroom.notification.components {

import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.notification.components.DefaultNotificationDetails;
import com.coremedia.cms.editor.notification.components.TextParametersPreProcessor;
import com.coremedia.ui.data.RemoteBeanUtil;

public class ProjectNotificationDetailsBase extends DefaultNotificationDetails implements TextParametersPreProcessor {

  public*/ function ProjectNotificationDetailsBase$(config/*:ProjectNotificationDetails = null*/) {if(arguments.length<=0)config=null;
    this.super$1N1W(config);
  }/*

  public*/ function preProcessTextParameters(params/*:Array*/)/*:Array*/ {
    // Parameters retrieved by the server:
    // 1. the content set (Project)
    // 2. the sharer's name (String)
    // 3. the content set's name at the time of sharing (String)
    var projectName/*:String*/ = params[2];
    var project/*:Project*/ =AS3.as( params[0],  com.coremedia.cms.editor.controlroom.project.rest.Project);

    if (project && com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project)) {
      projectName = project.getName() || projectName;
    }

    return [projectName, params[1]];
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.components.DefaultNotificationDetails",
      mixins: ["com.coremedia.cms.editor.notification.components.TextParametersPreProcessor"],
      constructor: ProjectNotificationDetailsBase$,
      super$1N1W: function() {
        com.coremedia.cms.editor.notification.components.DefaultNotificationDetails.prototype.constructor.apply(this, arguments);
      },
      preProcessTextParameters: preProcessTextParameters,
      requires: [
        "com.coremedia.cms.editor.notification.components.DefaultNotificationDetails",
        "com.coremedia.cms.editor.notification.components.TextParametersPreProcessor",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.project.rest.Project"]
    };
});
