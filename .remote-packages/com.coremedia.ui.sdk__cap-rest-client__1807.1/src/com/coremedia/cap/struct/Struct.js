Ext.define("com.coremedia.cap.struct.Struct", function(Struct) {/*package com.coremedia.cap.struct {
import com.coremedia.cap.common.CapStruct;

/**
 * A struct is a dynamically typed record stored in an XML property of the content repository.
 * /
[PublicApi]
public interface Struct extends CapStruct {
  /**
   * Return the type of this struct. The type object allows you to add and remove property declarations.
   * @return the type object
   * /
  function getType(): StructType;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapStruct"],
      requires: ["com.coremedia.cap.common.CapStruct"]
    };
});
