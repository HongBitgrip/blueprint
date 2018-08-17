Ext.define("com.coremedia.ui.data.error.NotExistsError", function(NotExistsError) {/*package com.coremedia.ui.data.error {
import com.coremedia.ui.data.*;

/**
 * An error indicating that a bean does not exist. (That is, while the
 * bean object exists, the abstract entity represented by the bean
 * does not exist.)
 * /
public class NotExistsError extends Error {
  private var bean:Bean;

  public*/ function NotExistsError$(bean/*:Bean = null*/, message/*:String = ""*/) {switch(arguments.length){case 0:bean=null;case 1:message="";}
    this.super$1SgV(message);
    this.bean$1SgV = bean;
  }/*

  /**
   * The bean that does not exist.
   * @return the bean
   * /
  public*/ function getBean()/*:Bean*/ {
    return this.bean$1SgV;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "AS3.Error",
      bean$1SgV: null,
      constructor: NotExistsError$,
      super$1SgV: function() {
        AS3.Error.prototype.constructor.apply(this, arguments);
      },
      getBean: getBean,
      requires: ["AS3.Error"]
    };
});
