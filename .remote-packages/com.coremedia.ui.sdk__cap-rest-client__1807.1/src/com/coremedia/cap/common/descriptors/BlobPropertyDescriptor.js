Ext.define("com.coremedia.cap.common.descriptors.BlobPropertyDescriptor", function(BlobPropertyDescriptor) {/*package com.coremedia.cap.common.descriptors {

import com.coremedia.cap.common.CapPropertyDescriptor;

/**
 * A descriptor of a property in which BLOBs can be stored.
 *
 * @see com.coremedia.ui.data.Blob
 * /
[PublicApi]
public interface BlobPropertyDescriptor extends CapPropertyDescriptor {
  /**
   * Returns the type for objects that can be stored
   * in property values of this type.
   *
   * @return the type
   * /
  function get contentType():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapPropertyDescriptor"],
      requires: ["com.coremedia.cap.common.CapPropertyDescriptor"]
    };
});
