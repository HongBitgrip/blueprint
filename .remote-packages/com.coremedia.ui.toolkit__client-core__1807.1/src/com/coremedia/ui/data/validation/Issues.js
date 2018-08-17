Ext.define("com.coremedia.ui.data.validation.Issues", function(Issues) {/*package com.coremedia.ui.data.validation {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.RemoteBean;

/**
 * A collection of issues that apply to an entity.
 * /
[PublicApi]
public interface Issues extends RemoteBean {

  /**
   * Return the entity affected by these issues.
   *
   * @return the entity
   * /
  function getEntity():RemoteBean;

  /**
   * Return whether the entity is valid, that is, whether its list of issues is empty.
   *
   * @return whether the entity is valid
   * /
  function isValid():Boolean;
  
  /**
   * Return all issues of the entity in the form of <code>Issue</code> objects.
   *
   * @return the issues
   *
   * @see Issue
   * /
  function getAll():Array;

  /**
   * Return a bean that stores in each of its properties the list of issues that are bound to the
   * corresponding property of the entity. Each defined property of the bean is either
   * an empty list or a list of <code>Issue</code> objects.
   *
   * @return a bean that stores sorted by property
   * /
  function getByProperty():Bean;

  /**
   * Return those issues of the entity that are not bound to a single property.
   * The result is an array of <code>Issue</code> objects.
   *
   * @return the issues that are not bound to a single property
   *
   * @see Issue
   * /
  function getGlobal():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
