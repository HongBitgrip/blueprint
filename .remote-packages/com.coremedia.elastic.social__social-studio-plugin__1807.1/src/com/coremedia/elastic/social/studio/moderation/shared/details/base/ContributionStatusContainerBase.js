Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainerBase", function(ContributionStatusContainerBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
import com.coremedia.ui.components.ExtendedDisplayField;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.ValidationState;

import ext.DateUtil;
import ext.button.Button;
import ext.container.Container;
import ext.form.field.DisplayField;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ContributionStatusContainerBase extends Container {
  public static const EDIT_LAST_OR_NEXT_ID:String = "editLastButton";

  protected static const TOOLBAR_STATUS_FIELD_ID:String = "cm-elastic-social-detail-status-field-user";
  protected static const TOOLBAR_CREATION_DATE_ID:String = "cm-elastic-social-detail-container-creation-date-user";

  private var statusField:ExtendedDisplayField;
  private var creationDateField:DisplayField;
  private var editLastOrNextButton:Button;

  private var moderationContributionAdministrationImpl:ModerationContributionAdministration;

  private var lastContributionValueExpression:ValueExpression;
  private var lastContributionValueExpressionState:ValueExpression;
  private var modeValueExpression:ValueExpression;

  private var moderation:Moderation;

  public*/ function ContributionStatusContainerBase$(config/*:ContributionStatusContainer = null*/) {if(arguments.length<=0)config=null;
    this.super$Yos6(config);
    this.moderation$Yos6 = AS3.getBindable(config,"moderation");


    if(AS3.getBindable(config,"moderation")) {
      this.moderationContributionAdministrationImpl$Yos6 =AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);

      this.lastContributionValueExpression$Yos6 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.LAST_PROCESSED, this.moderationContributionAdministrationImpl$Yos6);
      this.lastContributionValueExpression$Yos6.addChangeListener(AS3.bind(this,"toggleLastContributionButton$Yos6"));
      this.lastContributionValueExpressionState$Yos6 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.LAST_PROCESSED, "state"]), this.moderationContributionAdministrationImpl$Yos6);
      this.lastContributionValueExpressionState$Yos6.addChangeListener(AS3.bind(this,"toggleLastContributionButton$Yos6"));

      this.modeValueExpression$Yos6 = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.MODE, this.moderationContributionAdministrationImpl$Yos6);
      this.modeValueExpression$Yos6.addChangeListener(AS3.bind(this,"modeChanged$Yos6"));
    }
  }/*


  override protected*/ function onDestroy()/*:void*/ {
    Ext.container.Container.prototype.onDestroy.call(this);

    if(this.moderation$Yos6) {
      this.lastContributionValueExpression$Yos6.removeChangeListener(AS3.bind(this,"toggleLastContributionButton$Yos6"));
      this.lastContributionValueExpressionState$Yos6.removeChangeListener(AS3.bind(this,"toggleLastContributionButton$Yos6"));
      this.modeValueExpression$Yos6.removeChangeListener(AS3.bind(this,"modeChanged$Yos6"));
    }
  }/*

  public*/ function setCreationDate(creationDate/*:Date*/)/*:void*/ {
    if (creationDate) {
      this.getCreationDateField$Yos6().setValue(Ext.Date.format(creationDate, mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'dateFormat')));
    } else {
      this.getCreationDateField$Yos6().setValue("-");
    }
  }/*

  private*/ function getEditLastOrNextButton()/*:Button*/ {
    if (!this.editLastOrNextButton$Yos6) {
      this.editLastOrNextButton$Yos6 =AS3.as( this.queryById(ContributionStatusContainerBase.EDIT_LAST_OR_NEXT_ID),  Ext.button.Button);
    }

    return this.editLastOrNextButton$Yos6;
  }/*

  public*/ function setStatus(statusMessage/*:String*/, statusErrorMessage/*:String*/)/*:void*/ {
    var statusField/*:ExtendedDisplayField*/ = this.getStatusField$Yos6();

    if (statusErrorMessage) {
      statusField.setValue(statusErrorMessage);
      AS3.setBindable(statusField,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
    } else {
      statusField.setValue(statusMessage);
      AS3.setBindable(statusField,"validationState" , undefined);
    }
  }/*

  protected*/ function processLastOrNext()/*:void*/ {
    if (this.moderationContributionAdministrationImpl$Yos6.isLastMode()) {
      this.moderationContributionAdministrationImpl$Yos6.setListMode();
    } else {
      this.moderationContributionAdministrationImpl$Yos6.setLastMode();
    }
  }/*

  private*/ function toggleLastContributionButton()/*:void*/ {
    this.getEditLastOrNextButton$Yos6().setDisabled(!this.moderationContributionAdministrationImpl$Yos6.hasLastProcessed());
  }/*


  private*/ function modeChanged()/*:void*/ {
    if (this.moderationContributionAdministrationImpl$Yos6.isListMode()) {
      this.getEditLastOrNextButton$Yos6().setText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'edit_last'));
    } else {
      this.getEditLastOrNextButton$Yos6().setText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'edit_next'));
    }
    this.updateEditLastMessage$Yos6();
  }/*

  private*/ function updateEditLastMessage()/*:void*/ {
    if (this.moderationContributionAdministrationImpl$Yos6.isListMode()) {
      //TODO
    } else {
      this.getStatusField$Yos6().setValue(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'edit_last_message'));
    }
  }/*

  private*/ function getStatusField()/*:ExtendedDisplayField*/ {
    if (!this.statusField$Yos6) {
      this.statusField$Yos6 =AS3.as( this.queryById(ContributionStatusContainerBase.TOOLBAR_STATUS_FIELD_ID),  com.coremedia.ui.components.ExtendedDisplayField);
    }
    return this.statusField$Yos6;
  }/*

  private*/ function getCreationDateField()/*:DisplayField*/ {
    if (!this.creationDateField$Yos6) {
      this.creationDateField$Yos6 =AS3.as( this.queryById(ContributionStatusContainerBase.TOOLBAR_CREATION_DATE_ID),  Ext.form.field.Display);
    }

    return this.creationDateField$Yos6;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      statusField$Yos6: null,
      creationDateField$Yos6: null,
      editLastOrNextButton$Yos6: null,
      moderationContributionAdministrationImpl$Yos6: null,
      lastContributionValueExpression$Yos6: null,
      lastContributionValueExpressionState$Yos6: null,
      modeValueExpression$Yos6: null,
      moderation$Yos6: null,
      constructor: ContributionStatusContainerBase$,
      super$Yos6: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      setCreationDate: setCreationDate,
      getEditLastOrNextButton$Yos6: getEditLastOrNextButton,
      setStatus: setStatus,
      processLastOrNext: processLastOrNext,
      toggleLastContributionButton$Yos6: toggleLastContributionButton,
      modeChanged$Yos6: modeChanged,
      updateEditLastMessage$Yos6: updateEditLastMessage,
      getStatusField$Yos6: getStatusField,
      getCreationDateField$Yos6: getCreationDateField,
      statics: {
        EDIT_LAST_OR_NEXT_ID: "editLastButton",
        TOOLBAR_STATUS_FIELD_ID: "cm-elastic-social-detail-status-field-user",
        TOOLBAR_CREATION_DATE_ID: "cm-elastic-social-detail-container-creation-date-user"
      },
      requires: [
        "Ext.Date",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil"
      ]
    };
});
