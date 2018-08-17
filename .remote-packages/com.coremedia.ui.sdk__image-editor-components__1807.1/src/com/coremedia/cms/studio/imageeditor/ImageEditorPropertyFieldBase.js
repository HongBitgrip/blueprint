Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase", function(ImageEditorPropertyFieldBase) {/*package com.coremedia.cms.studio.imageeditor {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.ImageTransformationModel;
import com.coremedia.cms.studio.imageeditor.model.Point;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.cms.studio.imageeditor.util.ConversionUtil;
import com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil;
import com.coremedia.cms.studio.imageeditor.util.TransformationChain;
import com.coremedia.ui.actions.DependencyTrackedActionBase;
import com.coremedia.ui.components.ExtendedTab;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.StringUtil;
import ext.panel.Panel;
import ext.tab.TabPanel;
import ext.util.MixedCollection;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
[ResourceBundle('com.coremedia.cms.editor.ContentTypes')]
public class ImageEditorPropertyFieldBase extends Panel { // NOSONAR class complexity

  private static const*/var DEG_TO_RAD$static/*:Number*/;/* =*/function DEG_TO_RAD$static_(){DEG_TO_RAD$static=( Math.PI / 180);};/*

  private static const*/var CONTENTTYPE_PROPERTIES$static/*:Object*/;/* =*/function CONTENTTYPE_PROPERTIES$static_(){CONTENTTYPE_PROPERTIES$static=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.editor.ContentTypes').content);};/*

  internal static const VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP:String = "enlarge-";
  internal static const VIEW_MODEL_PROPERTY_FOCUS_AREA:String = "focusArea";
  internal static const VIEW_MODEL_PROPERTY_FOCUS_POINT:String = "focusPoint";
  internal static const VIEW_MODEL_PROPERTY_DISABLE_CROPPING:String = "checkCropsEnabling";
  internal static const VIEW_MODEL_PROPERTY_FLIP_HORIZONTALLY:String = "flipHorizontally";
  internal static const VIEW_MODEL_PROPERTY_FLIP_VERTICALLY:String = "flipVertically";
  internal static const VIEW_MODEL_PROPERTY_ORIENTATION:String = "orientation";
  internal static const VIEW_MODEL_PROPERTY_STRAIGHTEN:String = "straighten";
  internal static const VIEW_MODEL_PROPERTY_BRIGHTNESS:String = "brightness";
  internal static const VIEW_MODEL_PROPERTY_CONTRAST:String = "contrast";
  internal static const IMAGE_ORIGINAL_DIMENSIONS:String = "image_original_dimensions";

  private var imageSettingsValueExpression:ValueExpression;
  private var imageDimensionsValueExpression:ValueExpression;
  private var commonTransformsImageDimensionsValueExpression:ValueExpression;
  private var commonTransformationsValueExpression:ValueExpression;

  internal var imageEditorViewModel:Bean;
  private var readOnlyValueExpression:ValueExpression;
  internal var undoHistory:UndoHistory;
  private var blobValueExpression:ValueExpression;
  private var showCropsValueExpression:ValueExpression;
  private var content:Content;
  private var disableExpression:ValueExpression;
  private var imageSettingsWritableValueExpression:ValueExpression;

  private var variantBoxedImageDimensionsValueExpressions:ValueExpression; // Map variantKey -> boxed image dimensions value expression

  private var propertyName:String;
  private var variantsValueExpression:ValueExpression;
  private var tabItemValueExpression:ValueExpression;

  private var contentValueExpression:ValueExpression;
  private var contentPathValueExpression:ValueExpression;

  private var disableStatusExpression:ValueExpression;

  public*/ function ImageEditorPropertyFieldBase$(config/*:ImageEditorPropertyField = null*/) {if(arguments.length<=0)config=null;
    this.super$fiEH(config);

    this.contentValueExpression$fiEH = AS3.getBindable(config,"bindTo");
    this.propertyName$fiEH = AS3.getBindable(config,"propertyName");
    this.content$fiEH = this.contentValueExpression$fiEH.getValue();
    this.content$fiEH.addPropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN,AS3.bind( this,"onCheckIn"));

    // initialize disable expression for use in variant tab construction
    this.getDisableExpression(config);

    this.imageEditorViewModel.addPropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_DISABLE_CROPPING,AS3.bind( this,"checkCropsEnabling$fiEH"));
    this.getBlobValueExpression(AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField,this.initialConfig)).addChangeListener(AS3.bind(this,"checkCropsEnabling$fiEH"));

    // update stored Struct explicitly, as <ui:binding> cannot replace a complete Struct at once:
    this.imageEditorViewModel.addPropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA,AS3.bind( this,"focusAreaViewModelChanged$fiEH"));

    this.imageEditorViewModel.addPropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_POINT,AS3.bind( this,"focusPointViewModelChanged$fiEH"));

    this.getBlobValueExpression(config).addChangeListener(AS3.bind(this,"onBlobChange$fiEH"));
    this.getImageDimensionsValueExpression$fiEH(config).addChangeListener(AS3.bind(this,"setImageDimensions$fiEH"));

    this.contentValueExpression$fiEH.addChangeListener(AS3.bind(this,"contentChanged$fiEH"));
    this.contentPathValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.content.ContentPropertyNames.PATH, this.contentValueExpression$fiEH.getValue());
    this.contentPathValueExpression$fiEH.addChangeListener(AS3.bind(this,"contentChanged$fiEH"));
    this.contentChanged$fiEH();

    this.tabItemValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getTabItems$fiEH"), config);
    this.tabItemValueExpression$fiEH.addChangeListener(AS3.bind(this,"updateVariantTabs$fiEH"));
    this.updateVariantTabs$fiEH();

    var tabPanel/*:TabPanel*/ = this.getVariantsTabPanel();
    tabPanel.addListener('tabchange', function (tabPanel/*:TabPanel*/, tab/*:VariantTab*/)/*:void*/ {
      tab.fireEvent('focus', tab);
    });
  }/*

  /**
   * Load all configured variants for the current content. The content may change for the current instance by
   * navigating in the library through the contents, pressing tab.
   *
   * The variants are loaded by the TransformImageService
   * /
  private*/ function contentChanged()/*:void*/ {var this$=this;
    var content/*:Content*/ = this.contentValueExpression$fiEH.getValue(); // NOSONAR (hides field content)
    if (content) {
      // Before we can show the variant tabs, the content must be loaded
      // and the set of variants must be known.
      if (!content.isLoaded()) {
        content.load(AS3.bind(this,"contentChanged$fiEH"));
        return;
      }

      var path/*:String*/ = "imageVariants/loadVariants";
      var imageVariantsMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(path, 'GET');
      imageVariantsMethod.request({"content": content.getId()},
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                if (content === this$.contentValueExpression$fiEH.getValue()) {
                  var responseJSON/*:Object*/ = response.getResponseJSON();
                  var variants/*:Array*/ = toVariants$static(responseJSON['variants']);
                  this$.setVariants$fiEH(variants);
                }
              },
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                if (content === this$.contentValueExpression$fiEH.getValue()) {
                  var error/*:RemoteError*/ = response.getError();
                  com.coremedia.ui.logging.Logger.error("Error loading variants from server: " + error.errorName + " (Code: " + error.errorCode + ").");
                  this$.setVariants$fiEH([]);
                }
              }
      );
    } else {
      this.setVariants$fiEH([]);
    }
  }/*

  private*/ function setVariants(variants/*:Array*/)/*:void*/ {
    this.getVariantsValueExpression().setValue(variants);
    var typeName/*:String*/ = this.content$fiEH.getType().getName();
    var cropsizeIssueText/*:String*/ = this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_cropsize_issue_text');
    for/* each*/ (var $1=0;$1</* in*/ variants.length;++$1) {var variant/*:ImageVariant*/ =variants[$1];
      // Property name example: CMPicture_data.large1x1_text
      var key/*:String*/ = typeName + "_" + this.propertyName$fiEH + "." + variant.key + "_" + com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.LABEL;
      CONTENTTYPE_PROPERTIES$static[key] = Ext.String.format(cropsizeIssueText, variant.widthRatio, variant.heightRatio);
    }
  }/*

  /**
   * Convert configured variants loaded from the server to variants used by the image editor
   * @param configuredVariants configuredVariants loaded from the server
   * /
  private static*/ function toVariants$static(configuredVariants/*:Array*/)/*:Array*/ {
    var variants/*:Array*/ = [];
    for/* each*/ (var $1=0;$1</* in*/ configuredVariants.length;++$1) {var configuredVariant/*:Object*/ =configuredVariants[$1];
      if (configuredVariant.widthRatio > 0 && configuredVariant.heightRatio > 0) {
        var variant/*:ImageVariant*/ = new com.coremedia.cms.studio.imageeditor.ImageVariant(configuredVariant.name,
                configuredVariant.widthRatio,
                configuredVariant.heightRatio,
                configuredVariant.minWidth,
                configuredVariant.minHeight);
        variants.push(variant);
      }
    }
    return variants;
  }/*

  protected*/ function getVariantsValueExpression()/*:ValueExpression*/ {
    if (!this.variantsValueExpression$fiEH) {
      this.variantsValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.variantsValueExpression$fiEH;
  }/*

  public*/ function getVariantsTabPanel()/*:TabPanel*/ {
    return AS3.as( this.queryById('overviewVariants'),  Ext.tab.Panel);
  }/*

  private*/ function getImageEditorStage()/*:ImageEditorStage*/ {
    return this.rendered ?AS3.as( this.queryById(com.coremedia.cms.studio.imageeditor.ImageEditorStage.ITEM_ID),  com.coremedia.cms.studio.imageeditor.ImageEditorStage) : undefined;
  }/*

  protected*/ function onCheckIn(pce/*:PropertyChangeEvent*/)/*:void*/ {
    if (pce.newValue === true) {
      this.undoHistory.reset();
    }
  }/*

  private*/ function checkCropsEnabling()/*:void*/ {
    var enableCrops/*:Boolean*/ = !this.imageEditorViewModel.get(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_DISABLE_CROPPING);
    var blob/*:Blob*/ = this.getBlobValueExpression(AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField,this.initialConfig)).getValue();
    if (blob) {
      enableCrops = enableCrops && blob.getSize() >= 0;
      this.getShowCropsValueExpression().setValue(enableCrops);
    } else {
      this.getShowCropsValueExpression().setValue(false);
    }
  }/*


  internal*/ function createTabItem(variant/*:ImageVariant*/)/*:VariantTab*/ {
    var variantTabCfg/*:VariantTab*/ = AS3.cast(com.coremedia.cms.studio.imageeditor.VariantTab,{});
    variantTabCfg.itemId = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.variantKeyToItemId(variant.key);
    AS3.setBindable(variantTabCfg,"propertyName" , this.propertyName$fiEH);
    variantTabCfg.variant = variant;
    AS3.setBindable(variantTabCfg,"variantKey" , variant ? variant.key : undefined);
    variantTabCfg.disableValueExpression = this.disableExpression$fiEH;
    variantTabCfg.enlargeValueExpression = this.createEnlargeValueExpression$fiEH(variant.key);
    variantTabCfg.imageDimensionsValueExpression = this.commonTransformsImageDimensionsValueExpression$fiEH;
    variantTabCfg.boxedImageDimensionsValueExpression = this.getVariantBoxedImageDimensionsValueExpression$fiEH(AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField,this.initialConfig), variant.key);
    return variantTabCfg;
  }/*

  private*/ function getVariantBoxedImageDimensionsValueExpression(config/*:ImageEditorPropertyField*/, key/*:String*/)/*:ValueExpression*/ {
    return this.getVariantBoxedImageDimensionsValueExpressions(config).getValue()[key];
  }/*

  internal*/ function createReadOnlyValueExpression(config/*:ImageEditorPropertyField*/, undoHistory/*:UndoHistory*/)/*:ValueExpression*/ { // NOSONAR (hides field undoHistory)
    this.readOnlyValueExpression$fiEH = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(config,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression"));
    this.undoHistory = undoHistory;
    this.readOnlyValueExpression$fiEH.addChangeListener(AS3.bind(undoHistory,"reset"));
    return this.readOnlyValueExpression$fiEH;
  }/*

  protected*/ function getDisableExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {var this$=this;
    if (!this.disableExpression$fiEH) {
      this.disableExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var readOnly/*:Boolean*/ = this$.readOnlyValueExpression$fiEH.getValue();
        if (readOnly !== false) {
          return true;
        }
        var blob/*:Blob*/ = this$.getBlobValueExpression(config).getValue();
        return !blob || blob.getSize() === undefined;
      });
    }
    return this.disableExpression$fiEH;
  }/*

  /**
   * The DependencyTrackedAction requires a status (0 = hidden, 1 = disabled and 2 = enabled). Thats why the
   * toolbar disabled expression is used redundant
   *
   * @param disableValueExpression the disableValueExpression
   * @return the status of the actions in the toolbar
   * /
  protected*/ function getDisableStatusExpression(disableValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.disableStatusExpression$fiEH) {
      this.disableStatusExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:int*/ {
        var disabledToolbar/*:Boolean*/ = disableValueExpression.getValue();
        if (disabledToolbar !== false) {
          return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
        }
        return com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
      });
    }
    return this.disableStatusExpression$fiEH;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.contentValueExpression$fiEH.removeChangeListener(AS3.bind(this,"contentChanged$fiEH"));
    this.blobValueExpression$fiEH.removeChangeListener(AS3.bind(this,"onBlobChange$fiEH"));
    this.readOnlyValueExpression$fiEH.removeChangeListener(AS3.bind(this.undoHistory,"reset"));
    this.tabItemValueExpression$fiEH.removeChangeListener(AS3.bind(this,"updateVariantTabs$fiEH"));
    this.imageEditorViewModel.removePropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_DISABLE_CROPPING,AS3.bind( this,"checkCropsEnabling$fiEH"));
    this.getBlobValueExpression(AS3.cast(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField,this.initialConfig)).removeChangeListener(AS3.bind(this,"checkCropsEnabling$fiEH"));
    this.imageEditorViewModel.removePropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA,AS3.bind( this,"focusAreaViewModelChanged$fiEH"));
    this.imageEditorViewModel.removePropertyChangeListener(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_POINT,AS3.bind( this,"focusPointViewModelChanged$fiEH"));
    this.content$fiEH.removePropertyChangeListener(com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN,AS3.bind( this,"onCheckIn"));
    this.imageDimensionsValueExpression$fiEH.removeChangeListener(AS3.bind(this,"setImageDimensions$fiEH"));
    this.contentPathValueExpression$fiEH.removeChangeListener(AS3.bind(this,"contentChanged$fiEH"));
    Ext.panel.Panel.prototype.onDestroy.call(this);
  }/*

  private*/ function getImageDimensionsValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    if (!this.imageDimensionsValueExpression$fiEH) {
      this.imageDimensionsValueExpression$fiEH = this.getBlobValueExpression(config).extendBy('metadata.imageDimensions');
    }
    return this.imageDimensionsValueExpression$fiEH;
  }/*

  internal*/ function getCommonTransformsImageDimensionsValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    if (!this.commonTransformsImageDimensionsValueExpression$fiEH) {
      this.commonTransformsImageDimensionsValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeCommonTransformsImageDimensions$fiEH"),
              this.getImageDimensionsValueExpression$fiEH(config));
    }
    return this.commonTransformsImageDimensionsValueExpression$fiEH;
  }/*

  internal*/ function getBlobValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    if (!this.blobValueExpression$fiEH) {
      this.blobValueExpression$fiEH = AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"propertyName"));
    }
    return this.blobValueExpression$fiEH;
  }/*

  internal*/ function getShowCropsValueExpression()/*:ValueExpression*/ {
    if (!this.showCropsValueExpression$fiEH) {
      this.showCropsValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(true);
    }

    return this.showCropsValueExpression$fiEH;
  }/*

  internal*/ function getImageSettingsWritableValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {var this$=this;
    if (!this.imageSettingsWritableValueExpression$fiEH) {
      this.imageSettingsWritableValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        var content/*:Content*/ = AS3.getBindable(config,"bindTo").getValue(); // NOSONAR (hides field content)
        if ((AS3.cast(com.coremedia.ui.data.impl.RemoteBeanImpl,content).checkOutdated())) {
          return undefined;
        }
        return content.isCheckedOutByCurrentSession() && !this$.readOnlyValueExpression$fiEH.getValue();
      });
    }
    return this.imageSettingsWritableValueExpression$fiEH;
  }/*

  internal*/ function getImageSettingsValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    if (!this.imageSettingsValueExpression$fiEH) {
      this.imageSettingsValueExpression$fiEH = AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"imageSettingsPropertyName"));
    }
    return this.imageSettingsValueExpression$fiEH;
  }/*

  //noinspection JSUnusedGlobalSymbols
  internal*/ function getImageSettings()/*:Struct*/ {
    return this.imageSettingsValueExpression$fiEH.getValue();
  }/*

  private*/ function onBlobChange(blobExpression/*:ValueExpression*/)/*:void*/ {
    this.undoHistory.reset();
    // reset the view model if the blob is deleted
    if (!blobExpression.getValue()) {
      ImageEditorPropertyFieldBase.resetImage(this.imageEditorViewModel, this.variantsValueExpression$fiEH.getValue());
    }
  }/*

  private*/ function getTabItems(config/*:ImageEditorPropertyField*/)/*:Array*/ {
    var blob/*:Blob*/ = this.getBlobValueExpression(config).getValue();
    if (!blob) {
      return [];
    }
    var variants/*:Array*/ = this.getVariantsValueExpression().getValue();
    return variants.map(AS3.bind(this,"createTabItem"), this);
  }/*

  private*/ function updateVariantTabs()/*:void*/ {var this$=this;
    var tabPanel/*:TabPanel*/ = this.getVariantsTabPanel();
    var tabPanelItems/*:MixedCollection*/ = tabPanel.itemCollection;
    while (tabPanelItems.getCount() > 1) {
      var tab/*:Panel*/ = AS3.cast(Ext.panel.Panel,tabPanelItems.get(1));
      tab.destroy();
    }

    // In order to have access to the propertyName in the callback, 'this' has to be transferred to the map function
    var items/*:Array*/ = this.tabItemValueExpression$fiEH.getValue();
    tabPanel.add(items);

    tabPanel.getTabBar().queryBy(function (cmp/*:Component*/)/*:void*/ {
      var extTab/*:ExtendedTab*/ =AS3.as( cmp,  com.coremedia.ui.components.ExtendedTab);
      if (extTab && extTab.initialConfig.card.itemId !== 'overview') {
        if (extTab.rendered) {
          this$.highlightImageArea$fiEH(extTab);
        }
        else {
          this$.mon(extTab, 'afterrender', function ()/*:void*/ {
            this$.highlightImageArea$fiEH(extTab);
          });
        }
      }
    });
  }/*

  private*/ function highlightImageArea(extTab/*:ExtendedTab*/)/*:void*/ {var this$=this;
    this.mon(extTab.getEl(), 'mouseenter', function ()/*:void*/ {
      this$.addHoverClsToImageArea$fiEH(extTab);
    });
    this.mon(extTab.getEl(), 'focus', function ()/*:void*/ {
      this$.addHoverClsToImageArea$fiEH(extTab);
    });
    this.mon(extTab.getEl(), 'mouseleave', function ()/*:void*/ {
      this$.removeHoverClsFromImageArea$fiEH(extTab);
    });
    this.mon(extTab.getEl(), 'blur', function ()/*:void*/ {
      this$.removeHoverClsFromImageArea$fiEH(extTab);
    });
  }/*

  private*/ function addHoverClsToImageArea(extTab/*:ExtendedTab*/)/*:void*/ {
    this.getImageEditorStage$fiEH().getImageAreas().forEach(function (imageArea/*:ImageArea*/)/*:void*/ {
      if (AS3.getBindable(imageArea,"itemId","DUMMY") === extTab.initialConfig.card.itemId) {
        imageArea.addHoverCls();
      }
    });
  }/*

  private*/ function removeHoverClsFromImageArea(extTab/*:ExtendedTab*/)/*:void*/ {
    this.getImageEditorStage$fiEH().getImageAreas().forEach(function (imageArea/*:ImageArea*/)/*:void*/ {
      if (AS3.getBindable(imageArea,"itemId","DUMMY") === extTab.initialConfig.card.itemId) {
        imageArea.removeHoverCls();
      }
    });
  }/*

  private*/ function setImageDimensions(dimensions/*:ValueExpression*/)/*:void*/ {
    this.imageEditorViewModel.set(ImageEditorPropertyFieldBase.IMAGE_ORIGINAL_DIMENSIONS, dimensions.getValue());
  }/*

  private*/ function computeCommonTransformsImageDimensions(originalImageDimensionsValueExpression/*:ValueExpression*/)/*:ImageDimensions*/ {
    var commonTransformations/*:CommonTransformations*/ = this.getCommonTransformationsValueExpression().getValue();
    if (!commonTransformations) {
      return undefined;
    }
    return AS3.cast(com.coremedia.cms.studio.imageeditor.model.ImageDimensions,{
      width: commonTransformations.getWidth(),
      height: commonTransformations.getHeight()
    });
  }/*

  internal*/ function getVariantBoxedImageDimensionsValueExpressions(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    if (!this.variantBoxedImageDimensionsValueExpressions$fiEH) {
      this.variantBoxedImageDimensionsValueExpressions$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeVariantBoxedImageDimensionsValueExpressions$fiEH"),
              this.getCommonTransformsImageDimensionsValueExpression(config),
              this.getVariantsValueExpression());
    }
    return this.variantBoxedImageDimensionsValueExpressions$fiEH;
  }/*

  private*/ function computeVariantBoxedImageDimensionsValueExpressions(imageDimensionsValueExpression/*:ValueExpression*/, variantsValueExpression/*:ValueExpression*/)/*:Object*/ {
    var result/*:Object*/ = {};
    var variants/*:Object*/ = variantsValueExpression.getValue();
    if (variants === undefined) {
      return undefined;
    }
    for/* each*/ (var $1 in variants) {var variant/*:ImageVariant*/ =variants[$1];
      result[variant.key] = this.createBoxedImageDimensionsValueExpression$fiEH(imageDimensionsValueExpression, variant);
    }
    return result;
  }/*

  private*/ function createBoxedImageDimensionsValueExpression(imageDimensionsValueExpression/*:ValueExpression*/, variant/*:ImageVariant*/)/*:ValueExpression*/ {
    var variantKey/*:String*/ = variant.key;
    var enlargeValueExpression/*:ValueExpression*/ = this.createEnlargeValueExpression$fiEH(variantKey);
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(computeVariantBoxedImageDimensions$static, imageDimensionsValueExpression, variant, enlargeValueExpression);
  }/*

  private*/ function createEnlargeValueExpression(variantKey/*:String*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.create(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP + variantKey, this.imageEditorViewModel);
  }/*

  private static*/ function computeVariantBoxedImageDimensions$static(imageDimensionsValueExpression/*:ValueExpression*/, variant/*:ImageVariant*/, enlargeValueExpression/*:ValueExpression*/)/*:ImageDimensions*/ {
    var imageDimensions/*:ImageDimensions*/ = imageDimensionsValueExpression.getValue();
    if (!imageDimensions) {
      return undefined;
    }
    var enlarge/*:Boolean*/ = enlargeValueExpression.getValue();
    if (!enlarge) {
      return imageDimensions;
    }
    var boxedImageDimensions/*:ImageDimensions*/ = variant.calculateFittingImageDimensions(imageDimensions);
    if (!boxedImageDimensions) {
      return undefined;
    }
    return boxedImageDimensions;
  }/*

  protected*/ function getCommonTransformationsValueExpression()/*:ValueExpression*/ {
    if (!this.commonTransformationsValueExpression$fiEH) {
      this.commonTransformationsValueExpression$fiEH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeTransformations"));
    }
    return this.commonTransformationsValueExpression$fiEH;
  }/*

  protected*/ function computeTransformations()/*:CommonTransformations*/ { // NOSONAR (method too complex)
    var model/*:ImageTransformationModel*/ = AS3.cast(com.coremedia.cms.studio.imageeditor.model.ImageTransformationModel,this.imageEditorViewModel.toObject());
    if (model.orientation === undefined || model.flipHorizontally === undefined || model.flipVertically === undefined
            || model.brightness === undefined || model.contrast === undefined || model.straighten === undefined) {
      return undefined;
    }
    var transformations/*:Array*/ = [];
    if (!isNaN(model.brightness) || !isNaN(model.contrast)) {
      transformations.push({b: {a: model.brightness, c: com.coremedia.cms.studio.imageeditor.ColorTransformationUtil.calculateContrast(model.contrast)}});
    }

    var box/*:ImageDimensions*/ = this.imageDimensionsValueExpression$fiEH.getValue();
    if (box === undefined) {
      return undefined;
    }

    var transformedWidth/*:Number*/ = box.width;
    var transformedHeight/*:Number*/ = box.height;

    if (model.straighten) {
      var alpha/*:Number*/ = DEG_TO_RAD$static * model.straighten;
      var cos/*:Number*/ = Math.cos(alpha);
      var sin/*:Number*/ = Math.abs(Math.sin(alpha));

      // Compute the width and the height of the largest rectangle
      // with the original aspect ratio that fits inside the rotated image.
      // Make sure to avoid placing corners outside of the rotated image.
      // To that end, round down the size of the shorter edge,
      // then compute the size of the longer edge to match the aspect ratio
      // as close as possible, but to stay smaller than the exact length.
      var width/*:Number*/;
      var height/*:Number*/;
      if (box.width > box.height) {
        width = box.height / (box.height / box.width * cos + sin);
        height = box.height / box.width * width;
        transformedHeight = Math.floor(height);
        transformedWidth = Math.min(Math.floor(width), Math.round(box.width / box.height * transformedHeight));
      } else {
        height = box.width / (box.width / box.height * cos + sin);
        width = box.width / box.height * height;
        transformedWidth = Math.floor(width);
        transformedHeight = Math.min(Math.floor(height), Math.round(box.height / box.width * transformedWidth));
      }

      if (transformedWidth < 2 || transformedHeight < 2) {
        // Subsequent scaling needs at least two pixels in both directions.
        // If the rotated image would be too small, simply select a small area
        // from the center of the image. Do not try to rotate.
        // A corner case, admittedly.
        transformedWidth = Math.min(2, box.width);
        transformedHeight = Math.min(2, box.height);
        transformations.push({
          c: {
            x: Math.round(box.width / 2),
            y: Math.round(box.height / 2),
            width: transformedWidth,
            height: transformedHeight
          }
        });
      } else {
        // Compute the total size of the box surrounding the rotated image.
        var rotatedWidth/*:Number*/ = box.width * cos + box.height * sin;
        var rotatedHeight/*:Number*/ = box.width * sin + box.height * cos;
        // Compute the displacement of the center of the rotated image
        // from the original image.
        var x/*:uint*/ = Math.round((rotatedWidth - width) / 2);
        var y/*:uint*/ = Math.round((rotatedHeight - height) / 2);

        transformations.push({rotate: {angle: (model.straighten + 360) % 360}});
        transformations.push({
          c: {
            x: x,
            y: y,
            width: transformedWidth,
            height: transformedHeight
          }
        });
      }
    }

    var rotation/*:int*/ = model.orientation;
    var perpendicular/*:Boolean*/ = rotation === 90 || rotation === 270;
    var flip/*:String*/ = "";
    if (model.flipHorizontally) {
      if (model.flipVertically) {
        // replace point mirroring by rotation:
        rotation += 180;
      } else {
        flip = "h";
      }
    } else if (model.flipVertically) {
      flip = "v";
    }
    if (flip) {
      transformations.push({flip: {d: flip}});
    }
    if (rotation) {
      transformations.push({rotate: {angle: (rotation + 360) % 360}});
    }

    var commonTransforms/*:CommonTransformations*/;
    if (perpendicular) {
      //noinspection JSSuspiciousNameCombination
      commonTransforms = new com.coremedia.cms.studio.imageeditor.CommonTransformations(transformations, transformedHeight, transformedWidth);
    } else {
      commonTransforms = new com.coremedia.cms.studio.imageeditor.CommonTransformations(transformations, transformedWidth, transformedHeight);
    }

    return commonTransforms;
  }/*

  internal*/ function createEnlargeAllCropsPressedValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(new com.coremedia.cms.studio.imageeditor.EnlargeAllCropsValueHolder(this.getVariantsValueExpression(), this.imageEditorViewModel));
  }/*

  internal*/ function createLocalImageUriValueExpression(config/*:ImageEditorPropertyField*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeLocalImageUri$fiEH"),
            AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.content.ContentPropertyNames.PROPERTIES, AS3.getBindable(config,"propertyName"), "uri"));
  }/*

  private*/ function computeLocalImageUri(imageBlobUriValueExpression/*:ValueExpression*/)/*:String*/ {
    var imageUri/*:String*/ = imageBlobUriValueExpression.getValue();
    var transformations/*:CommonTransformations*/ = this.getCommonTransformationsValueExpression().getValue();
    // /rm/: remove image metadata, if any, int blows up the image and we do not need it on the client side:
    if (!imageUri || !transformations) {
      return undefined;
    }
    return imageUri + "/rm/" + com.coremedia.cms.studio.imageeditor.util.TransformationChain.serialize(transformations.getTransformations());
  }/*

  internal static*/ function transformFocusArea$static(storedValue/*:**/)/*:Rectangle*/ {
    var storedObject/*:Object*/;
    var storedStruct/*:Bean*/ =AS3.as( storedValue,  com.coremedia.ui.data.Bean);
    if (storedStruct) {
      storedObject = storedStruct.toObject();
    } else {
      storedObject =AS3.as( storedValue,  Object);
    }
    return !storedObject ? com.coremedia.cms.studio.imageeditor.model.Rectangle.getUnitSquare() : com.coremedia.cms.studio.imageeditor.util.ConversionUtil.x1y1x2y2ToRectangle(storedObject);
  }/*

  internal*/ function transformFocusPointStruct(structValue/*:**/)/*:Rectangle*/ {
    var bean/*:Bean*/ =AS3.as( structValue,  com.coremedia.ui.data.Bean);
    var storedObject/*:Object*/ = bean ? bean.toObject() :AS3.as( structValue,  Object);

    var imageEditorStage/*:ImageEditorStage*/ = this.getImageEditorStage$fiEH();
    var focusPointImageArea/*:FocusPointImageArea*/;
    var focusPointRadius/*:Number*/;
    var adjustedImageBounds/*:Rectangle*/;
    if (imageEditorStage && imageEditorStage.getFocusPointImageArea()) {
      focusPointImageArea = imageEditorStage.getFocusPointImageArea();
      focusPointRadius = focusPointImageArea.getRadius();
      adjustedImageBounds = focusPointImageArea.getAdjustedImageBounds();
    }
    var focusPoint/*:Point*/ = com.coremedia.cms.studio.imageeditor.util.ConversionUtil.xyToPoint(storedObject, com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getDefaultPoint());
    return !storedObject || !adjustedImageBounds || com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.isDefaultPoint(focusPoint) || !focusPointRadius ? com.coremedia.cms.studio.imageeditor.model.Rectangle.getUnitSquare() :
            com.coremedia.cms.studio.imageeditor.util.ConversionUtil.getBoundingBoxForCenter(focusPoint, focusPointRadius, adjustedImageBounds);
  }/*

  /**
   * Updates the focusArea in the image settings struct after it has changed in the view model.
   * /
  private*/ function focusAreaViewModelChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    var viewModelFocusArea/*:Rectangle*/ = event.newValue;
    if (!(viewModelFocusArea && viewModelFocusArea.width && viewModelFocusArea.height)) {
      // no valid focusArea found in the view model, do not update the settings struct
      return;
    }

    var focusAreaStructValueExpression/*:ValueExpression*/ = this.imageSettingsValueExpression$fiEH.extendBy("focusArea");
    var focusAreaStruct/*:Struct*/ =AS3.as( focusAreaStructValueExpression.getValue(),  com.coremedia.cap.struct.Struct);

    if (com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(viewModelFocusArea, ImageEditorPropertyFieldBase.transformFocusArea(focusAreaStruct))) {
      // The focusArea stored in the settings struct already matches the viewModel's focusArea. Do not write the
      // focusArea back to the struct. This also avoids content checkout if the struct does not contain a value
      // for the focusArea but the viewModel's focusArea is set to the default value.
      return;
    }

    // we cannot use focusAreaStructValueExpression.setValue({x1: ... ...}) if the struct does not yet exist
    focusAreaStructValueExpression.extendBy("x1").setValue(String(viewModelFocusArea.x));
    focusAreaStructValueExpression.extendBy("y1").setValue(String(viewModelFocusArea.y));
    focusAreaStructValueExpression.extendBy("x2").setValue(String(viewModelFocusArea.x + viewModelFocusArea.width));
    focusAreaStructValueExpression.extendBy("y2").setValue(String(viewModelFocusArea.y + viewModelFocusArea.height));
  }/*

  private*/ function focusPointViewModelChanged(event/*:PropertyChangeEvent*/)/*:void*/ {
    var viewModelFocuspointRectangle/*:Rectangle*/ = event.newValue;
    if (!(viewModelFocuspointRectangle && viewModelFocuspointRectangle.width && viewModelFocuspointRectangle.height)) {
      // no valid focusPoint found in the view model, do not update the settings struct
      return;
    }

    var focusPointStructValueExpression/*:ValueExpression*/ = this.imageSettingsValueExpression$fiEH.extendBy(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_POINT);
    var focusPointStruct/*:Struct*/ =AS3.as( focusPointStructValueExpression.getValue(),  com.coremedia.cap.struct.Struct);

    if (com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(viewModelFocuspointRectangle, this.transformFocusPointStruct(focusPointStruct))) {
      // The focusPoint stored in the settings struct already matches the viewModel's focusPoint. Do not write the
      // focusPoint back to the struct. This also avoids content checkout if the struct does not contain a value
      // for the focusPoint but the viewModel's focusPoint is set to the default value.
      return;
    }

    if (viewModelFocuspointRectangle.isUnitSquare()) {
      var defaultPoint/*:Point*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getDefaultPoint();
      focusPointStructValueExpression.extendBy("x").setValue(String(defaultPoint.x));
      focusPointStructValueExpression.extendBy("y").setValue(String(defaultPoint.y));
    }
    else {
      var focusPointImageArea/*:FocusPointImageArea*/ = this.getImageEditorStage$fiEH().getFocusPointImageArea();
      var focusPoint/*:Point*/ = com.coremedia.cms.studio.imageeditor.util.ConversionUtil.getCenterOfRectangle(viewModelFocuspointRectangle, focusPointImageArea.getAdjustedImageBounds());
      // we cannot use focusPointStructValueExpression.setValue({x: ... ...}) if the struct does not yet exist
      focusPointStructValueExpression.extendBy("x").setValue(String(focusPoint.x));
      focusPointStructValueExpression.extendBy("y").setValue(String(focusPoint.y));
    }
  }/*

  internal static*/ function isBlobEmpty$static(blob/*:Blob*/)/*:String*/ {
    if (!blob || blob.getSize() === undefined) {
      return 'empty';
    }

    return 'iestage';
  }/*

  internal static*/ function resetImage$static(viewModel/*:Bean*/, variants/*:Array*/)/*:void*/ {
    // Set all transformations to default values
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_DISABLE_CROPPING, false);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_HORIZONTALLY, false);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_VERTICALLY, false);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_ORIENTATION, 0);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_STRAIGHTEN, 0);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_BRIGHTNESS, 0);
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_CONTRAST, 0);

    // reset focus area and crops
    ImageEditorPropertyFieldBase.resetFocusAndCrops(viewModel, variants);
  }/*

  internal static*/ function resetFocusAndCrops$static(viewModel/*:Bean*/, variants/*:Array*/)/*:void*/ {
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA, com.coremedia.cms.studio.imageeditor.model.Rectangle.getUnitSquare());
    viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_POINT, com.coremedia.cms.studio.imageeditor.model.Rectangle.getUnitSquare());
    for/* each*/ (var $1=0;$1</* in*/ variants.length;++$1) {var variant/*:ImageVariant*/ =variants[$1];
      viewModel.set(variant.key, null);
      viewModel.set(ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP + variant.key, false);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      imageSettingsValueExpression$fiEH: null,
      imageDimensionsValueExpression$fiEH: null,
      commonTransformsImageDimensionsValueExpression$fiEH: null,
      commonTransformationsValueExpression$fiEH: null,
      imageEditorViewModel: null,
      readOnlyValueExpression$fiEH: null,
      undoHistory: null,
      blobValueExpression$fiEH: null,
      showCropsValueExpression$fiEH: null,
      content$fiEH: null,
      disableExpression$fiEH: null,
      imageSettingsWritableValueExpression$fiEH: null,
      variantBoxedImageDimensionsValueExpressions$fiEH: null,
      propertyName$fiEH: null,
      variantsValueExpression$fiEH: null,
      tabItemValueExpression$fiEH: null,
      contentValueExpression$fiEH: null,
      contentPathValueExpression$fiEH: null,
      disableStatusExpression$fiEH: null,
      constructor: ImageEditorPropertyFieldBase$,
      super$fiEH: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      contentChanged$fiEH: contentChanged,
      setVariants$fiEH: setVariants,
      getVariantsValueExpression: getVariantsValueExpression,
      getVariantsTabPanel: getVariantsTabPanel,
      getImageEditorStage$fiEH: getImageEditorStage,
      onCheckIn: onCheckIn,
      checkCropsEnabling$fiEH: checkCropsEnabling,
      createTabItem: createTabItem,
      getVariantBoxedImageDimensionsValueExpression$fiEH: getVariantBoxedImageDimensionsValueExpression,
      createReadOnlyValueExpression: createReadOnlyValueExpression,
      getDisableExpression: getDisableExpression,
      getDisableStatusExpression: getDisableStatusExpression,
      onDestroy: onDestroy,
      getImageDimensionsValueExpression$fiEH: getImageDimensionsValueExpression,
      getCommonTransformsImageDimensionsValueExpression: getCommonTransformsImageDimensionsValueExpression,
      getBlobValueExpression: getBlobValueExpression,
      getShowCropsValueExpression: getShowCropsValueExpression,
      getImageSettingsWritableValueExpression: getImageSettingsWritableValueExpression,
      getImageSettingsValueExpression: getImageSettingsValueExpression,
      getImageSettings: getImageSettings,
      onBlobChange$fiEH: onBlobChange,
      getTabItems$fiEH: getTabItems,
      updateVariantTabs$fiEH: updateVariantTabs,
      highlightImageArea$fiEH: highlightImageArea,
      addHoverClsToImageArea$fiEH: addHoverClsToImageArea,
      removeHoverClsFromImageArea$fiEH: removeHoverClsFromImageArea,
      setImageDimensions$fiEH: setImageDimensions,
      computeCommonTransformsImageDimensions$fiEH: computeCommonTransformsImageDimensions,
      getVariantBoxedImageDimensionsValueExpressions: getVariantBoxedImageDimensionsValueExpressions,
      computeVariantBoxedImageDimensionsValueExpressions$fiEH: computeVariantBoxedImageDimensionsValueExpressions,
      createBoxedImageDimensionsValueExpression$fiEH: createBoxedImageDimensionsValueExpression,
      createEnlargeValueExpression$fiEH: createEnlargeValueExpression,
      getCommonTransformationsValueExpression: getCommonTransformationsValueExpression,
      computeTransformations: computeTransformations,
      createEnlargeAllCropsPressedValueExpression: createEnlargeAllCropsPressedValueExpression,
      createLocalImageUriValueExpression: createLocalImageUriValueExpression,
      computeLocalImageUri$fiEH: computeLocalImageUri,
      transformFocusPointStruct: transformFocusPointStruct,
      focusAreaViewModelChanged$fiEH: focusAreaViewModelChanged,
      focusPointViewModelChanged$fiEH: focusPointViewModelChanged,
      statics: {
        DEG_TO_RAD: undefined,
        CONTENTTYPE_PROPERTIES: undefined,
        VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP: "enlarge-",
        VIEW_MODEL_PROPERTY_FOCUS_AREA: "focusArea",
        VIEW_MODEL_PROPERTY_FOCUS_POINT: "focusPoint",
        VIEW_MODEL_PROPERTY_DISABLE_CROPPING: "checkCropsEnabling",
        VIEW_MODEL_PROPERTY_FLIP_HORIZONTALLY: "flipHorizontally",
        VIEW_MODEL_PROPERTY_FLIP_VERTICALLY: "flipVertically",
        VIEW_MODEL_PROPERTY_ORIENTATION: "orientation",
        VIEW_MODEL_PROPERTY_STRAIGHTEN: "straighten",
        VIEW_MODEL_PROPERTY_BRIGHTNESS: "brightness",
        VIEW_MODEL_PROPERTY_CONTRAST: "contrast",
        IMAGE_ORIGINAL_DIMENSIONS: "image_original_dimensions",
        transformFocusArea: transformFocusArea$static,
        isBlobEmpty: isBlobEmpty$static,
        resetImage: resetImage$static,
        resetFocusAndCrops: resetFocusAndCrops$static,
        __initStatics__: function() {
          DEG_TO_RAD$static_();
          CONTENTTYPE_PROPERTIES$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.ContentTypes_properties",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.actions.DependencyTrackedActionBase",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ObjectUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ColorTransformationUtil",
        "com.coremedia.cms.studio.imageeditor.CommonTransformations",
        "com.coremedia.cms.studio.imageeditor.EnlargeAllCropsValueHolder",
        "com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField",
        "com.coremedia.cms.studio.imageeditor.ImageEditorStage",
        "com.coremedia.cms.studio.imageeditor.ImageVariant",
        "com.coremedia.cms.studio.imageeditor.VariantKeyUtil",
        "com.coremedia.cms.studio.imageeditor.VariantTab",
        "com.coremedia.cms.studio.imageeditor.model.ImageDimensions",
        "com.coremedia.cms.studio.imageeditor.model.ImageTransformationModel",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle",
        "com.coremedia.cms.studio.imageeditor.util.ConversionUtil",
        "com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil",
        "com.coremedia.cms.studio.imageeditor.util.TransformationChain"
      ]
    };
});
