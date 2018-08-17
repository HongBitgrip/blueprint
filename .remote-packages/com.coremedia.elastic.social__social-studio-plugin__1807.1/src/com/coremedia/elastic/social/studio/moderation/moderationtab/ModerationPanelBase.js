Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase", function(ModerationPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab {

import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.layout.container.CardLayout;
import ext.panel.Panel;
import ext.util.MixedCollection;

public class ModerationPanelBase extends Panel {
  protected static const STATUS_BAR_ID:String = "cm-elastic-social-layout-statusbar";
  protected static const EMPTY_DETAIL_VIEW_ID:String = "cm-elastic-social-empty-details-view";
  protected static const CARD_LAYOUT_CONTAINER_ID:String = "switching-view-container";
  public static var USER_PROFILE_VIEW_ITEM_ID:String = "com-coremedia-elastic-social-studio-model-impl-UserImpl";
  public static var COMMENT_VIEW_ITEM_ID:String = "com-coremedia-elastic-social-studio-model-impl-CommentImpl";
  public static var REVIEW_VIEW_ITEM_ID:String = "com-coremedia-elastic-social-studio-model-impl-ReviewImpl";

  protected static const MODERATION_COMMENT_RICHTEXT_AREA_ID:String = "cm-elastic-social-moderation-comment-richtext-area";
  protected static const MODERATION_REVIEW_RICHTEXT_AREA_ID:String = "cm-elastic-social-moderation-review-richtext-area";

