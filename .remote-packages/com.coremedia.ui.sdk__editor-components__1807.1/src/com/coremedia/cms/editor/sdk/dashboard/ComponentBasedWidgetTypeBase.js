Ext.define("com.coremedia.cms.editor.sdk.dashboard.ComponentBasedWidgetTypeBase", function(ComponentBasedWidgetTypeBase) {/*package com.coremedia.cms.editor.sdk.dashboard {

import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;

/**
 * The default implementation of <code>WidgetType</code>, which creates a new widget type based on a
 * widget component template (config object).
 * /
[PublicApi]
public class ComponentBasedWidgetTypeBase implements WidgetType {

  private var id:String;
          
  private var widgetComponent:Component;
  private var editorComponent:Component;

  private var defaultRowspan:uint;
  private var description:String;
  private var descriptionHTML:String;
  private var name:String;
  private var title:String;
  private var iconCls:String;
  private var manuallyCreatable:Boolean;

  public*/ function ComponentBasedWidgetTypeBase$(config/*:ComponentBasedWidgetType = null*/) {if(arguments.length<=0)config=null;
    this.id$kwCP = AS3.getBindable(config,"id_") || AS3.getBindable(config,"widgetComponent").xtype;
    
    this.widgetComponent$kwCP = AS3.getBindable(config,"widgetComponent");
    this.editorComponent$kwCP = AS3.getBindable(config,"editorComponent");

    this.defaultRowspan$kwCP = AS3.getBindable(config,"defaultRowspan");
    this.description$kwCP = AS3.getBindable(config,"description");
    this.descriptionHTML$kwCP = AS3.getBindable(config,"descriptionHTML");
    this.name$kwCP = AS3.getBindable(config,"name");
    this.title$kwCP = AS3.getBindable(config,"title");
    this.iconCls$kwCP = AS3.getBindable(config,"iconCls");
    this.manuallyCreatable$kwCP = AS3.getBindable(config,"manuallyCreatable") !== false;
  }/*

  public*/ function getId()/*:String*/ {
    return this.id$kwCP;
  }/*

  //noinspection JSMethodCanBeStatic
  protected*/ function transformState(state/*:Object*/)/*:Object*/ {
    var result/*:Object*/ = {};
    for (var name/*:String*/ in state) {
      var value/*:**/ = state[name];
      if (!(AS3.is(value,   Function))) {
        result[name] = value;
      }
    }

    // Delete xclass property as it points to the widgetState object instead of the widget's xtype.
    // This confuses the ComponentMgr.
    delete result.xclass;

    return result;
  }/*

  public*/ function createWidget(state/*:Object*/)/*:Component*/ {
    var widgetConfig/*:Object*/ = state ? this.transformState(state) : {};
    return AS3.cast(Ext.Component,Ext.ComponentManager.create(Ext.apply({}, widgetConfig, this.widgetComponent$kwCP)));
  }/*

  public*/ function createTools(widget/*:Component*/)/*:Array*/ {
    return null;
  }/*

  public*/ function createEditor(state/*:Object*/)/*:Component*/ {
    if (this.editorComponent$kwCP) {
      var widgetEditorConfig/*:Object*/ = state ? this.transformState(state) : {};
      return AS3.cast(Ext.Component,Ext.ComponentManager.create(Ext.apply({}, widgetEditorConfig, this.editorComponent$kwCP)));
    } else {
      // No editor configured. A type need not provide an editor.
      return null;
    }
  }/*

  // For Story752FixedSearchWidgetTest.
  internal*/ function getWidgetComponent()/*:Component*/ {
    return this.widgetComponent$kwCP;
  }/*

  public*/ function getIconCls()/*:String*/ {
    return this.iconCls$kwCP;
  }/*

  public*/ function getName()/*:String*/ {
    return this.name$kwCP;
  }/*

  public*/ function getDescription()/*:String*/ {
    return this.description$kwCP;
  }/*

  public*/ function getDescriptionHTML()/*:String*/ {
    return this.descriptionHTML$kwCP || com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.getDescription());
  }/*

  public*/ function getDefaultRowSpan()/*:uint*/ {
    return this.defaultRowspan$kwCP;
  }/*

  public*/ function getTitle(state/*:Object*/)/*:String*/ {
    return state['title'] || this.title$kwCP || this.name$kwCP;
  }/*

  public*/ function isManuallyCreatable()/*:Boolean*/ {
    return this.manuallyCreatable$kwCP;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.dashboard.WidgetType"],
      metadata: {"": ["PublicApi"]},
      id$kwCP: null,
      widgetComponent$kwCP: null,
      editorComponent$kwCP: null,
      defaultRowspan$kwCP: 0,
      description$kwCP: null,
      descriptionHTML$kwCP: null,
      name$kwCP: null,
      title$kwCP: null,
      iconCls$kwCP: null,
      manuallyCreatable$kwCP: false,
      constructor: ComponentBasedWidgetTypeBase$,
      getId: getId,
      transformState: transformState,
      createWidget: createWidget,
      createTools: createTools,
      createEditor: createEditor,
      getWidgetComponent: getWidgetComponent,
      getIconCls: getIconCls,
      getName: getName,
      getDescription: getDescription,
      getDescriptionHTML: getDescriptionHTML,
      getDefaultRowSpan: getDefaultRowSpan,
      getTitle: getTitle,
      isManuallyCreatable: isManuallyCreatable,
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "com.coremedia.cms.editor.sdk.dashboard.WidgetType",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
