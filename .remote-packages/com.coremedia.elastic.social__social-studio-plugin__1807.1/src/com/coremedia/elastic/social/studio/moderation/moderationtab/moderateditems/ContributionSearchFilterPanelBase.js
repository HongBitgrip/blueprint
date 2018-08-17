Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanelBase", function(ContributionSearchFilterPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems {
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.struct.StructType;
import com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.store.BeanRecord;

import ext.JSON;
import ext.button.Button;
import ext.form.field.ComboBox;

public class ContributionSearchFilterPanelBase extends FilterPanel {
  public static const CATEGORY_ELEMENTS_CT_ITEM_ID:String = "categoryElementsCtItemId";

  //noinspection JSFieldCanBeLocal
  private const MODERATION_FILTER_PREFERENCES:String = "moderation";
  //noinspection JSFieldCanBeLocal
  protected const INCLUDE_COMMENTS_PROPERTY:String = "includeComments";
  //noinspection JSFieldCanBeLocal
  protected const SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY:String = "showCommentsForAllSites";
  //noinspection JSFieldCanBeLocal
  protected const INCLUDE_USERS_PROPERTY:String = "includeUsers";
  //noinspection JSFieldCanBeLocal
  private const SELECTED_COMMENT_CATEGORIES_PROPERTY:String = "selectedCommentCategories";

  private var commentsDisabledValueExpression:ValueExpression;
  private var enableSiteSpecificCommentsSwitchVE:ValueExpression;
  private var excludeCommentsValueExpression:ValueExpression;
  private var selectedCategoriesValueExpression:ValueExpression;
  private var selectedCategoriesAsBeansValueExpression:ValueExpression;
  private var selectableCategoriesValueExpression:ValueExpression;
  private var isCategoriesListConfiguredVE:ValueExpression;

  [Bindable]
  public var categoriesListValueExpression:ValueExpression;

  private var categorySelector:ComboBox;

