Ext.define("com.coremedia.personalization.ui.editors.ConditionSwitch", function(ConditionSwitch) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;

import ext.Ext;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.layout.container.CardLayout;
import ext.layout.container.ContainerLayout;

/**
 * This component manages switching among several {@link Condition} instances. It's
 * responsible for the actual switching only, not the logic for selecting where to
 * switch to. The latter is handled by ConditionFrame.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')] class ConditionSwitch extends Container implements Condition {
  // default item shown if we don't find an Condition item suitable for
  // the propertyName supplied to us. see activateItemFor().
  private var defaultItem:DisplayField;

  private var activeItemId:Object;
  private var activeCondition:Condition;
  private var invalidPropertyName:String;  // used to store a property name if it doesn't match any registered condition item

  // indicates whether the layout of this container has been initialized
  private var layoutInitialized:Boolean = false;

  /**
   * Creates a new ConditionSwitch.
   *
   * @param conditionItems the items that can be selected via this switch. An array
   *  of ExtJS components or xtype declarations. All supplied items must implement
   *  the {@link Condition} interface.
   * @param layout layout properties to be applied (optional)
   * /
  public*/ function ConditionSwitch$(conditionItems/*:Array*/, layout/*:**/) {var this$=this;
    var config/*:**/ = Ext.apply({}, layout);

    // install a default item used when no other item is selected
    var defaultItemConfig/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(defaultItemConfig,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionSwitch_editor'));
    AS3.setBindable(defaultItemConfig,"width" , 200);
    AS3.setBindable(defaultItemConfig,"height" , 25);
    this.defaultItem$EBEj = new Ext.form.field.Display(defaultItemConfig);
    this.activeItemId$EBEj = this.defaultItem$EBEj;
    config.items = conditionItems != null ? [this.defaultItem$EBEj].concat(conditionItems) : [this.defaultItem$EBEj];

    // use a card layout to quickly switch between different condition items
    config.layout = 'card';
    // this is required to make sure all items are layed out correctly
    config.layoutConfig = Ext.apply(config.layoutConfig || {}, {deferredRender: true});

    this.super$EBEj(config);

    // register a listener with each installed item to get notified about any changes
    this.itemCollection.each(function(obj/*:Object*/)/*:void*/ {
      obj.addListener('modified', function()/*:void*/ { this$.fireEvent('modified'); });
    }, this);
           
    // this is a kludge. see onAfterlayout()
    this.addListener('afterlayout',AS3.bind( this,"onAfterlayout$EBEj"), this);
  }/*

  public override*/ function setDisabled(value/*:Boolean*/)/*:void*/ {
    Ext.container.Container.prototype.setDisabled.call(this,value);
    for (var i/*:int*/ = 0; i < this.itemCollection.length; ++i) {
      if (this.itemCollection[i]) this.itemCollection[i].setDisabled(value);
    }
  }/*

  // we use this listener to hide the fact that you cannot set the active item of a
  // card layout before it is rendered. Once it's called, it sets a flag to indicate
  // that the card layout is ready for use and sets the active layout item if
  // activeItemId is set.
  //noinspection JSUnusedLocalSymbols
  private*/ function onAfterlayout(container/*:Container*/, layout/*:ContainerLayout*/)/*:void*/ {
    this.removeListener('afterlayout',AS3.bind( this,"onAfterlayout$EBEj"), this);
    this.layoutInitialized$EBEj = true;
    if (this.activeItemId$EBEj != null)
      this.setMyActiveItem$EBEj(this.activeItemId$EBEj);
  }/*

  // sets the item to be shown in this container
  private*/ function setMyActiveItem(id/*:Object*/)/*:void*/ {
    this.activeItemId$EBEj = id;
    if (this.layoutInitialized$EBEj) {/*
      // we're only allowed the actually change the active item in the
      // card layout after it has been initialized in the ExtJs render process.
      // see onAfterlayout()
      const*/var cardLayout/*:CardLayout*/ = (AS3.as(this.getLayout(),  Ext.layout.container.Card));
      if(cardLayout) {
        cardLayout.setActiveItem(id);
      }
    }
  }/*

  /**
   * Brings the item of the supplied id to the top.
   *
   * @param itemId the property name for which to select the item to be shown
   * /
  public*/ function switchToCondition(itemId/*:Object*/)/*:void*/ {
    // activate the corresponding card
    this.setMyActiveItem$EBEj(itemId);
    this.activeCondition$EBEj =AS3.as( this.itemCollection.findBy(function(obj/*:Object*/)/*:Boolean*/ { return obj.id == itemId; }, this),  com.coremedia.personalization.ui.editors.Condition);
  }/*

  /**
   * Switches to the 'invalid selection' item.
   * /
  public*/ function switchToInvalid(propertyName/*:String*/)/*:void*/ {
    this.defaultItem$EBEj.setValue(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_ConditionSwitch_property') +
            " '" + propertyName + "'");
    this.setMyActiveItem$EBEj(this.defaultItem$EBEj.getId());
    this.invalidPropertyName$EBEj = propertyName;
    this.activeCondition$EBEj = null;
  }/*

  public*/ function getActiveCondition()/*:Condition*/ {
    return this.activeCondition$EBEj;
  }/*

//
  // implementation of the Condition interface
  //

  public*/ function getPropertyName()/*:String*/ {
    return this.activeCondition$EBEj != null ? this.activeCondition$EBEj.getPropertyName() : this.invalidPropertyName$EBEj;
  }/*

  public*/ function setPropertyName(name/*:String*/)/*:void*/ {
    if (this.activeCondition$EBEj != null)
      this.activeCondition$EBEj.setPropertyName(name);
  }/*

  public*/ function getOperator()/*:String*/ {
    return this.activeCondition$EBEj != null ? this.activeCondition$EBEj.getOperator() : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_OPERATOR;
  }/*

  public*/ function setOperator(op/*:String*/)/*:void*/ {
    if (this.activeCondition$EBEj != null)
      this.activeCondition$EBEj.setOperator(op);
  }/*

  public*/ function getPropertyValue()/*:String*/ {
    return this.activeCondition$EBEj != null ? this.activeCondition$EBEj.getPropertyValue() : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE;
  }/*

  public*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    if (this.activeCondition$EBEj != null)
      this.activeCondition$EBEj.setPropertyValue(value);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.personalization.ui.editors.Condition"],
      defaultItem$EBEj: null,
      activeItemId$EBEj: null,
      activeCondition$EBEj: null,
      invalidPropertyName$EBEj: null,
      layoutInitialized$EBEj: false,
      constructor: ConditionSwitch$,
      super$EBEj: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      setDisabled: setDisabled,
      onAfterlayout$EBEj: onAfterlayout,
      setMyActiveItem$EBEj: setMyActiveItem,
      switchToCondition: switchToCondition,
      switchToInvalid: switchToInvalid,
      getActiveCondition: getActiveCondition,
      getPropertyName: getPropertyName,
      setPropertyName: setPropertyName,
      getOperator: getOperator,
      setOperator: setOperator,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.Card",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.Condition"
      ],
      uses: ["com.coremedia.personalization.ui.util.SelectionRuleHelper"]
    };
});
