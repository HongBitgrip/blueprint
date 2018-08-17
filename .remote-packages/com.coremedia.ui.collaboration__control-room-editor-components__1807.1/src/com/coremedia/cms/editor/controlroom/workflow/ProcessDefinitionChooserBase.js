Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessDefinitionChooserBase", function(ProcessDefinitionChooserBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;

import ext.data.Model;
import ext.form.field.ComboBox;

public class ProcessDefinitionChooserBase extends LocalComboBox {

  [Bindable]
  public var selectedProcessDefinitionExpression:ValueExpression;

  [Bindable]
  public var availableProcessDefinitions:Array;

  private var index:int = 0;

  public*/ function ProcessDefinitionChooserBase$(config/*:ProcessDefinitionChooser = null*/) {if(arguments.length<=0)config=null;
    this.super$AhFT(config);

    // initial workflow name selection, later when saved in browser storage, the applyState function overrides this value
    AS3.getBindable(this,"selectedProcessDefinitionExpression").setValue(AS3.getBindable(config,"availableProcessDefinitions")[0]);

    this.on("select",AS3.bind( this,"handleSelect$AhFT"));
  }/*

  internal*/ function createStoreData(availableProcessDefinitions/*:Array*/)/*:Array*/ {
    return availableProcessDefinitions.map(function (processDefinitionName/*:String*/)/*:Object*/ {
      return {
        'id': processDefinitionName,
        'displayName': com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getProcessDefinitionDisplayName(processDefinitionName)
      };
    });
  }/*

  /**
   * Retrieve that part of the chooser state that has to
   * be persisted. The returned state object is applied to the
   * chooser component at the next Studio start.
   *
   * @return the state object
   * /
  override public*/ function getState()/*:Object*/ {
    return {
      index: this.index$AhFT
    };
  }/*

  /**
   * Applies the state returned by {@link #getState} to this chooser.
   * /
  override public*/ function applyState(state/*:Object*/)/*:void*/ {
    this.index$AhFT = state.index;
    AS3.getBindable(this,"selectedProcessDefinitionExpression").setValue(AS3.getBindable(this,"availableProcessDefinitions")[state.index]);
  }/*

  /**
   * Handler for the select event.
   *
   * @param combo this combo box
   * @param record a record
   * /
  private*/ function handleSelect(combo/*:ComboBox*/, record/*:Model*/)/*:void*/ {
    this.index$AhFT = record.store.indexOf(record);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      index$AhFT: 0,
      constructor: ProcessDefinitionChooserBase$,
      super$AhFT: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      createStoreData: createStoreData,
      getState: getState,
      applyState: applyState,
      handleSelect$AhFT: handleSelect,
      config: {
        selectedProcessDefinitionExpression: null,
        availableProcessDefinitions: null
      },
      requires: ["com.coremedia.ui.components.LocalComboBox"],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils"]
    };
});
