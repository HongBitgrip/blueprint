Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanelBase", function(ContributionUserInformationPanelBase) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base {

import com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;

import ext.StringUtil;
import ext.button.Button;
import ext.form.field.DisplayField;
import ext.panel.Panel;
import ext.util.Format;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ContributionUserInformationPanelBase extends Panel {
  public static const USER_INFORMATION_BUTTON_ID:String = "cm-elastic-social-detail-statusbar-user-button";
  public static const USER_INFORMATION_TEXT_ID:String = "cm-elastic-social-detail-statusbar-author-information";

  private var userAdministration:UserAdministration;
  private var userDetailsButton:Button;
  private var authorDetailDisplayField:DisplayField;
  private var authorProvider:Function;

  public*/ function ContributionUserInformationPanelBase$(config/*:ContributionUserInformationPanel = null*/) {if(arguments.length<=0)config=null;
    this.userAdministration$82Nk = AS3.getBindable(config,"userAdministration");
    this.authorProvider$82Nk = AS3.getBindable(config,"authorProvider");
    this.super$82Nk(config);
  }/*

  public*/ function toggleUserDetailsButton(author/*:User*/)/*:void*/ {
    if (author !== null) {
      if (author === undefined || author.isAnonymous()) {
        this.getUserDetailsButton$82Nk().disable(true);
      } else {
        this.getUserDetailsButton$82Nk().enable();
      }
    } else {
      this.getUserDetailsButton$82Nk().disable(true);
    }
  }/*

  public*/ function showNumberOfContributions(author/*:User*/)/*:void*/ {
    var detailsMessage/*:String*/ = "";

    if (author && !author.isAnonymous()) {
      var numberOfContributions/*:Number*/ = author.getNumberOfContributions();
      var rejectedContributions/*:Number*/ = author.getNumberOfRejectedContributions();

      if (numberOfContributions !== undefined
              && rejectedContributions !== undefined) {
        detailsMessage = Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "detail_comments_for_user"),
                numberOfContributions, rejectedContributions);
      }
    }

    this.getAuthorDetailDisplayField$82Nk().setValue(detailsMessage);
    if (detailsMessage === "") {
      this.getAuthorDetailDisplayField$82Nk().hide();
    } else {
      this.getAuthorDetailDisplayField$82Nk().show();
    }
  }/*

  protected*/ function openUserDetails()/*:void*/ {
    this.userAdministration$82Nk.startEditing(this.authorProvider$82Nk());
    com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase.getInstance().showUserManagement(false, true);
  }/*

  public*/ function setUserDetailsButtonText(text/*:String*/)/*:void*/ {
    this.getUserDetailsButton$82Nk().setText(Ext.util.Format.htmlEncode(text));
  }/*

  /**
   * Here we need to check for an invalid state that will never happen, if everyone manipulates
   * the data via the elastic social api. But if someone removes a user directly within the db, the
   * valueexpression for the user detail button will never get an event so we need to set the
   * user name manually!
   * /
  public*/ function checkAuthor(author/*:User*/)/*:void*/ {
    if (!author) {
      this.getUserDetailsButton$82Nk().setText(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_anonymous'));
    }
  }/*

  private*/ function getUserDetailsButton()/*:Button*/ {
    if (!this.userDetailsButton$82Nk) {
      this.userDetailsButton$82Nk =AS3.as( this.queryById(ContributionUserInformationPanelBase.USER_INFORMATION_BUTTON_ID),  Ext.button.Button);
    }

    return this.userDetailsButton$82Nk;
  }/*

  private*/ function getAuthorDetailDisplayField()/*:DisplayField*/ {
    if (!this.authorDetailDisplayField$82Nk) {
      this.authorDetailDisplayField$82Nk =AS3.as( this.queryById(ContributionUserInformationPanelBase.USER_INFORMATION_TEXT_ID),  Ext.form.field.Display);
    }
    return this.authorDetailDisplayField$82Nk;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      userAdministration$82Nk: null,
      userDetailsButton$82Nk: null,
      authorDetailDisplayField$82Nk: null,
      authorProvider$82Nk: null,
      constructor: ContributionUserInformationPanelBase$,
      super$82Nk: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      toggleUserDetailsButton: toggleUserDetailsButton,
      showNumberOfContributions: showNumberOfContributions,
      openUserDetails: openUserDetails,
      setUserDetailsButtonText: setUserDetailsButtonText,
      checkAuthor: checkAuthor,
      getUserDetailsButton$82Nk: getUserDetailsButton,
      getAuthorDetailDisplayField$82Nk: getAuthorDetailDisplayField,
      statics: {
        USER_INFORMATION_BUTTON_ID: "cm-elastic-social-detail-statusbar-user-button",
        USER_INFORMATION_TEXT_ID: "cm-elastic-social-detail-statusbar-author-information"
      },
      requires: [
        "Ext.String",
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.panel.Panel",
        "Ext.util.Format",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties"
      ],
      uses: ["com.coremedia.elastic.social.studio.ElasticSocialStudioPluginBase"]
    };
});
