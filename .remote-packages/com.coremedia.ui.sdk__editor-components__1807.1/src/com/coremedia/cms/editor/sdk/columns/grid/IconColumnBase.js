Ext.define("com.coremedia.cms.editor.sdk.columns.grid.IconColumnBase", function(IconColumnBase) {/*package com.coremedia.cms.editor.sdk.columns.grid {

import com.coremedia.ui.bem.IconWithTextBEMEntities;
import com.coremedia.ui.models.bem.BEMModifier;

import ext.XTemplate;
import ext.data.Model;
import ext.data.Store;
import ext.grid.column.Column;
import ext.view.DataView;

[PublicApi]
public class IconColumnBase extends Column {

  /**
   * (optional) The modifier(s) to be used.
   * Multitype: can be String, Array or {@link BEMModifier}
   * /
  [Bindable]
  public var modifier:*;

  /**
   * Defines if only the icon is to be displayed or if theres space for the text
   * /
  [Bindable]
  public var iconOnly:Boolean = true;

  /**
   * The icon css class to use.
   * /
  [Bindable]
  public var iconCls:String;

  /**
   * An additional text describing the icon. Will only be shown if {@link #iconOnly} is true.
   * /
  [Bindable]
  public var iconText:String;

  /**
   * A tooltip to display when hoving the column.
   * /
  [Bindable]
  public var toolTipText:String;

  public*/ function IconColumnBase$(config/*:IconColumn = null*/) {if(arguments.length<=0)config=null;
    this.super$3uaT(config);
  }/*

  //noinspection JSUnusedLocalSymbols
  /** @private * /
  protected*/ function getRenderer(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/, view/*:DataView*/)/*:String*/ {
    return this.tpl.apply({
      modifiers: this.getModifierCls(this.calculateModifier(value, metadata, record, rowIndex, colIndex, store)),
      iconCls: this.calculateIconCls(value, metadata, record, rowIndex, colIndex, store) || "",
      iconText: this.calculateIconText(value, metadata, record, rowIndex, colIndex, store) || "",
      toolTipText: this.calculateToolTipText(value, metadata, record, rowIndex, colIndex, store) || ""
    });
  }/*

  /** @private * /
  protected static*/ function getXTemplate$static()/*:XTemplate*/ {
    var xTemplate/*:XTemplate*/ = new Ext.XTemplate([
      '<div aria-label="{iconText:escape}" class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK + ' {modifiers:escape}" {toolTipText:unsafeQtip}>',
        '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {iconCls:escape}"></span>',
        '<span style="width: 0px;position:absolute;overflow:hidden;">{iconText:escape}</span>',
        '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_TEXT + '">{iconText:escape}</span>',
      '</div>'
    ]);
    return xTemplate;
  }/*

  /**
   * Used when the column should be used as button.
   * This template ensures that the button is accessible.
   * /
  /** @private * /
  protected static*/ function getXButtonTemplate$static()/*:XTemplate*/ {
    var xTemplate/*:XTemplate*/ = new Ext.XTemplate([
      '<div role="button" aria-label="{iconText:escape}" class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK + ' {modifiers:escape}" {toolTipText:unsafeQtip}>',
      '<span class="' + com.coremedia.ui.bem.IconWithTextBEMEntities.ELEMENT_ICON + ' {iconCls:escape}"></span>',
      '<span style="width: 0px;position:absolute;overflow:hidden;">{iconText:escape}</span>',
      '</div>'
    ]);
    return xTemplate;
  }/*

  /** @private * /
  protected*/ function getModifierCls(modifier/*:**/)/*:String*/ {
    var classes/*:Array*/ = [];
    AS3.getBindable(this,"iconOnly") && classes.push(com.coremedia.ui.bem.IconWithTextBEMEntities.MODIFIER_ICON_ONLY.getCSSClass());
    if (modifier) {
      var modifiers/*:Array*/ =AS3.as( modifier,  Array) || [modifier];
      modifiers.forEach(function (modifier/*:**/)/*:void*/ {
        if (AS3.is(modifier,  String)) {
          classes.push(com.coremedia.ui.bem.IconWithTextBEMEntities.BLOCK.createModifier(modifier));
        }
        if (AS3.is(modifier,  com.coremedia.ui.models.bem.BEMModifier)) {
          classes.push(modifier);
        }
      });
    }
    return classes.join(" ");
  }/*

  //noinspection JSUnusedLocalSymbols
  /** @private * /
  protected*/ function calculateModifier(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
    return AS3.getBindable(this,"modifier");
  }/*

  //noinspection JSUnusedLocalSymbols
  /** @private * /
  protected*/ function calculateIconCls(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
    return AS3.getBindable(this,"iconCls");
  }/*

  //noinspection JSUnusedLocalSymbols
  /** @private * /
  protected*/ function calculateIconText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
    return AS3.getBindable(this,"iconText");
  }/*

  //noinspection JSUnusedLocalSymbols
  /** @private * /
  protected*/ function calculateToolTipText(value/*:**/, metadata/*:**/, record/*:Model*/, rowIndex/*:Number*/, colIndex/*:Number*/, store/*:Store*/)/*:String*/ {
    return AS3.getBindable(this,"toolTipText");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.column.Column",
      metadata: {"": ["PublicApi"]},
      constructor: IconColumnBase$,
      super$3uaT: function() {
        Ext.grid.column.Column.prototype.constructor.apply(this, arguments);
      },
      getRenderer: getRenderer,
      getModifierCls: getModifierCls,
      calculateModifier: calculateModifier,
      calculateIconCls: calculateIconCls,
      calculateIconText: calculateIconText,
      calculateToolTipText: calculateToolTipText,
      config: {
        modifier: undefined,
        iconOnly: true,
        iconCls: null,
        iconText: null,
        toolTipText: null
      },
      statics: {
        getXTemplate: getXTemplate$static,
        getXButtonTemplate: getXButtonTemplate$static
      },
      requires: [
        "Ext.XTemplate",
        "Ext.grid.column.Column",
        "com.coremedia.ui.bem.IconWithTextBEMEntities",
        "com.coremedia.ui.models.bem.BEMModifier"
      ]
    };
});
