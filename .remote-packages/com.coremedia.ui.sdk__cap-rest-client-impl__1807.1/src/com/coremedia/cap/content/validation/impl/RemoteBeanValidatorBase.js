Ext.define("com.coremedia.cap.content.validation.impl.RemoteBeanValidatorBase", function(RemoteBeanValidatorBase) {/*package com.coremedia.cap.content.validation.impl {

import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.validation.LocalIssues;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.data.validation.Validator;
import com.coremedia.ui.logging.Logger;

/**
 * A base class for Validators of RemoteBeans that ensures readability of validated beans.
 * It can handle an entity of type RemoteBean or of type Array containing RemoteBeans.
 * Only the readable beans are forwarded to the #validateReadableBeans() method.
 * It generates one Issue with severity WARN for all unreadable beans using the code 'notReadable'.
 * /
public class RemoteBeanValidatorBase implements Validator {
  public static const NOT_READABLE_ISSUE_CODE:String = 'notReadable';

  /**
   * To be overridden by subclasses. Either Array or RemoteBean.
   * @return the entity class
   * /
  public*/ function getEntityClass()/*:Class*/ {
    throw new AS3.Error("RemoteBeanValidator serves as base class; subclasses must override #getEntityClass()");
  }/*

  /**
   * To be overridden by subclasses. All RemoteBeans in entity are loaded and readable.
   * @param entity the original entity filtered by readability
   * @param issues the original issues object
   * /
  protected*/ function validateReadableBeans(entity/*:**/, issues/*:LocalIssues*/)/*:void*/ {
    throw new AS3.Error("RemoteBeanValidator serves as base class; subclasses must override #validateReadableBeans(entity:*, issues:LocalIssues)");
  }/*

  public*/ function validate(entity/*:**/, issues/*:LocalIssues*/)/*:void*/ {
    var array/*:Array*/ =AS3.as( entity,  Array);
    if (array) {
      this.validateArray$y2qj(array, issues);
    } else if (AS3.is(entity,  com.coremedia.ui.data.RemoteBean)) {
      this.validateSingleBean$y2qj(entity, issues);
    } else {
      com.coremedia.ui.logging.Logger.warn("RemoteBeanValidator: entity should only contain RemoteBeans, but found " + entity);
    }
  }/*

  private*/ function validateArray(array/*:Array*/, issues/*:LocalIssues*/)/*:void*/ {
    var pending/*:Boolean*/ = false;
    var readableBeans/*:Array*/ = [];
    //noinspection JSMismatchedCollectionQueryUpdate
    var unreadableBeans/*:Array*/ = [];

    for (var i/*:int*/ = 0; i < array.length; i++) {
      var bean/*:RemoteBean*/ =AS3.as( array[i],  com.coremedia.ui.data.RemoteBean);
      if (bean) {
        var accessible/*:Boolean*/ = com.coremedia.ui.data.RemoteBeanUtil.isAccessible(bean);
        if (accessible === undefined) {
          pending = true;
          continue;
        }
        if (accessible) {
          readableBeans.push(bean);
        } else {
          unreadableBeans.push(bean);
        }
      } else {
        com.coremedia.ui.logging.Logger.warn("RemoteBeanValidator: entity should only contain RemoteBeans, but found " + bean);
      }
    }

    if (unreadableBeans.length > 0) {
      issues.addIssue(com.coremedia.ui.data.validation.Severity.WARN, RemoteBeanValidatorBase.NOT_READABLE_ISSUE_CODE, null, unreadableBeans);
    }

    if (pending) {
      issues.setPending();
    } else {
      this.validateReadableBeans(readableBeans, issues);
    }
  }/*

  private*/ function validateSingleBean(bean/*:RemoteBean*/, issues/*:LocalIssues*/)/*:void*/ {
    var accessible/*:Boolean*/ = com.coremedia.ui.data.RemoteBeanUtil.isAccessible(bean);
    if (accessible === undefined) {
      issues.setPending();
    } else if (accessible) {
      this.validateReadableBeans(bean, issues);
    } else {
      issues.addIssue(com.coremedia.ui.data.validation.Severity.WARN, RemoteBeanValidatorBase.NOT_READABLE_ISSUE_CODE, null, 1);
    }
  }/*
}*/function RemoteBeanValidatorBase$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.validation.Validator"],
      getEntityClass: getEntityClass,
      validateReadableBeans: validateReadableBeans,
      validate: validate,
      validateArray$y2qj: validateArray,
      validateSingleBean$y2qj: validateSingleBean,
      constructor: RemoteBeanValidatorBase$,
      statics: {NOT_READABLE_ISSUE_CODE: 'notReadable'},
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.data.validation.Validator",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
