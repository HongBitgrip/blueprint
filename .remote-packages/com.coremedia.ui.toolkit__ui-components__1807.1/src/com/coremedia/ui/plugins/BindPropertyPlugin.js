Ext.define("com.coremedia.ui.plugins.BindPropertyPlugin", function(BindPropertyPlugin) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.form.field.DateField;
import ext.form.field.Field;
import ext.menu.CheckItem;

import net.jangaroo.ext.Exml;

/**
 * A simple plugin that binds a component property to a property of a given Bean.
 * /
[PublicApi]
public class BindPropertyPlugin extends BindPlugin {

  /**
   * Globally turns non-strict consistency checks on / off for
   * all BindPropertyPlugins where the config option
   * 'disableStrictConsistency' is not set explicitly.
   *
   * @see BindPropertyPlugin.disableStrictConsistency
   * /
  public static var DISABLE_STRICT_CONSISTENCY:Boolean = true;

  private static const*/var NO_UPDATE$static/*:Object*/;/* =*/function NO_UPDATE$static_(){NO_UPDATE$static=( {});};/*

  /**
   * A function that transforms the value before it is passed to the component.
   * Example function:
   * <code>function (value) { return value.toUpperCase(); }</code>
   * /
  public var transformer:Function;

  /**
   * A function that transforms the value of the component property before it is passed to the bean.
   * Example function:
   * <code>function (value) { return value.toUpperCase(); }</code>
   * /
  public var reverseTransformer:Function;

  /**
   * The name of the component property that should be bound. Typical values are 'value'.
   * /
  public var componentProperty:String;

  /**
   * The value to bind if the expression value is undefined.
   * /
  public var ifUndefined:Object;

  /**
   * If true, changes to the component property are written back to the bean. Default: false.
   * /
  public var bidirectional:Boolean;

  /**
   * Whether to skip the binding if the computed value is undefined.
   * Defaults to false.
   * /
  public var skipIfUndefined:Boolean;

  /**
   * Predicate hooks to determine whether changes to the plugin's bindTo ValueExpression
   * are allowed to be written through to the component's value.
   *
   * Empty by default.
   * /
  [Bindable]
  public var setComponentPropertyAllowedPredicates:Array =*/function setComponentPropertyAllowedPredicates_(){this.setComponentPropertyAllowedPredicates=( []);}/*;

  /**
   * Predicate hooks to determine whether changes to the component's value
   * are allowed to be written through to the plugin's bindTo ValueExpression.
   *
   * Empty by default.
   * /
  [Bindable]
  public var setVEAllowedPredicates:Array =*/function setVEAllowedPredicates_(){this.setVEAllowedPredicates=( []);}/*;

  /**
   * Whether to skip the binding if either the component property can be derived
   * from the expression value or the expression value can be derived from the
   * component property.
   * Defaults to true.
   * /
  public var skipIfConsistent:Boolean;

  /**
   * If this config option is set, the check whether the component's
   * property value and the bindTo's value are consistent is carried out
   * in a non-strict way. This means that 'null', 'undefined',
   * a zero-length array and a zero-length string are considered
   * as equal (cf. Ext.isEmpty()).
   *
   * This config option has precedence over the global configuration
   * BindPropertyPlugin.DISABLE_STRICT_CONSISTENCY.
   * /
  public var disableStrictConsistency:Boolean;

  private var nextExpectedValue:*;
  private var hasNextExpectedValue:Boolean;

  /**
   * A simple plugin that binds a component property to a property of a given Bean.
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.BindPropertyPlugin
   * /
  public*/ function BindPropertyPlugin$(config/*:BindPropertyPlugin = null*/) {if(arguments.length<=0)config=null;
    this.transformer = config.transformer;
    this.reverseTransformer = config.reverseTransformer;
    this.componentProperty = config.componentProperty || 'value';
    this.ifUndefined = config.ifUndefined;
    this.bidirectional = config.bidirectional || false;
    this.skipIfUndefined = config.skipIfUndefined || false;
    this.skipIfConsistent = config.skipIfConsistent !== false;
    this.disableStrictConsistency = config.disableStrictConsistency;

    config.bindTo = config.transformer ? com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(config.bindTo, config.transformer) : config.bindTo;
    var superConfig/*:BindPlugin*/ = AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    superConfig.boundValueChanged =AS3.bind( this,"boundPropertyValueChanged$zBVN");
    if (config.bidirectional) {
      superConfig.componentChanged =AS3.bind( this,"componentChangedProperty$zBVN");
    }
    this.super$zBVN(net.jangaroo.ext.Exml.apply(superConfig, config));setComponentPropertyAllowedPredicates_.call(this);setVEAllowedPredicates_.call(this);;
  }/*

  private*/ function getComponentValue()/*:**/ {
    return com.coremedia.ui.util.ObjectUtils.getProperty(this.getComponent(), this.componentProperty);
  }/*

  private*/ function getExpressionValue()/*:**/ {
    var value/*:**/ = this.getBindTo().getValue();
    return value;
  }/*

  private*/ function getExpressionValueFromComponent()/*:**/ {
    var value/*:**/ = this.getComponentValue$zBVN();
    if (this.reverseTransformer) {
      value = value === undefined ? undefined : this.reverseTransformer(value);
    }
    if (value === undefined && this.skipIfUndefined) {
      value = NO_UPDATE$static;
    }
    return value;
  }/*

  public*/ function isConsistent()/*:Boolean*/ {
    try {
      return this.bidirectional && this.equal$zBVN(this.getExpressionValue$zBVN(), this.getExpressionValueFromComponent$zBVN()) ||
              this.equal$zBVN(this.getComponentValue$zBVN(), this.getComponentValueFromExpression$zBVN());
    } catch (e/*:**/) {
      // Possibly a component did not provide its current value or a value
      // cannot be transformed. The values cannot be considered consistent.
      return false;
    }
  }/*

  private*/ function equal(object/*:Object*/, object2/*:Object*/)/*:Boolean*/ {
    var disableStrict/*:Boolean*/ = this.disableStrictConsistency;
    if (disableStrict === undefined) {
      disableStrict = BindPropertyPlugin.DISABLE_STRICT_CONSISTENCY;
    }

    if (disableStrict) {
      if (Ext.isEmpty(object)) {
        object = null;
      }
      if (Ext.isEmpty(object2)) {
        object2 = null;
      }
    }

    return com.coremedia.ui.util.ObjectUtils.equal(object, object2);
  }/*

  private*/ function getComponentValueFromExpression()/*:**/ {
    var value/*:**/ = this.getExpressionValue$zBVN();
    if (value === undefined) {
      value = this.ifUndefined;
    }
    if (value === undefined && this.skipIfUndefined) {
      value = NO_UPDATE$static;
    }
    return value;
  }/*

  private*/ function componentChangedProperty()/*:void*/ {var this$=this;
    var component/*:Component*/ = this.getComponent();
    if (AS3.is(component,  Ext.form.field.Field) && !(AS3.is(component,  Ext.form.field.Date))
            && this.componentProperty === 'value' && !(AS3.as(component,  Ext.form.field.Field)).isValid()) {
      // ignore invalid values - except for DateFields
      /*
       (In DateFields the validity is checked against the raw value, but getValue() always returns a valid value.
       When deleting via backspace the only change event is fired while the field is invalid, so we cannot ignore
       this.)
       */
      return;
    }

    var value/*:**/ = this.getExpressionValueFromComponent$zBVN();
    var valueExpression/*:ValueExpression*/ = this.getBindTo();
    if (value === NO_UPDATE$static) {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Not setting value of expression " + valueExpression + ", because value is not ready");
    } else if (this.skipIfConsistent && this.isConsistent()) {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Not setting value of expression " + valueExpression + ", because current values are consistent");
    } else {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Set value of expression " + valueExpression + " to " + value);
      this.nextExpectedValue$zBVN = value;
      this.hasNextExpectedValue$zBVN = true;

      var setVEAllowed/*:Boolean*/ = AS3.getBindable(this,"setVEAllowedPredicates").every(function (predicate/*:Function*/)/*:Boolean*/ {
        return predicate.call(null, component, value, this$.bindTo);
      });

      if (setVEAllowed) {
        valueExpression.setValue(value);
      }
    }
  }/*

  private*/ function boundPropertyValueChanged()/*:void*/ {var this$=this;
    var value/*:**/ = this.getComponentValueFromExpression$zBVN();
    var component/*:Component*/ = this.getComponent();
    if (value === NO_UPDATE$static) {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Not setting value of component " + component);
    } else if (this.skipIfConsistent && this.isConsistent()) {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Not setting value of component " + component + ", because current values are consistent");
    } else {
      com.coremedia.ui.logging.Logger.debug(BindPropertyPlugin + " Set value of component " + component + " to " + value);

      var setComponentPropertyAllowed/*:Boolean*/ = AS3.getBindable(this,"setComponentPropertyAllowedPredicates").every(function (predicate/*:Function*/)/*:Boolean*/ {
        return predicate.call(null, component, value, this$.bindTo);
      });

      if (setComponentPropertyAllowed
              && (!this.bidirectional || !this.hasNextExpectedValue$zBVN || this.nextExpectedValue$zBVN !== value)) {
        this.setComponentProperty(component, this.componentProperty, value);
        this.nextExpectedValue$zBVN = undefined;
        this.hasNextExpectedValue$zBVN = false;
      }
    }
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (this.bidirectional && !this.componentEvent) {
      if (AS3.is(component,  Ext.button.Button)) {
        // We only support buttons with enableToggle=true
        this.componentEvent = "toggle";
      } else if (AS3.is(component,  Ext.menu.CheckItem)) {
        this.componentEvent = "checkchange";
      } else {
        this.componentEvent = "change";
      }
    }
    com.coremedia.ui.plugins.BindPlugin.prototype.init.call(this,component);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      transformer: null,
      reverseTransformer: null,
      componentProperty: null,
      ifUndefined: null,
      bidirectional: false,
      skipIfUndefined: false,
      skipIfConsistent: false,
      disableStrictConsistency: false,
      nextExpectedValue$zBVN: undefined,
      hasNextExpectedValue$zBVN: false,
      constructor: BindPropertyPlugin$,
      super$zBVN: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      getComponentValue$zBVN: getComponentValue,
      getExpressionValue$zBVN: getExpressionValue,
      getExpressionValueFromComponent$zBVN: getExpressionValueFromComponent,
      isConsistent: isConsistent,
      equal$zBVN: equal,
      getComponentValueFromExpression$zBVN: getComponentValueFromExpression,
      componentChangedProperty$zBVN: componentChangedProperty,
      boundPropertyValueChanged$zBVN: boundPropertyValueChanged,
      init: init,
      config: {
        setComponentPropertyAllowedPredicates: undefined,
        setVEAllowedPredicates: undefined
      },
      statics: {
        DISABLE_STRICT_CONSISTENCY: true,
        NO_UPDATE: undefined,
        __initStatics__: function() {
          NO_UPDATE$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.button.Button",
        "Ext.form.field.Date",
        "Ext.form.field.Field",
        "Ext.menu.CheckItem",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.util.ObjectUtils",
        "net.jangaroo.ext.Exml"
      ]
    };
});
