Ext.define("com.coremedia.ui.BrowserContextMenuManager", function(BrowserContextMenuManager) {/*package com.coremedia.ui {
import ext.Component;
import ext.Ext;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.TextField;

/**
 * Manages if the standard context menu of the browser is shown on right mouse click events. By default
 * all components except textfields do not show the browser context menu. Components may change this
 * default behavior by calling registerDefaultFilter or registerFilter on the object obtained with the
 * static getInstance method.
 * /
public class BrowserContextMenuManager {

  private var filters:Array =*/function filters_(){this.filters$A04Z=( []);}/*;

  private static*/ var instance$static/*:BrowserContextMenuManager*/=null;/*

  /**
   * Returns the singleton of this class.
   *
   * @return the singleton of this class.
   * /
  public static*/ function getInstance$static()/*:BrowserContextMenuManager*/ {
    if (!instance$static) {
      instance$static = new BrowserContextMenuManager();
    }
    return instance$static;
  }

  function BrowserContextMenuManager$() {filters_.call(this);
    // By default all textfields allow the browser context menu.
    this.filters$A04Z.push(textFieldFilter$static);
  }/*

  /**
   * The default filter for all textfield components.
   *
   * @param ev the right click mouse event
   * @return true if click target is inside a textfield.
   * /
  private static*/ function textFieldFilter$static(ev/*:Event*/)/*:Boolean*/ {
    var targetElement/*:Element*/ = Ext.get(ev.target);
    var targetComponent/*:Component*/ = getTargetComponent$static(targetElement);
    return AS3.is( targetComponent,  Ext.form.field.Text);
  }/*

  /**
   * Returns the nearest Ext.Component up the element hierarchy.
   *
   * @param targetElement the target element of the click event
   * @return the nearest Ext component in the element hierarchy
   * /
  private static*/ function getTargetComponent$static(targetElement/*:Element*/)/*:Component*/ {
    var elem/*:Element*/ = targetElement;
    while(elem && !elem.component) {
      elem = elem.parent();
    }
    return elem && elem.component;
  }/*

  /**
   * Registers the default filter for right click mouse events received by the global 'window' object. The default
   * filter returns true for right click events inside the given component. A listener for the destroy event
   * is added to the given component which deregisters the created default filter from this manager.
   *
   * If any registered filter returns true, the browser context menu will appear.
   *
   * @param comp the component for which to apply the event filtering.
   * /
  public*/ function registerDefaultFilter(comp/*:Component*/)/*:void*/ {
    var defaultFilter/*:Function*/ = this.createDefaultFilter$A04Z(comp);
    this.registerFilter(comp, defaultFilter);
  }/*

  /**
   * Creates the default filter which returns true for right click events inside the given component.
   *
   * @param comp the rendered component for which to apply the event filtering
   * @return the default filter
   * /
  private*/ function createDefaultFilter(comp/*:Component*/)/*:Function*/ {
    return function (ev/*:Event*/)/*:Boolean*/ {
      var el/*:Element*/ = comp.getEl();
      return ev.within(el);
    };
  }/*

  /**
   * Registers a filter function for right click mouse events received by the global 'window' object. A listener
   * for the destroy event is added to the given component which deregisters the given filter from this manager.
   *
   * If any registered filter returns true, the browser context menu will appear.
   *
   * @param filter a function with signature function(ev:Event):Boolean where ev is a mouse event
   * @param comp the component for which to apply the event filtering.
   * /
  public*/ function registerFilter(comp/*:Component*/, filter/*:Function*/)/*:void*/ {var this$=this;
    if (filter) {
      this.filters$A04Z.push(filter);

      comp.on("destroy", function()/*:void*/ {
        this$.deregisterFilter$A04Z(filter);
      });
    }
  }/*

  /**
   * Deregisters the given filter function for right click mouse events received by the global 'window' object.
   *
   * @param filter the filter to deregister.
   *
   * @see #registerFilter
   * /
  private*/ function deregisterFilter(filter/*:Function*/)/*:void*/ {
    if (filter) {
      var pos/*:int*/ = this.filters$A04Z.indexOf(filter);
      if (pos >= 0) {
        this.filters$A04Z.splice(pos, 1);
      }
    }
  }/*

  /**
   * Registers a contextmenu listener at the global 'window' object which applies the filtering.
   *
   * @see #registerFilter
   * /
  public*/ function registerWindowListener()/*:void*/ {var this$=this;
    Ext.get(window).on('contextmenu', function (ev/*:Event*/)/*:void*/ {
      if (!this$.filters$A04Z.some(function (filter/*:Function*/)/*:Boolean*/ {
                return filter(ev);
              })) {
        ev.preventDefault();
      }
    });
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: BrowserContextMenuManager$,
      registerDefaultFilter: registerDefaultFilter,
      createDefaultFilter$A04Z: createDefaultFilter,
      registerFilter: registerFilter,
      deregisterFilter$A04Z: deregisterFilter,
      registerWindowListener: registerWindowListener,
      statics: {getInstance: getInstance$static},
      requires: [
        "Ext",
        "Ext.form.field.Text"
      ]
    };
});
