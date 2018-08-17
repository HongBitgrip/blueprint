Ext.define("com.coremedia.blueprint.base.queryeditor.components.DocumentTypesFormBase", function(DocumentTypesFormBase) {/*package com.coremedia.blueprint.base.queryeditor.components {

import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;
import ext.form.field.Checkbox;
import ext.util.MixedCollection;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class DocumentTypesFormBase extends PropertyFieldGroup {

  [ArrayElementType("String")]
  private var documentTypes:Array;
  private var propertyName:String;
  private var readOnlyValueExpression:ValueExpression;
  private var propertyValueExpression:ValueExpression;
  private var allCheckbox:Checkbox;
  private var typeCheckboxesParent:Container;
  private var dcqe:ContentQueryForm;
  private var selectedLocal:SelectedLocal;
  private var localModel:Bean =*/function localModel_(){this.localModel$DQ60=( com.coremedia.ui.data.beanFactory.createLocalBean({}));}/*;
  private var triggeredByAllCheckbox:Boolean;
  private var triggeredByIndividualCheckbox:Boolean;

  private const SELECTED_TYPES:String =*/function SELECTED_TYPES_(){this.SELECTED_TYPES$DQ60=( SelectedLocal$static.SELECTED_TYPES);}/*;

  public*/ function DocumentTypesFormBase$(config/*:DocumentTypesForm = null*/) {if(arguments.length<=0)config=null;
    this.super$DQ60(AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup,Ext.apply({}, config)));localModel_.call(this);SELECTED_TYPES_.call(this);;
    this.documentTypes$DQ60 = AS3.getBindable(config,"documentTypes");
    this.readOnlyValueExpression$DQ60 = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo","DUMMY"),
            AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
    this.propertyName$DQ60 = AS3.getBindable(config,"propertyName");
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.afterRender.call(this);

    if (this.itemsAreLazy()) {
      this.on(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT,AS3.bind( this,"doInit$DQ60"));
    } else {
      this.doInit$DQ60();
    }

    AS3.getBindable(this,"bindTo","DUMMY").addChangeListener(AS3.bind(this,"doInit$DQ60"));
  }/*

  // called when lazy items are added and component is rendered
  private*/ function doInit()/*:void*/ {var this$=this;
    this.selectedLocal$DQ60 = this.initSelectedLocal$DQ60();
    this.renderTypes$DQ60();

    //select all by default
    if ((AS3.as(this.localModel$DQ60.get(this.SELECTED_TYPES$DQ60),  Array)).length === 0) {
      this.localModel$DQ60.set(this.SELECTED_TYPES$DQ60, this.documentTypes$DQ60);
    }

    this.propertyValueExpression$DQ60 = this.getContentQueryEditor$DQ60().getDocumentTypesRemote();
    this.propertyValueExpression$DQ60.addChangeListener(AS3.bind(this,"selectedFromRemoteChanged$DQ60"));
    this.selectedFromRemoteChanged$DQ60(this.propertyValueExpression$DQ60); // trigger loading stored values

    this.mon(this.getAllCheckbox$DQ60(), 'change',AS3.bind( this,"onAllCheckboxChange$DQ60"));
    Ext.each(this.getTypeCheckboxes$DQ60().getRange(), function (checkbox/*:Checkbox*/)/*:void*/ {
      this$.mon(checkbox, 'change', function (checkbox/*:Checkbox*/)/*:void*/ {
        var numberOfChecked/*:Number*/ = (AS3.as(this$.getTypeCheckboxes$DQ60(),  Ext.util.MixedCollection)).filterBy(function (checkbox/*:Checkbox*/)/*:Boolean*/ {
          return checkbox.checked;
        }).length;

        this$.updateModel$DQ60(checkbox);

        //check the "all checkbox" if every type checkbox is checked, uncheck otherwise
        if (!this$.triggeredByAllCheckbox$DQ60) {
          this$.triggeredByIndividualCheckbox$DQ60 = true;
          this$.getAllCheckbox$DQ60().setValue(numberOfChecked === this$.getTypeCheckboxes$DQ60().length);
          this$.triggeredByIndividualCheckbox$DQ60 = false;
        }
      });
    }, null);

    //disable checkboxes if checked out by other
    // and calls custom function when the value changes.
    this.readOnlyValueExpression$DQ60.addChangeListener(AS3.bind(this,"enableOrDisable$DQ60"));
    this.enableOrDisable$DQ60(this.readOnlyValueExpression$DQ60);
  }/*

  /**
   * @return collection-like object for managing selected types in the local bean
   * /
  private*/ function initSelectedLocal()/*:**/ {
    this.localModel$DQ60.set(this.SELECTED_TYPES$DQ60, []);
    this.localModel$DQ60.addPropertyChangeListener(this.SELECTED_TYPES$DQ60,AS3.bind( this,"onSelectedTypesChange$DQ60"));
    return new SelectedLocal$static(this.localModel$DQ60);
  }/*

  private*/ function onSelectedTypesChange(e/*:PropertyChangeEvent*/)/*:void*/ {
    this.getContentQueryEditor$DQ60().updateApplicableConditions(e.newValue);
  }/*

  private*/ function renderTypes()/*:void*/ {
    var typeCheckboxes/*:**/ = this.getTypeCheckboxes$DQ60(),
    //typCheckboxes are either instance of MixedCollection or Array
            addMethod/*:Function*/ = typeCheckboxes instanceof Ext.util.MixedCollection ? typeCheckboxes.add : typeCheckboxes.push;

    this.documentTypes$DQ60.forEach(function (documentType/*:String*/)/*:void*/ {
      var checkboxCfg/*:Checkbox*/ = AS3.cast(Ext.form.field.Checkbox,{});
      AS3.setBindable(checkboxCfg,"boxLabel" , typeNameToString$static(documentType));
      checkboxCfg.name = documentType;
      checkboxCfg.checked = true;
      addMethod.call(typeCheckboxes, Ext.ComponentManager.create(checkboxCfg));
    });
    this.updateLayout();
  }/*

  /**
   * Updates local model when a checkbox changes value and syncs the new value to the server.
   *
   * @param checkbox checkbox component that was changed
   * /
  private*/ function updateModel(checkbox/*:Checkbox*/)/*:void*/ {
    // check if change from the UI is already present in the local model:
    // (this happens when checkbox change listeners are triggered upon update from remote)
    var checkBoxName/*:String*/ = checkbox.getName();
    if (checkbox.checked !== this.selectedLocal$DQ60.contains(checkBoxName)) {
      checkbox.checked ? this.selectedLocal$DQ60.add(checkBoxName) : this.selectedLocal$DQ60.remove(checkBoxName);
      var selectedLocalArray/*:Array*/ = this.selectedLocal$DQ60.asArray();
      if (selectedLocalArray.length) {
        this.propertyValueExpression$DQ60.setValue(serialize$static(selectedLocalArray));
      } else {
        var fq/*:Struct*/ =AS3.as( this.propertyValueExpression$DQ60.getParent().getValue(),  com.coremedia.cap.struct.Struct);
        if (fq && fq.getType().hasProperty(this.propertyName$DQ60)) {
          this.propertyValueExpression$DQ60.setValue('');
        }
      }
    }
  }/*

  /**
   * Updates checkboxes when the selected document types come from the system.
   *
   * @param selectedFromRemote array of selected document types
   * /
  private*/ function updateUI(selectedFromRemote/*:Array*/)/*:void*/ {var this$=this;
    if (this.getTypeCheckboxes$DQ60()["items"]) {
      this.selectedLocal$DQ60.setTypes(selectedFromRemote);
      Ext.each(this.getTypeCheckboxes$DQ60()["items"], function (checkbox/*:Checkbox*/)/*:void*/ {
        var selected/*:Boolean*/ = this$.selectedLocal$DQ60.contains(checkbox.getName());
        checkbox.setValue(selected);
      }, null);
      this.getAllCheckbox$DQ60().setValue(this.selectedLocal$DQ60.asArray().length === this.getTypeCheckboxes$DQ60().length);
    } else {
      //document type checkboxes weren't rendered yet, do nothing until they are rendered
    }
  }/*

  /**
   * Translate to the text representation stored in the query remote bean.
   * /
  private static*/ function serialize$static(selectedDocumentTypes/*:Array*/)/*:String*/ {
    return selectedDocumentTypes.join(",");
  }/*

  /**
   * Translate from assistant view format.
   * /
  private static*/ function deserialize$static(selectedDocumentTypes/*:String*/)/*:Array*/ {
    if(selectedDocumentTypes === undefined || selectedDocumentTypes === null) {
      return null;
    }
    var split/*:Array*/ = selectedDocumentTypes.split(",");
    return split.length > 1 || split[0] != '' ? split : [];
  }/*

  private*/ function selectedFromRemoteChanged(source/*:ValueExpression*/)/*:void*/ {
    var selectedFromRemote/*:**/ = source.getValue();
    // if the remote and local version are the same, there is no need to update UI
    if (selectedFromRemote !== undefined && selectedFromRemote !== null &&
            selectedFromRemote !== serialize$static(this.selectedLocal$DQ60.asArray())) {
      this.updateUI$DQ60(deserialize$static(selectedFromRemote));
    }
  }/*

  private*/ function onAllCheckboxChange(checkboxAll/*:Checkbox*/)/*:void*/ {
    if (!this.triggeredByIndividualCheckbox$DQ60) {
      this.triggeredByAllCheckbox$DQ60 = true;
      Ext.each(this.getTypeCheckboxes$DQ60()["items"], function (checkbox/*:Checkbox*/)/*:void*/ {
        checkbox.setValue(checkboxAll.checked);
      }, this);
      this.triggeredByAllCheckbox$DQ60 = false;
    }
  }/*

  private*/ function enableOrDisable(valueExpression/*:ValueExpression*/)/*:void*/ {
    var readOnly/*:Boolean*/ = valueExpression.getValue();
    var enableOrDisable/*:String*/;

    if (readOnly !== undefined && readOnly !== null) {
      enableOrDisable = readOnly ? 'disable' : 'enable';
      this.getAllCheckbox$DQ60()[enableOrDisable]();
      this.getTypeCheckboxes$DQ60().each(function (checkbox/*:Checkbox*/)/*:void*/ {
        checkbox[enableOrDisable]();
      });
    }
  }/*


  private*/ function getAllCheckbox()/*:Checkbox*/ {
    if (!this.allCheckbox$DQ60) {
      this.allCheckbox$DQ60 =AS3.as( this.queryById('all'),  Ext.form.field.Checkbox);
    }
    return AS3.as( this.allCheckbox$DQ60,  Ext.form.field.Checkbox);
  }/*

  private*/ function getTypeCheckboxesParent()/*:Container*/ {
    if (!this.typeCheckboxesParent$DQ60) {
      this.typeCheckboxesParent$DQ60 =AS3.as( this.queryById('types'),  Ext.container.Container);
    }
    return AS3.as( this.typeCheckboxesParent$DQ60,  Ext.container.Container);
  }/*

  private*/ function getTypeCheckboxes()/*:MixedCollection*/ {
    return this.getTypeCheckboxesParent$DQ60().itemCollection;
  }/*

  private*/ function getContentQueryEditor()/*:ContentQueryForm*/ {
    if (!this.dcqe$DQ60) {
      this.dcqe$DQ60 =AS3.as( this.findParentByType(com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm),  com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm);
    }
    return this.dcqe$DQ60;
  }/*

  private static*/ function typeNameToString$static(name/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_document_types_' + name) || name;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.onDestroy.call(this);
    AS3.getBindable(this,"bindTo","DUMMY").removeChangeListener(AS3.bind(this,"doInit$DQ60"));
    this.localModel$DQ60.removePropertyChangeListener(this.SELECTED_TYPES$DQ60,AS3.bind( this,"onSelectedTypesChange$DQ60"));
    this.propertyValueExpression$DQ60 && this.propertyValueExpression$DQ60.removeChangeListener(AS3.bind(this,"selectedFromRemoteChanged$DQ60"));
    this.readOnlyValueExpression$DQ60.removeChangeListener(AS3.bind(this,"enableOrDisable$DQ60"));
  }/*
}

/**
 * collection-like object for managing selected types in the local bean
 * /
class SelectedLocal {
  public static const SELECTED_TYPES:String = 'selectedTypes';

  private var localModel:Bean;

  public*/ function SelectedLocal$(localModel/*:Bean*/) {
    this.localModel$ET62 = localModel;
  }/*

  public*/ function getLocalModel()/*:Bean*/ {
    return this.localModel$ET62;
  }/*

  public*/ function setTypes(selectedTypes/*:Array*/)/*:void*/ {
    this.getLocalModel().set(SelectedLocal$static.SELECTED_TYPES, selectedTypes);
  }/*

  public*/ function add(selectedType/*:String*/)/*:void*/ {
    var st/*:Array*/ = this.asArray(true); //we need a copy to trigger the change listener
    st.push(selectedType);
    this.getLocalModel().set(SelectedLocal$static.SELECTED_TYPES, st);
  }/*

  public*/ function remove(selectedType/*:String*/)/*:void*/ {
    var st/*:Array*/ = this.asArray(true); //we need a copy to trigger the change listener
    st.splice(st.indexOf(selectedType), 1);
    this.getLocalModel().set(SelectedLocal$static.SELECTED_TYPES, st);
  }/*

  public*/ function contains(selectedType/*:String*/)/*:Boolean*/ {
    var st/*:Array*/ = this.asArray();
    return st.indexOf(selectedType) !== -1;
  }/*

  public*/ function asArray(copy/*:Boolean = false*/)/*:Array*/ {if(arguments.length<=0)copy=false;
    var st/*:Array*/ =AS3.as( this.getLocalModel().get(SelectedLocal$static.SELECTED_TYPES),  Array);
    return copy ? st.slice(0) : st;
  }/*
}*/var SelectedLocal$static = Ext.define(null, {localModel$DQ60: null,constructor: SelectedLocal$,getLocalModel: getLocalModel,setTypes: setTypes,add: add,remove: remove,contains: contains,asArray: asArray,statics: {SELECTED_TYPES: 'selectedTypes'}});/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      documentTypes$DQ60: null,
      propertyName$DQ60: null,
      readOnlyValueExpression$DQ60: null,
      propertyValueExpression$DQ60: null,
      allCheckbox$DQ60: null,
      typeCheckboxesParent$DQ60: null,
      dcqe$DQ60: null,
      selectedLocal$DQ60: null,
      triggeredByAllCheckbox$DQ60: false,
      triggeredByIndividualCheckbox$DQ60: false,
      constructor: DocumentTypesFormBase$,
      super$DQ60: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      doInit$DQ60: doInit,
      initSelectedLocal$DQ60: initSelectedLocal,
      onSelectedTypesChange$DQ60: onSelectedTypesChange,
      renderTypes$DQ60: renderTypes,
      updateModel$DQ60: updateModel,
      updateUI$DQ60: updateUI,
      selectedFromRemoteChanged$DQ60: selectedFromRemoteChanged,
      onAllCheckboxChange$DQ60: onAllCheckboxChange,
      enableOrDisable$DQ60: enableOrDisable,
      getAllCheckbox$DQ60: getAllCheckbox,
      getTypeCheckboxesParent$DQ60: getTypeCheckboxesParent,
      getTypeCheckboxes$DQ60: getTypeCheckboxes,
      getContentQueryEditor$DQ60: getContentQueryEditor,
      onDestroy: onDestroy,
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.form.field.Checkbox",
        "Ext.util.MixedCollection",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm"]
    };
});