  public*/ function ContributionSearchFilterPanelBase$(config/*:ContributionSearchFilterPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$UiIN(config);

    this.updateStateBeanFromModerationStruct$UiIN();
    this.getStateBean().addValueChangeListener(AS3.bind(this,"updateModerationStructFromStateBean$UiIN"));

    AS3.getBindable(this,"categoriesListValueExpression").addChangeListener(AS3.bind(this,"filterSelectedCategories$UiIN"));
    this.filterSelectedCategories$UiIN();

    this.categorySelector$UiIN =AS3.as( this.queryById(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel.CATEGORY_SELECTOR_ITEM_ID),  Ext.form.field.ComboBox);
    this.mon(this.categorySelector$UiIN, "select",AS3.bind( this,"categorySelected$UiIN"));
  }/*

  private*/ function updateStateBeanFromModerationStruct()/*:void*/ {
    var moderationStruct/*:Struct*/ = this.prepareModerationStruct$UiIN();
    var updatedProperties/*:Object*/ = {};
    updatedProperties[this.INCLUDE_COMMENTS_PROPERTY] = moderationStruct.get(this.INCLUDE_COMMENTS_PROPERTY);
    updatedProperties[this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY] = this.getEnableSiteSpecificCommentsSwitchVE().getValue() ? moderationStruct.get(this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY) : false;
    updatedProperties[this.INCLUDE_USERS_PROPERTY] = moderationStruct.get(this.INCLUDE_USERS_PROPERTY);
    updatedProperties[this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN] = moderationStruct.get(this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN);
    this.getStateBean().updateProperties(updatedProperties);
  }/*

  private*/ function updateModerationStructFromStateBean()/*:void*/ {
    var moderationStruct/*:Struct*/ = this.prepareModerationStruct$UiIN();
    moderationStruct.updateProperties(this.getStateBean().toObject());
  }/*

  override public*/ function getDefaultState()/*:Object*/ {
    var defaultState/*:Object*/ = {};

    defaultState[this.INCLUDE_COMMENTS_PROPERTY] = true;
    defaultState[this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY] = false;
    defaultState[this.INCLUDE_USERS_PROPERTY] = true;
    defaultState[this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN] = [];

    return defaultState;
  }/*

  /**
   * Filter out selected categories not available in {@link #categoriesListValueExpression}.
   * /
  private*/ function filterSelectedCategories()/*:void*/ {
    var availableCategories/*:Array*/ = AS3.getBindable(this,"categoriesListValueExpression").getValue();
    if (availableCategories !== undefined) {
      var newSelectedCategories/*:Array*/ = [];
      var oldSelectedCategories/*:Array*/ = this.getSelectedCategoriesAsBeansValueExpression().getValue() || [];
      oldSelectedCategories.forEach(function (categoryBean/*:Bean*/)/*:void*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var filtered/*:Array*/ = [];
        if (availableCategories) {
          filtered = availableCategories.filter(function (availableCategoryBean/*:Bean*/)/*:Boolean*/ {
            return categoryBean.get('key') === availableCategoryBean.get('key');
          });
        }
        if (filtered.length > 0) {
          newSelectedCategories.push(categoryBean);
        }
      });

      this.getSelectedCategoriesValueExpression().setValue(this.getCategoryBeansAsStrings$UiIN(newSelectedCategories));
    }
  }/*

  override public*/ function buildQuery()/*:String*/ {
    var includeComments/*:Boolean*/ = this.getStateBean().get(this.INCLUDE_COMMENTS_PROPERTY);
    var includeUsers/*:Boolean*/ = this.getStateBean().get(this.INCLUDE_USERS_PROPERTY);

    var query/*:String*/ = "includeComments=" + includeComments
            + "&includeUsers=" + includeUsers;

    if (includeComments) {
      // add comment categories if given
      query = query + this.buildCommentCategoriesQuery$UiIN();
      // add preferred site if given
      query = query + this.getCommentSitesQuery$UiIN();
    }
    return query;
  }/*

  private*/ function getCommentSitesQuery()/*:String*/ {
    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var preferredSiteId/*:String*/ = sitesService.getPreferredSiteId();
    var query/*:String*/ = "";

    if (preferredSiteId
            && preferredSiteId.length > 0
            && !this.getStateBean().get(this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY)) {
      query = "&comments_target.site=" + preferredSiteId;
    }

    return query;
  }/*

  private*/ function buildCommentCategoriesQuery()/*:String*/ {
    var query/*:String*/ = "";

    this.getSelectedCategoriesAsBeansValueExpression().getValue().forEach(function (categoryBean/*:Bean*/)/*:void*/ {
      query = query + "&categories=" + categoryBean.get('key');
    });

    return query;
  }/*

  protected*/ function getIsCategoriesListConfiguredVE(categoriesListVE/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.isCategoriesListConfiguredVE$UiIN) {
      this.isCategoriesListConfiguredVE$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        //noinspection JSMismatchedCollectionQueryUpdate
        var categoriesList/*:Array*/ = (AS3.as(categoriesListVE.getValue(),  Array)) || [];
        return categoriesList.length > 0;
      });
    }
    return this.isCategoriesListConfiguredVE$UiIN;
  }/*

  protected*/ function getSelectedCategoriesValueExpression()/*:ValueExpression*/ {
    if (!this.selectedCategoriesValueExpression$UiIN) {
      this.selectedCategoriesValueExpression$UiIN = com.coremedia.ui.data.ValueExpressionFactory.create(this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN, this.getStateBean());
      this.selectedCategoriesValueExpression$UiIN.setValue([]);
    }
    return this.selectedCategoriesValueExpression$UiIN;
  }/*

  protected*/ function getSelectedCategoriesAsBeansValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.selectedCategoriesAsBeansValueExpression$UiIN) {
      this.selectedCategoriesAsBeansValueExpression$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var selectedCategories/*:Array*/ = this$.getSelectedCategoriesValueExpression().getValue();
        return selectedCategories.map(function (categoryString/*:String*/)/*:Bean*/ {
          var jsonObject/*:Object*/ = Ext.JSON.decode(categoryString);
          return com.coremedia.ui.data.beanFactory.createLocalBean(jsonObject);
        });
      });
    }

    return this.selectedCategoriesAsBeansValueExpression$UiIN;
  }/*

  private*/ function getCategoryBeansAsStrings(categoryBeans/*:Array*/)/*:Array*/ {
    var categoryStrings/*:Array*/ = categoryBeans.map(function (categoryBean/*:Bean*/)/*:String*/ {
      return categoryBean.toJson();
    });

    return categoryStrings;
  }/*

  protected*/ function getExcludeCommentsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.excludeCommentsValueExpression$UiIN) {
      this.excludeCommentsValueExpression$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function commentsExcluded()/*:Boolean*/ {
        return !this$.getStateBean().get(this$.INCLUDE_COMMENTS_PROPERTY) || false;
      });
    }

    return this.excludeCommentsValueExpression$UiIN;
  }/*

  protected*/ function getDisabledCommentsValueExpression(categoriesList/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    if (!this.commentsDisabledValueExpression$UiIN) {
      this.commentsDisabledValueExpression$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function commentsDisabled()/*:Boolean*/ {
        // includeComments == true and selectableCategories > 0
        return !(this$.getStateBean().get(this$.INCLUDE_COMMENTS_PROPERTY)
        && (AS3.as(this$.getSelectableCategoriesValueExpression(categoriesList).getValue(),  Array)).length > 0);
      });
    }
    return this.commentsDisabledValueExpression$UiIN;
  }/*

  public*/ function getEnableSiteSpecificCommentsSwitchVE()/*:ValueExpression*/ {
    if (!this.enableSiteSpecificCommentsSwitchVE$UiIN) {
      this.enableSiteSpecificCommentsSwitchVE$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }

    return this.enableSiteSpecificCommentsSwitchVE$UiIN;
  }/*

  protected*/ function getSelectableCategoriesValueExpression(availableCategoriesValueExpression/*:ValueExpression*/)/*:ValueExpression*/ {var this$=this;
    if (!this.selectableCategoriesValueExpression$UiIN) {
      this.selectableCategoriesValueExpression$UiIN = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var selectableCategories/*:Array*/ = [];

        var availableCategories/*:Array*/ = availableCategoriesValueExpression.getValue() || [];
        availableCategories.forEach(function (selectableCategory/*:Bean*/)/*:void*/ {
          //noinspection JSMismatchedCollectionQueryUpdate
          var filteredSelectedCategories/*:Array*/ = this$.getSelectedCategoriesAsBeansValueExpression().getValue().filter(function (selectedCategory/*:Bean*/)/*:Boolean*/ {
            return selectableCategory.get("key") === selectedCategory.get("key");
          });
          if (filteredSelectedCategories.length === 0) {
            selectableCategories.push(selectableCategory);
          }
        });

        return selectableCategories;
      });
    }
    return this.selectableCategoriesValueExpression$UiIN;
  }/*

  //noinspection JSUnusedLocalSymbols
  private*/ function categorySelected(combo/*:ComboBox*/, record/*:BeanRecord*/, index/*:int*/)/*:void*/ {
    var selectedCategories/*:Array*/ = this.getSelectedCategoriesAsBeansValueExpression().getValue();
    //noinspection JSMismatchedCollectionQueryUpdate
    var selectedCategoriesFiltered/*:Array*/ = selectedCategories.filter(function (category/*:Bean*/)/*:Boolean*/ {
      return category.get("key") === record.get("key");
    });
    if (selectedCategoriesFiltered.length === 0) {
      var resultCategories/*:Array*/ = selectedCategories.concat([record.getBean()]);
      this.getSelectedCategoriesValueExpression().setValue(this.getCategoryBeansAsStrings$UiIN(resultCategories));
    }
    this.updateComboState$UiIN(combo.getStore().getCount() - 1);
  }/*

  /**
   * Expand the combo box again for the next selection if there are items left.
   * /
  private*/ function updateComboState(size/*:int*/)/*:void*/ {
    if (size > 0) {
      this.categorySelector$UiIN.expand();
    }
    else {
      this.categorySelector$UiIN.setValue(null);
    }
  }/*

  protected*/ function removeSelectedCategory(button/*:Button*/)/*:void*/ {
    var selectedCategories/*:Array*/ = this.getSelectedCategoriesAsBeansValueExpression().getValue();
    selectedCategories = selectedCategories.filter(function (category/*:Bean*/)/*:Boolean*/ {
      return ContributionSearchFilterPanelBase.getCategoryKeyWithoutWhiteSpaces(category) !== button.getItemId();
    });
    this.getSelectedCategoriesValueExpression().setValue(this.getCategoryBeansAsStrings$UiIN(selectedCategories));
  }/*

  private*/ function prepareModerationStruct()/*:Struct*/ {
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    if (!preferences || !preferences.getState().readable) {
      return null;
    }

    var moderationStruct/*:Struct*/ =AS3.as( preferences.get(this.MODERATION_FILTER_PREFERENCES$UiIN),  com.coremedia.cap.struct.Struct);
    if (!moderationStruct) {
      var preferencesStructType/*:StructType*/ = preferences.getType();
      if (!preferencesStructType.hasProperty(this.MODERATION_FILTER_PREFERENCES$UiIN)) {
        preferencesStructType.addStructProperty(this.MODERATION_FILTER_PREFERENCES$UiIN);
        moderationStruct = preferences.get(this.MODERATION_FILTER_PREFERENCES$UiIN);
      }
    }

    var moderationStructType/*:StructType*/ = moderationStruct.getType();

    if (!moderationStructType.hasProperty(this.INCLUDE_COMMENTS_PROPERTY)) {
      moderationStructType.addBooleanProperty(this.INCLUDE_COMMENTS_PROPERTY, true);
    }
    if (!moderationStructType.hasProperty(this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY)) {
      moderationStructType.addBooleanProperty(this.SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY, true);
    }
    if (!moderationStructType.hasProperty(this.INCLUDE_USERS_PROPERTY)) {
      moderationStructType.addBooleanProperty(this.INCLUDE_USERS_PROPERTY, true);
    }
    if (!moderationStructType.hasProperty(this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN)) {
      moderationStructType.addStringListProperty(this.SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN, 1000000, []);
    }

    return moderationStruct;
  }/*

  public static*/ function getCategoryKeyWithoutWhiteSpaces$static(categoryBean/*:Bean*/)/*:String*/ {
    return categoryBean.get('key').replace(/ /g,'-');
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"categoriesListValueExpression").removeChangeListener(AS3.bind(this,"filterSelectedCategories$UiIN"));

    com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
      MODERATION_FILTER_PREFERENCES$UiIN: "moderation",
      INCLUDE_COMMENTS_PROPERTY: "includeComments",
      SHOW_COMMENTS_FOR_ALL_SITES_PROPERTY: "showCommentsForAllSites",
      INCLUDE_USERS_PROPERTY: "includeUsers",
      SELECTED_COMMENT_CATEGORIES_PROPERTY$UiIN: "selectedCommentCategories",
      commentsDisabledValueExpression$UiIN: null,
      enableSiteSpecificCommentsSwitchVE$UiIN: null,
      excludeCommentsValueExpression$UiIN: null,
      selectedCategoriesValueExpression$UiIN: null,
      selectedCategoriesAsBeansValueExpression$UiIN: null,
      selectableCategoriesValueExpression$UiIN: null,
      isCategoriesListConfiguredVE$UiIN: null,
      categorySelector$UiIN: null,
      constructor: ContributionSearchFilterPanelBase$,
      super$UiIN: function() {
        com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel.prototype.constructor.apply(this, arguments);
      },
      updateStateBeanFromModerationStruct$UiIN: updateStateBeanFromModerationStruct,
      updateModerationStructFromStateBean$UiIN: updateModerationStructFromStateBean,
      getDefaultState: getDefaultState,
      filterSelectedCategories$UiIN: filterSelectedCategories,
      buildQuery: buildQuery,
      getCommentSitesQuery$UiIN: getCommentSitesQuery,
      buildCommentCategoriesQuery$UiIN: buildCommentCategoriesQuery,
      getIsCategoriesListConfiguredVE: getIsCategoriesListConfiguredVE,
      getSelectedCategoriesValueExpression: getSelectedCategoriesValueExpression,
      getSelectedCategoriesAsBeansValueExpression: getSelectedCategoriesAsBeansValueExpression,
      getCategoryBeansAsStrings$UiIN: getCategoryBeansAsStrings,
      getExcludeCommentsValueExpression: getExcludeCommentsValueExpression,
      getDisabledCommentsValueExpression: getDisabledCommentsValueExpression,
      getEnableSiteSpecificCommentsSwitchVE: getEnableSiteSpecificCommentsSwitchVE,
      getSelectableCategoriesValueExpression: getSelectableCategoriesValueExpression,
      categorySelected$UiIN: categorySelected,
      updateComboState$UiIN: updateComboState,
      removeSelectedCategory: removeSelectedCategory,
      prepareModerationStruct$UiIN: prepareModerationStruct,
      beforeDestroy: beforeDestroy,
      config: {categoriesListValueExpression: null},
      statics: {
        CATEGORY_ELEMENTS_CT_ITEM_ID: "categoryElementsCtItemId",
        getCategoryKeyWithoutWhiteSpaces: getCategoryKeyWithoutWhiteSpaces$static
      },
      requires: [
        "Ext.JSON",
        "Ext.form.field.ComboBox",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.cms.editor.sdk.collectionview.search.FilterPanel",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ContributionSearchFilterPanel"]
    };
});
