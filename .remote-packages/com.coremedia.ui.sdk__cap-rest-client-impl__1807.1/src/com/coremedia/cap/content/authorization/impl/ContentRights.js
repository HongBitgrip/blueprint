Ext.define("com.coremedia.cap.content.authorization.impl.ContentRights", function(ContentRights) {/*package com.coremedia.cap.content.authorization.impl {

import com.coremedia.cap.content.ContentType;
import com.coremedia.ui.data.impl.RemoteBeanImpl;

[RestResource(uriTemplate="content/{content:[0-9]+}/rights;for=user_{user:[0-9]+}")]
/**
 * An internal bean representing the rights on a content.
 * /
public class ContentRights extends RemoteBeanImpl {
  /**
   * The name of the bean property that contains the list of document type/rights
   * records.
   * /
  private static const*/var ITEMS_PROPERTY_NAME$static/*:String*/ = 'items';/*

  /**
   * The name of the bean property that contains the map from content type names
   * to rights strings.
   * /
  private static const*/var BY_TYPE_NAME_PROPERTY_NAME$static/*:String*/ = 'byTypeName';/*

  public*/ function ContentRights$(uri/*:String*/) {
    this.super$UfF_(uri);
  }/*

  override protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    // Convert the array of TypeRights objects ...
    var items/*:Array*/ = newValues[ITEMS_PROPERTY_NAME$static];
    // ... into a map from content type names to rights strings ...
    var byTypeName/*:Object*/ = {};
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var typeRights/*:TypeRights*/ = items[i];
      byTypeName[typeRights.type.getName()] = typeRights.rights;
    }
    // ... and add the map into the read result as an implicit property.
    newValues[BY_TYPE_NAME_PROPERTY_NAME$static] = byTypeName;
    return com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.processReadResult.call(this,newValues);
  }/*

  /**
   * Return the rights for the given type as string of rights according to the constants
   * from the Right class. Return undefined if the rights have not been loaded yet.
   *
   * @param type
   * @return the rights
   *
   * @see com.coremedia.cap.content.authorization.Right
   * /
  public*/ function getRightsAsString(type/*:ContentType*/)/*:**/ {
    var byTypeName/*:Object*/ = this.get(BY_TYPE_NAME_PROPERTY_NAME$static);
    if (!byTypeName) {
      return undefined;
    }
    // Find the most specific type for which rights are defined.
    while (type) {
      var typeName/*:String*/ = type.getName();
      var rights/*:**/ = byTypeName[typeName];
      if (rights !== undefined) {
        return rights;
      }
      type =AS3.as( type.getParent(),  com.coremedia.cap.content.ContentType);
    }
    // Nothing found. No rights.
    return "";
  }/*

  /**
   * Return true, if the content may be written,
   * undefined, if the writable state cannot yet be determined,
   * false otherwise.
   *
   * @return true if the content may be written
   * /
  public*/ function isWritable()/*:Boolean*/ {
    var items/*:Array*/ = this.get(ITEMS_PROPERTY_NAME$static);
    if (items === undefined) {
      return undefined;
    }
    for (var i/*:uint*/ = 0; i < items.length; i++) {
      var typeRights/*:TypeRights*/ = items[i];
      if (typeRights.rights.replace("R", "") !== "") {
        return true;
      }
    }
    return false;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "content/{content:[0-9]+}/rights;for=user_{user:[0-9]+}"
        ]
      ]},
      constructor: ContentRights$,
      super$UfF_: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      processReadResult: processReadResult,
      getRightsAsString: getRightsAsString,
      isWritable: isWritable,
      requires: [
        "com.coremedia.cap.content.ContentType",
        "com.coremedia.ui.data.impl.RemoteBeanImpl"
      ]
    };
});
