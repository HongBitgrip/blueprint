Ext.define("com.coremedia.ui.components.IFrameComponent", function(IFrameComponent) {/*package com.coremedia.ui.components {

import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ShimmableUtil;

import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.event.Event;
import ext.util.Observable;

import js.Document;
import js.HTMLCollection;
import js.HTMLElement;
import js.Text;
import js.Window;

/**
 * Fires after the iframe was loaded.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldUrl:String</code> the old url
 *   </li>
 *   <li>
 *     <code>newUrl:String</code> the new url
 *   </li>
 * </ul>
 * /
[Event(name = "url")] // NOSONAR - no type

/**
 * Fires after the iframe was loaded.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldFavIconUrl:String</code> the old favIconUrl
 *   </li>
 *   <li>
 *     <code>newFavIconUrl:String</code> the new favIconUrl
 *   </li>
 * </ul>
 * /
[Event(name = "favIconUrl")] // NOSONAR - no type

/**
 * Fires after the iframe was loaded.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>oldTitle:String</code> the old title
 *   </li>
 *   <li>
 *     <code>newTitle:String</code> the new title
 *   </li>
 * </ul>
 * /
[Event(name = "title")] // NOSONAR - no type

/**
 * @see com.coremedia.ui.components.IFrame
 * /
public class IFrameComponent extends Component implements Shimmable {

  public static const LOAD_EVENT:String = "load";
  public static const UNLOAD_EVENT:String = "unload";

  public static const URL_PROPERTY:String = "url";
  public static const TITLE_PROPERTY:String = "title";
  public static const FAV_ICON_URL_PROPERTY:String = "favIconUrl";

  private var frameShim:*;
  private var documentObservable:Observable;
  private var loaded:Boolean = false;

  /**
   * The URL of the HTML page to show in the iframe.
   * /
  [ExtConfig]
  public var url:String = "about:blank";

  /**
   *
   * @param config The configuration options.
   *
   * @see com.coremedia.ui.components.IFrame
   * /
  public*/ function IFrameComponent$(config/*:IFrame = null*/) {if(arguments.length<=0)config=null;
    this.super$Xgk5(config);
    this.addListener("beforedestroy",AS3.bind( this,"onBeforeDestroy$Xgk5"));
    this.documentObservable$Xgk5 = new Ext.util.Observable();
    com.coremedia.ui.components.IFrameMgr.getInstance().registerIFrame(this);
  }/*

  private*/ function onBeforeDestroy()/*:Boolean*/ {
    this.documentObservable$Xgk5.clearListeners();
    com.coremedia.ui.components.IFrameMgr.getInstance().unregisterIFrame(this);
    return true;
  }/*

  override protected*/ function onResize(adjWidth/*:Number*/, adjHeight/*:Number*/, rawWidth/*:Number*/, rawHeight/*:Number*/)/*:void*/ {
    this.updateShimSize$Xgk5(rawHeight, rawWidth);
    Ext.Component.prototype.onResize.call(this,adjWidth, adjHeight, rawWidth, rawHeight);
  }/*

  private*/ function updateShimSize(rawHeight/*:Number*/, rawWidth/*:Number*/)/*:void*/ {
    if (this.frameShim$Xgk5) {
      var fly/*:Element*/ = Ext.fly(this.frameShim$Xgk5);
      fly.setHeight(rawHeight);
      fly.setWidth(rawWidth);
    }
  }/*

  public*/ function setUrl(url/*:String*/)/*:void*/ {
    this.url = url;
    var elem/*:Element*/ = this.getEl();
    if (elem) {
      elem.set({src: this.url});

      // only IE doesn't reload the iframe now, so we have to enforce it:
      if (Ext.isIE) {
        var contentWindow/*:Window*/ = this.getContentWindow();
        if(contentWindow) {
          com.coremedia.ui.logging.Logger.info(IFrameComponent+": setting iframe's location href to "+url);
          contentWindow.location.href = url; // necessary for IE only!
        }
      }
    }
  }/*

  public*/ function getContentWindow()/*:Window*/ {
    return (this.el && this.el.dom) ? this.el.dom.contentWindow : null;
  }/*

  public*/ function getContentDocument()/*:Document*/ {
    return this.getContentWindow() ? this.getContentWindow().document : null;
  }/*

  /**
   * Add a listener for the given DOM event type to every document loaded into this
   * iframe. Note that this mainly makes sense for bubbling event types.
   * @param eventName the event type ('click', 'dragstart', ...)
   * @param handler the event handler, which receives an event of type IEventObject
   *
   * @see ext.event.Event
   * /
  public*/ function addDocumentListener(eventName/*:String*/, handler/*:Function*/)/*:void*/ {
    if (this.loaded$Xgk5 && !this.documentObservable$Xgk5.hasListener(eventName)) {
      Ext.fly(this.getContentDocument()).addListener(eventName,AS3.bind( this,"refireDomEvent$Xgk5"));
    }
    this.documentObservable$Xgk5.addListener(eventName, handler);
  }/*

  public*/ function removeDocumentListener(eventName/*:String*/, handler/*:Function*/)/*:void*/ {
    this.documentObservable$Xgk5.removeListener(eventName, handler);
    if (this.loaded$Xgk5 && !this.documentObservable$Xgk5.hasListener(eventName)) {
      Ext.fly(this.getContentDocument()).removeListener(eventName,AS3.bind( this,"refireDomEvent$Xgk5"));
    }
  }/*

  private*/ function refireDomEvent(event/*:Event*/)/*:void*/ {
    this.documentObservable$Xgk5.fireEvent(event.type, event);
  }/*

  protected override*/ function onRender(parentNode/*:Element*/, containerIdx/*:Number*/)/*:void*/ {
    Ext.Component.prototype.onRender.call(this,parentNode, containerIdx);
    this['el'] = parentNode.createChild({
      tag: 'iframe',
      id: 'iframe-' + this.getId(),
      frameBorder: 0,
      src: this.url
    });
    this.mon(this['el'], IFrameComponent.LOAD_EVENT,AS3.bind( this,"onFrameLoad$Xgk5"));
    this.mon(this['el'], IFrameComponent.UNLOAD_EVENT,AS3.bind( this,"onFrameUnload$Xgk5"));
  }/*

  private*/ function onFrameLoad(/*event: Event*/)/*:void*/ {
    this.loaded$Xgk5 = true;
    this.fireEvent(IFrameComponent.LOAD_EVENT);
    // TODO: support oldValue?
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, IFrameComponent.URL_PROPERTY, undefined, this.getUrl());
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, IFrameComponent.TITLE_PROPERTY, undefined, this.getTitle());
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, IFrameComponent.FAV_ICON_URL_PROPERTY, undefined, this.getFavIconUrl());

    var document/*:Element*/ = Ext.fly(this.getContentDocument());
    for (var event/*:String*/ in this.documentObservable$Xgk5.events) {
      document.addListener(event,AS3.bind( this,"refireDomEvent$Xgk5"));
    }
  }/*

  public*/ function getUrl()/*:String*/ {
    return this.getContentDocument().location.href;
  }/*

  /**
   * Return the title of the iframe content.
   * Only call after frame has been loaded.
   * @return the title of the iframe content.
   * /
  public*/ function getTitle()/*:String*/ {
    var title/*:HTMLElement*/ = this.getContentDocument().getElementsByTagName("TITLE")[0];
    return title && title.firstChild ? AS3.cast(Text,title.firstChild).data : "";
  }/*

  /**
   * Return the URL of the favicon of the iframe content or null if the page has no favicon.
   * Only call after frame has been loaded.
   * @return the URL of the favicon of the iframe content or null.
   * /
  public*/ function getFavIconUrl()/*:String*/ {
    var head/*:HTMLElement*/ = this.getContentDocument().getElementsByTagName("HEAD")[0];
    var links/*:HTMLCollection*/ = head.getElementsByTagName("link");
    for (var i/*:uint*/ = 0; i < links.length; i++) {
      var link/*:HTMLElement*/ = links[i];
      if (link['type'] == "image/x-icon" && link["rel"] == "shortcut icon") {
        return AS3.as( link.getAttribute("href"),  String);
      }
    }
    return null;
  }/*


  private*/ function onFrameUnload()/*:void*/ {
    Ext.fly(this.getContentDocument()).clearListeners();
    this.loaded$Xgk5 = false;
    this.fireEvent(IFrameComponent.UNLOAD_EVENT);
  }/*

  /**
   * Creates an (frontal) transparent shim agent for the frame.  Used primarily for masking the frame during drag operations.
   * /
  public*/ function createFrameShim()/*:void*/ {
    if (!this.getEl()) {
      return;
    }

    this.frameShim$Xgk5 = com.coremedia.ui.util.ShimmableUtil.createShimForElement(Ext.get(this.getEl().dom.parentNode));
  }/*

  /**
   * Toggles visibility of the (frontal) transparent shim agent for the frame.  Used primarily for masking the frame during drag operations.
   * @param {Boolean} show Optional True to activate the shim, false to hide the shim agent.
   * /
  public*/ function toggleShim(show/*:Boolean*/)/*:void*/ {
    if (!this.frameShim$Xgk5) {
      this.createFrameShim();
    }

    com.coremedia.ui.util.ShimmableUtil.toggleShim(this.frameShim$Xgk5, show, false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      mixins: ["com.coremedia.ui.components.Shimmable"],
      metadata: {"": [
        "Event",
        [
          "name",
          "url"
        ],
        "Event",
        [
          "name",
          "favIconUrl"
        ],
        "Event",
        [
          "name",
          "title"
        ]
      ]},
      frameShim$Xgk5: undefined,
      documentObservable$Xgk5: null,
      loaded$Xgk5: false,
      url: "about:blank",
      constructor: IFrameComponent$,
      super$Xgk5: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      onBeforeDestroy$Xgk5: onBeforeDestroy,
      onResize: onResize,
      updateShimSize$Xgk5: updateShimSize,
      setUrl: setUrl,
      getContentWindow: getContentWindow,
      getContentDocument: getContentDocument,
      addDocumentListener: addDocumentListener,
      removeDocumentListener: removeDocumentListener,
      refireDomEvent$Xgk5: refireDomEvent,
      onRender: onRender,
      onFrameLoad$Xgk5: onFrameLoad,
      getUrl: getUrl,
      getTitle: getTitle,
      getFavIconUrl: getFavIconUrl,
      onFrameUnload$Xgk5: onFrameUnload,
      createFrameShim: createFrameShim,
      toggleShim: toggleShim,
      statics: {
        LOAD_EVENT: "load",
        UNLOAD_EVENT: "unload",
        URL_PROPERTY: "url",
        TITLE_PROPERTY: "title",
        FAV_ICON_URL_PROPERTY: "favIconUrl"
      },
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.util.Observable",
        "com.coremedia.ui.components.Shimmable",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.ui.components.IFrameMgr",
        "com.coremedia.ui.util.ShimmableUtil"
      ]
    };
});
