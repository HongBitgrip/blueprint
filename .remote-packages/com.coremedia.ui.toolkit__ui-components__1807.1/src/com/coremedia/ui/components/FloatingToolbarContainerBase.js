Ext.define("com.coremedia.ui.components.FloatingToolbarContainerBase", function(FloatingToolbarContainerBase) {/*package com.coremedia.ui.components {

import ext.Component;
import ext.container.Container;
import ext.toolbar.Toolbar;

public class FloatingToolbarContainerBase extends Container {

  public var floatingToolbars:Array =*/function floatingToolbars_(){this.floatingToolbars=( []);}/*;

  public*/ function FloatingToolbarContainerBase$(config/*:FloatingToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$78in(config);floatingToolbars_.call(this);;
    this.on("afterlayout",AS3.bind( this,"updateToolbarProperties$78in"));
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.collectFloatingToolbars$78in();
    this.mon(this.getEl(), "scroll",AS3.bind( this,"documentFormScrolled$78in"));
    this.on("add",AS3.bind( this,"addFloatingToolbars$78in"));
  }/*

  private*/ function updateToolbarProperties()/*:void*/ {
    this.calculateNonFloatingGlobalPositions$78in();
    for (var i/*:Number*/ = 0; i < this.floatingToolbars.length; i++) {
      var toolbar/*:FloatingToolbar*/ = this.floatingToolbars[i];
      toolbar.editingComponentMinHeight = this.getEditingComponentMinHeightForToolbar$78in();
      if (toolbar.toolbarIsFloating) {
        var left/*:Number*/ = toolbar.nonFloatingToolbarGlobalLeftValue;
        var top/*:Number*/ = getGlobalTop$static(this);
        setToolbarPosition$static(toolbar, top, left);
      }
    }
    this.calculateScrollDistances$78in();
    this.documentFormScrolled$78in();
  }/*

  // Collect all floating toolbars inside this container and initialize them
  private*/ function collectFloatingToolbars()/*:void*/ {
    var foundToolbars/*:Array*/ = this.query("toolbar");
    if (foundToolbars.length > 0) {
      for (var i/*:Number*/ = 0; i < foundToolbars.length; i++) {
        if (AS3.is(foundToolbars[i],  com.coremedia.ui.components.FloatingToolbar)) {
          var toolbar/*:FloatingToolbar*/ = foundToolbars[i];
          if (this.floatingToolbars.indexOf(toolbar) < 0) {
            // only float toolbar if it is docked top
            if (toolbar.dock == "top") {
              this.listenToToolbarRemoval$78in(toolbar);
              this.floatingToolbars.push(toolbar);
              toolbar.editingComponentMinHeight = this.getEditingComponentMinHeightForToolbar$78in();
            }
          }
        }
      }
    }
  }/*

  private*/ function addFloatingToolbars(toolbar/*:FloatingToolbar*/)/*:void*/ {
    if (this.floatingToolbars.indexOf(toolbar) < 0 && toolbar.xtype == com.coremedia.ui.components.FloatingToolbar.xtype) {
      if (toolbar.dock == "top") {
        this.listenToToolbarRemoval$78in(toolbar);
        this.mon(toolbar, "afterlayout",AS3.bind( this,"addTbar$78in"));
      }
    }
  }/*

  private*/ function listenToToolbarRemoval(toolbar/*:FloatingToolbar*/)/*:void*/ {
    this.mon(toolbar, "removed",AS3.bind( this,"checkToolbar$78in"));
    this.mon(toolbar, "beforedestroy",AS3.bind( this,"checkToolbar$78in"));
  }/*

  private*/ function checkToolbar(toolbar/*:Toolbar*/)/*:void*/ {
    var indexOfToolbar/*:int*/ = this.floatingToolbars.indexOf(toolbar);
    if (indexOfToolbar !== -1) {
      this.floatingToolbars.splice(indexOfToolbar, 1);
    }
  }/*

  private*/ function addTbar(toolbar/*:FloatingToolbar*/)/*:void*/ {
    if (this.floatingToolbars.indexOf(toolbar) < 0) {
      this.floatingToolbars.push(toolbar);
      toolbar.editingComponentMinHeight = this.getEditingComponentMinHeightForToolbar$78in();
      this.updateToolbarProperties$78in();
    }
    this.mun(toolbar, "afterlayout",AS3.bind( this,"addTbar$78in"));
  }/*

  private*/ function getEditingComponentMinHeightForToolbar()/*:Number*/ {
    return this.getHeight() * 2/3;
  }/*

  private static*/ function getEditingComponentByToolbar$static(toolbar/*:Toolbar*/)/*:Component*/ {
    return AS3.as( toolbar.ownerCt.itemCollection.get(0),  Ext.Component);
  }/*

  private*/ function getScrollDistance()/*:Number*/ {
    return this.getEl().dom.scrollTop;
  }/*

  private*/ function documentFormScrolled()/*:void*/ {
    for (var i/*:Number*/ = 0; i < this.floatingToolbars.length; i++) {
      var toolbar/*:FloatingToolbar*/ = this.floatingToolbars[i];
      if (toolbar.minScrollDistance < toolbar.maxScrollDistance) {
        var scrollDistance/*:Number*/ = this.getScrollDistance$78in();

        if (scrollDistance > toolbar.minScrollDistance && scrollDistance < toolbar.maxScrollDistance) {
          // the toolbar gets fixed at the viewport
          toggleFloating$static(toolbar, true, true, getGlobalTop$static(this), getGlobalLeft$static(toolbar));

        } else if (scrollDistance >= toolbar.maxScrollDistance && scrollDistance < toolbar.maxScrollDistance + toolbar.getHeight()) {
          // the toolbar still floats, but moves upwards if the documentForm keeps scrolling
          toggleFloating$static(toolbar, false, true, toolbar.initialTopValue - toolbar.bottomOffset + getEditingComponentByToolbar$static(toolbar).getHeight(), toolbar.initialLeftValue);

        } else {
          // the toolbar does not float anymore
          toggleFloating$static(toolbar, false, false, toolbar.initialTopValue, toolbar.initialLeftValue);
        }
      } else {
        // the toolbar does not float
        toggleFloating$static(toolbar, false, false, toolbar.initialTopValue, toolbar.initialLeftValue);
      }
    }
  }/*

  private static*/ function toggleFloating$static(toolbar/*:FloatingToolbar*/, newFixed/*:Boolean*/, newFloating/*:Boolean*/, top/*:Number*/, left/*:Number*/)/*:void*/ {
    setCssClass$static(toolbar, toolbar.FLOATING_TOOLBAR_POSITION_CLS, newFixed);
    setCssClass$static(toolbar, toolbar.FLOATING_TOOLBAR_SHADOW_CLS, newFloating);
    setToolbarPosition$static(toolbar, top, left);

    if (newFixed) {
      if (!toolbar.toolbarIsFloating) {
        toolbar.toolbarIsFloating = true;
      }
    } else {
      if (toolbar.toolbarIsFloating) {
        toolbar.toolbarIsFloating = false;
      }
    }
  }/*

  private static*/ function setCssClass$static(toolbar/*:Toolbar*/, className/*:String*/, add/*:Boolean*/)/*:void*/ {
    // add a className css class if add equals true. Remove the class if add equals false
    if (toolbar.hasCls(className) && !add) {
      toolbar.removeCls(className);
    } else if (!toolbar.hasCls(className) && add) {
      toolbar.addCls(className);
    }
  }/*

  private static*/ function getGlobalLeft$static(component/*:Component*/)/*:Number*/ {
    return component.getEl() === undefined ? 0 : component.getEl().getLeft();
  }/*

  private static*/ function getGlobalTop$static(component/*:Component*/)/*:Number*/ {
    return component.getEl() === undefined ? 0 : component.getEl().getTop();
  }/*

  private*/ function calculateNonFloatingGlobalPositions()/*:void*/ {
    for (var i/*:Number*/ = 0; i < this.floatingToolbars.length; i++) {
      var toolbar/*:FloatingToolbar*/ = this.floatingToolbars[i];
      if (toolbar.toolbarIsFloating) {
        // in this case we cannot use the current scrollbar position because we changed its top and left values
        toolbar.nonFloatingToolbarGlobalTopValue = getGlobalTop$static(getEditingComponentByToolbar$static(toolbar)) - toolbar.verticalOffsetToEditingComponent;
        toolbar.nonFloatingToolbarGlobalLeftValue = getGlobalLeft$static(getEditingComponentByToolbar$static(toolbar)) - toolbar.horizontalOffsetToEditingComponent;
      } else {
        toolbar.nonFloatingToolbarGlobalTopValue = getGlobalTop$static(toolbar);
        toolbar.nonFloatingToolbarGlobalLeftValue = getGlobalLeft$static(toolbar);
      }
    }
  }/*

  private static*/ function setToolbarPosition$static(toolbar/*:Toolbar*/, top/*:Number*/, left/*:Number*/)/*:void*/ {
    if (toolbar.getEl() !== undefined) {
      toolbar.getEl().dom.style.top = top + "px";
      toolbar.getEl().dom.style.left = left + "px";
    }
  }/*

  private*/ function calculateScrollDistances()/*:Number*/ {
    for (var i/*:Number*/ = 0; i < this.floatingToolbars.length; i++) {
      var toolbar/*:FloatingToolbar*/ = this.floatingToolbars[i];
      // Calculate the scroll range. If minScrollDistance is reached, the toolbar will start floating.
      toolbar.minScrollDistance = this.getScrollDistance$78in() + toolbar.nonFloatingToolbarGlobalTopValue - getGlobalTop$static(this);
      // If the component is big enough, maxScrollDistance will be calculated. The toolbar will stop floating when
      // scrolling reaches this point.
      if (getEditingComponentByToolbar$static(toolbar) && getEditingComponentByToolbar$static(toolbar).getEl() && getEditingComponentByToolbar$static(toolbar).getHeight() > toolbar.editingComponentMinHeight) {
        toolbar.maxScrollDistance = this.getScrollDistance$78in() + getGlobalTop$static(getEditingComponentByToolbar$static(toolbar)) + getEditingComponentByToolbar$static(toolbar).getHeight() - toolbar.getHeight() - getGlobalTop$static(this) - toolbar.bottomOffset;
      } else {
        // no floating
        toolbar.maxScrollDistance = toolbar.minScrollDistance;
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: FloatingToolbarContainerBase$,
      super$78in: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      updateToolbarProperties$78in: updateToolbarProperties,
      collectFloatingToolbars$78in: collectFloatingToolbars,
      addFloatingToolbars$78in: addFloatingToolbars,
      listenToToolbarRemoval$78in: listenToToolbarRemoval,
      checkToolbar$78in: checkToolbar,
      addTbar$78in: addTbar,
      getEditingComponentMinHeightForToolbar$78in: getEditingComponentMinHeightForToolbar,
      getScrollDistance$78in: getScrollDistance,
      documentFormScrolled$78in: documentFormScrolled,
      calculateNonFloatingGlobalPositions$78in: calculateNonFloatingGlobalPositions,
      calculateScrollDistances$78in: calculateScrollDistances,
      requires: [
        "Ext.Component",
        "Ext.container.Container"
      ],
      uses: ["com.coremedia.ui.components.FloatingToolbar"]
    };
});
