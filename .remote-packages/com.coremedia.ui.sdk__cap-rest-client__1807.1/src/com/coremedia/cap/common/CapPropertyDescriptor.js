Ext.define("com.coremedia.cap.common.CapPropertyDescriptor", function(CapPropertyDescriptor) {/*package com.coremedia.cap.common {

/**
 * Descriptor for a property value that can be obtained
 * from a CapType.
 *
 * @see com.coremedia.cap.common.CapType
 * /
[PublicApi]
public interface CapPropertyDescriptor {
  /**
   * Return this descriptor's name.
   *
   * @return the name
   * /
  function get name():String;

  /**
   * Return the type of this property descriptor. Constants representing the
   * various types are declared in <code>CapPropertyDescriptorType</code>.
   *
   * <p>For structs, this is one of <code>BOOLEAN</code>,
   * <code>INTEGER</code>, <code>STRING</code>, <code>LINK</code>, or
   * <code>STRUCT</code>.
   * </p>
   *
   * <p>For contents, this is one of <code>DATE</code>,
   * <code>INTEGER</code>, <code>STRING</code>, <code>BLOB</code>, <code>LINK</code>,
   * <code>STRUCT</code>, or <code>MARKUP</code>.
   * </p>
   *
   * @return the type
   *
   * @see com.coremedia.cap.common.CapPropertyDescriptorType
   * /
  function get type():String;

  /**
   * Return whether property values this descriptor applies to
   * are atomic. Returns false, if arrays of values are stored in this
   * property. Single structs are considered
   * to be atomic for the purpose of this method.
   *
   * @return true, if property values are atomic
   * /
  function get atomic():Boolean;

  /**
   * Return whether property values this descriptor applies to
   * are arrays. Returns false, if atomic values are stored in this
   * property.
   *
   * @return true, if property values are arrays
   * /
  function get collection():Boolean;

  /**
   * Return, for a collection property,
   * the minimum cardinality of collection values that this property should hold.
   * A collection with a smaller size is not valid for this property.
   *
   * @return the minimum cardinality
   * /
  function get minCardinality():int;


  /**
   * Return, for a collection property,
   * the maximum cardinality of collection values that this property should hold.
   * A collection with a larger size is not valid for this property.
   *
   * @return the maximum cardinality
   * /
  function get maxCardinality():int;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
