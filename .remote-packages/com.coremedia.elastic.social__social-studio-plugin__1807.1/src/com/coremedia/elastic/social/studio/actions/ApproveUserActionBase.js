Ext.define("com.coremedia.elastic.social.studio.actions.ApproveUserActionBase", function(ApproveUserActionBase) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox;

import ext.ComponentManager;
import ext.window.Window;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ApproveUserActionBase extends ContributionAction {

  private var invalidPropertyCallback:Function;
  private var changesDiscardedCallback:Function;

  public*/ function ApproveUserActionBase$(config/*:ApproveUserAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"approveUser$hobe"));

    this.invalidPropertyCallback$hobe = AS3.getBindable(config,"invalidPropertyCallback");
    this.changesDiscardedCallback$hobe = AS3.getBindable(config,"changesDiscardedCallback");

    this.super$hobe(config);
  }/*

  override protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    return !contributions.some(function (contribution/*:Contribution*/)/*:Boolean*/ {
              return contribution.hasStageChanges()
                      || contribution.hasLocalModifications()
                      || contribution.getContributionState() !== "APPROVED"
                      || contribution.getLastComplaintDate();
            }
    );
  }/*

  private*/ function approveUser()/*:void*/ {var this$=this;
    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getModerationContributionAdministration();

    var user/*:User*/ =AS3.as( moderationContributionAdministration.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    if (user) {
      user.approve(moderationContributionAdministration, null, function (messages/*:Object*/)/*:void*/ {
        var message/*:String*/ = "";
        var i/*:uint*/ = 1;
        for (var property/*:String*/ in messages) {
          //noinspection JSUnfilteredForInLoop
          message = message + (i++) + ") " + mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]) + "<br/>";
          //noinspection JSUnfilteredForInLoop
          this$.invalidPropertyCallback$hobe(property, mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_" + messages[property]));
        }
        var validationMessageBoxConfig/*:ValidationMessageBox*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox,{});
        AS3.setBindable(validationMessageBoxConfig,"title" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validation_window_title'));
        AS3.setBindable(validationMessageBoxConfig,"message" , message);
        AS3.setBindable(validationMessageBoxConfig,"discardCallback" ,AS3.bind( this$,"discardChanges$hobe"));
        var msgBox/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(validationMessageBoxConfig));
        msgBox.expand(true);
        msgBox.setSize(460, 150);
        msgBox.show();
      });
    }
  }/*

  private*/ function discardChanges()/*:void*/ {var this$=this;
    var userAdministration/*:UserAdministration*/ = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getUserAdministration();
    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getActiveContributionAdministration();

    userAdministration.cancelEditing(AS3.as(moderationContributionAdministration.getDisplayed(),  com.coremedia.elastic.social.studio.model.User), function ()/*:void*/ {
      this$.changesDiscardedCallback$hobe();
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ContributionAction",
      invalidPropertyCallback$hobe: null,
      changesDiscardedCallback$hobe: null,
      constructor: ApproveUserActionBase$,
      super$hobe: function() {
        com.coremedia.elastic.social.studio.actions.ContributionAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      approveUser$hobe: approveUser,
      discardChanges$hobe: discardChanges,
      requires: [
        "Ext.ComponentManager",
        "Ext.window.Window",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.actions.ContributionAction",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox"
      ]
    };
});
