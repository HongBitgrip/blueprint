Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.ConditionalFilterPanelBase", function(ConditionalFilterPanelBase) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

/**
 * The base class for conditional FilterPanels.
 *
 * Subclasses must override isApplicable() and doBuildQuery().
 * If isApplicable() returns false, the filter is disabled and invisible.
 * doBuildQuery corresponds to the superclass's buildQuery, but is
 * only invoked when isApplicable() returns true.
 * /
public class ConditionalFilterPanelBase extends FilterPanel {
  private var visibilityExpression:ValueExpression;

  /**
   * Do not call directly. Rather, create a subclass of FilterPanel as described
   * in that class and instantiate that subclass.
   *
   * @param config the config object
   * /
  public*/ function ConditionalFilterPanelBase$(config/*:ConditionalFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$tLci(config);
    this.visibilityExpression$tLci = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isApplicable"));
    this.visibilityExpression$tLci.addChangeListener(AS3.bind(this,"updateVisibility$tLci"));
    this.updateVisibility$tLci();
  }/*

  /**
   * Return whether this filter is applicable wrt. to the current state of Studio.
   * /
  public*/ function isApplicable()/*:Boolean*/ {
    throw new AS3.Error("isApplicable() must be overridden in subclasses");
  }/*

  /**
   * Checks isApplicable() and eventually invokes doBuildQuery().
   * /
  override public*/ function buildQuery()/*:String*/ {
    return this.isApplicable() ? this.doBuildQuery() : null;
  }/*

  /**
   * Build the actual query.
   *
   * @see FilterPanel#buildQuery()
   * /
  public*/ function doBuildQuery()/*:String*/ {
    throw new AS3.Error("doBuildQuery() must be overridden in subclasses");
  }/*

  private*/ function updateVisibility()/*:void*/ {
    var visible/*:Boolean*/ = this.visibilityExpression$tLci.getValue();
    if (visible === undefined) {
      return;
    }
    if (visible) {
      this.show();
    } else  {
      this.hide();
      this.resetFilter();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      visibilityExpression$tLci: null,
      constructor: ConditionalFilterPanelBase$,
      super$tLci: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      isApplicable: isApplicable,
      buildQuery: buildQuery,
      doBuildQuery: doBuildQuery,
      updateVisibility$tLci: updateVisibility,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
