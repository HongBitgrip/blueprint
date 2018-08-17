Ext.define("com.coremedia.ui.components.SwitchingContainerBase", function(SwitchingContainerBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.LayoutUtil;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;
import ext.layout.container.CardLayout;

/**
 * Fires after the active item has changed.
 * Listeners will be called with the following arguments:
 * <ul>
 *   <li>
 *     <code>this_:com.coremedia.ui.components.SwitchingContainerBase</code> this container
 *   </li>
 *   <li>
 *     <code>activeItem:ext.Component</code> the new active item
 *   </li>
 * </ul>
 * /
[Event(name = "activeItem")] // NOSONAR - no type
/**
 * The SwitchingContainer chooses based on the activeItemValueExpression and
 * the itemId which item it should display.
 * Don't use the initial activeItem configuration. It will be ignored. Only the values of the
 * activeItemValueExpression are used.
 *
 * @see com.coremedia.ui.components.SwitchingContainer
 * /
[PublicApi]
public class SwitchingContainerBase extends Container {
  /**
   * A ValueExpression that evaluates to an itemId or item index (number).
   * SwitchingContainer takes care of always showing the card with the corresponding itemId or index.
   * /
  [Bindable]
  public var activeItemValueExpression:ValueExpression;

  private var itemTemplate:Object;
  private var lazyItems:Array;
  private var transformer:Function;
  private var findComponent:Function;
  private var layoutOnCardChange:Boolean;


  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.components.SwitchingContainer
   * /
  public*/ function SwitchingContainerBase$(config/*:SwitchingContainer = null*/) {if(arguments.length<=0)config=null;
    this.lazyItems$qvyu = com.coremedia.ui.util.ArrayUtils.asArray(config.lazyItems);
    this.super$qvyu(config);

    AS3.setBindable(this,"activeItemValueExpression" , AS3.getBindable(config,"activeItemValueExpression"));
    this.transformer$qvyu = AS3.getBindable(config,"transformer");
    this.findComponent$qvyu = AS3.getBindable(config,"findComponent");
    this.itemTemplate$qvyu = config.itemTemplate;
    this.layoutOnCardChange$qvyu = AS3.getBindable(config,"layoutOnCardChange");

    AS3.getBindable(this,"activeItemValueExpression").addChangeListener(AS3.bind(this,"updateActiveItemFromValueExpression$qvyu"));
    this.updateActiveItemFromValueExpression$qvyu();
  }/*

  /**
   * Get the list of lazy items
   * @return an array of items
   * @private
   * /
  public*/ function getLazyItems()/*:Array*/ {
    return this.lazyItems$qvyu;
  }/*

  /**
   * @private
   * /
  public*/ function setLazyItems(value/*:Array*/)/*:void*/ {
    this.lazyItems$qvyu = value;
    this.updateActiveItemFromValueExpression$qvyu();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    if (this.activeItem) {
      (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(this.activeItem);
    }
  }/*

  /**
   * Return the currently active component. Just delegates to
   * <code>CardLayout#activeItem</code>.
   * @return the active component
   * /
  public*/ function getActiveItem()/*:Component*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, 'activeItem');

    var cardLayout/*:CardLayout*/ = (AS3.as(this.getLayout(),  Ext.layout.container.Card));
    return cardLayout ? cardLayout.getActiveItem() : null;
  }/*

  /**
   * Return the value of the activeItemValueExpression
   * @return the value of the activeItemValueExpression
   * /
  public*/ function getActiveItemValue()/*:**/ {
    return AS3.getBindable(this,"activeItemValueExpression").getValue();
  }/*

  override public*/ function setActiveItem(item/*:**/)/*:Component*/ {
    var component/*:Component*/ =AS3.as( item,  Ext.Component);
    if (component) {
      this.fireEvent('activeItem', this, component);
      return Ext.container.Container.prototype.setActiveItem.call(this,component);
    }

    return null;
  }/*
  /**
   * The transformer function
   *
   * @return transformer function
   * /
  public*/ function getTransformer()/*:Function*/ {
    return this.transformer$qvyu;
  }/*

  /**
   * Overwrite this method to change the behavior of the switching panel in case no item can be found while trying
   * to update the active item.
   *
   * @param activeItem
   * @return a component for the active item or undefined if nothing else applies
   * /
  private*/ function createNewItem(activeItem/*:**/)/*:Component*/ {
    if (this.itemTemplate$qvyu) {
      var config/*:Component*/ = AS3.cast(Ext.Component,Ext.apply({ownerCt: this}, this.itemTemplate$qvyu)); // copy
      config.itemId = activeItem;
      return Ext.ComponentManager.create(config, null);
    }
    return undefined;
  }/*

  private*/ function updateActiveItemFromValueExpression()/*:void*/ {
    if (!AS3.getBindable(this,"activeItemValueExpression")) {
      return; // not yet available
    }

    var activeItemFromExp/*:**/ = AS3.getBindable(this,"activeItemValueExpression").getValue();
    if (activeItemFromExp === undefined) {
      return; // not yet available
    }

    if (this.transformer$qvyu) {
      activeItemFromExp = this.transformer$qvyu(activeItemFromExp);
    }

    if (activeItemFromExp === null) {
      this.setActiveItem(null);
      return;
    }

    AS3.assert(AS3.is(activeItemFromExp,  Number) ||AS3.is( activeItemFromExp,  String), "SwitchingContainerBase.as", 166, 5);

    var componentMissing/*:Boolean*/ = false;
    if(this.findComponent$qvyu) {
      var newActiveItem/*: String*/ = this.findComponent$qvyu(activeItemFromExp);
      if (newActiveItem) {
        activeItemFromExp = newActiveItem;
      } else {
        componentMissing = true;
      }
    } else {
      var activeComponent/*:Component*/ = this.getComponent(activeItemFromExp);
      if (!activeComponent) {
        componentMissing = true;
      }
    }
    if (componentMissing) {
      var lazyItemConfigs/*:Array*/ = this.lazyItems$qvyu.filter(function (element/*:**/, index/*:int*/, arr/*:Array*/)/*:Boolean*/ {
        return element['itemId'] === activeItemFromExp;
      });
      var newItem/*:Component*/;
      if(lazyItemConfigs.length === 1) {
        var itemConfig/*:Component*/ = AS3.cast(Ext.Component,Ext.apply({ownerCt: this}, lazyItemConfigs[0], this.initialConfig['defaults']));
        newItem = Ext.ComponentManager.create(itemConfig, null);
      }
      if (!newItem) {
        newItem = this.createNewItem$qvyu(activeItemFromExp);
      }
      if(!newItem) {
        activeItemFromExp = 0; // first element represents the "not found" case!
      } else {
        this.add(newItem);
      }
    }

    if (this.layoutOnCardChange$qvyu) {
      com.coremedia.ui.util.LayoutUtil.runWithLayouts(AS3.bind(this,"updateActiveItem$qvyu"), null, activeItemFromExp);
    } else {
      this.updateActiveItem$qvyu(activeItemFromExp);
    }
  }/*

  private*/ function updateActiveItem(activeItemFromExp/*:**/)/*:void*/ {
    if (this.rendered) {
      (AS3.as(this.getLayout(),  Ext.layout.container.Card)).setActiveItem(activeItemFromExp);
    }
    this.setActiveItem(this.getComponent(activeItemFromExp));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"activeItemValueExpression").removeChangeListener(AS3.bind(this,"updateActiveItemFromValueExpression$qvyu"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {"": [
        "Event",
        [
          "name",
          "activeItem"
        ],
        "PublicApi"
      ]},
      itemTemplate$qvyu: null,
      lazyItems$qvyu: null,
      transformer$qvyu: null,
      findComponent$qvyu: null,
      layoutOnCardChange$qvyu: false,
      constructor: SwitchingContainerBase$,
      super$qvyu: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getLazyItems: getLazyItems,
      setLazyItems: setLazyItems,
      afterRender: afterRender,
      getActiveItem: getActiveItem,
      getActiveItemValue: getActiveItemValue,
      setActiveItem: setActiveItem,
      getTransformer: getTransformer,
      createNewItem$qvyu: createNewItem,
      updateActiveItemFromValueExpression$qvyu: updateActiveItemFromValueExpression,
      updateActiveItem$qvyu: updateActiveItem,
      onDestroy: onDestroy,
      config: {activeItemValueExpression: null},
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "Ext.container.Container",
        "Ext.layout.container.Card",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.LayoutUtil"
      ]
    };
});
