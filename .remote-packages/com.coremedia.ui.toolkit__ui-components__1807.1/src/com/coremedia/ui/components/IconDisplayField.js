Ext.define("com.coremedia.ui.components.IconDisplayField", function(IconDisplayField) {/*package com.coremedia.ui.components {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.IconUtils;

import ext.dom.Element;

/**
 * Extended DisplayField supporting icons and tooltips.
 * /
[PublicApi]
public class IconDisplayField extends ExtendedDisplayField {

  public static const xtype:String = "com.coremedia.ui.config.iconDisplayField";

  /**
   * The tooltip will also be applied on label and not only on the icon, default is false.
   *
   * Cannot be changed dynamically.
   * /
  public var tooltipOnValue:Boolean;

  public static const ICON_POSITION_BEFORE_VALUE:String = "beforeValue";
  public static const ICON_POSITION_AFTER_VALUE:String = "afterValue";
  public static const ICON_POSITION_TOP:String = "top";
  public static const ICON_POSITION_BOTTOM:String = "bottom";

  private static const*/var BLOCK_BASENAME$static/*:String*/ = "cm-icon-display-field";/*
  private static const*/var ELEMENT_LABEL$static/*:String*/ = "label";/*
  private static const*/var ELEMENT_VALUE$static/*:String*/ = "value";/*
  private static const*/var ELEMENT_ICON$static/*:String*/ = "icon";/*
  private static const*/var ELEMENT_TEXT$static/*:String*/ = "text";/*
  private static const*/var MODIFIER_NO_ICON$static/*:String*/ =  "no-icon";/*

  private static const*/var SCALE_TO_MODIFIER_MAPPING$static/*:Object*/;/* =*/function SCALE_TO_MODIFIER_MAPPING$static_(){SCALE_TO_MODIFIER_MAPPING$static=( {
    "small": "small-icon",
    "medium": "medium-icon",
    "large": "large-icon"
  });};/*

  private static const*/var SCALE_DEFAULT$static/*:String*/ = "small";/*

  private static*/ function getScaleModifier$static(scale/*:String*/)/*:String*/ {
    return SCALE_TO_MODIFIER_MAPPING$static[scale] || SCALE_TO_MODIFIER_MAPPING$static[SCALE_DEFAULT$static];
  }/*

  private static const*/var ICON_POSITION_TO_MODIFIER_MAPPING$static/*:Object*/;/* =*/function ICON_POSITION_TO_MODIFIER_MAPPING$static_(){ICON_POSITION_TO_MODIFIER_MAPPING$static=( {
    "beforeValue": "icon-before-value",
    "afterValue": "icon-after-value",
    "top": "icon-top",
    "bottom": "icon-bottom"
  });};/*

  private static const*/var ICON_POSITION_DEFAULT$static/*:String*/;/* =*/function ICON_POSITION_DEFAULT$static_(){ICON_POSITION_DEFAULT$static=( IconDisplayField.ICON_POSITION_BEFORE_VALUE);};/*

  private static*/ function getIconPositionModifier$static(iconPosition/*:String*/)/*:String*/ {
    return ICON_POSITION_TO_MODIFIER_MAPPING$static[iconPosition] || ICON_POSITION_TO_MODIFIER_MAPPING$static[ICON_POSITION_DEFAULT$static];
  }/*

  private var _iconCls:String;
  private var _iconPosition:String;
  private var _scale:String;
  private var _block:BEMBlock;

  /**
   * A Label with icon in front of it.
   *
   * @param config the config object
   * /
  public*/ function IconDisplayField$(config/*:IconDisplayField = null*/) {if(arguments.length<=0)config=null;
    if (config.renderer === undefined) {
      config.renderer =AS3.bind( this,"iconWithTextRenderer$u8r5");
    }
    this.super$u8r5(config);
  }/*

  private*/ function  get$block()/*:BEMBlock*/ {
    if (!this._block$u8r5) {
      this._block$u8r5 = new com.coremedia.ui.models.bem.BEMBlock(BLOCK_BASENAME$static + "-" + this.ui);
    }
    return this._block$u8r5;
  }/*

  /**
   * @return the currently set iconCls for the icon display field.
   * /
  [Bindable]
  public*/ function get$iconCls()/*:String*/ {
    return this._iconCls$u8r5;
  }/*

  /**
   * Sets the CSS class that provides the icon for this field.  This method will replace any existing
   * icon class if one has already been set
   *
   * @param {String} newIconCls The new CSS class name
   * /
  [Bindable]
  public*/ function set$iconCls(newIconCls/*:String*/)/*:void*/ {
    this.updateIconCls$u8r5(this._iconCls$u8r5, this._iconCls$u8r5 = newIconCls);
  }/*

  /**
   * @return the actual icon position
   *
   * defaults to "beforeValue"
   * /
  [Bindable]
  public*/ function get$iconPosition()/*:String*/ {
    return this._iconPosition$u8r5 || ICON_POSITION_DEFAULT$static;
  }/*

  /**
   * Defines where the icon is positioned.
   *
   * Possible values are:
   * "beforeValue" - icon is positioned after the {@link #fieldLabel} but before the {@link #value}
   * "afterValue" - icon is positioned after the {@link #fieldLabel} and the {@link #value}
   * "top" - icon is positioned below the {@link #fieldLabel} but above the {@link #value}
   * "top" - icon is positioned below the {@link #fieldLabel} and the {@link #value}
   *
   * @param newIconPosition the new icon position
   * /
  [Bindable]
  public*/ function set$iconPosition(newIconPosition/*:String*/) {
    this.updateIconPosition$u8r5(this._iconPosition$u8r5, this._iconPosition$u8r5 = newIconPosition);
  }/*

  /**
   * @return The size class of the icon.
   *
   * defaults to "small"
   * /
  [Bindable]
  public*/ function get$scale()/*:String*/ {
    return this._scale$u8r5 || SCALE_DEFAULT$static;
  }/*

  /**
   * Defines the scale of the icon in the IconDisplayField.
   *
   * Possible values are:
   * "small", "medium" and "large"
   *
   * @param newScale the new scale
   * /
  [Bindable]
  public*/ function set$scale(newScale/*:String*/)/*:void*/ {
    this.updateScale$u8r5(this._scale$u8r5, this._scale$u8r5 = newScale);
  }/*

  private*/ function getTextId()/*:String*/ {
    return AS3.getBindable(this,"id","DUMMY") + "-textEl";
  }/*

  private*/ function getIconId()/*:String*/ {
    return AS3.getBindable(this,"id","DUMMY") + "-iconEl";
  }/*

  public*/ function  get$iconEl()/*:Element*/ {
    return AS3.as( this.inputEl.getById(this.getIconId$u8r5()),  Ext.dom.Element);
  }/*

  public*/ function  get$textEl()/*:Element*/ {
    return AS3.as( this.inputEl.getById(this.getTextId$u8r5()),  Ext.dom.Element);
  }/*

  private*/ function isIconElFirst()/*:Boolean*/ {
    return AS3.getBindable(this,"iconPosition") === IconDisplayField.ICON_POSITION_BEFORE_VALUE || AS3.getBindable(this,"iconPosition") === IconDisplayField.ICON_POSITION_TOP;
  }/*

  private*/ function iconWithTextRenderer(value/*:String*/)/*:String*/ {
    var iconElCls/*:String*/ = [
            this.block$u8r5.createElement(ELEMENT_ICON$static).getCSSClass(),
            AS3.getBindable(this,"iconCls"),
            AS3.getBindable(this,"iconCls") ? com.coremedia.ui.util.IconUtils.calculateIconScaleCls(AS3.getBindable(this,"iconCls"), AS3.getBindable(this,"scale")) : ""
    ].join(" ");
    var textElCls/*:String*/ = this.block$u8r5.createElement(ELEMENT_TEXT$static).getCSSClass();
    var text/*:String*/ = value || "";
    if (this.htmlEncode) {
      text = com.coremedia.ui.util.EncodingUtil.encodeForHTML(text);
    }

    var iconElHtml/*:String*/ = '<span id="' + this.getIconId$u8r5() + '" class="' + iconElCls + '"></span>';
    var textElHtml/*:String*/ = '<span id="' + this.getTextId$u8r5() + '" class="' + textElCls + '">' + text + '</span>';
    if (this.isIconElFirst$u8r5()) {
      return iconElHtml + textElHtml;
    } else {
      return textElHtml + iconElHtml;
    }
  }/*

  override protected*/ function getTooltipEl()/*:Element*/ {
    if (this.tooltipOnValue) {
      return this.getEl();
    } else {
      return this.iconEl;
    }
  }/*


  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.ExtendedDisplayField.prototype.afterRender.call(this);

    // setup BEM css classes
    this.addCls(this.block$u8r5.getCSSClass());
    this.labelEl.addCls(this.block$u8r5.createElement(ELEMENT_LABEL$static).getCSSClass());
    this.inputEl.addCls(this.block$u8r5.createElement(ELEMENT_VALUE$static).getCSSClass());

    // apply configuration
    this.updateIconCls$u8r5(null, AS3.getBindable(this,"iconCls"));
    this.updateScale$u8r5(null, AS3.getBindable(this,"scale"));
    this.updateIconPosition$u8r5(null, AS3.getBindable(this,"iconPosition"));

    this.addTooltip();
  }/*

  private*/ function updateIconCls(oldIconCls/*:String*/, newIconCls/*:String*/)/*:void*/ {
    if (this.rendered) {
      var oldIconScaleCls/*:String*/ = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(oldIconCls, AS3.getBindable(this,"scale"));
      oldIconCls && this.iconEl.removeCls(oldIconCls);
      oldIconScaleCls && this.iconEl.removeCls(oldIconScaleCls);

      var newIconScaleCls/*:String*/ = com.coremedia.ui.util.IconUtils.calculateIconScaleCls(newIconCls, AS3.getBindable(this,"scale"));
      newIconCls && this.iconEl.addCls(newIconCls);
      newIconScaleCls && this.iconEl.addCls(newIconScaleCls);

      var modifierNoIcon/*:BEMModifier*/ = this.block$u8r5.createModifier(MODIFIER_NO_ICON$static);
      newIconCls ? this.removeCls(modifierNoIcon.getCSSClass()) : this.addCls(modifierNoIcon.getCSSClass());
    }
  }/*

  private*/ function moveIconEl()/*:void*/ {
    if (this.rendered) {
      if (this.isIconElFirst$u8r5()) {
        this.textEl.appendTo(this.inputEl);
      } else {
        this.iconEl.appendTo(this.inputEl);
      }
    }
  }/*

  private*/ function updateIconPosition(oldIconPosition/*:String*/, newIconPosition/*:String*/)/*:void*/ {
    if (this.rendered) {
      this.moveIconEl$u8r5();
      var modifierToRemove/*:String*/ = getIconPositionModifier$static(oldIconPosition);
      modifierToRemove && this.removeCls(this.block$u8r5.createModifier(modifierToRemove).getCSSClass());
      var modifierToAdd/*:String*/ = getIconPositionModifier$static(newIconPosition);
      modifierToAdd && this.addCls(this.block$u8r5.createModifier(modifierToAdd).getCSSClass());
    }
  }/*

  private*/ function updateScale(oldScale/*:String*/, newScale/*:String*/)/*:void*/ {
    if (this.rendered) {
      var modifierToRemove/*:String*/ = getScaleModifier$static(oldScale);
      modifierToRemove && this.removeCls(this.block$u8r5.createModifier(modifierToRemove).getCSSClass());
      var modifierToAdd/*:String*/ = getScaleModifier$static(newScale);
      modifierToAdd && this.addCls(this.block$u8r5.createModifier(modifierToAdd).getCSSClass());
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendedDisplayField",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.iconDisplayField",
      tooltipOnValue: false,
      _iconCls$u8r5: null,
      _iconPosition$u8r5: null,
      _scale$u8r5: null,
      _block$u8r5: null,
      constructor: IconDisplayField$,
      super$u8r5: function() {
        com.coremedia.ui.components.ExtendedDisplayField.prototype.constructor.apply(this, arguments);
      },
      getIconCls: get$iconCls,
      setIconCls: set$iconCls,
      getIconPosition: get$iconPosition,
      setIconPosition: set$iconPosition,
      getScale: get$scale,
      setScale: set$scale,
      getTextId$u8r5: getTextId,
      getIconId$u8r5: getIconId,
      isIconElFirst$u8r5: isIconElFirst,
      iconWithTextRenderer$u8r5: iconWithTextRenderer,
      getTooltipEl: getTooltipEl,
      afterRender: afterRender,
      updateIconCls$u8r5: updateIconCls,
      moveIconEl$u8r5: moveIconEl,
      updateIconPosition$u8r5: updateIconPosition,
      updateScale$u8r5: updateScale,
      config: {
        iconCls: undefined,
        iconPosition: undefined,
        scale: undefined
      },
      statics: {
        ICON_POSITION_BEFORE_VALUE: "beforeValue",
        ICON_POSITION_AFTER_VALUE: "afterValue",
        ICON_POSITION_TOP: "top",
        ICON_POSITION_BOTTOM: "bottom",
        SCALE_TO_MODIFIER_MAPPING: undefined,
        ICON_POSITION_TO_MODIFIER_MAPPING: undefined,
        ICON_POSITION_DEFAULT: undefined,
        __initStatics__: function() {
          SCALE_TO_MODIFIER_MAPPING$static_();
          ICON_POSITION_TO_MODIFIER_MAPPING$static_();
          ICON_POSITION_DEFAULT$static_();
        }
      },
      __accessors__: {
        block$u8r5: {get: get$block},
        iconEl: {get: get$iconEl},
        textEl: {get: get$textEl}
      },
      requires: [
        "Ext.dom.Element",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.util.EncodingUtil"
      ],
      uses: [
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.IconUtils"
      ]
    };
});
