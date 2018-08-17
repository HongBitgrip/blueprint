Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsViewBase", function(ModeratedItemsViewBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.CommentPropertyNames;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
import com.coremedia.elastic.social.studio.model.Review;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;
import ext.Ext;
import ext.data.Model;
import ext.data.Store;
import ext.dom.Element;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.selection.RowSelectionModel;
import ext.tip.QuickTipManager;
import ext.view.TableView;

import js.HTMLElement;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModeratedItemsViewBase extends GridPanel {
  public static const DATE_SORT_HEADER_ID:String = "cm-elastic-social-list-date-sort-header";

  public static const MODERATION_ITEM_PRIORITIZE_BLOCK:BEMBlock =*/function MODERATION_ITEM_PRIORITIZE_BLOCK$static_(){ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-moderation-item-prioritizable"));}/*;
  public static const MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED:BEMModifier =*/function MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED$static_(){ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED=( ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK.createModifier("enabled"));}/*;
  public static const MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER:BEMModifier =*/function MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER$static_(){ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER=( ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK.createModifier("over"));}/*;

  public static const CM_ELASTIC_FIRST_NON_COMPLAINT_ROW_CLASS:String = "cm-elastic-first-non-complaint-row";

  private var listSelectionValueExpression:ValueExpression;
  private var moderatedItemsValueExpression:ValueExpression;
  private var prioritizedValueExpression:ValueExpression;
  private var moderatedContributionAdministrationImpl:ModerationContributionAdministration;
  //noinspection JSFieldCanBeLocal
  private var isFirstNonComplaint:Boolean = true;
  private var sortAsc:Boolean = false;

  public*/ function ModeratedItemsViewBase$(config/*:ModeratedItemsView = null*/) {if(arguments.length<=0)config=null;

    this.moderatedContributionAdministrationImpl$LTp3 =AS3.as( AS3.getBindable(config,"moderationContributionAdministration"),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);
    this.super$LTp3(config);
    this.addListener('viewready',AS3.bind( this,"selectIfNothingSelected"));

    this.getPrioritizedValueExpression$LTp3().addChangeListener(AS3.bind(this,"refreshGridView$LTp3"));
  }/*


  public*/ function getSelectedItemsValueExpression(moderatedContributionAdministration/*:AbstractContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.listSelectionValueExpression$LTp3) {
      this.listSelectionValueExpression$LTp3 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_ITEMS, moderatedContributionAdministration);
      this.listSelectionValueExpression$LTp3.addChangeListener(AS3.bind(this,"markSelectedInternally$LTp3"));
    }
    return this.listSelectionValueExpression$LTp3;
  }/*

  private*/ function markSelectedInternally(source/*:ValueExpression*/)/*:void*/ {
    // mark this manuel selected item also as internally selected item
    var selection/*:Array*/ =AS3.as( source.getValue(),  Array);
    if (selection.length > 0 && selection[0]) {
      this.moderatedContributionAdministrationImpl$LTp3.setSelectedContribution(selection[0]);
    }
    else {
      this.moderatedContributionAdministrationImpl$LTp3.setSelectedContribution(null);
    }
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.grid.Panel.prototype.afterRender.call(this);
    this.updateSorting$LTp3();
    // setSortState will clear the onSort state of column headers.
    // Thus ignoring calls to setSortState here. See CMS-6229 and CMS-6249 for details.
    this.getView()['headerCt'].setSortState = function ()/*:void*/ { /* do nothing */
    };
    this.mon(this.getView(), 'refresh',AS3.bind( this,"updateSorting$LTp3"));
    this.mon(this.getView(), 'itemmouseenter',AS3.bind( this,"handleItemMouseEnter$LTp3"));
    this.mon(this.getView(), 'itemmouseleave',AS3.bind( this,"handleItemMouseLeave$LTp3"));

    for/* each*/ (var $1=0,$2=/* in*/ this.getColumns();$1<$2.length;++$1) {var column/*:Column*/ =$2[$1];
      if (column.stateId === com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE) {
        column.el.dom.addEventListener('click',AS3.bind( this,"dateColumnClicked$LTp3"), true);
      }
    }
  }/*

  private*/ function dateColumnClicked(e/*:Event*/)/*:void*/ {
    e.preventDefault();
    this.sortAsc$LTp3 = this.moderatedContributionAdministrationImpl$LTp3.toggleSorting();
    this.updateSorting$LTp3();
  }/*

  private*/ function updateSorting()/*:void*/ {
    for/* each*/ (var $1=0,$2=/* in*/ this.getColumns();$1<$2.length;++$1) {var column/*:Column*/ =$2[$1];
      if(column.stateId === com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE) {
        var ascSortCls/*:String*/ = column['ascSortCls'];
        var descSortCls/*:String*/ = column['descSortCls'];
        if(this.sortAsc$LTp3) {
          column.addCls(ascSortCls).removeCls(descSortCls);
        }
        else {
          column.addCls(descSortCls).removeCls(ascSortCls);
        }
      }
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function handleItemMouseEnter(view/*:TableView*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, e/*:Event*/)/*:void*/ {
    if (!this.isPrioritized$LTp3(record)) {
      var block/*:Element*/ = Ext.fly(item).query(ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK.getCSSSelector(), false)[0];
      block && block.addCls(ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER.getCSSClass());
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function handleItemMouseLeave(view/*:TableView*/, record/*:Model*/, item/*:HTMLElement*/, index/*:Number*/, e/*:Event*/)/*:void*/ {
    if (!this.isPrioritized$LTp3(record)) {
      var block/*:Element*/ = Ext.fly(item).query(ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK.getCSSSelector(), false)[0];
      block && block.removeCls(ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER.getCSSClass());
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getSelectedItemsValueExpression(this.moderatedContributionAdministrationImpl$LTp3).removeChangeListener(AS3.bind(this,"markSelectedInternally$LTp3"));
    this.getPrioritizedValueExpression$LTp3().removeChangeListener(AS3.bind(this,"refreshGridView$LTp3"));
    this.removeListener('viewready',AS3.bind( this,"selectIfNothingSelected"));

    Ext.grid.Panel.prototype.beforeDestroy.call(this);
  }/*

  public*/ function selectIfNothingSelected()/*:void*/ {
    this.getView().refresh();
    var selectionModel/*:RowSelectionModel*/ = AS3.cast(Ext.selection.RowModel,this.getSelectionModel());
    if (!selectionModel.hasSelection()) {
      selectionModel.select(0);
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function handleRowStyle(record/*:**/, rowIndex/*:**/, rp/*:**/, ds/*:**/)/*:String*/ { // rp = rowParams
    if (record.data.lastComplaintDate) {
      this.isFirstNonComplaint$LTp3 = true;
      return "";
    }

    var nonComplaintCss/*:String*/ = '';
    if (this.isFirstNonComplaint$LTp3) {
      nonComplaintCss = ModeratedItemsViewBase.CM_ELASTIC_FIRST_NON_COMPLAINT_ROW_CLASS;
      this.isFirstNonComplaint$LTp3 = false;
    } else {
      nonComplaintCss = '';
    }
    return nonComplaintCss;
  }/*

  private static*/ function getModeratedItem$static(record/*:Model*/)/*:ModeratedItem*/ {
    var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
    return beanRecord ?AS3.as( beanRecord.getBean(),  com.coremedia.elastic.social.studio.model.ModeratedItem) : null;
  }/*

  //noinspection JSUnusedLocalSymbols
  public static*/ function groupRenderer$static(value/*:**/, _/*:**/, rec/*:Model*/)/*:String*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(rec);
    if (moderatedItem) {
      return moderatedItem.getLastComplaintDate() ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_group_complaints') : mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_group_normal');
    } else {
      return "";
    }
  }/*

  private static*/ function isCommentOrReview$static(record/*:Model*/)/*:Boolean*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    var contribution/*:Contribution*/ = moderatedItem && moderatedItem.getTarget();
    // make check explicit although Review extends Comment
    return contribution && (AS3.is(contribution,  com.coremedia.elastic.social.studio.model.Comment) ||AS3.is( contribution,  com.coremedia.elastic.social.studio.model.Review));
  }/*

  private static*/ function isUser$static(record/*:Model*/)/*:Boolean*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    var contribution/*:Contribution*/ = moderatedItem && moderatedItem.getTarget();
    return AS3.is( contribution,  com.coremedia.elastic.social.studio.model.User);
  }/*

  private static*/ function isPrioritizable$static(record/*:Model*/)/*:Boolean*/ {
    if (!record) {
      return false;
    }
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    return moderatedItem && ! !moderatedItem.getPriorityId();
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function authorNameRenderer$static(value/*:**/, _/*:**/, record/*:Model*/)/*:String*/ {
    var anonymous/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous');

    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);

    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(moderatedItem.get(com.coremedia.elastic.social.studio.model.CommentPropertyNames.AUTHOR_NAME) || anonymous);
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function dateRenderer$static(value/*:**/, metaData/*:**/, record/*:Model*/, rowIndex/*:int*/, colIndex/*:int*/, store/*:Store*/)/*:String*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    if (moderatedItem && moderatedItem.getLastComplaintDate() !== null) {
      value = moderatedItem.getLastComplaintDate();
    }
    return Ext.Date.format(value, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function getPrioritizeIconCls(value/*:**/, metaData/*:**/, record/*:Model*/, rowIndex/*:int*/, colIndex/*:int*/, store/*:Store*/)/*:String*/ {
    if (isPrioritizable$static(record)) {
      var iconCls/*:String*/ = ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_BLOCK.getCSSClass();
      if (this.isPrioritized$LTp3(record)) {
        iconCls += " " + ModeratedItemsViewBase.MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED.getCSSClass();
      }
      return iconCls;
    }
    return "";
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function getPrioritizeToolTip(value/*:**/, metaData/*:**/, record/*:Model*/, rowIndex/*:int*/, colIndex/*:int*/, store/*:Store*/)/*:String*/ {
    if (isPrioritizable$static(record)) {
      var tooltip/*:String*/ = this.getPrioritizeTooltip$LTp3(record);
      var title/*:String*/ = this.getPrioritizeTitle$LTp3(record);
      // well, this is pretty uncool, but setting the qtitle is not possible in the ActionColumn. As the given String is
      // not escaped again we can provide additional attributes here.
      return com.coremedia.ui.util.EncodingUtil.encodeForHTML(tooltip) + '" data-qtitle="' + com.coremedia.ui.util.EncodingUtil.encodeForHTML(title);
    }
    return "";
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function isPrioritizeDisabled$static(view/*:TableView*/, rowIndex/*:Number*/, colIndex/*:Number*/, item/*:Object*/, record/*:Model*/)/*:Boolean*/ {
    return !isPrioritizable$static(record);
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function prioritizeHandler(view/*:TableView*/, rowIndex/*:Number*/, colIndex/*:Number*/, item/*:**/, e/*:Event*/, record/*:Model*/, row/*:HTMLElement*/)/*:void*/ {
    if (isPrioritizable$static(record)) {
      if (this.isPrioritized$LTp3(record)) {
        this.moderatedContributionAdministrationImpl$LTp3.unprioritize();
      } else {
        var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
        this.moderatedContributionAdministrationImpl$LTp3.prioritize(moderatedItem.getPriorityId());
      }
      Ext.tip.QuickTipManager.getQuickTip().setTitle(this.getPrioritizeTitle$LTp3(record));
      Ext.tip.QuickTipManager.getQuickTip().update(this.getPrioritizeTooltip$LTp3(record));
    }
  }/*

  private*/ function isPrioritized(record/*:Model*/)/*:Boolean*/ {
    if (record) {
      var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
      return this.moderatedContributionAdministrationImpl$LTp3 && moderatedItem.getPriorityId() === this.moderatedContributionAdministrationImpl$LTp3.getPriority();
    }
    return false;
  }/*

  private*/ function getPrioritizeTitle(record/*:Model*/)/*:String*/ {
    var title/*:String*/;
    if (this.isPrioritized$LTp3(record)) {
      if (isCommentOrReview$static(record)) {
        title = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_unprioritize_comments_title');
      } else if (isUser$static(record)) {
        title = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_unprioritize_users_title');
      }
    } else {
      if (isCommentOrReview$static(record)) {
        title = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_prioritize_comments_title');
      } else if (isUser$static(record)) {
        title = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_prioritize_users_title');
      }
    }
    return title;
  }/*

  private*/ function getPrioritizeTooltip(record/*:Model*/)/*:String*/ {
    var tooltip/*:String*/;
    if (this.isPrioritized$LTp3(record)) {
      if (isCommentOrReview$static(record)) {
        tooltip = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_unprioritize_comments_qtip');
      } else if (isUser$static(record)) {
        tooltip = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_unprioritize_users_qtip');
      }
    } else {
      if (isCommentOrReview$static(record)) {
        tooltip = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_prioritize_comments_qtip');
      } else if (isUser$static(record)) {
        tooltip = this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'prioritization_button_prioritize_users_qtip');
      }
    }
    return tooltip;
  }/*

  protected*/ function getModeratedItemsValueExpression(moderatedContributionAdministration/*:AbstractContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.moderatedItemsValueExpression$LTp3) {
      this.moderatedItemsValueExpression$LTp3 = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        return moderatedContributionAdministration.getModeratedItems();
      });
    }

    return this.moderatedItemsValueExpression$LTp3;
  }/*

  private*/ function getPrioritizedValueExpression()/*:ValueExpression*/ {
    if (!this.prioritizedValueExpression$LTp3) {
      this.prioritizedValueExpression$LTp3 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PRIORITY,
              com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getModerationContributionAdministration());
    }
    return this.prioritizedValueExpression$LTp3;
  }/*

  private*/ function refreshGridView()/*:void*/ {
    this.getView().refresh();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      listSelectionValueExpression$LTp3: null,
      moderatedItemsValueExpression$LTp3: null,
      prioritizedValueExpression$LTp3: null,
      moderatedContributionAdministrationImpl$LTp3: null,
      isFirstNonComplaint$LTp3: true,
      sortAsc$LTp3: false,
      constructor: ModeratedItemsViewBase$,
      super$LTp3: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      getSelectedItemsValueExpression: getSelectedItemsValueExpression,
      markSelectedInternally$LTp3: markSelectedInternally,
      afterRender: afterRender,
      dateColumnClicked$LTp3: dateColumnClicked,
      updateSorting$LTp3: updateSorting,
      handleItemMouseEnter$LTp3: handleItemMouseEnter,
      handleItemMouseLeave$LTp3: handleItemMouseLeave,
      beforeDestroy: beforeDestroy,
      selectIfNothingSelected: selectIfNothingSelected,
      handleRowStyle: handleRowStyle,
      getPrioritizeIconCls: getPrioritizeIconCls,
      getPrioritizeToolTip: getPrioritizeToolTip,
      prioritizeHandler: prioritizeHandler,
      isPrioritized$LTp3: isPrioritized,
      getPrioritizeTitle$LTp3: getPrioritizeTitle,
      getPrioritizeTooltip$LTp3: getPrioritizeTooltip,
      getModeratedItemsValueExpression: getModeratedItemsValueExpression,
      getPrioritizedValueExpression$LTp3: getPrioritizedValueExpression,
      refreshGridView$LTp3: refreshGridView,
      statics: {
        DATE_SORT_HEADER_ID: "cm-elastic-social-list-date-sort-header",
        MODERATION_ITEM_PRIORITIZE_BLOCK: undefined,
        MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED: undefined,
        MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER: undefined,
        CM_ELASTIC_FIRST_NON_COMPLAINT_ROW_CLASS: "cm-elastic-first-non-complaint-row",
        groupRenderer: groupRenderer$static,
        authorNameRenderer: authorNameRenderer$static,
        dateRenderer: dateRenderer$static,
        isPrioritizeDisabled: isPrioritizeDisabled$static,
        __initStatics__: function() {
          MODERATION_ITEM_PRIORITIZE_BLOCK$static_();
          MODERATION_ITEM_PRIORITIZE_MODIFIER_ENABLED$static_();
          MODERATION_ITEM_PRIORITIZE_MODIFIER_OVER$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Date",
        "Ext.grid.Panel",
        "Ext.selection.RowModel",
        "Ext.tip.QuickTipManager",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.CommentPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.model.Review",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl"
      ]
    };
});