  private static const*/var EMPTY_CONTRIBUTION_TYPE$static/*:String*/ = "com-coremedia-elastic-social-studio-model-impl-EMPTY";/*

  private var displayedValueExpression:ValueExpression;
  private var moderation:Moderation;
  private var currentContributionViewItemId:String =*/function currentContributionViewItemId_(){this.currentContributionViewItemId$fflE=( EMPTY_CONTRIBUTION_TYPE$static);}/*;
  private var emptyDetailView:Container;
  private var viewCache:MixedCollection =*/function viewCache_(){this.viewCache$fflE=( new Ext.util.MixedCollection());}/*;
  private var switchingLayoutContainer:Container;

  public*/ function ModerationPanelBase$(config/*:ModerationPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$fflE(config);currentContributionViewItemId_.call(this);viewCache_.call(this);;
    this.moderation$fflE = AS3.getBindable(config,"moderation");
    this.displayedValueExpression$fflE = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
            this.moderation$fflE.getModerationContributionAdministration());
    this.viewCache$fflE.add(EMPTY_CONTRIBUTION_TYPE$static, this.getEmptyDetailView$fflE());

    this.mon(this.getSwitchingLayoutContainer$fflE(), "afterrender",AS3.bind( this,"cardLayoutContainerRendered"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.displayedValueExpression$fflE.removeChangeListener(AS3.bind(this,"switchContentComponent$fflE"));
  }/*

  private*/ function switchContentComponent()/*:void*/ {
    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = this.moderation$fflE.getModerationContributionAdministration();

    var listEntryCount/*:**/ = (moderationContributionAdministration.getModeratedItems() ? moderationContributionAdministration.getModeratedItems().length : 0);
    var oldContributionViewItemId/*:String*/ = this.currentContributionViewItemId$fflE;

    if (moderationContributionAdministration.hasDisplayed()) {
      this.currentContributionViewItemId$fflE = moderationContributionAdministration.getDisplayed()["$className"].toString();

    } else if (listEntryCount === 0) {
      this.currentContributionViewItemId$fflE = EMPTY_CONTRIBUTION_TYPE$static;
    }

    // the class name is used as itemId as well but needs to be without "."
    this.currentContributionViewItemId$fflE = this.currentContributionViewItemId$fflE.replace(/\./g, "-");

    if (oldContributionViewItemId !== this.currentContributionViewItemId$fflE) {
      this.switchDetailView$fflE(oldContributionViewItemId, this.currentContributionViewItemId$fflE);
    }
  }/*

  private*/ function switchDetailView(oldContributionViewItemId/*:String*/, newContributionViewItemId/*:String*/)/*:void*/ {
    deactivate$static(this.getDetailView$fflE(oldContributionViewItemId));

    this.setActiveItemToCardLayout$fflE(this.getDetailView$fflE(newContributionViewItemId));
    var newView/*:Container*/ = this.getActiveItemFromCardLayout$fflE();
    this.activate$fflE(newView);
  }/*

  private*/ function getDetailView(contributionViewItemId/*:String*/)/*:Container*/ {var this$=this;
    var cacheKey/*:String*/ = contributionViewItemId.replace(/\./g, "-");
    if (!this.viewCache$fflE.getByKey(cacheKey)) {
      this.getSwitchingLayoutContainer$fflE().itemCollection.each(function (item/*:**/, index/*:Number*/, length/*:Number*/)/*:void*/ {
        if (cacheKey === item.itemId) {
          this$.viewCache$fflE.add(cacheKey,AS3.as( item,  Ext.container.Container));
        }
      });
    }

    return AS3.as( this.viewCache$fflE.get(cacheKey),  Ext.container.Container);
  }/*

  private*/ function getSwitchingLayoutContainer()/*:Container*/ {
    if (!this.switchingLayoutContainer$fflE) {
      this.switchingLayoutContainer$fflE =AS3.as( this.getComponent(ModerationPanelBase.CARD_LAYOUT_CONTAINER_ID),  Ext.container.Container);
    }
    return this.switchingLayoutContainer$fflE;
  }/*

  private*/ function setActiveItemToCardLayout(item/*:Container*/)/*:void*/ {
    (AS3.cast(Ext.layout.container.Card,this.getSwitchingLayoutContainer$fflE().getLayout())).setActiveItem(item);
  }/*

  private*/ function getActiveItemFromCardLayout()/*:Container*/ {
    return AS3.as( (AS3.cast(Ext.layout.container.Card,this.getSwitchingLayoutContainer$fflE().getLayout())).getActiveItem(),  Ext.container.Container);
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


  private*/ function getEmptyDetailView()/*:Container*/ {
    if (!this.emptyDetailView$fflE) {
      this.emptyDetailView$fflE =AS3.as( this.getSwitchingLayoutContainer$fflE().getComponent(ModerationPanelBase.EMPTY_DETAIL_VIEW_ID),  Ext.container.Container);
    }

    return this.emptyDetailView$fflE;
  }/*

  protected*/ function cardLayoutContainerRendered()/*:void*/ {var this$=this;
    this.mon(this.getSwitchingLayoutContainer$fflE(), "afterlayout", function ()/*:void*/ {
      this$.displayedValueExpression$fflE.addChangeListener(AS3.bind(this$,"switchContentComponent$fflE"));
      this$.switchContentComponent$fflE();
    }, null, {single: true});
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      displayedValueExpression$fflE: null,
      moderation$fflE: null,
      emptyDetailView$fflE: null,
      switchingLayoutContainer$fflE: null,
      constructor: ModerationPanelBase$,
      super$fflE: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      switchContentComponent$fflE: switchContentComponent,
      switchDetailView$fflE: switchDetailView,
      getDetailView$fflE: getDetailView,
      getSwitchingLayoutContainer$fflE: getSwitchingLayoutContainer,
      setActiveItemToCardLayout$fflE: setActiveItemToCardLayout,
      getActiveItemFromCardLayout$fflE: getActiveItemFromCardLayout,
      activate$fflE: activate,
      getEmptyDetailView$fflE: getEmptyDetailView,
      cardLayoutContainerRendered: cardLayoutContainerRendered,
      statics: {
        STATUS_BAR_ID: "cm-elastic-social-layout-statusbar",
        EMPTY_DETAIL_VIEW_ID: "cm-elastic-social-empty-details-view",
        CARD_LAYOUT_CONTAINER_ID: "switching-view-container",
        USER_PROFILE_VIEW_ITEM_ID: "com-coremedia-elastic-social-studio-model-impl-UserImpl",
        COMMENT_VIEW_ITEM_ID: "com-coremedia-elastic-social-studio-model-impl-CommentImpl",
        REVIEW_VIEW_ITEM_ID: "com-coremedia-elastic-social-studio-model-impl-ReviewImpl",
        MODERATION_COMMENT_RICHTEXT_AREA_ID: "cm-elastic-social-moderation-comment-richtext-area",
        MODERATION_REVIEW_RICHTEXT_AREA_ID: "cm-elastic-social-moderation-review-richtext-area"
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Card",
        "Ext.panel.Panel",
        "Ext.util.MixedCollection",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.Activatable"
      ]
    };
});
