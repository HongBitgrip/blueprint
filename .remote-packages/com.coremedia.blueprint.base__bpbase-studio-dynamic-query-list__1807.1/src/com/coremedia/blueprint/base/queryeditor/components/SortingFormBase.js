Ext.define("com.coremedia.blueprint.base.queryeditor.components.SortingFormBase", function(SortingFormBase) {/*package com.coremedia.blueprint.base.queryeditor.components {

import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.form.field.ComboBox;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings')]
public class SortingFormBase extends PropertyFieldGroup {

  protected const FIELDS:String = "sortingFields";
  protected const SELECTED_FIELD:String = "selectedSortingField";
  protected const DIRECTIONS:String = "sortingDirections";
  protected const SELECTED_DIRECTION:String = "selectedSortingDirection";

  private var queryValueExpression:ValueExpression;
  private var sortingValueExpression:ValueExpression;
  private var readOnlyValueExpression:ValueExpression;
  private var propertyName:String;
  private var dcqe:ContentQueryForm;
  private var localModel:Bean;

  private var fieldsComboBox:ComboBox;
  private var directionComboBox:ComboBox;
  private var commonModel:Bean;

  public*/ function SortingFormBase$(config/*:SortingForm = null*/) {if(arguments.length<=0)config=null;
    this.super$AOwc(config);
    this.queryValueExpression$AOwc = AS3.getBindable(config,"queryVE");
    this.propertyName$AOwc = AS3.getBindable(config,"propertyName");
    this.sortingValueExpression$AOwc = this.queryValueExpression$AOwc.extendBy(this.propertyName$AOwc);
    this.readOnlyValueExpression$AOwc = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo","DUMMY"),
      AS3.getBindable(config,"forceReadOnlyValueExpression","DUMMY"));
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.afterRender.call(this);

    if (this.itemsAreLazy()) {
      this.on(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT,AS3.bind( this,"doInit"));
    } else {
      this.doInit();
    }
  }/*

  protected*/ function doInit()/*:void*/ {
    this.listenToModelChanges$AOwc();
  }/*

  private*/ function listenToModelChanges()/*:void*/ {
    var appliedConditionsKey/*:String*/ = com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.MODEL_PROPERTIES.APPLIED_CONDITIONS;

    //listen to selected field change
    this.getLocalModel().addPropertyChangeListener(this.SELECTED_FIELD,AS3.bind( this,"onSelectedFieldChange$AOwc"));
    //listen to selected direction change
    this.getLocalModel().addPropertyChangeListener(this.SELECTED_DIRECTION,AS3.bind( this,"onSelectedDirectionChange$AOwc"));

    //listen to remote bean changes
    this.sortingValueExpression$AOwc.addChangeListener(AS3.bind(this,"updateLocalModel$AOwc"));
    //it's important to populate local model with remote values first
    this.updateLocalModel$AOwc(this.sortingValueExpression$AOwc);

    //listen to applied conditions change
    this.getCommonModel$AOwc().addPropertyChangeListener(appliedConditionsKey,AS3.bind( this,"onAppliedChange$AOwc"));
    this.updateFields$AOwc(); //initial state

    this.readOnlyValueExpression$AOwc.addChangeListener(AS3.bind(this,"enableOrDisable$AOwc"));
  }/*

  private*/ function enableOrDisable(valueExpression/*:ValueExpression*/)/*:void*/ {
    var isCheckedOutByOther/*:Boolean*/ = valueExpression.getValue();
    if (isCheckedOutByOther) {
      this.getFieldsComboBox$AOwc().disable();
      this.getDirectionComboBox$AOwc().disable();
    }
  }/*

  private*/ function onAppliedChange()/*:void*/ {
    this.updateFields$AOwc();
  }/*

  /**
   * Fired when the sort combo box is changed.
   * So sorting is only persisted in combination with the sorting order.
   * Therefore we have to apply the sort order too if no direction is already given.
   * This ensures that the actual struct property is written.
   * Otherwise the user may first change the sort order (after opening the document) and
   * the change won't result in an automatic checkout. Therefore the change won't be persisted.
   * /
  private*/ function onSelectedFieldChange()/*:void*/ {
    this.updateDirections$AOwc();

    var direction/*:String*/ = this.getLocalModel().get(this.SELECTED_DIRECTION);
    //check if the direction is already given, if not apply the first value as default.
    if(!direction) {
      direction = this.sortingValueExpression$AOwc.getValue();
      if(direction && direction.indexOf(" ") !== -1) {
        direction = direction.split(" ")[1];
      }
      else {
        direction = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'sort_direction_asc');
      }
    }

    //applying a concrete direction value here will ensure that the struct property is updated.
    this.updateRemoteBeanAndSerializedExpression$AOwc(direction);
  }/*

  private*/ function onSelectedDirectionChange(e/*:PropertyChangeEvent*/)/*:void*/ {
    this.updateRemoteBeanAndSerializedExpression$AOwc(e.newValue);
  }/*

  private*/ function updateFields()/*:void*/ {
    if (this.readOnlyValueExpression$AOwc.getValue()) {
      this.getFieldsComboBox$AOwc().disable();
      this.getDirectionComboBox$AOwc().disable();
    }

    if (!this.readOnlyValueExpression$AOwc.getValue()) {
      this.getFieldsComboBox$AOwc().enable();
      this.getDirectionComboBox$AOwc().enable();
    }
  }/*


  /**
   * It may look like this method produces the same results regardless of the selected field, but it will trigger UI
   * update of the direction combo box, which will contain different texts for different fields selected.
   * /
  private*/ function updateDirections()/*:void*/ {
    var directions/*:Array*/ = [];
    directions.push(com.coremedia.ui.data.beanFactory.createLocalBean({'name':'asc'}));
    directions.push(com.coremedia.ui.data.beanFactory.createLocalBean({'name':'desc'}));

    if (this.readOnlyValueExpression$AOwc.getValue()) {
      this.getDirectionComboBox$AOwc().disable();
      this.getFieldsComboBox$AOwc().disable();
    }

    this.getLocalModel().set(this.DIRECTIONS, directions);

    //if none of the fields are selected, directions should be disabled
    if (!this.readOnlyValueExpression$AOwc.getValue()) {
      this.getDirectionComboBox$AOwc().enable();
      this.getFieldsComboBox$AOwc().enable();
    }
  }/*

  /**
   * Updates the sorting part of the query in the remote bean and a serialized value expression used in the advanced
   * mode.
   *
   * @param direction sorting direction value
   * /
  private*/ function updateRemoteBeanAndSerializedExpression(direction/*:String*/)/*:void*/ {var this$=this;
    var field/*:String*/ = this.getLocalModel().get(this.SELECTED_FIELD);
    var oldSerializedValue/*:String*/ = this.sortingValueExpression$AOwc.getValue();
    var newSerializedValue/*:String*/ = serialize$static(field, direction);

    if (oldSerializedValue != newSerializedValue) {
      if (newSerializedValue) {
        this.sortingValueExpression$AOwc.setValue(newSerializedValue);
      } else if (!field && !direction) {
        this.queryValueExpression$AOwc.loadValue(function (fq/*:StructRemoteBeanImpl*/)/*:void*/ {
          fq.getType().removeProperty(this$.propertyName$AOwc);
        });
      }
    }
  }/*

  private*/ function updateLocalModel(source/*:ValueExpression*/)/*:void*/ {
    var value/*:**/ = source.getValue();
    var fieldAndDirection/*:Object*/;
    var oldSerializedValue/*:String*/ = serialize$static(
      this.getLocalModel().get(this.SELECTED_FIELD),
      this.getLocalModel().get(this.SELECTED_DIRECTION)
    );

    if (value && oldSerializedValue != value) {
      fieldAndDirection = deserialize$static(value);
      this.getLocalModel().set(this.SELECTED_FIELD, fieldAndDirection.field);
      this.getLocalModel().set(this.SELECTED_DIRECTION, fieldAndDirection.direction);
    }

    if(!value) {
      this.getLocalModel().removePropertyChangeListener(this.SELECTED_FIELD,AS3.bind( this,"onSelectedFieldChange$AOwc"));
      this.getLocalModel().removePropertyChangeListener(this.SELECTED_DIRECTION,AS3.bind( this,"onSelectedDirectionChange$AOwc"));
      this.getLocalModel().set(this.SELECTED_DIRECTION, null);
      this.getLocalModel().set(this.SELECTED_FIELD, null);
      this.getLocalModel().set(this.DIRECTIONS,[]);
      this.getLocalModel().addPropertyChangeListener(this.SELECTED_FIELD,AS3.bind( this,"onSelectedFieldChange$AOwc"));
      this.getLocalModel().addPropertyChangeListener(this.SELECTED_DIRECTION,AS3.bind( this,"onSelectedDirectionChange$AOwc"));
      this.getFieldsComboBox$AOwc().setValue(null);
      this.getDirectionComboBox$AOwc().setValue(null);
    }
  }/*

  /**
   * Translate to the text representation stored in the query remote bean. Since that's already a SOLR syntax, it is
   * also used to be edited in the advanced mode.
   *
   * @param field selected sorting field
   * @param direction selected sorting direction
   * @return text representation
   * /
  private static*/ function serialize$static(field/*:String*/, direction/*:String*/)/*:String*/ {
    var sortingExpression/* :String*/ = undefined;
    if (field && direction) {
      sortingExpression = field + ' ' + direction;
    }
    return sortingExpression;
  }/*

  private static*/ function deserialize$static(value/*:String*/)/*:Object*/ {
    var split/*:Array*/;
    if (value) {
      split = value.split(' ');
    } else {
      split = [];
    }
    if (split.length > 1) { // if split fails it will contain one item
      return {
        field:split[0],
        direction:split[1]
      };
    } else {
      return {
        field:undefined,
        direction:undefined
      };
    }

  }/*

  /**
   * Don't make this methods static. Although IDEA suggest it, this will result in bean errors.
   * Hellwhaddaiknow...
   * /
  protected static*/ function getFieldText$static(field/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'sort_direction_' + field) || field;
  }/*

  /**
   * Don't make this methods static. Although IDEA suggest it, this will result in bean errors.
   * /
  protected static*/ function getDirectionText$static(direction/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'sort_direction_' + direction) || direction;
  }/*

  /*
   * Initializes template properties object used to create local bean.
   * /
  private*/ function createProperties()/*:Object*/ {
    var props/*:Object*/ = {};

    props[this.FIELDS] = [];
    props[this.SELECTED_FIELD] = "";
    props[this.DIRECTIONS] = [];
    props[this.SELECTED_DIRECTION] = "";

    var sortingColumns/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'sort_directions');
    var columnNames/*:Array*/ = sortingColumns.split(",");
    for(var i/*:int*/ = 0; i<columnNames.length; i++) {
      var colName/*:String*/ = columnNames[i];
      var locName/*:String*/ = this.resourceManager.getString('com.coremedia.blueprint.base.queryeditor.QueryEditorSettings', 'sort_direction_'+colName);
      props[this.FIELDS].push({name:colName,localizedName:locName});
    }
    return props;
  }/*

  protected*/ function getLocalModel()/*:Bean*/ {
    if (!this.localModel$AOwc) {
      this.localModel$AOwc = com.coremedia.ui.data.beanFactory.createLocalBean(this.createProperties$AOwc());
    }
    return this.localModel$AOwc;
  }/*

  private*/ function getFieldsComboBox()/*:ComboBox*/ {
    if (!this.fieldsComboBox$AOwc) {
      this.fieldsComboBox$AOwc = AS3.cast(Ext.form.field.ComboBox,this.queryById('sortingFields'));
    }
    return this.fieldsComboBox$AOwc;
  }/*

  private*/ function getDirectionComboBox()/*:ComboBox*/ {
    if (!this.directionComboBox$AOwc) {
      this.directionComboBox$AOwc = AS3.cast(Ext.form.field.ComboBox,this.queryById('sortingDirections'));
    }
    return this.directionComboBox$AOwc;
  }/*


  private*/ function getContentQueryEditor()/*:ContentQueryForm*/ {
    if (!this.dcqe$AOwc) {
      this.dcqe$AOwc =AS3.as( this.findParentByType(com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm),  com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm);
    }
    return this.dcqe$AOwc;
  }/*

  private*/ function getCommonModel()/*:Bean*/ {
    if (!this.commonModel$AOwc) {
      this.commonModel$AOwc = this.getContentQueryEditor$AOwc().getCommonModel();
    }
    return this.commonModel$AOwc;
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.onDestroy.call(this);

    var appliedConditionsKey/*:String*/ = com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase.MODEL_PROPERTIES.APPLIED_CONDITIONS;

    this.readOnlyValueExpression$AOwc.removeChangeListener(AS3.bind(this,"enableOrDisable$AOwc"));
    this.sortingValueExpression$AOwc.removeChangeListener(AS3.bind(this,"updateLocalModel$AOwc"));
    this.commonModel$AOwc && this.commonModel$AOwc.removePropertyChangeListener(appliedConditionsKey,AS3.bind( this,"onAppliedChange$AOwc"));
    this.getLocalModel().removePropertyChangeListener(this.SELECTED_FIELD,AS3.bind( this,"onSelectedFieldChange$AOwc"));
    this.getLocalModel().removePropertyChangeListener(this.SELECTED_DIRECTION,AS3.bind( this,"onSelectedDirectionChange$AOwc"));

  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
      FIELDS: "sortingFields",
      SELECTED_FIELD: "selectedSortingField",
      DIRECTIONS: "sortingDirections",
      SELECTED_DIRECTION: "selectedSortingDirection",
      queryValueExpression$AOwc: null,
      sortingValueExpression$AOwc: null,
      readOnlyValueExpression$AOwc: null,
      propertyName$AOwc: null,
      dcqe$AOwc: null,
      localModel$AOwc: null,
      fieldsComboBox$AOwc: null,
      directionComboBox$AOwc: null,
      commonModel$AOwc: null,
      constructor: SortingFormBase$,
      super$AOwc: function() {
        com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      doInit: doInit,
      listenToModelChanges$AOwc: listenToModelChanges,
      enableOrDisable$AOwc: enableOrDisable,
      onAppliedChange$AOwc: onAppliedChange,
      onSelectedFieldChange$AOwc: onSelectedFieldChange,
      onSelectedDirectionChange$AOwc: onSelectedDirectionChange,
      updateFields$AOwc: updateFields,
      updateDirections$AOwc: updateDirections,
      updateRemoteBeanAndSerializedExpression$AOwc: updateRemoteBeanAndSerializedExpression,
      updateLocalModel$AOwc: updateLocalModel,
      createProperties$AOwc: createProperties,
      getLocalModel: getLocalModel,
      getFieldsComboBox$AOwc: getFieldsComboBox,
      getDirectionComboBox$AOwc: getDirectionComboBox,
      getContentQueryEditor$AOwc: getContentQueryEditor,
      getCommonModel$AOwc: getCommonModel,
      onDestroy: onDestroy,
      statics: {
        getFieldText: getFieldText$static,
        getDirectionText: getDirectionText$static
      },
      requires: [
        "Ext.form.field.ComboBox",
        "com.coremedia.blueprint.base.queryeditor.QueryEditorSettings_properties",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryForm",
        "com.coremedia.blueprint.base.queryeditor.components.ContentQueryFormBase"
      ]
    };
});
