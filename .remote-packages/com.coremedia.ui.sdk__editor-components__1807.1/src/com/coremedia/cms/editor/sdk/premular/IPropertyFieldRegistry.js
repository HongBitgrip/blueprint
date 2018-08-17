Ext.define("com.coremedia.cms.editor.sdk.premular.IPropertyFieldRegistry", function(IPropertyFieldRegistry) {/*package com.coremedia.cms.editor.sdk.premular {

import ext.Component;

[PublicApi]
public interface IPropertyFieldRegistry {
  /**
   * Register a property field with a given name for a specific content type.
   *
   * @param propertyName the key of the property field
   * @param contentType the content type, for which this property field is registered
   * @param propertyField the property field
   * /
  function registerPropertyField(propertyName:String, contentType:String, propertyField:Component):void;

  /**
   * Unregister a property field with a given name for a specific content type.
   *
   * @param propertyName the key of the property field
   * @param contentType the content type, for which this property field is unregistered
   * @param propertyField the property field
   * /
  function unregisterPropertyField(propertyName:String, contentType:String, propertyField:Component):void;

  /**
   * Return the property field for the property with the given name and for a given content type.
   * Return null, if the property for the content type is unknown.
   *
   * @param propertyName the name of the property
   * @param contentType the content type, for which this property field is registered
   * @return the property field
   * /
  function getPropertyField(propertyName:String, contentType:String):Component;

  /**
   * Return all property fields for the given content type that are located on a tab
   * with the given name. The order of the resulting array is not specified.
   *
   * @param tabTitle the title of the tab
   * @param contentType the content type
   * @return an array of property fields
   * /
  function getPropertyFields(tabTitle:String, contentType:String):Array;

  /**
   * Return the title of the outermost tab within the root component in which the property with the given name
   * and for the given content type is edited
   * Return null, if the property is unknown.
   *
   * @param propertyName the name of the property
   * @param contentType the content type, for which this property field is registered
   * @return the name of the tab
   * /
  function getTabTitle(propertyName:String, contentType:String):String;

  /**
   * Return the position of the outermost tab within the root component in which the property with the given name
   * and for the given content type is edited.
   * Return -1, if the property is unknown.
   *
   * @param propertyName the name of the property
   * @param contentType the content type, for which this property field is registered
   * @return the position of the tab
   * /
  function getTabPosition(propertyName:String, contentType:String):uint;

  /**
   * Starting with the item index in the root component, return an array of the item indexes
   * that lead to the component in which the given property is edited.
   *
   * @param propertyName the name of the property
   * @param contentType the content type, for which this property field is registered
   * @return the item index path
   *
   * @see ext.container.Container#get
   * /
  function getItemIndexPath(propertyName:String, contentType:String):Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
