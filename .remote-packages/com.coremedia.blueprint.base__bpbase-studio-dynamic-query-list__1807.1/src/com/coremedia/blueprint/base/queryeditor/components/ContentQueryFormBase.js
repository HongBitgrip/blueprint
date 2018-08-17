Ext.define("com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase", function(ContentQueryFormBase) {/*package com.coremedia.blueprint.base.queryeditor.components {

import com.coremedia.blueprint.base.queryeditor.conditions.ConditionEditorBase;
import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.struct.Struct;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;

import ext.container.Container;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditor')]
public class ContentQueryFormBase extends Container {
  public static const FQ_STRUCT_NAME:String = "fq";
  private static const*/var LOCAL_SETTINGS$static/*:String*/ = 'localSettings';/*

  /**
   * Enumeration of all common model properties.
   * /
  public static const MODEL_PROPERTIES:Object =*/function MODEL_PROPERTIES$static_(){ContentQueryFormBase.MODEL_PROPERTIES=( {
    APPLICABLE_CONDITIONS: "applicableConditions",
    APPLIED_CONDITIONS: "appliedConditions"
  });}/*;


  [Bindable]
  public var bindTo:ValueExpression;

  [Bindable]
  public var forceReadOnlyValueExpression:ValueExpression;

  private var commonModel:Bean;
  private var conditions:Array;
  private var conditionsPerDocumentType:Object;
  private var queryPropertyName:String;
  private var documentTypesPropertyName:String;

  public*/ function ContentQueryFormBase$(config/*:ContentQueryForm = null*/) {if(arguments.length<=0)config=null;
    this.super$mNTt(AS3.cast(com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm,config));
    this.conditions$mNTt = AS3.getBindable(config,"conditions");
    this.conditionsPerDocumentType$mNTt = getConditionsPerDocumentType$static(this.conditions$mNTt);
    AS3.getBindable(this,"bindTo").addChangeListener(AS3.bind(this,"maybeAddFilterQueryStruct$mNTt"));
    this.maybeAddFilterQueryStruct$mNTt();
    this.queryPropertyName$mNTt = AS3.getBindable(config,"queryPropertyName");
    this.documentTypesPropertyName$mNTt = AS3.getBindable(config,"documentTypesPropertyName");
  }/*

  private*/ function maybeAddFilterQueryStruct()/*:void*/ {
    //creates the mandatory fq struct if not available.
    //this may result in an automatic checkout for older empty query lists without fq struct
    var c/*:Content*/ = AS3.getBindable(this,"bindTo").getValue();
    c.load(function(cLoaded/*:Content*/)/*:void*/ {
      var localSettingsBean/*:StructRemoteBeanImpl*/ =AS3.as( cLoaded.getProperties().get(LOCAL_SETTINGS$static),  com.coremedia.cap.common.impl.StructRemoteBeanImpl);
      if (localSettingsBean) {
        localSettingsBean.load(function(localSettings/*:Struct*/)/*:void*/ {
          localSettingsBean.getType().addStructProperty(ContentQueryFormBase.FQ_STRUCT_NAME);
        });
      }
    });
  }/*

  /**
   * Common model used by the ContentQueryDocumentForm and all ContentQueryDocumentForm subcomponents.
   * /
  public*/ function getCommonModel()/*:Bean*/ {
    if (!this.commonModel$mNTt) {
      this.commonModel$mNTt = com.coremedia.ui.data.beanFactory.createLocalBean(initCommonModelTemplate$static());
    }
    return this.commonModel$mNTt;
  }/*

  /**
   * Gets the condition title based on its propertyName.
   * @param key A condition's propertyName.
   * @return Condition title.
   * /
  public static*/ function getConditionTitle$static(key/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.queryeditor.QueryEditor', 'DCQE_label_condition_' + key.replace('\.', '_')) || key;
  }/*

  /**
   * Update applicable conditions according to the selected document types.
   *
   * @param selectedDocumentTypes selected document types
   * /
  public*/ function updateApplicableConditions(selectedDocumentTypes/*:Array*/)/*:void*/ {
    var key/*:String*/ = ContentQueryFormBase.MODEL_PROPERTIES.APPLICABLE_CONDITIONS;
    var applicableConditions/*:Array*/ = this.calculateApplicableConditions$mNTt(selectedDocumentTypes);
    this.getCommonModel().set(key, applicableConditions);
  }/*

  public*/ function getConditionEditorConfigByXtype(xtype/*:String*/)/*:ConditionEditorBase*/ {
    var conditionEditorConfig/*:ConditionEditorBase*/;
    //TODO: convert to map for optimization
    for (var i/*:int*/ = 0; i < this.conditions$mNTt.length; i++) {
      conditionEditorConfig = this.conditions$mNTt[i];
      if (conditionEditorConfig.xtype == xtype) {
        return conditionEditorConfig;
      }
    }
    return null;
  }/*

  public*/ function getConditionEditorConfigs()/*:Array*/ {
    return this.conditions$mNTt;
  }/*

  /**
   * If the method is called from EXML, the constructor was not yet called, local fields will be undefined, thus config
   * object containing needed properties should be passed as argument.
   *
   * @param config
   * @return
   * /
  public*/ function getQuery(config/*:ContentQueryForm = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    var bve/*:ValueExpression*/ = config ? AS3.getBindable(config,"bindTo") : AS3.getBindable(this,"bindTo");
    var qpn/*:String*/ = config ? AS3.getBindable(config,"queryPropertyName") : this.queryPropertyName$mNTt;
    return bve.extendBy('properties', qpn);
  }/*


  public*/ function getFilterQuery(config/*:ContentQueryForm = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    return this.getQuery(config).extendBy(ContentQueryFormBase.FQ_STRUCT_NAME);
  }/*

  public*/ function getFilterQuerySubProperty(subpropertyName/*:String*/, config/*:ContentQueryForm = null*/)/*:ValueExpression*/ {if(arguments.length<=1)config=null;
    return this.getFilterQuery(config).extendBy(subpropertyName);
  }/*

  public*/ function getDocumentTypesRemote(config/*:ContentQueryForm = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    return this.getFilterQuerySubProperty(this.documentTypesPropertyName$mNTt, config);
  }/*

  /**
   * Extract all available document types from the conditionEditors' configuration.
   *
   * @param conditions conditionEditors' configuration
   * @return all available document types
   * /
  protected static*/ function getAllDocumentTypes$static(conditions/*:Array*/)/*:Array*/ {
    var allDocumentTypes/*:Array*/ = [];
    var condition/*:ConditionEditorBase*/;
    var documentType/*:String*/;

    for (var i/*:int*/ = 0; i < conditions.length; i++) {
      condition = conditions[i];
      for (var j/*:int*/ = 0; j < condition.documentTypes.length; j++) {
        documentType = condition.documentTypes[j];
        if (allDocumentTypes.indexOf(documentType) == -1) {
          allDocumentTypes.push(documentType);
        }
      }
    }
    return allDocumentTypes;
  }/*

  private*/ function calculateApplicableConditions(selectedDocumentTypes/*:Array*/)/*:Array*/ {
    var conditionsUnion/*:Array*/ = [];

    // get the union of all applicable conditions to any of the selected doctypes
    for (var i/*:int*/ = 0; i < selectedDocumentTypes.length; i++) {
      var selectedType/*:Object*/ = selectedDocumentTypes[i];
      var conditionsForType/*:Array*/ = this.conditionsPerDocumentType$mNTt[selectedType];
      for (var j/*:int*/ = 0; j < conditionsForType.length; j++) {
        var condition/*:ConditionEditorBase*/ = conditionsForType[j];
        if (conditionsUnion.indexOf(condition) === -1) {
          conditionsUnion.push(condition);
        }
      }
    }

    // remove the conditions not applicable to all selected doctypes
    var conditionsIntersection/*:Array*/ = conditionsUnion.slice(0);
    for (var k/*:int*/ = 0; k < conditionsUnion.length; k++) {
      condition = conditionsUnion[k];
      for (var l/*:int*/ = 0; l < selectedDocumentTypes.length; l++) {
        var selection/*:Object*/ = selectedDocumentTypes[l];
        conditionsForType = this.conditionsPerDocumentType$mNTt[selection];
        if (conditionsForType.indexOf(condition) === -1 && conditionsIntersection.indexOf(condition) !== -1) {
          conditionsIntersection.splice(conditionsIntersection.indexOf(condition), 1);
        }
      }
    }

    return conditionsIntersection;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"bindTo").removeChangeListener(AS3.bind(this,"maybeAddFilterQueryStruct$mNTt"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*

  private static*/ function getConditionsPerDocumentType$static(conditions/*:Array*/)/*:Object*/ {
    var condPDT/*:Object*/ = {};
    var condition/*:ConditionEditorBase*/;
    var conditionDocumentTypes/*:Array*/;
    var documentType/*:String*/;

    for (var i/*:Number*/ = 0; i < conditions.length; i++) {
      condition = conditions[i];
      conditionDocumentTypes = condition.documentTypes;
      for (var j/*:Number*/ = 0; j < conditionDocumentTypes.length; j++) {
        documentType = conditionDocumentTypes[j];
        if (!condPDT[documentType]) {
          condPDT[documentType] = [];
        }
        if (condPDT[documentType].indexOf(condition) == -1) {
          condPDT[documentType].push(condition);
        }
      }
    }
    return condPDT;
  }/*

  /*
   * Initializes template properties object used to create local bean common for all ContentQueryDocumentForm components.
   * /
  private static*/ function initCommonModelTemplate$static()/*:Object*/ {
    var props/*:Object*/ = {};
    props[ContentQueryFormBase.MODEL_PROPERTIES.APPLIED_CONDITIONS] = [];
    props[ContentQueryFormBase.MODEL_PROPERTIES.DOC_TYPES_EXPERT_EXPRESSION] = "";
    props[ContentQueryFormBase.MODEL_PROPERTIES.SORTING_EXPERT_EXPRESSION] = "";
    return props;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      commonModel$mNTt: null,
      conditions$mNTt: null,
      conditionsPerDocumentType$mNTt: null,
      queryPropertyName$mNTt: null,
      documentTypesPropertyName$mNTt: null,
      constructor: ContentQueryFormBase$,
      super$mNTt: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      maybeAddFilterQueryStruct$mNTt: maybeAddFilterQueryStruct,
      getCommonModel: getCommonModel,
      updateApplicableConditions: updateApplicableConditions,
      getConditionEditorConfigByXtype: getConditionEditorConfigByXtype,
      getConditionEditorConfigs: getConditionEditorConfigs,
      getQuery: getQuery,
      getFilterQuery: getFilterQuery,
      getFilterQuerySubProperty: getFilterQuerySubProperty,
      getDocumentTypesRemote: getDocumentTypesRemote,
      calculateApplicableConditions$mNTt: calculateApplicableConditions,
      onDestroy: onDestroy,
      config: {
        bindTo: null,
        forceReadOnlyValueExpression: null
      },
      statics: {
        FQ_STRUCT_NAME: "fq",
        MODEL_PROPERTIES: undefined,
        getConditionTitle: getConditionTitle$static,
        getAllDocumentTypes: getAllDocumentTypes$static,
        __initStatics__: function() {
          MODEL_PROPERTIES$static_();
        }
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.blueprint.base.queryeditor.QueryEditor_properties",
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.ui.data.beanFactory",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm"]
    };
});
