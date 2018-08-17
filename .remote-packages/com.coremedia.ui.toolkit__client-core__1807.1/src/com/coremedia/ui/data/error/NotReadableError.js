Ext.define("com.coremedia.ui.data.error.NotReadableError", function(NotReadableError) {/*package com.coremedia.ui.data.error {
import com.coremedia.ui.data.*;

/**
 * An error indicating that a bean was not readable.
 * /
public class NotReadableError extends Error {
  private var bean:Bean;
  private var property:String;

  public*/ function NotReadableError$(bean/*:Bean = null*/, property/*:String = null*/, message/*:String = ""*/) {switch(arguments.length){case 0:bean=null;case 1:property=null;case 2:message="";}
    this.super$9OxB(message);
    this.bean$9OxB = bean;
    this.property$9OxB = property;
  }/*

  /**
   * The bean that was not readable.
   * @return the bean
   * /
  public*/ function getBean()/*:Bean*/ {
    return this.bean$9OxB;
  }/*

  /**
   * The name of the property that was not readable.
   * @return the name of the property
   * /
  public*/ function getProperty()/*:String*/ {
    return this.property$9OxB;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "AS3.Error",
      bean$9OxB: null,
      property$9OxB: null,
      constructor: NotReadableError$,
      super$9OxB: function() {
        AS3.Error.prototype.constructor.apply(this, arguments);
      },
      getBean: getBean,
      getProperty: getProperty,
      requires: ["AS3.Error"]
    };
});
