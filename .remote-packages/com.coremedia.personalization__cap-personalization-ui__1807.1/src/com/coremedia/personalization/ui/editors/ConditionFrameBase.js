Ext.define("com.coremedia.personalization.ui.editors.ConditionFrameBase", function(ConditionFrameBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.ui.components.IconButton;

import ext.ComponentManager;
import ext.button.Button;
import ext.container.Container;
import ext.data.ArrayStore;
import ext.data.Model;
import ext.data.Store;
import ext.form.field.ComboBox;
import ext.panel.Panel;
import ext.util.Sorter;

import mx.resources.ResourceManager;

/**
 * Provides the 'frame' responsible for the 'condition-type' selector and
 * the 'delete' button around a condition. It is also responsible for selecting the
 * appropriate Condition item for a supplied rule condition.
 * <br/><br/>
 * The available Condition items are supplied via an array containing JSON-representations of the actual objects.
 * Each such JSON object must contain the following properties:
 * <ul>
 *   <li><i>xtype</i> the xtype name of the represented object. The referenced object must implement
 *    the {@link Condition} interface.</li>
 *   <li><i>conditionName</i> the name under which the item can be selected in the UI, e.g. 'Keyword' or 'Phone'.</li>
 *   <li><i>propertyPattern</i> a prefix pattern that determines for which properties this item is to be used. The
 *    first item in the array that matches a property name is chosen. The value of <i>propertyName</i> is used as the
 *    default value for this property.</li>
 * </ul>
 * Optionally, you can add these properties:
 * <ul>
 *   <li><i>propertyName</i> the property name to be set if the condition is selected. Useful if you use an item
 *      for one specific property and don't want the user to set the name manually. The value of this property
 *      is used as the default for <i>propertyPattern</i>. If you want to use a different pattern, set the
 *      <i>propertyPattern</i> value explicitly.</li>
 *   <li><i>isDefault</i> if 'true', the item is selected by default for newly created conditions</li>
 * </ul>
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
internal class ConditionFrameBase extends Container implements Condition {

  // relevant properties of condition items
  private static const*/var ITEM_CONDITION_NAME$static/*:String*/ = 'conditionName';/*
  private static const*/var ITEM_PROPERTY_PREFIX$static/*:String*/ = 'propertyPrefix';/*
  private static const*/var ITEM_PROPERTY_NAME$static/*:String*/ = 'propertyName';/*
  private static const*/var ITEM_DEFAULT_FLAG$static/*:String*/ = 'isDefault';/*
  // item-id field in the ComboBox store
  private static const*/var ITEM_ID$static/*:String*/ = 'itemId';/*

  private var conditionTypeSelector:ComboBox;
  private var conditionTypeSelectorWrapper:Panel;
  private var conditionSwitch:ConditionSwitch;
  private var deleteButton:Button;

  private var conditionItems:Array;

  /**
   * Creates a new ConditionFrame.
   *
   * @param conditionItems
   * @param layout any additional layout properties (optional)
   * /
  public*/ function ConditionFrameBase$(config/*:ConditionFrame = null*/) {if(arguments.length<=0)config=null;
    this.conditionItems$VYh5 = AS3.getBindable(config,"conditionItems");
    this.super$VYh5(config);

    // do the UI initialization after the beforerender event was received to allow plugins to
    // modify the condition items
    this.addListener('beforerender',AS3.bind( this,"initUI"), null, { single: true });
  }/*

  internal*/ function initUI()/*:void*/ {var this$=this;
    Ext.Component.suspendLayouts();/*
    // create the actual instances of the condition items
    const*/var itemInstances/*:Array*/ = createItemInstances$static(this.conditionItems$VYh5);/*

    // used in a combobox to select condition items
    const*/var selectionProperties/*:Array*/ = extractSelectionProperties$static(itemInstances);

    // combo-box for selecting the type of the condition
    var comboCfg/*:ComboBox*/ = AS3.cast(Ext.form.field.ComboBox,{});
    comboCfg.flex = 40;
    AS3.setBindable(comboCfg,"disabled" , this.disabled);
    comboCfg.itemId = "conditionTypeSelector";
    comboCfg.forceSelection = true;
    AS3.setBindable(comboCfg,"editable" , false);
    comboCfg.triggerAction = 'all';
    comboCfg.queryMode = 'local';
    comboCfg.allowBlank = false;
    comboCfg.listConfig = {minWidth: 250};
    var arrayStoreCfg/*:ArrayStore*/ = AS3.cast(Ext.data.ArrayStore,{});
    arrayStoreCfg['id'] = 0;
    AS3.setBindable(arrayStoreCfg,"fields" , [
      ITEM_ID$static,
      ITEM_CONDITION_NAME$static,
      ITEM_PROPERTY_PREFIX$static,
      ITEM_PROPERTY_NAME$static
    ]);
    AS3.setBindable(arrayStoreCfg,"data" , selectionProperties);
    var sorter/*:Sorter*/ = AS3.cast(Ext.util.Sorter,{});
    AS3.setBindable(sorter,"property" , ITEM_CONDITION_NAME$static);
    AS3.setBindable(sorter,"direction" , 'ASC');
    AS3.setBindable(arrayStoreCfg,"sorters" , [sorter]);
    AS3.setBindable(comboCfg,"store" , new Ext.data.ArrayStore(arrayStoreCfg));
    comboCfg.valueField = ITEM_ID$static;
    AS3.setBindable(comboCfg,"displayField" , ITEM_CONDITION_NAME$static);
    this.conditionTypeSelector$VYh5 = this.add(comboCfg);
    this.conditionTypeSelector$VYh5.addListener('select',AS3.bind( this,"onConditionTypeSelected$VYh5"));

    // condition switch that contains UI elements used to define a condition
    this.conditionSwitch$VYh5 = new com.coremedia.personalization.ui.editors.ConditionSwitch(
            itemInstances,
    { /* layout config */
      flex: 60,
      height: 26,
      margins:'1 0 0 0',
      itemId: "conditionSwitch"
    });
    this.conditionSwitch$VYh5.setDisabled(this.disabled);
    this.add(this.conditionSwitch$VYh5);
    this.conditionSwitch$VYh5.addListener('modified', function()/*:void*/ {
      this$.fireConditionFrameEvent$VYh5('modified');
    });

    // button for deleting this condition
    var deleteButtonCfg/*:IconButton*/ = AS3.cast(com.coremedia.ui.components.IconButton,{});
    deleteButtonCfg.itemId = 'deleteFrameButton';
    AS3.setBindable(deleteButtonCfg,"iconCls" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_deleteCondition_icon'));
    AS3.setBindable(deleteButtonCfg,"tooltip" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_deleteCondition_tooltip'));
    deleteButtonCfg.ariaLabel = deleteButtonCfg.tooltip;
    AS3.setBindable(deleteButtonCfg,"disabled" , this.disabled);
    AS3.setBindable(deleteButtonCfg,"handler" , function ()/*:void*/ {
      this$.fireConditionFrameEvent$VYh5('deleteCondition');
    });
    this.deleteButton$VYh5 = this.add(deleteButtonCfg);

    // activate the default conditionItem, if any
    for (var i/*:int*/ = 0; i < itemInstances.length; ++i) {
      if (itemInstances[i][ITEM_DEFAULT_FLAG$static]) {
        this.switchToCondition$VYh5(itemInstances[i].id, itemInstances[i][ITEM_PROPERTY_NAME$static]);
        this.conditionTypeSelector$VYh5.setValue(itemInstances[i].id);
      }
    }

    Ext.Component.resumeLayouts(true);
  }/*

  private*/ function fireConditionFrameEvent(eventName/*:String*/)/*:void*/ {
    this.fireEvent(eventName, this);
  }/*

  // creates actual instances from the supplied JSON-configurations. Assumes
  // that each item in the array can be converted to an object instances via ComponentManager.create()
  private static*/ function createItemInstances$static(conditionItems/*:Array*/)/*:Array*/ {/*
    const*/var itemInstances/*:Array*/ = [];
    conditionItems.forEach(function(obj/*:Object*/)/*:void*/ {/*
      const*/var inst/*:Object*/ = Ext.ComponentManager.create(obj, null);
      if (inst == null) {
        throw new AS3.Error(mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionsFrame_confInstance') + " " + obj.toSource() +
                ". " + mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionsFrame_confInstance_xtype'));
      }
      itemInstances.push(inst);
    });
    return itemInstances;
  }/*

  // extracts an array of [itemId, conditionName, conditionProperty] elements from the
  // supplied conditionItem instances for use in the ComboBox
  private static*/ function extractSelectionProperties$static(itemInstances/*:Array*/)/*:Array*/ {/*
    const*/var selectionProperties/*:Array*/ = [];
    itemInstances.forEach(function(obj/*:Object*/)/*:void*/ {
      var itemId/*:Object*/ = obj.id;
      var itemConditionName/*:String*/ = obj[ITEM_CONDITION_NAME$static]  || obj['initialConfig'][ITEM_CONDITION_NAME$static];
      var itemPropertyPrefix/*:String*/ = obj[ITEM_PROPERTY_PREFIX$static] || obj['initialConfig'][ITEM_PROPERTY_PREFIX$static];
      var itemPropertyName/*:String*/ = obj[ITEM_PROPERTY_NAME$static] || obj['initialConfig'][ITEM_PROPERTY_NAME$static];

      // make sure we've got everything we need
      if (itemConditionName == null) {
        throw new AS3.Error(mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionsFrame_itemConditionName') + " " + obj.toSource());
      }
      if (itemPropertyPrefix == null && itemPropertyName == null) {
        throw new AS3.Error(mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionsFrame_itemPropertyPrefix') + " " + obj.toSource());
      }

      selectionProperties.push([itemId, itemConditionName, itemPropertyPrefix, itemPropertyName]);
    });
    return selectionProperties;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function onConditionTypeSelected(combo/*:ComboBox*/, record/*:Model*/)/*:void*/ {
    var itemId/*:Object*/ = record.data[ITEM_ID$static];
    var propertyName/*:String*/ = record.data[ITEM_PROPERTY_NAME$static];
    this.switchToCondition$VYh5(itemId, propertyName);
    this.fireConditionFrameEvent$VYh5('modified');
  }/*

  private*/ function switchToCondition(itemId/*:Object*/, propertyName/*:String*/)/*:void*/ {
    this.conditionSwitch$VYh5.switchToCondition(itemId);
    if (propertyName != null && propertyName.length > 0) {
      this.conditionSwitch$VYh5.setPropertyName(propertyName);
    }
  }/*

  public override*/ function setDisabled(value/*:Boolean*/)/*:void*/ {
    Ext.container.Container.prototype.setDisabled.call(this,value);
    // the ui is only available after rendering
    if (this.rendered) {
      this.conditionTypeSelector$VYh5.setDisabled(value);
      this.conditionSwitch$VYh5.setDisabled(value);
      this.deleteButton$VYh5.setDisabled(value);
    }
  }/*

  //
  // implementation of the Condition interface
  //

  public*/ function getPropertyName()/*:String*/ {
    return this.rendered ? this.conditionSwitch$VYh5.getPropertyName() : null;
  }/*

  public*/ function getOperator()/*:String*/ {
    return this.rendered ? this.conditionSwitch$VYh5.getOperator() : null;
  }/*

  public*/ function getPropertyValue()/*:String*/ {
    return this.rendered ? this.conditionSwitch$VYh5.getPropertyValue() : null;
  }/*

  public*/ function setPropertyName(name/*:String*/)/*:void*/ {var this$=this;
    // the UI is available only after rendering
    if (this.rendered) {
      this.selectInConditionTypeSelector$VYh5(name);
      this.conditionSwitch$VYh5.setPropertyName(name);
    } else {
      this.addListener('afterrender',
              function()/*:void*/ { this$.selectInConditionTypeSelector$VYh5(name); this$.conditionSwitch$VYh5.setPropertyName(name);},
              null, { single: true });
    }
  }/*

  // selects the value appropriate for the supplied property name in the
  // condition-type selector. We can't use the vanilla ComboBox.setValue() because
  // we need to support patterns
  private*/ function selectInConditionTypeSelector(name/*:String*/)/*:void*/ {
    if (name == null) {
      return;
    }/*

    const*/var valueStore/*:Store*/ = AS3.cast(Ext.data.Store,this.conditionTypeSelector$VYh5.getStore());/*
    const*/var idx/*:Number*/ = valueStore.findBy(function(record/*:Model*/, id/*:Object*/)/*:**/ {
      if (record.data[ITEM_PROPERTY_NAME$static]) {
        return name == record.data[ITEM_PROPERTY_NAME$static];
      } else if (record.data[ITEM_PROPERTY_PREFIX$static]) {
        return name.match("^" + record.data[ITEM_PROPERTY_PREFIX$static] + ".*$");
      } else {
        return false;
      }
    }, this, 0);
    if (idx >= 0) {/*
      const*/var record/*:Model*/ = valueStore.getAt(idx);
      this.conditionTypeSelector$VYh5.setValue(record.data[ITEM_ID$static]);
      this.switchToCondition$VYh5(record.data[ITEM_ID$static], record.data[ITEM_PROPERTY_NAME$static]);
    } else {
      this.conditionSwitch$VYh5.switchToInvalid(name);
    }
  }/*

  public*/ function setOperator(op/*:String*/)/*:void*/ {var this$=this;
    // the UI is available only after rendering
    if (this.rendered) {
      this.conditionSwitch$VYh5.setOperator(op);
    } else {
      this.addListener('afterrender',
              function()/*:void*/ { this$.conditionSwitch$VYh5.setOperator(op); },
              null, { single: true });
    }
  }/*

  public*/ function setPropertyValue(value/*:String*/)/*:void*/ {var this$=this;
    // the UI is available only after rendering
    if (this.rendered) {
      this.conditionSwitch$VYh5.setPropertyValue(value);
    } else {
      this.addListener('afterrender',
              function()/*:void*/ { this$.conditionSwitch$VYh5.setPropertyValue(value); },
              null, { single: true });
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.personalization.ui.editors.Condition"],
      conditionTypeSelector$VYh5: null,
      conditionTypeSelectorWrapper$VYh5: null,
      conditionSwitch$VYh5: null,
      deleteButton$VYh5: null,
      conditionItems$VYh5: null,
      constructor: ConditionFrameBase$,
      super$VYh5: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initUI: initUI,
      fireConditionFrameEvent$VYh5: fireConditionFrameEvent,
      onConditionTypeSelected$VYh5: onConditionTypeSelected,
      switchToCondition$VYh5: switchToCondition,
      setDisabled: setDisabled,
      getPropertyName: getPropertyName,
      getOperator: getOperator,
      getPropertyValue: getPropertyValue,
      setPropertyName: setPropertyName,
      selectInConditionTypeSelector$VYh5: selectInConditionTypeSelector,
      setOperator: setOperator,
      setPropertyValue: setPropertyValue,
      requires: [
        "AS3.Error",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.data.ArrayStore",
        "Ext.data.Store",
        "Ext.form.field.ComboBox",
        "Ext.util.Sorter",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.Condition",
        "com.coremedia.ui.components.IconButton",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.personalization.ui.editors.ConditionSwitch"]
    };
});
