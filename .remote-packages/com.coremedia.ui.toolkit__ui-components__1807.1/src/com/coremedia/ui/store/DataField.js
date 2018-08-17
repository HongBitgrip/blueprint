Ext.define("com.coremedia.ui.store.DataField", function(DataField) {/*package com.coremedia.ui.store {
import ext.data.field.DataField;

/**
 * A specialized data field for use with the <code>BeanRecord</code> class and the <code>BindListPlugin</code>.
 * /
[PublicApi]
public class DataField extends DataField {

  [ExtConfig]
  /**
   * An object to be used when the mapping or the regular convert function threw an error; if this object is a
   * function, it is called with the error as its first argument and the bean record as its second argument and the
   * result is used as the field value; otherwise, the value is used directly.
   * /
  public var ifError:Object;

  [ExtConfig]
  /**
   * An object to be used when the mapping or the regular convert function threw an unreadable error; if this object
   * is a function, it is called with the error as its first argument and the bean record as its second argument and
   * the result is used as the field value; otherwise, the value is used directly.
   * /
  public var ifUnreadable:Object;

  [ExtConfig]
  /**
   * Whether to encode the field value before inserting it into the store. Defaults to true for string properties.
   * /
  public var encode:Boolean = true;

  public*/ function DataField$(config/*:com.coremedia.ui.store.DataField = null*/) {if(arguments.length<=0)config=null;
    this.super$oA5V(config);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.field.Field",
      metadata: {"": ["PublicApi"]},
      ifError: null,
      ifUnreadable: null,
      encode: true,
      constructor: DataField$,
      super$oA5V: function() {
        Ext.data.field.Field.prototype.constructor.apply(this, arguments);
      },
      requires: ["Ext.data.field.Field"]
    };
});
