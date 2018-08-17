Ext.define("com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration", function(ArchiveContributionAdministration) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.History;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationPropertyNames;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.Queues;

public class ArchiveContributionAdministration extends AbstractContributionAdministration {

  private var selectedValueExpressions:Array;
  private var oldSelected:ModeratedItem;
  private var oldComplaintDate:*;
  private var filterOptions:Object;
  private var moderation:Moderation;

  private var updateRequestCounter:int = 0;
  private var mostRecentUpdateRequest:int;

  public*/ function ArchiveContributionAdministration$(moderation/*:Moderation*/) {
    this.super$Ovhj(moderation);

    this.moderation$Ovhj = moderation;

    var displayedValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
              com.coremedia.elastic.social.studio.model.ModerationPropertyNames.ARCHIVE_CONTRIBUTION_ADMINISTRATION,
              com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED]), moderation);

    displayedValueExpression.addChangeListener(AS3.bind(this,"loadEmails"));

    this.filterOptions$Ovhj = {
      scope:'',
      term:'',
      status:'',
      author:'',
      fromDate: '',
      toDate: ''
    };
    this.setSearchHistory$Ovhj(new com.coremedia.elastic.social.studio.model.impl.HistoryImpl());

  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setSelectedContribution(selected/*:ModeratedItem*/)/*:void*/ {var this$=this;
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_CONTRIBUTION, selected);

    if (selected) {
      (AS3.as(selected,  com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl)).load(function ()/*:void*/ {
        selected.getTarget() && selected.getTarget().load(function (target/*:Contribution*/)/*:void*/ {
          this$.setDisplayed(target);
        });
      });
    } else {
      this.setDisplayed(null);
    }
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getSelectedContribution()/*:ModeratedItem*/ {
    var selected/*:ModeratedItem*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_CONTRIBUTION),  com.coremedia.elastic.social.studio.model.ModeratedItem);
    return selected ? selected : null;
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getSelectedContributionItems()/*:Array*/ {
    var selectedItems/*:Array*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS),  Array);
    return selectedItems ? selectedItems : [];
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function removeContributionFromSelectedItems(moderatedItem/*:ModeratedItem*/)/*:void*/ {
    /* Make a copy of the current selected items array. Otherwise, if we change the current reference and write it back,
     the registered listeners at <code>ContributionAdministrationPropertyNames.ARCHIVED_LIST_ITEMS</code> will not be
     triggered. Therefore, we create a new array - a copy of the current selected items - and use that to remove one item.*/
    var arr/*:Array*/ = this.getSelectedContributionItems().slice();
    arr.splice(arr.indexOf(moderatedItem), 1);
    this.setSelectedContributionItems(arr);
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function updateList(fromFilter/*:Boolean = false*/)/*:void*/ {var this$=this;if(arguments.length<=0)fromFilter=false;
    (AS3.as(this.moderation$Ovhj,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(function ()/*:void*/ {
      this$.doUpdateList$Ovhj(fromFilter);
    });
  }/*

  private*/ function doUpdateList(fromFilter/*:Boolean = false*/)/*:void*/ {var this$=this;if(arguments.length<=0)fromFilter=false;
    var updateRequestId/*:int*/ = this.updateRequestCounter$Ovhj++;
    this.mostRecentUpdateRequest$Ovhj = updateRequestId;

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getArchivedUrl$Ovhj(), "GET");
    rsm.request(null,
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              if (updateRequestId === this$.mostRecentUpdateRequest$Ovhj) {
                var archivedItems/*:Array*/ = response.getResponseJSON()["hits"] || [];
                this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.ARCHIVED_LIST_ITEMS, archivedItems);

                var archivedItemsTotalSize/*:Number*/ = response.getResponseJSON()["total"] || [];
                this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.ARCHIVED_LIST_TOTAL_SIZE, archivedItemsTotalSize);

                if ((!this$.getSelectedContribution() || fromFilter) && archivedItems.length > 0) {

                  // Not a really cool pattern here. But this particular case
                  // (new store entries and new selection quite simultaneously)
                  // is not handled well by the BindListPlugin/BindSelectionPlugin combination.
                  function setSelectedContributionLater()/*:void*/ {
                    if (com.coremedia.ui.util.Queues.allEmpty()) {
                      this$.setSelectedContributionItems(archivedItems, true);
                    } else {
                      com.coremedia.ui.util.EventUtil.invokeLater(setSelectedContributionLater);
                    }
                  }

                  com.coremedia.ui.util.EventUtil.invokeLater(setSelectedContributionLater);

                } else if (archivedItems.length === 0) {
                  this$.setSelectedContributionItems(null);
                } else {
                  this$.invalidateSelectedContributionItems$Ovhj();
                }
              }
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.ARCHIVED_LIST_ITEMS, null);
              com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse(response);
            });
  }/*

  private*/ function invalidateSelectedContributionItems()/*:void*/ {
    this.getSelectedContributionItems().forEach(function (modItem/*:ModeratedItem*/)/*:void*/ {
      modItem.getTarget() && modItem.getTarget().invalidate();
    });
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setSelectedContributionItems(items/*:Array*/, selectOnlyFirst/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)selectOnlyFirst=false;
    if (selectOnlyFirst && items && items[0]) {
      var singleItemArray/*:Array*/ = [];
      singleItemArray.push(items[0]);
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, singleItemArray);
      this.setSelectedContribution(items[0]);
    } else if (items) {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, items);
      this.setSelectedContribution(items[0]);
    } else {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, null);
      this.setSelectedContribution(null);
    }

    this.invalidateSelectedContributionItems$Ovhj();
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setDisplayed(displayed/*:Contribution*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, displayed);
    this.getDisplayed() && this.getDisplayed().invalidate();
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getDisplayed()/*:Contribution*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED),  com.coremedia.elastic.social.studio.model.Contribution);
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function hasDisplayed()/*:Boolean*/ {
    return this.getDisplayed() != null;
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function registerSelectedChangeListener()/*:void*/ {
    var selectedValueExpression/*:ValueExpression*/ =
            com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_CONTRIBUTION, this);
    selectedValueExpression.addChangeListener(AS3.bind(this,"selectAndValidate$Ovhj"));
    var lastComplaintDateValueExpression/*:ValueExpression*/ =
            selectedValueExpression.extendBy(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    lastComplaintDateValueExpression.addChangeListener(AS3.bind(this,"selectAndInvalidateIfNecessary$Ovhj"));

    this.selectedValueExpressions$Ovhj = [];
    this.selectedValueExpressions$Ovhj.push(selectedValueExpression, lastComplaintDateValueExpression);
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function removeSelectedChangeListener()/*:void*/ {
    for (var i/*:int*/ = 0; this.selectedValueExpressions$Ovhj && i < this.selectedValueExpressions$Ovhj.length; i++) {
      (AS3.as(this.selectedValueExpressions$Ovhj[i],  com.coremedia.ui.data.ValueExpression)).removeChangeListener(AS3.bind(this,"selectAndValidate$Ovhj"));
      (AS3.as(this.selectedValueExpressions$Ovhj[i],  com.coremedia.ui.data.ValueExpression)).removeChangeListener(AS3.bind(this,"selectAndInvalidateIfNecessary$Ovhj"));
    }

    this.selectedValueExpressions$Ovhj = null;
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, null);
  }/*


  private*/ function setSearchHistory(history/*:History*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_HISTORY, history);
  }/*


  public*/ function getFilterHistory()/*:History*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_HISTORY),  com.coremedia.elastic.social.studio.model.History);
  }/*

  public*/ function applyFilter(scope/*:String*/, term/*:String*/, status/*:String*/, author/*:String*/, fromDate/*:Date*/, toDate/*: Date*/)/*:void*/ {

    this.filterOptions$Ovhj.scope = scope;
    this.filterOptions$Ovhj.term = term;
    this.filterOptions$Ovhj.status = status;
    this.filterOptions$Ovhj.author = author;
    this.filterOptions$Ovhj.fromDate = fromDate ? String(fromDate.getTime()) : '';
    this.filterOptions$Ovhj.toDate = toDate ? String(toDate.getTime()) : '';

    this.getFilterHistory().add(this.filterOptions$Ovhj);
    this.updateList(true);
  }/*

  private*/ function getArchivedUrl()/*:String*/ {
    var defaultUrl/*:String*/ = (AS3.as(this.moderation$Ovhj,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix() + "/archive?direction=" + this.getSorting();

    if (this.filterOptions$Ovhj.scope) {
      defaultUrl = defaultUrl.concat("&filterScope=" + this.filterOptions$Ovhj.scope);
    }

    if (this.filterOptions$Ovhj.term) {
      defaultUrl = defaultUrl.concat("&filterTerm=" + this.filterOptions$Ovhj.term);
    }

    if (this.filterOptions$Ovhj.status) {
      defaultUrl = defaultUrl.concat("&filterStatus=" + this.filterOptions$Ovhj.status);
    }

    if (this.filterOptions$Ovhj.author) {
      defaultUrl = defaultUrl.concat("&filterAuthor=" + this.filterOptions$Ovhj.author);
    }

    if (this.filterOptions$Ovhj.fromDate) {
      defaultUrl = defaultUrl.concat("&fromDate=" + this.filterOptions$Ovhj.fromDate);
    }

    if (this.filterOptions$Ovhj.toDate) {
      defaultUrl = defaultUrl.concat("&toDate=" + this.filterOptions$Ovhj.toDate);
    }

    return defaultUrl;
  }/*


  /**
   * validate if necessary: only if there is no complaintDate available.
   * /
  private*/ function selectAndInvalidateIfNecessary()/*:void*/ {
    if (this.oldSelected$Ovhj === this.getSelectedContribution() && this.getSelectedContribution() && this.oldComplaintDate$Ovhj !== this.getSelectedContribution().getLastComplaintDate()) {
      this.selectedChanged$Ovhj();
    }
  }/*

  private*/ function selectAndValidate()/*:void*/ {
    this.oldSelected$Ovhj = this.getSelectedContribution();
    if (this.oldSelected$Ovhj) {
      this.oldComplaintDate$Ovhj = this.oldSelected$Ovhj.getLastComplaintDate();
    }
    else {
      this.oldComplaintDate$Ovhj = null;
    }
    this.selectedChanged$Ovhj();
  }/*

  private*/ function selectedChanged()/*:void*/ {
    var selected/*:ModeratedItem*/ = this.getSelectedContribution();
    if (!selected) {
      this.setSelectedContribution(null);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
      selectedValueExpressions$Ovhj: null,
      oldSelected$Ovhj: null,
      oldComplaintDate$Ovhj: undefined,
      filterOptions$Ovhj: null,
      moderation$Ovhj: null,
      updateRequestCounter$Ovhj: 0,
      mostRecentUpdateRequest$Ovhj: 0,
      constructor: ArchiveContributionAdministration$,
      super$Ovhj: function() {
        com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration.prototype.constructor.apply(this, arguments);
      },
      setSelectedContribution: setSelectedContribution,
      getSelectedContribution: getSelectedContribution,
      getSelectedContributionItems: getSelectedContributionItems,
      removeContributionFromSelectedItems: removeContributionFromSelectedItems,
      updateList: updateList,
      doUpdateList$Ovhj: doUpdateList,
      invalidateSelectedContributionItems$Ovhj: invalidateSelectedContributionItems,
      setSelectedContributionItems: setSelectedContributionItems,
      setDisplayed: setDisplayed,
      getDisplayed: getDisplayed,
      hasDisplayed: hasDisplayed,
      registerSelectedChangeListener: registerSelectedChangeListener,
      removeSelectedChangeListener: removeSelectedChangeListener,
      setSearchHistory$Ovhj: setSearchHistory,
      getFilterHistory: getFilterHistory,
      applyFilter: applyFilter,
      getArchivedUrl$Ovhj: getArchivedUrl,
      selectAndInvalidateIfNecessary$Ovhj: selectAndInvalidateIfNecessary,
      selectAndValidate$Ovhj: selectAndValidate,
      selectedChanged$Ovhj: selectedChanged,
      requires: [
        "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.Queues"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.History",
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModerationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.HistoryImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModeratedItemImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
