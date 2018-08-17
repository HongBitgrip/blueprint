Ext.define("com.coremedia.cap.struct.StructType", function(StructType) {/*package com.coremedia.cap.struct {
import com.coremedia.cap.common.CapType;

/**
 * A struct type allows you to add and remove property declarations of a struct.
 *
 * @see Struct
 * /
[PublicApi]
public interface StructType extends CapType {

  /**
   * Adds a new atomic String property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param maxLength the maximum length of the value
   * @param value the initial value
   * @return true in case of success, false in case of failure
   * /
  function addStringProperty(name:String, maxLength:int, value:String = ""):Boolean;

  /**
   * Adds a new String list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param maxLength the maximum length of the value
   * @param values the initial values (<code>String</code> objects).
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addStringListProperty(name:String, maxLength:int, values:Array = null):Boolean;

  /**
   * Adds a new atomic Integer property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param value the initial value. Type is <code>Object</code> to allow <code>null</code> to represent an empty integer.
   * @return true in case of success, false in case of failure
   * /
  function addIntegerProperty(name:String, value:Object = null):Boolean;

  /**
   * Adds a new Integer list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param values the initial values (<code>int</code>s).
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addIntegerListProperty(name:String, values:Array = null):Boolean;

  /**
   * Adds a new atomic Boolean property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param value the initial value; a Boolean or null
   * @return true in case of success, false in case of failure
   * /
  function addBooleanProperty(name:String, value:Object = null):Boolean;

  /**
   * Adds a new Boolean list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param values the initial values (<code>Boolean</code> objects).
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addBooleanListProperty(name:String, values:Array = null):Boolean;

  /**
   * Adds a new atomic Link property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param linkType the type of the Link property
   * @param link the initial value
   * @return true in case of success, false in case of failure
   * /
  function addLinkProperty(name:String, linkType:CapType, link:Object = null):Boolean;

  /**
   * Adds a new Link list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param linkType the type of the Link property
   * @param links the initial values (<code>Content</code> objects).
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addLinkListProperty(name:String, linkType:CapType, links:Array = null):Boolean;

  /**
   * Adds a new atomic Date property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param value the initial value; a Date or null
   * @return true in case of success, false in case of failure
   * /
  function addDateProperty(name:String, value:Date = null):Boolean;

  /**
   * Adds a new Date list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param values the initial values (<code>Date</code> objects).
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addDateListProperty(name:String, values:Array = null):Boolean;
  
  /**
   * Adds a new atomic Struct property with an initial value to the struct.
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or the value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param object the initial struct value, given in its <code>toObject()</code> format.
   *   If no second parameter or <code>null</code> is given, an empty struct is created and used.
   * @return true in case of success, false in case of failure
   * /
  function addStructProperty(name:String, object:Object = null):Boolean;

  /**
   * Adds a new Struct list property with initial values to the struct.
   * <p>
   * The cardinality of the list property is unlimited.
   * </p>
   * <p>
   * If the operation fails (e.g. if the name clashes with an existing
   * property or a value is invalid), the struct remains unchanged, and the
   * method returns false.
   * </p>
   *
   * @param name the name of the new property
   * @param objects the initial struct values, given in their <code>toObject()</code> format.
   *   If no second parameter is given, an empty Array is used.
   * @return true in case of success, false in case of failure
   * /
  function addStructListProperty(name:String, objects:Array = null):Boolean;

  /**
   * Remove a property from the struct.
   *
   * @param propertyName the name of the property to be removed
   * @return true in case of success, false in case of failure
   * /
  function removeProperty(propertyName:String):Boolean;

  /**
   * Rename a property of this struct.
   * The old property descriptor is replaced by a new one with the new property name,
   * keeping its position in the descriptors list.
   * 
   * @param oldPropertyName
   * @param newPropertyName
   * @return whether renaming succeeded:
   *   If no property with the given oldPropertyName exists, false is returned.
   *   If oldPropertyName and newPropertyName are the same, true is returned.
   *   If newPropertyName already exists, false is returned.
   *   In all other cases, the property is renamed and true is returned.
   * /
  function renameProperty(oldPropertyName:String, newPropertyName:String):Boolean;
  
  /**
   * Return true if a property with the given name is defined.
   *
   * @param propertyName the property name to query
   * @return whether such a property is defined
   * /
  function hasProperty(propertyName:String):Boolean;

  /**
   * Return a snapshot of the names of all declared properties in their declared order.
   * Equals <code>getDescriptors().map(function(descriptor) { return descriptor.name; })</code>.
   * @return a snapshot of the names of all declared properties
   * /
  function getPropertyNames():Array;

  /**
   * Change to order of all existing property descriptors by the given order
   * of their property names.
   * If the property name of an existing descriptor is not contained in the
   * given list, it will be appended after all rearranged property descriptors.
   * If <code>propertyNames</code> contains a property for which no property
   * descriptor exists, it is ignored.
   * @param propertyNames a sequence of property names that is used to rearrange
   *   the existing property descriptors
   * /
  function rearrangeProperties(propertyNames:Array):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapType"],
      requires: ["com.coremedia.cap.common.CapType"]
    };
});
