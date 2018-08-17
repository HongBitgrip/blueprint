Ext.define("DefinitionError", function(DefinitionError) {/*package {

/**
 * The DefinitionError class represents an error that occurs when user code attempts to define an identifier that is already defined. This error commonly occurs in redefining classes, interfaces, and functions.
 * /
public dynamic class DefinitionError extends Error {
  /**
   * Creates a new DefinitionError object.
   * @param message A string associated with the error.
   * /
  public*/ function DefinitionError$(message/*:String = ""*/) {if(arguments.length<=0)message="";
    this.super$9i1L(message);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "AS3.Error",
      constructor: DefinitionError$,
      super$9i1L: function() {
        AS3.Error.prototype.constructor.apply(this, arguments);
      },
      requires: ["AS3.Error"]
    };
});
