Ext.define("com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration", function(ModerationContributionAdministration) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.cms.editor.sdk.collectionview.search.SearchFilter;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ModeratedItem;
import com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ObjectUtils;

public class ModerationContributionAdministration extends AbstractContributionAdministration {

  private static const*/var MODE_LIST$static/*:String*/ = "list";/*
  private static const*/var MODE_LAST$static/*:String*/ = "last";/*

  private var selectedValueExpressions:Array;
  private var oldSelected:ModeratedItem;
  private var oldComplaintDate:*;

  private var searchFiltersBeanValueExpression:ValueExpression;

  private var categoryBeansValueExpression:ValueExpression;
  private var statisticsValueExpression:ValueExpression;

  private var moderation:Moderation;

  private var updateRequestCounter:int = 0;
  private var mostRecentUpdateRequest:int;

  public*/ function ModerationContributionAdministration$(moderation/*:Moderation*/) {
    this.super$0Xqt(moderation);

    this.moderation$0Xqt = moderation;

    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PROCESS_COUNTER, 0);
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE, MODE_LIST$static);
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.COMMENT_REJECTED_MAIL, null);

    var displayedValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this);
    displayedValueExpression.addChangeListener(AS3.bind(this,"loadEmails"));
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setSelectedContribution(selected/*:ModeratedItem*/)/*:void*/ {var this$=this;
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION, selected);
    var singleItemArray/*:Array*/ = [];
    singleItemArray.push(selected);

    this.setSelectedModerationContributionItems$0Xqt(singleItemArray);
    if (this.isListMode()) {
      if (selected && selected.getTarget()) {
        var isContributionNotInListAfterArchiveModeration/*:Boolean*/ =
                (selected.getTarget().getContributionState() === "APPROVED" && !selected.getLastComplaintDate());
        if (isContributionNotInListAfterArchiveModeration) {
          this.setDisplayed(null);
        }
        else {
          selected.getTarget().load(function (target/*:Contribution*/)/*:void*/ {
            this$.setDisplayed(target);
          });
        }
      } else {
        this.setDisplayed(null);
      }
    }
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getSelectedContribution()/*:ModeratedItem*/ {
    var selected/*:ModeratedItem*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION),  com.coremedia.elastic.social.studio.model.ModeratedItem);
    return selected ? selected : null;
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getSelectedContributionItems()/*:Array*/ {
    var selectedItems/*:Array*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_ITEMS),  Array);
    return selectedItems ? selectedItems : [];
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function updateList(fromFilter/*:Boolean = false*/)/*:void*/ {if(arguments.length<=0)fromFilter=false;
    (AS3.as(this.moderation$0Xqt,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(AS3.bind(this,"updateModerationInfo$0Xqt"));
  }/*

  private*/ function updateModerationInfo(tenantAwareUriPrefix/*:String*/)/*:void*/ {var this$=this;
    var updateRequestId/*:int*/ = this.updateRequestCounter$0Xqt++;
    this.mostRecentUpdateRequest$0Xqt = updateRequestId;

    var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(tenantAwareUriPrefix + "/moderation" + this.getModerationQuerySuffix$0Xqt(), "GET");
    rsm.request(null,
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              if (updateRequestId === this$.mostRecentUpdateRequest$0Xqt) {
                var moderationInfo/*:Object*/ = response.getResponseJSON();

                // handle new moderated items
                var moderatedItems/*:Array*/ = moderationInfo[com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATED_ITEMS] || [];
                this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATED_ITEMS, moderatedItems);
                if (this$.isListMode() && moderatedItems.length > 0 && !this$.getSelectedContribution()) {
                  this$.setSelectedContribution(moderatedItems[0]);
                }

                // handle new filter categories
                var filterCategories/*:Array*/ = this$.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_CATEGORIES) || [];
                var newFilterCategories/*:Array*/ = moderationInfo[com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_CATEGORIES] || [];
                if (!com.coremedia.ui.util.ObjectUtils.equal(
                        com.coremedia.ui.util.ObjectUtils.toJson(filterCategories),
                        com.coremedia.ui.util.ObjectUtils.toJson(newFilterCategories))) {
                  this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_CATEGORIES, newFilterCategories);
                  this$.getCategoryBeansValueExpression().setValue(this$.createCategoryBeans$0Xqt());
                }
              }
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              // error handling
              this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATED_ITEMS, []);
              this$.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_CATEGORIES, []);
              this$.getCategoryBeansValueExpression().setValue([]);
              com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse(response);
            }
    );
  }/*
  public*/ function updateModerationStatistics()/*:Object*/ {
    (AS3.as(this.moderation$0Xqt,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(AS3.bind(this,"doUpdateModerationStatistics"));
  }/*

  public*/ function doUpdateModerationStatistics(tenantAwareUriPrefix/*:String*/)/*:Object*/ {var this$=this;
    var updateStatisticsMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(tenantAwareUriPrefix + "/moderation/statistics", "GET");
    updateStatisticsMethod.request(null,
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var newStatistics/*:Object*/ = response.getResponseJSON() ? response.getResponseJSON() : {};
               this$.getStatisticsValueExpression().setValue(newStatistics);
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              this$.getStatisticsValueExpression().setValue({});
              com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse(response);
            }
    );
  }/*

  //-- some private methods
  private*/ function increaseProcessedCounter()/*:void*/ {
    var oldCounter/*:uint*/ = this.getProcessedCounter();
    if (oldCounter === undefined) {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PROCESS_COUNTER, 0);
    } else {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PROCESS_COUNTER, ++oldCounter);
    }
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function processedContribution()/*:void*/ {
    if (this.isListMode()) {
      this.increaseProcessedCounter$0Xqt();
    } else {
      this.setListMode();
    }
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function setDisplayed(displayed/*:Contribution*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, displayed);
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
    return this.getDisplayed();
  }/*

  /**
   * @inheritDoc
   * /
  override public*/ function getModeratedItems()/*:Array*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATED_ITEMS) || [];
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function registerSelectedChangeListener()/*:void*/ {
    var selectedValueExpression/*:ValueExpression*/ =
            com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION, this);
    selectedValueExpression.addChangeListener(AS3.bind(this,"selectAndValidate$0Xqt"));
    var lastComplaintDateValueExpression/*:ValueExpression*/ =
            selectedValueExpression.extendBy(com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames.LAST_COMPLAINT_DATE);
    lastComplaintDateValueExpression.addChangeListener(AS3.bind(this,"selectAndInvalidateIfNecessary$0Xqt"));

    this.selectedValueExpressions$0Xqt = [];
    this.selectedValueExpressions$0Xqt.push(selectedValueExpression, lastComplaintDateValueExpression);
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function removeSelectedChangeListener()/*:void*/ {
    for (var i/*:int*/ = 0; this.selectedValueExpressions$0Xqt && i < this.selectedValueExpressions$0Xqt.length; i++) {
      (AS3.as(this.selectedValueExpressions$0Xqt[i],  com.coremedia.ui.data.ValueExpression)).removeChangeListener(AS3.bind(this,"selectAndValidate$0Xqt"));
      (AS3.as(this.selectedValueExpressions$0Xqt[i],  com.coremedia.ui.data.ValueExpression)).removeChangeListener(AS3.bind(this,"selectAndInvalidateIfNecessary$0Xqt"));
    }

    this.selectedValueExpressions$0Xqt = null;
  }/*

  /**
   * @inheritDoc
   * /
  override internal*/ function removeFromList(remove/*:RemoteBean*/)/*:void*/ {
    if (remove) {
      var oldModeratedItems/*:Array*/ = this.getModeratedItems();
      if (oldModeratedItems) {
        this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODERATED_ITEMS,
          oldModeratedItems.filter(function (moderatedItem/*:ModeratedItem*/)/*:Boolean*/ {
            var moderatedItemTarget/*:Contribution*/ = moderatedItem.getTarget();
            return (moderatedItemTarget && moderatedItemTarget.getUri() !== remove.getUri());
          })
        );
        this.setSelectedContribution(null);
      }
    }
  }/*

  /**
   * Returns the priority which an editor chooses to be the
   * priority for the list of moderated items. All prioritized
   * moderated items will precede all others within the list of moderated items.
   * A moderated item is meant to belong to the prioritized moderated items
   * if its priorityId equals this priority.
   *
   * @return the priority which an editor chooses to be the
   * prioritization for the list of moderated items
   *
   * @see ContributionAdministrationPropertyNames#PRIORITY
   * @see #getModeratedItems()
   * @see ModeratedItem#getPriorityId()
   * /
  public*/ function getPriority()/*:String*/ {
    var priority/*:**/ = this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PRIORITY);
    return  priority ? priority : "";
  }/*

  /**
   * Prioritizes the list of moderated items by the given priority id.
   * Prioritizing the list means that it displays all moderated items having
   * the given priorityId in front of all others.
   *
   * @param priorityId the target which is used to prioritize the list
   * /
  public*/ function prioritize(priorityId/*:String*/)/*:void*/ {
    var oldPriority/*:Object*/ = this.getPriority();
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PRIORITY, priorityId);
    if (oldPriority !== priorityId) {
      this.invalidate();
    }
  }/*

  /**
   * Removes the prioritization of the list of moderated items if one was set.
   * /
  public*/ function unprioritize()/*:void*/ {
    var oldPrioritization/*:Object*/ = this.getPriority();
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PRIORITY, null);
    if (oldPrioritization) {
      this.invalidate();
    }
  }/*

  /**
   * Sets the contribution which should be the last one processed, that is
   * approved or rejected.
   *
   * @param lastProcessed the last processed contribution.
   *
   * @see #approve()
   * @see #reject()
   * /
  public*/ function setLastProcessed(lastProcessed/*:Contribution*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.LAST_PROCESSED, lastProcessed);
  }/*

  /**
   * Returns the last processed contribution, which is the last one
   * approved or rejected.
   *
   * @return the last processed contribution.
   *
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.LAST_PROCESSED
   * /
  public*/ function getLastProcessed()/*:Contribution*/ {
    var lastProcessed/*:Contribution*/ =AS3.as( this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.LAST_PROCESSED),  com.coremedia.elastic.social.studio.model.Contribution);
    // return null if the last processed contribution is a deleted user
    if (lastProcessed.getContributionState() === "ANONYMIZED") {
      return null;
    }
    return lastProcessed;
  }/*

  /**
   * Returns <code>true</code> if there is a last processed <code>Contribution</code>.
   *
   * @return <code>true</code> if there is a last processed <code>Contribution</code>.
   * /
  public*/ function hasLastProcessed()/*:Boolean*/ {
    return this.getLastProcessed();
  }/*

  /**
   * Returns the number of <code>Contribution</code>s which were processed within
   * the current session.
   *
   * @return the number of <code>Contribution</code>s which were processed within
   * the current session.
   * /
  public*/ function getProcessedCounter()/*:uint*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.PROCESS_COUNTER);
  }/*

  /**
   * Returns whether this moderation process is currently in list mode or not.
   * List mode means, that the ui presents the list of  moderated items
   * to the user who might select one <code>ModeratedItem</code> for processing its contribution.
   * When in list mode, the displayed contribution (the one the user wants to process)
   * equals the selected moderated items target.
   *
   * @return <code>true</code> if list mode is active.
   *
   * @see ModeratedItem#getTarget()
   * @see #isLastMode()
   * @see #getDisplayed()
   * @see #setSelectedContribution()
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE
   * /
  public*/ function isListMode()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE) === MODE_LIST$static;
  }/*

  /**
   * Sets the moderation process to list mode. If there is a selected  moderated item
   * this method guarantees that after returning the selected  moderated items target
   * equals the displayed contribution.
   *
   * @see #isListMode()
   * @see #setSelectedContribution()
   * /
  public*/ function setListMode()/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE, MODE_LIST$static);
    this.selectedChanged$0Xqt();
  }/*

  /**
   * Returns whether this moderation process is currently in last mode or not.
   * Last mode means that the currently displayed <code>ModeratedItem</code>, which
   * is the one a user might want to process, is not set via selecting one
   * from a list of <code>ModeratedItem</code>s as is the case for the list mode.
   * Instead the currently displayed <code>Contribution</code> equals the last
   * processed one.
   *
   * @return <code>true</code> if the moderation process is in last mode.
   *
   * @see #isListMode()
   * @see #getLastProcessed()
   * @see com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE
   * /
  public*/ function isLastMode()/*:Boolean*/ {
    return this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE) === MODE_LAST$static;
  }/*

  /**
   * Sets the moderation process to last mode. If there is a last processed
   * <code>Contribution</code> this method guarantees that the displayed
   * <code>Contribution</code> equals the last processed one and that no <code>ModeratedItem</code>
   * is selected, that is, the selected one is null.
   *
   * @see #getLastProcessed()
   * @see #getSelectedContribution()
   * @see #getDisplayed()
   * /
  public*/ function setLastMode()/*:void*/ {
    if (this.hasLastProcessed()) {
      this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE, MODE_LAST$static);
      this.setDisplayed(this.getLastProcessed());
      this.getDisplayed() && this.getDisplayed().invalidate();
      this.setSelectedContribution(null);
    }
  }/*


  //------private methods ------

  private*/ function getModerationQuerySuffix()/*:String*/ {
    var url/*:String*/ = "?direction=" + this.getSorting();

    if (this.getPriority()) {
      url = url + "&priorityId=" + encodeURIComponent(this.getPriority());
    }

    url = url + this.getSearchFiltersQuery$0Xqt();

    return url;
  }/*

  private*/ function selectedChanged(invalidateFlag/*:Boolean = true*/)/*:void*/ {if(arguments.length<=0)invalidateFlag=true;
    var selected/*:ModeratedItem*/ = this.getSelectedContribution();
    if (this.isListMode()) {
      if (selected) {
        this.setSelectedAndRefreshTarget$0Xqt(selected, invalidateFlag);
      } else if (this.getModeratedItems() && this.getModeratedItems().length > 0) {
        this.setSelectedAndRefreshTarget$0Xqt(this.getModeratedItems()[0], invalidateFlag);
      } else {
        this.setSelectedContribution(null);
      }
    } else if (this.isLastMode() && selected) {
      // Here the user was in last mode and selected a contribution from the list
      // manually. We need to switch back to list mode then.
      this.setListMode();
      this.setDisplayed(selected.getTarget());
    }
  }/*

  private*/ function setSelectedAndRefreshTarget(selected/*:ModeratedItem*/, invalidateFlag/*:Boolean*/)/*:void*/ {
    if (invalidateFlag) {
      selected.getTarget() && selected.getTarget().invalidate();
      this.setSelectedContribution(selected);
    }
  }/*

  private*/ function setSelectedModerationContributionItems(items/*:Array*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_ITEMS, items);
  }/*

  /**
   * validate if necessary: only if there is no complaintDate available.
   * /
  private*/ function selectAndInvalidateIfNecessary()/*:void*/ {
    if (this.oldSelected$0Xqt === this.getSelectedContribution() && this.getSelectedContribution() && this.oldComplaintDate$0Xqt !== this.getSelectedContribution().getLastComplaintDate()) {
      this.selectedChanged$0Xqt(true);
    }
  }/*

  private*/ function selectAndValidate()/*:void*/ {
    this.oldSelected$0Xqt = this.getSelectedContribution();
    if (this.oldSelected$0Xqt) {
      this.oldComplaintDate$0Xqt = this.oldSelected$0Xqt.getLastComplaintDate();
    }
    else {
      this.oldComplaintDate$0Xqt = null;
    }
    this.selectedChanged$0Xqt(true);
  }/*

  //////////////////////
  /// Search Filters ///
  //////////////////////

  public*/ function addSearchFilter(searchFilter/*:SearchFilter*/)/*:void*/ {
    var searchFilters/*:Array*/ = this.getSearchFiltersValueExpression$0Xqt().getValue();
    this.getSearchFiltersValueExpression$0Xqt().setValue(searchFilters.concat([searchFilter]));
    searchFilter.getStateBean().addValueChangeListener(AS3.bind(this,"updateList"));
  }/*

  public*/ function clearSearchFilters()/*:void*/ {
    this.getSearchFiltersValueExpression$0Xqt().setValue([]);
  }/*

  private*/ function getSearchFiltersValueExpression()/*:ValueExpression*/ {
    if (!this.searchFiltersBeanValueExpression$0Xqt) {
      this.searchFiltersBeanValueExpression$0Xqt = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.searchFiltersBeanValueExpression$0Xqt;
  }/*

  public*/ function areFiltersInDefaultState()/*:Boolean*/ {
    var searchFilters/*:Array*/ = this.getSearchFiltersValueExpression$0Xqt().getValue();
    for/* each*/ (var $1=0;$1</* in*/ searchFilters.length;++$1) {var searchFilter/*:SearchFilter*/ =searchFilters[$1];
      if (!com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(searchFilter.getStateBean().toObject(), searchFilter.getDefaultState())) {
        return false;
      }
    }

    return true;
  }/*

  private*/ function getSearchFiltersQuery()/*:String*/ {
    var query/*:String*/ = "";

    var searchFilters/*:Array*/ = this.getSearchFiltersValueExpression$0Xqt().getValue();
    for/* each*/ (var $1=0;$1</* in*/ searchFilters.length;++$1) {var searchFilter/*:SearchFilter*/ =searchFilters[$1];
      var filterQuery/*:String*/ = searchFilter.buildQuery();
      query = (filterQuery === "") ? query : (query + "&" + filterQuery);
    }

    return query;
  }/*

  private*/ function createCategoryBeans()/*:Array*/ {
    var categoryBeans/*:Array*/ = [];
    var filterCategories/*:Array*/ = this.get(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_CATEGORIES) || [];

    for/* each*/ (var $1=0;$1</* in*/ filterCategories.length;++$1) {var category/*:Object*/ =filterCategories[$1];
      categoryBeans.push(com.coremedia.ui.data.beanFactory.createLocalBean({
        key: category.key,
        display: category.display
      }));
    }

    return categoryBeans;
  }/*

  public*/ function getCategoryBeansValueExpression()/*:ValueExpression*/ {
    if (!this.categoryBeansValueExpression$0Xqt) {
      this.categoryBeansValueExpression$0Xqt = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.categoryBeansValueExpression$0Xqt;
  }/*

  public*/ function getStatisticsValueExpression()/*:ValueExpression*/ {
    if (!this.statisticsValueExpression$0Xqt) {
      this.statisticsValueExpression$0Xqt = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.statisticsValueExpression$0Xqt;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
      selectedValueExpressions$0Xqt: null,
      oldSelected$0Xqt: null,
      oldComplaintDate$0Xqt: undefined,
      searchFiltersBeanValueExpression$0Xqt: null,
      categoryBeansValueExpression$0Xqt: null,
      statisticsValueExpression$0Xqt: null,
      moderation$0Xqt: null,
      updateRequestCounter$0Xqt: 0,
      mostRecentUpdateRequest$0Xqt: 0,
      constructor: ModerationContributionAdministration$,
      super$0Xqt: function() {
        com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration.prototype.constructor.apply(this, arguments);
      },
      setSelectedContribution: setSelectedContribution,
      getSelectedContribution: getSelectedContribution,
      getSelectedContributionItems: getSelectedContributionItems,
      updateList: updateList,
      updateModerationInfo$0Xqt: updateModerationInfo,
      updateModerationStatistics: updateModerationStatistics,
      doUpdateModerationStatistics: doUpdateModerationStatistics,
      increaseProcessedCounter$0Xqt: increaseProcessedCounter,
      processedContribution: processedContribution,
      setDisplayed: setDisplayed,
      getDisplayed: getDisplayed,
      hasDisplayed: hasDisplayed,
      getModeratedItems: getModeratedItems,
      registerSelectedChangeListener: registerSelectedChangeListener,
      removeSelectedChangeListener: removeSelectedChangeListener,
      removeFromList: removeFromList,
      getPriority: getPriority,
      prioritize: prioritize,
      unprioritize: unprioritize,
      setLastProcessed: setLastProcessed,
      getLastProcessed: getLastProcessed,
      hasLastProcessed: hasLastProcessed,
      getProcessedCounter: getProcessedCounter,
      isListMode: isListMode,
      setListMode: setListMode,
      isLastMode: isLastMode,
      setLastMode: setLastMode,
      getModerationQuerySuffix$0Xqt: getModerationQuerySuffix,
      selectedChanged$0Xqt: selectedChanged,
      setSelectedAndRefreshTarget$0Xqt: setSelectedAndRefreshTarget,
      setSelectedModerationContributionItems$0Xqt: setSelectedModerationContributionItems,
      selectAndInvalidateIfNecessary$0Xqt: selectAndInvalidateIfNecessary,
      selectAndValidate$0Xqt: selectAndValidate,
      addSearchFilter: addSearchFilter,
      clearSearchFilters: clearSearchFilters,
      getSearchFiltersValueExpression$0Xqt: getSearchFiltersValueExpression,
      areFiltersInDefaultState: areFiltersInDefaultState,
      getSearchFiltersQuery$0Xqt: getSearchFiltersQuery,
      createCategoryBeans$0Xqt: createCategoryBeans,
      getCategoryBeansValueExpression: getCategoryBeansValueExpression,
      getStatisticsValueExpression: getStatisticsValueExpression,
      requires: [
        "com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Contribution",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ModeratedItem",
        "com.coremedia.elastic.social.studio.model.ModeratedItemPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler"
      ]
    };
});
