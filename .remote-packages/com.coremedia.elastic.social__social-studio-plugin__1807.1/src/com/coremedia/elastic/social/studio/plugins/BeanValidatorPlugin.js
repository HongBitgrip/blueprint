Ext.define("com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin", function(BeanValidatorPlugin) {/*package com.coremedia.elastic.social.studio.plugins {

import com.coremedia.elastic.social.studio.model.BeanValidator;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.plugins.BindPlugin;

import ext.Component;
import ext.Ext;
import ext.form.field.Field;

import mx.resources.ResourceManager;

/**
 * This plugin validates the given property of a <code>Bean</code> given by the value expression
 * provided by the <code>BindToPlugin</code>. The <code>BeanValidatorPlugin</code> expects the
 * given bean to be a <code>BeanValidator</code>. It will try to extract it by browsing
 * through the parts of the given value expression, beginning with its leaf, until it finds a
 * <code>BeanValidator</code>. If no <code>BeanValidator</code> can be found this plugin will
 * simply do nothing.
 *
 * @see BindPlugin
 * @see BeanValidator
 * /
[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class BeanValidatorPlugin extends BindPlugin {

  /**
   * The name of the property which shall be validated.
   * /
  [Bindable]
  public var property:String;

  public*/ function BeanValidatorPlugin$(config/*:BeanValidatorPlugin = null*/) {if(arguments.length<=0)config=null;
    var superConfig/*:BindPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPlugin,Ext.apply({}, config));
    superConfig.boundValueChanged =AS3.bind( this,"boundValueChanged1");
    superConfig.componentChanged = null;
    superConfig.componentEvent = null;
    this.super$tcKX(superConfig);
  }/*

  internal*/ function boundValueChanged1(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var validator/*:BeanValidator*/ = getValidator$static(valueExpression);
    if (validator && AS3.getBindable(this,"property")) {
      validator.validateProperty(AS3.getBindable(this,"property"), function (message/*:String*/)/*:void*/ {
        markInvalid$static(component, message);
      }, function ()/*:void*/ {
        markValid$static(component);
      });
    }
  }/*

  private static*/ function getValidator$static(valueExpression/*:ValueExpression*/)/*:BeanValidator*/ {
    if (!valueExpression) {
      return null;
    }

    var currentValueExpression/*:ValueExpression*/ = valueExpression;
    while (currentValueExpression) {
      var value/*:**/ = currentValueExpression.getValue();
      if (AS3.is(value,  com.coremedia.elastic.social.studio.model.BeanValidator)) {
        return AS3.as( value,  com.coremedia.elastic.social.studio.model.BeanValidator);
      } else {
        currentValueExpression = currentValueExpression.getParent();
      }
    }

    return null;
  }/*

  private static*/ function markValid$static(component/*:Component*/)/*:void*/ {
    if (component) {
      var field/*:Field*/ =AS3.as( component,  Ext.form.field.Field);
      if (field) {
        field.clearInvalid();
      }
    }
  }/*

  private static*/ function markInvalid$static(component/*:Component*/, message/*:String*/)/*:void*/ {
    if (component) {
      var field/*:Field*/ =AS3.as( component,  Ext.form.field.Field);
      if (field) {
        field.markInvalid(mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + message));
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      constructor: BeanValidatorPlugin$,
      super$tcKX: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      boundValueChanged1: boundValueChanged1,
      config: {property: null},
      requires: [
        "Ext",
        "Ext.form.field.Field",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.plugins.BindPlugin",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.BeanValidator"]
    };
});
