Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanel", function(ProjectContentsPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.*;
import net.jangaroo.ext.Exml;
public class ProjectContentsPanel extends ProjectContentsPanelBase{

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectContentsPanel";

    public*/function ProjectContentsPanel$(config/*:ProjectContentsPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase,{});
    var defaults_$1/*:ProjectContentsPanel*/ =AS3.cast(ProjectContentsPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_ProjectContentToolbar_17_5_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentToolbar*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentToolbar,{});
    AS3.setBindable(collab_ProjectContentToolbar_17_5_$1,"listOrThumbsViewVE" , this.getListOrThumbViewVE());
    AS3.setBindable(collab_ProjectContentToolbar_17_5_$1,"selectedItemsVE" , this.getSelectedItemsVE());
    AS3.setBindable(collab_ProjectContentToolbar_17_5_$1,"project" , AS3.getBindable(config,"project"));
    var collab_ProjectContentContainer_20_5_$1/*: com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer,{});
    AS3.setBindable(collab_ProjectContentContainer_20_5_$1,"project" , AS3.getBindable(config,"project"));
    AS3.setBindable(collab_ProjectContentContainer_20_5_$1,"listOrThumbsViewVE" , this.getListOrThumbViewVE());
    AS3.setBindable(collab_ProjectContentContainer_20_5_$1,"selectedItemsVE" , this.getSelectedItemsVE());
    config_$1.items = [collab_ProjectContentToolbar_17_5_$1, collab_ProjectContentContainer_20_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$68XO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectContentsPanel",
      constructor: ProjectContentsPanel$,
      super$68XO: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentsPanelBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentContainer",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectContentToolbar"
      ]
    };
});
