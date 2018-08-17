Ext.define("com.coremedia.ui.data.AbstractValueExpression", function(AbstractValueExpression) {/*package com.coremedia.ui.data {

import com.coremedia.ui.data.dependencies.DependencyTracker;

[PublicApi]
internal class AbstractValueExpression implements ValueExpression {

  private var dependencyKey:String = null;

  private static*/ var nextDependencyId$static/*:uint*/ = 0;/*

  public*/ function AbstractValueExpression$() {
  }/*

  public*/ function extendBy(/*...properties*/)/*:ValueExpression*/ {var properties=Array.prototype.slice.call(arguments);
    var propertyPathArcs/*:Array*/ = AbstractValueExpression.normalizeProperties(properties);
    if (propertyPathArcs.length === 0) {
      return this;
    }
    return this.doExtendBy(propertyPathArcs);
  }/*

  internal static*/ function normalizeProperties$static(properties/*:Array*/)/*:**/ {
    if (properties.length === 1 && properties[0] instanceof Array) {
      return properties[0];
    }
    var propertyPathArcs/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < properties.length; i++) {
      propertyPathArcs = propertyPathArcs.concat(String(properties[i]).split("."));
    }
    return propertyPathArcs;
  }/*

  /** @private * /
  protected*/ function doExtendBy(properties/*:Array*/)/*:ValueExpression*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function getParent()/*:ValueExpression*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function addChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function removeChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function getValue()/*:**/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.AbstractValueExpressionDependency(this));
    return this.getValueNoDependencies();
  }/*

  /** @private * /
  protected*/ function getValueNoDependencies()/*:**/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function isReadable()/*:Boolean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.AbstractValueExpressionDependency(this));
    return this.isReadableNoDependencies();
  }/*

  /** @private * /
  protected*/ function isReadableNoDependencies()/*:Boolean*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  public*/ function isLoaded()/*:Boolean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOn(new com.coremedia.ui.data.AbstractValueExpressionDependency(this));
    return this.isLoadedNoDependencies();
  }/*

  /** @private * /
  protected*/ function isLoadedNoDependencies()/*:Boolean*/ {
    throw new AS3.Error("must be overridden in subclass");
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function loadValue(callback/*:Function*/)/*:void*/ {var this$=this;
    var newValue/*:**/ = this.getValue();
    if(newValue !== undefined) {
      callback(newValue);
    } else {
      var loadValueListener/*:Function*/ = function()/*:void*/ {
        var newValue/*:**/ = this$.getValue();
        if(newValue !== undefined) {
          this$.removeChangeListener(loadValueListener);
          callback(newValue);
        }
      };
      this.addChangeListener(loadValueListener);
    }
  }/*

  internal*/ function getDependencyKey()/*:String*/ {
    if (this.dependencyKey$BMAd === null) {
      this.dependencyKey$BMAd = "ve:" + nextDependencyId$static++;
    }
    return this.dependencyKey$BMAd;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueExpression"],
      metadata: {"": ["PublicApi"]},
      dependencyKey$BMAd: null,
      constructor: AbstractValueExpression$,
      extendBy: extendBy,
      doExtendBy: doExtendBy,
      getParent: getParent,
      addChangeListener: addChangeListener,
      removeChangeListener: removeChangeListener,
      getValue: getValue,
      getValueNoDependencies: getValueNoDependencies,
      isReadable: isReadable,
      isReadableNoDependencies: isReadableNoDependencies,
      setValue: setValue,
      isLoaded: isLoaded,
      isLoadedNoDependencies: isLoadedNoDependencies,
      loadValue: loadValue,
      getDependencyKey: getDependencyKey,
      statics: {normalizeProperties: normalizeProperties$static},
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.ValueExpression"
      ],
      uses: [
        "com.coremedia.ui.data.AbstractValueExpressionDependency",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ]
    };
});
