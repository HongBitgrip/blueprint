Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaSelectorGroupContainerBase", function(PersonaSelectorGroupContainerBase) {/*package com.coremedia.personalization.ui.persona.selector {

import ext.container.Container;

public class PersonaSelectorGroupContainerBase extends Container {

  public static const PERSONA_LOADING_ITEM_ID:String = "personaLoading";

  private const menuItems:Array =*/function menuItems_(){this.menuItems$Qh8h=( []);}/*;
  private var itemCount:Number;

  public*/ function PersonaSelectorGroupContainerBase$(config/*:PersonaSelectorGroupContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$Qh8h(config);menuItems_.call(this);;
    this.itemCount$Qh8h = 0;
  }/*

  /**
   * Add the menu items in alphabetic order (the personaModelDisplayName is used as compared string). After all items
   * were added via this method (this isn't really a classic "add", as it only adds the menuItem internally and not
   * visually), the items were sorted and added as a bunch to the component.
   * @param menuItem the item to add to this group container
   * @param maxItemsInFolder the number of persona items that exist in the given folder. This information is necessary
   * as all given <code>menuItem</code>s are only added to the component visually after all items were added via this method.
   * /
  public*/ function addPersonaMenuItemByOrder(menuItem/*:PersonaSelectorMenuItem*/, maxItemsInFolder/*:Number*/)/*:void*/ {
    this.menuItems$Qh8h.push(menuItem);
    this.itemCount$Qh8h++;

    // we have all menuItems - now we add them as a bunch
    if (this.itemCount$Qh8h === maxItemsInFolder) {
      this.menuItems$Qh8h.sort(AS3.bind(this,"sortByDisplayName$Qh8h"));
      this.add(this.menuItems$Qh8h);
    }
  }/*

  /**
   * Remove the loading indicator and hide the group. This method should be called when no personas are found
   * inside the given folder.
   * /
  public*/ function addNoPersonaItems()/*:void*/ {
    this.hide();
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function sortByDisplayName(a/*:PersonaSelectorMenuItem*/, b/*:PersonaSelectorMenuItem*/)/*:Number*/ {
    var nameA/*:String*/ = a.getPersonaModel().getDisplayName().toLowerCase();
    var nameB/*:String*/ = b.getPersonaModel().getDisplayName().toLowerCase();

    return nameA.localeCompare(nameB);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      itemCount$Qh8h: NaN,
      constructor: PersonaSelectorGroupContainerBase$,
      super$Qh8h: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      addPersonaMenuItemByOrder: addPersonaMenuItemByOrder,
      addNoPersonaItems: addNoPersonaItems,
      sortByDisplayName$Qh8h: sortByDisplayName,
      statics: {PERSONA_LOADING_ITEM_ID: "personaLoading"},
      requires: ["Ext.container.Container"]
    };
});
