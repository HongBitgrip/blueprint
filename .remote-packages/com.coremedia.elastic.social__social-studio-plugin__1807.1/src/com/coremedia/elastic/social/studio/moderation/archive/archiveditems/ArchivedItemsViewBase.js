Ext.define("com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsViewBase", function(ArchivedItemsViewBase) {/*package com.coremedia.elastic.social.studio.moderation.archive.archiveditems {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.EncodingUtil;

import ext.DateUtil;
import ext.StringUtil;
import ext.data.Model;
import ext.data.Store;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.grid.column.Column;
import ext.selection.RowSelectionModel;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ArchivedItemsViewBase extends GridPanel {

  public static const ITEM_BLOCK:BEMBlock =*/function ITEM_BLOCK$static_(){ArchivedItemsViewBase.ITEM_BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-archive-item"));}/*;
  public static const ITEM_ELEMENT_STATUS:BEMElement =*/function ITEM_ELEMENT_STATUS$static_(){ArchivedItemsViewBase.ITEM_ELEMENT_STATUS=( ArchivedItemsViewBase.ITEM_BLOCK.createElement("status"));}/*;
  public static const ITEM_MODIFIER_REJECTED:BEMModifier =*/function ITEM_MODIFIER_REJECTED$static_(){ArchivedItemsViewBase.ITEM_MODIFIER_REJECTED=( ArchivedItemsViewBase.ITEM_BLOCK.createModifier("rejected"));}/*;

  protected static const ARCHIVE_STATUS_BAR_ID:String = "cm-elastic-social-layout-statusbar-archive";
  protected static const ARCHIVE_STATUS_BAR_TEXT:String = "cm-elastic-social-layout-statusbar-archive-text";

  private var listSelectionValueExpression:ValueExpression;
  private var archivedItemsValueExpression:ValueExpression;
  private var archivedItemsTotalSizeValueExpression:ValueExpression;

  private var sortAsc:Boolean = false;
  private var lastSelection:ModeratedItem;

  [Bindable]
  public var archiveContributionAdministration:ArchiveContributionAdministration;

  public*/ function ArchivedItemsViewBase$(config/*:ArchivedItemsView = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$dD$M(config);
    this.on('viewready', function ()/*:void*/ {
      AS3.cast(Ext.selection.RowModel,this$.getSelectionModel()).select(0);
    });
  }/*

  /**
   * mark this manuel selected item also as internally selected item
   * @param source
   * /
  private*/ function markSelectedInternally(source/*:ValueExpression*/)/*:void*/ {
    if (AS3.getBindable(this,"archiveContributionAdministration") && source.getValue() && source.getValue()[0]) {
      var selection/*:Array*/ = source.getValue();
      AS3.getBindable(this,"archiveContributionAdministration").setSelectedContributionItems(selection);

      if (this.lastSelection$dD$M) {
        var target/*:Contribution*/ = this.lastSelection$dD$M.getTarget();
        target && target.removePropertyChangeListener(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE,AS3.bind( this,"refreshView$dD$M"));
      }

      if (selection.length === 1) {
        this.lastSelection$dD$M = selection[0];
        var target2/*:Contribution*/ = this.lastSelection$dD$M.getTarget();
        target2 && target2.addPropertyChangeListener(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE,AS3.bind( this,"refreshView$dD$M"));
      }
    }
  }/*

  private*/ function refreshView()/*:void*/ {
    this.getView().refresh();
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.grid.Panel.prototype.afterRender.call(this);

    this.updateSorting$dD$M();
    // setSortState will clear the onSort state of column headers.
    // Thus ignoring calls to setSortState here. See CMS-6229 and CMS-6249 for details.
    this.getView()['headerCt'].setSortState = function ()/*:void*/ { /* do nothing */
    };
    this.mon(this.getView(), 'refresh',AS3.bind( this,"updateSorting$dD$M"));

    for/* each*/ (var $1=0,$2=/* in*/ this.getColumns();$1<$2.length;++$1) {var column/*:Column*/ =$2[$1];
      if (column.stateId === com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE) {
        column.el.dom.addEventListener('click', function (e/*:Event*/)/*:void*/ {
          e.preventDefault();
          this$.sortAsc$dD$M = AS3.getBindable(this$,"archiveContributionAdministration").toggleSorting();
          this$.updateSorting$dD$M();
        }, true);
      }
    }
  }/*

  private static*/ function getModeratedItem$static(record/*:Model*/)/*:ModeratedItem*/ {
    var beanRecord/*:BeanRecord*/ =AS3.as( record,  com.coremedia.ui.store.BeanRecord);
    return beanRecord ?AS3.as( beanRecord.getBean(),  com.coremedia.elastic.social.studio.model.ModeratedItem) : null;
  }/*

  private*/ function updateSorting()/*:void*/ {
    for/* each*/ (var $1=0,$2=/* in*/ this.getColumns();$1<$2.length;++$1) {var column/*:Column*/ =$2[$1];
      if (column.stateId === com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.CREATION_DATE) {
        var ascSortCls/*:String*/ = column['ascSortCls'];
        var descSortCls/*:String*/ = column['descSortCls'];
        if (this.sortAsc$dD$M) {
          column.addCls(ascSortCls).removeCls(descSortCls);
        }
        else {
          column.addCls(descSortCls).removeCls(ascSortCls);
        }
      }
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getSelectedItemsValueExpression(AS3.getBindable(this,"archiveContributionAdministration")).removeChangeListener(AS3.bind(this,"markSelectedInternally$dD$M"));
    Ext.grid.Panel.prototype.beforeDestroy.call(this);
  }/*

  //noinspection JSUnusedLocalSymbols
  internal static*/ function handleRowStyle$static(record/*:Model*/, rowIndex/*:**/, rp/*:**/, ds/*:**/)/*:String*/ { // rp = rowParams
    var cls/*:String*/ = ArchivedItemsViewBase.ITEM_BLOCK.getCSSClass();
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    var contribution/*:Contribution*/ = moderatedItem && moderatedItem.getTarget();
    if (contribution && contribution.getContributionState() === "REJECTED") {
      return cls += " " + ArchivedItemsViewBase.ITEM_MODIFIER_REJECTED.getCSSClass();
    }
    return '';
  }/*

  //noinspection JSUnusedLocalSymbols
  public static*/ function groupRenderer$static(value/*:**/, _/*:**/, rec/*:Model*/)/*:String*/ {
    if (AS3.is(rec,  Ext.data.Model)) {
      return rec.get('lastComplaintDate') ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_group_complaints') : mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_group_normal');
    } else {
      return '';
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function authorNameRenderer$static(value/*:**/, _/*:**/, record/*:Model*/)/*:String*/ {
    var result/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous');

    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    var comment/*:Comment*/ = moderatedItem &&AS3.as( moderatedItem.getTarget(),  com.coremedia.elastic.social.studio.model.Comment);
    if (!comment) {
      return undefined;
    } else {
      result = comment.getAuthorName() || result;
    }

    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(result);
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function statusRenderer$static(value/*:**/, _/*:**/, record/*:Model*/)/*:String*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    var contribution/*:Contribution*/ = moderatedItem && moderatedItem.getTarget();
    if (!contribution || contribution.getContributionState() === undefined) {
      return undefined;
    } else if (contribution.getContributionState() === "APPROVED") {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_archive_state_approved');
    } else if (contribution.getContributionState() === "REJECTED") {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_archive_state_rejected');
    } else if (contribution.getContributionState() === "NEW_ONLINE") {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_archive_state_new_online');
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'list_archive_state_new');
  }/*

  //noinspection JSUnusedLocalSymbols
  protected static*/ function dateRenderer$static(value/*:**/, metaData/*:**/, record/*:Model*/, rowIndex/*:int*/, colIndex/*:int*/, store/*:Store*/)/*:String*/ {
    var moderatedItem/*:ModeratedItem*/ = getModeratedItem$static(record);
    if (moderatedItem && moderatedItem.getLastComplaintDate() !== null) {
      value = moderatedItem.getLastComplaintDate();
    }
    return Ext.Date.format(value, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
  }/*

  protected*/ function getSelectedItemsValueExpression(archivedAdministration/*:ArchiveContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.listSelectionValueExpression$dD$M) {
      this.listSelectionValueExpression$dD$M = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, archivedAdministration);
      this.listSelectionValueExpression$dD$M.addChangeListener(AS3.bind(this,"markSelectedInternally$dD$M"));
    }
    return this.listSelectionValueExpression$dD$M;
  }/*

  protected*/ function getArchivedItemsValueExpression(archivedAdministration/*:ArchiveContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.archivedItemsValueExpression$dD$M) {
      this.archivedItemsValueExpression$dD$M = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.ARCHIVED_LIST_ITEMS, archivedAdministration);
    }

    return this.archivedItemsValueExpression$dD$M;
  }/*

  protected*/ function getArchivedItemsTotalSizeValueExpression(archivedAdministration/*:ArchiveContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.archivedItemsTotalSizeValueExpression$dD$M) {
      this.archivedItemsTotalSizeValueExpression$dD$M = com.coremedia.ui.data.ValueExpressionFactory.create(
          com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.ARCHIVED_LIST_TOTAL_SIZE, archivedAdministration);
    }

    return this.archivedItemsTotalSizeValueExpression$dD$M;
  }/*

  internal*/ function getTotalHitsExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateTotalHits$dD$M"));
  }/*

  private*/ function calculateTotalHits()/*:String*/ {
    var totalHits/*:String*/;

    var totalSizeVE/*:ValueExpression*/ = this.getArchivedItemsTotalSizeValueExpression(AS3.getBindable(this,"archiveContributionAdministration"));
    if (totalSizeVE && totalSizeVE.getValue()) {
      var total/*:uint*/ = totalSizeVE.getValue();
      if (AS3.is(total,  Array)) {
        total = 0;
      }
      if (total !== undefined) {
        var bundle/*:Object*/ = this.resourceManager.getResourceBundle(null, 'com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin').content;

        var archivedItemsVE/*:ValueExpression*/ = this.getArchivedItemsValueExpression(AS3.getBindable(this,"archiveContributionAdministration"));
        if (archivedItemsVE && archivedItemsVE.getValue()) {
          var searchResultLength/*:uint*/ = archivedItemsVE.getValue().length;
          var pattern/*:String*/ = total == 1 ?
              bundle.archive_one_hit_text :
              total <= searchResultLength ?
                  bundle.archive_many_hits_text :
                  bundle.archive_partial_hits_text;
          totalHits = Ext.String.format(pattern, total, searchResultLength);
        }
      }
    }
    return totalHits;
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.Panel",
      listSelectionValueExpression$dD$M: null,
      archivedItemsValueExpression$dD$M: null,
      archivedItemsTotalSizeValueExpression$dD$M: null,
      sortAsc$dD$M: false,
      lastSelection$dD$M: null,
      constructor: ArchivedItemsViewBase$,
      super$dD$M: function() {
        Ext.grid.Panel.prototype.constructor.apply(this, arguments);
      },
      markSelectedInternally$dD$M: markSelectedInternally,
      refreshView$dD$M: refreshView,
      afterRender: afterRender,
      updateSorting$dD$M: updateSorting,
      beforeDestroy: beforeDestroy,
      getSelectedItemsValueExpression: getSelectedItemsValueExpression,
      getArchivedItemsValueExpression: getArchivedItemsValueExpression,
      getArchivedItemsTotalSizeValueExpression: getArchivedItemsTotalSizeValueExpression,
      getTotalHitsExpression: getTotalHitsExpression,
      calculateTotalHits$dD$M: calculateTotalHits,
      config: {archiveContributionAdministration: null},
      statics: {
        ITEM_BLOCK: undefined,
        ITEM_ELEMENT_STATUS: undefined,
        ITEM_MODIFIER_REJECTED: undefined,
        ARCHIVE_STATUS_BAR_ID: "cm-elastic-social-layout-statusbar-archive",
        ARCHIVE_STATUS_BAR_TEXT: "cm-elastic-social-layout-statusbar-archive-text",
        handleRowStyle: handleRowStyle$static,
        groupRenderer: groupRenderer$static,
        authorNameRenderer: authorNameRenderer$static,
        statusRenderer: statusRenderer$static,
        dateRenderer: dateRenderer$static,
        __initStatics__: function() {
          ITEM_BLOCK$static_();
          ITEM_ELEMENT_STATUS$static_();
          ITEM_MODIFIER_REJECTED$static_();
        }
      },
      requires: [
        "Ext.Date",
        "Ext.String",
        "Ext.data.Model",
        "Ext.grid.Panel",
        "Ext.selection.RowModel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.EncodingUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames"
      ]
    };
});
