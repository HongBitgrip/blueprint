Ext.define("com.coremedia.ui.data.validation.validate", function(validate) {/*package com.coremedia.ui.data.validation {
import com.coremedia.ui.data.impl.LocalIssuesImpl;

/**
 * Apply the given validator to the given entity and return the list of resulting issues.
 * In case of an undefined entity, undefined will be returned.
 * @param entity the entity to validate
 * @param validator the validator to apply
 * @return the list of resulting issues
 * /
public*/ function validate(entity/*:**/, validator/*:Validator*/)/*:Vector.<Issue>*/ {
  if (entity === undefined) {
    return AS3.cast(Vector$object/*.<Issue>*/,undefined);
  }
  if (validator.getEntityClass() !== null && entity !== null && !(AS3.is(entity,  validator.getEntityClass()))) {
    throw new TypeError("Validator " + validator + " called with entity of wrong class " + entity);
  }
  var issues/*:LocalIssuesImpl*/ = new com.coremedia.ui.data.impl.LocalIssuesImpl(entity);
  validator.validate(entity, issues);
  return issues.getIssues();
}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      __factory__: function() {
        return validate;
      },
      requires: ["com.coremedia.ui.data.impl.LocalIssuesImpl"]
    };
});
