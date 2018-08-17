Ext.define("com.coremedia.cms.editor.sdk.components.DomElementUtils", function(DomElementUtils) {/*package com.coremedia.cms.editor.sdk.components {
/**
 * Utilities for DOM elements.
 * /
internal class DomElementUtils {
  /**
   * Retrieves the value of the given element.
   *
   * @param element element to retrieve value from
   * @param attributeName attribute to read
   * @return value of attribute; might be null or undefined
   * @throws Error if attributes cannot be accessed
   * /
  public static*/ function getAttribute$static(element/*:**/, attributeName/*:String*/)/*:String*/ {
    if (element.attributes) {
      return element.attributes[attributeName];
    } else if (element.getAttribute) {
      return element.getAttribute(attributeName);
    } else {
      throw new AS3.Error("element " + element + " has neither an attributes field nor a getAttribute function");
    }
  }/*

  /**
   * Sets the value of the given element.
   *
   * @param element element to set attribute value on
   * @param attributeName attribute to set
   * @param attributeValue value to set attribute to
   * @throws Error if attributes cannot be accessed
   * /
  public static*/ function setAttribute$static(element/*:**/, attributeName/*:String*/, attributeValue/*:String*/)/*:void*/ {
    if (element.attributes) {
      element.attributes[attributeName] = attributeValue;
    } else if (element.setAttribute) {
      element.setAttribute(attributeName, attributeValue);
    } else {
      throw new AS3.Error("element " + element + " has neither an attributes field nor a setAttribute function");
    }
  }/*

  /**
   * Removes the given attribute from the element.
   *
   * @param element element to remove attribute from
   * @param attributeName attribute to remove
   * @throws Error if attributes cannot be accessed
   * /
  public static*/ function removeAttribute$static(element/*:**/, attributeName/*:String*/)/*:void*/ {
    if (element.attributes) {
      delete element.attributes[attributeName];
    } else if (element.removeAttribute) {
      element.removeAttribute(attributeName);
    } else {
      throw new AS3.Error("element " + element + " has neither an attributes field nor a setAttribute function");
    }
  }/*

  /**
   * Appends (or sets) the given value on the given attribute.
   * @param element element to change attribute for
   * @param attributeName attribute to adjust
   * @param attributeValue value to set/append
   * @param separator separator between already existing value and new value
   * @throws Error if attributes cannot be accessed
   * /
  public static*/ function appendOrSetAttribute$static(element/*:**/, attributeName/*:String*/, attributeValue/*:String*/, separator/*:String = ' '*/)/*:void*/ {if(arguments.length<=3)separator=' ';
    var originalAttribute/*:String*/ = DomElementUtils.getAttribute(element, attributeName);
    var newValue/*:String*/;
    if (! !originalAttribute) {
      newValue = originalAttribute + separator + attributeValue;
    } else {
      newValue = attributeValue;
    }
    DomElementUtils.setAttribute(element, attributeName, newValue);
  }/*

  /**
   * Removes the given attribute value part from the given attribute. If the resulting (trimmed) value is empty
   * the attribute is removed instead.
   *
   * @param element element to adjust attribute for
   * @param attributeName attribute to adjust
   * @param attributeValue value to remove
   * @param separator separator for multiple values; multiple separator characters will be trimmed afterwards
   * @throws Error if attributes cannot be accessed
   * /
  public static*/ function reduceOrRemoveAttribute$static(element/*:**/, attributeName/*:String*/, attributeValue/*:String*/, separator/*:String = ' '*/)/*:void*/ {if(arguments.length<=3)separator=' ';
    var originalAttribute/*:String*/ = DomElementUtils.getAttribute(element, attributeName);
    var newValue/*:String*/ = "";
    if (! !originalAttribute) {
      // Remove string and adjust separators
      // Note: The implementation assumes that the attribute value as well as the separator does not require any
      // escaping. If this breaks, you need to think about escaping or other approaches.
      newValue = originalAttribute
              .replace(new RegExp(attributeValue, 'g'), '')
              .replace(new RegExp('[' + separator + ']+', 'g'), separator)
              .replace(new RegExp('^[' + separator + ']*|[' + separator + ']*$', 'g'), '');
    }
    if (! !newValue) {
      DomElementUtils.setAttribute(element, attributeName, newValue);
    } else {
      DomElementUtils.removeAttribute(element, attributeName);
    }
  }/*

}*/function DomElementUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: DomElementUtils$,
      statics: {
        getAttribute: getAttribute$static,
        setAttribute: setAttribute$static,
        removeAttribute: removeAttribute$static,
        appendOrSetAttribute: appendOrSetAttribute$static,
        reduceOrRemoveAttribute: reduceOrRemoveAttribute$static
      },
      requires: ["AS3.Error"]
    };
});
