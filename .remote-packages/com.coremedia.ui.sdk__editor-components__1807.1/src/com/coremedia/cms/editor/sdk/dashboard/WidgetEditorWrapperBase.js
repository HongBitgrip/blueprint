Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetEditorWrapperBase", function(WidgetEditorWrapperBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.TextMetricsUtil;

import ext.Component;
import ext.container.Container;
import ext.panel.Panel;

[ResourceBundle('com.coremedia.cms.editor.sdk.dashboard.Dashboard')]
public class WidgetEditorWrapperBase extends Panel {

  protected const EDITOR_CONTAINER:String = "editorContainer";
  protected const EDITOR_WRAPPER_MAIN_BODY:String = "editorWrapperMainBody";

  private var editorContainer:Container;
  private var stateValueExpression:ValueExpression;

  public*/ function WidgetEditorWrapperBase$(config/*:WidgetEditorWrapper = null*/) {if(arguments.length<=0)config=null;
    this.super$O3g$(config);
    AS3.getBindable(this,"model").addPropertyChangeListener(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY,AS3.bind( this,"widgetTypeChanged$O3g$"));

    this.editorContainer$O3g$ =AS3.as( this.queryById(this.EDITOR_CONTAINER),  Ext.container.Container);
    this.showEditor$O3g$();
  }/*

  /**
   * The type of the widget at the time of entering the edit mode.
   * /
  [Bindable]
  public var model:Bean;

  private*/ function getWidgetType()/*:WidgetType*/ {
    return com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.getWidgetTypeWithId(AS3.getBindable(this,"model").get(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY));
  }/*

  private*/ function getWidgetState()/*:Object*/ {
    return AS3.getBindable(this,"model").get(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.STATE_MODEL_PROPERTY);
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"model").removePropertyChangeListener(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.WIDGET_TYPE_ID_MODEL_PROPERTY,AS3.bind( this,"widgetTypeChanged$O3g$"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  private*/ function showEditor()/*:void*/ {
    var widgetType/*:WidgetType*/ = this.getWidgetType$O3g$();
    var editor/*:Component*/ = widgetType.createEditor(this.getWidgetState$O3g$());
    if (!editor) {
      var description/*:String*/ = widgetType.getDescriptionHTML();
      var html/*:String*/ = this.resourceManager.getString('com.coremedia.cms.editor.sdk.dashboard.Dashboard', 'WidgetEditor_notConfigurable_text');
      if (description) {
        html = html + "<p>" + description + "</p>";
      }
      var containerCfg/*:Container*/ = AS3.cast(Ext.container.Container,{});
      AS3.setBindable(containerCfg,"html" , html);
      editor = new Ext.container.Container(containerCfg);
    }
    this.editorContainer$O3g$.add(editor);
    // EXT6_PERFORMANCE queryById(EDITOR_WRAPPER_MAIN_BODY).updateLayout();
    if (AS3.is(editor,  com.coremedia.ui.data.StateHolder)) {
      this.stateValueExpression$O3g$ = AS3.cast(com.coremedia.ui.data.StateHolder,editor).getStateValueExpression();
      this.stateValueExpression$O3g$.addChangeListener(AS3.bind(this,"stateChanged$O3g$"));
      this.stateChanged$O3g$();
    }
  }/*

  private*/ function stateChanged()/*:void*/ {
    AS3.getBindable(this,"model").set(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.STATE_MODEL_PROPERTY, this.stateValueExpression$O3g$.getValue());
  }/*

  private*/ function widgetTypeChanged()/*:void*/ {
    // After a new widget type has been chosen, that widget type
    // should be used in its default configuration.
    AS3.getBindable(this,"model").set(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.STATE_MODEL_PROPERTY, {});
    AS3.getBindable(this,"model").set(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase.ROW_SPAN_MODEL_PROPERTY, this.getWidgetType$O3g$().getDefaultRowSpan() || 1);

    // Remove previous editor.
    this.removeEditor$O3g$();

    (AS3.as(this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper.xtype),  com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper)).updateHeight();

    // Show new editor.
    this.showEditor$O3g$();
    // EXT6_PERFORMANCE updateLayout();
  }/*

  private*/ function removeEditor()/*:void*/ {
    if (this.stateValueExpression$O3g$) {
      this.stateValueExpression$O3g$.removeChangeListener(AS3.bind(this,"stateChanged$O3g$"));
      this.stateValueExpression$O3g$ = null;
    }
    this.editorContainer$O3g$.removeAll();
  }/*

  protected static*/ function getWidgetTypesStore$static()/*:Array*/ {
    var result/*:Array*/ = [];
    var widgetTypes/*:Array*/ = AS3.getBindable(com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration(),"types");
    for (var i/*:int*/ = 0; i < widgetTypes.length; i++) {
      var widgetType/*:WidgetType*/ = widgetTypes[i];
      if (widgetType.isManuallyCreatable()) {
        result.push([widgetType.getId(), widgetType.getName()]);
      }
    }
    return result;
  }/*

  protected*/ function getMaxWidgetTypeWidth()/*:int*/ {
    return com.coremedia.ui.util.TextMetricsUtil.getMaxWidth("div", ["x-boundlist"],
            WidgetEditorWrapperBase.getWidgetTypesStore().map(function(array/*:Array*/)/*:String*/ {return array[1];}));
  }/*

  protected*/ function removeWidget()/*:void*/ {
    var wrapper/*:WidgetWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper,this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper.xtype));
    var column/*:DashboardColumn*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.DashboardColumn,wrapper.up());
    column.removeWidget(wrapper);
  }/*

  protected*/ function saveWidget()/*:void*/ {
    var wrapper/*:WidgetWrapper*/ = AS3.cast(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper,this.findParentByType(com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper.xtype));
    wrapper.toggleEditMode();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      EDITOR_CONTAINER: "editorContainer",
      EDITOR_WRAPPER_MAIN_BODY: "editorWrapperMainBody",
      editorContainer$O3g$: null,
      stateValueExpression$O3g$: null,
      constructor: WidgetEditorWrapperBase$,
      super$O3g$: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getWidgetType$O3g$: getWidgetType,
      getWidgetState$O3g$: getWidgetState,
      beforeDestroy: beforeDestroy,
      showEditor$O3g$: showEditor,
      stateChanged$O3g$: stateChanged,
      widgetTypeChanged$O3g$: widgetTypeChanged,
      removeEditor$O3g$: removeEditor,
      getMaxWidgetTypeWidth: getMaxWidgetTypeWidth,
      removeWidget: removeWidget,
      saveWidget: saveWidget,
      config: {model: null},
      statics: {getWidgetTypesStore: getWidgetTypesStore$static},
      requires: [
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.dashboard.Dashboard_properties",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.util.TextMetricsUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.dashboard.DashboardColumn",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapper",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetWrapperBase",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
