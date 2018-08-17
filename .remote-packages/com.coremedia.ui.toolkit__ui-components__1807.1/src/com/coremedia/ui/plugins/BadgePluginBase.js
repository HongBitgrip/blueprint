Ext.define("com.coremedia.ui.plugins.BadgePluginBase", function(BadgePluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.EncodingUtil;

import ext.Component;
import ext.Ext;
import ext.dom.DomHelper;
import ext.plugin.AbstractPlugin;

import js.HTMLElement;

public class BadgePluginBase extends AbstractPlugin {

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-badge-plugin"));};/*
  private static const*/var ELEMENT_NUMBER$static/*:BEMElement*/;/* =*/function ELEMENT_NUMBER$static_(){ELEMENT_NUMBER$static=( BLOCK$static.createElement("number"));};/*
  private static const*/var MODIFIER_INVERTED$static/*:BEMModifier*/;/* =*/function MODIFIER_INVERTED$static_(){MODIFIER_INVERTED$static=( BLOCK$static.createModifier("inverted"));};/*

  /**
   * The value expression that this plugin binds to.
   * /
  public var bindTo:ValueExpression;

  /**
   * The highest number displayed in the badge before a * will be displayed
   * /
  public var maxValue:Number = 9;

  /**
   * Show button with "inverted" skin
   * /
  public var inverted:Boolean;

  /**
   * Adjustment to the x-position of the badge in px. Without any adjustments the badge is placed in the top-right
   * corner of the component.
   * Positive values move the badge to the right, negative values move the badge to the left.
   * /
  public var x:Number = 0;

  /**
   * Adjustment to the y-position of the badge in px. Without any adjustments the badge is placed in the top-right
   * corner of the component.
   * Positive values move the badge to the bottom, negative values move the badge to the top.
   * /
  public var y:Number = 0;

  private var badge:HTMLElement;

  private var badgeNumber:HTMLElement;

  public*/ function BadgePluginBase$(config/*:BadgePlugin = null*/) {if(arguments.length<=0)config=null;
    this.bindTo = config.bindTo;
    //this is important for testing
    this["ptype"] = "badge-plugin";
    this.super$E$4L(config);
  }/*

  private*/ function valueChanged()/*:void*/ {
    if (this.badge$E$4L && this.badgeNumber$E$4L && this.bindTo) {
      var value/*:**/ = this.bindTo.getValue();
      if (AS3.is(value,  Array)) {
        value = (AS3.as(value,  Array)).length;
      }
      if (AS3.is(value,  Number) && value > this.maxValue) {
        // Show blue circle, but do not show exact number.
        value = "*";
      }

      var visible/*:Boolean*/ = ! !value;

      Ext.fly(this.badge$E$4L).setVisible(visible);
      this.badgeNumber$E$4L.innerHTML = com.coremedia.ui.util.EncodingUtil.encodeForHTML(value);
    }
  }/*

  override public*/ function init(cmp/*:Component*/)/*:void*/ {
    Ext.plugin.Abstract.prototype.init.call(this,cmp);
    if (this.bindTo) {
      cmp.on("afterrender",AS3.bind( this,"renderBadge$E$4L"));
      cmp.on("destroy",AS3.bind( this,"componentDestroyed$E$4L"));
      this.bindTo.addChangeListener(AS3.bind(this,"valueChanged$E$4L"));
    }
  }/*

  private*/ function renderBadge()/*:void*/ {
    var cssClass/*:String*/ = BLOCK$static.getCSSClass();

    if (this.inverted) {
      cssClass += " " + MODIFIER_INVERTED$static;
    }

    this.badge$E$4L = Ext.dom.Helper.createDom({
      tag: 'div',
      cls: cssClass,
      style: "top: " + this.y + "px; right: " + (-this.x) + "px;"
    });

    this.badgeNumber$E$4L = Ext.dom.Helper.createDom({
      tag: 'span',
      cls: ELEMENT_NUMBER$static.getCSSClass()
    });

    this.badge$E$4L.appendChild(this.badgeNumber$E$4L);

    this.valueChanged$E$4L();

    AS3.getBindable(this,"cmp","DUMMY").getEl().appendChild(this.badge$E$4L);
    AS3.getBindable(this,"cmp","DUMMY").getEl().setStyle("overflow", "visible");
  }/*

  private*/ function componentDestroyed()/*:void*/ {
    this.bindTo && this.bindTo.removeChangeListener(AS3.bind(this,"valueChanged$E$4L"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      bindTo: null,
      maxValue: 9,
      inverted: false,
      x: 0,
      y: 0,
      badge$E$4L: null,
      badgeNumber$E$4L: null,
      constructor: BadgePluginBase$,
      super$E$4L: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      valueChanged$E$4L: valueChanged,
      init: init,
      renderBadge$E$4L: renderBadge,
      componentDestroyed$E$4L: componentDestroyed,
      statics: {
        BLOCK: undefined,
        ELEMENT_NUMBER: undefined,
        MODIFIER_INVERTED: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_NUMBER$static_();
          MODIFIER_INVERTED$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.dom.Helper",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
