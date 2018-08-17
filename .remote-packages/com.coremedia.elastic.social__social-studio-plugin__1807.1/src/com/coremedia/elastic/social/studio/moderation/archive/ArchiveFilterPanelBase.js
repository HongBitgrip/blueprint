Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanelBase", function(ArchiveFilterPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.archive {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.HistoryPropertyNames;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;
import ext.form.field.ComboBox;
import ext.form.field.TextField;

public class ArchiveFilterPanelBase extends Container {
  protected static const SEARCH_TYPE_COMBO_ITEM_ID:String = "search-type-combo";
  protected static const SEARCH_FIELD_ITEM_ID:String = "search-field";
  protected static const STATE_FILTER_ITEM_ID:String = "state-combo";
  protected static const AUTHOR_COMBO_ITEM_ID:String = "author-textfield";
  protected static const FROM_DATE_FIELD_ID:String = "from-datefield";
  protected static const TO_DATE_FIELD_ID:String = "to-datefield";
  protected static const RESET_FROM_DATE_FIELD_ID:String = "reset-from-datefield";
  protected static const RESET_TO_DATE_FIELD_ID:String = "reset-to-datefield";
  protected static const RESET_FILTER_BUTTON_ITEM_ID:String = "reset-filter";
  protected static const FORWARD_BUTTON_ITEM_ID:String = "forward";
  protected static const BACK_BUTTON_ITEM_ID:String = "back";
  protected static const MAGNIFIER_BUTTON_ITEM_ID:String = "magnifier";
  protected static const SUGGESTION_SEGMENT:String = "/archive/suggestions";

  protected static const COMBO_TYPE_ANY:String = "any";
  protected static const COMBO_TYPE_COMMENTS:String = "text";
  protected static const COMBO_TYPE_REVIEWS:String = "review";
  protected static const COMBO_TYPE_COMMENTS_WITH_MEDIA:String = "media";

  protected static const COMBO_STATE_ALL:String = "ALL";
  protected static const COMBO_STATE_NEW:String = "NEW";
  protected static const COMBO_STATE_APPROVED:String = "APPROVED";
  protected static const COMBO_STATE_REJECTED:String = "REJECTED";

  private var backwardValueExpression:ValueExpression;
  private var forwardValueExpression:ValueExpression;

  private var searchTypeCombo:ComboBox;
  private var searchField:TextField;
  private var stateCombo:ComboBox;
  private var authorCombo:ComboBox;
  private var fromDateField:StatefulDateField;
  private var toDateField:StatefulDateField;

  private var archiveContributionAdministration:ArchiveContributionAdministration;


