Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel", function(ProjectSubPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import net.jangaroo.ext.Exml;
public class ProjectSubPanel extends CollapsiblePanel{

    import com.coremedia.cms.editor.controlroom.project.rest.Project;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectSubPanel";

    public*/function ProjectSubPanel$(config/*:ProjectSubPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.sdk.premular.CollapsiblePanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.CollapsiblePanel,{});
    var defaults_$1/*:ProjectSubPanel*/ =AS3.cast(ProjectSubPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1q6M(config_$1);
  }/*

    [Bindable]
    public var project:Project;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectSubPanel",
      constructor: ProjectSubPanel$,
      super$1q6M: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      config: {project: null},
      requires: [
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
