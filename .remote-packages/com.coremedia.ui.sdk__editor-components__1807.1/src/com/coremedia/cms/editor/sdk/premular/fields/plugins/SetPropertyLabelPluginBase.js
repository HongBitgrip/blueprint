Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.SetPropertyLabelPluginBase", function(SetPropertyLabelPluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.tip.QuickTipManager;

/**
 * A plugin to set the fieldLabel of the component to a localized value.
 * The localization key is computed from the type of the bound Content (see property
 * bindTo) and the given propertyName, adding the suffix "_text".
 *
 * It also sets a tooltip calculated by DocTypeName_PropertyName adding the suffix "_tooltip"
 *
 * /
[PublicApi]
public class SetPropertyLabelPluginBase extends SetLocalizedPluginBase {
  internal var contentTypeValueExpression:ValueExpression;
  internal var propertyName:String;

  /**
   * public constructor
   * @param config the given config object
   * /
  public*/ function SetPropertyLabelPluginBase$(config/*:SetPropertyLabelPlugin = null*/) {if(arguments.length<=0)config=null;
    this.contentTypeValueExpression = config.bindTo.extendBy('type.name');
    this.propertyName = config.propertyName;

    var superConfig/*:SetLocalizedPluginBase*/ = AS3.cast(com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase,Ext.apply({}, config));
    AS3.setBindable(superConfig,"keySuffix" , com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.LABEL);
    AS3.setBindable(superConfig,"labelProperty" , AS3.getBindable(config,"labelProperty") || "fieldLabel");
    this.super$DSWY(superConfig);
  }/*

  /**
   * override init to register the tooltip for the label, if a label for the given component
   * is present.
   * @param component the component, on which the plugin is attached.
   * /
  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase.prototype.init.call(this,component);
    component.on("afterrender",
      function(field/*:Component*/)/*:void*/{
        var labelElement/*:Element*/ = findLabel$static(field);
        var tooltip/*:String*/ = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.getLocalizedTooltip(this$.contentTypeValueExpression.getValue(), this$.propertyName);
        if (labelElement && tooltip !== this$.propertyName) {
          Ext.tip.QuickTipManager.register({
            target: labelElement,
            text: tooltip
          });
        }
      }
    );

    component.on("destroy",
            function(field/*:Component*/)/*:void*/{
              var labelElement/*:Element*/ = findLabel$static(field);
              if(labelElement){
                Ext.tip.QuickTipManager.unregister(labelElement);
              }
            }
    );
  }/*

  /**
   * Helper Method to find the label for the given component
   * @param field the component to find the label for
   * @return the label element if one is present, else returns undefined
   * /
  private static*/ function findLabel$static(field/*:Component*/)/*: Element*/ {
    var label/*:Element*/ = undefined;

    //find form-item and label
    var wrapDiv/*:Element*/ = field.getEl();
    if (wrapDiv) {
      label = wrapDiv.child('label');
    }
    return label;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase",
      metadata: {"": ["PublicApi"]},
      contentTypeValueExpression: null,
      propertyName: null,
      constructor: SetPropertyLabelPluginBase$,
      super$DSWY: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "Ext",
        "Ext.tip.QuickTipManager",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.SetLocalizedPluginBase"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.PropertyEditorUtil"]
    };
});
