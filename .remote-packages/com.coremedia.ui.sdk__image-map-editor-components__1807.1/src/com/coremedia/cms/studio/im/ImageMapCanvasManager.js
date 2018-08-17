Ext.define("com.coremedia.cms.studio.im.ImageMapCanvasManager", function(ImageMapCanvasManager) {/*package com.coremedia.cms.studio.im {
import com.coremedia.ui.components.Image;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.MutableMousedownListener;
import com.kineticjs.Circle;
import com.kineticjs.Collection;
import com.kineticjs.Container;
import com.kineticjs.Group;
import com.kineticjs.Image;
import com.kineticjs.Layer;
import com.kineticjs.Node;
import com.kineticjs.Rect;
import com.kineticjs.Shape;
import com.kineticjs.Stage;

import ext.Ext;
import ext.dom.DomHelper;
import ext.dom.Element;
import ext.event.Event;
import ext.util.Observable;

import js.HTMLElement;
import js.Image;

/**
 * Utility class that takes care of canvas and shape rendering for an image map.
 * /
public class ImageMapCanvasManager extends Observable {

  private static const*/var CANVAS_ID_PREFIX$static/*:String*/ = "kinetic-stage-";/*

  public static const DEFAULT_SHAPE_STROKE_WIDTH:int = 1;

  public static const VALID_FILL_COLOR:String = "#8cb9e6";
  public static const VALID_STROKE_COLOR:String = "#FFFFFF";

  public static const INVALID_FILL_COLOR:String = "#FFE7F5";
  public static const INVALID_STROKE_COLOR:String = "#CC0000";

  private static const*/var ANCHOR_RADIUS$static/*:Number*/ = 5;/*
  private static const*/var ANCHOR_STROKE_WIDTH_TO_RADIUS_RATIO$static/*:Number*/ = 0.6;/*

  private static const*/var SELECTED_OPACITY$static/*:Number*/ = 0.75;/*
  private static const*/var UNSELECTED_OPACITY$static/*:Number*/ = 0.5;/*

  private static const*/var RECT_SELECTOR$static/*:String*/ = ".rect";/*

  private static const*/var SELECTED$static/*:String*/ = "selected";/*

  private static const*/var MIN_SIZE_HOT_ZONE$static/*:Number*/ = 20;/*

  /* The original image * /
  private var image:com.coremedia.ui.components.Image;

  /* Image dimensions * /
  private var imageHeight:Number;
  private var imageWidth:Number;

  /* Reference to canvas * /
  private var canvas:Element;

  /* Stage used for shape drawing * /
  private var stage:Stage;
  private var shapesLayer:Layer;
  private var imageLayer:Layer;

  private var selectedShape:Shape;

  private var currentScale:Number;

  private var selectedShapeTypeValueExpression:ValueExpression;

  private var lastMouseDownTime:int = 0;
  //noinspection JSFieldCanBeLocal
  private const DBL_CLICK_PERIOD:int = 200;

  /* Events * /
  public static const INITIAL_SHAPE_DRAWN:String = "initialShapeDrawn";
  public static const SHAPE_ADD:String = "shapeadd";
  public static const SHAPE_REMOVE:String = "shaperemove";
  public static const SHAPE_MOVE:String = "shapemove";
  public static const SHAPE_RESIZE:String = "shaperesize";
  public static const SHAPE_SELECT:String = "shapeselect";
  public static const SHAPE_DOUBLE_CLICK:String = "shapedoubleclick";

  private var canvasMouseDownListener:MutableMousedownListener;
  private var windowMouseDownListener:MutableMousedownListener;

  private var rectsMovedViaKeybordCounter:Object =*/function rectsMovedViaKeybordCounter_(){this.rectsMovedViaKeybordCounter$2297=( {});}/*;

  public*/ function ImageMapCanvasManager$(image/*:com.coremedia.ui.components.Image*/, imageWidth/*:Number*/, imageHeight/*:Number*/, selectedShapeValueExpression/*:ValueExpression*/) {
    this.super$2297();rectsMovedViaKeybordCounter_.call(this);anchorMouseOver_.call(this);anchorMouseOut_.call(this);resizeRect_.call(this);;

    this.image$2297 = image;
    this.imageWidth$2297 = imageWidth;
    this.imageHeight$2297 = imageHeight;
    this.currentScale$2297 = 1.0;

    this.selectedShapeTypeValueExpression$2297 = selectedShapeValueExpression;
    this.initCanvas$2297();

    this.selectedShapeTypeValueExpression$2297.addChangeListener(AS3.bind(this,"updateCursorStyle$2297"));
    this.updateCursorStyle$2297();
  }/*

  private*/ function initCanvas()/*:void*/ {var this$=this;
    var canvasId/*:String*/ = Ext.id(null, CANVAS_ID_PREFIX$static);
    var canvasMarkup/*:String*/ = '<div id="' + canvasId + '" width="' + this.imageWidth$2297 + '" height="' + this.imageHeight$2297 + '"/>';
    var canvasEl/*:HTMLElement*/ = Ext.dom.Helper.insertHtml('afterEnd', this.image$2297.getEl().dom, canvasMarkup);

    // Hide original image element
    this.image$2297.getEl().hide();


    this.stage$2297 = new Kinetic.Stage({
      container: canvasEl,
      width: this.imageWidth$2297,
      height: this.imageHeight$2297
    });

    this.imageLayer$2297 = new Kinetic.Layer();
    this.shapesLayer$2297 = new Kinetic.Layer();

    this.stage$2297.add(this.imageLayer$2297);
    this.stage$2297.add(this.shapesLayer$2297);
    this.stage$2297.setScale(this.currentScale$2297, this.currentScale$2297);

    this.canvas$2297 = Ext.get(canvasEl);

    this.imageLayer$2297.on('mousedown', function (event/*:Event*/)/*:void*/ {
      var selectedShapeType/*:String*/ = this$.selectedShapeTypeValueExpression$2297.getValue();
      if (selectedShapeType && selectedShapeType === com.coremedia.cms.studio.im.ImageMapEditor.DRAW_RECT_BUTTON_ITEM_ID) {
        this$.addRectInitiallyByDrawing$2297(this$.getCanvasMousePositionFromEvent$2297(event));
      }
    });

    // Two mouse down events in a short time frame lead to a default browser selection of the canvas.
    // This looks weird and needs to be prevented.
    //noinspection JSUnresolvedVariable
    Ext.get(this.shapesLayer$2297.getCanvas().element).on("mousedown", function (e/*:Event*/)/*:void*/ {
      var now/*:int*/ = (new Date()).getTime();
      if (now - this$.lastMouseDownTime$2297 < this$.DBL_CLICK_PERIOD$2297) {
        e.preventDefault();
      }
      this$.lastMouseDownTime$2297 = now;
    });

    // Add image to image layer
    var imageObj/*:Object*/ = new Image();
    imageObj.onload = function ()/*:void*/ {
      var imageShape/*:com.kineticjs.Image*/ = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: this$.imageWidth$2297,
        height: this$.imageHeight$2297
      });

      this$.imageLayer$2297.add(imageShape);
      this$.stage$2297.draw();
    };
    imageObj.src = AS3.getBindable(this.image$2297,"src","DUMMY");

    this.initShapeMovingWithKeyboard$2297();
  }/*

  private*/ function initShapeMovingWithKeyboard()/*:void*/ {var this$=this;
    this.canvasMouseDownListener$2297 = new com.coremedia.ui.util.MutableMousedownListener(this.canvas$2297.dom, function (evt/*:Event*/)/*:void*/ {
      this$.handleKeyDown$2297(true);
      ! !evt && this$.windowMouseDownListener$2297.muteNextEvent();
      this$.windowMouseDownListener$2297.enable();
      this$.canvasMouseDownListener$2297.disable();
    }, false);
    this.canvasMouseDownListener$2297.enable();

    this.windowMouseDownListener$2297 = new com.coremedia.ui.util.MutableMousedownListener(window.document, function (evt/*:Event*/)/*:void*/ {
      this$.handleKeyDown$2297(false);
      this$.windowMouseDownListener$2297.disable();
      this$.canvasMouseDownListener$2297.enable();
    }, true);
  }/*

  private*/ function handleKeyDown(handleKeys/*:Boolean*/)/*:void*/ {
    if (handleKeys) {
      //noinspection JSValidateTypes
      window.addEventListener("keydown",AS3.bind( this,"keyDownListener$2297"));
    } else {
      window.removeEventListener("keydown",AS3.bind( this,"keyDownListener$2297"));
    }
  }/*

  private*/ function keyDownListener(evt/*:Event*/)/*:void*/ {var this$=this;
    var rect/*:Rect*/ =AS3.as( this.selectedShape$2297,  Kinetic.Rect);

    if (!rect) {
      return;
    }

    var newMovedViaKeyboardCount/*:int*/ = (this.rectsMovedViaKeybordCounter$2297[rect.getId()] || 0) + 1;
    this.rectsMovedViaKeybordCounter$2297[rect.getId()] = newMovedViaKeyboardCount;

    var rectGroup/*:Container*/ = this.selectedShape$2297.getParent();

    var inc/*:int*/ = evt["shiftKey"] ? 10 : 1;
    var keyCode/*:int*/ = evt["keyCode"];
    switch (keyCode) {
      case 37:
        rectGroup.move(-inc, 0);
        break;
      case 38:
        rectGroup.move(0, -inc);
        break;
      case 39:
        rectGroup.move(inc, 0);
        break;
      case 40:
        rectGroup.move(0, inc);
    }

    evt.preventDefault();

    this.stage$2297.draw();

    window.setTimeout(function ()/*:void*/ {
      this$.fireRectMovedViaKeyboardEventLater$2297(rect, newMovedViaKeyboardCount);
    }, 500);
  }/*

  private*/ function fireRectMovedViaKeyboardEventLater(rect/*:Rect*/, currentMovedViaKeyboardCount/*:int*/)/*:void*/ {
    if (currentMovedViaKeyboardCount === this.rectsMovedViaKeybordCounter$2297[rect.getId()]) {
      delete this.rectsMovedViaKeybordCounter$2297[rect.getId()];
      this.handleRectMoved$2297(rect, rect.getParent());
    }
  }/*

  private*/ function updateCursorStyle()/*:void*/ {
    if (this.selectedShapeTypeValueExpression$2297.getValue()) {
      this.canvas$2297.setStyle("cursor", "crosshair");
    } else {
      this.canvas$2297.setStyle("cursor", "default");
    }
  }/*

  private*/ function getCanvasMousePositionFromEvent(event/*:Event*/)/*:Array*/ {
    var imagePosX/*:Number*/ = this.image$2297.getEl().getLeft();
    var imagePosY/*:Number*/ = this.image$2297.getEl().getTop();
    var eventX/*:Number*/ = event.getX ? event.getX() : event.pageX;
    var eventY/*:Number*/ = event.getY ? event.getY() : event.pageY;
    var scaleFactor/*:Number*/ = 1 / this.getScale();
    var mousePosition/*:Array*/ = [
      Math.round((eventX - imagePosX) * scaleFactor),   // posX
      Math.round((eventY - imagePosY) * scaleFactor)    // posY
    ];

    return mousePosition;
  }/*

  //noinspection JSUnusedGlobalSymbols
  public*/ function getStageEl()/*:Element*/ {
    return this.stage$2297.getContent();
  }/*

  public*/ function clearSelection()/*:void*/ {
    if (this.selectedShape$2297) {
      var activeShape/*:Shape*/ = this.selectedShape$2297;
      activeShape[SELECTED$static] = false;

      if (AS3.is(activeShape,  Kinetic.Rect)) {
        activeShape.setOpacity(UNSELECTED_OPACITY$static);
      }

      this.hideShapeAnchors$2297(activeShape);
      this.selectedShape$2297 = null;
    }

    this.fireEvent(ImageMapCanvasManager.SHAPE_SELECT, null);
  }/*

  private*/ function hideShapeAnchors(shape/*:Shape*/)/*:void*/ {
    if (shape && shape.getParent()) {
      // Hide anchors
      this.findShapeAnchors$2297(shape).forEach(function (anchor/*:Circle*/)/*:void*/ {
        anchor.hide();
      });
    }
  }/*

  private*/ function showShapeAnchors(shape/*:Shape*/)/*:void*/ {var this$=this;
    if (shape && shape.getParent()) {
      // Show anchors
      this.findShapeAnchors$2297(shape).forEach(function (anchor/*:Circle*/)/*:void*/ {
        anchor.setRadius(Math.floor(ANCHOR_RADIUS$static * (1 / this$.getScale())));
        anchor.show();
      });
    }
  }/*

  /**
   * returns non null array of shape anchors
   * /
  private*/ function findShapeAnchors(shape/*:Shape*/)/*:Array*/ {
    var anchors/*:Array*/ = [];
    var anchorNames/*:Array*/ = [];

    if (AS3.is(shape,  Kinetic.Rect)) {
      anchorNames = anchorNames.concat(['.topLeft', '.topRight', '.bottomRight', '.bottomLeft']);
    }

    // Collect anchors
    anchorNames.forEach(function (anchorName/*:String*/)/*:void*/ {
      var foundAnchors/*:Collection*/ = shape.getParent().get(anchorName);
      foundAnchors.each(function (anchor/*:Circle*/)/*:void*/ {
        anchors.push(anchor);
      });
    });

    return anchors;
  }/*

  public*/ function removeSelectedShape()/*:void*/ {
    if (this.selectedShape$2297) {

      // Removing the shape affects the group and anchor points too.
      // Grab references to the current selected shape and its group before clearing the selection
      var selectedShapeId/*:String*/ = this.selectedShape$2297.getId();
      var group/*:Group*/ =AS3.as( this.selectedShape$2297.getParent(),  Kinetic.Group);

      // Clear the selection
      this.clearSelection();

      group.removeChildren();
      group.remove();

      this.shapesLayer$2297.draw();

      this.fireEvent(ImageMapCanvasManager.SHAPE_REMOVE, selectedShapeId);
      this.fireEvent(ImageMapCanvasManager.SHAPE_SELECT, null);
    }
  }/*

  /**
   * Adds the given shape with image overlay and anchors to the given group.
   *
   * @param shape
   * @param anchors
   * @param group
   *
   * @return
   * /
  private*/ function addShapeWithOverlay(shape/*:Shape*/, anchors/*:Array*/, group/*:Group*/)/*:void*/ {
    group.add(shape);

    if (anchors) {
      anchors.forEach(function (anchor/*:Shape*/)/*:void*/ {
        group.add(anchor);
      });
    }

    this.stage$2297.draw();
  }/*

  private*/ function buildRect(x/*:Number*/, y/*:Number*/, width/*:Number*/, height/*:Number*/)/*:Rect*/ {var this$=this;
    var rect/*:Rect*/ = new Kinetic.Rect({
      name: 'rect',
      x: x,
      y: y,
      width: width,
      height: height,
      fill: ImageMapCanvasManager.INVALID_FILL_COLOR,
      stroke: ImageMapCanvasManager.INVALID_STROKE_COLOR,
      strokeWidth: ImageMapCanvasManager.DEFAULT_SHAPE_STROKE_WIDTH / this.getScale(),
      opacity: UNSELECTED_OPACITY$static
    });

    rect[SELECTED$static] = false;

    rect.on('dblclick', function ()/*:void*/ {
      this$.doubleClickShape(rect);
    });

    rect.on('mousedown', function (event/*:Event*/)/*:void*/ {
      this$.selectShape(rect);
    });

    return rect;
  }/*

  private*/ function buildAnchor(x/*:Number*/, y/*:Number*/, name/*:String = 'anchor'*/)/*:Shape*/ {if(arguments.length<=2)name='anchor';
    var anchor/*:Circle*/ = new Kinetic.Circle({
      name: name,
      x: x,
      y: y,
      radius: ANCHOR_RADIUS$static,
      stroke: "#666",
      fill: "#fff",
      strokeWidth: ImageMapCanvasManager.DEFAULT_SHAPE_STROKE_WIDTH / this.getScale(),
      draggable: true,
      visible: false
    });

    // add hover styling
    anchor.on("mouseover", this.anchorMouseOver$2297);
    anchor.on("mouseout", this.anchorMouseOut$2297);

    return anchor;
  }/*

  private const anchorMouseOver:Function =*/function anchorMouseOver_(){this.anchorMouseOver$2297=( function ()/*:void*/ {
    window.document.body.style.cursor = "pointer";
    var anchor/*:Circle*/ =AS3.as( this,  Kinetic.Circle);
    if (anchor) {
      anchor.setStrokeWidth(Math.floor(anchor.getRadius() * ANCHOR_STROKE_WIDTH_TO_RADIUS_RATIO$static));
      anchor.getStage().draw();
    }
  });}/*;

  private const anchorMouseOut:Function =*/function anchorMouseOut_(){this.anchorMouseOut$2297=( function ()/*:void*/ {
    window.document.body.style.cursor = "default";
    var anchor/*:Circle*/ =AS3.as( this,  Kinetic.Circle);
    if (anchor) {
      anchor.setStrokeWidth(ImageMapCanvasManager.DEFAULT_SHAPE_STROKE_WIDTH / this.getScale());
      anchor.getStage().draw();
    }
  });}/*;

  private*/ function addRectInitiallyByDrawing(startPosition/*:Array*/)/*:void*/ {var this$=this;

    var initialRect/*:Rect*/ = this.getInitialRect$2297(startPosition[0], startPosition[1]);

    function onMouseMove(event/*:Event*/)/*:void*/ {
      var endPosition/*:Array*/ = this$.getCanvasMousePositionFromEvent$2297(event);

      if (startPosition[0] !== endPosition[0] || startPosition[1] !== endPosition[1]) {
        var rectUpperLeftAndLowerRightPoints/*:Array*/ = getUpperLeftAndLowerRightRectPoints$static(startPosition, endPosition);

        var parent/*:**/ = initialRect.getParent();
        if (!parent) {
          return;
        }

        initialRect.setPosition(rectUpperLeftAndLowerRightPoints[0][0], rectUpperLeftAndLowerRightPoints[0][1]);
        initialRect.setSize(Math.abs(startPosition[0] - endPosition[0]), Math.abs(startPosition[1] - endPosition[1]));

        this$.stage$2297.draw();
      }
    }

    this.canvas$2297.on("mousemove", onMouseMove, null);

    this.canvas$2297.on("mouseup", function ()/*:void*/ {
      if (initialRect) {
        if (initialRect.getWidth() && initialRect.getHeight()) {
          var coordString/*:String*/ = "" + initialRect.getX() + "," + initialRect.getY() + "," + +(initialRect.getX() + initialRect.getWidth()) + "," + (initialRect.getY() + initialRect.getHeight());
          this$.fireEvent(ImageMapCanvasManager.INITIAL_SHAPE_DRAWN, com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT, coordString);
        }

        initialRect.getParent().remove();
        initialRect = null;
      }

      this$.canvas$2297.un("mousemove", onMouseMove, null);
    }, null, {single: true});
  }/*

  private static*/ function getUpperLeftAndLowerRightRectPoints$static(point1/*:Array*/, point2/*:Array*/)/*:Array*/ {
    return [
      [Math.min(point1[0], point2[0]), Math.min(point1[1], point2[1])],
      [Math.max(point1[0], point2[0]), Math.max(point1[1], point2[1])]
    ];
  }/*

  private*/ function getInitialRect(xy1/*:Array*/, xy2/*:Array*/)/*:Rect*/ {
    var initialRect/*:Rect*/;

    var group/*:Group*/ = this.getNewDraggableGroup$2297();

    initialRect = this.buildRect$2297(xy1[0], xy1[1], Math.abs(xy1[0] - xy2[0]), Math.abs(xy1[1] - xy2[1]));
    initialRect.setId("_initialRect");
    this.addShapeWithOverlay$2297(initialRect, null, group);
    this.shapesLayer$2297.add(group);
    this.stage$2297.draw();

    return initialRect;
  }/*

  /**
   * Adds a rectangle shape with the given id, position and size to the shapes layer.
   * @param shapeId
   * @param posX
   * @param posY
   * @param width
   * @param height
   * /
  public*/ function addRect(shapeId/*:String*/, posX/*:Number = undefined*/, posY/*:Number = undefined*/, width/*:Number = undefined*/, height/*:Number = undefined*/)/*:void*/ {var this$=this;
    var group/*:Group*/ = this.getNewDraggableGroup$2297();

    var rectWidth/*:Number*/ = width || 100;
    var rectHeight/*:Number*/ = height || 100;

    var rect/*:Rect*/ = this.buildRect$2297(posX, posY, rectWidth, rectHeight);
    rect.setId(shapeId);

    group.on('dragend', function ()/*:void*/ {
      this$.handleRectMoved$2297(rect, group);
    });


    // Two mouse down events in a short time frame lead to a default browser selection of the canvas.
    // This looks weird and needs to be prevented.
    group.on("mousedown", function (e/*:Event*/)/*:void*/ {
      var now/*:int*/ = (new Date()).getTime();
      if (now - this$.lastMouseDownTime$2297 < this$.DBL_CLICK_PERIOD$2297) {
        e.preventDefault();
      }
      this$.lastMouseDownTime$2297 = now;
    });

    // Add anchor points
    var anchorTopLeft/*:Shape*/ = this.buildAnchor$2297(posX, posY, 'topLeft');
    var anchorTopRight/*:Shape*/ = this.buildAnchor$2297(posX + rectWidth, posY, 'topRight');
    var anchorBottomLeft/*:Shape*/ = this.buildAnchor$2297(posX, posY + rectHeight, 'bottomLeft');
    var anchorBottomRight/*:Shape*/ = this.buildAnchor$2297(posX + rectWidth, posY + rectHeight, 'bottomRight');

    var anchors/*:Array*/ = [anchorTopLeft, anchorTopRight, anchorBottomRight, anchorBottomLeft];

    // Add rect with image overlay and anchors
    this.addShapeWithOverlay$2297(rect, anchors, group);

    anchorTopLeft.on('dragmove', this.resizeRect$2297);
    anchorTopRight.on('dragmove', this.resizeRect$2297);
    anchorBottomLeft.on('dragmove', this.resizeRect$2297);
    anchorBottomRight.on('dragmove', this.resizeRect$2297);

    anchors.forEach(function (anchor/*:Shape*/)/*:void*/ {
      anchor.on('dragend', function ()/*:void*/ {
        var group/*:Group*/ =AS3.as( anchor.getParent(),  Kinetic.Group);
        var rect/*:Rect*/ =AS3.as( group.get(RECT_SELECTOR$static)[0],  Kinetic.Rect);
        var shapeId/*:String*/ = rect.getId();

        this$.fireEvent(ImageMapCanvasManager.SHAPE_RESIZE, shapeId, com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT, rect);
      });
    });

    this.shapesLayer$2297.add(group);
    this.stage$2297.draw();

    this.fireEvent(ImageMapCanvasManager.SHAPE_ADD, shapeId, com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT, rect);

    this.selectShapeById(shapeId);
  }/*

  private*/ function handleRectMoved(rect/*:Rect*/, rectGroup/*:Container*/)/*:void*/ {
    var stageActualWidth/*:Number*/ = Math.round(this.stage$2297.getWidth() / this.getScale());
    var stageActualHeight/*:Number*/ = Math.round(this.stage$2297.getHeight() / this.getScale());

    var currentX/*:Number*/ = Math.round(rect.getX() + rectGroup.getX());
    var newX/*:Number*/ = Math.round(Math.min(currentX, stageActualWidth - rect.getWidth()));

    var currentY/*:Number*/ = Math.round(rect.getY() + rectGroup.getY());
    var newY/*:Number*/ = Math.round(Math.min(currentY, stageActualHeight - rect.getHeight()));

    if (newX < 0) {
      newX = 0;
    }

    if (newY < 0) {
      newY = 0;
    }

    rectGroup.move(newX - currentX, newY - currentY);
    this.stage$2297.draw();

    this.fireEvent(ImageMapCanvasManager.SHAPE_MOVE, rect.getId(), com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT, newX, newY, rect);
  }/*

  private*/ function getNewDraggableGroup()/*:Group*/ {var this$=this;
    var group/*:Group*/ = new Kinetic.Group({
      draggable: true,
      style: "cursor: pointer"
    });

    group.on("mouseenter", function ()/*:void*/ {
      this$.canvas$2297.setStyle("cursor", "pointer");
    });

    group.on("mouseleave",AS3.bind( this,"updateCursorStyle$2297"));

    group.on("mousedown", function (event/*:Event*/)/*:void*/ {
      event.stopPropagation();
      this$.canvasMouseDownListener$2297 && this$.canvasMouseDownListener$2297.trigger();
    });

    // This is weird as the option 'draggable' should suffice.
    // However, somehow Ext and Kinetic interact in a way that
    // drag performance is slow sometimes. Sometimes not.
    group.on("dragmove", function ()/*:void*/ {
      this$.stage$2297.draw();
    });

    return group;
  }/*

  /**
   * Function for rectangle resizing
   * @param canvas
   * /
  private const resizeRect:Function =*/function resizeRect_(){this.resizeRect$2297=( function (canvas/*:**/)/*:void*/ {
    var activeAnchor/*:Circle*/ =AS3.as( this,  Kinetic.Circle);
    var group/*:Group*/ =AS3.as( activeAnchor.getParent(),  Kinetic.Group);
    var rect/*:Rect*/ =AS3.as( group.get(RECT_SELECTOR$static)[0],  Kinetic.Rect);

    var topLeftAnchor/*:Circle*/ =AS3.as( group.get('.topLeft')[0],  Kinetic.Circle);
    var topRightAnchor/*:Circle*/ =AS3.as( group.get('.topRight')[0],  Kinetic.Circle);
    var bottomRightAnchor/*:Circle*/ =AS3.as( group.get('.bottomRight')[0],  Kinetic.Circle);
    var bottomLeftAnchor/*:Circle*/ =AS3.as( group.get('.bottomLeft')[0],  Kinetic.Circle);

    var width/*:Number*/;
    var height/*:Number*/;
    var anchor/*:Object*/;
    switch (activeAnchor.getName()) {
      case 'topLeft':
        anchor = resizeToMinLength$static(topLeftAnchor, topRightAnchor.getX(), bottomLeftAnchor.getY());
        topRightAnchor.setY(anchor.anchorY);
        bottomLeftAnchor.setX(anchor.anchorX);
        break;
      case 'topRight':
        anchor = resizeToMinLength$static(topRightAnchor, topLeftAnchor.getX(), bottomRightAnchor.getY());
        topLeftAnchor.setY(anchor.anchorY);
        bottomRightAnchor.setX(anchor.anchorX);
        break;
      case 'bottomRight':
        anchor = resizeToMinLength$static(bottomRightAnchor, bottomLeftAnchor.getX(), topRightAnchor.getY());
        bottomLeftAnchor.setY(anchor.anchorY);
        topRightAnchor.setX(anchor.anchorX);
        break;
      case 'bottomLeft':
        anchor = resizeToMinLength$static(bottomLeftAnchor, bottomRightAnchor.getX(), topLeftAnchor.getY());
        bottomRightAnchor.setY(anchor.anchorY);
        topLeftAnchor.setX(anchor.anchorX);
        break;
    }

    // Update rect position and size
    var topLeftPos/*:Object*/ = topLeftAnchor.getPosition();
    var newPosX/*:Number*/ = Math.round(topLeftPos.x);
    var newPosY/*:Number*/ = Math.round(topLeftPos.y);
    rect.setPosition(newPosX, newPosY);

    width = Math.round(topRightAnchor.getX() - topLeftAnchor.getX());
    height = Math.round(bottomLeftAnchor.getY() - topLeftAnchor.getY());
    if (width && height) {
      rect.setSize(width, height);
    }
  });}/*;

  private static*/ function resizeToMinLength$static(activeAnchor/*:Circle*/, xCoord/*:Number*/, yCoord/*:Number*/)/*:Object*/ {
    var anchorCoordX/*:Number*/ = activeAnchor.getX();
    var anchorCoordY/*:Number*/ = activeAnchor.getY();
    var width/*:Number*/ = Math.round(xCoord - anchorCoordX);
    var height/*:Number*/ = Math.round(yCoord - anchorCoordY);
    if (Math.abs(width) < MIN_SIZE_HOT_ZONE$static) {
      anchorCoordX = xCoord - calculateOffset$static(width);
      activeAnchor.setX(anchorCoordX);
    }
    if (Math.abs(height) < MIN_SIZE_HOT_ZONE$static) {
      anchorCoordY = yCoord - calculateOffset$static(height);
      activeAnchor.setY(anchorCoordY);
    }
    return {anchorX: anchorCoordX, anchorY: anchorCoordY};
  }/*

  private static*/ function calculateOffset$static(length/*:Number*/)/*:Number*/ {
    return (length < 0 ? -1 : 1) * MIN_SIZE_HOT_ZONE$static;
  }/*

  /**
   * Adds a new area to the shapes layer.
   *
   * @param area the area object
   * /
  public*/ function addArea(area/*:Object*/)/*:void*/ {var this$=this;
    var coords/*:Array*/ = area[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_COORDS].split(",");
    if (coords) {

      var posX/*:Number*/, posY/*:Number*/;
      var inCanvas/*:Boolean*/;

      if (area[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE] === com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_SHAPE_RECT &&
              coords.length >= 4) {
        posX = Number(coords[0]);
        posY = Number(coords[1]);
        var width/*:Number*/ = Number(coords[2]) - posX;
        var height/*:Number*/ = Number(coords[3]) - posY;
        if (width < MIN_SIZE_HOT_ZONE$static) {
          width = MIN_SIZE_HOT_ZONE$static;
        }
        if (height < MIN_SIZE_HOT_ZONE$static) {
          height = MIN_SIZE_HOT_ZONE$static;
        }

        if (posX < this.imageWidth$2297 && posY < this.imageHeight$2297) {
          this.addRect(area[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID], posX, posY, width, height);
          inCanvas = true;
        }
      }

      // Mark areas without link target as invalid and select one them if there isn't a selection yet
      com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
        var shapeId/*:String*/ = area[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_ID];
        if (inCanvas) {
          if (area[com.coremedia.cms.studio.im.ImageMapEditorConstants.AREA_LINKED_CONTENT]) {
            this$.setShapeValid(shapeId);
          } else {
            this$.setShapeInvalid(shapeId);
            if (!this$.selectedShape$2297) {
              this$.selectShapeById(shapeId);
            }
          }
        } else {
          this$.fireEvent(ImageMapCanvasManager.SHAPE_REMOVE, shapeId);
        }
      });
    }
  }/*

  /**
   * Sets the state of the given shape to 'valid' and redraws the shapes layer.
   * @param shapeId
   * /
  public*/ function setShapeValid(shapeId/*:String*/)/*:void*/ {
    var shape/*:Shape*/ = this.shapesLayer$2297.get('#' + shapeId)[0];
    if (shape && shape.getFill() !== ImageMapCanvasManager.VALID_FILL_COLOR) {
      shape.setFill(ImageMapCanvasManager.VALID_FILL_COLOR);
      shape.setStroke(ImageMapCanvasManager.VALID_STROKE_COLOR);
      this.shapesLayer$2297.draw();
    }
  }/*

  /**
   * Sets the state of the given shape to 'invalid' and redraws the shapes layer.
   * @param shapeId
   * /
  public*/ function setShapeInvalid(shapeId/*:String*/)/*:void*/ {
    var shape/*:Shape*/ = this.shapesLayer$2297.get('#' + shapeId)[0];
    if (shape && shape.getFill() !== ImageMapCanvasManager.INVALID_FILL_COLOR) {
      shape.setFill(ImageMapCanvasManager.INVALID_FILL_COLOR);
      shape.setStroke(ImageMapCanvasManager.INVALID_STROKE_COLOR);
      this.shapesLayer$2297.draw();
    }
  }/*

  //noinspection JSUnusedGlobalSymbols
  public*/ function getShapesAtPosition(x/*:Number*/, y/*:Number*/)/*:Array*/ {
    var imagePosX/*:Number*/ = this.image$2297.getEl().getLeft();
    var imagePosY/*:Number*/ = this.image$2297.getEl().getTop();
    var pos/*:Object*/ = {
      x: x - imagePosX,   // posX
      y: y - imagePosY    // posY
    };
    return this.shapesLayer$2297.getIntersections(pos) || [];
  }/*

  public*/ function selectShapeById(shapeId/*:String*/)/*:void*/ {
    var shape/*:Shape*/ = this.shapesLayer$2297.get('#' + shapeId)[0];
    this.selectShape(shape);
  }/*

  public*/ function selectShape(shape/*:Shape*/)/*:void*/ {
    if (shape) {
      this.clearSelection();
      this.selectedShape$2297 = shape;

      if (AS3.is(shape,  Kinetic.Rect)) {
        shape.setOpacity(SELECTED_OPACITY$static);
        this.showShapeAnchors$2297(shape);
      }

      this.shapesLayer$2297.draw();

      this.fireEvent(ImageMapCanvasManager.SHAPE_SELECT, shape.getId());
    }
  }/*

  public*/ function doubleClickShape(shape/*:Shape*/)/*:void*/ {
    if (shape) {
      this.fireEvent(ImageMapCanvasManager.SHAPE_DOUBLE_CLICK);
    }
  }/*

  public*/ function getScale()/*:Number*/ {
    return this.currentScale$2297;
  }/*

  public*/ function setScale(scale/*:Number*/)/*:void*/ {
    if (scale > 0) {
      this.currentScale$2297 = scale;
      this.stage$2297.setSize(this.imageWidth$2297 * scale, this.imageHeight$2297 * scale);
      this.stage$2297.setScale(scale, scale);
      // for anchor resizing
      this.showShapeAnchors$2297(this.selectedShape$2297);
      this.updateStrokeWidth$2297(this.shapesLayer$2297);
      this.stage$2297.draw();

      // get rid of scroll bar when zooming up
      this.image$2297.getEl().setWidth(this.imageWidth$2297 * scale);
      this.image$2297.getEl().setHeight(this.imageHeight$2297 * scale);
    }
  }/*

  private*/ function updateStrokeWidth(container/*:Container*/)/*:void*/ {var this$=this;
    container.getChildren().forEach(function (node/*:Node*/)/*:void*/ {

      // KineticJs does not use 'real' prototypical inheritance.
      // Thus, is(node, Shape) cannot be used. Casts to supertypes fail, too.
      var nodeUntyped/*:**/ = node;
      if (node.getNodeType() === "Shape") {
        var shape/*:Shape*/ = nodeUntyped;
        if (shape.getStrokeWidth() && shape.getStrokeWidth() > 0 && this$.getScale() > 0) {
          shape.setStrokeWidth(ImageMapCanvasManager.DEFAULT_SHAPE_STROKE_WIDTH / this$.getScale());
        }
      }
      // See above, is(node, Container) not possible.
      // Thus, working around via checking for getChildren() method.
      else if (node['getChildren']) {
        this$.updateStrokeWidth$2297(nodeUntyped);
      }
    });
  }/*

  override public*/ function getId()/*:String*/ {
    return this.canvas$2297.getAttribute("id");
  }/*

  /**
   * Get all rectangle instances from the canvas.
   *
   * @return all rectangle instances from the canvas
   * /
  public*/ function getRects()/*:Array*/ {
    var result/*:Array*/ = [];
    this.shapesLayer$2297.getChildren().forEach(function (group/*:Group*/)/*:void*/ {
      var children/*:Array*/ = group.getChildren();
      if (children && children.length > 0 &&AS3.is( children[0],  Kinetic.Rect)) {
        result.push(children[0]);
      }
    });
    return result;
  }/*

  /**
   * Destroys the canvas manager instance and removes the canvas from the dom.
   * /
  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.stage$2297 && this.stage$2297.destroy();
    this.canvas$2297 && this.canvas$2297.destroy();

    this.selectedShapeTypeValueExpression$2297.removeChangeListener(AS3.bind(this,"updateCursorStyle$2297"));

    this.canvasMouseDownListener$2297.disable();
    this.windowMouseDownListener$2297.disable();
    window.removeEventListener("keydown",AS3.bind( this,"keyDownListener$2297"));

    Ext.util.Observable.prototype.destroy.apply(this, params);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      image$2297: null,
      imageHeight$2297: NaN,
      imageWidth$2297: NaN,
      canvas$2297: null,
      stage$2297: null,
      shapesLayer$2297: null,
      imageLayer$2297: null,
      selectedShape$2297: null,
      currentScale$2297: NaN,
      selectedShapeTypeValueExpression$2297: null,
      lastMouseDownTime$2297: 0,
      DBL_CLICK_PERIOD$2297: 200,
      canvasMouseDownListener$2297: null,
      windowMouseDownListener$2297: null,
      constructor: ImageMapCanvasManager$,
      super$2297: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      initCanvas$2297: initCanvas,
      initShapeMovingWithKeyboard$2297: initShapeMovingWithKeyboard,
      handleKeyDown$2297: handleKeyDown,
      keyDownListener$2297: keyDownListener,
      fireRectMovedViaKeyboardEventLater$2297: fireRectMovedViaKeyboardEventLater,
      updateCursorStyle$2297: updateCursorStyle,
      getCanvasMousePositionFromEvent$2297: getCanvasMousePositionFromEvent,
      getStageEl: getStageEl,
      clearSelection: clearSelection,
      hideShapeAnchors$2297: hideShapeAnchors,
      showShapeAnchors$2297: showShapeAnchors,
      findShapeAnchors$2297: findShapeAnchors,
      removeSelectedShape: removeSelectedShape,
      addShapeWithOverlay$2297: addShapeWithOverlay,
      buildRect$2297: buildRect,
      buildAnchor$2297: buildAnchor,
      addRectInitiallyByDrawing$2297: addRectInitiallyByDrawing,
      getInitialRect$2297: getInitialRect,
      addRect: addRect,
      handleRectMoved$2297: handleRectMoved,
      getNewDraggableGroup$2297: getNewDraggableGroup,
      addArea: addArea,
      setShapeValid: setShapeValid,
      setShapeInvalid: setShapeInvalid,
      getShapesAtPosition: getShapesAtPosition,
      selectShapeById: selectShapeById,
      selectShape: selectShape,
      doubleClickShape: doubleClickShape,
      getScale: getScale,
      setScale: setScale,
      updateStrokeWidth$2297: updateStrokeWidth,
      getId: getId,
      getRects: getRects,
      destroy: destroy,
      statics: {
        DEFAULT_SHAPE_STROKE_WIDTH: 1,
        VALID_FILL_COLOR: "#8cb9e6",
        VALID_STROKE_COLOR: "#FFFFFF",
        INVALID_FILL_COLOR: "#FFE7F5",
        INVALID_STROKE_COLOR: "#CC0000",
        INITIAL_SHAPE_DRAWN: "initialShapeDrawn",
        SHAPE_ADD: "shapeadd",
        SHAPE_REMOVE: "shaperemove",
        SHAPE_MOVE: "shapemove",
        SHAPE_RESIZE: "shaperesize",
        SHAPE_SELECT: "shapeselect",
        SHAPE_DOUBLE_CLICK: "shapedoubleclick"
      },
      requires: [
        "Ext",
        "Ext.dom.Helper",
        "Ext.util.Observable",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.MutableMousedownListener"
      ],
      uses: [
        "com.coremedia.cms.studio.im.ImageMapEditor",
        "com.coremedia.cms.studio.im.ImageMapEditorConstants"
      ]
    };
});
