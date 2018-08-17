Ext.define("com.coremedia.ui.data.impl.SubBean", function(SubBean) {/*package com.coremedia.ui.data.impl {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.WithEquals;

public class SubBean implements Bean, WithEquals {
  private var parent:SubBeanParent;
  /**
   * the property path into the value of the parent, pointing to the object
   * wrapped by this bean; if empty, indicates that the entire parent bean should be wrapped;
   * must not be null or undefined
   * /
  private var propertyPrefix:String;

  public*/ function SubBean$(parent/*:SubBeanParent*/, propertyPrefix/*:String*/) {
    this.parent$b6V2 = parent;
    this.propertyPrefix$b6V2 = propertyPrefix;
  }/*

  /**
   * Return the parent bean of this sub bean.
   * @return the parent
   * /
  protected*/ function getParentBean()/*:SubBeanParent*/ {
    return this.parent$b6V2;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    this.parent$b6V2.addPropertyChangeListener(this.prefixWithSeparator$b6V2(property), onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removePropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
    this.parent$b6V2.removePropertyChangeListener(this.prefixWithSeparator$b6V2(property), onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function hasPropertyChangeListener(property/*:**/)/*:Boolean*/ {
    return this.parent$b6V2.hasPropertyChangeListener(this.prefixWithSeparator$b6V2(property));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function addValueChangeListener(onChange/*:Function*/)/*:void*/ {
    this.parent$b6V2.addPropertyChangeListener(this.prefixWithSeparator$b6V2(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME), onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function removeValueChangeListener(onChange/*:Function*/)/*:void*/ {
    this.parent$b6V2.removePropertyChangeListener(this.prefixWithSeparator$b6V2(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME), onChange);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function hasValueChangeListener()/*:Boolean*/ {
    return this.parent$b6V2.hasPropertyChangeListener(this.prefixWithSeparator$b6V2(com.coremedia.ui.data.impl.BeanConstants.VALUE_CHANGED_EVENT_NAME));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function get (property/*:**/)/*:**/ {
    return this.parent$b6V2.get(this.prefix$b6V2(property));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function instantiate(property/*:**/)/*:**/ {
    return this.parent$b6V2.instantiate(this.prefix$b6V2(property));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function set (property/*:**/, value/*:**/)/*:Boolean*/ {
    var newValue/*:Object*/ = {};
    newValue[property] = value;
    return this.updateProperties(newValue);
  }/*

  public*/ function addAt(property/*:String*/, position/*:int = -1*/, value/*:* = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position=-1;case 2:value=null;}
    this.getParentBean().addAt(this.prefix$b6V2(property), position, value);
  }/*

  // Not yet in public API of Bean. (Bean by itself should probably not talk about sub-beans.)
  public*/ function removeAt(property/*:String*/, position/*:int = -1*/)/*:**/ {if(arguments.length<=1)position=-1;
    return this.getParentBean().removeAt(this.prefix$b6V2(property), position);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function toObject()/*:Object*/ {
    this.parent$b6V2.dependencyOnValue();
    return deepCopy$static(this.parent$b6V2.getUnwrapped(this.propertyPrefix$b6V2, false));
  }/*

  
  /**
   * Create a deep (transitive) copy of the given object.
   * This method only recurses into genuine Object and Array values.
   * @param object the object to copy
   * @return a deep copy of the given object
   * /
  private static*/ function deepCopy$static(object/*:**/)/*:**/ {
    if (!object || typeof object !== "object" || object.constructor !== Object) {
      return object;
    }
    var copy/*:Object*/ = {};
    for (var property/*:String*/ in object) {
      var value/*:**/ = object[property];
      var copiedValue/*:**/ = value;
      // only recurse for simple Objects and Arrays:
      if (value && typeof value === "object") {
        switch (value.constructor) {
          case Object:
            copiedValue = deepCopy$static(value);
            break;
          case Array:
            copiedValue = value.map(deepCopy$static);
        }
      }
      copy[property] = copiedValue;
    }
    return copy;
  }/*
  
  /**
   * @inheritDoc
   * /
  public*/ function updateProperties(newValue/*:Object*/)/*:Boolean*/ {
    var prefixedNewValue/*:Object*/ = {};
    for (var prop/*:String*/ in newValue) {
      var propertyPath/*:String*/ = this.prefix$b6V2(prop);
      prefixedNewValue[propertyPath] = newValue[prop];
    }
    return this.parent$b6V2.updateProperties(prefixedNewValue);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function toJson()/*:String*/ {
    return com.coremedia.ui.util.ObjectUtils.toJson(this.toObject());
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getState()/*:BeanState*/ {
    return this.parent$b6V2.getState();
  }/*

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:SubBean*/ =AS3.as( o,  SubBean);
    return that && this.parent$b6V2 === that.parent$b6V2 && this.propertyPrefix$b6V2 === that.propertyPrefix$b6V2;
  }/*

  private*/ function prefix(property/*:**/)/*:String*/ {
    return com.coremedia.ui.data.impl.PropertyPathUtil.append(this.propertyPrefix$b6V2, property);
  }/*

  // Mind the special contract between SubBean and BeanImpl: if the property name starts with the
  // PropertyPathUtil.INTERNAL_PROPERTY_PATH_SEPARATOR, events should be sent on behalf of the SubBean.
  // Thus, always prepend the separator, even if prefix is empty.
  private*/ function prefixWithSeparator(property/*:**/)/*:String*/ {
    return com.coremedia.ui.data.impl.PropertyPathUtil.appendWithSeparator(this.propertyPrefix$b6V2, property);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.util.WithEquals"
      ],
      parent$b6V2: null,
      propertyPrefix$b6V2: null,
      constructor: SubBean$,
      getParentBean: getParentBean,
      addPropertyChangeListener: addPropertyChangeListener,
      removePropertyChangeListener: removePropertyChangeListener,
      hasPropertyChangeListener: hasPropertyChangeListener,
      addValueChangeListener: addValueChangeListener,
      removeValueChangeListener: removeValueChangeListener,
      hasValueChangeListener: hasValueChangeListener,
      get: get,
      instantiate: instantiate,
      set: set,
      addAt: addAt,
      removeAt: removeAt,
      toObject: toObject,
      updateProperties: updateProperties,
      toJson: toJson,
      getState: getState,
      equals: equals,
      prefix$b6V2: prefix,
      prefixWithSeparator$b6V2: prefixWithSeparator,
      requires: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.WithEquals"
      ],
      uses: [
        "com.coremedia.ui.data.impl.BeanConstants",
        "com.coremedia.ui.data.impl.PropertyPathUtil"
      ]
    };
});