  public*/ function ArchiveFilterPanelBase$(config/*:ArchiveFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$EZc9(config);
    this.archiveContributionAdministration$EZc9 =AS3.as( AS3.getBindable(config,"contributionAdministration"),  com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration);
  }/*

  protected*/ function getBackwardValueExpression(contributionAdministration/*:AbstractContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.backwardValueExpression$EZc9) {
      this.backwardValueExpression$EZc9 = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_HISTORY,
                com.coremedia.elastic.social.studio.model.HistoryPropertyNames.BACKWARD_ENABLED]), contributionAdministration);
    }

    return this.backwardValueExpression$EZc9;
  }/*

  protected*/ function getForwardValueExpression(contributionAdministration/*:AbstractContributionAdministration*/)/*:ValueExpression*/ {
    if (!this.forwardValueExpression$EZc9) {
      this.forwardValueExpression$EZc9 = com.coremedia.ui.data.ValueExpressionFactory.create(
              com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.FILTER_HISTORY,
                com.coremedia.elastic.social.studio.model.HistoryPropertyNames.FORWARD_ENABLED]), contributionAdministration);
    }

    return this.forwardValueExpression$EZc9;
  }/*

  public*/ function showContribution(contribution/*:Contribution*/)/*:void*/ {
    this.clearFilter$EZc9();
    this.getSearchField$EZc9().setValue(contribution.getId());
    this.proceedFilter();
  }/*

  /**
   * fire up the filter settings and receive the result inside archive tab list.
   * /
  protected*/ function proceedFilter()/*:void*/ {
    //mmmh, the old implementation had an empty string as combo value: this is not selectable by default
    var searchType/*:String*/ = this.getSearchTypeCombo$EZc9().getValue();
    if(searchType === ArchiveFilterPanelBase.COMBO_TYPE_ANY) {
      searchType = "";
    }

    var stateType/*:String*/ = this.getStateCombo$EZc9().getValue();
    if(stateType === ArchiveFilterPanelBase.COMBO_STATE_ALL) {
      stateType = "";
    }

    this.archiveContributionAdministration$EZc9.applyFilter("" +
            searchType,
            this.getSearchField$EZc9().getValue(),
            stateType,
            this.getAuthorNameTextField$EZc9().getValue(),
            this.getFromDateField$EZc9().getValue(),
            this.getToDateField$EZc9().getValue());
  }/*

  private*/ function getSearchTypeCombo()/*:ComboBox*/ {
    if (!this.searchTypeCombo$EZc9) {
      this.searchTypeCombo$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.SEARCH_TYPE_COMBO_ITEM_ID),  Ext.form.field.ComboBox);
    }
    return this.searchTypeCombo$EZc9;
  }/*

  private*/ function getSearchField()/*:TextField*/ {
    if (!this.searchField$EZc9) {
      this.searchField$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.SEARCH_FIELD_ITEM_ID),  Ext.form.field.Text);
    }
    return this.searchField$EZc9;
  }/*

  private*/ function getStateCombo()/*:ComboBox*/ {
    if (!this.stateCombo$EZc9) {
      this.stateCombo$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.STATE_FILTER_ITEM_ID),  Ext.form.field.ComboBox);
    }
    return this.stateCombo$EZc9;
  }/*

  private*/ function getAuthorNameTextField()/*:ComboBox*/ {
    if (!this.authorCombo$EZc9) {
      this.authorCombo$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.AUTHOR_COMBO_ITEM_ID),  Ext.form.field.ComboBox);
    }
    return this.authorCombo$EZc9;
  }/*

  private*/ function getFromDateField()/*:StatefulDateField*/ {
    if (!this.fromDateField$EZc9) {
      this.fromDateField$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.FROM_DATE_FIELD_ID),  com.coremedia.ui.components.StatefulDateField);
    }
    return this.fromDateField$EZc9;
  }/*

  private*/ function getToDateField()/*:StatefulDateField*/ {
    if (!this.toDateField$EZc9) {
      this.toDateField$EZc9 =AS3.as( this.queryById(ArchiveFilterPanelBase.TO_DATE_FIELD_ID),  com.coremedia.ui.components.StatefulDateField);
    }
    return this.toDateField$EZc9;
  }/*

  /**
   * Show the previous Search Query and its result if it exist.
   * /
  protected*/ function back()/*:void*/ {
    var filter/*:Object*/ = this.archiveContributionAdministration$EZc9.getFilterHistory().backward();
    this.applyFilterState$EZc9(filter);
  }/*

  /**
   * Show the next Search Query and its result if it exist.
   * /
  protected*/ function forward()/*:void*/ {
    var filter/*:Object*/ = this.archiveContributionAdministration$EZc9.getFilterHistory().forward();
    this.applyFilterState$EZc9(filter);
  }/*

  private*/ function applyFilterState(filter/*:Object*/)/*:void*/ {
    var filterScope/*:String*/ = filter.scope;
    var filterTerm/*:String*/ = filter.term;
    var filterStatus/*:String*/ = filter.status;
    var filterAuthor/*:String*/ = filter.author;
    var filterFromDate/*:Date*/ = filter.fromDate && new Date(filter.fromDate);
    var filterToDate/*:Date*/ = filter.toDate && new Date(filter.toDate);

    if(!filterScope || filterScope.length === 0) {
      filterScope = ArchiveFilterPanelBase.COMBO_TYPE_ANY;
    }

    if(!filterStatus || filterStatus.length === 0) {
      filterStatus = ArchiveFilterPanelBase.COMBO_STATE_ALL;
    }

    this.getSearchField$EZc9().setValue(filterTerm);
    this.getSearchTypeCombo$EZc9().setValue(filterScope);
    this.getStateCombo$EZc9().setValue(filterStatus);
    this.getAuthorNameTextField$EZc9().setValue(filterAuthor);
    this.getFromDateField$EZc9().setValue(filterFromDate);
    this.getToDateField$EZc9().setValue(filterToDate);

    this.proceedFilter();
  }/*


  protected*/ function resetFilter()/*:void*/ {
    this.clearFilter$EZc9();
    this.proceedFilter();
  }/*

  private*/ function clearFilter()/*:void*/ {
    this.getSearchTypeCombo$EZc9().setValue(ArchiveFilterPanelBase.COMBO_TYPE_ANY);
    this.getSearchField$EZc9().setValue("");
    this.getStateCombo$EZc9().setValue(ArchiveFilterPanelBase.COMBO_STATE_ALL);
    this.getAuthorNameTextField$EZc9().setValue("");
    this.getFromDateField$EZc9().setValue("");
    this.getToDateField$EZc9().setValue("");
  }/*

  internal*/ function resetFromDate()/*:void*/ {
    this.getFromDateField$EZc9() && this.getFromDateField$EZc9().reset();
    this.proceedFilter();
  }/*

  internal*/ function resetToDate()/*:void*/ {
    this.getToDateField$EZc9() && this.getToDateField$EZc9().reset();
    this.proceedFilter();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      backwardValueExpression$EZc9: null,
      forwardValueExpression$EZc9: null,
      searchTypeCombo$EZc9: null,
      searchField$EZc9: null,
      stateCombo$EZc9: null,
      authorCombo$EZc9: null,
      fromDateField$EZc9: null,
      toDateField$EZc9: null,
      archiveContributionAdministration$EZc9: null,
      constructor: ArchiveFilterPanelBase$,
      super$EZc9: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getBackwardValueExpression: getBackwardValueExpression,
      getForwardValueExpression: getForwardValueExpression,
      showContribution: showContribution,
      proceedFilter: proceedFilter,
      getSearchTypeCombo$EZc9: getSearchTypeCombo,
      getSearchField$EZc9: getSearchField,
      getStateCombo$EZc9: getStateCombo,
      getAuthorNameTextField$EZc9: getAuthorNameTextField,
      getFromDateField$EZc9: getFromDateField,
      getToDateField$EZc9: getToDateField,
      back: back,
      forward: forward,
      applyFilterState$EZc9: applyFilterState,
      resetFilter: resetFilter,
      clearFilter$EZc9: clearFilter,
      resetFromDate: resetFromDate,
      resetToDate: resetToDate,
      statics: {
        SEARCH_TYPE_COMBO_ITEM_ID: "search-type-combo",
        SEARCH_FIELD_ITEM_ID: "search-field",
        STATE_FILTER_ITEM_ID: "state-combo",
        AUTHOR_COMBO_ITEM_ID: "author-textfield",
        FROM_DATE_FIELD_ID: "from-datefield",
        TO_DATE_FIELD_ID: "to-datefield",
        RESET_FROM_DATE_FIELD_ID: "reset-from-datefield",
        RESET_TO_DATE_FIELD_ID: "reset-to-datefield",
        RESET_FILTER_BUTTON_ITEM_ID: "reset-filter",
        FORWARD_BUTTON_ITEM_ID: "forward",
        BACK_BUTTON_ITEM_ID: "back",
        MAGNIFIER_BUTTON_ITEM_ID: "magnifier",
        SUGGESTION_SEGMENT: "/archive/suggestions",
        COMBO_TYPE_ANY: "any",
        COMBO_TYPE_COMMENTS: "text",
        COMBO_TYPE_REVIEWS: "review",
        COMBO_TYPE_COMMENTS_WITH_MEDIA: "media",
        COMBO_STATE_ALL: "ALL",
        COMBO_STATE_NEW: "NEW",
        COMBO_STATE_APPROVED: "APPROVED",
        COMBO_STATE_REJECTED: "REJECTED"
      },
      requires: [
        "Ext.container.Container",
        "Ext.form.field.ComboBox",
        "Ext.form.field.Text",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.HistoryPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ArchiveContributionAdministration",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
