Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectGoalsPanel", function(ProjectGoalsPanel) {/*package com.coremedia.cms.editor.controlroom.project.components{
import com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel;
import com.coremedia.ui.components.ResizableTextArea;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.layout.container.AnchorLayout;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectGoalsPanel extends ProjectSubPanel{

    import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.controlroom.config.projectGoalsPanel";

    public static const DUE_DATE_PANEL_ID:String = "projectDueDatePanel";

    public static const DESCRIPTION_TEXT_FIELD_ID:String = "projectDescriptionTextField";

    public*/function ProjectGoalsPanel$(config/*:ProjectGoalsPanel = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel,{});
    var defaults_$1/*:ProjectGoalsPanel*/ =AS3.cast(ProjectGoalsPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var collab_ProjectDueDatePanel_27_5_$1/*:com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel,{});
    collab_ProjectDueDatePanel_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectGoalsPanel.DUE_DATE_PANEL_ID);
    AS3.setBindable(collab_ProjectDueDatePanel_27_5_$1,"project" , AS3.getBindable(config,"project"));
    var ui_ResizableTextArea_29_5_$1/*:com.coremedia.ui.components.ResizableTextArea*/ =AS3.cast(com.coremedia.ui.components.ResizableTextArea,{});
    ui_ResizableTextArea_29_5_$1.itemId =net.jangaroo.ext.Exml.asString( ProjectGoalsPanel.DESCRIPTION_TEXT_FIELD_ID);
    AS3.setBindable(ui_ResizableTextArea_29_5_$1,"height" , 100);
    ui_ResizableTextArea_29_5_$1.anchor = "100%";
    AS3.setBindable(ui_ResizableTextArea_29_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Project_notes_title')));
    var object_34_9_$1/*:Object*/ = {};
    object_34_9_$1.resize = function ()/*:void*/ {this$.queryById(ProjectGoalsPanel.DESCRIPTION_TEXT_FIELD_ID).updateLayout();};
    AS3.setBindable(ui_ResizableTextArea_29_5_$1,"listeners" , object_34_9_$1);
    var ui_BindPropertyPlugin_37_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_37_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames.DESCRIPTION, AS3.getBindable(config,"project"));
    ui_BindPropertyPlugin_37_9_$1.reverseTransformer = function (value/*:String*/)/*:String*/ {return value && value['trim']();};
    ui_BindPropertyPlugin_37_9_$1.bidirectional = true;
    ui_ResizableTextArea_29_5_$1.plugins = [ui_BindPropertyPlugin_37_9_$1];
    ui_ResizableTextArea_29_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    config_$1.items = [collab_ProjectDueDatePanel_27_5_$1, ui_ResizableTextArea_29_5_$1];
    var layout_Anchor_45_5_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(config_$1,"layout" , layout_Anchor_45_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZLUM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
      alias: "widget.com.coremedia.cms.editor.controlroom.config.projectGoalsPanel",
      constructor: ProjectGoalsPanel$,
      super$ZLUM: function() {
        com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel.prototype.constructor.apply(this, arguments);
      },
      statics: {
        DUE_DATE_PANEL_ID: "projectDueDatePanel",
        DESCRIPTION_TEXT_FIELD_ID: "projectDescriptionTextField"
      },
      requires: [
        "Ext.layout.container.Anchor",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.components.ProjectSubPanel",
        "com.coremedia.ui.components.ResizableTextArea",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.components.ProjectDueDatePanel",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectPropertyNames"
      ]
    };
});
