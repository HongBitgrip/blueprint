Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditorStageBase", function(ImageEditorStageBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.cms.studio.imageeditor.util.NumberUtil;
import com.coremedia.ui.components.ExtendedTab;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.FunctionValueExpression;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.BEMUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.ObjectUtil;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.tab.TabPanel;

public class ImageEditorStageBase extends Container {

  public static const ITEM_ID_FOCUS_AREA:String = 'overview';
  public static const ITEM_ID_FOCUS_POINT:String = 'focusPoint';
  public static const ITEM_ID_STAGE_INNER_CT:String = 'inner';

  [Bindable]
  public var imageEditorViewModel:Bean;

  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  [Bindable]
  public var undoHistory:UndoHistory;

  [Bindable]
  public var imageSettingsValueExpression:ValueExpression;

  [Bindable]
  public var imageSettingsWritableValueExpression:ValueExpression;

  [Bindable]
  public var commonTransformationsValueExpression:ValueExpression;

  [Bindable]
  public var variantsValueExpression:ValueExpression;

  [Bindable]
  public var imageUriValueExpression:ValueExpression;

  [Bindable]
  public var imageDimensionsValueExpression:ValueExpression;

  [Bindable]
  public var variantBoxedImageDimensionsValueExpressions:ValueExpression;

  [Bindable]
  public var activeTabValueExpression:ValueExpression;

  private var boxedImageDimensionsValueExpression:ValueExpression;

  private var backgroundColorValueExpression:ValueExpression;

  private var imageEditorStageBoundsValueExpression:ValueExpression;
  private var activeTabItemId:String = null;

  private var latestWidth:Number;
  private var latestHeight:Number;

  /**
   * This is the CSS class for the stage container of the image editor.
   * /
  public static const IMAGE_EDITOR_STAGE_BLOCK:String = "image-editor-stage";
  /**
   * This is the CSS class for the image.
   * /
  public static const IMAGE_EDITOR_STAGE_IMAGE:String = "image-editor-image";
  public static const IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER:String =*/function IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER$static_(){ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER=( com.coremedia.ui.util.BEMUtils.getModifierClassName(ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK, "show-single-crop"));}/*;
  public static const IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER:String =*/function IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER$static_(){ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER=( com.coremedia.ui.util.BEMUtils.getModifierClassName(ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK, "show-crops"));}/*;

  public*/ function ImageEditorStageBase$(config/*:ImageEditorStage = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$ncpg(config);
    this.imageEditorStageBoundsValueExpression$ncpg.addChangeListener(AS3.bind(this,"updateImageLocation$ncpg"));
    this.getInnerContainer$ncpg().addListener("afterrender", function ()/*:void*/ {
      var innerEl/*:Element*/ = this$.getInnerContainer$ncpg().getEl();
      this$.mon(innerEl, "mousemove",AS3.bind( this$,"handleImageAreaMouseMove"));
      this$.mon(innerEl, "click",AS3.bind( this$,"handlePossibleImageAreaActivation$ncpg"));
      this$.mon(innerEl, "keydown",AS3.bind( this$,"handlePossibleImageAreaActivation$ncpg"));
      this$.mon(innerEl, "mouseleave",AS3.bind( this$,"handleInnerContainerMouseOut$ncpg"));
    }, null, {single: true});

