Ext.define("com.coremedia.cms.editor.sdk.premular.FocusForwarder", function(FocusForwarder) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;

/**
 * A focus forwarder controls the communication between a panel in
 * the premular (read-only document panel, document panel, preview panel)
 * and the premular focus manager. Because there are different forwarders
 * for each panel, the panels are presented with a uniform interface,
 * but the manager may eventually take different action.
 * See PremularFocusManager for the bigger picture.
 *
 * @see PremularFocusManager
 * /
public class FocusForwarder {
  private var showCallback:Function;
  private var blurCallback:Function;
  private var collapsibleChangeCallback:Function;

  /**
   * Whether the panel governed by this forwarder is externally controlled.
   * When false, the last event originated from the panel itself.
   * /
  private var externallyControlled:Boolean = false;

  private var currentContent:Content = null;
  private var currentTabTitle:String = null;
  private var currentProperty:String = null;
  private var currentSetCurrentProperty:Boolean = false;
  private var currentPosition:Number = NaN;

  private var listeners:Array =*/function listeners_(){this.listeners$hWxS=( []);}/*;

  /**
   * Create a new focus forwarder that uses the given function as
   * callbacks when the state of the associated panel changes.
   *
   * @param showCallback a callback function with the same signature as the
   *   method forwardShowToManager()
   * @param blurCallback a callback function with the same signature as the
   *   method forwardBlurToManager()
   * @param collapsibleChangeCallback a callback function with the same signature as the
   *   method forwardCollapsibleChangeToManager()
   * /
  public*/ function FocusForwarder$(showCallback/*:Function*/, blurCallback/*:Function = null*/, collapsibleChangeCallback/*:Function = null*/) {listeners_.call(this);switch(Math.max(arguments.length,1)){case 1:blurCallback=null;case 2:collapsibleChangeCallback=null;}
    this.showCallback$hWxS = showCallback;
    this.blurCallback$hWxS = blurCallback;
    this.collapsibleChangeCallback$hWxS = collapsibleChangeCallback;
  }/*

  public*/ function addListener(listener/*:FocusListener*/)/*:void*/ {
    this.listeners$hWxS.push(listener);
  }/*

  public*/ function removeListener(listener/*:FocusListener*/)/*:void*/ {
    var pos/*:int*/ = this.listeners$hWxS.indexOf(listener);
    if (pos !== -1) {
      this.listeners$hWxS.splice(pos, 1);
    }
  }/*

  // Maintain internal state in the bean properties.

  /**
   * Return the name of the current property
   *
   * @return the property name
   * /
  internal*/ function getProperty()/*:String*/ {
    return this.currentProperty$hWxS;
  }/*

  /**
   * Return the title of the current tab.
   *
   * @return the tab title
   * /
  internal*/ function getTabTitle()/*:String*/ {
    return this.currentTabTitle$hWxS;
  }/*

  //
  // Forward instructions to individual components.
  //

  /**
   * <p>The manager calls this method to make the panel focus or show a
   * property field or a tab, possibly suggesting a position.</p>
   * <p>The distance that the form in the panel was scrolled since
   * a position was last transmitted can be used to replicate that movement
   * immediately while converting jumps due to inconsistent field
   * sizes to soft-scroll operations.</p>
   *
   * @param content the content defining the selected property
   * @param tabTitle the name of the tab being shown; null, if unknown
   * @param property the name of the selected property
   * @param isFocus whether the operation is a focus operation
   * @param setCurrentProperty whether the property should be highlighted as the current property
   * @param sendState whether to inform the forwarder about the current position
   * @param position the current vertical position of the property field relative to the position of the document form; NaN, if unknown
   * @param distance the distance that the form was scrolled since the last position was sent (form content moves up = positive); NaN, if unknown
   * /
  internal*/ function fireShow(content/*:Content*/, tabTitle/*:String*/, property/*:String*/, isFocus/*:Boolean*/, setCurrentProperty/*:Boolean*/, sendState/*:Boolean*/, position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    this.externallyControlled$hWxS = true;
    this.currentContent$hWxS = content;
    this.currentProperty$hWxS = property;
    this.currentTabTitle$hWxS = tabTitle;
    this.currentSetCurrentProperty$hWxS = setCurrentProperty;
    this.currentPosition$hWxS = position;

    this.doFireShow$hWxS(isFocus, sendState, distance, scrollOnly);
  }/*

  /**
   * <p>The manager calls this method to make the panel blur the current
   * property field.</p>
   * /
  internal*/ function fireBlur()/*:void*/ {
    this.fireShow(this.currentContent$hWxS, null, null, false, false, false, NaN, NaN, false);
  }/*

  public*/ function refireShow()/*:void*/ {
    if (this.externallyControlled$hWxS) {
      for (var i/*:int*/ = 0; i < this.listeners$hWxS.length; i++) {
        var listener/*:FocusListener*/ = this.listeners$hWxS[i];
        listener.onPropertyShow(this.currentContent$hWxS, this.currentTabTitle$hWxS, this.currentProperty$hWxS, false, this.currentSetCurrentProperty$hWxS, false, this.currentPosition$hWxS, NaN, true);
      }
    }
  }/*

  private*/ function doFireShow(isFocus/*:Boolean*/, sendState/*:Boolean*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < this.listeners$hWxS.length; i++) {
      var listener/*:FocusListener*/ = this.listeners$hWxS[i];
      listener.onPropertyShow(this.currentContent$hWxS, this.currentTabTitle$hWxS, this.currentProperty$hWxS, isFocus, this.currentSetCurrentProperty$hWxS, sendState, this.currentPosition$hWxS, distance, scrollOnly);
    }
  }/*

  public*/ function fireCollapsibleChange(collapsibleItemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    for (var i/*:int*/ = 0; i < this.listeners$hWxS.length; i++) {
      var listener/*:FocusListener*/ = this.listeners$hWxS[i];
      listener.onCollapsibleChange(collapsibleItemId, expanded);
    }
  }/*

  //
  // Forward local changes to the callbacks provided by the manager.
  //

  /**
   * The panel calls this method when a property field has been focused or shown or moved.
   * If any arguments are unknown or not applicable, null or NaN may be passed to this
   * function.
   *
   * @param content the content defining the property
   * @param tabTitle the name of the tab being focused; null, if unknown
   * @param property the name of the edited property
   * @param isFocus whether the operation is a focus operation
   * @param userOperation whether the focus operation was caused by a direct user action
   * @param position the current vertical position of the property field relative to the position of the document form; NaN, if unknown
   * @param distance the distance that the form was scrolled since the last position was sent (form content moves up = positive); NaN, if unknown
   * /
  public*/ function forwardShowToManager(content/*:Content*/, tabTitle/*:String*/, property/*:String*/, isFocus/*:Boolean*/, userOperation/*:Boolean*/, position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    this.externallyControlled$hWxS = false;

    this.showCallback$hWxS && this.showCallback$hWxS(content, tabTitle, property, isFocus, userOperation, position, distance, scrollOnly);
  }/*

  /**
   * The panel calls this method when a property field has been blurred.
   * /
  public*/ function forwardBlurToManager()/*:void*/ {
    this.externallyControlled$hWxS = false;

    this.blurCallback$hWxS && this.blurCallback$hWxS();
  }/*

  /**
   * The event is fired when a collapsible of the managed component has changed.
   * @param itemId the itemId of the collapsible that has changed its state
   * @param expanded true if the panel has been expanded
   * /
  public*/ function forwardCollapsibleChangeToManager(itemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    this.collapsibleChangeCallback$hWxS && this.collapsibleChangeCallback$hWxS(itemId, expanded);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      showCallback$hWxS: null,
      blurCallback$hWxS: null,
      collapsibleChangeCallback$hWxS: null,
      externallyControlled$hWxS: false,
      currentContent$hWxS: null,
      currentTabTitle$hWxS: null,
      currentProperty$hWxS: null,
      currentSetCurrentProperty$hWxS: false,
      currentPosition$hWxS: NaN,
      constructor: FocusForwarder$,
      addListener: addListener,
      removeListener: removeListener,
      getProperty: getProperty,
      getTabTitle: getTabTitle,
      fireShow: fireShow,
      fireBlur: fireBlur,
      refireShow: refireShow,
      doFireShow$hWxS: doFireShow,
      fireCollapsibleChange: fireCollapsibleChange,
      forwardShowToManager: forwardShowToManager,
      forwardBlurToManager: forwardBlurToManager,
      forwardCollapsibleChangeToManager: forwardCollapsibleChangeToManager
    };
});
