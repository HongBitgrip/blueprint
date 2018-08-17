Ext.define("com.coremedia.cap.common.descriptors.LinkPropertyDescriptor", function(LinkPropertyDescriptor) {/*package com.coremedia.cap.common.descriptors {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapType;

/**
 * A descriptor of a property in which links to content can be stored.
 *
 * @see com.coremedia.cap.content.Content
 * /
[PublicApi]
public interface LinkPropertyDescriptor extends CapPropertyDescriptor {
  /**
   * Returns the type for objects that can be stored
   * in property values of this type.
   *
   * @return the type
   * /
  function get linkType():CapType;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapPropertyDescriptor"],
      requires: ["com.coremedia.cap.common.CapPropertyDescriptor"]
    };
});
