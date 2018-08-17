Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailViewBase", function(MultiCommentDetailViewBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.multicomment {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.readonly.MultiCommentReadOnlyItemPanel;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ExecuteEventually;

import ext.container.Container;
import ext.panel.Panel;

public class MultiCommentDetailViewBase extends Panel {
  protected static const READ_ONLY_CONTAINER_ITEM_ID:String = "read-only-container";
  protected static const READ_ONLY_ITEM_CONTAINER_ITEM_ID_PREFIX:String = "read-only-item-container_";

  private var abstractContributionAdministration:AbstractContributionAdministration;
  private var abstractContributionValueExpression:ValueExpression;
  private var readOnlyContainer:Container;

  public*/ function MultiCommentDetailViewBase$(config/*:MultiCommentDetailView = null*/) {if(arguments.length<=0)config=null;
    this.super$mIzY(config);
    this.abstractContributionAdministration$mIzY = AS3.getBindable(config,"abstractContributionAdministration");
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.panel.Panel.prototype.afterRender.call(this);
    this.getSelectedArchivedItemsVE().addChangeListener(AS3.bind(this,"updateView$mIzY"));
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.panel.Panel.prototype.onDestroy.call(this);
    this.getSelectedArchivedItemsVE().removeChangeListener(AS3.bind(this,"updateView$mIzY"));
  }/*

  /**
   * Remove all children from the readOnlyContainer and add the items
   * from the current selection.
   * /
  private*/ function updateView()/*:void*/ {var this$=this;
    var selectedItems/*:Array*/ = this.getSelectedArchivedItemsVE().getValue();
    this.getReadOnlyContainer$mIzY().removeAll();

    if (selectedItems) {
      // invalidate all comments before updating the view
      var executeEventually/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function()/*:void*/ {
        this$.addMultiCommentReadOnlyItems$mIzY(selectedItems);
      });
      selectedItems.forEach(function(item/*:ModeratedItem*/)/*:void*/ {
        executeEventually.delay();
        item.getTarget() && item.getTarget().invalidate(function()/*:void*/ {
          executeEventually.proceed();
        });
      });
      executeEventually.proceed();
    }
  }/*

  /**
   * Add new multiCommentReadOnlyItemPanels to the readOnlyContainer.
   *
   * @param selectedItems the current selection
   * /
  private*/ function addMultiCommentReadOnlyItems(selectedItems/*:Array*/)/*:void*/ {var this$=this;
    selectedItems.forEach(function(item/*:ModeratedItem*/, index/*:int*/)/*:void*/ {
      var comment/*:Comment*/ =AS3.as( item.getTarget(),  com.coremedia.elastic.social.studio.model.Comment);
      if (comment) {
        this$.addMultiCommentReadOnlyItem$mIzY(comment, item, index);
      }
    });
  }/*

  /**
   * Add a new multiCommentReadOnlyItemPanel to the readOnlyContainer.
   *
   * @param comment the current comment
   * @param item the ModeratedItem
   * @param index the current index
   * /
  private*/ function addMultiCommentReadOnlyItem(comment/*:Comment*/, item/*:ModeratedItem*/, index/*:int*/)/*:void*/ {
    var multiCommentReadOnlyItemPanelConfig/*:MultiCommentReadOnlyItemPanel*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.readonly.MultiCommentReadOnlyItemPanel,{});
    multiCommentReadOnlyItemPanelConfig.itemId = MultiCommentDetailViewBase.READ_ONLY_ITEM_CONTAINER_ITEM_ID_PREFIX + "" + index;
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"commentText" , comment.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.TEXT));
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"creationDate" , comment.getCreationDate());
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"authorName" , comment.getAuthorName());
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"attachments" , comment.getAttachments());
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"comment" , comment);
    AS3.setBindable(multiCommentReadOnlyItemPanelConfig,"moderatedItem" , item);
    this.getReadOnlyContainer$mIzY().add(multiCommentReadOnlyItemPanelConfig);
  }/*

  protected*/ function getSelectedArchivedItemsVE()/*:ValueExpression*/ {
    if (!this.abstractContributionValueExpression$mIzY) {
      this.abstractContributionValueExpression$mIzY = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, this.abstractContributionAdministration$mIzY);
    }

    return this.abstractContributionValueExpression$mIzY;
  }/*

  private*/ function getReadOnlyContainer()/*:Container*/ {
    if (!this.readOnlyContainer$mIzY) {
      this.readOnlyContainer$mIzY =AS3.as( this.queryById(MultiCommentDetailViewBase.READ_ONLY_CONTAINER_ITEM_ID),  Ext.container.Container);
    }
    return this.readOnlyContainer$mIzY;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      abstractContributionAdministration$mIzY: null,
      abstractContributionValueExpression$mIzY: null,
      readOnlyContainer$mIzY: null,
      constructor: MultiCommentDetailViewBase$,
      super$mIzY: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      updateView$mIzY: updateView,
      addMultiCommentReadOnlyItems$mIzY: addMultiCommentReadOnlyItems,
      addMultiCommentReadOnlyItem$mIzY: addMultiCommentReadOnlyItem,
      getSelectedArchivedItemsVE: getSelectedArchivedItemsVE,
      getReadOnlyContainer$mIzY: getReadOnlyContainer,
      statics: {
        READ_ONLY_CONTAINER_ITEM_ID: "read-only-container",
        READ_ONLY_ITEM_CONTAINER_ITEM_ID_PREFIX: "read-only-item-container_"
      },
      requires: [
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.readonly.MultiCommentReadOnlyItemPanel"
      ]
    };
});
