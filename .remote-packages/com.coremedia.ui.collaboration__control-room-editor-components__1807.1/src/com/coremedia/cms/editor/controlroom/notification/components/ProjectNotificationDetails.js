Ext.define("com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetails", function(ProjectNotificationDetails) {/*package com.coremedia.cms.editor.controlroom.notification.components{
import com.coremedia.cms.editor.controlroom.notification.components.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction;
public class ProjectNotificationDetails extends ProjectNotificationDetailsBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectNotificationDetails";

    public*/function ProjectNotificationDetails$(config/*:ProjectNotificationDetails = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase,{});
    var defaults_$1/*:ProjectNotificationDetails*/ =AS3.cast(ProjectNotificationDetails,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_ShowProjectForNotificationAction_16_5_$1/*:com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction*/ =AS3.cast(com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction,{});
    config_$1.baseAction = new com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction(collab_ShowProjectForNotificationAction_16_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$O0Jl(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectNotificationDetails",
      constructor: ProjectNotificationDetails$,
      super$O0Jl: function() {
        com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.notification.components.ProjectNotificationDetailsBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationAction"]
    };
});
