Ext.define("com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor", function(MarkupPropertyDescriptor) {/*package com.coremedia.cap.common.descriptors {

import com.coremedia.cap.common.CapPropertyDescriptor;

/**
 * A descriptor of a property in which markup can be stored.
 * /
[PublicApi]
public interface MarkupPropertyDescriptor extends CapPropertyDescriptor {

  /**
   * Returns the grammar for markup that can be stored in
   * property values of this type. If null, all markup values are valid for
   * this property.
   *
   * @return the grammar
   *
   * @see com.coremedia.cap.common.MarkupGrammar
   * /
  function get grammar():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapPropertyDescriptor"],
      requires: ["com.coremedia.cap.common.CapPropertyDescriptor"]
    };
});
