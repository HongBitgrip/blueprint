Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase", function(ArchiveTabPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.archive {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.layout.container.CardLayout;
import ext.panel.Panel;

public class ArchiveTabPanelBase extends Panel {
  public static const ID:String = "cm-elastic-social-archive-tab";
  public static const ARCHIVE_COMMENT_RICHTEXT_AREA_ID:String = "cm-elastic-social-archive-comment-richtext-area";
  public static const ARCHIVE_REVIEW_RICHTEXT_AREA_ID:String = "cm-elastic-social-archive-review-richtext-area";

  protected static const ARCHIVED_ITEMS_VIEW_ID:String = "gridPanel";
  protected static const FILTER_PANEL_ITEM_ID:String = "filter-panel";
  protected static const ARCHIVED_SWITCHING_CONTAINER_ITEM_ID:String = "switching-container";
  protected static const EMPTY_DETAIL_VIEW_ITEM_ID:String = "empty-details-view";
  protected static const MULTI_COMMENT_DETAIL_VIEW_ITEM_ID:String = "multi-comment-detail-view";
  protected static const ARCHIVED_COMMENT_STATUS_HEADER_ITEM_ID:String = "cm-archive-status-header-view";

  [Bindable]
  public var moderation:Moderation;

  private var selectedArchiveContributionValueExpression:ValueExpression;
  private var switchingLayoutContainer:Panel;

  public*/ function ArchiveTabPanelBase$(config/*:ArchiveTabPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$sWyq(config);
    AS3.setBindable(this,"moderation" , AS3.getBindable(config,"moderation"));
  }/*

  override protected*/ function afterRender()/*:void*/ {
    this.getSelectedArchiveContributionValueExpression$sWyq().addChangeListener(AS3.bind(this,"switchDetailView$sWyq"));
    Ext.panel.Panel.prototype.afterRender.call(this);
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getSelectedArchiveContributionValueExpression$sWyq().removeChangeListener(AS3.bind(this,"switchDetailView$sWyq"));
    AS3.getBindable(this,"moderation").getArchiveContributionAdministration().stopPolling();
  }/*

  protected*/ function switchDetailViewOnInit()/*:void*/ {
    if (AS3.getBindable(this,"moderation").getArchiveContributionAdministration().getSelectedContribution()) {
      this.switchDetailView$sWyq(this.getSelectedArchiveContributionValueExpression$sWyq());
    }
  }/*

  /**
   * Handle the detail view switching based on the selected items ValueExpression.
   * @param source
   * /
  private*/ function switchDetailView(source/*:ValueExpression*/)/*:void*/ {
    var oldActiveItem/*:Container*/ = this.getActiveItemFromCardLayout$sWyq();
    var newActiveItemId/*:String*/;

    //noinspection JSMismatchedCollectionQueryUpdate
    var selectedItems/*:Array*/ =AS3.as( source.getValue(),  Array);

    // if there is ONE selected item, show the comment or review detail View
    if (selectedItems && selectedItems.length === 1) {
      var moderatedItem/*:ModeratedItem*/ = selectedItems[0];
      var target/*:Contribution*/ = moderatedItem.getTarget();
      newActiveItemId = target && target["$className"].toString().replace(/\./g, "-");
    }
    // if there are MORE THAN ONE items selected, show the multi comment view
     else if (selectedItems && selectedItems.length > 1) {
      newActiveItemId = ArchiveTabPanelBase.MULTI_COMMENT_DETAIL_VIEW_ITEM_ID;
    }
    // if there is nothing selected, show the empty view
    else {
      newActiveItemId = ArchiveTabPanelBase.EMPTY_DETAIL_VIEW_ITEM_ID;
    }

    this.activateDetailView$sWyq(oldActiveItem, newActiveItemId);
  }/*

  private*/ function getSelectedArchiveContributionValueExpression()/*:ValueExpression*/ {
    if (!this.selectedArchiveContributionValueExpression$sWyq) {
      this.selectedArchiveContributionValueExpression$sWyq = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, AS3.getBindable(this,"moderation").getArchiveContributionAdministration());
    }
    return this.selectedArchiveContributionValueExpression$sWyq;
  }/*


  private*/ function getSwitchingLayoutContainer()/*:Panel*/ {
    if (!this.switchingLayoutContainer$sWyq) {
      this.switchingLayoutContainer$sWyq =AS3.as( this.queryById(ArchiveTabPanelBase.ARCHIVED_SWITCHING_CONTAINER_ITEM_ID),  Ext.panel.Panel);
    }
    return this.switchingLayoutContainer$sWyq;
  }/*

  private*/ function activateDetailView(oldeActiveItem/*:Container*/, newActiveItemId/*:String*/)/*:void*/ {
    deactivate$static(oldeActiveItem);

    (AS3.cast(Ext.layout.container.Card,this.getSwitchingLayoutContainer$sWyq().getLayout())).setActiveItem(newActiveItemId);
    var newView/*:Container*/ = this.getActiveItemFromCardLayout$sWyq();
    this.activate$sWyq(newView);
  }/*

  private static*/ function deactivate$static(container/*:Container*/)/*:void*/ {
    if (container) {
      var activatable/*:Activatable*/ =AS3.as( container,  com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable);
      if (activatable) {
        activatable.deactivated();
      }
    }
  }/*

  private*/ function activate(container/*:Container*/)/*:void*/ {
    var activatable/*:Activatable*/ =AS3.as( container,  com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable);
    if (activatable) {
      activatable.activated(this);
    }
  }/*

  private*/ function getActiveItemFromCardLayout()/*:Container*/ {
    return AS3.as( (AS3.cast(Ext.layout.container.Card,this.getSwitchingLayoutContainer$sWyq().getLayout())).getActiveItem(),  Ext.container.Container);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      selectedArchiveContributionValueExpression$sWyq: null,
      switchingLayoutContainer$sWyq: null,
      constructor: ArchiveTabPanelBase$,
      super$sWyq: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      switchDetailViewOnInit: switchDetailViewOnInit,
      switchDetailView$sWyq: switchDetailView,
      getSelectedArchiveContributionValueExpression$sWyq: getSelectedArchiveContributionValueExpression,
      getSwitchingLayoutContainer$sWyq: getSwitchingLayoutContainer,
      activateDetailView$sWyq: activateDetailView,
      activate$sWyq: activate,
      getActiveItemFromCardLayout$sWyq: getActiveItemFromCardLayout,
      config: {moderation: null},
      statics: {
        ID: "cm-elastic-social-archive-tab",
        ARCHIVE_COMMENT_RICHTEXT_AREA_ID: "cm-elastic-social-archive-comment-richtext-area",
        ARCHIVE_REVIEW_RICHTEXT_AREA_ID: "cm-elastic-social-archive-review-richtext-area",
        ARCHIVED_ITEMS_VIEW_ID: "gridPanel",
        FILTER_PANEL_ITEM_ID: "filter-panel",
        ARCHIVED_SWITCHING_CONTAINER_ITEM_ID: "switching-container",
        EMPTY_DETAIL_VIEW_ITEM_ID: "empty-details-view",
        MULTI_COMMENT_DETAIL_VIEW_ITEM_ID: "multi-comment-detail-view",
        ARCHIVED_COMMENT_STATUS_HEADER_ITEM_ID: "cm-archive-status-header-view"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Card",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable"
      ]
    };
});
