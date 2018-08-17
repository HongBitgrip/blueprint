Ext.define("com.coremedia.blueprint.base.pagegrid.PlacementFieldViewtypeSelectorBase", function(PlacementFieldViewtypeSelectorBase) {/*package com.coremedia.blueprint.base.pagegrid {

import com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil;
import com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil;
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.util.LinkListUtil;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;

import ext.container.Container;

import ext.util.Format;

[ResourceBundle('com.coremedia.blueprint.base.components.viewtypes.Viewtypes')]
public class PlacementFieldViewtypeSelectorBase extends LocalComboBox {

  private var availableViewTypesVE:ValueExpression;
  private var viewtypeVE:ValueExpression;
  private var viewtypeMaxWidthVE:ValueExpression;

  public*/ function PlacementFieldViewtypeSelectorBase$(config/*:PlacementFieldViewtypeSelector = null*/) {if(arguments.length<=0)config=null;
    this.super$xptn(config);

    this.viewtypeMaxWidthVE$xptn = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeViewTypeMaxWidth$xptn"), config);
  }/*

  override protected*/ function onAdded(container/*:Container*/, pos/*:Number*/, instanced/*:Boolean*/)/*:void*/ {
    com.coremedia.ui.components.LocalComboBox.prototype.onAdded.call(this,container, pos, instanced);

    this.viewtypeMaxWidthVE$xptn.addChangeListener(AS3.bind(this,"updateWidth$xptn"));
    this.updateWidth$xptn();
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.viewtypeMaxWidthVE$xptn.removeChangeListener(AS3.bind(this,"updateWidth$xptn"));

    com.coremedia.ui.components.LocalComboBox.prototype.destroy.call(this,params);
  }/*

  private*/ function updateWidth()/*:void*/ {
    var value/*:**/ = this.viewtypeMaxWidthVE$xptn.getValue();
    if (!isNaN(value)) {
      this.setMaxWidth(value);
      this.getPicker().setMinWidth(value);
    }
  }/*

  private*/ function computeViewTypeMaxWidth(config/*:PlacementFieldViewtypeSelector*/)/*:Number*/ {
    var availableViewTypes/*:Array*/ = this.getAvailableViewTypesVE(config).getValue();
    if (availableViewTypes === undefined) {
      return NaN;
    }

    availableViewTypes = availableViewTypes.filter(function(item/*:**/)/*:Boolean*/ {
      return ! !item;
    });

    var returnNaN/*:Boolean*/ = false;
    var maxWidth/*: Number*/ = 0;
    for (var i/*:int*/ = 0; i < availableViewTypes.length; i++) {
      var content/*:Content*/ = availableViewTypes[i];
      var text/*:String*/ = com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil.localizeText(content);
      if (text === undefined) {
        returnNaN = true;
        continue;
      }
      maxWidth = Math.max(maxWidth, calculateSimpleWidth$static(text));
    }
    if (returnNaN) {
      return NaN;
    }

    // Also calculate length of default-value
    return Math.max(maxWidth, calculateSimpleWidth$static(this.resourceManager.getString('com.coremedia.blueprint.base.components.viewtypes.Viewtypes', '_text')));
  }/*

  private static*/ function calculateSimpleWidth$static(text/*:String*/)/*:Number*/ {
    var calculatedString/*:String*/ = Ext.util.Format.htmlEncode(text);
    return ((calculatedString.length)*6) +32;
  }/*

  internal*/ function getAvailableViewTypesVE(config/*:PlacementFieldViewtypeSelector*/)/*:ValueExpression*/ {
    if (!this.availableViewTypesVE$xptn) {
      this.availableViewTypesVE$xptn = com.coremedia.ui.data.ValueExpressionFactory.createUnion(
              com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil.createAvailableViewtypesExpression(AS3.getBindable(config,"referenceContentValueExpression"),
                      com.coremedia.blueprint.base.pagegrid.PageGridUtil.getConfiguration().viewtypePaths),
              com.coremedia.ui.data.ValueExpressionFactory.convertToSingletonArray(this.getViewtypeVE(config)),
              false
      );
    }
    return this.availableViewTypesVE$xptn;
  }/*

  internal*/ function getViewtypeVE(config/*:PlacementFieldViewtypeSelector*/)/*:ValueExpression*/ {
    if (!this.viewtypeVE$xptn) {
      this.viewtypeVE$xptn = com.coremedia.cms.editor.sdk.util.LinkListUtil.createLinkValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"propertyName"), 'CMViewtype', true);
    }
    return this.viewtypeVE$xptn;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      availableViewTypesVE$xptn: null,
      viewtypeVE$xptn: null,
      viewtypeMaxWidthVE$xptn: null,
      constructor: PlacementFieldViewtypeSelectorBase$,
      super$xptn: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      onAdded: onAdded,
      destroy: destroy,
      updateWidth$xptn: updateWidth,
      computeViewTypeMaxWidth$xptn: computeViewTypeMaxWidth,
      getAvailableViewTypesVE: getAvailableViewTypesVE,
      getViewtypeVE: getViewtypeVE,
      requires: [
        "Ext.util.Format",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeLocalizationUtil",
        "com.coremedia.blueprint.base.components.viewtypes.ViewtypeUtil",
        "com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties",
        "com.coremedia.cms.editor.sdk.util.LinkListUtil",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.blueprint.base.pagegrid.PageGridUtil"]
    };
});