    this.addImageComponentListeners$ncpg();
  }/*

  private*/ function addImageComponentListeners()/*:void*/ {var this$=this;
    var image/*:Image*/ =AS3.as( this.query(com.coremedia.ui.util.createComponentSelector().itemId("image").build())[0],  com.coremedia.ui.components.Image);
    this.mon(image, "afterrender", function ()/*:void*/ {
      image.el.addListener("error", function ()/*:void*/ {
        this$.setDisplayAreas$ncpg(false);
      });
      image.el.addListener("load", function ()/*:void*/ {
        this$.setDisplayAreas$ncpg(true);
      });
    });
  }/*

  private*/ function setDisplayAreas(displayed/*:Boolean*/)/*:void*/ {
    var me/*:ImageEditorStageBase*/ = this;
    this.getImageAreas().forEach(function (area/*:ImageArea*/)/*:void*/ {
      if (area.rendered) {
        area.el.setDisplayed(displayed);
      }
      me.mon(area, 'afterrender', function ()/*:void*/ {
        area.el.setDisplayed(displayed);
      }, null, {single: true});
    });
  }/*

  //noinspection JSUnusedGlobalSymbols
  internal*/ function getImageSettings()/*:Struct*/ {
    return this.getImageSettingsValueExpression$ncpg().getValue();
  }/*

  private*/ function getImageSettingsValueExpression()/*:ValueExpression*/ {
    if (!AS3.getBindable(this,"imageSettingsValueExpression")) {
      AS3.setBindable(this,"imageSettingsValueExpression" , this.initialConfig.imageSettingsValueExpression);
    }
    return AS3.getBindable(this,"imageSettingsValueExpression");
  }/*

  override protected*/ function onFocusEnter(e/*:Event*/)/*:void*/ {
    Ext.container.Container.prototype.onFocusEnter.call(this,e);

    this.getImageAreas().forEach(function (imageArea/*:ImageArea*/)/*:void*/ {
      imageArea.setTabIndex(0);
    });

    var focusables/*:Array*/ = this.query(":focusable");

    if (focusables.length > 0) {
      focusables[0].focus();

      //noinspection JSValidateTypes
      this.setTabIndex(null);
    }
  }/*

  override protected*/ function onFocusLeave(e/*:Event*/)/*:void*/ {
    Ext.container.Container.prototype.onFocusLeave.call(this,e);

    this.getImageAreas().forEach(function (imageArea/*:ImageArea*/)/*:void*/ {
      imageArea.setTabIndex(-1);
    });

    this.setTabIndex(0);
  }/*

  public*/ function getImageAreas()/*:Array*/ {
    return this.queryBy(function (cmp/*:Component*/)/*:Boolean*/ {
      return AS3.is( cmp,  com.coremedia.cms.studio.imageeditor.ImageArea);
    });
  }/*

  private*/ function addCropVariants()/*:void*/ {
    if (Ext.Object.isEmpty(AS3.getBindable(this,"variantBoxedImageDimensionsValueExpressions").getValue())) {
      return;
    }

    var innerContainer/*:Container*/ = this.getInnerContainer$ncpg();
    //noinspection JSMismatchedCollectionQueryUpdate
    var crops/*:Array*/ = innerContainer.query("[xtype = " + com.coremedia.cms.studio.imageeditor.CropImageArea.xtype + "]");
    crops.map(function (crop/*:CropImageArea*/)/*:void*/ {
      innerContainer.remove(crop, true);
    });
    var variants/*:Array*/ = AS3.getBindable(this,"variantsValueExpression").getValue();
    for/* each*/(var $1=0;$1</* in*/ variants.length;++$1) {var variant/*:ImageVariant*/ =variants[$1];
      var area/*:CropImageArea*/ = this.createCropImageArea(variant);
      innerContainer.add(area);
    }
    //update layout, otherwise the crop area borders won't appear
    innerContainer.updateLayout();
  }/*

  internal*/ function createImageEditorStageBoundsValueExpression()/*:ValueExpression*/ {
    if (!this.imageEditorStageBoundsValueExpression$ncpg) {
      this.imageEditorStageBoundsValueExpression$ncpg = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeImageEditorStageBounds$ncpg"));
    }
    return this.imageEditorStageBoundsValueExpression$ncpg;
  }/*

  internal*/ function createShowAllCropsValueExpression(showCropsValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    return new com.coremedia.ui.data.FunctionValueExpression(function()/*:Boolean*/ {
      return AS3.getBindable(this$,"activeTabValueExpression").getValue() == ImageEditorStageBase.ITEM_ID_FOCUS_AREA && showCropsValueExpression.getValue();
    });
  }/*

  internal*/ function getImageEditorStageBoundsValueExpression()/*:ValueExpression*/ {
    if (!this.imageEditorStageBoundsValueExpression$ncpg ||
            this.imageEditorStageBoundsValueExpression$ncpg.getValue() === undefined ||
            !(AS3.as(this.imageEditorStageBoundsValueExpression$ncpg.getValue(),  com.coremedia.cms.studio.imageeditor.model.Rectangle)).hasAllValues()) {
      this.createImageEditorStageBoundsValueExpression();
    }
    return this.imageEditorStageBoundsValueExpression$ncpg;
  }/*

  private*/ function getInnerContainer()/*:Container*/ {
    return AS3.cast(Ext.container.Container,this.getComponent(ImageEditorStageBase.ITEM_ID_STAGE_INNER_CT));
  }/*

  /**
   * Get stage for rendering the focus point
   * @return FocusPointImageArea
   * /
  internal*/ function getFocusPointImageArea()/*:FocusPointImageArea*/ {
    return AS3.as( this.queryById(ImageEditorStageBase.ITEM_ID_FOCUS_POINT),  com.coremedia.cms.studio.imageeditor.FocusPointImageArea);
  }/*

  internal*/ function getFocusArea()/*:FocusAreaImageArea*/ {
    return AS3.as( this.queryById(ImageEditorStageBase.ITEM_ID_FOCUS_AREA),  com.coremedia.cms.studio.imageeditor.FocusAreaImageArea);
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.container.Container.prototype.afterRender.call(this);
    AS3.getBindable(this,"variantsValueExpression").addChangeListener(AS3.bind(this,"addCropVariants$ncpg"));
    AS3.getBindable(this,"variantBoxedImageDimensionsValueExpressions").addChangeListener(function ()/*:void*/ {
      this$.addCropVariants$ncpg();
    });
    this.addCropVariants$ncpg();
    this.activateTab$ncpg(ImageEditorStageBase.ITEM_ID_FOCUS_AREA);
    AS3.getBindable(this,"activeTabValueExpression").addChangeListener(AS3.bind(this,"activeTabChanged$ncpg"));
    this.mon(this.getEl(), "keydown",AS3.bind( this,"keydown$ncpg"));
  }/*

  private*/ function keydown(e/*:Event*/)/*:void*/ {
    var dx/*:Number*/ = 0;
    var dy/*:Number*/ = 0;
    var key/*:Number*/ = e.getKey();
    switch (key) {
      case 37:
        dx = -1;
        break;
      case 38:
        dy = -1;
        break;
      case 39:
        dx = 1;
        break;
      case 40:
        dy = 1;
        break;
    }
    if (!dx && !dy) {
      return;
    }
    if (e.shiftKey) {
      dx = dx * 5;
      dy = dy * 5;
    }

    var variantsTabPanel/*:TabPanel*/ = this.getVariantsTabPanel$ncpg();
    if (!variantsTabPanel) {
      return;
    }
    var activeTab/*:VariantTab*/ =AS3.as( variantsTabPanel.getActiveTab(),  com.coremedia.cms.studio.imageeditor.VariantTab);
    if (!activeTab) {
      return;
    }

    this.moveCropBy(activeTab.getItemId(), dx, dy);
    e.stopEvent();
  }/*

  private*/ function getVariantsTabPanel()/*:TabPanel*/ {
    var imageEditorPropertyField/*:ImageEditorPropertyField*/ =AS3.as( this.up(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField.xtype).build()),  com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField);
    return imageEditorPropertyField.getVariantsTabPanel();
  }/*

  internal*/ function createCropImageArea(variant/*:ImageVariant*/)/*:CropImageArea*/ {
    var cropImageAreaConfig/*:CropImageArea*/ = AS3.cast(com.coremedia.cms.studio.imageeditor.CropImageArea,{});
    cropImageAreaConfig.itemId = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.variantKeyToItemId(variant.key);
    AS3.setBindable(cropImageAreaConfig,"variant" , variant);
    AS3.setBindable(cropImageAreaConfig,"variantsValueExpression" , AS3.getBindable(this,"variantsValueExpression"));
    AS3.setBindable(cropImageAreaConfig,"imageEditorViewModel" , AS3.getBindable(this,"imageEditorViewModel"));
    AS3.setBindable(cropImageAreaConfig,"readOnlyValueExpression" , AS3.getBindable(this,"readOnlyValueExpression"));
    AS3.setBindable(cropImageAreaConfig,"undoHistory" , AS3.getBindable(this,"undoHistory"));
    AS3.setBindable(cropImageAreaConfig,"imageSettingsValueExpression" , AS3.getBindable(this,"imageSettingsValueExpression"));
    AS3.setBindable(cropImageAreaConfig,"imageDimensionsValueExpression" , AS3.getBindable(this,"imageDimensionsValueExpression"));
    AS3.setBindable(cropImageAreaConfig,"boxedImageDimensionsValueExpression" , this.getBoxedImageDimensionsValueExpression(AS3.getBindable(this,"imageDimensionsValueExpression")));
    AS3.setBindable(cropImageAreaConfig,"commonTransformationsValueExpression" , AS3.getBindable(this,"commonTransformationsValueExpression"));
    AS3.setBindable(cropImageAreaConfig,"imageEditorStageBoundsValueExpression" , this.getImageEditorStageBoundsValueExpression());
    AS3.setBindable(cropImageAreaConfig,"backgroundColorValueExpression" , this.getBackgroundColorExpression(AS3.getBindable(this,"imageEditorViewModel")));
    AS3.setBindable(cropImageAreaConfig,"imageSettingsWritableValueExpression" , AS3.getBindable(this,"imageSettingsWritableValueExpression"));
    var variantBoxedImageDimensionValueExpression/*:ValueExpression*/ = AS3.getBindable(this,"variantBoxedImageDimensionsValueExpressions").getValue()[variant.key];
    AS3.setBindable(cropImageAreaConfig,"variantBoxedImageDimensionValueExpression" , variantBoxedImageDimensionValueExpression);
    return cropImageAreaConfig;
  }/*

  /**
   * Get image dimensions based up variant. (Displayed as dashed rectangle for crops...)
   * => For the <b>FocusAreaImageArea</b> the maximal image dimensions are returned so that all crops could be displayed.
   * => For <b>cropped ImageAreas</b> the respective image dimension of the is returned.
   *
   * @param imageDimensionsValueExpression
   * @return ValueExpression
   * /
  internal*/ function getBoxedImageDimensionsValueExpression(imageDimensionsValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.boxedImageDimensionsValueExpression$ncpg) {
      this.boxedImageDimensionsValueExpression$ncpg = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeBoxedImageDimensions$ncpg"), imageDimensionsValueExpression);
    }
    return this.boxedImageDimensionsValueExpression$ncpg;
  }/*

  /**
   * Get ImageDimensions for the rendered ImageArea.<br>
   * In case of the FocusAreaImageArea, the maximal possible ImageDimensions are returned so that all crops could be displayed.
   *
   * @param imageDimensionsValueExpression
   *
   * @return ImageDimensions
   * /
  private*/ function computeBoxedImageDimensions(imageDimensionsValueExpression/*:ValueExpression*/)/*:ImageDimensions*/ {
    var imageDimensions/*:ImageDimensions*/ = imageDimensionsValueExpression.getValue();
    if (!imageDimensions) {
      return undefined;
    }
    var activeTabItemId/*:String*/ = AS3.getBindable(this,"activeTabValueExpression").getValue();
    if (activeTabItemId === ImageEditorStageBase.ITEM_ID_FOCUS_AREA) {
      return this.computeMaxBoxedImageDimensions$ncpg(imageDimensionsValueExpression);
    }
    var key/*:String*/ = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.itemIdToVariantKey(activeTabItemId);
    if (!key) {
      return imageDimensions;
    }
    var variantBoxedImageDimensionsValueExpression/*:ValueExpression*/ = AS3.getBindable(this,"variantBoxedImageDimensionsValueExpressions").getValue()[key];
    return variantBoxedImageDimensionsValueExpression.getValue();
  }/*

  /**
   * Get maximal ImageDimensions for all registered variant, i.e. maximal height and maximal width<br>
   * (so that all crops could be displayed)
   *
   * @param imageDimensionsValueExpression
   *
   * @return ImageDimensions
   * /
  private*/ function computeMaxBoxedImageDimensions(imageDimensionsValueExpression/*:ValueExpression*/)/*:ImageDimensions*/ {
    var imageDimensions/*:ImageDimensions*/ = imageDimensionsValueExpression.getValue();
    if (!imageDimensions) {
      return undefined;
    }
    var width/*:Number*/ = imageDimensions.width;
    var height/*:Number*/ = imageDimensions.height;
    var variantBoxedImageDimensionsValueExpressions/*:Object*/ = AS3.getBindable(this,"variantBoxedImageDimensionsValueExpressions").getValue();
    for/* each*/ (var $1 in variantBoxedImageDimensionsValueExpressions) {var variantBoxedImageDimensionsValueExpression/*:ValueExpression*/ =variantBoxedImageDimensionsValueExpressions[$1];
      var boxedDimensions/*:ImageDimensions*/ = variantBoxedImageDimensionsValueExpression.getValue();
      if (!boxedDimensions) {
        return undefined;
      }
      width = Math.max(width, boxedDimensions.width);
      height = Math.max(height, boxedDimensions.height);
    }
    return AS3.cast(com.coremedia.cms.studio.imageeditor.model.ImageDimensions,{width: width, height: height});
  }/*

  protected*/ function getBackgroundColorExpression(imageEditorViewModel/*:Bean*/)/*:ValueExpression*/ {
    if (!this.backgroundColorValueExpression$ncpg) {
      this.backgroundColorValueExpression$ncpg = com.coremedia.ui.data.ValueExpressionFactory.create('background', imageEditorViewModel);
    }
    return this.backgroundColorValueExpression$ncpg;
  }/*

  private var lastHoverItem:CropImageArea = null;

  internal*/ function handleImageAreaMouseMove(event/*:Event*/)/*:Boolean*/ {
    var hoverItem/*:CropImageArea*/ = this.activeTabItemId$ncpg === ImageEditorStageBase.ITEM_ID_FOCUS_AREA ? this.getImageAreaFromClickEvent$ncpg(event) : null;
    if (hoverItem !== this.lastHoverItem$ncpg) {
      if (this.lastHoverItem$ncpg) {
        this.lastHoverItem$ncpg.removeHoverCls();
        this.highlightVariantTab$ncpg(AS3.getBindable(this.lastHoverItem$ncpg,"itemId","DUMMY"), false);
      }
      this.lastHoverItem$ncpg = hoverItem;
      var innerEl/*:Element*/ = this.getInnerContainer$ncpg().getEl();
      if (this.lastHoverItem$ncpg) {
        innerEl.setStyle("cursor", "pointer");
        this.lastHoverItem$ncpg.addHoverCls();
        this.highlightVariantTab$ncpg(AS3.getBindable(this.lastHoverItem$ncpg,"itemId","DUMMY"), true);
      } else {
        innerEl.setStyle("cursor", "auto");
      }
    }
  }/*

  private*/ function highlightVariantTab(itemId/*:String*/, highlighted/*:Boolean*/)/*:void*/ {
    var variantsTabPanel/*:TabPanel*/ = this.getVariantsTabPanel$ncpg();
    if (variantsTabPanel) {
      var variantTab/*:VariantTab*/ =AS3.as( variantsTabPanel.queryById(itemId),  com.coremedia.cms.studio.imageeditor.VariantTab);
      var extendedTab/*:ExtendedTab*/ = variantTab &&AS3.as( variantTab.tab,  com.coremedia.ui.components.ExtendedTab);
      if (extendedTab) {
        AS3.setBindable(extendedTab,"highlighted" , highlighted);
      }
    }
  }/*

  private*/ function handleInnerContainerMouseOut()/*:void*/ {
    if (this.lastHoverItem$ncpg) {
      this.lastHoverItem$ncpg.removeHoverCls();
      this.highlightVariantTab$ncpg(AS3.getBindable(this.lastHoverItem$ncpg,"itemId","DUMMY"), false);
      this.getInnerContainer$ncpg().getEl().setStyle("cursor", "auto");
      this.lastHoverItem$ncpg = null;
    }
  }/*

  private*/ function handlePossibleImageAreaActivation(event/*:Event*/)/*:Boolean*/ {
    var targetImageArea/*:CropImageArea*/;

    if (event.getKey() && (event.getKey() === Ext.event.Event.ENTER || event.getKey() === Ext.event.Event.SPACE)) {
      // 'keydown' event: Let's check whether the event target is a CropImageArea
      var targetEl/*:Element*/ = Ext.get(event.target);
      targetImageArea = targetEl && (AS3.as(targetEl.component,  com.coremedia.cms.studio.imageeditor.CropImageArea));
      targetImageArea && event.stopEvent();
    } else {
      // 'click' event:
      // Let's check whether it was an image area that was clicked.
      // This makes it possible to distinguish an actual click
      // from the end of a drag and drop operation.
      if (Ext.fly(event.browserEvent.target).hasCls(com.coremedia.cms.studio.imageeditor.ImageAreaBase.INNER_DIV_CLS)) {
        targetImageArea = this.activeTabItemId$ncpg === ImageEditorStageBase.ITEM_ID_FOCUS_AREA ?AS3.as( this.getImageAreaFromClickEvent$ncpg(event),  com.coremedia.cms.studio.imageeditor.CropImageArea) : null;
      }
    }

    if (targetImageArea) {
      AS3.getBindable(this,"activeTabValueExpression").setValue(targetImageArea.getItemId());
      return true;
    }

    return false;
  }/*

  internal*/ function moveCropBy(tabItemId/*:String*/, dx/*:Number*/, dy/*:Number*/)/*:void*/ {
    if (!AS3.getBindable(this,"imageDimensionsValueExpression")) {
      return;
    }
    var imageDimensions/*:ImageDimensions*/ = AS3.getBindable(this,"imageDimensionsValueExpression").getValue();
    if (!imageDimensions) {
      return;
    }

    // For scaled-down images, speed up movement, so that the on-screen movement stays the same.
    // For scaled-up images, move at regular speed so that the crop moves at least a little.
    var imageEditorStageBounds/*:Rectangle*/ = this.imageEditorStageBoundsValueExpression$ncpg.getValue();
    var factor/*:Number*/ = Math.max(1,
            Math.round(imageDimensions.width / imageEditorStageBounds.width),
            Math.round(imageDimensions.height / imageEditorStageBounds.height));

    var key/*:String*/;
    if (tabItemId === ImageEditorStageBase.ITEM_ID_FOCUS_AREA) {
      key = com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA;
    } else {
      key = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.itemIdToVariantKey(tabItemId);
      if (!AS3.getBindable(this,"imageEditorViewModel").get(key)) {
        // Variant is still in its default state.
        var variant/*:ImageVariant*/ = this.getVariant$ncpg(key);
        if (!variant) {
          return;
        }
        var defaultCropDimensions/*:Rectangle*/ = variant.calculateDefaultCropDimensions(AS3.getBindable(this,"imageEditorViewModel").get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA),
                imageDimensions);
        if (dx === 0 && defaultCropDimensions.y === 0 && defaultCropDimensions.height === 1 ||
                dy === 0 && defaultCropDimensions.x === 0 && defaultCropDimensions.width === 1) {
          // The crop cannot be moved.
          return;
        }
        AS3.getBindable(this,"imageEditorViewModel").set(key, defaultCropDimensions);
      }
    }

    var cropDimensions/*:Rectangle*/ = AS3.getBindable(this,"imageEditorViewModel").get(key);
    var absoluteCropDimensions/*:Rectangle*/ = cropDimensions.scale(imageDimensions.width, imageDimensions.height);
    var newX/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.NumberUtil.clamp(0, absoluteCropDimensions.x + dx * factor, imageDimensions.width - absoluteCropDimensions.width);
    var newY/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.NumberUtil.clamp(0, absoluteCropDimensions.y + dy * factor, imageDimensions.height - absoluteCropDimensions.height);
    var newAbsoluteCropDimensions/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(newX,
            newY,
            absoluteCropDimensions.width,
            absoluteCropDimensions.height);
    var newCropDimensions/*:Rectangle*/ = newAbsoluteCropDimensions.scale(1 / imageDimensions.width, 1 / imageDimensions.height);

    AS3.getBindable(this,"imageEditorViewModel").set(key, newCropDimensions);
  }/*

  private*/ function getVariant(key/*:String*/)/*:ImageVariant*/ {
    var variants/*:Array*/ =AS3.as( AS3.getBindable(this,"variantsValueExpression").getValue(),  Array) || [];
    for/* each*/ (var $1=0;$1</* in*/ variants.length;++$1) {var variant/*:ImageVariant*/ =variants[$1];
      if (variant.key === key) {
        return variant;
      }
    }
    return null;
  }/*

  private*/ function getImageAreaFromClickEvent(event/*:Event*/)/*:CropImageArea*/ {
    var eventXY/*:Array*/ = event.getXY();
    var containerXY/*:Array*/ = this.getInnerContainer$ncpg().getEl().getXY();
    var x/*:int*/ = eventXY[0] - containerXY[0];
    var y/*:int*/ = eventXY[1] - containerXY[1];
    return AS3.cast(com.coremedia.cms.studio.imageeditor.ImageArea,this.getInnerContainer$ncpg().itemCollection.findBy(function (component/*:Component*/)/*:Boolean*/ {
      var imageArea/*:ImageArea*/ =AS3.as( component,  com.coremedia.cms.studio.imageeditor.CropImageArea);
      return ! !imageArea && imageArea.isInsideBorder(x, y);
    })) || null;
  }/*

  private*/ function activeTabChanged()/*:void*/ {
    var newActiveTabItemId/*:String*/ = AS3.getBindable(this,"activeTabValueExpression").getValue();
    if (newActiveTabItemId !== this.activeTabItemId$ncpg) {
      this.getActiveImageArea$ncpg().deactivate();
      this.activateTab$ncpg(newActiveTabItemId);
    }
  }/*

  private*/ function activateTab(newActiveTabItemId/*:String*/)/*:void*/ {
    this.activeTabItemId$ncpg = newActiveTabItemId;
    if (this.activeTabItemId$ncpg === ImageEditorStageBase.ITEM_ID_FOCUS_AREA) {
      this.getInnerContainer$ncpg().removeCls(ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER);
    } else {
      this.getInnerContainer$ncpg().addCls(ImageEditorStageBase.IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER);
    }
    this.getActiveImageArea$ncpg().activate();
  }/*

  private*/ function getActiveImageArea()/*:ImageAreaBase*/ {
    var active/*:Component*/ = this.getInnerContainer$ncpg().getComponent([this.activeTabItemId$ncpg]);
    //may be undefined when the variants have been changed, e.g. after content has been moved to another site
    if (active === undefined) {
      active = this.getInnerContainer$ncpg().getComponent([ImageEditorStageBase.ITEM_ID_FOCUS_AREA]);
    }
    return AS3.cast(com.coremedia.cms.studio.imageeditor.ImageAreaBase,active);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"variantsValueExpression") && AS3.getBindable(this,"variantsValueExpression").removeChangeListener(AS3.bind(this,"addCropVariants$ncpg"));
    AS3.getBindable(this,"activeTabValueExpression") && AS3.getBindable(this,"activeTabValueExpression").removeChangeListener(AS3.bind(this,"activeTabChanged$ncpg"));
    this.imageEditorStageBoundsValueExpression$ncpg.removeChangeListener(AS3.bind(this,"updateImageLocation$ncpg"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*

  private*/ function updateImageLocation(localImageBoundsValueExpression/*:ValueExpression*/)/*:void*/ {
    var bounds/*:Rectangle*/ = localImageBoundsValueExpression.getValue();
    if (bounds && bounds.hasAllValues()) {
      var centeredContainer/*:Container*/ = this.getInnerContainer$ncpg();
      centeredContainer.setPosition(bounds.x, bounds.y);
      centeredContainer.setSize(bounds.width + "", bounds.height + "");
      var imageComponent/*:Component*/ = AS3.cast(Ext.Component,centeredContainer.getComponent("image"));
      // hack: ImageComponents overwrites setSize() to ignore everything. Call super method explicitly:
      (AS3.as(imageComponent,  Ext.Component)).setSize(bounds.width + "", bounds.height + "");
    }
  }/*

  private*/ function computeAvailableDimensions()/*:ImageDimensions*/ {
    if (!this.rendered) {
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "render");
      return undefined;
    }

    var width/*:Number*/ = this.getWidth();
    var height/*:Number*/ = this.getHeight();

    /* If the image editor has no image and previous version is restored, the
     * dimension of the stage is 0px since the switching container shows the upload field instead. Workaround:
     * We store the latest width and always use a value > 0 this way.
     * Someone may find a better solution here....
     */
    if (width === 0 || height === 0) {
      width = this.latestWidth$ncpg;
      height = this.latestHeight$ncpg;
    }
    else {
      this.latestWidth$ncpg = width;
      this.latestHeight$ncpg = height;
    }

    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, "resize");
    return AS3.cast(com.coremedia.cms.studio.imageeditor.model.ImageDimensions,{
      width: width,
      height: height
    });
  }/*

  private*/ function computeImageEditorStageBounds()/*:Rectangle*/ {
    var available/*:ImageDimensions*/ = this.computeAvailableDimensions$ncpg();
    var imageSize/*:ImageDimensions*/ = this.boxedImageDimensionsValueExpression$ncpg.getValue();
    if (!available || !imageSize) {
      return undefined;
    }
    var localWidth/*:Number*/ = available.width;
    var localHeight/*:Number*/ = available.height;
    var imageAspectRatio/*:Number*/ = imageSize.width / imageSize.height;
    var x0/*:Number*/ = 0;
    var y0/*:Number*/ = 0;
    if (localWidth / localHeight > imageAspectRatio) {
      localWidth = localHeight * imageAspectRatio;
      x0 = (available.width - localWidth) / 2;
    } else {
      localHeight = localWidth / imageAspectRatio;
      y0 = (available.height - localHeight) / 2;
    }
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(x0, y0, localWidth, localHeight).round();
  }/*

  internal*/ function computeLocalImageUri()/*:String*/ {
    var imageUri/*:String*/ = AS3.getBindable(this,"imageUriValueExpression").getValue();
    var imageEditorStageBounds/*:Rectangle*/ = this.imageEditorStageBoundsValueExpression$ncpg.getValue();
    var imageDimensions/*:ImageDimensions*/ = AS3.getBindable(this,"imageDimensionsValueExpression").getValue();
    var box/*:ImageDimensions*/ = this.boxedImageDimensionsValueExpression$ncpg.getValue();
    if (imageUri === undefined || imageEditorStageBounds === undefined || !imageEditorStageBounds.hasAllValues() || !box || !AS3.getBindable(this,"imageEditorViewModel")) {
      return undefined;
    }
    if (!imageUri.match(/\/$/)) {
      imageUri += "/";
    }
    var scaledWidth/*:Number*/ = Math.round(imageDimensions.width * imageEditorStageBounds.width / box.width);
    var scaledHeight/*:Number*/ = Math.round(imageDimensions.height * imageEditorStageBounds.height / box.height);
    imageUri += "s;w=" + scaledWidth + ";h=" + scaledHeight;
    imageUri += "/box;w=" + imageEditorStageBounds.width + ";h=" + imageEditorStageBounds.height + ";bg=" + this.getBackgroundColorExpression(AS3.getBindable(this,"imageEditorViewModel")).getValue();
    return imageUri;
  }/*


  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    Ext.container.Container.prototype.destroy.apply(this, params);
    AS3.getBindable(this,"variantsValueExpression").removeChangeListener(AS3.bind(this,"addCropVariants$ncpg"));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      boxedImageDimensionsValueExpression$ncpg: null,
      backgroundColorValueExpression$ncpg: null,
      imageEditorStageBoundsValueExpression$ncpg: null,
      activeTabItemId$ncpg: null,
      latestWidth$ncpg: NaN,
      latestHeight$ncpg: NaN,
      constructor: ImageEditorStageBase$,
      super$ncpg: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      addImageComponentListeners$ncpg: addImageComponentListeners,
      setDisplayAreas$ncpg: setDisplayAreas,
      getImageSettings: getImageSettings,
      getImageSettingsValueExpression$ncpg: getImageSettingsValueExpression,
      onFocusEnter: onFocusEnter,
      onFocusLeave: onFocusLeave,
      getImageAreas: getImageAreas,
      addCropVariants$ncpg: addCropVariants,
      createImageEditorStageBoundsValueExpression: createImageEditorStageBoundsValueExpression,
      createShowAllCropsValueExpression: createShowAllCropsValueExpression,
      getImageEditorStageBoundsValueExpression: getImageEditorStageBoundsValueExpression,
      getInnerContainer$ncpg: getInnerContainer,
      getFocusPointImageArea: getFocusPointImageArea,
      getFocusArea: getFocusArea,
      afterRender: afterRender,
      keydown$ncpg: keydown,
      getVariantsTabPanel$ncpg: getVariantsTabPanel,
      createCropImageArea: createCropImageArea,
      getBoxedImageDimensionsValueExpression: getBoxedImageDimensionsValueExpression,
      computeBoxedImageDimensions$ncpg: computeBoxedImageDimensions,
      computeMaxBoxedImageDimensions$ncpg: computeMaxBoxedImageDimensions,
      getBackgroundColorExpression: getBackgroundColorExpression,
      lastHoverItem$ncpg: null,
      handleImageAreaMouseMove: handleImageAreaMouseMove,
      highlightVariantTab$ncpg: highlightVariantTab,
      handleInnerContainerMouseOut$ncpg: handleInnerContainerMouseOut,
      handlePossibleImageAreaActivation$ncpg: handlePossibleImageAreaActivation,
      moveCropBy: moveCropBy,
      getVariant$ncpg: getVariant,
      getImageAreaFromClickEvent$ncpg: getImageAreaFromClickEvent,
      activeTabChanged$ncpg: activeTabChanged,
      activateTab$ncpg: activateTab,
      getActiveImageArea$ncpg: getActiveImageArea,
      onDestroy: onDestroy,
      updateImageLocation$ncpg: updateImageLocation,
      computeAvailableDimensions$ncpg: computeAvailableDimensions,
      computeImageEditorStageBounds$ncpg: computeImageEditorStageBounds,
      computeLocalImageUri: computeLocalImageUri,
      destroy: destroy,
      config: {
        imageEditorViewModel: null,
        readOnlyValueExpression: null,
        undoHistory: null,
        imageSettingsValueExpression: null,
        imageSettingsWritableValueExpression: null,
        commonTransformationsValueExpression: null,
        variantsValueExpression: null,
        imageUriValueExpression: null,
        imageDimensionsValueExpression: null,
        variantBoxedImageDimensionsValueExpressions: null,
        activeTabValueExpression: null
      },
      statics: {
        ITEM_ID_FOCUS_AREA: 'overview',
        ITEM_ID_FOCUS_POINT: 'focusPoint',
        ITEM_ID_STAGE_INNER_CT: 'inner',
        IMAGE_EDITOR_STAGE_BLOCK: "image-editor-stage",
        IMAGE_EDITOR_STAGE_IMAGE: "image-editor-image",
        IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER: undefined,
        IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER: undefined,
        __initStatics__: function() {
          IMAGE_EDITOR_STAGE_BLOCK_SHOW_SINGLE_CROP_MODIFIER$static_();
          IMAGE_EDITOR_STAGE_BLOCK_SHOW_CROPS_MODIFIER$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.Object",
        "Ext.container.Container",
        "Ext.event.Event",
        "com.coremedia.ui.components.ExtendedTab",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.data.FunctionValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.BEMUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.CropImageArea",
        "com.coremedia.cms.studio.imageeditor.FocusAreaImageArea",
        "com.coremedia.cms.studio.imageeditor.FocusPointImageArea",
        "com.coremedia.cms.studio.imageeditor.ImageArea",
        "com.coremedia.cms.studio.imageeditor.ImageAreaBase",
        "com.coremedia.cms.studio.imageeditor.ImageEditorPropertyField",
        "com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase",
        "com.coremedia.cms.studio.imageeditor.VariantKeyUtil",
        "com.coremedia.cms.studio.imageeditor.VariantTab",
        "com.coremedia.cms.studio.imageeditor.model.ImageDimensions",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle",
        "com.coremedia.cms.studio.imageeditor.util.NumberUtil"
      ]
    };
});
