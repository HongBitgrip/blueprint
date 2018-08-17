Ext.define("com.coremedia.ui.plugins.BindBlobPropertyPluginBase", function(BindBlobPropertyPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.PropertyPathExpression;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.impl.BlobImpl;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;

/**
 * A plugin that binds with a BLOB property and allows to write them.
 * /
[PublicApi]
public class BindBlobPropertyPluginBase extends BindPlugin {

  private var nextExpectedValue:*;
  private var componentProperty:String;
  private var mimeType:String;
  private var transformer:Function;
  private var reverseTransformer:Function;
  private var isDeclaredAsNonMarkup:Boolean;

  private var lastBlob:Blob;

  /**
   * Create a plugin that binds with a BLOB property and allows to write them.
   *
   * @param config the config object
   * /
  public*/ function BindBlobPropertyPluginBase$(config/*:BindBlobPropertyPlugin = null*/) {if(arguments.length<=0)config=null;
    this.componentProperty$ttv5 = AS3.getBindable(config,"componentProperty") || 'value';
    this.mimeType$ttv5 = AS3.getBindable(config,"mimeType") || "text/xml";
    this.transformer$ttv5 = AS3.getBindable(config,"transformer");
    this.reverseTransformer$ttv5 = AS3.getBindable(config,"reverseTransformer");
    this.isDeclaredAsNonMarkup$ttv5 = AS3.getBindable(config,"boundToNonMarkup") || false;

    this.super$ttv5(config);
  }/*

  /**
   * We override this method since it is causing problems since ext6:
   * When the premular is opened for an unloaded blob, the change event is fired afterwards causing a checkout for
   * markup that may differ because if different HTML entity escaping.
   * When the blob is loaded before the component change listener is registered, the different blob data
   * does not trigger this change event which causes the checkout.
   * @param c the component that binds this plugin
   * @param event the change event name
   * @param componentChangedWrapper the wrapper function that executes the change action
   * /
  override protected*/ function bindComponentChangeListener(c/*:Component*/, event/*:String*/, componentChangedWrapper/*:Function*/)/*:void*/ {
    if(AS3.as(this.bindTo.getValue(),  com.coremedia.ui.data.Blob)) {
      this.bindTo.getValue().loadData(function()/*:void*/ {
        c.addListener(event, componentChangedWrapper);
      });
    }
    else {
      c.addListener(event, componentChangedWrapper);
    }
  }/*

  internal*/ function valueExpressionChanged(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {var this$=this;
    var value/*:**/ = valueExpression.getValue();
    if (AS3.is(value,  com.coremedia.ui.data.Blob)) {
      this.lastBlob$ttv5 =AS3.as( value,  com.coremedia.ui.data.Blob);
      this.lastBlob$ttv5.loadData(function(b/*:Blob*/)/*:void*/ {
        if (this$.lastBlob$ttv5 === value) {
          // No other valueExpression updates intervened. The blob data is valid.
          var data/*:**/ = this$.lastBlob$ttv5.getData();
          if(this$.transformer$ttv5 !== undefined){
            data = this$.transformer$ttv5(data, valueExpression);
          }
          if (this$.nextExpectedValue$ttv5 !== data) {
            // suppress change event causing update of the bound remoteBean value (we only want to update view, i.e.
            // the component value not the value of the remote bean)
            //unfortunately this is the difference between Ext3 and Ext6, that Ext6 tries to update its remote bean,
            //during setValue on TextField
            component.suspendEvent("change");
            this$.setComponentProperty(component, this$.componentProperty$ttv5, data);
            component.resumeEvent("change");
          }
          this$.nextExpectedValue$ttv5 = undefined;
        }
      });
    } else if (value == null) {
      // if the blob is undefined or null, we define data property to be the same as the blobs value
      if (this.nextExpectedValue$ttv5 !== null) {
        component.suspendEvent("change");
        this.setComponentProperty(component, this.componentProperty$ttv5, value);
        component.resumeEvent("change");
      }
      this.nextExpectedValue$ttv5 = undefined;
    } else {
      AS3.trace("[ERROR]", BindBlobPropertyPluginBase, "cannot deal with non blob value", value);
    }
  }/*

  internal*/ function componentChangedBlob(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var value/*:**/ = com.coremedia.ui.util.ObjectUtils.getProperty(component, this.componentProperty$ttv5);
    if (this.reverseTransformer$ttv5) {
      var exprValue/*:**/ = valueExpression.getParent().getValue();
      value =  exprValue === undefined ? undefined : this.reverseTransformer$ttv5(value, exprValue);
    }
    //store the value for later comparison in valueExpressionChanged
    //helps to prevent hickups in focus management, when you have a fast writer.
    this.nextExpectedValue$ttv5 = value;
    valueExpression.setValue(value ? com.coremedia.ui.data.impl.BlobImpl.create(valueExpression.getValue(), value, this.mimeType$ttv5, !this.isMarkup$ttv5(valueExpression)) : null);
  }/*

  private*/ function isMarkup(valueExpression/*:ValueExpression*/)/*:Boolean*/ {
    // Easiest case: explicitly declared as non-markup
    if (this.isDeclaredAsNonMarkup$ttv5) {
      return false;
    }
    // If not declared explicitly, we need to be heuristic

    // If blob has size, then it is assumed to be non-markup
    if (valueExpression && (AS3.as(valueExpression.getValue(),  com.coremedia.ui.data.Blob))) {
      return (AS3.as(valueExpression.getValue(),  com.coremedia.ui.data.Blob)).getSize() ? false : true;
    }
    // Assume that the blob is a content property. Try to get hold of
    // the content via the value expression parent hierarchy (only
    // works with property path value expressions). Then try to
    // get the type of the blob property. If an error occurs, it is
    // simply not possible to determine the blob type in this way.
    try {
      var pathArray/*:Array*/ = (AS3.as(valueExpression,  com.coremedia.ui.data.PropertyPathExpression)).getPropertyPathArcs();
      var contentPropertyName/*:String*/ = pathArray[pathArray.length - 1];
      return (valueExpression.getParent().getParent().getValue().getType().getDescriptor(contentPropertyName).type === "MARKUP");
    } catch(e){if(AS3.is (e,AS3.Error)) {
      // nothing
    }else throw e;}
    // Default assumption is that the blob is markup (most common case for our purposes).
    return true;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      nextExpectedValue$ttv5: undefined,
      componentProperty$ttv5: null,
      mimeType$ttv5: null,
      transformer$ttv5: null,
      reverseTransformer$ttv5: null,
      isDeclaredAsNonMarkup$ttv5: false,
      lastBlob$ttv5: null,
      constructor: BindBlobPropertyPluginBase$,
      super$ttv5: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      bindComponentChangeListener: bindComponentChangeListener,
      valueExpressionChanged: valueExpressionChanged,
      componentChangedBlob: componentChangedBlob,
      isMarkup$ttv5: isMarkup,
      requires: [
        "AS3.Error",
        "AS3.trace",
        "com.coremedia.ui.data.Blob",
        "com.coremedia.ui.data.PropertyPathExpression",
        "com.coremedia.ui.data.impl.BlobImpl",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
