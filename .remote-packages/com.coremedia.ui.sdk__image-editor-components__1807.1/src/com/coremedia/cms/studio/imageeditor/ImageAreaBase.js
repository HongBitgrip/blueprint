Ext.define("com.coremedia.cms.studio.imageeditor.ImageAreaBase", function(ImageAreaBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.AriaUtils;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.dd.DragTracker;
import ext.dom.Element;
import ext.event.Event;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class ImageAreaBase extends Component implements IValidationStateMixin {

  public static const OUTER_DIV_CLS:String = "image-area";
  public static const INNER_DIV_CLS:String = "image-area-inner";
  public static const SINGLE_CROP_CLS:String = "solo";

  public static const HANDLE_CENTER:String = "center";

  protected var outerImageArea:Element;

  [Bindable]
  public var variant:ImageVariant;

  [Bindable]
  public var imageEditorViewModel:Bean;

  [Bindable]
  public var readOnlyValueExpression:ValueExpression;

  [Bindable]
  public var undoHistory:UndoHistory;

  [Bindable]
  public var imageSettingsValueExpression:ValueExpression;

  [Bindable]
  public var imageDimensionsValueExpression:ValueExpression;

  [Bindable]
  public var boxedImageDimensionsValueExpression:ValueExpression;

  [Bindable]
  public var commonTransformationsValueExpression:ValueExpression;

  [Bindable]
  public var imageEditorStageBoundsValueExpression:ValueExpression;

  [Bindable]
  public var variantsValueExpression:ValueExpression;

  private var imageAreaBoundsValueExpression:ValueExpression;

  protected var theResizable:DragTracker;
  private var handles:Array;

  protected var start:Rectangle;
  protected var activeHandle:String;

  protected var showResizeHandles:Boolean = true;

  private const ORIENTATIONS:Array =*/function ORIENTATIONS_(){this.ORIENTATIONS$VjqM=( [
    "north",
    "northeast",
    "east",
    "southeast",
    "south",
    "southwest",
    "west",
    "northwest"
  ]);}/*;

  public*/ function ImageAreaBase$(config/*:ImageArea = null*/) {if(arguments.length<=0)config=null;
    this.super$VjqM(config);ORIENTATIONS_.call(this);;
    this.initValidationStateMixin();
  }/*

  internal*/ function getImageEditorStage()/*:ImageEditorStage*/ {
    return AS3.as( this.findParentByType(com.coremedia.cms.studio.imageeditor.ImageEditorStage.xtype),  com.coremedia.cms.studio.imageeditor.ImageEditorStage);
  }/*

  /**
   * Get focus area bounds of this ImageArea
   * @param config
   * @return ValueExpression
   * /
  internal*/ function getBoundsValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    return this.getImageEditorStage().getFocusArea().getFocusAreaValueExpression(config);
  }/*

  /**
   * Get bounds of this ImageArea
   * @return Rectangle [percentage-wise]
   * /
  internal*/ function getPercentageRectangle()/*:Rectangle*/ {
    return this.getBoundsValueExpression().getValue();
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.Component.prototype.afterRender.call(this);
    this.outerImageArea = this.el.createChild({
      cls: ImageAreaBase.OUTER_DIV_CLS
    });
    this.outerImageArea.createChild({
      cls: ImageAreaBase.INNER_DIV_CLS
    });

    if (this.el.hasCls(ImageAreaBase.SINGLE_CROP_CLS)) {
      // Do it again, now that we are rendered:
      this.activate();
    }

    this.imageAreaBoundsValueExpression$VjqM = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeRectangle"),
            this.getBoundsValueExpression(), AS3.getBindable(this,"imageEditorStageBoundsValueExpression"));
    this.imageAreaBoundsValueExpression$VjqM.addChangeListener(AS3.bind(this,"updateImageAreaBounds"));
    this.mon(this.up(), "resize",AS3.bind( this,"updateImageAreaBounds"));
    AS3.getBindable(this,"variantsValueExpression").addChangeListener(AS3.bind(this,"updateImageAreaBounds"));
    this.updateImageAreaBounds();

    this.addAriaLabel$VjqM();
    this.setupFocusManagement$VjqM();
  }/*

  private*/ function addAriaLabel()/*:void*/ {
    var ariaLabelEl/*:Element*/ = com.coremedia.ui.util.AriaUtils.createReferenceableAriaEl(this, "label");
    com.coremedia.ui.util.AriaUtils.addLabelledBy(this.getEl(), ariaLabelEl.id);
    ariaLabelEl.dom.innerHTML = this.ariaLabel;
  }/*

  override public*/ function setTabIndex(newTabIndex/*:Number*/)/*:void*/ {
    Ext.Component.prototype.setTabIndex.call(this,newTabIndex);

    this.getEl() && this.getEl().dom && this.getEl().dom.setAttribute("tabIndex", newTabIndex);
  }/*

  private*/ function setupFocusManagement()/*:void*/ {var this$=this;
    this.mon(this.getEl(), "mousedown",AS3.bind( this,"focus"));

    this.mon(this.getEl(), "focus", function ()/*:void*/ {
      this$.addHoverCls();
    });

    this.mon(this.getEl(), "blur", function ()/*:void*/ {
      this$.removeHoverCls();
    });
  }/*

  public*/ function removeHoverCls()/*:void*/ {
    this.getEl() && this.getEl().removeCls("hover");
  }/*

  public*/ function addHoverCls()/*:void*/ {
    this.getEl() && this.getEl().addCls("hover");
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function resizableMouseDown(tracker/*:DragTracker*/, e/*:Event*/)/*:void*/ {
    var startRegion/*:Object*/ = this.getEl().getRegion();
    this.start = new com.coremedia.cms.studio.imageeditor.model.Rectangle(startRegion.left,
            startRegion.top,
            startRegion.right - startRegion.left,
            startRegion.bottom - startRegion.top);

    this.activeHandle = e.target.getAttribute('data-orientation') || ImageAreaBase.HANDLE_CENTER;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function resizableDrag(tracker/*:DragTracker*/, e/*:Event*/)/*:void*/ {
    this.updateDimensions();
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function resizableDragEnd(tracker/*:DragTracker*/, e/*:Event*/)/*:void*/ {
    this.updateDimensions();
    this.imageAreaChanged$VjqM();
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    AS3.getBindable(this,"variantsValueExpression").removeChangeListener(AS3.bind(this,"updateImageAreaBounds"));
    var parent/*:Container*/ = this.up();
    parent && this.mun(parent, "resize",AS3.bind( this,"updateImageAreaBounds"));
    if (this.imageAreaBoundsValueExpression$VjqM) {
      this.imageAreaBoundsValueExpression$VjqM.removeChangeListener(AS3.bind(this,"updateImageAreaBounds"));
    }
    Ext.Component.prototype.onDestroy.call(this);
  }/*

  public*/ function activate()/*:void*/ {
    this.addCls(ImageAreaBase.SINGLE_CROP_CLS);
    if (this.rendered) {
      AS3.getBindable(this,"readOnlyValueExpression").addChangeListener(AS3.bind(this,"readOnlyStateChanged$VjqM"));
      this.readOnlyStateChanged$VjqM();
    }
  }/*

  public*/ function deactivate()/*:void*/ {
    AS3.getBindable(this,"readOnlyValueExpression").removeChangeListener(AS3.bind(this,"readOnlyStateChanged$VjqM"));
    this.removeCls(ImageAreaBase.SINGLE_CROP_CLS);
    this.deactivateResizer();
  }/*

  /**
   * Get image dimensions of the image of this ImageArea (Displayed as dashed rectangle for crops...)
   * @return ValueExpression
   * /
  internal*/ function getVariantBoxedImageDimensionsValueExpression()/*:ValueExpression*/ {
    return AS3.getBindable(this,"imageDimensionsValueExpression");
  }/*

  /**
   * Calculate rectangle for this ImageArea and scale it to fit the imageEditorStage bounds.
   *
   * Adjust image area bounds based upon its old underlying image dimensions and
   *
   * @param imageAreaBoundsVE
   * @param imageEditorStageBoundsVE
   * @return Rectangle
   * /
  protected*/ function computeRectangle(imageAreaBoundsVE/*:ValueExpression*/,
                                      imageEditorStageBoundsVE/*:ValueExpression*/)/*:Rectangle*/ {

    var variantBoxedImageDimensionsValueExpression/*:ValueExpression*/ = this.getVariantBoxedImageDimensionsValueExpression();
    if (!variantBoxedImageDimensionsValueExpression) {
      return undefined;
    }
    var imageDimensions/*:ImageDimensions*/ = variantBoxedImageDimensionsValueExpression.getValue();
    var imageAreaBounds/*:Rectangle*/ = imageAreaBoundsVE.getValue();
    var imageEditorStageBounds/*:Rectangle*/ = imageEditorStageBoundsVE.getValue();
    var imageSection/*:ImageDimensions*/ = AS3.getBindable(this,"boxedImageDimensionsValueExpression").getValue();
    if (!imageEditorStageBounds || !imageAreaBounds || !imageSection || !imageDimensions) {
      return undefined;
    }
    var adjustedCrop/*:Rectangle*/ = imageAreaBounds.adjust(imageDimensions, imageSection, AS3.getBindable(this,"variant") ? AS3.getBindable(this,"variant").aspectRatio : NaN);
    return adjustedCrop.scale(imageEditorStageBounds.width, imageEditorStageBounds.height).round();
  }/*

  protected*/ function updateImageAreaBounds()/*:void*/ {
    var box/*:Rectangle*/ = this.imageAreaBoundsValueExpression$VjqM.getValue();
    //check if element is destroyed, may happen when editor is opened and moved to another site
    if (box && this.el && this.el.dom) {
      // constraining breaks when resizing the element:
      this.el.setLocalXY(box.x, box.y);
      this.el.setSize(box.width, box.height);
      if (this.deactivateResizer()) {
        this.activateResizer$VjqM();
      }
    }
  }/*

  public*/ function isInsideBorder(x/*:int*/, y/*:int*/)/*:Boolean*/ {
    var bounds/*:Rectangle*/ = this.imageAreaBoundsValueExpression$VjqM.getValue();
    return ! !bounds && bounds.containsPoint(x, y) && !bounds.grow(-3).containsPoint(x, y);
  }/*

  private*/ function readOnlyStateChanged()/*:void*/ {
    var readOnly/*:Boolean*/ = AS3.getBindable(this,"readOnlyValueExpression").getValue();
    if (readOnly === false) {
      this.activateResizer$VjqM();
    } else {
      this.deactivateResizer();
    }
  }/*

  private*/ function activateResizer()/*:void*/ {
    this.theResizable = new Ext.dd.DragTracker(AS3.cast(Ext.dd.DragTracker,{
      el: this.getEl()
    }));
    this.theResizable.on("mouseDown",AS3.bind( this,"resizableMouseDown$VjqM"));
    this.theResizable.on("drag",AS3.bind( this,"resizableDrag$VjqM"));
    this.theResizable.on("dragEnd",AS3.bind( this,"resizableDragEnd$VjqM"));

    if (this.showResizeHandles) {
      this.handles$VjqM = [];
      for/* each*/ (var $1=0;$1</* in*/ this.ORIENTATIONS$VjqM.length;++$1) {var orientation/*:String*/ =this.ORIENTATIONS$VjqM[$1];
        this.handles$VjqM.push(this.el.createChild({
          cls: "x-resizable-handle " +
          "x-resizable-handle-" + orientation + " " +
          "x-component-handle " +
          "x-component-handle-" + orientation + " " +
          "x-component-handle-" + orientation + "-br " +
          "x-unselectable",
          'data-orientation': orientation,
          unselectable: "on",
          role: "presentation"
        }));
      }
    }
  }/*

  protected*/ function updateDimensions()/*:void*/ {
    try {
      var offset/*:Array*/ = this.theResizable.getOffset(null);
      var diffX/*:Number*/ = offset[0];
      var diffY/*:Number*/ = offset[1];

      var ownerBox/*:Object*/ = this.ownerCt.getBox();
      var imageEditorStageBounds/*:Rectangle*/ = AS3.getBindable(this,"imageEditorStageBoundsValueExpression").getValue();
      var region/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(ownerBox.x, ownerBox.y,
              imageEditorStageBounds.width, imageEditorStageBounds.height);
      var adjustedRegion/*:Rectangle*/ = ImageAreaBase.adjustRegion(region, AS3.getBindable(this,"boxedImageDimensionsValueExpression").getValue(), this.getVariantBoxedImageDimensionsValueExpression().getValue());
      var newBox/*:Object*/;
      if (this.activeHandle === ImageAreaBase.HANDLE_CENTER) {
        diffX = Math.max(Math.min(diffX, adjustedRegion.right - this.start.right), adjustedRegion.left - this.start.left);
        diffY = Math.max(Math.min(diffY, adjustedRegion.bottom - this.start.bottom), adjustedRegion.top - this.start.top);
        this.setXY([this.start.x + diffX, this.start.y + diffY]);
      } else {
        newBox = this.makeNewBox(this.start, this.activeHandle, diffX, diffY, adjustedRegion);
        this.setBox(newBox);
      }
    } catch (ex/*:**/) {
    }
  }/*

  protected static*/ function adjustRegion$static(region/*:Rectangle*/, screenBox/*:ImageDimensions*/, variantBox/*:ImageDimensions*/)/*:Rectangle*/ {
    var boxOffsetX/*:Number*/ = (screenBox.width - variantBox.width) / 2;
    var boxOffsetY/*:Number*/ = (screenBox.height - variantBox.height) / 2;

    var dx/*:Number*/ = boxOffsetX / screenBox.width * region.width;
    var dy/*:Number*/ = boxOffsetY / screenBox.height * region.height;

    var adjustedRegion/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(
            region.x + dx,
            region.y + dy,
            region.width / screenBox.width * variantBox.width,
            region.height / screenBox.height * variantBox.height
    ).round();
    return adjustedRegion;
  }/*

  protected*/ function makeNewBox(start/*:Rectangle*/, activeHandle/*:String*/, diffX/*:Number*/, diffY/*:Number*/, region/*:Rectangle*/)/*:Object*/ {
    var l/*:Number*/ = start.left;
    var r/*:Number*/ = start.right;
    var t/*:Number*/ = start.top;
    var b/*:Number*/ = start.bottom;
    if (activeHandle.indexOf("east") !== -1) {
      r = Math.min(Math.max(r + diffX, l + 1), region.right);
    }
    if (activeHandle.indexOf("south") !== -1) {
      b = Math.min(Math.max(b + diffY, t + 1), region.bottom);
    }
    if (activeHandle.indexOf("west") !== -1) {
      l = Math.max(Math.min(l + diffX, r - 1), region.left);
    }
    if (activeHandle.indexOf("north") !== -1) {
      t = Math.max(Math.min(t + diffY, b - 1), region.top);
    }

    var newBox/*:Object*/ = {
      width: r - l,
      height: b - t,
      x: l,
      y: t
    };
    return newBox;
  }/*

  protected static*/ function sqr$static(x/*:Number*/)/*:Number*/ {
    return x * x;
  }/*

  protected*/ function deactivateResizer()/*:Boolean*/ {
    if (this.theResizable) {
      this.theResizable.destroy();
      this.theResizable = null;

      if (this.handles$VjqM) {
        Ext.destroy(this.handles$VjqM);
        this.handles$VjqM = null;
      }

      return true;
    }
    return false;
  }/*

  internal*/ function getCropRatio()/*:Number*/ {
    // If ratio is NaN, it is ignored by Rectangle.constrain().
    return NaN;
  }/*

  internal*/ function getUndoText()/*:String*/ {
    return this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_history_crops_changed_overview');
  }/*

  private*/ function imageAreaChanged()/*:void*/ {
    var box/*:Object*/ = this.getEl().getBox(false, true);
    // Sometimes setActiveTab causes a resize event where all values of el.box are still set to 0
    // (maybe due to a timing issue). The 0 values are used to recalculate the transformation Strings of all(!!!) crops
    // that are also set to a size of 0 then.
    // The check is a workaround. Someone may find a better solution here.
    if (box.width === 0 || box.height === 0) {
      return;
    }
    var imageEditorStageBounds/*:Rectangle*/ = AS3.getBindable(this,"imageEditorStageBoundsValueExpression").getValue();
    if (imageEditorStageBounds && imageEditorStageBounds.hasAllValues()) {
      var variantImageBounds/*:Rectangle*/ = ImageAreaBase.adjustRegion(imageEditorStageBounds,
              AS3.getBindable(this,"boxedImageDimensionsValueExpression").getValue(),
              this.getVariantBoxedImageDimensionsValueExpression().getValue());
      var movedAndResized/*:Rectangle*/ = com.coremedia.cms.studio.imageeditor.model.Rectangle.fromBox(box).move(
              imageEditorStageBounds.x - variantImageBounds.x,
              imageEditorStageBounds.y - variantImageBounds.y);
      var transformed/*:Rectangle*/ = movedAndResized.scale(1 / variantImageBounds.width, 1 / variantImageBounds.height);
      var newImageAreaBounds/*:Rectangle*/ = transformed.constrain(this.getCropRatio());

      var boundsValueExpression/*:ValueExpression*/ = this.getBoundsValueExpression();
      var imageAreaBounds/*:Rectangle*/ = boundsValueExpression.getValue();
      if (! !imageAreaBounds && !imageAreaBounds.equals(newImageAreaBounds)) {
        AS3.getBindable(this,"undoHistory").pushUndoableCommand(this.getUndoText());
        // Store the new imageAreaBounds. UI is updated eventually.
        boundsValueExpression.setValue(newImageAreaBounds);
      } else {
        // No change to the actual imageAreaBounds, but the component might have ended in
        // an improperly constrained position. Update the UI to reflect the
        // old state.
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"updateImageAreaBounds"));
      }
    }
  }/*

  protected*/ function computeAriaLabel(config/*:ImageArea*/)/*:String*/ {
    var ariaLabelSuffix/*:String*/ = "";

    if (AS3.getBindable(config,"name")) {
      ariaLabelSuffix = AS3.getBindable(config,"name");
    } else if (AS3.getBindable(config,"variant")) {
      ariaLabelSuffix = AS3.getBindable(config,"variant").widthRatio + ' ' + AS3.getBindable(config,"variant").heightRatio;
    }

    return this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_labels_imageArea_ariaLabel') + ' ' + ariaLabelSuffix;
  }/*

  /**
   * May be this (non-enlarged case, this == imageEditorStage)
   * <pre>
   *  -this-
   * |      |
   * |      |
   *  ------
   * </pre>
   * or that (enlarged case, this != imageEditorStage)
   * <pre>
   *  -stage----
   * |  -that-  |
   * | |      | |
   * | |      | |
   * |  ------  |
   *  ----------
   * </pre>
   *
   * @return Rectangle
   * /
  internal*/ function getAdjustedImageBounds()/*:Rectangle*/ {
    var imageEditorStageBounds/*:Rectangle*/ = AS3.getBindable(this,"imageEditorStageBoundsValueExpression").getValue();
    // maximal
    var boxedImageBounds/*:Rectangle*/ = AS3.getBindable(this,"boxedImageDimensionsValueExpression").getValue();
    // image
    var variantImageBounds/*:Rectangle*/ = this.getVariantBoxedImageDimensionsValueExpression().getValue();
    if (!boxedImageBounds || !variantImageBounds) {
      return undefined;
    }

    var boxOffsetX/*:Number*/ = (boxedImageBounds.width - variantImageBounds.width) / 2;
    var boxOffsetY/*:Number*/ = (boxedImageBounds.height - variantImageBounds.height) / 2;

    var dx/*:Number*/ = boxOffsetX / boxedImageBounds.width * imageEditorStageBounds.width;
    var dy/*:Number*/ = boxOffsetY / boxedImageBounds.height * imageEditorStageBounds.height;

    var result/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(
            dx,
            dy,
            imageEditorStageBounds.width / boxedImageBounds.width * variantImageBounds.width,
            imageEditorStageBounds.height / boxedImageBounds.height * variantImageBounds.height
    ).round();
    return result;
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      outerImageArea: null,
      imageAreaBoundsValueExpression$VjqM: null,
      theResizable: null,
      handles$VjqM: null,
      start: null,
      activeHandle: null,
      showResizeHandles: true,
      constructor: ImageAreaBase$,
      super$VjqM: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      getImageEditorStage: getImageEditorStage,
      getBoundsValueExpression: getBoundsValueExpression,
      getPercentageRectangle: getPercentageRectangle,
      afterRender: afterRender,
      addAriaLabel$VjqM: addAriaLabel,
      setTabIndex: setTabIndex,
      setupFocusManagement$VjqM: setupFocusManagement,
      removeHoverCls: removeHoverCls,
      addHoverCls: addHoverCls,
      resizableMouseDown$VjqM: resizableMouseDown,
      resizableDrag$VjqM: resizableDrag,
      resizableDragEnd$VjqM: resizableDragEnd,
      onDestroy: onDestroy,
      activate: activate,
      deactivate: deactivate,
      getVariantBoxedImageDimensionsValueExpression: getVariantBoxedImageDimensionsValueExpression,
      computeRectangle: computeRectangle,
      updateImageAreaBounds: updateImageAreaBounds,
      isInsideBorder: isInsideBorder,
      readOnlyStateChanged$VjqM: readOnlyStateChanged,
      activateResizer$VjqM: activateResizer,
      updateDimensions: updateDimensions,
      makeNewBox: makeNewBox,
      deactivateResizer: deactivateResizer,
      getCropRatio: getCropRatio,
      getUndoText: getUndoText,
      imageAreaChanged$VjqM: imageAreaChanged,
      computeAriaLabel: computeAriaLabel,
      getAdjustedImageBounds: getAdjustedImageBounds,
      config: {
        variant: null,
        imageEditorViewModel: null,
        readOnlyValueExpression: null,
        undoHistory: null,
        imageSettingsValueExpression: null,
        imageDimensionsValueExpression: null,
        boxedImageDimensionsValueExpression: null,
        commonTransformationsValueExpression: null,
        imageEditorStageBoundsValueExpression: null,
        variantsValueExpression: null
      },
      statics: {
        OUTER_DIV_CLS: "image-area",
        INNER_DIV_CLS: "image-area-inner",
        SINGLE_CROP_CLS: "solo",
        HANDLE_CENTER: "center",
        adjustRegion: adjustRegion$static,
        sqr: sqr$static
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.dd.DragTracker",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationStateMixin",
        "com.coremedia.ui.util.AriaUtils",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ImageEditorStage",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle"
      ]
    };
});
