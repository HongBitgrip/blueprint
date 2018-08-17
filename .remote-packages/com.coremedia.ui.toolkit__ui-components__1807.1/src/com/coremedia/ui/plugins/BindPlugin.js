Ext.define("com.coremedia.ui.plugins.BindPlugin", function(BindPlugin) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.LayoutUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.form.field.Field;
import ext.plugin.AbstractPlugin;

/**
 * A simple plugin that calls a function when a property of a given Bean changed. This plugin is not bidirectional.
 *
 * @see com.coremedia.ui.plugins.BindPlugin
 * /
[PublicApi]
public class BindPlugin extends AbstractPlugin {

  private var component:Component;

  /**
   * Optional JSON value for a new Bean.
   * /
  public var value:*;

  /**
   * The value expression that this plugin binds to.
   * /
  public var bindTo:ValueExpression;

  /**
   * A function that is called when the value that this plugin binds-to is changed.
   * @example Example function:
   * <listing version="3.0">
   * function (component:Component, valueExpression:ValueExpression):void {
   * component.setValue(valueExpression.getValue());
   * }
   * </listing>
   * /
  public var boundValueChanged:Function;

  /**
   * A function that is called when the event defined in 'componentEvent' is fired.
   * If not set, nothing happens. Function signature:
   * <code>function(component:Component, valueExpression:ValueExpression):void</code>
   * /
  public var componentChanged:Function;

  /**
   * The name of the component event that should be listened to. Typical values are 'value'.
   * /
  public var componentEvent:String;

  // TODO: currently for internal use only
  // EventUtil.invokeLater() (applies here because of ValueExpression listener)
  // pools multiple calls and processes them in a bulk surrounded
  // by an Ext.suspendLayouts() / Ext.resumeLayouts() wrap.
  // Setting this config option to true explicitly allows layouting during update.
  internal var updateWithLayout:Boolean;

  /**
   * A simple plugin that calls a function when a property of a given Bean changed. This plugin is not bidirectional.
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.BindPlugin
   * /
  public*/ function BindPlugin$(config/*:BindPlugin = null*/) {this.super$WK2Y();if(arguments.length<=0)config=null;
    this.value = config.value;
    this.bindTo = config.bindTo;
    this.boundValueChanged = config.boundValueChanged;
    this.componentEvent = config.componentEvent;
    this.componentChanged = config.componentChanged;
    this.updateWithLayout = config.updateWithLayout;
  }/*

  private*/ function propertyChanged()/*:void*/ {
    if (this.updateWithLayout) {
      com.coremedia.ui.util.LayoutUtil.runWithLayouts(this.boundValueChanged, null, this.component$WK2Y, this.bindTo);
    } else {
      this.boundValueChanged(this.component$WK2Y, this.bindTo);
    }
  }/*

  protected*/ function onComponentDestroy()/*:void*/ {
    this.bindTo.removeChangeListener(AS3.bind(this,"propertyChanged$WK2Y"));
    if (this.componentEvent && this.componentChanged) {
      this.component$WK2Y.removeListener(this.componentEvent,AS3.bind( this,"componentChangedWrapper$WK2Y"));
    }
    this.component$WK2Y = null;
  }/*

  private*/ function componentChangedWrapper()/*:void*/ {
    this.componentChanged(this.component$WK2Y, this.bindTo);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (this.bindTo && this.boundValueChanged) {
      if (this.value) {
        this.bindTo.setValue(this.value);
      }
      this.component$WK2Y = component;
      this.propertyChanged$WK2Y();

      if (this.componentEvent && this.componentChanged) {
        this.bindComponentChangeListener(component, this.componentEvent,AS3.bind( this,"componentChangedWrapper$WK2Y"));
      }

      this.bindTo.addChangeListener(AS3.bind(this,"propertyChanged$WK2Y"));
      component.on('beforedestroy',AS3.bind( this,"onComponentDestroy"));
    } else {
      throw new AS3.Error(component.constructor.$class + " bind plugin must specify 'bindTo' and 'boundValueChanged");
    }
  }/*

  protected*/ function bindComponentChangeListener(c/*:Component*/, event/*:String*/, comcomponentChangedWrapper/*:Function*/)/*:void*/ {
    c.addListener(event,AS3.bind( this,"componentChangedWrapper$WK2Y"));
  }/*

  /**
   * Return the component as set by <code>init()</code>.
   * 
   * @return the component
   *
   * @see #init()
   * /
  public*/ function getComponent()/*:Component*/ {
    return this.component$WK2Y;
  }/*

  /**
   * Return the value expression determining the value bound by this plugin.
   *
   * @return the value expression
   * /
  protected*/ function getBindTo()/*:ValueExpression*/ {
    return this.bindTo;
  }/*

  /**
   * function to be used when setting the component property
   * @param component
   * @param componentProperty
   * @param value
   * /
  internal final*/ function setComponentProperty(component/*:Component*/, componentProperty/*:String*/, value/*:**/)/*:void*/ {
    try {
      this.setComponentPropertyUsingSetter(component, componentProperty, value);
    } catch (e/*:**/) {
      AS3.trace(component.toString() + " does not accept the value '" + value + "' for the property '" + componentProperty +
              "' using a setter function. The value is now set to the plain javascript property.");
      this.setComponentPropertyDirectly$WK2Y(component, componentProperty, value);
    }
  }/*

  /**
   * set the component property directly into the config object and a plain JavaScript property
   * this is used as a workaround when the setter method fails. See STUDIO-71
   * @param component
   * @param value
   * /
  private*/ function setComponentPropertyDirectly(component/*:Component*/, componentProperty/*:String*/, value/*:**/)/*:void*/ {
    //todo guess this initial data is never garbage collected?
    component.initialConfig[componentProperty] = value;
    component[componentProperty] = value;

    //some special property mapping for runtime and config property names
    if (component.isXType('checkbox') && (componentProperty === 'value')) {
      //TODO: EXT6_API: Why not just setValue?
      component['checked'] = value;
    }

    if (componentProperty === 'visible') {
      component.setHidden(!value);
    }

  }/*

  /**
   * set the component property using the setter method of the component
   * You might override this function
   * @param component
   * @param value
   * /
  internal*/ function setComponentPropertyUsingSetter(component/*:Component*/, componentProperty/*:String*/, value/*:**/)/*:void*/ {
    var componentValue/*:**/ = com.coremedia.ui.util.ObjectUtils.getProperty(component, componentProperty);
    if (componentValue !== value) {
      if (AS3.is(component,  Ext.button.Button) && componentProperty === 'pressed') {
        AS3.cast(Ext.button.Button,component).toggle(value);
      } else {
        com.coremedia.ui.util.ObjectUtils.setProperty(component, componentProperty, value);
        if (!Ext.isGecko) {
          // don't log this in firebug because it'll get stuck here
          com.coremedia.ui.logging.Logger.debug(BindPlugin + ": property " + componentProperty + " of the component " + component.getXType() + "/" + component.getId() + " set to " + value);
        }
        if (AS3.is(component,  Ext.form.field.Field) && componentProperty === 'value') {
          // Indicate that the field was focused with the present value.
          // This ensures that change events on blur are sent if and only if
          // the value changes again compared to the present value.
          AS3.cast(Ext.form.field.Field,component).originalValue = value;
        }
      }
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      component$WK2Y: null,
      value: undefined,
      bindTo: null,
      boundValueChanged: null,
      componentChanged: null,
      componentEvent: null,
      updateWithLayout: false,
      constructor: BindPlugin$,
      super$WK2Y: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      propertyChanged$WK2Y: propertyChanged,
      onComponentDestroy: onComponentDestroy,
      componentChangedWrapper$WK2Y: componentChangedWrapper,
      init: init,
      bindComponentChangeListener: bindComponentChangeListener,
      getComponent: getComponent,
      getBindTo: getBindTo,
      setComponentProperty: setComponentProperty,
      setComponentPropertyDirectly$WK2Y: setComponentPropertyDirectly,
      setComponentPropertyUsingSetter: setComponentPropertyUsingSetter,
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.button.Button",
        "Ext.form.field.Field",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.LayoutUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
