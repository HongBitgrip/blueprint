Ext.define("com.coremedia.cap.common.CapPropertyDescriptorType", function(CapPropertyDescriptorType) {/*package com.coremedia.cap.common {

/**
 * Constants for the names of all available CMS property types.
 * /
[PublicApi]
public class CapPropertyDescriptorType {
  /**
   * The descriptor type of an integer property.
   * /
  public static const INTEGER:String = "INTEGER";
  /**
   * The descriptor type of a date property.
   * /
  public static const DATE:String = "DATE";
  /**
   * The descriptor type of a string property.
   *
   * @see com.coremedia.cap.common.descriptors.StringPropertyDescriptor
   * /
  public static const STRING:String = "STRING";
  /**
   * The descriptor type of a BLOB property.
   *
   * @see com.coremedia.cap.common.descriptors.BlobPropertyDescriptor
   * /
  public static const BLOB:String = "BLOB";
  /**
   * The descriptor type of a link property.
   *
   * @see com.coremedia.cap.common.descriptors.LinkPropertyDescriptor
   * /
  public static const LINK:String = "LINK";
  /**
   * The descriptor type of a markup property.
   *
   * @see com.coremedia.cap.common.descriptors.MarkupPropertyDescriptor
   * /
  public static const MARKUP:String = "MARKUP";
  /**
   * The descriptor type of a boolean property.
   * /
  public static const BOOLEAN:String = "BOOLEAN";
  /**
   * The descriptor type of a Struct property.
   * /
  public static const STRUCT:String = "STRUCT";

}*/function CapPropertyDescriptorType$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CapPropertyDescriptorType$,
      statics: {
        INTEGER: "INTEGER",
        DATE: "DATE",
        STRING: "STRING",
        BLOB: "BLOB",
        LINK: "LINK",
        MARKUP: "MARKUP",
        BOOLEAN: "BOOLEAN",
        STRUCT: "STRUCT"
      }
    };
});
