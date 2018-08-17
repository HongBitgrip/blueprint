Ext.define("com.coremedia.cms.editor.sdk.premular.differencing.AbstractDiffComputation", function(AbstractDiffComputation) {/*package com.coremedia.cms.editor.sdk.premular.differencing {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.util.AsyncComputation;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.container.Container;
import ext.layout.container.CardLayout;
import ext.panel.Panel;

/**
 * A asynchronous computation that uses start and end objects
 * as parameters of a difference computation and that restricts
 * recomputations to times when the component displaying the
 * differences is visible.
 * /
public class AbstractDiffComputation {
  private var comp:Component;
  private var diffParametersValueExpression:ValueExpression;

  private var asyncComputation:AsyncComputation;

  private var lastDiffParameters:Object;

  public*/ function AbstractDiffComputation$(comp/*:Component*/, rawDiffParametersValueExpression/*:ValueExpression*/) {
    this.comp$fU6k = comp;

    this.asyncComputation$fU6k = new com.coremedia.ui.util.AsyncComputation(AS3.bind(this,"triggered$fU6k"));

    this.diffParametersValueExpression$fU6k = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"getDiffParameters$fU6k"), rawDiffParametersValueExpression);
    this.diffParametersValueExpression$fU6k.addChangeListener(AS3.bind(this,"diffParametersChanged"));
    this.diffParametersChanged();
  }/*

  protected*/ function diff(start/*:ContentObject*/, end/*:ContentObject*/, callback/*:Function*/)/*:void*/ {
    throw new AS3.Error("must be overridden in subclasses");
  }/*

  protected*/ function gatherDependencies(contentObject/*:ContentObject*/)/*:void*/ {
    throw new AS3.Error("must be overridden in subclasses");
  }/*

  private*/ function getDiffParameters(rawDiffParametersValueExpression/*:ValueExpression*/)/*:Object*/ {
    var rawDiffParameters/*:Object*/ = rawDiffParametersValueExpression.getValue();
    if (!rawDiffParameters) {
      return null;
    }

    if (!this.isComponentVisible()) {
      return null;
    }

    var start/*:ContentObject*/ = rawDiffParameters.start;
    this.gatherDependencies(start);
    var end/*:ContentObject*/ = rawDiffParameters.end;
    this.gatherDependencies(end);

    // Create new object to ensure that it changes and that the expression listener is
    // informed even for minor changes.
    return {
      start: start,
      end: end
    };
  }/*

  protected*/ function isComponentVisible()/*:Boolean*/ {
    var current/*:Component*/ = this.comp$fU6k;
    // Check each component in the component tree, because each component might
    // be invisible, hiding all of its children.
    while (current) {
      if (!current.rendered) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'afterrender');
        return false;
      }
      if (current.hidden) {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'show');
        return false;
      }
      com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'hide');
      if (AS3.is(current,  Ext.panel.Panel)) {
        if (AS3.getBindable(AS3.cast(Ext.panel.Panel,current),"collapsed","DUMMY")) {
          // A collapsed panel cannot show interesting information,
          // so that we consider it invisible.
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'expand');
          return false;
        }
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'collapse');
      }

      var next/*:Container*/ = current.up();
      if (next) {
        var layout/*:CardLayout*/ =AS3.as( next.getLayout(),  Ext.layout.container.Card);
        if (layout) {
          if (layout.getActiveItem() !== current) {
            // Another tab is visible.
            com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'activate');
            return false;
          }
          com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(current, 'deactivate');
        }
      }

      current = next;
    }
    return true;
  }/*

  internal*/ function diffParametersChanged()/*:void*/ {
    var diffParameters/*:Object*/ = this.diffParametersValueExpression$fU6k.getValue();
    var mayPostpone/*:Boolean*/ = com.coremedia.ui.util.ObjectUtils.compareObjects(diffParameters, this.lastDiffParameters$fU6k);
    this.asyncComputation$fU6k.trigger(mayPostpone ? 1000 : 20, mayPostpone, diffParameters);
    this.lastDiffParameters$fU6k = diffParameters;
  }/*

  private*/ function triggered(callback/*:Function*/)/*:void*/ {var this$=this;
    var diffParameters/*:Object*/ = this.diffParametersValueExpression$fU6k.getValue();
    if (!diffParameters) {
      this.diff(null, null, callback);
    } else {
      com.coremedia.ui.data.RemoteBeanUtil.flushAll(function ()/*:void*/ {
        var start/*:ContentObject*/ = getNormalizedContentObject$static(diffParameters.start);
        var end/*:ContentObject*/ = getNormalizedContentObject$static(diffParameters.end);
        this$.diff(start, end, callback);
      }, diffParameters.start, diffParameters.end);
    }
  }/*

  private static*/ function getNormalizedContentObject$static(start/*:ContentObject*/)/*:ContentObject*/ {
    if (AS3.is(start,  com.coremedia.cap.content.Content) && AS3.cast(com.coremedia.cap.content.Content,start).isCheckedIn()) {
      return AS3.cast(com.coremedia.cap.content.Content,start).getCheckedInVersion();
    }
    return start;
  }/*

  public*/ function getValue()/*:**/ {
    return this.asyncComputation$fU6k.getValue();
  }/*

  public*/ function dispose()/*:void*/ {
    this.diffParametersValueExpression$fU6k.removeChangeListener(AS3.bind(this,"diffParametersChanged"));
    this.asyncComputation$fU6k.dispose();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      comp$fU6k: null,
      diffParametersValueExpression$fU6k: null,
      asyncComputation$fU6k: null,
      lastDiffParameters$fU6k: null,
      constructor: AbstractDiffComputation$,
      diff: diff,
      gatherDependencies: gatherDependencies,
      getDiffParameters$fU6k: getDiffParameters,
      isComponentVisible: isComponentVisible,
      diffParametersChanged: diffParametersChanged,
      triggered$fU6k: triggered,
      getValue: getValue,
      dispose: dispose,
      requires: [
        "AS3.Error",
        "Ext.layout.container.Card",
        "Ext.panel.Panel",
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.AsyncComputation",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
