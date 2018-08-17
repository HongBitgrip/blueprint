Ext.define("com.coremedia.cap.common.CapType", function(CapType) {/*package com.coremedia.cap.common {


/**
 * A type of an API object. For example a struct type or a content type.
 * /
[PublicApi]
public interface CapType {
  /**
   * Return this CapType's parent type.
   * Returns null, if there is no parent type.
   *
   * @return this CapType's parent type, or null, if there is no parent type
   * /
  function getParent():CapType;

  /**
   * Return whether the CapType with the given name
   * equals this or is in the list of this CapType's transitive
   * parents.
   *
   * @param type the (name of the) CapType to compare this CapType to
   * @return true, if the CapType with the given name equals this or is in the list of this
   *   CapType's transitive parents
   *
   * @see #getParent()
   * /
  function isSubtypeOf(type:*):Boolean;

  /**
   * Return this type's name.
   *
   * @return this type's name
   * /
  function getName():String;

  /**
   * Return whether this type is abstract, that is, it cannot
   * have instances and thus no objects of this type
   * may be created.
   *
   * @return true, if this type is abstract, that is, it cannot not
   * have instances and thus no objects of this type may be created
   * /
  function isAbstract():Boolean;

  /**
   * Return whether this type is concrete, i.e. objects from this
   * type may be created.
   *
   * @return true, if this type is concrete, i.e. objects from this
   * type may be created
   * /
  function isConcrete():Boolean;

  /**
   * Return this type's human readable description.
   *
   * @return this type's human readable description
   * /
  function getDescription():String;

  /**
   * Return all descriptors declared in this type,
   * excluding inherited ones, in declaration order.
   *
   * <p>The returned list is a read-only snapshot of the current
   * state and may not be modified.</p>
   *
   * @return all descriptors declared in this
   * type, excluding inherited ones, in declaration order
   *
   * @see #getDescriptors()
   * @see com.coremedia.cap.common.CapPropertyDescriptor
   * /
  function getDirectDescriptors():Array;

  /**
   * Return all descriptors declared in this type,
   * including inherited ones, ordered from generic to specific.
   *
   * <p>Descriptors are sorted from the most generic to the most specific
   * type.</p>
   *
   * <p>The returned list is a read-only snapshot of the current
   * state and may not be modified.</p>
   *
   * @return an array of all descriptors declared in this
   * type, including inherited ones and ordered from generic to specific
   *
   * @see com.coremedia.cap.common.CapPropertyDescriptor
   * /
  function getDescriptors():Array;

  /**
   * Return the CapPropertyDescriptor with the given name (lookup includes inherited ones).
   * Returns null, if no such descriptor exists.
   *
   * @param propertyName the name of the CapPropertyDescriptor to return
   * @return the CapPropertyDescriptor with the given name (lookup includes inherited ones)
   * or null, if no such descriptor exists
   * /
  function getDescriptor(propertyName:String):CapPropertyDescriptor;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
