Ext.define("com.coremedia.personalization.ui.editors.ConditionsEditorBaseBase", function(ConditionsEditorBaseBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.personalization.ui.util.RuleXMLCoDec;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ArrayUtils;

import ext.panel.Panel;

/**
 * Base class of the segment conditions editor. It's a thin wrapper around a ConditionsPanel that provides a bean
 * for storing the string-representation of segment conditions. The bean is the model for the contained ConditionsPanel.
 * /
class ConditionsEditorBaseBase extends Panel {

  private static const*/var CONDITIONS_PROPERTY$static/*:String*/ = 'conditions';/*

  private var internalModel:Bean;
  private var conditionsPanelComponent:ConditionsPanel;

  private var conditionItems:Array;

  /**
   * @cfg {Object} conditionItems the condition items to be supplied to the contained ConditionsPanel
   * /
  public*/ function ConditionsEditorBaseBase$(config/*:ConditionsEditorBase = null*/) {if(arguments.length<=0)config=null;
    this.addConditionItems(com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"conditionItems")));

    this.super$JaJf(config);
    var conditionsPanelCfg/*:ConditionsPanel*/ = AS3.cast(com.coremedia.personalization.ui.editors.ConditionsPanel,{});
    AS3.setBindable(conditionsPanelCfg,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.create('', this.getInternalModel$JaJf()));
    AS3.setBindable(conditionsPanelCfg,"propertyName" , CONDITIONS_PROPERTY$static);
    AS3.setBindable(conditionsPanelCfg,"readOnlyPropertyName" , 'readOnly');
    AS3.setBindable(conditionsPanelCfg,"hidden" , true);
    AS3.setBindable(conditionsPanelCfg,"conditionItems" , this.getConditionItems());
    this.conditionsPanelComponent$JaJf = this.add(conditionsPanelCfg);
    this.conditionsPanelComponent$JaJf.addListener('modified',AS3.bind( this,"onConditionsChange$JaJf"));
  }/*

  private*/ function getInternalModel()/*:Bean*/ {
    if (!this.internalModel$JaJf) {
      this.internalModel$JaJf = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().createLocalBean({'readOnly': false});
    }
    return this.internalModel$JaJf;
  }/*

  private*/ function initialized()/*:void*/ {
    if(this.rendered){
      this.initializedAndRendered$JaJf();
    } else {
      this.addListener('afterrender',AS3.bind(this,"initializedAndRendered$JaJf"));
    }
  }/*

  private*/ function initializedAndRendered()/*:void*/ {
    this.removeListener('afterrender',AS3.bind(this,"initializedAndRendered$JaJf"));
    this['getValue'] =AS3.bind( this,"getValueWhenInitialized");
    this['setValue'] =AS3.bind( this,"setValueWhenInitialized$JaJf");
    this.getComponent("loadingInfo").hide();
    this.conditionsPanelComponent$JaJf.show();
  }/*

  private*/ function onConditionsChange(pathExpression/*:ValueExpression*/)/*:void*/ {
    this.fireEvent('change', this);
  }/*

  public*/ function getConditionItems()/*:Array*/ {
    if (!this.conditionItems$JaJf) {
      this.conditionItems$JaJf = [];
    }
    return this.conditionItems$JaJf;
  }/*

  public*/ function addConditionItems(items/*:Array*/)/*:void*/ {
    if (items) {
      for (var i/*:int*/ = 0; i < items.length; i++) {
        this.getConditionItems().push(items[i]);
      }
    }
  }/*

  public*/ function setValue(val/*:String*/)/*:void*/ {
    this.setValueWhenInitialized$JaJf(val);
    this.initialized$JaJf();
  }/*

  private*/ function setValueWhenInitialized(val/*:String*/)/*:void*/ {
    var rulesFromXML/*:String*/ = com.coremedia.personalization.ui.util.RuleXMLCoDec.rulesFromXML(val);
    this.getInternalModel$JaJf().set(CONDITIONS_PROPERTY$static, rulesFromXML);
  }/*

  public*/ function getValue()/*:String*/ {
    return "NOT_INITIALIZED";
  }/*

  internal*/ function getValueWhenInitialized()/*:String*/ {/*
    const*/var conditions/*:String*/ = this.getInternalModel$JaJf().get(CONDITIONS_PROPERTY$static);
    return conditions ? com.coremedia.personalization.ui.util.RuleXMLCoDec.xmlFromRules(conditions) : null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      internalModel$JaJf: null,
      conditionsPanelComponent$JaJf: null,
      conditionItems$JaJf: null,
      constructor: ConditionsEditorBaseBase$,
      super$JaJf: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getInternalModel$JaJf: getInternalModel,
      initialized$JaJf: initialized,
      initializedAndRendered$JaJf: initializedAndRendered,
      onConditionsChange$JaJf: onConditionsChange,
      getConditionItems: getConditionItems,
      addConditionItems: addConditionItems,
      setValue: setValue,
      setValueWhenInitialized$JaJf: setValueWhenInitialized,
      getValue: getValue,
      getValueWhenInitialized: getValueWhenInitialized,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.ConditionsPanel",
        "com.coremedia.personalization.ui.util.RuleXMLCoDec"
      ]
    };
});
