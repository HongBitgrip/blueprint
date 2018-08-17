Ext.define("com.coremedia.cms.studio.im.ImageMapEditorBase", function(ImageMapEditorBase) {/*package com.coremedia.cms.studio.im {

import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cap.content.impl.VersionHistoryImpl;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.dragdrop.DragInfo;
import com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor;
import com.coremedia.cms.editor.sdk.util.PropertyEditorUtil;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ShimmableUtil;
import com.kineticjs.Rect;
import com.kineticjs.Shape;

import ext.button.Button;
import ext.dom.Element;
import ext.form.field.Checkbox;
import ext.panel.Panel;
import ext.resizer.Resizer;
import ext.toolbar.Toolbar;

import joo.debug;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.im.ImageMap')]
public class ImageMapEditorBase extends Panel {

  protected static const IMAGE_ITEM_ID:String = "image";
  protected static const INFO_TEXT_ITEMID:String = "infoText";
  protected static const AREA_DETAILS_ITEMID:String = "areaDetails";
  protected static const DELETE_BUTTON_ITEMID:String = "deleteBtn";
  protected static const OPEN_BUTTON_ITEMID:String = "openInTab";
  protected static const FIT_TO_WIDTH_BUTTON_ITEMID:String = "fitToWidth";
  protected static const ZOOM_BUTTON_ITEM_ID:String = "zoomButton";
  protected static const TARGET_LINK_ITEM_ID:String = "targetLinkEditor";

  private static const*/var COORDS_SEPARATOR$static/*:String*/ = ",";/*

  private static const*/var INLINE_OVERLAY_THEMES$static/*:Array*/;/* =*/function INLINE_OVERLAY_THEMES$static_(){INLINE_OVERLAY_THEMES$static=( [
    ["dark-on-light", mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_theme_dark_light')],
    ["light-on-dark", mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_theme_light_dark')],
    ["dark", mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_theme_dark')],
    ["light", mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.studio.im.ImageMap', 'ImageMap_inline_overlay_theme_light')]
  ]);};/*

  /**
   * ValueExpression bound to the document being edited
   * /
  [Bindable]
  public var bindTo:ValueExpression;

  /**
   * ValueExpression bound to the blob for which maps are to be edited.
   * /
  [Bindable]
  public var imageBlobValueExpression:ValueExpression;

  private var structValueExpression:ValueExpression;
  private var bindToVersionValueExpression:ValueExpression;
  private var selectedAreaExpression:ValueExpression;
  private var selectedAreaInlineOverlayValueExpression:ValueExpression;
  private var selectedAreaContentExpression:ValueExpression;
  private var selectedAreaOrDummyValueExpression:ValueExpression;
  private var activeFormItemExpression:ValueExpression;
  private var imageDimensionsValueExpression:ValueExpression;
  private var zoomValueExpression:ValueExpression;
  private var selectedShapeTypeValueExpression:ValueExpression;
  private var readOnlyValueExpression:ValueExpression;

  private var bgImage:Image;
  private var areaIdSuffixCounter:uint;
  private var imageWidth:Number;
  private var imageHeight:Number;
  private var imageMapCanvasPanelBodyWidth:int;
  private var imageMapCanvasPanelBodyHeight:int;
  private var canvasMgr:ImageMapCanvasManager;
  private var deleteBtn:Button;
  private var openInTabBtn:Button;
  private var fitToWidthBtn:Button;
  private var canvasDropTarget:ImageMapCanvasDropTarget;
  private var initCanvasRequestedCounter:int;
  private var dummyConfigBean:Bean;
  private var imageMapResizable:Resizer;
  private var targetLinkEditor:SingleLinkEditor;
  private var canvasPanel:Panel;
  private var canvasPanelToolbar:Toolbar;
  private var canvasShim:Element;

  public*/ function ImageMapEditorBase$(config/*:ImageMapEditor = null*/) {if(arguments.length<=0)config=null;
    this.super$AoGC(config);

    this.imageDimensionsValueExpression$AoGC = AS3.getBindable(this,"imageBlobValueExpression").extendBy('metadata.imageDimensions');
    this.structValueExpression$AoGC = AS3.getBindable(this,"bindTo").extendBy('properties', AS3.getBindable(config,"structPropertyName"));

    this.areaIdSuffixCounter$AoGC = 0;

    this.canvasPanel$AoGC = (AS3.as(this.queryById(com.coremedia.cms.studio.im.ImageMapEditor.IMAGE_MAP_CANVAS_PANEL_ITEMID),  Ext.panel.Panel));
    this.canvasPanelToolbar$AoGC =AS3.as( this.canvasPanel$AoGC.getDockedItems("toolbar[dock=\"top\"]")[0],  Ext.toolbar.Toolbar);
    this.toggleShape(AS3.as(this.canvasPanelToolbar$AoGC.queryById(com.coremedia.cms.studio.im.ImageMapEditor.DRAW_RECT_BUTTON_ITEM_ID),  Ext.button.Button), true);

    this.bindToVersionValueExpression$AoGC = AS3.getBindable(this,"bindTo").extendBy('checkedInVersion.versionNumber');

    this.getActiveAreaPropertiesItemExpression().addChangeListener(AS3.bind(this,"updateLayout"));

    this.readOnlyValueExpression$AoGC = com.coremedia.cms.editor.sdk.util.PropertyEditorUtil.createReadOnlyValueExpression(AS3.getBindable(this,"bindTo"), AS3.getBindable(config,"forceReadOnlyValueExpression"));
    this.readOnlyValueExpression$AoGC.addChangeListener(AS3.bind(this,"onReadOnlyChange$AoGC"));
  }/*

  /**
   * In read-only case, clear selected shapes and activate the shim agent.
   * /
  private*/ function onReadOnlyChange()/*:void*/ {
    var readOnly/*:Boolean*/ = this.readOnlyValueExpression$AoGC.getValue();
    this.canvasMgr$AoGC && this.canvasMgr$AoGC.clearSelection();
    this.toggleShim(readOnly);
  }/*

  /**
   * Creates a (frontal) transparent shim agent for the frame.
   * @return {ext.dom.Element} The new shim element.
   * /
  private*/ function createShim()/*:Element*/ {
    if (!this.canvasPanel$AoGC.getEl()) {
      return null;
    }
    this.canvasShim$AoGC = com.coremedia.ui.util.ShimmableUtil.createShimForElement(this.canvasPanel$AoGC.getEl());

    this.fireEvent('shimCreated', this.canvasShim$AoGC);
  }/*

  /**
   * Toggles visibility of the (frontal) transparent shim agent for the frame.
   * @param {Boolean} show Optional True to activate the shim, false to hide the shim agent.
   * /
  public*/ function toggleShim(show/*:Boolean*/)/*:void*/ {
    if (!this.canvasShim$AoGC) {
      this.createShim$AoGC();
    }
    com.coremedia.ui.util.ShimmableUtil.toggleShim(this.canvasShim$AoGC, show, true);
  }/*

  private*/ function revertObserver()/*:void*/ {var this$=this;
    var newVersionNumber/*:int*/ = this.bindToVersionValueExpression$AoGC.getValue();
    AS3.cast(com.coremedia.cap.content.impl.VersionHistoryImpl,AS3.getBindable(this,"bindTo").extendBy('versionHistory').getValue()).invalidate(function (history/*:VersionHistoryImpl*/)/*:void*/ {
      var historyLength/*:int*/ = history.getItems().length;
      if ((newVersionNumber === historyLength)) {
        AS3.cast(com.coremedia.ui.data.RemoteBean,this$.structValueExpression$AoGC.getValue()).invalidate(AS3.bind(this$,"initCanvas"));
      }
    });
  }/*

  protected*/ function updateTheme(checkBox/*:Checkbox*/)/*:void*/ {
    if (checkBox.getValue() && !this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_INLINE_OVERLAY_THEME).getValue()) {
      this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_INLINE_OVERLAY_THEME).setValue(INLINE_OVERLAY_THEMES$static[0][0]);
    }
  }/*

  public native function get areaContentType():String;

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.panel.Panel.prototype.afterRender.call(this);

    this.canvasPanel$AoGC =AS3.as( this.queryById(com.coremedia.cms.studio.im.ImageMapEditor.IMAGE_MAP_CANVAS_PANEL_ITEMID),  Ext.panel.Panel);
    this.targetLinkEditor$AoGC =AS3.as( this.queryById(ImageMapEditorBase.TARGET_LINK_ITEM_ID),  com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor);
    this.mon(this.canvasPanel$AoGC, "resize", function ()/*:void*/ {
      if (this$.canvasPanel$AoGC.body && this$.canvasPanel$AoGC.body.getWidth() > 0) {
        this$.imageMapCanvasPanelBodyWidth$AoGC = this$.canvasPanel$AoGC.body.getWidth();
        this$.imageMapCanvasPanelBodyHeight$AoGC = this$.canvasPanel$AoGC.body.getHeight();
      }
      this$.fitToWidth();
    });

    this.deleteBtn$AoGC =AS3.as( this.canvasPanelToolbar$AoGC.queryById(ImageMapEditorBase.DELETE_BUTTON_ITEMID),  Ext.button.Button);
    this.openInTabBtn$AoGC =AS3.as( this.canvasPanelToolbar$AoGC.queryById(ImageMapEditorBase.OPEN_BUTTON_ITEMID),  Ext.button.Button);
    this.fitToWidthBtn$AoGC =AS3.as( this.canvasPanelToolbar$AoGC.queryById(ImageMapEditorBase.FIT_TO_WIDTH_BUTTON_ITEMID),  Ext.button.Button);

    // Insert canvas dom element
    this.bgImage$AoGC =AS3.as( this.queryById(ImageMapEditorBase.IMAGE_ITEM_ID),  com.coremedia.ui.components.Image);
    if (this.bgImage$AoGC.rendered) {
      this.initCanvas();
    } else {
      this.mon(this.bgImage$AoGC, 'afterrender',AS3.bind( this,"initCanvas"), null, {single:true});
    }
    AS3.getBindable(this,"imageBlobValueExpression").extendBy("uri").addChangeListener(AS3.bind(this,"initCanvas"));

    this.bindToVersionValueExpression$AoGC.addChangeListener(AS3.bind(this,"revertObserver$AoGC"));

    this.onReadOnlyChange$AoGC();
  }/*

  /**
   * Initializes the canvas by destroying the old canvas manager and creating a new one.
   * /
  public*/ function initCanvas()/*:void*/ {var this$=this;
    var initCanvasRequestNumber/*:int*/ = ++this.initCanvasRequestedCounter$AoGC;
    if (this.canvasMgr$AoGC) {
      // Need to destroy the old manager instance first
      this.canvasMgr$AoGC.destroy();
    }

    var blobData/*:Blob*/ = AS3.getBindable(this,"imageBlobValueExpression").getValue();
    if (blobData) {
      this.imageDimensionsValueExpression$AoGC.loadValue(function (imageDimensions/*:Object*/)/*:void*/ {
        if (initCanvasRequestNumber === this$.initCanvasRequestedCounter$AoGC) {
          this$.imageWidth$AoGC = imageDimensions['width'];
          this$.imageHeight$AoGC = imageDimensions['height'];

          if (this$.imageHeight$AoGC > 0 && this$.imageWidth$AoGC > 0) {
            this$.initCanvasManager$AoGC();
            this$.initMapAreas$AoGC();

            // in case of "revert", restore the canvas with the same scale and zoom values
            var scale/*:Number*/ = this$.getZoomValueExpression().getValue();

            if (scale > 0) {
              this$.getZoomValueExpression().setValue(scale);
              this$.canvasMgr$AoGC.setScale(scale);
            }
            this$.fitToWidth();
          }
        }
      });
    }
  }/*

  private*/ function initCanvasManager()/*:void*/ {
    //trace("CREATE CANVAS MANAGER: width=" + imageWidth + ", height=" + imageHeight);
    this.canvasMgr$AoGC = new com.coremedia.cms.studio.im.ImageMapCanvasManager(this.bgImage$AoGC, this.imageWidth$AoGC, this.imageHeight$AoGC, this.getSelectedShapeTypeValueExpression());
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.INITIAL_SHAPE_DRAWN,AS3.bind( this,"onInitialShapeDrawn$AoGC"));
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.SHAPE_REMOVE,AS3.bind( this,"onShapeRemove$AoGC"));
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.SHAPE_MOVE,AS3.bind( this,"onShapeMove$AoGC"));
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.SHAPE_RESIZE,AS3.bind( this,"onShapeResize$AoGC"));
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.SHAPE_SELECT,AS3.bind( this,"onShapeSelect$AoGC"));
    this.mon(this.canvasMgr$AoGC, com.coremedia.cms.studio.im.ImageMapCanvasManager.SHAPE_DOUBLE_CLICK,AS3.bind( this,"onShapeDoubleClick$AoGC"));
    this.registerDropTarget();
  }/*

  /**
   * Initialize the image map areas.
   * /
  private*/ function initMapAreas()/*:void*/ {var this$=this;
    var currentIdSuffixes/*:Array*/ = [];

    this.structValueExpression$AoGC.loadValue(function (struct/*:StructRemoteBeanImpl*/)/*:void*/ {
      if (struct) {
        struct.removeValueChangeListener(AS3.bind(this$,"imageMapChangeHandler$AoGC"));
        struct.addValueChangeListener(AS3.bind(this$,"imageMapChangeHandler$AoGC"));
      }

      struct.load(function()/*:void*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var imageMapAreas/*:Array*/ = struct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME);
        if (imageMapAreas) {
          imageMapAreas.forEach(function (areaStruct/*:Struct*/)/*:void*/ {
            this$.canvasMgr$AoGC.addArea(areaStruct.toObject ? areaStruct.toObject() : areaStruct);
            currentIdSuffixes.push(parseInt(areaStruct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID).split(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID_PREFIX)[1]));
          });
        }
        // Use re-route via .apply() to pass currentIdSuffixes array as 'arguments' array for .max()
        this$.areaIdSuffixCounter$AoGC = currentIdSuffixes.length > 0 ? Math.max.apply(null, currentIdSuffixes) + 1 : 0;
      });
    });

    // init with no selection
    this.canvasMgr$AoGC.clearSelection();
  }/*

  private*/ function imageMapChangeHandler()/*:void*/ {
    var readOnly/*:Boolean*/ = this.readOnlyValueExpression$AoGC.getValue();
    if (readOnly) {
      // only refresh for other users with read only view
      this.initCanvas();
    }
  }/*

  /**
   * Add a new rectangle shape area to the image map.
   * /
  public*/ function addRectArea(coords/*:String = null*/)/*:void*/ {if(arguments.length<=0)coords=null;
    var coordsString/*:String*/ = (coords && (AS3.is(coords,  String))) ? coords : "10,10,80,80";
    var areaId/*:String*/ = com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID_PREFIX + this.areaIdSuffixCounter$AoGC++;
    var area/*:Object*/ = ImageMapEditorBase.createAreaObject(areaId, coordsString);
    var bean/*:Bean*/ = this.getModifiableStruct();

    if (bean) {
      bean.addAt(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME, 0, area);
      // Attach area to canvas
      this.canvasMgr$AoGC.addArea(area);
    }
  }/*

  /**
   * Returns a ValueExpression that holds the currently selected imagemap area.
   * @return
   * /
  public*/ function getSelectedAreaExpression()/*:ValueExpression*/ {
    if (!this.selectedAreaExpression$AoGC) {
      this.selectedAreaExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
      this.selectedAreaExpression$AoGC.addChangeListener(AS3.bind(this,"onAreaSelectionChange$AoGC"));
    }
    return this.selectedAreaExpression$AoGC;
  }/*

  protected*/ function getSelectedAreaInlineOverlayValueExpression()/*:ValueExpression*/ {
    if (!this.selectedAreaInlineOverlayValueExpression$AoGC) {
      this.selectedAreaInlineOverlayValueExpression$AoGC = this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_DISPLAY_AS_INLINE_OVERLAY);
    }
    return this.selectedAreaInlineOverlayValueExpression$AoGC;
  }/*

  public*/ function getSelectedAreaContentExpression()/*:ValueExpression*/ {
    if (!this.selectedAreaContentExpression$AoGC) {
      this.selectedAreaContentExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.selectedAreaContentExpression$AoGC;
  }/*

  /**
   * Update the selected content.
   * /
  private*/ function onAreaSelectionChange(expr/*:ValueExpression*/)/*:void*/ {
    var selectedAreaStruct/*:Struct*/ = expr.getValue();

    // Remove the listener
    this.getSelectedAreaContentExpression().removeChangeListener(AS3.bind(this,"onLinkedContentChange$AoGC"));

    if (selectedAreaStruct && selectedAreaStruct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT)) {
      this.getSelectedAreaContentExpression().setValue([selectedAreaStruct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT)]);
      this.openInTabBtn$AoGC.setDisabled(false);
      this.hideTargetLinkError$AoGC();
    } else {
      this.getSelectedAreaContentExpression().setValue([]);
      this.openInTabBtn$AoGC.setDisabled(true);
      this.showTargetLinkError$AoGC();
    }

    this.deleteBtn$AoGC.setDisabled(selectedAreaStruct == null);

    // Re-add the listener
    this.getSelectedAreaContentExpression().addChangeListener(AS3.bind(this,"onLinkedContentChange$AoGC"));
  }/*

  /**
   * Handler function that is called when the linked content of an imagemap area has changed.
   * @param expr Expression that holds the new value
   * /
  private*/ function onLinkedContentChange(expr/*:ValueExpression*/)/*:void*/ {
    var selectedAreaStruct/*:Struct*/ = this.getSelectedAreaExpression().getValue();
    if (!selectedAreaStruct) {
      return;
    }

    var values/*:Array*/ = expr.getValue();
    var areaId/*:String*/ = selectedAreaStruct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID);
    if (values && values.length > 0) {
      // Update Content
      this.doLinkedContentChanged$AoGC((AS3.as(values[0],  com.coremedia.cap.content.Content)), areaId);
    } else {
      selectedAreaStruct.getType().removeProperty(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT);
      this.getSelectedAreaExpression().setValue(selectedAreaStruct);
      this.canvasMgr$AoGC.setShapeInvalid(areaId);
      this.openInTabBtn$AoGC.setDisabled(true);
      this.showTargetLinkError$AoGC();
    }
  }/*

  private*/ function doLinkedContentChanged(content/*:Content*/, areaId/*:String*/)/*:void*/ {var this$=this;
    if (content) {
      this.getSelectedAreaExpression().extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT).setValue(content);
      content.load(function ()/*:void*/ {
        if (content && content.isInProduction()) {
          this$.canvasMgr$AoGC.setShapeValid(areaId);
          this$.openInTabBtn$AoGC.setDisabled(false);
          this$.hideTargetLinkError$AoGC();
        }
        else {
          this$.showTargetLinkError$AoGC();
        }
      });
    }
  }/*

  private*/ function hideTargetLinkError()/*:void*/ {
    AS3.setBindable(this.targetLinkEditor$AoGC,"validationState" , undefined);
  }/*

  private*/ function showTargetLinkError()/*:void*/ {
    AS3.setBindable(this.targetLinkEditor$AoGC,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
  }/*

  /**
   * Opens the currently selected area link in a new tab.
   * /
  protected*/ function openSelectedAreaLink()/*:void*/ {
    var selectedContent/*:Content*/ = this.getSelectedAreaContentExpression().getValue();
    if (selectedContent) {
      new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{
        contentValueExpression: this.getSelectedAreaContentExpression()
      })).execute();
    }
  }/*

  /**
   * Returns a ValueExpression that holds the currently active properties area view itemId.
   * @return
   * /
  protected*/ function getActiveAreaPropertiesItemExpression()/*:ValueExpression*/ {
    if (!this.activeFormItemExpression$AoGC) {
      this.activeFormItemExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(ImageMapEditorBase.INFO_TEXT_ITEMID);
    }
    return this.activeFormItemExpression$AoGC;
  }/*

  /**
   * Removes the currently selected area from the canvas.
   * /
  protected*/ function removeSelectedArea()/*:void*/ {
    this.canvasMgr$AoGC.removeSelectedShape();
  }/*

  private*/ function onInitialShapeDrawn(shape/*:String, ...args*/)/*:void*/ {var args=Array.prototype.slice.call(arguments,1);
    switch (shape) {
      case com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT:
        this.addRectArea(args[0]);
    }
  }/*

  /**
   * Handler function that is called when a shape has been removed from the canvas.
   * @param areaId Id of the removed shape
   * /
  private*/ function onShapeRemove(areaId/*:String*/)/*:void*/ {
    var struct/*:Bean*/ = this.getModifiableStruct();
    var imageMapList/*:Array*/ = struct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME);

    var removed/*:Boolean*/ = imageMapList.every(function (area/*:Bean*/, index/*:Number*/)/*:Boolean*/ {
      if (area.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID) === areaId) {
        struct.removeAt(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME, index);
        return false;
      }
      return true;
    });
    if (!removed && joo.debug) {
      AS3.trace("[WARN] area ", areaId, "was not found in", struct.toObject());
    }

    this.getSelectedAreaExpression().setValue(null);
  }/*

  protected*/ function getSelectedAreaOrDummyValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.selectedAreaOrDummyValueExpression$AoGC) {
      this.selectedAreaOrDummyValueExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Bean*/ {
        if (this$.getSelectedAreaExpression().getValue()) {
          return this$.getSelectedAreaExpression().getValue();
        } else {
          return this$.getDummyOverlayBean$AoGC();
        }
      });
    }
    return this.selectedAreaOrDummyValueExpression$AoGC;
  }/*

  private*/ function getDummyOverlayBean()/*:Bean*/ {
    if (!this.dummyConfigBean$AoGC) {
      this.dummyConfigBean$AoGC = com.coremedia.ui.data.beanFactory.createLocalBean({ displayAsInlineOverlay: false });
    }
    return this.dummyConfigBean$AoGC;
  }/*

  // TODO check move resize stuff
  /**
   * Handler function that is called when a shape has been moved.
   * @param areaId Id of the resized shape
   * @param shapeType Can be one of ImageMapUtil#SHAPE_RECT
   * @param offsetX Number of pixels the shape has been moved on the x-axis from its old position
   * @param offsetY Number of pixels the shape has been moved on the y-axis from its old position
   * @param shape The shape object that has been resized
   * /
  private*/ function onShapeMove(areaId/*:String*/, shapeType/*:String*/, offsetX/*:Number*/, offsetY/*:Number*/, shape/*:Shape*/)/*:void*/ {
    if (com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT === shapeType) {
      var rect/*:Rect*/ =AS3.as( shape,  Kinetic.Rect);

      var newCoords/*:Array*/ = [];
      newCoords[0] = offsetX;
      newCoords[1] = offsetY;
      newCoords[2] = offsetX + rect.getWidth();
      newCoords[3] = offsetY + rect.getHeight();

      var newProps/*:Object*/ = {};
      newProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_COORDS] = newCoords.join(COORDS_SEPARATOR$static);

      this.saveAreaProperties(areaId, newProps);
    }
  }/*

  /**
   * Handler function that is called when a shape has been resized.
   * @param areaId Id of the resized shape
   * @param shapeType Can be one of ImageMapUtiln#SHAPE_RECT
   * @param shape The shape object that has been resized
   * /
  private*/ function onShapeResize(areaId/*:String*/, shapeType/*:String*/, shape/*:Shape*/)/*:void*/ {
    if (com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT === shapeType) {
      var rect/*:Rect*/ =AS3.as( shape,  Kinetic.Rect);

      var newCoords/*:Array*/ = [];
      newCoords[0] = rect.getX();
      newCoords[1] = rect.getY();
      newCoords[2] = rect.getX() + rect.getWidth();
      newCoords[3] = rect.getY() + rect.getHeight();

      var newProps/*:Object*/ = {};
      newProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_COORDS] = newCoords.join(COORDS_SEPARATOR$static);

      this.saveAreaProperties(areaId, newProps);
    }
  }/*

  /**
   * Handler function that is called when shape selection has changed.
   * @param areaId Selected shape, or null if no shape is selected
   * /
  private*/ function onShapeSelect(areaId/*:String*/)/*:void*/ {var this$=this;
    if (areaId) {
      this.getAreaList().forEach(function (area/*:**/)/*:void*/ {
        // convert area to bean if it is a plain Object
        area = (AS3.is(area,  com.coremedia.ui.data.Bean) ? area : com.coremedia.ui.data.beanFactory.createLocalBean(area));
        if (area.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID) === areaId) {
          this$.getSelectedAreaExpression().setValue(area);
          // Cannot be used due to a bug in the BindListPlugin
          this$.getActiveAreaPropertiesItemExpression().setValue(ImageMapEditorBase.AREA_DETAILS_ITEMID);
        }
      });
    } else {
      this.getSelectedAreaExpression().setValue(null);
      // Cannot be used due to a bug in the BindListPlugin
      this.getActiveAreaPropertiesItemExpression().setValue(ImageMapEditorBase.INFO_TEXT_ITEMID);
    }
  }/*

  /**
   * Handler function that is called when shape selection is double clicked.
   * /
  private*/ function onShapeDoubleClick()/*:void*/ {
    this.openSelectedAreaLink();
  }/*

  /**
   * Returns a reference to the canvas manager.
   * @return
   * /
  public*/ function getCanvasManager()/*:ImageMapCanvasManager*/ {
    return this.canvasMgr$AoGC;
  }/*

  /**
   * Registers the drop target and handler.
   * /
  protected*/ function registerDropTarget()/*:void*/ {
    this.canvasDropTarget$AoGC = new com.coremedia.cms.studio.im.ImageMapCanvasDropTarget(this,AS3.bind( this,"onCanvasDrop$AoGC"), this.areaContentType);

  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getActiveAreaPropertiesItemExpression().removeChangeListener(AS3.bind(this,"updateLayout"));

    if (this.canvasDropTarget$AoGC) {
      this.canvasDropTarget$AoGC.unreg();
    }
    Ext.panel.Panel.prototype.onDestroy.call(this);
  }/*

  /**
   * Handler function that is called when content has been dropped on an imagemap area.
   * @param shape The shape that has received the drop event
   * @param dragInfo DragInfo that holds the content that has been dropped and other metadata
   * /
  private*/ function onCanvasDrop(shape/*:Shape*/, dragInfo/*:DragInfo*/)/*:void*/ {var this$=this;
    var areaId/*:String*/ = shape.getId();
    this.getAreaList().forEach(function (area/*:**/)/*:void*/ {
      if (AS3.is(area,  com.coremedia.ui.data.Bean) && area.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID) === areaId) {
        var draggedItems/*:Array*/ = dragInfo.getContents();
        var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(draggedItems);
        // make sure that no items were filtered and there is exactly one
        if (draggedItems.length === contents.length && contents.length === 1) {
          var content/*:Content*/ = contents[0];
          area.set(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT, content);
          this$.canvasMgr$AoGC.setShapeValid(shape.getId());
          this$.canvasMgr$AoGC.selectShapeById(shape.getId());
        }
      }
    });
  }/*

  protected*/ function getZoomValueExpression()/*:ValueExpression*/ {
    if (!this.zoomValueExpression$AoGC) {
      this.zoomValueExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(1);
      this.zoomValueExpression$AoGC.addChangeListener(AS3.bind(this,"updateZoom"));
    }
    return this.zoomValueExpression$AoGC;
  }/*

  protected*/ function toggleShape(btn/*:Button*/, pressed/*:Boolean*/)/*:void*/ {
    if (pressed) {
      this.getSelectedShapeTypeValueExpression().setValue(btn.getItemId());
    } else {
      this.getSelectedShapeTypeValueExpression().setValue(undefined);
    }
  }/*

  protected*/ function getSelectedShapeTypeValueExpression()/*:ValueExpression*/ {
    if (!this.selectedShapeTypeValueExpression$AoGC) {
      this.selectedShapeTypeValueExpression$AoGC = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.selectedShapeTypeValueExpression$AoGC;
  }/*

  protected*/ function updateZoom()/*:void*/ {
    // The zoom slider only operates with whole percentage values. The
    // canvas scale might actually be more precise (after fit to width was toggled on).
    // Thus we compare a bit leniently here.

    var newZoomValue/*:Number*/ = isNaN(this.getZoomValueExpression().getValue()) ? 1 : this.getZoomValueExpression().getValue();
    newZoomValue = Math.min(1, parseFloat(newZoomValue.toFixed(2)));

    // If the value of the zoomValueExpression differs from the canvas scale by more
    // than 0.01, then set canvas scale to the new value. Otherwise, the zoomValueExpression
    // has likely been changed by rounding the value that was actually set (see ZoomButton).
    if (this.canvasMgr$AoGC
            && Math.abs(newZoomValue - parseFloat(this.canvasMgr$AoGC.getScale().toFixed(2))) > 0.01) {
      this.canvasMgr$AoGC.setScale(newZoomValue);
    }

    // If the value of the zoomValueExpression differs from the result of getFitToWidthScale()
    // by more than 0.01, then the zoom slider was most likely touched by the user. Thus,
    // un-toggle the fitToWidthBtn. An exception is when the zoomValueExpression value
    // is 1 and lower than the getFitToWidthScale() value. In this case, the value was
    // constrained to 100%. In this case, we leave the fitToWidthBtn toggled on.
    if (newZoomValue < 1
            && Math.abs(newZoomValue - parseFloat(this.getFitToWidthScale$AoGC().toFixed(2))) > 0.01) {
      this.fitToWidthBtn$AoGC.toggle(false);
    }
  }/*

  protected*/ function fitToWidth()/*:void*/ {var this$=this;
    if (this.fitToWidthBtn$AoGC.pressed) {
      var scale/*:Number*/ = Math.min(1, this.getFitToWidthScale$AoGC());
      this.canvasMgr$AoGC && this.canvasMgr$AoGC.setScale(scale);
      this.getZoomValueExpression().setValue(scale);

      // help the silly browser
      this.canvasPanel$AoGC.body.dom.style["overflowX"] = "hidden";
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        ! !this$.canvasPanel$AoGC.body && ! !this$.canvasPanel$AoGC.body.dom && (this$.canvasPanel$AoGC.body.dom.style["overflowX"] = "auto");
      });
    }
  }/*

  private*/ function getFitToWidthScale()/*:Number*/ {
    var canvasWidth/*:int*/ = this.canvasPanel$AoGC.body.getWidth();
    var canvasHeight/*:int*/ = this.canvasPanel$AoGC.body.getHeight();
    if (!canvasWidth) {
      // canvas not visible, use last cached width and height
      canvasWidth = this.imageMapCanvasPanelBodyWidth$AoGC;
      canvasHeight = this.imageMapCanvasPanelBodyHeight$AoGC;
    }
    canvasWidth = canvasWidth - 2;   // border
    canvasHeight = canvasHeight - 2; // border

    var scale/*:Number*/ = parseFloat((canvasWidth / this.imageWidth$AoGC).toFixed(3));

    // iteratively correct the scale until it really fits
    var verticalScrollbarVisible/*:Boolean*/ = this.imageHeight$AoGC * scale > canvasHeight;
    while (this.imageWidth$AoGC * scale > (canvasWidth - (verticalScrollbarVisible ? 18 : 0))) { // 18 as a guess for max scroll bar width across browsers and OSs
      scale = scale - 0.001;
      verticalScrollbarVisible = this.imageHeight$AoGC * scale > canvasHeight;
    }

    scale = isNaN(scale) ? 1 : scale;
    return scale;
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    var struct/*:**/ = this.structValueExpression$AoGC.getValue();
    if (AS3.is(struct,  com.coremedia.cap.struct.Struct)) {
      AS3.cast(com.coremedia.cap.struct.Struct,struct).removeValueChangeListener(AS3.bind(this,"imageMapChangeHandler$AoGC"));
    }

    this.bindToVersionValueExpression$AoGC.removeChangeListener(AS3.bind(this,"revertObserver$AoGC"));

    AS3.getBindable(this,"imageBlobValueExpression").removeChangeListener(AS3.bind(this,"initCanvas"));
    this.getSelectedAreaExpression().removeChangeListener(AS3.bind(this,"onAreaSelectionChange$AoGC"));
    this.getSelectedAreaContentExpression().removeChangeListener(AS3.bind(this,"onLinkedContentChange$AoGC"));
    this.getZoomValueExpression().removeChangeListener(AS3.bind(this,"updateZoom"));

    this.canvasMgr$AoGC && this.canvasMgr$AoGC.destroy();

    this.readOnlyValueExpression$AoGC.removeChangeListener(AS3.bind(this,"onReadOnlyChange$AoGC"));
    this.canvasShim$AoGC && this.canvasShim$AoGC.destroy();

    this.imageMapResizable$AoGC && this.imageMapResizable$AoGC.destroy();

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

  /*
   * Return non null list of areas
   * /
  internal*/ function getAreaList()/*:Array*/ {
    return this.structValueExpression$AoGC.extendBy(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME).getValue() || [];
  }/*

  internal*/ function getModifiableStruct()/*:Bean*/ {
    var value/*:Bean*/ = this.structValueExpression$AoGC.getValue();
    if (AS3.is(value,  com.coremedia.cap.struct.Struct)) {
      var structType/*:StructType*/ = AS3.cast(com.coremedia.cap.struct.Struct,value).getType();
      if (!structType.getDescriptor(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME)) {
        structType.addStructListProperty(com.coremedia.cms.studio.im.ImageMapEditorConstants.IMAGEMAP_STRUCT_NAME);
      }
    }
    return value;
  }/*

  /**
   * Saves the given properties for the area of the given id in the image map Struct.
   *
   * The given structValueExpression points to the 'localSettings' Struct of the
   * ImageMap document.
   *
   * @param areaId
   * @param properties
   * /
  internal*/ function saveAreaProperties(areaId/*:String*/, properties/*:Object*/)/*:void*/ {
    this.getAreaList().forEach(function (areaStruct/*:Bean*/)/*:void*/ {
      if (areaStruct.get(com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID) === areaId) {
        areaStruct.updateProperties(properties);
      }
    });
  }/*

  internal static*/ function createAreaObject$static(areaId/*:String*/, coords/*:String*/)/*:Object*/ {
    var areaProps/*:Object*/ = {};

    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID] = areaId;
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_COORDS] = coords;
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ALT] = "";
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ROTATION] = "";
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE] = com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT;
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_TARGET] = com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_TARGET_BLANK;
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_DISPLAY_AS_INLINE_OVERLAY] = false;
    areaProps[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_INLINE_OVERLAY_THEME] = INLINE_OVERLAY_THEMES$static[0][0];

    return areaProps;
  }/*

  protected static*/ function getComboStore$static()/*:Array*/ {
    return INLINE_OVERLAY_THEMES$static;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      structValueExpression$AoGC: null,
      bindToVersionValueExpression$AoGC: null,
      selectedAreaExpression$AoGC: null,
      selectedAreaInlineOverlayValueExpression$AoGC: null,
      selectedAreaContentExpression$AoGC: null,
      selectedAreaOrDummyValueExpression$AoGC: null,
      activeFormItemExpression$AoGC: null,
      imageDimensionsValueExpression$AoGC: null,
      zoomValueExpression$AoGC: null,
      selectedShapeTypeValueExpression$AoGC: null,
      readOnlyValueExpression$AoGC: null,
      bgImage$AoGC: null,
      areaIdSuffixCounter$AoGC: 0,
      imageWidth$AoGC: NaN,
      imageHeight$AoGC: NaN,
      imageMapCanvasPanelBodyWidth$AoGC: 0,
      imageMapCanvasPanelBodyHeight$AoGC: 0,
      canvasMgr$AoGC: null,
      deleteBtn$AoGC: null,
      openInTabBtn$AoGC: null,
      fitToWidthBtn$AoGC: null,
      canvasDropTarget$AoGC: null,
      initCanvasRequestedCounter$AoGC: 0,
      dummyConfigBean$AoGC: null,
      imageMapResizable$AoGC: null,
      targetLinkEditor$AoGC: null,
      canvasPanel$AoGC: null,
      canvasPanelToolbar$AoGC: null,
      canvasShim$AoGC: null,
      constructor: ImageMapEditorBase$,
      super$AoGC: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onReadOnlyChange$AoGC: onReadOnlyChange,
      createShim$AoGC: createShim,
      toggleShim: toggleShim,
      revertObserver$AoGC: revertObserver,
      updateTheme: updateTheme,
      afterRender: afterRender,
      initCanvas: initCanvas,
      initCanvasManager$AoGC: initCanvasManager,
      initMapAreas$AoGC: initMapAreas,
      imageMapChangeHandler$AoGC: imageMapChangeHandler,
      addRectArea: addRectArea,
      getSelectedAreaExpression: getSelectedAreaExpression,
      getSelectedAreaInlineOverlayValueExpression: getSelectedAreaInlineOverlayValueExpression,
      getSelectedAreaContentExpression: getSelectedAreaContentExpression,
      onAreaSelectionChange$AoGC: onAreaSelectionChange,
      onLinkedContentChange$AoGC: onLinkedContentChange,
      doLinkedContentChanged$AoGC: doLinkedContentChanged,
      hideTargetLinkError$AoGC: hideTargetLinkError,
      showTargetLinkError$AoGC: showTargetLinkError,
      openSelectedAreaLink: openSelectedAreaLink,
      getActiveAreaPropertiesItemExpression: getActiveAreaPropertiesItemExpression,
      removeSelectedArea: removeSelectedArea,
      onInitialShapeDrawn$AoGC: onInitialShapeDrawn,
      onShapeRemove$AoGC: onShapeRemove,
      getSelectedAreaOrDummyValueExpression: getSelectedAreaOrDummyValueExpression,
      getDummyOverlayBean$AoGC: getDummyOverlayBean,
      onShapeMove$AoGC: onShapeMove,
      onShapeResize$AoGC: onShapeResize,
      onShapeSelect$AoGC: onShapeSelect,
      onShapeDoubleClick$AoGC: onShapeDoubleClick,
      getCanvasManager: getCanvasManager,
      registerDropTarget: registerDropTarget,
      onDestroy: onDestroy,
      onCanvasDrop$AoGC: onCanvasDrop,
      getZoomValueExpression: getZoomValueExpression,
      toggleShape: toggleShape,
      getSelectedShapeTypeValueExpression: getSelectedShapeTypeValueExpression,
      updateZoom: updateZoom,
      fitToWidth: fitToWidth,
      getFitToWidthScale$AoGC: getFitToWidthScale,
      beforeDestroy: beforeDestroy,
      getAreaList: getAreaList,
      getModifiableStruct: getModifiableStruct,
      saveAreaProperties: saveAreaProperties,
      config: {
        bindTo: null,
        imageBlobValueExpression: null
      },
      statics: {
        IMAGE_ITEM_ID: "image",
        INFO_TEXT_ITEMID: "infoText",
        AREA_DETAILS_ITEMID: "areaDetails",
        DELETE_BUTTON_ITEMID: "deleteBtn",
        OPEN_BUTTON_ITEMID: "openInTab",
        FIT_TO_WIDTH_BUTTON_ITEMID: "fitToWidth",
        ZOOM_BUTTON_ITEM_ID: "zoomButton",
        TARGET_LINK_ITEM_ID: "targetLinkEditor",
        INLINE_OVERLAY_THEMES: undefined,
        createAreaObject: createAreaObject$static,
        getComboStore: getComboStore$static,
        __initStatics__: function() {
          INLINE_OVERLAY_THEMES$static_();
        }
      },
      requires: [
        "AS3.trace",
        "Ext.button.Button",
        "Ext.panel.Panel",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.cap.content.impl.VersionHistoryImpl",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.premular.fields.SingleLinkEditor",
        "com.coremedia.cms.editor.sdk.util.PropertyEditorUtil",
        "com.coremedia.cms.studio.im.ImageMap_properties",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ShimmableUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.studio.im.ImageMapCanvasDropTarget",
        "com.coremedia.cms.studio.im.ImageMapCanvasManager",
        "com.coremedia.cms.studio.im.ImageMapEditor",
        "com.coremedia.cms.studio.im.ImageMapEditorConstants"
      ]
    };
});
