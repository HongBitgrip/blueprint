Ext.define("com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase", function(ConditionEditorBase) {/*package com.coremedia.blueprint.base.queryeditor.conditions {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.preview.PreviewPanel;
import com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm;
import com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase;
import com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.skins.PanelSkin;

import ext.panel.Panel;

public class ConditionEditorBase extends Panel {

  /**
   * a property path to the Content
   * /
  [Bindable]
  public var bindTo:ValueExpression;
  public var forceReadOnlyValueExpression:ValueExpression;
  public var propertyName:String;
  public var setToDefault:Boolean;
  public var contentType:String;
  public var group:String;
  public var sortable:Boolean;
  public var attribute:String;
  public var documentTypes:Array;

  protected var localModel:Bean;
  protected var valueExpression:ValueExpression;
  protected var dcqe:ContentQueryForm;

  public*/ function ConditionEditorBase$(config/*:ConditionEditorBase = null*/) {if(arguments.length<=0)config=null;
    this.super$R3J8(config);
    AS3.setBindable(this,"bindTo" , AS3.getBindable(config,"bindTo"));
    this.group = config.group;
    this.contentType = config.contentType;
    this.setToDefault = config.setToDefault || false;
    this.sortable = config.sortable|| false;
    this.attribute = config.attribute;
    this.documentTypes = config.documentTypes;
    this.propertyName = config.propertyName;
    AS3.setBindable(this,"title" , com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.getConditionTitle(config.propertyName));
    this.ui = com.coremedia.ui.skins.PanelSkin.FRAME_100.getSkin();
  }/*

  /**
   * It's important that this method is called from the extended afterRender method!
   * /
  protected override*/ function afterRender()/*:void*/{
    Ext.panel.Panel.prototype.afterRender.call(this);
    // once the default value is written to the remote bean, set the flag to false
    this.getRemoteValueExpression().addChangeListener(AS3.bind(this,"updateSetToDefaultFlag$R3J8"));
  }/*

  /**
   * Remove the condition from the list.
   * /
  public*/ function removeCondition()/*:void*/ {
    var conditionsField/*:QueryConditionsForm*/ =AS3.as( this.findParentByType(com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm),  com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm);
    // An owner container of this header is a condition editor.
    conditionsField.removeCondition(this);
  }/*

  /**
   * Local model getter. Use the local model to store values and listen to the value changes.
   * @return local model bean
   * /
  protected*/ function getLocalModel()/*:Bean*/ {
    if (!this.localModel) {
      this.localModel = com.coremedia.ui.data.beanFactory.createLocalBean(this.createLocalModelInitObject());
    }
    return this.localModel;
  }/*

  /**
   * Override this method if you want to initialize the local bean with some values.
   * /
  protected*/ function createLocalModelInitObject()/*:Object*/ {
    return {};
  }/*

  /**
   * Read the existing condition expression from it and update it when the condition expression changes.
   * @return source value expression for the condition expression (most probably stored in the remote bean)
   * /
  protected*/ function getRemoteValueExpression()/*:ValueExpression*/ {
    if(!this.valueExpression){
      this.valueExpression = this.getContentQueryEditor$R3J8().getFilterQuerySubProperty(this.propertyName);
      this.valueExpression.addChangeListener(conditionChanged$static);
    }
    return this.valueExpression;
  }/*

  /**
   * Event listener when one of the condition statuses has been changed.
   * We trigger the preview reload manually then.
   * /
  private static*/ function conditionChanged$static()/*:void*/ {
    var premular/*:Panel*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  Ext.panel.Panel);
    var previewPanel/*:PreviewPanel*/ =AS3.as( premular.queryById('previewPanel'),  com.coremedia.cms.editor.sdk.preview.PreviewPanel);
    if (previewPanel) {
      previewPanel.reloadFrame();
    }
  }/*

  /**
   * Use this method to distinguish the situation where the condition was just added and you need to set the default
   * value, from the situation where some other user removed the condition from the query. In both of these situations
   * you will have the condition editor rendered and the remote value undefined.
   *
   * NOTE: ConditionEditor.afterRender method needs to be called in the subclass for this method to work properly
   *
   * @return true if the condition should be set to default, false otherwise
   * /
  protected*/ function shouldSetToDefault()/*:Boolean*/ {
    return this.setToDefault;
  }/*


  /* *** Private methods *** * /

  private*/ function updateSetToDefaultFlag(valueExpression/*:ValueExpression*/)/*:void*/ {
    if(this.setToDefault && valueExpression.getValue()){
      this.setToDefault = false;
      this.getRemoteValueExpression().removeChangeListener(AS3.bind(this,"updateSetToDefaultFlag$R3J8"));
    }
  }/*

  /**
   * Helper getter.
   * @return ContentQueryForm
   * /
  private*/ function getContentQueryEditor()/*:ContentQueryForm*/ {
    if (!this.dcqe) {
      this.dcqe =AS3.as( this.findParentByType(com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm),  com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm);
    }
    return this.dcqe;
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.getRemoteValueExpression().removeChangeListener(AS3.bind(this,"updateSetToDefaultFlag$R3J8"));
  }/*

  /**
   * Initializes the struct the condition is working on.
   * @param bindTo
   * @param contentType
   * @param structPropertyName
   * /
  protected static*/ function applyBaseStruct$static(bindTo/*:ValueExpression*/, contentType/*:String*/, structPropertyName/*:String*/)/*:void*/ {
    var c/*:Content*/ = bindTo.getValue();
    var struct/*:Struct*/ = c.getProperties().get('localSettings');
    struct.getType().addStructProperty('fq');
    var fq/*:Struct*/ = struct.get('fq');

    var capType/*:CapType*/ = com.coremedia.cap.common.SESSION.getConnection().getContentRepository().getContentType(contentType);
    fq.getType().addLinkListProperty(structPropertyName, capType, []);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      forceReadOnlyValueExpression: null,
      propertyName: null,
      setToDefault: false,
      contentType: null,
      group: null,
      sortable: false,
      attribute: null,
      documentTypes: null,
      localModel: null,
      valueExpression: null,
      dcqe: null,
      constructor: ConditionEditorBase$,
      super$R3J8: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      removeCondition: removeCondition,
      getLocalModel: getLocalModel,
      createLocalModelInitObject: createLocalModelInitObject,
      getRemoteValueExpression: getRemoteValueExpression,
      shouldSetToDefault: shouldSetToDefault,
      updateSetToDefaultFlag$R3J8: updateSetToDefaultFlag,
      getContentQueryEditor$R3J8: getContentQueryEditor,
      onDestroy: onDestroy,
      config: {bindTo: null},
      statics: {applyBaseStruct: applyBaseStruct$static},
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanel",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.skins.PanelSkin"
      ],
      uses: [
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm",
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase",
        "com.coremedia.blueprint.base.queryeditor.components.QueryConditionsForm"
      ]
    };
});
