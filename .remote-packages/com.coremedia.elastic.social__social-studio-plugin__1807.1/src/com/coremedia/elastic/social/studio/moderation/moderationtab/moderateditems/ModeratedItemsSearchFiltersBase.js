Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsSearchFiltersBase", function(ModeratedItemsSearchFiltersBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems {
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter;
import com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.container.Container;
import ext.panel.Panel;

public class ModeratedItemsSearchFiltersBase extends Container {

  [Bindable]
  public var moderationContributionAdministration:ModerationContributionAdministration;

  private var inDefaultStateExpression:ValueExpression;

  public*/ function ModeratedItemsSearchFiltersBase$(config/*:ModeratedItemsSearchFilters = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$rUEN(config);

    this.itemCollection.each(function(component/*:Component*/)/*:void*/ {
      var searchFilter/*:SearchFilter*/ =AS3.as( component,  com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter);
      if (searchFilter) {
        AS3.getBindable(this$,"moderationContributionAdministration").addSearchFilter(searchFilter);
        this$.add(searchFilter);
      }
    });

    this.inDefaultStateExpression$rUEN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"isInDefaultState$rUEN"));
    this.inDefaultStateExpression$rUEN.addChangeListener(AS3.bind(this,"updateStyleClasses$rUEN"));
  }/*


  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Container.prototype.afterRender.call(this);
    this.updateStyleClasses$rUEN();
  }/*

  private*/ function updateStyleClasses()/*:void*/ {
    com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase.updateState(this.ownerCt, this.inDefaultStateExpression$rUEN.getValue());
  }/*

  private*/ function isInDefaultState()/*:Boolean*/ {
    return AS3.getBindable(this,"moderationContributionAdministration").areFiltersInDefaultState();
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"moderationContributionAdministration").clearSearchFilters();
    this.inDefaultStateExpression$rUEN.removeChangeListener(AS3.bind(this,"updateStyleClasses$rUEN"));

    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      inDefaultStateExpression$rUEN: null,
      constructor: ModeratedItemsSearchFiltersBase$,
      super$rUEN: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      updateStyleClasses$rUEN: updateStyleClasses,
      isInDefaultState$rUEN: isInDefaultState,
      beforeDestroy: beforeDestroy,
      config: {moderationContributionAdministration: null},
      requires: [
        "Ext.container.Container",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter",
        "com.coremedia.cms.editor.sdk.collectionview.search.SearchFiltersBase",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
