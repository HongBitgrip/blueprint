Ext.define("com.coremedia.ui.layouts.MultiItemSplitterBase", function(MultiItemSplitterBase) {/*package com.coremedia.ui.layouts {
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.panel.Panel;
import ext.resizer.Splitter;
import ext.util.Region;

import js.HTMLElement;

public class MultiItemSplitterBase extends Splitter {

  /**
   * The mode determines the directions into which the splitter acts
   * as a multi-item splitter.
   *
   * In mode '0' the splitter acts as multi-item splitter into the negative direction (lower x or y values when dragging).
   * It acts as a normal splitter into the positive direction (just resizing the adjacent component).
   *
   * In mode '1' the splitter acts as multi-item splitter into both directions.
   *
   * In mode '2' (default) the splitter acts as multi-item splitter into the positive direction (higher x or y vsalues when dragging).
   * It acts as a normal splitter into the negative direction (just resizing the adjacent component).
   *
   * /
  public var mode:int = 2;

  /**
   * Hide the splitter if the previous component is hidden.
   * /
  public var hideOnPrevCompHidden:Boolean = false;

  /**
   * Hide the splitter if the next component is hidden.
   * /
  public var hideOnNextCompHidden:Boolean = false;

  //noinspection JSFieldCanBeLocal
  private const DEFAULT_MIN_VALUE:int = 100;
  //noinspection JSFieldCanBeLocal
  private const HORIZONTAL_DIRECTION:String = "horizontal";

  public static const RESIZE_PERFORMED_EVENT:String = "resizePerformed";

  public native function get previousCmpFlex():int;

  public native function get nextCmpFlex():int;

  public*/ function MultiItemSplitterBase$(config/*:MultiItemSplitter = null*/) {if(arguments.length<=0)config=null;

    var splitterTrackerConfig/*:Object*/ = {
      onBeforeStart:AS3.bind( this,"onBeforeStart$I5nR"),
      calculateConstrainRegion:AS3.bind( this,"calculateConstrainRegion$I5nR"),
      performResize:AS3.bind( this,"performResize$I5nR")
    };

    config.tracker = splitterTrackerConfig;

    this.super$I5nR(config);

    //TODO: EXT6_API
    this['onTargetCollapse'] = Ext.emptyFn;
  }/*

  override public*/ function getState()/*:Object*/ {
    var state/*:Object*/ = {};

    if (this.previousSibling() && this.nextSibling()) {
      state.previousCmpFlex = this.getCompValue$I5nR(this.previousSibling());
      state.nextCmpFlex = this.getCompValue$I5nR(this.nextSibling());
    }

    return state;
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.resizer.Splitter.prototype.afterRender.call(this);

    AS3.getBindable(this,"stateful","DUMMY") && this.doApplyState$I5nR();

    //TODO: EXT6_API
    this['onTargetExpand']();

    // Correct min values after resizing the parent container
    this.mon(this.up(), "resize", function ()/*:void*/ {
      this$.correctValues$I5nR();
      this$.correctMinValues$I5nR();
    });

    // Correct min values after expanding one of the siblings
    this.previousSibling() && this.mon(this.previousSibling(), "expand",AS3.bind( this,"correctMinValues$I5nR"));
    this.nextSibling() && this.mon(this.nextSibling(), "expand",AS3.bind( this,"correctMinValues$I5nR"));

    // Correct min values after showing one of the siblings
    // BUT: Only after the parent container was already layouted once,
    // otherwise unnecessary min values are applied because components
    // have width/height 0 in hidden state.
    this.mon(this.up(), "afterlayout", function ()/*:void*/ {
      this$.previousSibling() && this$.mon(this$.previousSibling(), "show",AS3.bind( this$,"correctMinValues$I5nR"));
      this$.nextSibling() && this$.mon(this$.nextSibling(), "show",AS3.bind( this$,"correctMinValues$I5nR"));
    }, null, {single:true});

    if (this.hideOnPrevCompHidden) {
      var prevComp/*:Component*/ = this.up().getComponent(this.up().itemCollection.indexOf(this) - 1);
      if (prevComp) {
        this.handleHiddenStateDependingOnComp$I5nR(prevComp);
      }
    }

    if (this.hideOnNextCompHidden) {
      var nextComp/*:Component*/ = this.up().getComponent(this.up().itemCollection.indexOf(this) + 1);
      if (nextComp) {
        this.handleHiddenStateDependingOnComp$I5nR(nextComp);
      }
    }
  }/*

  private*/ function doApplyState()/*:void*/ {var this$=this;
    if (this.previousCmpFlex
            && this.previousSibling()) {
      this.previousSibling().flex = this.previousCmpFlex;
    }

    if (this.nextCmpFlex
            && this.nextSibling()) {
      this.nextSibling().flex = this.nextCmpFlex;
    }

    // invoke later to minimize layout runs
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
      if (this$.destroyed) {
        return;
      }
      var parent/*:Container*/ = this$.up();
      if (parent) {
        parent.updateLayout();
      }
      else {
        com.coremedia.ui.logging.Logger.error("THERE IS NO UP for: " + this);
      }
    });
  }/*

  private*/ function handleHiddenStateDependingOnComp(comp/*:Component*/)/*:void*/ {
    comp.hidden && this.hide();
    this.mon(comp, "hide",AS3.bind( this,"hide"));
    this.mon(comp, "show",AS3.bind( this,"showAndCorrectValues$I5nR"));
  }/*

  private*/ function showAndCorrectValues()/*:void*/ {
    this.show();
    com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"correctValues$I5nR"));
  }/*

  private*/ function onBeforeStart(evt/*:Event*/)/*:Object*/ {
    var collapseEl/*:Element*/ = this.tracker.getSplitter().collapseEl;
    var target/*:HTMLElement*/ = evt.getTarget();
    var box/*:Object*/;

    if (!this.previousSibling() || !this.nextSibling()) {
      return false;
    }

    if (collapseEl && target === collapseEl.dom) {
      return false;
    }
    /*
     is there any situation where to disable this multisplitter(-tracker)? e.g. if all components(or all but one) in the sourrounding boxLayout are collapsed?
     behavior of standard Splitter(-Tracker):
     // SplitterTracker is disabled if any of its adjacents are collapsed.
     if (nextCmp.collapsed || prevCmp.collapsed) {
     return false;
     }
     */
    this.tracker.prevBox = this.previousSibling().getEl().getBox();
    this.tracker.nextBox = this.nextSibling().getEl().getBox();
    this.tracker.constrainTo = box = this.tracker.calculateConstrainRegion();

    if (!box) {
      return false;
    }

    return box;
  }/*

  private*/ function correctValues()/*:void*/ {var this$=this;
    var allItemsValue/*:int*/ = 0;

    this.up().itemCollection.each(function (comp/*:Component*/)/*:void*/ {
      allItemsValue = allItemsValue + this$.getCompValue$I5nR(comp);
    });

    if (allItemsValue > this.getCompValue$I5nR(this.up())) {
      var difference/*:Number*/ = allItemsValue - this.getCompValue$I5nR(this.up());
      this.performResize$I5nR(null, this.orientation === this.HORIZONTAL_DIRECTION$I5nR ? [0, difference] : [difference, 0], true);
    }
  }/*

  private*/ function correctMinValues()/*:void*/ {var this$=this;
    this.up().itemCollection.each(function (comp/*:Component*/)/*:void*/ {
      compIsFlexed$static(comp) && (comp.flex = this$.getCompValue$I5nR(comp));
    });
    var neededCorrection/*:Boolean*/ = this.correctMinValuesForSplitterIndex$I5nR(-1);
    neededCorrection && this.up().updateLayout();
  }/*

  private*/ function calculateConstrainRegion()/*:Region*/ {
    var container/*:Container*/ = this.up();

    var splitterIndex/*:int*/ = container.items.indexOf(this);

    var maxAbove/*:int*/;
    var maxBelow/*:int*/;

    if (this.allOthersAboveCollapsedOrHidden$I5nR(splitterIndex)) {
      maxBelow = this.orientation === this.HORIZONTAL_DIRECTION$I5nR
              ? this.previousSibling().getEl().getBox()['bottom']
              : this.previousSibling().getEl().getBox()['right'];
    } else {
      if (this.mode > 1) {
        maxBelow = (this.orientation === this.HORIZONTAL_DIRECTION$I5nR
                        ? this.previousSibling().getEl().getBox()['y']
                        : this.previousSibling().getEl().getBox()['x'])
                + this.getCompMinValue$I5nR(this.previousSibling());
      } else {
        maxBelow = this.orientation === this.HORIZONTAL_DIRECTION$I5nR
                ? container.getComponent(0).getEl().getBox()['y']
                : container.getComponent(0).getEl().getBox()['x'];
        for (var i/*:int*/ = 0; i < splitterIndex; i++) {
          var comp/*:Component*/ = container.getComponent(i);
          if (AS3.is(comp,  Ext.resizer.Splitter)) {
            maxBelow = maxBelow + this.getCompValue$I5nR(comp);
          } else {
            maxBelow = maxBelow + this.getCompMinValue$I5nR(comp);
          }
        }
      }
    }

    if (this.allOthersBelowCollapsedOrHidden$I5nR(splitterIndex)) {
      maxAbove = this.orientation === this.HORIZONTAL_DIRECTION$I5nR
              ? this.nextSibling().getEl().getBox()['y']
              : this.nextSibling().getEl().getBox()['x'];
    } else {
      if (this.mode < 1) {
        maxAbove = (this.orientation === this.HORIZONTAL_DIRECTION$I5nR
                        ? this.nextSibling().getEl().getBox()['bottom']
                        : this.nextSibling().getEl().getBox()['right'])
                - this.getCompMinValue$I5nR(this.nextSibling());
      } else {
        maxAbove = this.orientation === this.HORIZONTAL_DIRECTION$I5nR
                ? container.getComponent(container.itemCollection.getCount() - 1).getEl().getBox()['bottom']
                : container.getComponent(container.itemCollection.getCount() - 1).getEl().getBox()['right'];
        for (i = splitterIndex + 1; i < container.itemCollection.getCount(); i++) {
          comp = container.getComponent(i);
          if (AS3.is(comp,  Ext.resizer.Splitter)) {
            maxAbove = maxAbove - this.getCompValue$I5nR(comp);
          } else {
            maxAbove = maxAbove - this.getCompMinValue$I5nR(comp);
          }
        }
      }
    }

    return this.orientation === this.HORIZONTAL_DIRECTION$I5nR
            ? new Ext.util.Region(maxBelow, this.getEl().getBox()['right'], maxAbove, this.getEl().getBox()['x'])
            : new Ext.util.Region(this.getEl().getBox()['y'], maxAbove, this.getEl().getBox()['bottom'], maxBelow);
  }/*

  private static*/ function compIsFlexed$static(comp/*:Component*/)/*:Boolean*/ {
    return comp.flex !== undefined;
  }/*

  private*/ function allOthersBelowCollapsedOrHidden(index/*:int*/)/*:Boolean*/ {
    var container/*:Container*/ = this.up();

    for (var i/*:int*/ = 0; i < index; i++) {
      var comp/*:Component*/ = container.getComponent(i);
      if (AS3.is(comp,  Ext.resizer.Splitter)) {
        continue;
      }
      //TODO: EXT6_API
      if (!comp['collapsed'] && !comp.hidden) {
        return false;
      }

    }

    return true;
  }/*

  private*/ function allOthersAboveCollapsedOrHidden(index/*:int*/)/*:Boolean*/ {
    var container/*:Container*/ = this.up();

    for (var i/*:int*/ = index; i < container.itemCollection.getCount(); i++) {
      var comp/*:Component*/ = container.getComponent(i);
      if (AS3.is(comp,  Ext.resizer.Splitter)) {
        continue;
      }
      //TODO: EXT6_API
      if (!comp['collapsed'] && !comp.hidden) {
        return false;
      }
    }

    return true;
  }/*

  private*/ function getCompValue(comp/*:Component*/)/*:int*/ {
    if (!comp.rendered) {
      return 0;
    }
    return (this.orientation === this.HORIZONTAL_DIRECTION$I5nR)
            ? comp.getHeight()
            : comp.getWidth();
  }/*

  private*/ function getCompMinValue(comp/*:Component*/)/*:Number*/ {
    if (comp.hidden) {
      return 0;
    }

    if (AS3.is(comp,  Ext.panel.Panel)) {
      var panel/*:Panel*/ =AS3.as( comp,  Ext.panel.Panel);
      if (AS3.getBindable(panel,"collapsed","DUMMY")) {
        var collapseDirection/*:String*/ = panel.collapseDirection;
        var header/*:Component*/ = panel.getDockedItems("header[dock=" + collapseDirection + "]")[0];
        return this.orientation === this.HORIZONTAL_DIRECTION$I5nR
                ? header.getHeight()
                : header.getWidth();
      }
    }

    if (this.orientation === this.HORIZONTAL_DIRECTION$I5nR) {
      //TODO: EXT6_API
      return (comp['height'] !== 'auto' && !compIsFlexed$static(comp) ? comp['height'] : null) || AS3.getBindable(comp,"minHeight","DUMMY") || this.DEFAULT_MIN_VALUE$I5nR;
    } else {
      //TODO: EXT6_API
      return (comp['width'] !== 'auto' && !compIsFlexed$static(comp) ? comp['width'] : null) || AS3.getBindable(comp,"minWidth","DUMMY") || this.DEFAULT_MIN_VALUE$I5nR;
    }

  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function performResize(evt/*:Event*/, offset/*:Array*/, noSplitter/*:Boolean = false*/)/*:void*/ {if(arguments.length<=2)noSplitter=false;
    var container/*:Container*/ = this.up();

    var splitterIndex/*:int*/ = noSplitter ? -1 : container.itemCollection.indexOf(this);

    var totalFlexBelow/*:int*/ = 0;
    var totalFlexAbove/*:int*/ = 0;
    var nearestExpandedFlexedBelow/*:Component*/ = null;
    var nearestExpandedFlexedAbove/*:Component*/ = null;

    for (var i/*:int*/ = 0; i < container.itemCollection.getCount(); i++) {
      var comp/*:Component*/ = container.getComponent(i);

      if (!compIsFlexed$static(comp) || comp.hidden) {
        continue;
      }

      comp.flex = this.getCompValue$I5nR(comp);

      if (container.itemCollection.indexOf(comp) < splitterIndex) {
        totalFlexBelow = totalFlexBelow + comp.flex;
        //TODO: EXT6_API
        !comp['collapsed'] && !comp.hidden && (nearestExpandedFlexedBelow = comp);
      } else if (container.itemCollection.indexOf(comp) > splitterIndex) {
        totalFlexAbove = totalFlexAbove + comp.flex;
        //TODO: EXT6_API
        !nearestExpandedFlexedAbove && !comp['collapsed'] && !comp.hidden && (nearestExpandedFlexedAbove = comp);
      }
    }

    for (i = 0; i < container.itemCollection.getCount(); i++) {
      comp = container.getComponent(i);

      if (!compIsFlexed$static(comp) || comp.hidden) {
        continue;
      }

      var theOffset/*:int*/ = this.orientation === this.HORIZONTAL_DIRECTION$I5nR ? offset[1] : offset[0];

      if (i < splitterIndex) {
        if (this.mode > 1) {
          if (comp === nearestExpandedFlexedBelow) {
            comp.flex = comp.flex + theOffset;
          }
        } else {
          comp.flex = Math.round(comp.flex + (theOffset * comp.flex / totalFlexBelow));
        }
      } else if (i > splitterIndex) {
        if (this.mode < 1) {
          if (comp === nearestExpandedFlexedAbove) {
            comp.flex = comp.flex - theOffset;
          }
        } else {
          comp.flex = Math.round(comp.flex - (theOffset * comp.flex / totalFlexAbove));
        }
      }
    }

    this.correctMinValuesForSplitterIndex$I5nR(splitterIndex);

    container.updateLayout();

    this.fireResizePerformedEvents$I5nR();
  }/*

  private*/ function correctMinValuesForSplitterIndex(splitterIndex/*:int*/)/*:Boolean*/ {
    var container/*:Container*/ = this.up();

    var minValuesCorrect/*:Boolean*/ = true;
    var minValuesNeededCorrection/*:Boolean*/ = false;

    do {
      minValuesCorrect = true;

      var totalAvailableSpaceAbove/*:int*/ = 0;
      var totalAvailableSpaceBelow/*:int*/ = 0;
      var totalNeededSpaceAbove/*:int*/ = 0;
      var totalNeededSpaceBelow/*:int*/ = 0;
      var availableSpaces/*:Object*/ = {};

      for (var i/*:int*/ = 0; i < container.itemCollection.getCount(); i++) {
        var comp/*:Component*/ = container.getComponent(i);

        if (!compIsFlexed$static(comp) || comp.hidden) {
          continue;
        }

        if (comp.flex < this.getCompMinValue$I5nR(comp)) {
          minValuesCorrect = false;
          minValuesNeededCorrection = true;

          if (i < splitterIndex) {
            totalNeededSpaceAbove = totalNeededSpaceAbove + this.getCompMinValue$I5nR(comp) - comp.flex;
          } else if (i > splitterIndex) {
            totalNeededSpaceBelow = totalNeededSpaceBelow + this.getCompMinValue$I5nR(comp) - comp.flex;
          }

          availableSpaces[comp.getId()] = 0;
          comp.flex = this.getCompMinValue$I5nR(comp);
        } else {
          if (i < splitterIndex) {
            totalAvailableSpaceAbove = totalAvailableSpaceAbove + comp.flex - this.getCompMinValue$I5nR(comp);
          } else if (i > splitterIndex) {
            totalAvailableSpaceBelow = totalAvailableSpaceBelow + comp.flex - this.getCompMinValue$I5nR(comp);
          }

          availableSpaces[comp.getId()] = comp.flex - this.getCompMinValue$I5nR(comp);
        }
      }

      if (!minValuesCorrect) {
        for (i = 0; i < container.itemCollection.getCount(); i++) {

          comp = container.getComponent(i);

          if (availableSpaces[comp.getId()] > 0) {
            if (i < splitterIndex && totalNeededSpaceAbove > 0) {
              comp.flex = Math.round(comp.flex - (totalNeededSpaceAbove * availableSpaces[comp.getId()] / totalAvailableSpaceAbove));
            } else if (i > splitterIndex && totalNeededSpaceBelow > 0) {
              comp.flex = Math.round(comp.flex - (totalNeededSpaceBelow * availableSpaces[comp.getId()] / totalAvailableSpaceBelow));
            }
          }
        }
      }
    } while (!minValuesCorrect);

    return minValuesNeededCorrection;
  }/*

  private*/ function fireResizePerformedEvents()/*:void*/ {
    this.up().query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.ui.layouts.MultiItemSplitter.xtype).build()).forEach(function (splitter/*:MultiItemSplitter*/)/*:void*/ {
      splitter.fireEvent(MultiItemSplitterBase.RESIZE_PERFORMED_EVENT);
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.resizer.Splitter",
      mode: 2,
      hideOnPrevCompHidden: false,
      hideOnNextCompHidden: false,
      DEFAULT_MIN_VALUE$I5nR: 100,
      HORIZONTAL_DIRECTION$I5nR: "horizontal",
      constructor: MultiItemSplitterBase$,
      super$I5nR: function() {
        Ext.resizer.Splitter.prototype.constructor.apply(this, arguments);
      },
      getState: getState,
      afterRender: afterRender,
      doApplyState$I5nR: doApplyState,
      handleHiddenStateDependingOnComp$I5nR: handleHiddenStateDependingOnComp,
      showAndCorrectValues$I5nR: showAndCorrectValues,
      onBeforeStart$I5nR: onBeforeStart,
      correctValues$I5nR: correctValues,
      correctMinValues$I5nR: correctMinValues,
      calculateConstrainRegion$I5nR: calculateConstrainRegion,
      allOthersBelowCollapsedOrHidden$I5nR: allOthersBelowCollapsedOrHidden,
      allOthersAboveCollapsedOrHidden$I5nR: allOthersAboveCollapsedOrHidden,
      getCompValue$I5nR: getCompValue,
      getCompMinValue$I5nR: getCompMinValue,
      performResize$I5nR: performResize,
      correctMinValuesForSplitterIndex$I5nR: correctMinValuesForSplitterIndex,
      fireResizePerformedEvents$I5nR: fireResizePerformedEvents,
      statics: {RESIZE_PERFORMED_EVENT: "resizePerformed"},
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "Ext.resizer.Splitter",
        "Ext.util.Region",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.ui.layouts.MultiItemSplitter",
        "com.coremedia.ui.util.createComponentSelector"
      ]
    };
});
