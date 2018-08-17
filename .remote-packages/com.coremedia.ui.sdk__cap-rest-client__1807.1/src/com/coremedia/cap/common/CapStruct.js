Ext.define("com.coremedia.cap.common.CapStruct", function(CapStruct) {/*package com.coremedia.cap.common {

import com.coremedia.ui.data.Bean;

/**
 * A typed object containing a number of properties.
 * /
[PublicApi]
public interface CapStruct extends Bean {
  /**
   * Returns this object's type.
   *
   * @return the type
   *
   * @see CapType
   * /
  function getType_():CapType;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
