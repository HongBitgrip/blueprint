Ext.define("net.jangaroo.ext.create", function(create) {/*package net.jangaroo.ext {
import joo.JooClassDeclaration;
import joo.getQualifiedObject;

/**
 * Create a target object from the given config class and object.
 * This function is mainly used by code generated from EXML source files.
 * <p>First, an instance of the config class is created with the given config parameter.
 * Then, the target class, retrieved from the <code>ExtConfig</code> annotation in the
 * config class, is instantiated with the config class instance.
 * </p>
 * @param configClass the config class
 * @param config the untyped config object
 * @return the created target object
 * /
public*/ function create(configClass/*:Class*/,  config/*:Object*/)/*:Object*/ {
  var typedConfig/*:Object*/ = new configClass(config);
  var configClassDeclaration/*:JooClassDeclaration*/ = configClass['$class'];
  var extConfigAnnotation/*:Object*/ = configClassDeclaration.metadata.ExtConfig;
  if (!extConfigAnnotation || !extConfigAnnotation.target) {
    throw new AS3.Error("Missing [ExtConfig(target='...')] annotation in config class "
            + configClassDeclaration.fullClassName);
  }
  var targetClass/*:Class*/ = joo.getQualifiedObject(extConfigAnnotation.target);
  return new targetClass(typedConfig);
  
}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: function() {
        return create;
      },
      requires: ["AS3.Error"]
    };
});
