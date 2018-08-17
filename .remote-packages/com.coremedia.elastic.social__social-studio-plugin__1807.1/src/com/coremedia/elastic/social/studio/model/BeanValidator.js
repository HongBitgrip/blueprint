Ext.define("com.coremedia.elastic.social.studio.model.BeanValidator", function(BeanValidator) {/*package com.coremedia.elastic.social.studio.model {

import com.coremedia.ui.data.Bean;

/**
 * This interface describes a validator for <code>Bean</code> objects. This interface is used
 * by the <code>BeanValidatorPlugin</code> in order to implement server side validation.
 *
 * @see BeanValidatorPlugin
 * /
public interface BeanValidator extends Bean {
  /**
   * Validates exactly one property described by the given <code>propertyName</code>. Its result
   * will be provided via the given callback functions respectively so that it is intended to be
   * used espacially for asynchronous server side validation.
   * <p>
   *   The <code>BeanValidatorPlugin</code> calls this method to validate the value within a
   *   given <code>Field</code>.
   * </p>
   *
   * @param propertyName the propertyname of this bean to be validated.
   * @param invalid the callback called if the properties value is invalid. This function will
   * be passed one string parameter, the error message or a message key, depending on what the
   * implementation uses.
   * @param valid the callback with no parameter at all, called if the properties value is invalid.
   *
   * @see BeanPropertyValidator
   * /
  function validateProperty(propertyName:String, invalid:Function, valid:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
