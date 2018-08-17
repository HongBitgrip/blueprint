Ext.define("com.coremedia.ui.components.UpdatingTemplateRenderer", function(UpdatingTemplateRenderer) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Component;

/**
 * Fires after the value of the <code>bindTo</code> value expression was updated.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>renderer:UpdatingTemplateRenderer</code> this component
 *   </li>
 *   <li>
 *     <code>value:*</code> the updated value
 *   </li>
 * </ul>
 * /
[Event(name = "afterupdate")] // NOSONAR - no type

public class UpdatingTemplateRenderer extends Component {
  private var dependencyTracker:DependencyTracker;
  private var dirty:Boolean = false;

  internal static const AFTER_UPDATE_EVENT:String = "afterupdate";

  public static const xtype:String = "com.coremedia.ui.config.updatingTemplateRenderer";

  public*/ function UpdatingTemplateRenderer$(config/*:UpdatingTemplateRenderer = null*/) {if(arguments.length<=0)config=null;
    this.super$LwkN(config);
  }/*

  /**
   * A value expression whose value is transferred into the data field of
   * this component. The value is either an array or a object with properties.
   * When the expression value changes, the component is
   * updated. If this attribute is omitted, then original data is used
   * to render this component.
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * whether to encode the data computed by the <code>bindTo</code>
   * expression before passing it to the rendering template; note that
   * only top-level string properties are encoded, not properties of nested
   * objects; the default of this attribute is true, indicating that properties
   * are encoded
   * /
  [Bindable]
  public var encode:Boolean = true;

  /**
   * an array of property names that are passed through
   * to the template without encoding, regardless of the encode option
   * /
  [Bindable]
  public var passThroughProperties:Array;

  private*/ function encodeIfNeeded(data/*:**/)/*:**/ {
    if (!AS3.getBindable(this,"encode")) {
      return data;
    } else if (AS3.is(data,  Array)) {
      return (AS3.as(data,  Array)).map(com.coremedia.ui.util.EncodingUtil.encodeForHTML);
    } else if (AS3.is(data,  Object)) {
      var result/*:Object*/ = {};
      for (var property/*:String*/ in data) {
        if (data.hasOwnProperty(property)) {
          result[property] = AS3.getBindable(this,"passThroughProperties") && AS3.getBindable(this,"passThroughProperties").indexOf(property) >= 0 ?
                  data[property] :
                  com.coremedia.ui.util.EncodingUtil.encodeForHTML(data[property]);
        }
      }
      return result;
    }
    return data;
  }/*

  private*/ function compute()/*:**/ {
    var value/*:**/;
    try {
      value = this.encodeIfNeeded$LwkN(AS3.getBindable(this,"bindTo").getValue());
    } catch (e/*:**/) {
      com.coremedia.ui.logging.Logger.error("UpdatingTemplateRenderer: error while evaluating:" + e);
      value = undefined;
    }
    return value;
  }/*

  override protected*/ function beforeRender()/*:void*/ {
    this.dependencyTracker$LwkN = new com.coremedia.ui.data.dependencies.DependencyTracker(AS3.bind(this,"updateEventually$LwkN"));
    try {
      if (AS3.getBindable(this,"bindTo")) {
        var value/*:**/ = this.compute$LwkN();
        // The initial data to render is passed to the component by means
        // of the data attribute.
        if (value !== undefined) {
          this.setData(value);
        }
      }

      Ext.Component.prototype.beforeRender.call(this);
    } finally {
      this.dependencyTracker$LwkN.stop();
      if (this.dependencyTracker$LwkN.isInvalidated()) {
        this.updateEventually$LwkN();
      }
    }
  }/*

  private*/ function updateEventually()/*:void*/ {
    if (!this.dirty$LwkN) {
      this.dirty$LwkN = true;
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"updateNow$LwkN"));
    }
  }/*

  private*/ function updateNow()/*:void*/ {
    this.dirty$LwkN = false;

    if (this.dependencyTracker$LwkN) {
      this.dependencyTracker$LwkN.discard();
    }

    this.dependencyTracker$LwkN = new com.coremedia.ui.data.dependencies.DependencyTracker(AS3.bind(this,"updateEventually$LwkN"));
    try {
      var value/*:**/ = this.compute$LwkN();
      if (value === undefined) {
        value = this.initialConfig.data;
      }
      this.update(value);
      this.fireEvent(UpdatingTemplateRenderer.AFTER_UPDATE_EVENT, this, value);
    } finally {
      this.dependencyTracker$LwkN.stop();
      if (this.dependencyTracker$LwkN.isInvalidated()) {
        this.updateEventually$LwkN();
      }
    }
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    // Stop listening.
    if (this.dependencyTracker$LwkN) {
      this.dependencyTracker$LwkN.discard();
    }

    Ext.Component.prototype.destroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      metadata: {"": [
        "Event",
        [
          "name",
          "afterupdate"
        ]
      ]},
      dependencyTracker$LwkN: null,
      dirty$LwkN: false,
      alias: "widget.com.coremedia.ui.config.updatingTemplateRenderer",
      constructor: UpdatingTemplateRenderer$,
      super$LwkN: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      encodeIfNeeded$LwkN: encodeIfNeeded,
      compute$LwkN: compute,
      beforeRender: beforeRender,
      updateEventually$LwkN: updateEventually,
      updateNow$LwkN: updateNow,
      destroy: destroy,
      config: {
        bindTo: null,
        encode: true,
        passThroughProperties: null
      },
      statics: {AFTER_UPDATE_EVENT: "afterupdate"},
      requires: [
        "Ext.Component",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.EventUtil"
      ]
    };
});
