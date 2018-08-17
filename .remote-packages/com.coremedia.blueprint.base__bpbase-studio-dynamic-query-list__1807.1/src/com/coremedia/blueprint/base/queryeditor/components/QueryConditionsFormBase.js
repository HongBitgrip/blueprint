Ext.define("com.coremedia.blueprint.base.queryeditor.components.QueryConditionsFormBase", function(QueryConditionsFormBase) {/*package com.coremedia.blueprint.base.queryeditor.components {

import com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;
import ext.form.field.ComboBox;

use namespace ComponentManager;

/**
 * Contains and manages all applied conditions (to be more exact - condition editors).
 * /
[ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class QueryConditionsFormBase extends PropertyFieldGroup {

  public var conditions:Array;

  private var dcqe:ContentQueryForm;
  private var appliedConditionsContainer:Container;
  private var conditionsCombo:ComboBox;

  private var applicableConditionsVE:ValueExpression;
  private var appliedConditionsVE:ValueExpression;
  private var fqValueExpression:ValueExpression;

  private var monitorVE:ValueExpression;

  private var checkInValueExpression:ValueExpression;
  private var checkOutValueExpression:ValueExpression;

  public*/ function QueryConditionsFormBase$(config/*:QueryConditionsFormBase = null*/) {if(arguments.length<=0)config=null;
    this.super$Mv72(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.afterRender.call(this);

    if (this.itemsAreLazy()) {
      this.on(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT,AS3.bind( this,"doInit"));
    } else {
      this.doInit();
    }

    com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase.getDocumentTabChangeExpression().addChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));
    this.checkInValueExpression$Mv72 = AS3.getBindable(this,"bindTo","DUMMY").extendBy(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN);
    this.checkInValueExpression$Mv72.addChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));

    this.checkOutValueExpression$Mv72 = AS3.getBindable(this,"bindTo","DUMMY").extendBy(com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_OTHER);
    this.checkOutValueExpression$Mv72.addChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));
  }/*

  protected*/ function doInit()/*:void*/ {
    var applicableProp/*:String*/ = com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.MODEL_PROPERTIES.APPLICABLE_CONDITIONS;
    this.applicableConditionsVE$Mv72 = com.coremedia.ui.data.ValueExpressionFactory.create(applicableProp, this.getContentQueryEditor$Mv72().getCommonModel());
    this.applicableConditionsVE$Mv72.addChangeListener(AS3.bind(this,"refreshAppliedConditions$Mv72"));

    var appliedProp/*:String*/ = com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.MODEL_PROPERTIES.APPLIED_CONDITIONS;
    this.appliedConditionsVE$Mv72 = com.coremedia.ui.data.ValueExpressionFactory.create(appliedProp, this.getContentQueryEditor$Mv72().getCommonModel());
    this.appliedConditionsVE$Mv72.addChangeListener(AS3.bind(this,"onAppliedChange$Mv72"));

    this.listenToModelChanges$Mv72();
    this.refreshConditionCombo();
  }/*

  protected*/ function getAddConditionDisabledExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      if (AS3.getBindable(this$,"forceReadOnlyValueExpression","DUMMY").getValue()) {
        return true;
      }

      // maybe called before afterRender
      if (this$.applicableConditionsVE$Mv72) {
        var applicableConditions/*:Array*/ = this$.applicableConditionsVE$Mv72.getValue();
        var appliedConditions/*:Array*/ = this$.appliedConditionsVE$Mv72.getValue();
        return applicableConditions && appliedConditions && (applicableConditions.length - appliedConditions.length) === 0;
      } else {
        return undefined;
      }
    });
  }/*

  protected*/ function getDeleteAllConditionDisabledExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Boolean*/ {
      if (AS3.getBindable(this$,"forceReadOnlyValueExpression","DUMMY").getValue()) {
        return true;
      }
      // maybe called before afterRender
      if (this$.appliedConditionsVE$Mv72) {
        var appliedConditions/*:Array*/ = this$.appliedConditionsVE$Mv72.getValue();
        return appliedConditions && appliedConditions.length === 0;
      } else {
        return undefined;
      }
    });
  }/*

  private*/ function refreshAppliedConditions(applicableConditionsVE/*:ValueExpression*/)/*:void*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var applicableConditions/*:Array*/ = applicableConditionsVE.getValue();
    if (applicableConditions.length === 0) {
      this.appliedConditionsVE$Mv72.setValue([]);
    }
    this.refreshConditionCombo();
  }/*

  protected*/ function onConditionSelect()/*:void*/ {
    var selectedCondition/*:ConditionEditorBase*/ = this.getConditionsCombo$Mv72().getValue();
    if (selectedCondition) {
      this.applyCondition(selectedCondition.xtype);
      this.getConditionsCombo$Mv72().setValue(undefined);
    }
  }/*

  protected*/ function refreshConditionCombo()/*:void*/ {
    var applicableConditions/*:Array*/ = this.applicableConditionsVE$Mv72.getValue();
    var records/*:Array*/ = [];
    for/* each*/(var $1=0;$1</* in*/ applicableConditions.length;++$1) {var applicableCondition/*:ConditionEditorBase*/ =applicableConditions[$1];
      if (!this.isApplied$Mv72(applicableCondition)) {
        var record/*:Array*/ = [];
        record.push(applicableCondition);
        record.push(com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.getConditionTitle(applicableCondition.propertyName));
        records.push(record);
      }
    }
    this.getConditionsCombo$Mv72().setStore(records);
  }/*

  private*/ function isApplied(applyableCondition/*:ConditionEditorBase*/)/*:Boolean*/ {
    var appliedConditions/*:Array*/ = this.appliedConditionsVE$Mv72.getValue();
    for/* each*/(var $1=0;$1</* in*/ appliedConditions.length;++$1) {var appliedCondition/*:ConditionEditorBase*/ =appliedConditions[$1];
      if (appliedCondition.xtype === applyableCondition.xtype) {
        return true;
      }
    }
    return false;
  }/*

  public*/ function getConditionEditors()/*:Array*/ {
    return this.getAppliedConditionsContainer$Mv72().queryBy(function (cmp/*:Component*/, container/*:Container*/)/*:Boolean*/ {
      return AS3.is( cmp,  com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase);
    });
  }/*

  private*/ function listenToModelChanges()/*:void*/ {var this$=this;
    this.appliedConditionsVE$Mv72.addChangeListener(AS3.bind(this,"onAppliedChange$Mv72"));

    this.fqValueExpression$Mv72 = this.getContentQueryEditor$Mv72().getFilterQuery();
    this.monitorVE$Mv72 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var queryVE/*:ValueExpression*/ = this$.getContentQueryEditor$Mv72().getQuery();
      queryVE.loadValue(Ext.emptyFn);
      this$.fqValueExpression$Mv72.loadValue(Ext.emptyFn);
      return queryVE.getValue() && this$.fqValueExpression$Mv72.getValue();
    });

    this.monitorVE$Mv72.loadValue(function (queryStruct/*:Struct*/)/*:void*/ {
      //listen to remote changes on the query struct VE because filter query substruct doesn't support change listeners
      this$.monitorVE$Mv72.addChangeListener(AS3.bind(this$,"updateLocalFromRemote$Mv72"));
      //but use filter query substruct to update local data
      this$.updateLocalFromRemote$Mv72();
    });
  }/*

  private*/ function onAppliedChange(appliedConditionsVE/*:ValueExpression*/)/*:void*/ {
    var appliedConditions/*:Array*/ = appliedConditionsVE.getValue();
    this.updateUIFromLocal$Mv72(appliedConditions);
    this.updateRemoteFromLocal$Mv72(appliedConditions);
    this.refreshConditionCombo();
    this.updateLayout();
  }/*

  /**
   * Takes care of the condition removed by the user. Conditions created by the user will save their expressions
   * themselves.
   *
   * @param appliedConditions
   * /
  private*/ function updateRemoteFromLocal(appliedConditions/*:Array*/)/*:void*/ {var this$=this;
    this.fqValueExpression$Mv72.loadValue(function (fq/*:Struct*/)/*:void*/ {
      // check if there is a condition present in the remote bean but not applied locally
      // and remove it if there is
      var allConditions/*:Array*/ = this$.getContentQueryEditor$Mv72().getConditionEditorConfigs();
      var appliedConditions/*:Array*/ = this$.appliedConditionsVE$Mv72.getValue();

      for (var i/*:int*/ = 0; i < allConditions.length; i++) {
        var condition/*:ConditionEditorBase*/ = allConditions[i];
        var remoteExpression/*:String*/ = fq.get(condition.propertyName);
        var isApplied/*:Boolean*/ = appliedConditions.some(function (appliedCondition/*:ConditionEditorBase*/)/*:Boolean*/ {
          return appliedCondition.xtype == condition.xtype;
        });
        if (remoteExpression != undefined && !isApplied) {
          if (fq.getType().hasProperty(condition.propertyName)) {
            fq.getType().removeProperty(condition.propertyName);
          } else {
            //shouldn't ever happen
            com.coremedia.ui.logging.Logger.error('Trying to delete non-existing filter query substruct property: ' + condition.propertyName);
          }
        }
      }
    });
  }/*

  /**
   * Updates UI with changes to the applied conditions.
   *
   * @param appliedConditions
   * /
  private*/ function updateUIFromLocal(appliedConditions/*:Array*/)/*:void*/ {var this$=this;
    var appliedConditionEditors/*:Array*/ = this.getConditionEditors();

    // go through the applied conditions list and check if there is an editor for each
    appliedConditions.forEach(function (appliedCondition/*:ConditionEditorBase*/)/*:void*/ {
      var applied/*:Boolean*/ = appliedConditionEditors.some(function (appliedConditionEditor/*:ConditionEditorBase*/)/*:Boolean*/ {
        return appliedCondition.xtype == appliedConditionEditor.xtype;
      });
      if (!applied) {
        this$.getAppliedConditionsContainer$Mv72().add(Ext.ComponentManager.create(appliedCondition));
      }

    }, null);

    // go through the editors and check if each of them is in the applied conditions list
    appliedConditionEditors.forEach(function (appliedConditionEditor/*:ConditionEditorBase*/)/*:void*/ {
      var stillApplied/*:Boolean*/ = appliedConditions.some(function (appliedCondition/*:ConditionEditorBase*/)/*:Boolean*/ {
        return appliedConditionEditor.xtype == appliedCondition.xtype;
      });
      if (!stillApplied) {
        appliedConditionEditor.destroy();
      }
    }, null);
  }/*

  /**
   * Updates UI with changes from the any of the filter query substruct properties. Mainly takes care of properties that
   * are present in the UI but not in the remote bean and vice versa. Updates for the existing properties with their
   * condition editors present in the UI are handled by the condition editors themselves.
   * /
  private*/ function updateLocalFromRemote()/*:void*/ {
    var fq/*:Struct*/ = this.fqValueExpression$Mv72.getValue();
    if (fq) {
      // check conditions applied locally and also present in the remote bean, leave those in, skip the rest
      var appliedConditions/*:Array*/ = this.appliedConditionsVE$Mv72.getValue();
      var newAppliedConditions/*:Array*/ = [];
      appliedConditions.forEach(function (appliedCondition/*:ConditionEditorBase*/)/*:void*/ {
        var remoteExpression/*:String*/ = fq.get(appliedCondition.propertyName);
        if (remoteExpression != undefined) {
          newAppliedConditions.push(appliedCondition);
        }
      });

      // check if there are any conditions present in the remote bean but not applied locally
      // and add them if there are
      var allConditions/*:Array*/ = this.getContentQueryEditor$Mv72().getConditionEditorConfigs();
      allConditions.forEach(function (condition/*:ConditionEditorBase*/)/*:void*/ {
        var remoteExpression/*:String*/ = fq.get(condition.propertyName);
        var isApplied/*:Boolean*/ = newAppliedConditions.some(function (appliedCondition/*:ConditionEditorBase*/)/*:Boolean*/ {
          return condition.xtype == appliedCondition.xtype;
        });

        if (remoteExpression != undefined && !isApplied) {
          newAppliedConditions.push(condition);
        }
      });

      this.appliedConditionsVE$Mv72.setValue(newAppliedConditions);
    }
  }/*

  /**
   * Adds the condition to the applied conditions list in the local model.
   *
   * @param conditionEditorXtype condition editor xtype
   * /
  public*/ function applyCondition(conditionEditorXtype/*:String*/)/*:void*/ {
    var configClone/*:ConditionEditorBase*/ =
            AS3.cast(com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase,Ext.apply({}, this.getContentQueryEditor$Mv72().getConditionEditorConfigByXtype(conditionEditorXtype)));
    configClone.setToDefault = true; //so that the condition editor knows whether it should set the default expression
    this.addAppliedCondition$Mv72(configClone);

    /**
     * This code has been added to ensure that after a condition is dropped
     * the fq struct is created. The modification condition creates the Struct
     * hierarchy properly, but if the context and taxonomy condition are added first
     * and the fq struct not set yet an error raises.
     */
    if (!this.fqValueExpression$Mv72.getValue()) {
      var contentStruct/*:Struct*/ = this.fqValueExpression$Mv72.getParent().getValue();
      contentStruct.getType().addStructProperty(com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.FQ_STRUCT_NAME);
    }
  }/*

  /**
   * Removes the condition from the applied conditions list in the local model.
   *
   * @param conditionEditor the condition editor to remove
   * /
  public*/ function removeCondition(conditionEditor/*:ConditionEditorBase*/)/*:void*/ {
    this.removeAppliedCondition$Mv72(conditionEditor);
  }/*

  private*/ function addAppliedCondition(condition/*:ConditionEditorBase*/)/*:void*/ {
    var conditions/*:Array*/ = this.appliedConditionsVE$Mv72.getValue().slice(); //we need a copy to trigger the change handler
    conditions.push(condition);
    this.appliedConditionsVE$Mv72.setValue(conditions);
  }/*

  private*/ function removeAppliedCondition(condition/*:ConditionEditorBase*/)/*:void*/ {
    var conditions/*:Array*/ = this.appliedConditionsVE$Mv72.getValue().slice(); //we need a copy to trigger the change handler

    for (var index/*:int*/ = 0; index < conditions.length; index++) {
      if (conditions[index].xtype === condition.xtype) {
        conditions.splice(index, 1);
        this.appliedConditionsVE$Mv72.setValue(conditions);
        condition.destroy();
        break;
      }
    }
  }/*

  protected*/ function removeAllAppliedConditions()/*:void*/ {var this$=this;
    var title/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_delete_condition_title');
    var message/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_delete_condition_msg');
    var confirmationButtonText/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_delete_condition_buttonText');
    var callback/*:Function*/ = function (buttonId/*:String*/)/*:void*/ {
      if (buttonId === "ok") {
        this$.appliedConditionsVE$Mv72.setValue([]);
      }
    };
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message, confirmationButtonText, callback);
  }/*

  private*/ function getAppliedConditionsContainer()/*:Container*/ {
    if (!this.appliedConditionsContainer$Mv72) {
      this.appliedConditionsContainer$Mv72 =AS3.as( this.getComponent("appliedConditions"),  Ext.container.Container);
    }
    return this.appliedConditionsContainer$Mv72;
  }/*

  private*/ function getContentQueryEditor()/*:ContentQueryForm*/ {
    if (!this.dcqe$Mv72) {
      this.dcqe$Mv72 =AS3.as( this.findParentByType(com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm),  com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm);
    }
    return this.dcqe$Mv72;
  }/*

  private*/ function getConditionsCombo()/*:ComboBox*/ {
    if (this.conditionsCombo$Mv72 == null) {
      var fieldContainer/*:Container*/ =AS3.as( this.getComponent("conditionActionsField"),  Ext.container.Container);
      this.conditionsCombo$Mv72 =AS3.as( fieldContainer.getComponent("conditionsCombo"),  Ext.form.field.ComboBox);
    }
    return this.conditionsCombo$Mv72;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.onDestroy.call(this);

    this.checkInValueExpression$Mv72.removeChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));
    this.checkOutValueExpression$Mv72.removeChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));

    com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase.getDocumentTabChangeExpression().removeChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));

    this.appliedConditionsVE$Mv72 && this.appliedConditionsVE$Mv72.removeChangeListener(AS3.bind(this,"onAppliedChange$Mv72"));
    this.applicableConditionsVE$Mv72 && this.applicableConditionsVE$Mv72.removeChangeListener(AS3.bind(this,"refreshAppliedConditions$Mv72"));
    this.monitorVE$Mv72 && this.monitorVE$Mv72.removeChangeListener(AS3.bind(this,"updateLocalFromRemote$Mv72"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      conditions: null,
      dcqe$Mv72: null,
      appliedConditionsContainer$Mv72: null,
      conditionsCombo$Mv72: null,
      applicableConditionsVE$Mv72: null,
      appliedConditionsVE$Mv72: null,
      fqValueExpression$Mv72: null,
      monitorVE$Mv72: null,
      checkInValueExpression$Mv72: null,
      checkOutValueExpression$Mv72: null,
      constructor: QueryConditionsFormBase$,
      super$Mv72: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      doInit: doInit,
      getAddConditionDisabledExpression: getAddConditionDisabledExpression,
      getDeleteAllConditionDisabledExpression: getDeleteAllConditionDisabledExpression,
      refreshAppliedConditions$Mv72: refreshAppliedConditions,
      onConditionSelect: onConditionSelect,
      refreshConditionCombo: refreshConditionCombo,
      isApplied$Mv72: isApplied,
      getConditionEditors: getConditionEditors,
      listenToModelChanges$Mv72: listenToModelChanges,
      onAppliedChange$Mv72: onAppliedChange,
      updateRemoteFromLocal$Mv72: updateRemoteFromLocal,
      updateUIFromLocal$Mv72: updateUIFromLocal,
      updateLocalFromRemote$Mv72: updateLocalFromRemote,
      applyCondition: applyCondition,
      removeCondition: removeCondition,
      addAppliedCondition$Mv72: addAppliedCondition,
      removeAppliedCondition$Mv72: removeAppliedCondition,
      removeAllAppliedConditions: removeAllAppliedConditions,
      getAppliedConditionsContainer$Mv72: getAppliedConditionsContainer,
      getContentQueryEditor$Mv72: getContentQueryEditor,
      getConditionsCombo$Mv72: getConditionsCombo,
      onDestroy: onDestroy,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.form.field.ComboBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cms.editor.sdk.desktop.TabChangePluginBase",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ],
      uses: [
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm",
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase",
        "com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase"
      ]
    };
});
