Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldRegistry", function(PropertyFieldRegistry) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.Component;
import ext.container.Container;
import ext.tab.TabPanel;

public class PropertyFieldRegistry implements IPropertyFieldRegistry {
  private var rootComponent:Component;
  /**
   * A map from content type names to maps from property names to property fields.
   * /
  private var propertyFields:Object =*/function propertyFields_(){this.propertyFields$02QW=( {});}/*;

  public*/ function PropertyFieldRegistry$(rootComponent/*:Component*/) {propertyFields_.call(this);
    this.rootComponent$02QW = rootComponent;
  }/*

  public*/ function registerPropertyField(propertyName/*:String*/, contentType/*:String*/, propertyField/*:Component*/)/*:void*/ {
    var propertyFieldMap/*:Object*/ = this.propertyFields$02QW[contentType];
    if (!propertyFieldMap) {
      propertyFieldMap = {};
      this.propertyFields$02QW[contentType] = propertyFieldMap;
    }

    if (propertyFieldMap[propertyName]) {
      com.coremedia.ui.logging.Logger.warn("Multiple property editors for property'" + propertyName
              + "' and content type '" + contentType + "' found! Only the last one will receive focus events!");
    }
    propertyFieldMap[propertyName] = propertyField;
  }/*

  public*/ function unregisterPropertyField(propertyName/*:String*/, contentType/*:String*/, propertyField/*:Component*/)/*:void*/ {
    var propertyFieldMap/*:Object*/ = this.propertyFields$02QW[contentType];
    if (!propertyFieldMap || !propertyFieldMap[propertyName]) {
      com.coremedia.ui.logging.Logger.warn("Tried to unregister field for unknown property name '" + propertyName + "'.");
    } else {
      delete propertyFieldMap[propertyName];
    }
  }/*


  public*/ function getPropertyField(propertyName/*:String*/, contentType/*:String*/)/*:Component*/ {
    var propertyFieldMap/*:Object*/ = this.propertyFields$02QW[contentType];
    if (!propertyFieldMap) {
      return null;
    }

    var propertyField/*:Component*/ = propertyFieldMap[propertyName] || null;
    if (!propertyField &&AS3.is( this.rootComponent$02QW,  Ext.container.Container)) {
      com.coremedia.ui.mixins.LazyItemsContainerMixin.unfoldLazyItems(AS3.as(this.rootComponent$02QW,  Ext.container.Container));
    }
    propertyField = propertyFieldMap[propertyName] || null;

    return propertyField;
  }/*

  public*/ function getPropertyFields(tabTitle/*:String*/, contentType/*:String*/)/*:Array*/ {
    var propertyFieldMap/*:Object*/ = this.propertyFields$02QW[contentType];
    if (!propertyFieldMap) {
      return [];
    }
    var result/*:Array*/ = [];
    for (var propertyName/*:String*/ in propertyFieldMap) {
      var propertyField/*:Component*/ = propertyFieldMap[propertyName];
      var outermostTabComponent/*:Component*/ = this.findOutermostTabComponent$02QW(propertyField);
      if (outermostTabComponent && outermostTabComponent['title'] === tabTitle) {
        result.push(propertyField);
      }
    }
    return result;
  }/*


  public*/ function getTabTitle(propertyName/*:String*/, contentType/*:String*/)/*:String*/ {
    var outermostTabComponent/*:Component*/ = this.findOutermostTabComponentByName$02QW(propertyName, contentType);
    if (!outermostTabComponent) {
      return null;
    }
    return outermostTabComponent['title'];
  }/*

  public*/ function getTabPosition(propertyName/*:String*/, contentType/*:String*/)/*:uint*/ {
    var outermostTabComponent/*:Component*/ = this.findOutermostTabComponentByName$02QW(propertyName, contentType);
    if (!outermostTabComponent) {
      return -1;
    }
    return outermostTabComponent.up().itemCollection.indexOf(outermostTabComponent);
  }/*

  public*/ function getItemIndexPath(propertyName/*:String*/, contentType/*:String*/)/*:Array*/ {
    var propertyField/*:Component*/ = this.getPropertyField(propertyName, contentType);
    if (!propertyField) {
      return [];
    }

    var result/*:Array*/ = [];
    while (propertyField !== this.rootComponent$02QW) {
      var ownerPropertyField/*:Container*/ = propertyField.up();
      if (!ownerPropertyField || !ownerPropertyField.itemCollection) {
        return [];
      }
      result.unshift(ownerPropertyField.itemCollection.indexOf(propertyField));
      propertyField = ownerPropertyField;
    }

    return result;
  }/*

  private*/ function findOutermostTabComponentByName(propertyName/*:String*/, contentType/*:String*/)/*:Component*/ {
    return this.findOutermostTabComponent$02QW(this.getPropertyField(propertyName, contentType));
  }/*

  private*/ function findOutermostTabComponent(propertyField/*:Component*/)/*:Component*/ {
    var lastTabComponent/*:Component*/ = null;
    while (propertyField && propertyField !== this.rootComponent$02QW) {
      if (AS3.is(propertyField.up(),  Ext.tab.Panel)) {
        lastTabComponent = propertyField;
      }
      propertyField = propertyField.up();
    }
    return lastTabComponent;
  }/*

  /**
   * Destroy this registering, freeing all resources.
   * /
  public*/ function destroy()/*:void*/ {
    this.propertyFields$02QW = null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.premular.IPropertyFieldRegistry"],
      rootComponent$02QW: null,
      constructor: PropertyFieldRegistry$,
      registerPropertyField: registerPropertyField,
      unregisterPropertyField: unregisterPropertyField,
      getPropertyField: getPropertyField,
      getPropertyFields: getPropertyFields,
      getTabTitle: getTabTitle,
      getTabPosition: getTabPosition,
      getItemIndexPath: getItemIndexPath,
      findOutermostTabComponentByName$02QW: findOutermostTabComponentByName,
      findOutermostTabComponent$02QW: findOutermostTabComponent,
      destroy: destroy,
      requires: [
        "Ext.container.Container",
        "Ext.tab.Panel",
        "com.coremedia.cms.editor.sdk.premular.IPropertyFieldRegistry",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ]
    };
});
