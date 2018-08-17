Ext.define("com.coremedia.cms.editor.sdk.premular.EmptyIssues", function(EmptyIssues) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.validation.Issues;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

public class EmptyIssues implements Issues {
  private var entity:RemoteBean;

  public*/ function EmptyIssues$(entity/*:RemoteBean*/) {
    this.entity$Cli5 = entity;
  }/*

  public*/ function getEntity()/*:RemoteBean*/ {
    return this.entity$Cli5;
  }/*

  public*/ function isValid()/*:Boolean*/ {
    return true;
  }/*

  public*/ function getAll()/*:Array*/ {
    return [];
  }/*

  public*/ function getByProperty()/*:Bean*/ {
    return com.coremedia.ui.data.beanFactory.createLocalBean({});
  }/*

  public*/ function getGlobal()/*:Array*/ {
    return [];
  }/*

  public*/ function getUri()/*:String*/ {
    return "";
  }/*

  public*/ function getUriPath()/*:String*/ {
    return "";
  }/*

  public*/ function getAbsoluteUri()/*:String*/ {
    return "";
  }/*

  public*/ function load(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    callback(this.entity$Cli5);
  }/*

  public*/ function flush(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    callback(this.entity$Cli5);
  }/*

  public*/ function isLoaded()/*:Boolean*/ {
    return true;
  }/*

  public*/ function invalidate(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    if (callback) {
      com.coremedia.ui.util.EventUtil.invokeLater(callback, this.entity$Cli5);
    }
  }/*

  public*/ function addBeforeFlushListener(beforeFlush/*:Function*/)/*:void*/ {
  }/*

  public*/ function removeBeforeFlushListener(beforeFlush/*:Function*/)/*:void*/ {
  }/*

  public*/ function addPropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
  }/*

  public*/ function removePropertyChangeListener(property/*:**/, onChange/*:Function*/)/*:void*/ {
  }/*

  public*/ function hasPropertyChangeListener(property/*:**/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function addValueChangeListener(onChange/*:Function*/)/*:void*/ {
  }/*

  public*/ function removeValueChangeListener(onChange/*:Function*/)/*:void*/ {
  }/*

  public*/ function hasValueChangeListener()/*:Boolean*/ {
    return false;
  }/*

  public*/ function get(property/*:**/)/*:**/ {
    switch(property) {
      case "entity": return this.entity$Cli5;
      case "valid": return this.isValid();
      case "all": return this.getAll();
      case "byProperty": return this.getByProperty();
      case "global": return this.getGlobal();
    }
    return undefined;
  }/*

  public*/ function instantiate(property/*:**/)/*:**/ {
    return this.get(property);
  }/*

  public*/ function set(property/*:**/, value/*:**/)/*:Boolean*/ {
    throwNotModifiableError$static();
  }/*

  public*/ function toObject()/*:Object*/ {
    return {
      "entity": this.entity$Cli5,
      "valid": this.isValid(),
      "all": this.getAll(),
      "byProperty": this.getByProperty(),
      "global": this.getGlobal()
    };
  }/*

  public*/ function updateProperties(newValue/*:Object*/)/*:Boolean*/ {
    throwNotModifiableError$static();
  }/*

  public*/ function toJson()/*:String*/ {
    return com.coremedia.ui.util.ObjectUtils.toJson(this.toObject());
  }/*

  public*/ function getState()/*:BeanState*/ {
    return com.coremedia.ui.data.BeanState.READABLE;
  }/*

  public*/ function addAt(property/*:String*/, position/*:int = -1*/, value/*:* = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:position=-1;case 2:value=null;}
    throwNotModifiableError$static();
  }/*

  public*/ function removeAt(property/*:String*/, position/*:int = -1*/)/*:**/ {if(arguments.length<=1)position=-1;
    throwNotModifiableError$static();
  }/*

  private static*/ function throwNotModifiableError$static()/*:void*/ {
    throw new AS3.Error("empty issues cannot be updated");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.validation.Issues"],
      entity$Cli5: null,
      constructor: EmptyIssues$,
      getEntity: getEntity,
      isValid: isValid,
      getAll: getAll,
      getByProperty: getByProperty,
      getGlobal: getGlobal,
      getUri: getUri,
      getUriPath: getUriPath,
      getAbsoluteUri: getAbsoluteUri,
      load: load,
      flush: flush,
      isLoaded: isLoaded,
      invalidate: invalidate,
      addBeforeFlushListener: addBeforeFlushListener,
      removeBeforeFlushListener: removeBeforeFlushListener,
      addPropertyChangeListener: addPropertyChangeListener,
      removePropertyChangeListener: removePropertyChangeListener,
      hasPropertyChangeListener: hasPropertyChangeListener,
      addValueChangeListener: addValueChangeListener,
      removeValueChangeListener: removeValueChangeListener,
      hasValueChangeListener: hasValueChangeListener,
      get: get,
      instantiate: instantiate,
      set: set,
      toObject: toObject,
      updateProperties: updateProperties,
      toJson: toJson,
      getState: getState,
      addAt: addAt,
      removeAt: removeAt,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.validation.Issues",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
