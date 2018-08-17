Ext.define("com.coremedia.cap.common.descriptors.StringPropertyDescriptor", function(StringPropertyDescriptor) {/*package com.coremedia.cap.common.descriptors {

import com.coremedia.cap.common.CapPropertyDescriptor;

/**
 * A descriptor of a property in which strings can be stored.
 * /
[PublicApi]
public interface StringPropertyDescriptor extends CapPropertyDescriptor {
  /**
   * Returns the maximum number of characters,
   * that can be stored in property values of this type.
   *
   * @return the maximum number of characters
   * /
  function get length():int;

  /**
   * Returns the maximum number of bytes,
   * that can be stored in property values of this type.
   *
   * @return the maximum number of bytes
   * /
  function get encodedLength():int;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapPropertyDescriptor"],
      requires: ["com.coremedia.cap.common.CapPropertyDescriptor"]
    };
});
