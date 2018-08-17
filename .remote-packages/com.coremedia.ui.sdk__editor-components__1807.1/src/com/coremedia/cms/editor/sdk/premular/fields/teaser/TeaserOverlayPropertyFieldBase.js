Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldBase", function(TeaserOverlayPropertyFieldBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.premular.DocumentTabPanel;
import com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase;
import com.coremedia.cms.editor.sdk.util.TeaserOverlayManager;
import com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ComponentUtil;

import ext.Component;
import ext.slider.SliderField;

import mx.resources.ResourceManager;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.TeaserOverlay')]
public class TeaserOverlayPropertyFieldBase extends RichTextPropertyFieldBase {

  private static const*/var POSITION_TO_ICON_MAPPING$static/*:Object*/;/* =*/function POSITION_TO_ICON_MAPPING$static_(){POSITION_TO_ICON_MAPPING$static=( {
    "1": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_lu"),
    "2": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_mu"),
    "3": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_ru"),
    "4": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_lm"),
    "5": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_mm"),
    "6": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_rm"),
    "7": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_lb"),
    "8": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_mb"),
    "9": mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', "text_on_image_rb")
  });};/*

  private var _teaserOverlaySettings:TeaserOverlaySettings;
  private var _teaserOverlayViewModel:TeaserOverlayViewModel;

  private var positionValueExpression:ValueExpression;
  private var stylesVE:ValueExpression;

  private var iconClsVE:ValueExpression;
  private var radioPositionVE:ValueExpression;
  private var teaserTextSwitchingContainer:SwitchingContainer;

  private var overlayStyleValueExpression:ValueExpression;

  /**
   * Path in {@link #bindTo} under which the teaser overlay properties will be stored.
   * /
  [Bindable]
  public var settingsPath:String;

  /**
   * Array of folder paths to lookup style settings for
   * /
  [Bindable]
  public var styleDescriptorFolderPaths:Array =*/function styleDescriptorFolderPaths_(){this.styleDescriptorFolderPaths=( []);}/*;

  /**
   * Value expression that defines if richtext buttons are forced to be disabled.
   * /
  private var forceRichTextButtonsDisabledVE:ValueExpression;

  /**
   * Value expression that combines forceRichTextButtonsDisabledVE and forceReadOnlyValueExpression
   * /
  private var richTextButtonsDisabledVE:ValueExpression;

  public*/ function TeaserOverlayPropertyFieldBase$(config/*:TeaserOverlayPropertyFieldBase = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$UIkX(config);styleDescriptorFolderPaths_.call(this);;
    //make sure the SwitchingContainer is registered after the child components are added
    this.mon(this.getTeaserTextSwitchingContainer$UIkX(), "afterrender", function(){
      com.coremedia.ui.util.ComponentUtil.findAsParentOf(this, com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.xtype,AS3.bind( this$,"registerSwitchingContainer$UIkX"));
    });
  }/*

  protected*/ function getPositionRadioGroupName()/*:String*/ {
    return "toi-position-radio-group-" + this.getId();
  }/*

  protected*/ function getStylesVE(bindTo/*:ValueExpression*/, styleSettingsPaths/*:Array*/)/*:ValueExpression*/ {
    if (!this.stylesVE$UIkX) {
      this.stylesVE$UIkX = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        if (!bindTo.isLoaded()) {
          return undefined;
        }
        var content/*:Content*/ =AS3.as( bindTo.getValue(),  com.coremedia.cap.content.Content);
        if (!content) {
          return [];
        }
        var styleDescriptorContents/*:Array*/ = com.coremedia.cms.editor.sdk.util.TeaserOverlayManager.getInstance().computeAvailableStylesForTeaser(content, styleSettingsPaths);
        if (styleDescriptorContents === undefined) {
          return undefined;
        }
        var result/*:Array*/ = [];
        // add null entry to allow reset
        result.push(null);
        styleDescriptorContents.forEach(function (content/*:Content*/)/*:void*/ {
          result.push(com.coremedia.cms.editor.sdk.util.TeaserOverlayManager.getInstance().createStyleDescriptorFromContent(content));
        });
        return result;

      });
    }
    return this.stylesVE$UIkX;
  }/*

  private*/ function getForceRichtextButtonsDisabledVE()/*:ValueExpression*/ {
    if (!this.forceRichTextButtonsDisabledVE$UIkX) {
      this.forceRichTextButtonsDisabledVE$UIkX = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.RICHTEXT_BUTTONS_DISABLED_PROPERTY_NAME, AS3.getBindable(this,"teaserOverlayViewModel"));
    }
    return this.forceRichTextButtonsDisabledVE$UIkX;
  }/*

  public*/ function getRichTextButtonsDisabledVE()/*:ValueExpression*/ {var this$=this;
    if (!this.richTextButtonsDisabledVE$UIkX) {
      this.richTextButtonsDisabledVE$UIkX = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return (this$.forceReadOnlyValueExpression && this$.forceReadOnlyValueExpression.getValue()) ||
            this$.getForceRichtextButtonsDisabledVE$UIkX().getValue();
      });
    }
    return this.richTextButtonsDisabledVE$UIkX;
  }/*

  //--------------- View Model ----------------------------------

  /**
   * Defines the view model this editor is working on, see bindings in mxml.
   * /
  [Bindable]
  internal*/ function get$teaserOverlaySettings()/*:TeaserOverlaySettings*/ {
    if (!this._teaserOverlaySettings$UIkX) {
      var ve/*:ValueExpression*/ = this.bindTo.extendBy(AS3.getBindable(this,"settingsPath"));
      this._teaserOverlaySettings$UIkX = new com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings(ve);
    }
    return this._teaserOverlaySettings$UIkX;
  }/*

  [Bindable]
  internal*/ function get$teaserOverlayViewModel()/*:TeaserOverlayViewModel*/ {
    if (!this._teaserOverlayViewModel$UIkX) {
      this._teaserOverlayViewModel$UIkX = new com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel();
    }
    return this._teaserOverlayViewModel$UIkX;
  }/*

  protected static*/ function isNoStyleSelected$static(content/*:Content*/)/*:Boolean*/ {
    var enabled/*:Boolean*/ = content !== null;
    return enabled;
  }/*


  protected static*/ function radioPositionToPositionX$static(position/*:Number*/)/*:Number*/ {
    var index/*:Number*/ = position - 1;
    if (index % 3 == 1) {
      return 0;
    }
    if (index % 3 == 2) {
      return 50;
    }
    return -50;
  }/*

  protected static*/ function radioPositionToPositionY$static(position/*:Number*/)/*:Number*/ {
    var index/*:Number*/ = position - 1;
    if (index >= 3 && index <= 5) {
      return 0;
    }
    if (index >= 6 && index <= 8) {
      return 50;
    }
    return -50;
  }/*

  protected static*/ function settingsToPosition$static(settings/*:TeaserOverlaySettings*/)/*:Number*/ {
    var positionX/*:Number*/ = settings.positionX + 50;
    var positionY/*:Number*/ = settings.positionY + 50;

    if (isNaN(positionX) || isNaN(positionY)) {
      return undefined;
    }

    var radioPosition/*:Number*/ = 1;
    if (positionX > 33) {
      radioPosition++;
    }
    if (positionX > 66) {
      radioPosition++;
    }

    if (positionY > 33) {
      radioPosition += 3;
    }
    if (positionY > 66) {
      radioPosition += 3;
    }
    return radioPosition;
  }/*

  protected*/ function getRadioPositionVE()/*:ValueExpression*/ {var this$=this;
    if (!this.radioPositionVE$UIkX) {
      this.radioPositionVE$UIkX = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Number*/ {
        return TeaserOverlayPropertyFieldBase.settingsToPosition(AS3.getBindable(this$,"teaserOverlaySettings"));
      });
    }
    return this.radioPositionVE$UIkX;
  }/*

  protected*/ function getIconClsVE()/*:ValueExpression*/ {var this$=this;
    if (!this.iconClsVE$UIkX) {
      this.iconClsVE$UIkX = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
        return POSITION_TO_ICON_MAPPING$static[TeaserOverlayPropertyFieldBase.settingsToPosition(AS3.getBindable(this$,"teaserOverlaySettings"))];
      });
    }
    return this.iconClsVE$UIkX;
  }/*

  //--------------- Radio Group ----------------------------------
  protected*/ function toExpressionValue(item/*:Object*/)/*:**/ {
    return parseInt(item[this.getPositionRadioGroupName()]);
  }/*

  protected*/ function toInputValue(value/*:**/)/*:Object*/ {
    var result/*:Object*/ = {};
    result[this.getPositionRadioGroupName()] = value + "";
    return result;
  }/*

  protected*/ function getPositionValueExpression(teaserOverlayViewModel/*:TeaserOverlayViewModel*/)/*:ValueExpression*/ {
    if (!this.positionValueExpression$UIkX) {
      this.positionValueExpression$UIkX = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.RADIO_POSITION_PROPERTY_NAME, teaserOverlayViewModel);
      this.positionValueExpression$UIkX.addChangeListener(AS3.bind(this,"radioPositionChanged$UIkX"));
    }
    return this.positionValueExpression$UIkX;
  }/*

  /**
   * Reset text alignment on position change
   * /
  private*/ function radioPositionChanged(ve/*:ValueExpression*/)/*:void*/ {
    var radioPosition/*:Number*/ = ve.getValue();
    if (radioPosition !== undefined) {
      // do not do anything if the position is already in bounds
      if (TeaserOverlayPropertyFieldBase.settingsToPosition(AS3.getBindable(this,"teaserOverlaySettings")) !== radioPosition) {
        var positionX/*:Number*/ = TeaserOverlayPropertyFieldBase.radioPositionToPositionX(radioPosition);
        var positionY/*:Number*/ = TeaserOverlayPropertyFieldBase.radioPositionToPositionY(radioPosition);
        AS3.getBindable(this,"teaserOverlayViewModel").set(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.SLIDER_POSITION_X, positionX);
        AS3.getBindable(this,"teaserOverlayViewModel").set(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.SLIDER_POSITION_Y, positionY);
      }
    }
  }/*

  /**
   * Updates the richtext depending on the selected position.
   * /
  private*/ function updateAlignment(source/*:Component*/)/*:void*/ {
//    if(!(source is SliderField)) { //TODO add change listener for radio too
//      return;
//    }
//
//    var positionX:Number = teaserOverlayViewModel.get(TeaserOverlayViewModel.SLIDER_POSITION_X);
//
//    // always remove old align, as triggering an align that has already set, removes the align
//    var ckEditor:* = getCKEditor();
//    if (ckEditor && ckEditor.document) {
//      ckEditor.focus();
//
//      ckEditor.execCommand(RichTextAction.COMMAND_ALIGN_REMOVE);
//      if (positionX <= 33) {
//        ckEditor.execCommand(RichTextAction.COMMAND_ALIGN_LEFT);
//      }
//      else if (positionX <= 66) {
//        ckEditor.execCommand(RichTextAction.COMMAND_ALIGN_CENTER);
//      }
//      else {
//        ckEditor.execCommand(RichTextAction.COMMAND_ALIGN_RIGHT);
//      }
//    }
  }/*

  //-------------------- Style Selector -------------------------------
  protected*/ function getOverlayStyleValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.overlayStyleValueExpression$UIkX) {
      this.overlayStyleValueExpression$UIkX = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel.STYLE_PROPERTY_NAME, AS3.getBindable(this,"teaserOverlayViewModel"));
      this.overlayStyleValueExpression$UIkX.loadValue(function ()/*:void*/ {
        this$.overlayStyleValueExpression$UIkX.addChangeListener(AS3.bind(this$,"styleSelectorChanged$UIkX"));
      });
    }
    return this.overlayStyleValueExpression$UIkX;
  }/*

  private*/ function styleSelectorChanged(ve/*:ValueExpression*/)/*:void*/ {
    var style/*:Content*/ = ve.getValue();
    if (style) {
      var manager/*:TeaserOverlayManager*/ = com.coremedia.cms.editor.sdk.util.TeaserOverlayManager.getInstance();
      manager.applyStyleToTeaserOverlaySettings(style, AS3.getBindable(this,"teaserOverlaySettings"));
    }
  }/*


  //------------------ Switching Container ----------------------------

  internal static*/ function getActiveContainer$static(content/*:Content*/)/*:String*/ {
    if (content) {
      return com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField.TEASER_OVERLAY_RICHTEXT_ITEM_ID;
    }

    return com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField.TEASER_TEXTAREA_ITEM_ID;
  }/*

  private*/ function getTeaserTextSwitchingContainer()/*:SwitchingContainer*/ {
    if (!this.teaserTextSwitchingContainer$UIkX) {
      this.teaserTextSwitchingContainer$UIkX =AS3.as( this.queryById(com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField.SWITCHING_CONTAINER_ITEM_ID),  com.coremedia.ui.components.SwitchingContainer);
    }
    return this.teaserTextSwitchingContainer$UIkX;
  }/*

  private*/ function registerSwitchingContainer(panel/*:DocumentTabPanel*/)/*:void*/ {
    panel.registerPropertyField("properties." + this.propertyName, this);
  }/*

  //---------------------- Slider -------------------------------------
  internal static*/ function positionYTransformer$static(value/*:Number*/)/*:Number*/ {
    if (value === undefined) {
      return 0;
    }
    return -value;
  }/*

  internal static*/ function positionYReverseTransformer$static(value/*:Number*/)/*:Number*/ {
    if (value === undefined) {
      return 0;
    }
    return -value;
  }/*

  internal*/ function onActivate()/*:Boolean*/ {
    this.positionValueExpression$UIkX.removeChangeListener(AS3.bind(this,"radioPositionChanged$UIkX"));
  }/*

  internal*/ function onDeactivate(slider/*:SliderField*/)/*:Boolean*/ {
    this.positionValueExpression$UIkX.addChangeListener(AS3.bind(this,"radioPositionChanged$UIkX"));
    this.updateAlignment$UIkX(slider);
  }/*

  internal static*/ function tooltipTransformer$static(thumb/*:Object*/)/*:String*/ {
    if (thumb.value === null || thumb.value === undefined) {
      return "0";
    }
    return -thumb.value;
  }/*

  //-------------------- Clean up  ------------------------------------
  override protected*/ function onDestroy()/*:void*/ {
    this.positionValueExpression$UIkX.removeChangeListener(AS3.bind(this,"radioPositionChanged$UIkX"));
    this.overlayStyleValueExpression$UIkX.removeChangeListener(AS3.bind(this,"styleSelectorChanged$UIkX"));
    AS3.getBindable(this,"teaserOverlaySettings").destroy();
    com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase",
      metadata: {"": ["PublicApi"]},
      _teaserOverlaySettings$UIkX: null,
      _teaserOverlayViewModel$UIkX: null,
      positionValueExpression$UIkX: null,
      stylesVE$UIkX: null,
      iconClsVE$UIkX: null,
      radioPositionVE$UIkX: null,
      teaserTextSwitchingContainer$UIkX: null,
      overlayStyleValueExpression$UIkX: null,
      forceRichTextButtonsDisabledVE$UIkX: null,
      richTextButtonsDisabledVE$UIkX: null,
      constructor: TeaserOverlayPropertyFieldBase$,
      super$UIkX: function() {
        com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase.prototype.constructor.apply(this, arguments);
      },
      getPositionRadioGroupName: getPositionRadioGroupName,
      getStylesVE: getStylesVE,
      getForceRichtextButtonsDisabledVE$UIkX: getForceRichtextButtonsDisabledVE,
      getRichTextButtonsDisabledVE: getRichTextButtonsDisabledVE,
      getTeaserOverlaySettings: get$teaserOverlaySettings,
      getTeaserOverlayViewModel: get$teaserOverlayViewModel,
      getRadioPositionVE: getRadioPositionVE,
      getIconClsVE: getIconClsVE,
      toExpressionValue: toExpressionValue,
      toInputValue: toInputValue,
      getPositionValueExpression: getPositionValueExpression,
      radioPositionChanged$UIkX: radioPositionChanged,
      updateAlignment$UIkX: updateAlignment,
      getOverlayStyleValueExpression: getOverlayStyleValueExpression,
      styleSelectorChanged$UIkX: styleSelectorChanged,
      getTeaserTextSwitchingContainer$UIkX: getTeaserTextSwitchingContainer,
      registerSwitchingContainer$UIkX: registerSwitchingContainer,
      onActivate: onActivate,
      onDeactivate: onDeactivate,
      onDestroy: onDestroy,
      config: {
        settingsPath: null,
        styleDescriptorFolderPaths: undefined,
        teaserOverlaySettings: undefined,
        teaserOverlayViewModel: undefined
      },
      statics: {
        POSITION_TO_ICON_MAPPING: undefined,
        isNoStyleSelected: isNoStyleSelected$static,
        radioPositionToPositionX: radioPositionToPositionX$static,
        radioPositionToPositionY: radioPositionToPositionY$static,
        settingsToPosition: settingsToPosition$static,
        getActiveContainer: getActiveContainer$static,
        positionYTransformer: positionYTransformer$static,
        positionYReverseTransformer: positionYReverseTransformer$static,
        tooltipTransformer: tooltipTransformer$static,
        __initStatics__: function() {
          POSITION_TO_ICON_MAPPING$static_();
        }
      },
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.TeaserOverlay_properties",
        "com.coremedia.cms.editor.sdk.premular.fields.RichTextPropertyFieldBase",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ComponentUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayViewModel",
        "com.coremedia.cms.editor.sdk.util.TeaserOverlayManager",
        "com.coremedia.cms.editor.sdk.util.TeaserOverlaySettings"
      ]
    };
});
