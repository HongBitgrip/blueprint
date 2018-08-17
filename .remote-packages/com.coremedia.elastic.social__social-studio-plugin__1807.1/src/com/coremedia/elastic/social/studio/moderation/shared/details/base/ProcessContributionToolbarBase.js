Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbarBase", function(ProcessContributionToolbarBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.utils.ElasticUtils;

import ext.button.Button;
import ext.container.Container;
import ext.toolbar.Toolbar;

public class ProcessContributionToolbarBase extends Toolbar {
  public static const APPROVE_BUTTON_ID:String = "cm-elastic-social-contribution-approve-button";
  public static const REJECT_BUTTON_ID:String = "cm-elastic-social-contribution-reject-button";
  public static const EMAIL_BUTTON_ID:String = "cm-elastic-social-contribution-email-button-container";

  private var approveButton:Button;
  private var rejectButton:Button;
  private var emailButton:EmailButton;

  public*/ function ProcessContributionToolbarBase$(config/*:ProcessContributionToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$Nw3t(config);
  }/*

  public*/ function setRejectButtonLabel(label/*:String*/, isEmailSent/*:Boolean*/)/*:void*/ {
    this.getRejectButton$Nw3t().setText(com.coremedia.elastic.social.studio.model.utils.ElasticUtils.toggleStarMarker(label, isEmailSent));
    var parentContainer/*:Container*/ =AS3.as( this.findParentByType("container"),  Ext.container.Container);
    if (parentContainer) {
      parentContainer.updateLayout();
    }
  }/*

  public*/ function setApproveButtonLabel(label/*:String*/, isEmailSent/*:Boolean*/)/*:void*/ {
    this.getApproveButton$Nw3t().setText(com.coremedia.elastic.social.studio.model.utils.ElasticUtils.toggleStarMarker(label, isEmailSent));
    var parentContainer/*:Container*/ =AS3.as( this.findParentByType("container"),  Ext.container.Container);
    if (parentContainer) {
      parentContainer.updateLayout();
    }
  }/*

  public*/ function toggleEMailWindowLink(author/*:User*/)/*:void*/ {
    this.getEmailButton$Nw3t().toggleEMailWindowLink(author);
  }/*

  private*/ function getApproveButton()/*:Button*/ {
    if (!this.approveButton$Nw3t) {
      this.approveButton$Nw3t =AS3.as( this.getComponent(ProcessContributionToolbarBase.APPROVE_BUTTON_ID),  Ext.button.Button);
    }

    return this.approveButton$Nw3t;
  }/*

  private*/ function getRejectButton()/*:Button*/ {
    if (!this.rejectButton$Nw3t) {
      this.rejectButton$Nw3t =AS3.as( this.getComponent(ProcessContributionToolbarBase.REJECT_BUTTON_ID),  Ext.button.Button);
    }

    return this.rejectButton$Nw3t;
  }/*

  private*/ function getEmailButton()/*:EmailButton*/ {
    if (!this.emailButton$Nw3t) {
      this.emailButton$Nw3t =AS3.as( this.getComponent(ProcessContributionToolbarBase.EMAIL_BUTTON_ID),  com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton);
    }

    return this.emailButton$Nw3t;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      approveButton$Nw3t: null,
      rejectButton$Nw3t: null,
      emailButton$Nw3t: null,
      constructor: ProcessContributionToolbarBase$,
      super$Nw3t: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      setRejectButtonLabel: setRejectButtonLabel,
      setApproveButtonLabel: setApproveButtonLabel,
      toggleEMailWindowLink: toggleEMailWindowLink,
      getApproveButton$Nw3t: getApproveButton,
      getRejectButton$Nw3t: getRejectButton,
      getEmailButton$Nw3t: getEmailButton,
      statics: {
        APPROVE_BUTTON_ID: "cm-elastic-social-contribution-approve-button",
        REJECT_BUTTON_ID: "cm-elastic-social-contribution-reject-button",
        EMAIL_BUTTON_ID: "cm-elastic-social-contribution-email-button-container"
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.toolbar.Toolbar"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.utils.ElasticUtils",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.EmailButton"
      ]
    };
});
