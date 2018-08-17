Ext.define("com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetType", function(ProjectsTodosWidgetType) {/*package com.coremedia.cms.editor.controlroom.project.widget{
import com.coremedia.cms.editor.controlroom.project.widget.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class ProjectsTodosWidgetType extends ProjectsTodosWidgetTypeBase{

    import mx.resources.ResourceManager;

    public*/function ProjectsTodosWidgetType$(config/*:ProjectsTodosWidgetType = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase,{});
    var defaults_$1/*:ProjectsTodosWidgetType*/ =AS3.cast(ProjectsTodosWidgetType,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"name" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_type')));
    AS3.setBindable(config_$1,"description" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_description')));
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'Projects_Todos_Widget_icon')));
    var collab_ProjectsTodosWidget_23_5_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget,{});
    AS3.setBindable(config_$1,"widgetComponent" , collab_ProjectsTodosWidget_23_5_$1);
    var collab_ProjectsTodosWidgetEditor_26_5_$1/*: com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditor*/ =AS3.cast(com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditor,{});
    AS3.setBindable(config_$1,"editorComponent" , collab_ProjectsTodosWidgetEditor_26_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$oCpu(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase",
      constructor: ProjectsTodosWidgetType$,
      super$oCpu: function() {
        com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetTypeBase",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidget",
        "com.coremedia.cms.editor.controlroom.project.widget.ProjectsTodosWidgetEditor"
      ]
    };
});
