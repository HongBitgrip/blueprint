Ext.define("com.coremedia.ui.data.impl.SubBeanParent", function(SubBeanParent) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.Bean;

/**
 * A bean that may serve as a parent bean for a sub-bean.
 * /
public interface SubBeanParent extends Bean {
  /**
   * Add a dependency on the entire value of this bean.
   * /
  function dependencyOnValue():void;

  /**
   * Return the value at the given propertyPath, never wrapping the value as a sub-object.
   *
   * @param propertyPath the property path for retrieving the value
   * @param automaticallyInstantiate whether to instantiate sub-objects automatically
   * @return the value
   * /
  function getUnwrapped(propertyPath:*, automaticallyInstantiate:Boolean):*;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.Bean"],
      requires: ["com.coremedia.ui.data.Bean"]
    };
});
