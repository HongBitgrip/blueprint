Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeaderBase", function(ArchiveDetailStatusHeaderBase) {/*package com.coremedia.elastic.social.studio.moderation.archive {

import com.coremedia.elastic.social.studio.model.Comment;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.ContributionPropertyNames;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.models.bem.BEMBlock;

import ext.DateUtil;
import ext.container.Container;
import ext.form.field.DisplayField;

import mx.resources.ResourceManager;

use namespace DateUtil;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ArchiveDetailStatusHeaderBase extends Container implements IHighlightableMixin {

  private static const*/var STATUS_IN_MODERATION$static/*:String*/ = "in-moderation";/*
  private static const*/var STATUS_IGNORED$static/*:String*/ = "ignored";/*
  private static const*/var STATUS_REJECTED$static/*:String*/ = "rejected";/*
  private static const*/var STATUS_APPROVED$static/*:String*/ = "approved";/*
  private static const*/var STATUS_NEW$static/*:String*/ = "new";/*
  private static const*/var STATUS_NEW_ONLINE$static/*:String*/ = "new_online";/*
  protected static const STATUS_FIELD_ITEM_ID:String = "status-field-item-id";
  protected static const CREATION_DATE_ID:String = "creation-date-item-id";

  protected static const BLOCK:BEMBlock =*/function BLOCK$static_(){ArchiveDetailStatusHeaderBase.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-archive-detail-status-header"));}/*;

  private var displayedStateValueExpression:ValueExpression;
  private var displayedLastComplaintDateValueExpression:ValueExpression;
  private var selectedContributionsValueExpression:ValueExpression;

  private var contributionAdministration:AbstractContributionAdministration;
  private var statusDisplayField:DisplayField;
  private var dateDisplayField:DisplayField;

  public*/ function ArchiveDetailStatusHeaderBase$(config/*:ArchiveDetailStatusHeader = null*/) {if(arguments.length<=0)config=null;
    this.contributionAdministration$_8fL = AS3.getBindable(config,"contributionAdministration");

    var displayedValueExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(
            com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED, this.contributionAdministration$_8fL);

    this.displayedStateValueExpression$_8fL = displayedValueExpression.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.STATE);
    this.displayedLastComplaintDateValueExpression$_8fL = displayedValueExpression.extendBy(com.coremedia.elastic.social.studio.model.ContributionPropertyNames.LAST_COMPLAINT_DATE);
    this.selectedContributionsValueExpression$_8fL = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_ITEMS, this.contributionAdministration$_8fL);

    this.super$_8fL(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {var this$=this;
    Ext.container.Container.prototype.afterRender.call(this);
    this.displayedStateValueExpression$_8fL.addChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));
    this.displayedLastComplaintDateValueExpression$_8fL.addChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));
    this.selectedContributionsValueExpression$_8fL.addChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));

    var displayedContribution/*:Contribution*/ = this.contributionAdministration$_8fL.getDisplayed();
    if(displayedContribution) {
      ((AS3.as(displayedContribution,  com.coremedia.elastic.social.studio.model.Comment)).getAuthor()).load(function()/*:void*/ {
        this$.updateStatusOnChange$_8fL();
      });
    }
    else {
      this.updateStatusOnChange$_8fL();
    }
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.displayedStateValueExpression$_8fL.removeChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));
    this.displayedLastComplaintDateValueExpression$_8fL.removeChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));
    this.selectedContributionsValueExpression$_8fL.removeChangeListener(AS3.bind(this,"updateStatusOnChange$_8fL"));
    Ext.container.Container.prototype.onDestroy.call(this);
  }/*

  /**
   * update the statusBar -text and -style.
   * /
  private*/ function updateStatusOnChange()/*:void*/ {
    var displayedContribution/*:Contribution*/ = this.contributionAdministration$_8fL.getDisplayed();
    var selectionCount/*:int*/ = this.contributionAdministration$_8fL.getSelectedContributionItems().length;
    AS3.setBindable(this,"highlighted" , isHighlighted$static(displayedContribution, selectionCount));

    if (displayedContribution) {
      this.getStatusDisplayField$_8fL().setValue(this.getStatusText(displayedContribution, selectionCount));

      if(selectionCount == 1) {
        var creationDate/*:String*/ = Ext.Date.format(this.contributionAdministration$_8fL.getDisplayed().getCreationDate(), mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat'));
        this.getDateDisplayField$_8fL().setValue(creationDate);
      }
      else {
        this.getDateDisplayField$_8fL().setValue("");
      }
    } else {
      this.getStatusDisplayField$_8fL().setValue(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_nothing_selected'));
      this.getDateDisplayField$_8fL().setValue("");
      this.getDateDisplayField$_8fL().setValidation("");
    }
  }/*

  /**
   * Return the text that needs to be displayed at the given conditions.
   * @param value the current contributions
   * @param selectedItemsCount the number of currently selected items
   * @return the text that needs to be displayed
   * /
  protected*/ function getStatusText(value/*:Contribution*/, selectedItemsCount/*:Number*/)/*:String*/ {
    var result/*:String*/ = getStatus$static(value);
    var user/*:User*/ = ((AS3.as(value,  com.coremedia.elastic.social.studio.model.Comment)).getAuthor());

    if (selectedItemsCount > 1) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_multiple_selection');
    }
    else if (selectedItemsCount === 0) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_nothing_selected');
    }
    else if(user && user.isIgnored()) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_ignored');
    }
    else if (result === STATUS_APPROVED$static) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_approved');
    }
    else if (result === STATUS_REJECTED$static) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_rejected');
    }
    else if (result === STATUS_NEW_ONLINE$static) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_new_online');
    }
    else if (result === STATUS_NEW$static) {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_new');
    }
    else {
      return this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'detail_archive_header_inmoderation');
    }
  }/*

  /**
   * Checks if the status-bar is to be highlighted
   * @param value the current contributions
   * @param selectedItemsCount the number of currently selected items
   * @return the css-class for the given conditions
   * /
  private static*/ function isHighlighted$static(value/*:Contribution*/, selectedItemsCount/*:Number*/)/*:Boolean*/ {
    if (selectedItemsCount === 1) {
      var status/*:String*/ = getStatus$static(value);
      if (status === STATUS_IN_MODERATION$static || status === STATUS_NEW$static || status === STATUS_NEW_ONLINE$static || status === STATUS_IGNORED$static) {
        return true;
      }
    }
    return false;
  }/*

  /**
   * Get the status of the current contribution. Possible Values are the values of the constants:
   * <code>STATUS_REJECTED</code>, <code>STATUS_APPROVED</code>, <code>STATUS_IN_MODERATION</code>,
   * <code>STATUS_NEW</code>, <code>STATUS_NEW_ONLINE</code> or emptyString
   * if something went wrong (when no comment is available).
   * @param value the current contributions
   * @return
   * /
  private static*/ function getStatus$static(value/*:Contribution*/)/*:String*/ {
    var comment/*:Comment*/ =AS3.as( value,  com.coremedia.elastic.social.studio.model.Comment);
    if (comment) {
      var state/*:String*/ = comment.getContributionState();
      if(comment.getAuthor().isIgnored()) {
        return STATUS_IGNORED$static;
      }
      else if (state && state.toLowerCase() === STATUS_REJECTED$static && !comment.getLastComplaintDate()) {
        return STATUS_REJECTED$static;
      }
      else if (state && state.toLowerCase() === STATUS_APPROVED$static && !comment.getLastComplaintDate()) {
        return STATUS_APPROVED$static;
      }
      else if (state && state.toLowerCase() === STATUS_NEW$static && !comment.getLastComplaintDate()) {
        return STATUS_NEW$static;
      }
      else if (state && state.toLowerCase() === STATUS_NEW_ONLINE$static && !comment.getLastComplaintDate()) {
        return STATUS_NEW_ONLINE$static;
      }
      return STATUS_IN_MODERATION$static;
    }
    else {
      return "";
    }
  }/*

  private*/ function getStatusDisplayField()/*:DisplayField*/ {
    if (!this.statusDisplayField$_8fL) {
      this.statusDisplayField$_8fL =AS3.as( this.queryById(ArchiveDetailStatusHeaderBase.STATUS_FIELD_ITEM_ID),  Ext.form.field.Display);
    }
    return this.statusDisplayField$_8fL;
  }/*

  private*/ function getDateDisplayField()/*:DisplayField*/ {
    if (!this.dateDisplayField$_8fL) {
      this.dateDisplayField$_8fL =AS3.as( this.queryById(ArchiveDetailStatusHeaderBase.CREATION_DATE_ID),  Ext.form.field.Display);
    }
    return this.dateDisplayField$_8fL;
  }/*

  /** @private * /
  [Bindable]
  public native function set highlighted(newHighlighted:Boolean):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get highlighted():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.ui.mixins.HighlightableMixin"],
      displayedStateValueExpression$_8fL: null,
      displayedLastComplaintDateValueExpression$_8fL: null,
      selectedContributionsValueExpression$_8fL: null,
      contributionAdministration$_8fL: null,
      statusDisplayField$_8fL: null,
      dateDisplayField$_8fL: null,
      constructor: ArchiveDetailStatusHeaderBase$,
      super$_8fL: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      onDestroy: onDestroy,
      updateStatusOnChange$_8fL: updateStatusOnChange,
      getStatusText: getStatusText,
      getStatusDisplayField$_8fL: getStatusDisplayField,
      getDateDisplayField$_8fL: getDateDisplayField,
      statics: {
        STATUS_FIELD_ITEM_ID: "status-field-item-id",
        CREATION_DATE_ID: "creation-date-item-id",
        BLOCK: undefined,
        __initStatics__: function() {
          BLOCK$static_();
        }
      },
      requires: [
        "Ext.Date",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.models.bem.BEMBlock",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.Comment",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.ContributionPropertyNames"
      ]
    };
});
