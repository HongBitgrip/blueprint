Ext.define("com.coremedia.cms.editor.sdk.preview.InnerPreviewPanelBase", function(InnerPreviewPanelBase) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.messageService;
import com.coremedia.cms.editor.sdk.preview.metadata.IMetadataService;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo;
import com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu;
import com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter;
import com.coremedia.ui.components.IconButton;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.ScrollbarUtil;

import ext.Component;
import ext.Ext;
import ext.button.SplitButton;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.panel.Panel;

import js.HTMLElement;
import js.Window;

/**
 * Fires after the dimensions of this panel were changed.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldDimensions:*</code> the old dimensions
 *   </li>
 *   <li>
 *     <code>newDimensions:*</code> the new dimensions
 *   </li>
 * </ul>
 * /
[Event(name = "documentDimensionsChanged")] // NOSONAR - no type

public class InnerPreviewPanelBase extends Panel {
  /**
   * The itemId of the iframe component loading the preview.
   * /
  public static const IFRAME_ITEM_ID:String = 'iFrameComponent';

  public static const SCALING_CONTAINER_ITEM_ID:String = 'scalingContainer';
  public static const DEVICE_SCROLLBAR_BOTTOM_ITEM_ID:String = 'deviceScrollbarBottom';
  public static const DEVICE_SCROLLBAR_RIGHT_ITEM_ID:String = 'deviceScrollbarRight';
  public static const SCROLLBAR_BOTTOM_ITEM_ID:String = 'scrollbarBottom';
  public static const SCROLLBAR_RIGHT_ITEM_ID:String = 'scrollbarRight';

  protected static const DEVICE_FRAME_WIDTH:Number = 26;
  protected static const DEVICE_PADDING:int = 12;

  internal static const SLIDER_ZOOM_PROPERTY:String = "sliderZoom";
  internal static const SCALE_MODE_PROPERTY:String = "scaleMode";
  internal static const SELECTED_DEVICE_PROPERTY:String = "selectedDevice";

  internal static const DEVICE_WIDTH_PROPERTY:String = 'width';
  internal static const DEVICE_HEIGHT_PROPERTY:String = 'height';
  internal static const DEVICE_FULL_WIDTH_PROPERTY:String = 'fullWidth';

  private static const*/var RESPONSIVE_METADATA_DEVICES_PROPERTY$static/*:String*/ = "cm_responsiveDevices";/*

  private var zoom:Number;              // Value between 0 and 1. Two decimal digits.
  private var sliderZoom:Number;        // Value between 0 and 100. Additional zoom requested by the slider.
  private var scaleMode:Boolean;        // Display window mode in preferred width if set to true
  private var selectedDevice:Object;

  private var retrieveSizeRequestCounter:Number = 0;
  private var iFrameDocumentHeight:Number = NaN;
  private var iFrameDocumentWidth:Number = NaN;

  private var retrieveScrollPositionRequestCounter:Number = 0;

  private var horizontalBorderScrollbar:HTMLElement;
  private var verticalBorderScrollbar:HTMLElement;
  private var horizontalScrollbar:HTMLElement;
  private var verticalScrollbar:HTMLElement;

  private var lastBorderScrollbarScrollLeft:Number = NaN;
  private var lastBorderScrollbarScrollTop:Number = NaN;
  private var lastScrollbarScrollLeft:Number = NaN;
  private var lastScrollbarScrollTop:Number = NaN;
  private var lastScrollLeft:Number = NaN;
  private var lastScrollTop:Number = NaN;
  private var scrollingInProgress:Boolean = false;

  public*/ function InnerPreviewPanelBase$(config/*:InnerPreviewPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$frE3(config);

    this.mon(this.getIFrame(), "afterrender",AS3.bind( this,"iframeRenderedHandler$frE3"));
    this.mon(this.getIFrame(), "resize",AS3.bind( this,"iframeResizeHandler$frE3"));
    this.mon(this.getDeviceScrollbarRight(), "afterrender",AS3.bind( this,"initVerticalBorderScrollbarListener$frE3"));
    this.mon(this.getDeviceScrollbarBottom(), "afterrender",AS3.bind( this,"initHorizontalBorderScrollbarListener$frE3"));
    this.mon(this.getRightScrollbar(), "afterrender",AS3.bind( this,"initVerticalScrollbarListener$frE3"));
    this.mon(this.getBottomScrollbar(), "afterrender",AS3.bind( this,"initHorizontalScrollbarListener$frE3"));

    com.coremedia.cms.editor.sdk.editorContext.getPreferences().addPropertyChangeListener(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.ENABLE_PREVIEW_SCROLLBARS,AS3.bind(
            this,"scrollbarConfigurationChanged$frE3"));
  }/*

  public*/ function resetScrollPositions()/*:void*/ {
    this.lastBorderScrollbarScrollLeft$frE3 = NaN;
    this.lastBorderScrollbarScrollTop$frE3 = NaN;
    this.lastScrollbarScrollLeft$frE3 = NaN;
    this.lastScrollbarScrollTop$frE3 = NaN;
    this.lastScrollLeft$frE3 = NaN;
    this.lastScrollTop$frE3 = NaN;
    this.scrollingInProgress$frE3 = false;
  }/*

  [Bindable]
  public var metadataService:IMetadataService;


  override protected*/ function beforeRender()/*:void*/ {
    Ext.panel.Panel.prototype.beforeRender.call(this);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.mon(this.getEl(), "wheel",AS3.bind( this,"onWheel$frE3"));
    this.layoutItems();
  }/*

  private*/ function onWheel(extEvent/*:Event*/)/*:void*/ {
    var event/*:Object*/ = extEvent.browserEvent;

    var deltaX/*:Number*/ = getDeltaX$static(event);
    var deltaY/*:Number*/ = getDeltaY$static(event);
    if (deltaX || deltaY) {
      var nextScrollLeft/*:Number*/ = Math.max(0, Math.min(this.lastScrollLeft$frE3 + deltaX, this.iFrameDocumentWidth$frE3 - this.getIFrame().getWidth()));
      var nextScrollTop/*:Number*/ = Math.max(0, Math.min(this.lastScrollTop$frE3 + deltaY, this.iFrameDocumentHeight$frE3 - this.getIFrame().getHeight()));
      this.locallyScrolled$frE3(nextScrollLeft, nextScrollTop);
      this.updateScrollbars$frE3();
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
  }/*

  private static*/ function getDeltaY$static(event/*:Object*/)/*:Number*/ {
    if (event.deltaY) {
      return event.deltaY * (event.deltaMode ? event.deltaMode * 14 : 1);
    }
    return 0;
  }/*

  private static*/ function getDeltaX$static(event/*:Object*/)/*:Number*/ {
    if (event.deltaX) {
      return event.deltaX * (event.deltaMode ? event.deltaMode * 14 : 1);
    }
    return 0;
  }/*

  private*/ function iframeRenderedHandler()/*:void*/ {
    var iFrame/*:PreviewIFrame*/ = this.getIFrame();
    var iFrameEl/*:HTMLElement*/ = iFrame.getEl().dom;
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.READY,AS3.bind( this,"iframeReadyHandler$frE3"));
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RESIZE,AS3.bind( this,"iframeResizeHandler$frE3"));
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RESIZE,AS3.bind( this,"sendDocumentDimensionChangeEvent$frE3"));
    com.coremedia.cms.editor.sdk.messageService.registerMessageListener(iFrameEl, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SCROLL,AS3.bind( this,"iframeScrollHandler$frE3"));
  }/*

  private*/ function initVerticalBorderScrollbarListener()/*:void*/ {
    this.verticalBorderScrollbar$frE3 = this.getDeviceScrollbarRight().getEl().dom;
    this.verticalBorderScrollbar$frE3.addEventListener("scroll",AS3.bind( this,"borderScrollbarScrolled$frE3"), false);
  }/*

  private*/ function initHorizontalBorderScrollbarListener()/*:void*/ {
    this.horizontalBorderScrollbar$frE3 = this.getDeviceScrollbarBottom().getEl().dom;
    this.horizontalBorderScrollbar$frE3.addEventListener("scroll",AS3.bind( this,"borderScrollbarScrolled$frE3"), false);
  }/*

  private*/ function initVerticalScrollbarListener()/*:void*/ {
    this.verticalScrollbar$frE3 = this.getRightScrollbar().getEl().dom;
    this.verticalScrollbar$frE3.addEventListener("scroll",AS3.bind( this,"scrollbarScrolled$frE3"), false);
  }/*

  private*/ function initHorizontalScrollbarListener()/*:void*/ {
    this.horizontalScrollbar$frE3 = this.getBottomScrollbar().getEl().dom;
    this.horizontalScrollbar$frE3.addEventListener("scroll",AS3.bind( this,"scrollbarScrolled$frE3"), false);
  }/*

  private*/ function scrollbarConfigurationChanged()/*:void*/ {
    this.layoutItems();
  }/*

  private*/ function borderScrollbarScrolled()/*:void*/ {
    if (this.horizontalBorderScrollbar$frE3 && this.verticalBorderScrollbar$frE3 && this.isDeviceMode$frE3()) {
      if (this.lastBorderScrollbarScrollLeft$frE3 !== this.horizontalBorderScrollbar$frE3.scrollLeft ||
              this.lastBorderScrollbarScrollTop$frE3 !== this.verticalBorderScrollbar$frE3.scrollTop) {

        this.lastBorderScrollbarScrollLeft$frE3 = this.horizontalBorderScrollbar$frE3.scrollLeft;
        this.lastBorderScrollbarScrollTop$frE3 = this.verticalBorderScrollbar$frE3.scrollTop;

        this.locallyScrolled$frE3(this.horizontalBorderScrollbar$frE3.scrollLeft, this.verticalBorderScrollbar$frE3.scrollTop);
      }
    }
  }/*

  private*/ function scrollbarScrolled()/*:void*/ {
    if (this.horizontalScrollbar$frE3 && this.verticalScrollbar$frE3 && !this.isDeviceMode$frE3()) {
      if (this.lastScrollbarScrollLeft$frE3 !== this.horizontalScrollbar$frE3.scrollLeft ||
              this.lastScrollbarScrollTop$frE3 !== this.verticalScrollbar$frE3.scrollTop) {

        this.lastScrollbarScrollLeft$frE3 = this.horizontalScrollbar$frE3.scrollLeft;
        this.lastScrollbarScrollTop$frE3 = this.verticalScrollbar$frE3.scrollTop;

        this.locallyScrolled$frE3(Math.round(this.horizontalScrollbar$frE3.scrollLeft * this.getIFrame().getWidth() / this.iFrameDocumentWidth$frE3), Math.round(this.verticalScrollbar$frE3.scrollTop / this.zoom$frE3));
      }
    }
  }/*

  private*/ function locallyScrolled(scrollLeft/*:Number*/, scrollTop/*:Number*/)/*:void*/ {var this$=this;
    if (this.rendered && this.selectedDevice$frE3) {
      this.lastScrollLeft$frE3 = scrollLeft;
      this.lastScrollTop$frE3 = scrollTop;

      if (!this.scrollingInProgress$frE3) {
        var contentWindow/*:Window*/ = this.getIFrame().getContentWindow();
        this.scrollingInProgress$frE3 = true;
        com.coremedia.cms.editor.sdk.messageService.sendMessage(contentWindow, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SET_SCROLL_POSITION, {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }, function ()/*:void*/ {
          this$.scrollingInProgress$frE3 = false;

          var scrollLeftChanged/*:Boolean*/ = !(isNaN(scrollLeft) && isNaN(this$.lastScrollLeft$frE3)) && scrollLeft !== this$.lastScrollLeft$frE3;
          var scrollTopChanged/*:Boolean*/ = !(isNaN(scrollTop) && isNaN(this$.lastScrollTop$frE3)) && scrollTop !== this$.lastScrollTop$frE3;
          if (scrollLeftChanged || scrollTopChanged) {
            this$.locallyScrolled$frE3(this$.lastScrollLeft$frE3, this$.lastScrollTop$frE3);
          }
        }, this.getIFrame());
      }
    }
  }/*

  private*/ function sendDocumentDimensionChangeEvent(msgBody/*:Object*/)/*:void*/ {
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel.DOCUMENT_DIMENSIONS_CHANGED_EVENT, msgBody.oldDimensions, msgBody.newDimensions);
  }/*

  private*/ function iframeResizeHandler()/*:void*/ {
    if (this.rendered && this.selectedDevice$frE3) {
      this.updateDocumentDimensionsEventually$frE3();
      this.updateScrollPositionEventually$frE3();
    }
  }/*

  private*/ function updateDocumentDimensionsEventually()/*:void*/ {var this$=this;
    var contentWindow/*:Window*/ = this.getIFrame().getContentWindow();
    var myRequest/*:Number*/ = ++this.retrieveSizeRequestCounter$frE3;
    com.coremedia.cms.editor.sdk.messageService.sendMessage(contentWindow, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RETRIEVE_DOCUMENT_DIMENSIONS, {}, function (responseBody/*:Object*/)/*:void*/ {
      if (myRequest === this$.retrieveSizeRequestCounter$frE3) {
        // The response has not been obsoleted by another request.
        var changed/*:Boolean*/ =
                this$.iFrameDocumentHeight$frE3 !== responseBody.documentHeight ||
                this$.iFrameDocumentWidth$frE3 !== responseBody.documentWidth;
        if (changed) {
          this$.iFrameDocumentHeight$frE3 = responseBody.documentHeight;
          this$.iFrameDocumentWidth$frE3 = responseBody.documentWidth;

          this$.layoutItems();
        }
      }
    }, this.getIFrame());
  }/*

  private*/ function iframeScrollHandler()/*:void*/ {
    if (this.rendered && this.selectedDevice$frE3) {
      this.updateScrollPositionEventually$frE3();
    }
  }/*

  private*/ function updateScrollPositionEventually()/*:void*/ {var this$=this;
    var contentWindow/*:Window*/ = this.getIFrame().getContentWindow();
    var myRequest/*:Number*/ = ++this.retrieveScrollPositionRequestCounter$frE3;
    com.coremedia.cms.editor.sdk.messageService.sendMessage(contentWindow, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RETRIEVE_SCROLL_POSITION, {}, function (responseBody/*:Object*/)/*:void*/ {
      if (myRequest === this$.retrieveScrollPositionRequestCounter$frE3) {
        // The response has not been obsoleted by another request.
        this$.lastScrollTop$frE3 = responseBody.scrollTop;
        this$.lastScrollLeft$frE3 = responseBody.scrollLeft;

        this$.updateScrollbars$frE3();
      }
    }, this.getIFrame());
  }/*

  private*/ function updateScrollbars()/*:void*/ {
    if (this.horizontalBorderScrollbar$frE3) {
      this.lastBorderScrollbarScrollLeft$frE3 = Math.round(this.lastScrollLeft$frE3);
      this.horizontalBorderScrollbar$frE3.scrollLeft = this.lastBorderScrollbarScrollLeft$frE3;
    }
    if (this.verticalBorderScrollbar$frE3) {
      this.lastBorderScrollbarScrollTop$frE3 = Math.round(this.lastScrollTop$frE3);
      this.verticalBorderScrollbar$frE3.scrollTop = this.lastBorderScrollbarScrollTop$frE3;
    }
    if (this.horizontalScrollbar$frE3) {
      this.lastScrollbarScrollLeft$frE3 = Math.round(this.lastScrollLeft$frE3 * this.iFrameDocumentWidth$frE3 / this.getIFrame().getWidth());
      this.horizontalScrollbar$frE3.scrollLeft = this.lastScrollbarScrollLeft$frE3;
    }
    if (this.verticalScrollbar$frE3) {
      this.lastScrollbarScrollTop$frE3 = Math.round(this.lastScrollTop$frE3 * this.zoom$frE3);
      this.verticalScrollbar$frE3.scrollTop = this.lastScrollbarScrollTop$frE3;
    }
  }/*

  private*/ function iframeReadyHandler()/*:void*/ {
    this.layoutItems();
    this.locallyScrolled$frE3(this.lastScrollLeft$frE3, this.lastScrollTop$frE3);
  }/*

  override protected*/ function onResize(width/*:Number*/, height/*:Number*/, oldWidth/*:Number*/, oldHeight/*:Number*/)/*:void*/ {
    Ext.panel.Panel.prototype.onResize.call(this,width, height, oldWidth, oldHeight);

    this.layoutItems();
  }/*

  public*/ function layoutItems()/*:void*/ {
    if (this.rendered) {
      var size/*:Object*/ = this.getSize();
      var layoutWidth/*:Number*/ = size.width;

      var parent/*:Component*/ = this.up();
      var layoutHeight/*:Number*/ = parent.getSize().height;
      if (this.selectedDevice$frE3) {
        layoutHeight = this.body.getHeight();
      }

      this.updateScaleModeButtons$frE3();

      addOrRemoveClass$static(this.getEl(), "cm-preview-panel--devices-mode", this.isDeviceMode$frE3());

      if (this.isDeviceMode$frE3()) {
        this.layoutDeviceMode$frE3(layoutWidth, layoutHeight);
      } else {
        this.layoutNonDeviceMode$frE3(layoutWidth, layoutHeight);
      }

      this.setScrollDimensions$frE3();

      this.updateDocumentDimensionsEventually$frE3();

      this.updateLayout();
    }
  }/*

  private*/ function updateScaleModeButtons()/*:void*/ {
    // Patch selected device (window mode device) to project window mode full width feature
    // to width only device implementation.
    var deviceFullWidthValue/*:Number*/ = this.selectedDevice$frE3 ? this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_FULL_WIDTH_PROPERTY] : NaN;
    if (this.isDesktopMode$frE3() && deviceFullWidthValue) {
      this.showScaleModeButtons$frE3();

      if (this.scaleMode$frE3) {
        this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY] = deviceFullWidthValue;
      } else {
        this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY] = -1;
      }
    } else {
      this.hideScaleModeButtons$frE3();
    }
  }/*

  private*/ function layoutDeviceMode(layoutWidth/*:Number*/, layoutHeight/*:Number*/)/*:void*/ {
    var scrollbarThickness/*:Number*/ = com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS || 14; // MacOS magic for white contrast background
    var scrollbarPadding/*:Number*/ = Math.floor((InnerPreviewPanelBase.DEVICE_FRAME_WIDTH - scrollbarThickness) / 2);

    var deviceWidth/*:Number*/ = this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY];
    var deviceHeight/*:Number*/ = this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_HEIGHT_PROPERTY];
    var deviceFrameWidth/*:Number*/ = deviceWidth + 2 * InnerPreviewPanelBase.DEVICE_FRAME_WIDTH;
    var deviceFrameHeight/*:Number*/ = deviceHeight + 2 * InnerPreviewPanelBase.DEVICE_FRAME_WIDTH;
    var horizontalZoomFactor/*:Number*/ = (layoutWidth - 2 * InnerPreviewPanelBase.DEVICE_PADDING) / deviceFrameWidth;
    var verticalZoomFactor/*:Number*/ = (layoutHeight - 2 * InnerPreviewPanelBase.DEVICE_PADDING) / deviceFrameHeight;
    this.zoom$frE3 = Math.min(1, horizontalZoomFactor, verticalZoomFactor);

    var showHorizontalScrollbars/*:Boolean*/ = this.iFrameDocumentWidth$frE3 > deviceWidth && isShowPreviewScrollbars$static();
    var showVerticalScrollbars/*:Boolean*/ = this.iFrameDocumentHeight$frE3 > deviceHeight && isShowPreviewScrollbars$static();

    this.updateNativeScrolling$frE3(false);
    this.getRightScrollbar().hide();
    this.getBottomScrollbar().hide();
    showOrHideComponent$static(this.getDeviceScrollbarRight(), showVerticalScrollbars);
    showOrHideComponent$static(this.getDeviceScrollbarBottom(), showHorizontalScrollbars);

    this.getScalingContainer().setSize(deviceFrameWidth + "", deviceFrameHeight + "");

    if (showVerticalScrollbars) {
      this.getDeviceScrollbarRight().setSize(scrollbarThickness + "", deviceHeight + "");
    }
    this.getDeviceScrollbarRight().setPosition(deviceWidth + InnerPreviewPanelBase.DEVICE_FRAME_WIDTH + scrollbarPadding, InnerPreviewPanelBase.DEVICE_FRAME_WIDTH);
    if (showHorizontalScrollbars) {
      this.getDeviceScrollbarBottom().setSize(deviceWidth + "", scrollbarThickness + "");
    }
    this.getDeviceScrollbarBottom().setPosition(InnerPreviewPanelBase.DEVICE_FRAME_WIDTH, deviceHeight + InnerPreviewPanelBase.DEVICE_FRAME_WIDTH + scrollbarPadding);
    this.getIFrame().setSize(deviceWidth + "", deviceHeight + "");
    this.getIFrame().setPosition(InnerPreviewPanelBase.DEVICE_FRAME_WIDTH, InnerPreviewPanelBase.DEVICE_FRAME_WIDTH);

    this.writeCssTransformsAndCenter$frE3(layoutWidth, layoutHeight, deviceFrameWidth, deviceFrameHeight);
  }/*

  private*/ function layoutNonDeviceMode(layoutWidth/*:Number*/, layoutHeight/*:Number*/)/*:void*/ {
    var useRemoteControlScrollbars/*:Boolean*/;
    var showHorizontalScrollbar/*:Boolean*/;
    var showVerticalScrollbar/*:Boolean*/;
    var availableIFrameWidth/*:Number*/;
    var availableIFrameHeight/*:Number*/;
    var previewIFrameWidth/*:Number*/;

    if (this.isWidthOnlyMode$frE3()) {
      useRemoteControlScrollbars = true;
      previewIFrameWidth = this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY];
      showHorizontalScrollbar = this.iFrameDocumentWidth$frE3 > previewIFrameWidth;
      availableIFrameWidth = layoutWidth - com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS;
      availableIFrameHeight = layoutHeight - (showHorizontalScrollbar ? com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS : 0);
      this.calculateZoom$frE3(availableIFrameWidth, previewIFrameWidth);
    } else {
      useRemoteControlScrollbars = false;
      previewIFrameWidth = layoutWidth;
      showHorizontalScrollbar = this.iFrameDocumentWidth$frE3 > previewIFrameWidth;
      availableIFrameWidth = layoutWidth;
      availableIFrameHeight = layoutHeight;

      this.zoom$frE3 = 1;
    }

    var previewIFrameHeight/*:Number*/ = availableIFrameHeight / this.zoom$frE3;
    showVerticalScrollbar = this.iFrameDocumentHeight$frE3 > Math.ceil(previewIFrameHeight);

    // Recalculate width and height if vertical scrollbar is not displayed
    if (useRemoteControlScrollbars && !showVerticalScrollbar) {
      availableIFrameWidth = layoutWidth;
      this.calculateZoom$frE3(availableIFrameWidth, previewIFrameWidth);
      previewIFrameHeight = availableIFrameHeight / this.zoom$frE3;
    }

    this.updateNativeScrolling$frE3(!useRemoteControlScrollbars);
    showOrHideComponent$static(this.getRightScrollbar(), useRemoteControlScrollbars);
    showOrHideComponent$static(this.getBottomScrollbar(), useRemoteControlScrollbars && showHorizontalScrollbar);

    this.getDeviceScrollbarRight().hide();
    this.getDeviceScrollbarBottom().hide();

    this.getScalingContainer().setSize(previewIFrameWidth + "", previewIFrameHeight + "");
    this.getRightScrollbar().setSize(com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS + "", availableIFrameHeight + "");
    this.getRightScrollbar().setPosition(availableIFrameWidth, 0);
    this.getBottomScrollbar().setSize(availableIFrameWidth + "", com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS + "");
    this.getBottomScrollbar().setPosition(0, availableIFrameHeight);
    this.getIFrame().setSize(previewIFrameWidth + "", previewIFrameHeight + "");
    this.getIFrame().setPosition(0, 0);

    this.writeCssTransformsAndCenter$frE3(availableIFrameWidth, availableIFrameHeight, previewIFrameWidth, previewIFrameHeight);
    // Set the width of the scrollbar again because the bar would otherwise stay empty.
    this.getRightScrollbar().setWidth(com.coremedia.ui.util.ScrollbarUtil.SCROLLBAR_THICKNESS);
  }/*

  private*/ function calculateZoom(availableIFrameWidth/*:Number*/, previewIFrameWidth/*:Number*/)/*:void*/ {
    this.zoom$frE3 = Math.min(1, availableIFrameWidth / previewIFrameWidth);
    if (this.isDesktopMode$frE3()) {
      var transformedSliderZoom/*:Number*/ = Math.pow(16, this.sliderZoom$frE3 / com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu.MAX_VALUE - 1);
      this.zoom$frE3 = this.zoom$frE3 * transformedSliderZoom;
    }
  }/*

  private*/ function updateNativeScrolling(enable/*:Boolean*/)/*:void*/ {
    var iFrame/*:PreviewIFrame*/ = this.getIFrame();
    var iFrameEl/*:Element*/ = iFrame.getEl();
    if (iFrameEl) {
      iFrameEl.set({scrolling: enable ? 'yes' : 'no'});
    }

    com.coremedia.cms.editor.sdk.messageService.sendMessage(this.getIFrame().getContentWindow(), com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.ENABLE_DOCUMENT_SCROLL, {
      enable: enable
    });
  }/*

  private*/ function showScaleModeButtons()/*:void*/ {
    this.getPreviewToolbarButtonWrapper().show();
  }/*

  private*/ function hideScaleModeButtons()/*:void*/ {
    this.getPreviewToolbarButtonWrapper().hide();
  }/*

  private*/ function setScrollDimensions()/*:void*/ {
    if (this.horizontalBorderScrollbar$frE3) {
      Ext.fly(this.horizontalBorderScrollbar$frE3.firstChild).setWidth(this.iFrameDocumentWidth$frE3);
    }
    if (this.horizontalScrollbar$frE3) {
      Ext.fly(this.horizontalScrollbar$frE3.firstChild).setWidth(this.getBottomScrollbar().getWidth() * this.iFrameDocumentWidth$frE3 / this.getIFrame().getWidth());
    }
    if (this.verticalBorderScrollbar$frE3) {
      Ext.fly(this.verticalBorderScrollbar$frE3.firstChild).setHeight(this.iFrameDocumentHeight$frE3);
    }
    if (this.verticalScrollbar$frE3) {
      Ext.fly(this.verticalScrollbar$frE3.firstChild).setHeight(this.iFrameDocumentHeight$frE3 * this.zoom$frE3);
    }
  }/*

  internal*/ function getZoom()/*:Number*/ {
    return this.zoom$frE3;
  }/*

  // Called by bind plugin.
  public*/ function getSliderZoom()/*:Number*/ {
    return this.sliderZoom$frE3;
  }/*

  // Called by bind plugin.
  public*/ function setSliderZoom(sliderZoom/*:Number*/)/*:void*/ {
    if (this.sliderZoom$frE3 !== sliderZoom) {
      this.sliderZoom$frE3 = sliderZoom;
      this.layoutItems();
    }
  }/*

  // Called by bind plugin.
  public*/ function getScaleMode()/*:Boolean*/ {
    return this.scaleMode$frE3;
  }/*

  // Called by bind plugin.
  public*/ function setScaleMode(scaleMode/*:Boolean*/)/*:void*/ {
    if (this.scaleMode$frE3 !== scaleMode) {
      this.scaleMode$frE3 = scaleMode;
      this.layoutItems();
    }
  }/*

  // Called by bind plugin.
  internal*/ function setSelectedDevice(device/*:Object*/)/*:void*/ {
    this.selectedDevice$frE3 = device;
    this.layoutItems();
  }/*

  // Called by bind plugin.
  public*/ function getSelectedDevice()/*:Object*/ {
    return this.selectedDevice$frE3;
  }/*

  private*/ function isDesktopMode()/*:Boolean*/ {
    return !this.selectedDevice$frE3 || this.selectedDevice$frE3['id'] === 'desktopMode';
  }/*

  private*/ function isWidthOnlyMode()/*:Boolean*/ {
    return this.selectedDevice$frE3 && (!this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_HEIGHT_PROPERTY] || this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_HEIGHT_PROPERTY] <= 0) && this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY] > 0;
  }/*

  private*/ function isDeviceMode()/*:Boolean*/ {
    return this.selectedDevice$frE3 && this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_HEIGHT_PROPERTY] > 0 && this.selectedDevice$frE3[InnerPreviewPanelBase.DEVICE_WIDTH_PROPERTY] > 0;
  }/*

  /**
   * Writes the current zoom setting into css styles and centers the
   * device container.
   * /
  private*/ function writeCssTransformsAndCenter(availableWidth/*:Number*/, availableHeight/*:Number*/, scalingContainerWidth/*:Number*/, scalingContainerHeight/*:Number*/)/*:void*/ {
    var el/*:Element*/ = this.getScalingContainer().getEl();

    var shiftX/*:String*/ = (availableWidth - scalingContainerWidth * this.zoom$frE3) / 2 + "px";
    var shiftY/*:String*/ = (availableHeight - scalingContainerHeight * this.zoom$frE3) / 2 + "px";

    el.setStyle("left", shiftX);
    el.setStyle("top", shiftY);

    var transformString/*:String*/ = this.zoom$frE3 === 1 ? "" : "scale(" + this.zoom$frE3 + ")";
    // Don't use ext element wrapper - it does not write -ms-transform style in IE9
    el.dom.style['transform'] = transformString;
    el.dom.style['-webkit-transform'] = transformString;
    el.dom.style['-ms-transform'] = transformString;

    var leftTopOrigin/*:String*/ = "left top";
    el.dom.style['transform-origin'] = leftTopOrigin;
    el.dom.style['-webkit-transform-origin'] = leftTopOrigin;
    el.dom.style['-ms-transform-origin'] = leftTopOrigin;
  }/*

  private static*/ function isShowPreviewScrollbars$static()/*:Boolean*/ {
    return ! !com.coremedia.cms.editor.sdk.editorContext.getPreferences().get(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.ENABLE_PREVIEW_SCROLLBARS);
  }/*

  private static*/ function showOrHideComponent$static(comp/*:Component*/, show/*:Boolean*/)/*:void*/ {
    if (show) {
      if (comp.hidden) {
        comp.show();
      }
    } else {
      if (!comp.hidden) {
        comp.hide();
      }
    }
  }/*

  /**
   * Ensure that the given style class is or is not set for the given
   * DOM node.
   *
   * @param el a DOM node, Ext Element or DOM node id according to the semantics of Ext.fly
   * @param cls the style class
   * @param add whether to add the style class
   * /
  private static*/ function addOrRemoveClass$static(el/*:**/, cls/*:String*/, add/*:Boolean*/)/*:void*/ {
    if (el) {
      if (add) {
        Ext.fly(el).addCls(cls);
      } else {
        Ext.fly(el).removeCls(cls);
      }
    }
  }/*

  internal*/ function getDeviceScrollbarRight()/*:Component*/ {
    return this.queryById(InnerPreviewPanelBase.DEVICE_SCROLLBAR_RIGHT_ITEM_ID);
  }/*

  internal*/ function getDeviceScrollbarBottom()/*:Component*/ {
    return this.queryById(InnerPreviewPanelBase.DEVICE_SCROLLBAR_BOTTOM_ITEM_ID);
  }/*

  internal*/ function getRightScrollbar()/*:Component*/ {
    return this.queryById(InnerPreviewPanelBase.SCROLLBAR_RIGHT_ITEM_ID);
  }/*

  internal*/ function getBottomScrollbar()/*:Component*/ {
    return this.queryById(InnerPreviewPanelBase.SCROLLBAR_BOTTOM_ITEM_ID);
  }/*

  internal*/ function getIFrame()/*:PreviewIFrame*/ {
    return AS3.as( this.queryById(InnerPreviewPanelBase.IFRAME_ITEM_ID),  com.coremedia.cms.editor.sdk.preview.PreviewIFrame);
  }/*

  internal*/ function getScalingContainer()/*:Container*/ {
    return AS3.as( this.queryById(InnerPreviewPanelBase.SCALING_CONTAINER_ITEM_ID),  Ext.container.Container);
  }/*

  internal*/ function getResponsiveModeButton()/*:IconButton*/ {
    return AS3.as( this.getTopToolbar().queryById(com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar.RESPONSIVE_MODE_BUTTON_ITEM_ID),  com.coremedia.ui.components.IconButton);
  }/*

  internal*/ function getFullWidthButton()/*:SplitButton*/ {
    return AS3.as( this.getTopToolbar().queryById(com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar.FULL_WIDTH_BUTTON_ITEM_ID),  Ext.button.Split);
  }/*

  internal*/ function getPreviewToolbarButtonWrapper()/*:Container*/ {
    return AS3.as( this.getTopToolbar().queryById(com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar.PREVIEW_IFRAME_TOOLBAR_BUTTON_WRAPPER_ITEM_ID),  Ext.container.Container);
  }/*


  override protected*/ function onRemoved(destroying/*:Boolean*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.editorContext.getPreferences().removePropertyChangeListener(com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames.ENABLE_PREVIEW_SCROLLBARS,AS3.bind(
            this,"scrollbarConfigurationChanged$frE3"));

    var iFrameEl/*:Element*/ = this.getIFrame().getEl();
    if (iFrameEl) {
      var iFrameElDOM/*:HTMLElement*/ = iFrameEl.dom;
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.READY,AS3.bind( this,"iframeReadyHandler$frE3"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RESIZE,AS3.bind( this,"iframeResizeHandler$frE3"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.RESIZE,AS3.bind( this,"sendDocumentDimensionChangeEvent$frE3"));
      com.coremedia.cms.editor.sdk.messageService.unregisterMessageListener(iFrameElDOM, com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes.SCROLL,AS3.bind( this,"iframeScrollHandler$frE3"));
    }

    this.verticalBorderScrollbar$frE3 && this.verticalBorderScrollbar$frE3.removeEventListener("scroll",AS3.bind( this,"borderScrollbarScrolled$frE3"), false);
    this.horizontalBorderScrollbar$frE3 && this.horizontalBorderScrollbar$frE3.removeEventListener("scroll",AS3.bind( this,"borderScrollbarScrolled$frE3"), false);
    this.verticalScrollbar$frE3 && this.verticalScrollbar$frE3.removeEventListener("scroll",AS3.bind( this,"scrollbarScrolled$frE3"), false);
    this.horizontalScrollbar$frE3 && this.horizontalScrollbar$frE3.removeEventListener("scroll",AS3.bind( this,"scrollbarScrolled$frE3"), false);

    if (this.previewZoomStateWriter$frE3) {
      this.previewZoomStateWriter$frE3.destroy();
    }

    Ext.panel.Panel.prototype.onRemoved.call(this,destroying);
  }/*

  // ===========================================
  // Value expressions and initializer
  // ===========================================

  private var deviceInfoValueExpression:ValueExpression;
  private var selectedDeviceValueExpression:ValueExpression;
  private var desktopModeScaleValueExpression:ValueExpression;
  private var sliderZoomValueExpression:ValueExpression;
  private var previewZoomStateWriter:PreviewZoomStateWriter;

  internal*/ function getDesktopModeScaleValueExpression()/*:ValueExpression*/ {
    if (!this.desktopModeScaleValueExpression$frE3) {
      var storedScaleMode/*:Boolean*/ = com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter.getStoredScaleMode();
      this.desktopModeScaleValueExpression$frE3 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(storedScaleMode);
      // Also filter for valid values.
    }
    return this.desktopModeScaleValueExpression$frE3;
  }/*

  [ProvideToExtChildren]
  public*/ function getPreviewZoomStateWriter()/*:PreviewZoomStateWriter*/ {
    if (!this.previewZoomStateWriter$frE3) {
      this.previewZoomStateWriter$frE3 = new com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter(this.getDesktopModeScaleValueExpression(), this.getSliderZoomValueExpression());
    }
    return this.previewZoomStateWriter$frE3;
  }/*

  internal*/ function getSliderZoomValueExpression()/*:ValueExpression*/ {
    if (!this.sliderZoomValueExpression$frE3) {
      var storedSliderZoom/*:Number*/ = com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter.getStoredSliderZoom();
      this.sliderZoomValueExpression$frE3 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(isNaN(storedSliderZoom) ? com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu.MAX_VALUE : storedSliderZoom);
    }
    return this.sliderZoomValueExpression$frE3;
  }/*

  internal*/ function getDeviceInfoValueExpression()/*:ValueExpression*/ {
    if (!this.deviceInfoValueExpression$frE3) {
      this.deviceInfoValueExpression$frE3 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getDeviceInfo"));
    }
    return this.deviceInfoValueExpression$frE3;
  }/*

  internal*/ function getSelectedDeviceValueExpression()/*:ValueExpression*/ {
    if (!this.selectedDeviceValueExpression$frE3) {
      // The selected device value expression status is not persisted by the inner preview panel but directly by
      // the slider component as it shall only persist manual changes.
      this.selectedDeviceValueExpression$frE3 = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
    }
    return this.selectedDeviceValueExpression$frE3;
  }/*

  /**
   * provides the device information for the slider
   * @return the device info
   * /
  internal*/ function getDeviceInfo()/*:DeviceInfo*/ {
    var deviceInfo/*:DeviceInfo*/ = new com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo();
    deviceInfo.setData([]);

    if (AS3.getBindable(this,"metadataService")) {
      var devices/*:Array*/ = [];
      var fullWidth/*:Number*/ = 0;

      // get the metadata root node
      var metadataTree/*:MetadataTree*/ = AS3.getBindable(this,"metadataService").getMetadataTree();
      if (metadataTree.getRoot()) {
        // find the metadata node which is defined in the jsp
        var metadataNodesList/*:Array*/ = metadataTree.getRoot().findChildrenByProperty(RESPONSIVE_METADATA_DEVICES_PROPERTY$static);
        if (metadataNodesList.length > 0) { // if it exists
          var metadataNode/*:MetadataTreeNode*/ = metadataNodesList[0];
          var configuredDevices/*:Object*/ = metadataNode.getProperty(RESPONSIVE_METADATA_DEVICES_PROPERTY$static);
          if (configuredDevices) {
            var device/*:Object*/;
            // iterator over all devices
            for (device in configuredDevices) {
              if (configuredDevices.hasOwnProperty(String(device))) {
                var deviceNode/*:Object*/ = configuredDevices[device];
                if (AS3.as(deviceNode["isDefault"],  Boolean)) { // if this device is default
                  devices.push({
                    order: parseInt(deviceNode["order"]),
                    id: device,
                    width: parseInt(deviceNode["width"]),
                    height: parseInt(deviceNode["height"]),
                    isDefault: true
                  });
                } else { // if this device is not default
                  devices.push({
                    order: parseInt(deviceNode["order"]),
                    id: device,
                    width: parseInt(deviceNode["width"]),
                    height: parseInt(deviceNode["height"])
                  });
                }
              }
            }
            // sort the devices by order. This is needed because the metadata order of elements is not guaranteed.
            devices.sort(InnerPreviewPanelBase.comparator);
          }
          var configuredFullWidth/*:Number*/ = Number(metadataNode.getProperty('cm_preferredWidth'));
          if (configuredFullWidth > 0) {
            fullWidth = configuredFullWidth;
          }
        }
      }
      // Always add generic window mode.
      var desktopModeDevice/*:Object*/ = {
        order: devices.length,
        id: 'desktopMode',
        width: -1,
        height: -1,
        fullWidth: fullWidth
      };
      devices.push(desktopModeDevice);
      deviceInfo.setData(devices);
    }
    return deviceInfo;
  }/*

  internal static*/ function comparator$static(val1/*:Object*/, val2/*:Object*/)/*:Number*/ {
    return val1['order'] - val2['order'];
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      metadata: {
        "": [
          "Event",
          [
            "name",
            "documentDimensionsChanged"
          ]
        ],
        getPreviewZoomStateWriter: ["ProvideToExtChildren"]
      },
      zoom$frE3: NaN,
      sliderZoom$frE3: NaN,
      scaleMode$frE3: false,
      selectedDevice$frE3: null,
      retrieveSizeRequestCounter$frE3: 0,
      iFrameDocumentHeight$frE3: NaN,
      iFrameDocumentWidth$frE3: NaN,
      retrieveScrollPositionRequestCounter$frE3: 0,
      horizontalBorderScrollbar$frE3: null,
      verticalBorderScrollbar$frE3: null,
      horizontalScrollbar$frE3: null,
      verticalScrollbar$frE3: null,
      lastBorderScrollbarScrollLeft$frE3: NaN,
      lastBorderScrollbarScrollTop$frE3: NaN,
      lastScrollbarScrollLeft$frE3: NaN,
      lastScrollbarScrollTop$frE3: NaN,
      lastScrollLeft$frE3: NaN,
      lastScrollTop$frE3: NaN,
      scrollingInProgress$frE3: false,
      constructor: InnerPreviewPanelBase$,
      super$frE3: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      resetScrollPositions: resetScrollPositions,
      beforeRender: beforeRender,
      afterRender: afterRender,
      onWheel$frE3: onWheel,
      iframeRenderedHandler$frE3: iframeRenderedHandler,
      initVerticalBorderScrollbarListener$frE3: initVerticalBorderScrollbarListener,
      initHorizontalBorderScrollbarListener$frE3: initHorizontalBorderScrollbarListener,
      initVerticalScrollbarListener$frE3: initVerticalScrollbarListener,
      initHorizontalScrollbarListener$frE3: initHorizontalScrollbarListener,
      scrollbarConfigurationChanged$frE3: scrollbarConfigurationChanged,
      borderScrollbarScrolled$frE3: borderScrollbarScrolled,
      scrollbarScrolled$frE3: scrollbarScrolled,
      locallyScrolled$frE3: locallyScrolled,
      sendDocumentDimensionChangeEvent$frE3: sendDocumentDimensionChangeEvent,
      iframeResizeHandler$frE3: iframeResizeHandler,
      updateDocumentDimensionsEventually$frE3: updateDocumentDimensionsEventually,
      iframeScrollHandler$frE3: iframeScrollHandler,
      updateScrollPositionEventually$frE3: updateScrollPositionEventually,
      updateScrollbars$frE3: updateScrollbars,
      iframeReadyHandler$frE3: iframeReadyHandler,
      onResize: onResize,
      layoutItems: layoutItems,
      updateScaleModeButtons$frE3: updateScaleModeButtons,
      layoutDeviceMode$frE3: layoutDeviceMode,
      layoutNonDeviceMode$frE3: layoutNonDeviceMode,
      calculateZoom$frE3: calculateZoom,
      updateNativeScrolling$frE3: updateNativeScrolling,
      showScaleModeButtons$frE3: showScaleModeButtons,
      hideScaleModeButtons$frE3: hideScaleModeButtons,
      setScrollDimensions$frE3: setScrollDimensions,
      getZoom: getZoom,
      getSliderZoom: getSliderZoom,
      setSliderZoom: setSliderZoom,
      getScaleMode: getScaleMode,
      setScaleMode: setScaleMode,
      setSelectedDevice: setSelectedDevice,
      getSelectedDevice: getSelectedDevice,
      isDesktopMode$frE3: isDesktopMode,
      isWidthOnlyMode$frE3: isWidthOnlyMode,
      isDeviceMode$frE3: isDeviceMode,
      writeCssTransformsAndCenter$frE3: writeCssTransformsAndCenter,
      getDeviceScrollbarRight: getDeviceScrollbarRight,
      getDeviceScrollbarBottom: getDeviceScrollbarBottom,
      getRightScrollbar: getRightScrollbar,
      getBottomScrollbar: getBottomScrollbar,
      getIFrame: getIFrame,
      getScalingContainer: getScalingContainer,
      getResponsiveModeButton: getResponsiveModeButton,
      getFullWidthButton: getFullWidthButton,
      getPreviewToolbarButtonWrapper: getPreviewToolbarButtonWrapper,
      onRemoved: onRemoved,
      deviceInfoValueExpression$frE3: null,
      selectedDeviceValueExpression$frE3: null,
      desktopModeScaleValueExpression$frE3: null,
      sliderZoomValueExpression$frE3: null,
      previewZoomStateWriter$frE3: null,
      getDesktopModeScaleValueExpression: getDesktopModeScaleValueExpression,
      getPreviewZoomStateWriter: getPreviewZoomStateWriter,
      getSliderZoomValueExpression: getSliderZoomValueExpression,
      getDeviceInfoValueExpression: getDeviceInfoValueExpression,
      getSelectedDeviceValueExpression: getSelectedDeviceValueExpression,
      getDeviceInfo: getDeviceInfo,
      config: {metadataService: null},
      statics: {
        IFRAME_ITEM_ID: 'iFrameComponent',
        SCALING_CONTAINER_ITEM_ID: 'scalingContainer',
        DEVICE_SCROLLBAR_BOTTOM_ITEM_ID: 'deviceScrollbarBottom',
        DEVICE_SCROLLBAR_RIGHT_ITEM_ID: 'deviceScrollbarRight',
        SCROLLBAR_BOTTOM_ITEM_ID: 'scrollbarBottom',
        SCROLLBAR_RIGHT_ITEM_ID: 'scrollbarRight',
        DEVICE_FRAME_WIDTH: 26,
        DEVICE_PADDING: 12,
        SLIDER_ZOOM_PROPERTY: "sliderZoom",
        SCALE_MODE_PROPERTY: "scaleMode",
        SELECTED_DEVICE_PROPERTY: "selectedDevice",
        DEVICE_WIDTH_PROPERTY: 'width',
        DEVICE_HEIGHT_PROPERTY: 'height',
        DEVICE_FULL_WIDTH_PROPERTY: 'fullWidth',
        comparator: comparator$static
      },
      requires: [
        "Ext",
        "Ext.button.Split",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.util.ScrollbarUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.EditorComponentsPreferencesPropertyNames",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.messageService",
        "com.coremedia.cms.editor.sdk.preview.InnerPreviewPanel",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrame",
        "com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbar",
        "com.coremedia.cms.editor.sdk.preview.PreviewMessageTypes",
        "com.coremedia.cms.editor.sdk.preview.zoom.DeviceInfo",
        "com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenu",
        "com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter"
      ]
    };
});
