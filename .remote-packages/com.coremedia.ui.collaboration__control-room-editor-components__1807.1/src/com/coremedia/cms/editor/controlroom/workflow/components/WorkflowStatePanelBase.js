Ext.define("com.coremedia.cms.editor.controlroom.workflow.components.WorkflowStatePanelBase", function(WorkflowStatePanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.components {

import com.coremedia.cap.common.CapTypePropertyNames;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.TaskPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.*;
import com.coremedia.icons.CoreIcons_properties;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.skins.DisplayFieldSkin;

import ext.Ext;
import ext.container.Container;
import ext.form.RadioGroup;
import ext.form.field.Radio;

public class WorkflowStatePanelBase extends SwitchingContainer {
  private var processDefinitionName:String;
  private var currentTaskNameExpression:ValueExpression;
  private var persistentNextStepExpression:ValueExpression;

  private var possibleStepsByTaskMap:Object;
  private var defaultStepsByTaskMap:Object;
  private var selectedStepByTaskBean:Bean;

  public*/ function WorkflowStatePanelBase$(config/*:WorkflowStatePanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.processDefinitionName$jRb8 = AS3.getBindable(config,"processDefinitionName");

    this.currentTaskNameExpression$jRb8 = AS3.getBindable(config,"bindToTask").extendBy(com.coremedia.cap.workflow.TaskPropertyNames.DEFINITION, com.coremedia.cap.common.CapTypePropertyNames.NAME);
    this.persistentNextStepExpression$jRb8 = AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"nextStepVariable"));

    this.possibleStepsByTaskMap$jRb8 = createPossibleStepsMap$static(AS3.getBindable(config,"workflowStateTransitions"));
    this.defaultStepsByTaskMap$jRb8 = createDefaultStepsMap$static(AS3.getBindable(config,"workflowStateTransitions"));
    this.selectedStepByTaskBean$jRb8 = com.coremedia.ui.data.beanFactory.createLocalBean();

    this.currentTaskNameExpression$jRb8.addChangeListener(AS3.bind(this,"selectFirstPossibleStepForCurrentTask$jRb8"));
    this.selectFirstPossibleStepForCurrentTask$jRb8();

    this.super$jRb8(AS3.cast(com.coremedia.ui.components.SwitchingContainer,Ext.apply({
      'activeItemValueExpression': com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this.currentTaskNameExpression$jRb8,"getValue"))
    }, config)));

    this.setLazyItems(this.createRadioGroups$jRb8(AS3.getBindable(config,"forceReadOnlyValueExpression")));

    this.on('activeItem', function ()/*:void*/ {
      this$.selectFirstPossibleStepForCurrentTask$jRb8();
    });

    this.registerProcessTaskOperationExitFunctions();
  }/*

  private static*/ function createPossibleStepsMap$static(workflowStateTransitions/*:Array*/)/*:Object*/ {
    var stepTransitionsMap/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < workflowStateTransitions.length; i++) {
      var workflowStepTransition/*:WorkflowStateTransition*/ = workflowStateTransitions[i];
      stepTransitionsMap[workflowStepTransition.task] = workflowStepTransition.nextSteps;
    }
    return stepTransitionsMap;
  }/*

  private static*/ function createDefaultStepsMap$static(workflowStateTransitions/*:Array*/)/*:Object*/ {
    var stepTransitionsMap/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < workflowStateTransitions.length; i++) {
      var workflowStepTransition/*:WorkflowStateTransition*/ = workflowStateTransitions[i];
      stepTransitionsMap[workflowStepTransition.task] = workflowStepTransition.defaultStep;
    }
    return stepTransitionsMap;
  }/*

  private*/ function selectFirstPossibleStepForCurrentTask()/*:void*/ {
    var currentTaskName/*:String*/ = this.currentTaskNameExpression$jRb8.getValue();
    if (this.possibleStepsByTaskMap$jRb8[currentTaskName] && Array(this.possibleStepsByTaskMap$jRb8[currentTaskName]).length > 0) {
      var possibleSteps/*:Array*/ = this.possibleStepsByTaskMap$jRb8[currentTaskName];
      var defaultStep/*:String*/ = this.defaultStepsByTaskMap$jRb8[currentTaskName];
      if (defaultStep && possibleSteps.indexOf(defaultStep) !== -1) {
        this.selectedStepByTaskBean$jRb8.set(currentTaskName, defaultStep);
      } else {
        this.selectedStepByTaskBean$jRb8.set(currentTaskName, possibleSteps[0]);
      }
    } else {
      this.selectedStepByTaskBean$jRb8.set(currentTaskName, undefined);
    }
  }/*

  private*/ function createRadioGroups(forceReadOnlyValueExpression/*:ValueExpression*/)/*:Array*//*radiogroup*/ {
    var radioGroups/*:Array*/ = [];

    for (var taskName/*:String*/ in this.possibleStepsByTaskMap$jRb8) {
      var radioGroupItems/*:Array*/ = [];
      var radioButtonName/*:String*/ = this.getRadioButtonName$jRb8(taskName);

      radioGroupItems.push(this.createRadioButtonForTask$jRb8(radioButtonName, taskName));

      radioGroupItems.push(createArrow$static());

      for (var i/*:int*/ = 0; i < this.possibleStepsByTaskMap$jRb8[taskName].length; i++) {
        var step/*:String*/ = this.possibleStepsByTaskMap$jRb8[taskName][i];

        radioGroupItems.push(this.createRadioButton$jRb8(radioButtonName, step,
                this.createDisabledExpressionForTask$jRb8(taskName, forceReadOnlyValueExpression)));
      }

      radioGroups.push(this.createRadioGroup$jRb8(taskName, radioGroupItems,
              com.coremedia.ui.data.ValueExpressionFactory.create(taskName, this.selectedStepByTaskBean$jRb8)));
    }
    return radioGroups;
  }/*

  private*/ function getRadioButtonName(taskName/*:String*/)/*:String*/ {
    return this.getId() + '_' + taskName;
  }/*

  private*/ function createDisabledExpressionForTask(taskName/*:String*/,
                                                   forceReadOnlyValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      return forceReadOnlyValueExpression && forceReadOnlyValueExpression.getValue() &&
              taskName === this$.currentTaskNameExpression$jRb8.getValue();
    });
  }/*

  private*/ function createRadioButtonForTask(name/*:String*/, taskName/*:String*/)/*:Radio*/ {
    var radioCfg/*:Radio*/ = AS3.cast(Ext.form.field.Radio,{});
    radioCfg.name = name;
    radioCfg.inputValue = taskName;
    radioCfg.itemId = taskName;
    radioCfg.hideLabel = true;
    AS3.setBindable(radioCfg,"boxLabel" , com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getWorkflowStateDisplayName(this.processDefinitionName$jRb8, taskName));
    AS3.setBindable(radioCfg,"disabled" , true);
    return radioCfg;
  }/*

  private static*/ function createArrow$static()/*:IconDisplayField*/ {
    var iconDisplayFieldCfg/*:IconDisplayField*/ = AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(iconDisplayFieldCfg,"iconCls" , com.coremedia.icons.CoreIcons_properties.INSTANCE.prioritize_down);
    iconDisplayFieldCfg.ui = com.coremedia.ui.skins.DisplayFieldSkin.INFO.getSkin();
    AS3.setBindable(iconDisplayFieldCfg,"margin" , '0 0 0 -2');
    return iconDisplayFieldCfg;
  }/*

  private*/ function createRadioButton(name/*:String*/, step/*:String*/, offeredStepValueExpression/*:ValueExpression*/)/*:Radio*/ {
    var radioCfg/*:Radio*/ = AS3.cast(Ext.form.field.Radio,{});
    radioCfg.name = name;
    radioCfg.inputValue = step;
    radioCfg.itemId = step;
    radioCfg.hideLabel = true;
    AS3.setBindable(radioCfg,"boxLabel" , com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getWorkflowStateDisplayName(this.processDefinitionName$jRb8, step));
    var bindPropertyPluginCfg/*:BindPropertyPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    bindPropertyPluginCfg.bindTo = offeredStepValueExpression;
    bindPropertyPluginCfg.componentProperty = "disabled";
    radioCfg.plugins = [bindPropertyPluginCfg];
    return radioCfg;
  }/*

  private*/ function createRadioGroup(taskName/*:String*/, items/*:Array*/, nextStepExpression/*:ValueExpression*/)/*:RadioGroup*/ {var this$=this;
    var radioGroupCfg/*:RadioGroup*/ = AS3.cast(Ext.form.RadioGroup,{});
    radioGroupCfg.itemId = taskName;
    radioGroupCfg.columns = 1;
    radioGroupCfg.items = items;

    // read the checked radio buttons from radio group using getChecked()
    var readFromCompCfg/*:BindPropertyPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    readFromCompCfg.bidirectional = true;
    readFromCompCfg.bindTo = nextStepExpression;
    readFromCompCfg.componentProperty = 'checked';
    readFromCompCfg.skipIfUndefined = true;
    readFromCompCfg.reverseTransformer = function (radios/*:Array*/)/*:Object*/ {
      var radio/*:Radio*/ = radios && radios.length > 0 && radios[0];
      if (radio && radio.up()) {
        // CMS-11330: We must not use radio.getGroupValue() here, as the state is not predictable while
        // switching checked/unchecked states within the radio-group. At a certain point in time there will
        // be two checked radio-buttons and only the first one is considered in radio.getGroupValue().
        var groupValue/*:Object*/ = (AS3.as(radio.up(),  Ext.form.RadioGroup)).getValue();
        return groupValue ? groupValue[AS3.getBindable(radio,"name","DUMMY")] : null;
      } else {
        return undefined;
      }
    };

    // write the selected step to the radio group using setValue()
    var writeToCompCfg/*:BindPropertyPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    writeToCompCfg.bidirectional = false;
    writeToCompCfg.bindTo = nextStepExpression;
    writeToCompCfg.componentProperty = 'value';
    writeToCompCfg.skipIfUndefined = true;
    writeToCompCfg.transformer = function (step/*:String*/)/*:Object*/ {
      var value/*:Object*/ = {};
      value[this$.getRadioButtonName$jRb8(taskName)] = step;
      return value;
    };
    radioGroupCfg.plugins = [readFromCompCfg, writeToCompCfg];
    return radioGroupCfg;
  }/*

  public*/ function registerProcessTaskOperationExitFunctions()/*:void*/ {var this$=this;
    var inboxDetailPanelWrapperCmp/*:InboxDetailPanelWrapper*/ =AS3.as( this.findParentByType(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.xtype),  com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper);
    if (inboxDetailPanelWrapperCmp) {
      var exitFunctions/*:Object*/ = {};
      exitFunctions["*"] = {
        "*": {
          complete: {
            before: [function (t/*:Task*/, c/*:Container*/, callback/*:Function*/)/*:void*/ {
              this$.persistentNextStepExpression$jRb8.setValue(this$.selectedStepByTaskBean$jRb8.get(this$.currentTaskNameExpression$jRb8.getValue()));
              callback();
            }]
          }
        }
      };
      inboxDetailPanelWrapperCmp.registerProcessTaskOperationExitFunctions(exitFunctions);
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.currentTaskNameExpression$jRb8.removeChangeListener(AS3.bind(this,"selectFirstPossibleStepForCurrentTask$jRb8"));
    com.coremedia.ui.components.SwitchingContainer.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.SwitchingContainer",
      processDefinitionName$jRb8: null,
      currentTaskNameExpression$jRb8: null,
      persistentNextStepExpression$jRb8: null,
      possibleStepsByTaskMap$jRb8: null,
      defaultStepsByTaskMap$jRb8: null,
      selectedStepByTaskBean$jRb8: null,
      constructor: WorkflowStatePanelBase$,
      super$jRb8: function() {
        com.coremedia.ui.components.SwitchingContainer.prototype.constructor.apply(this, arguments);
      },
      selectFirstPossibleStepForCurrentTask$jRb8: selectFirstPossibleStepForCurrentTask,
      createRadioGroups$jRb8: createRadioGroups,
      getRadioButtonName$jRb8: getRadioButtonName,
      createDisabledExpressionForTask$jRb8: createDisabledExpressionForTask,
      createRadioButtonForTask$jRb8: createRadioButtonForTask,
      createRadioButton$jRb8: createRadioButton,
      createRadioGroup$jRb8: createRadioGroup,
      registerProcessTaskOperationExitFunctions: registerProcessTaskOperationExitFunctions,
      beforeDestroy: beforeDestroy,
      requires: [
        "Ext",
        "Ext.form.RadioGroup",
        "Ext.form.field.Radio",
        "com.coremedia.cap.common.CapTypePropertyNames",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.workflow.TaskPropertyNames",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils"
      ]
    };
});
