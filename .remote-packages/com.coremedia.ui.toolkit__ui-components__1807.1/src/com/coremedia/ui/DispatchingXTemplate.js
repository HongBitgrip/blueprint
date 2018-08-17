Ext.define("com.coremedia.ui.DispatchingXTemplate", function(DispatchingXTemplate) {/*package com.coremedia.ui {
import ext.StringUtil;
import ext.XTemplate;

/**
 * DispatchingXTemplate dispatches between various XTemplates based on a property in the data.
 * /
public class DispatchingXTemplate extends XTemplate {
  /* TODO Ext6, see CMS-7859
     We have removed all styling information and using 'thumb-wrap' here
     (or in fact any fixed template) was never a good idea in the first place.
   * /
  private static const*/var ERROR_TEMPLATE$static/*:String*/ = "<div class='thumb-wrap'>No XTemplate for key '{0}' found (value '{1}')!</div>";/*

  private var xTemplates:Object;
  private var keyFunction:Function;

  /**
   * Create a new DispatchingXTemplate
   * @param templates a map from key to XTemplate
   * @param keyFunction a Function that receives the object and computes the key to use for that object
   * /
  public*/ function DispatchingXTemplate$(templates/*:Object*/,
                                       keyFunction/*:Function*/) {this.super$0zkE();
    this.xTemplates$0zkE = templates;
    this.keyFunction$0zkE = keyFunction;
  }/*

  /**
   * add or overwrite a XTemplate for the specified key
   * @param key the key
   * @param xTemplate the XTemplate to add
   * /
  public*/ function addXTemplate(key/*:String*/, xTemplate/*:XTemplate*/)/*:void*/ {
    this.xTemplates$0zkE[key] = xTemplate;
  }/*

  override public*/ function apply(values/*:**/)/*:String*/ {
    var result/*:String*/ = "";
    for (var i/*:uint*/ = 0; i < values.length; i++) {
      var value/*:Object*/ = values[i];
      var key/*:String*/ = this.keyFunction$0zkE(value);
      var xTemplate/*:XTemplate*/ = this.xTemplates$0zkE[key] || new Ext.XTemplate(Ext.String.format(ERROR_TEMPLATE$static, key, value));
      result += xTemplate.apply(value);
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.XTemplate",
      xTemplates$0zkE: null,
      keyFunction$0zkE: null,
      constructor: DispatchingXTemplate$,
      super$0zkE: function() {
        Ext.XTemplate.prototype.constructor.apply(this, arguments);
      },
      addXTemplate: addXTemplate,
      apply: apply,
      requires: [
        "Ext.String",
        "Ext.XTemplate"
      ]
    };
});
