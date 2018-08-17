Ext.define("com.coremedia.elastic.social.studio.actions.RejectUserActionBase", function(RejectUserActionBase) {/*package com.coremedia.elastic.social.studio.actions {

import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
import com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox;

import ext.ComponentManager;
import ext.MessageBox;
import ext.StringUtil;
import ext.util.Format;
import ext.window.Window;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class RejectUserActionBase extends ContributionAction {

  private var invalidPropertyCallback:Function;

  public*/ function RejectUserActionBase$(config/*:ApproveUserAction = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(config,"handler" ,AS3.bind( this,"rejectUser$WP18"));

    this.invalidPropertyCallback$WP18 = AS3.getBindable(config,"invalidPropertyCallback");

    this.super$WP18(config);
  }/*

  override protected*/ function isDisabledFor(contributions/*:Array*/)/*:Boolean*/ {
    var disabled/*:Boolean*/ = true;

    contributions.forEach(function (contribution/*:Contribution*/)/*:void*/ {
      var user/*:User*/ =AS3.as( contribution,  com.coremedia.elastic.social.studio.model.User);
      if (user) {
        if (user.getContributionState() !== "APPROVED") {
          disabled = false;
        }
      }
    });

    return disabled;
  }/*

  private*/ function rejectUser()/*:void*/ {var this$=this;
    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getActiveContributionAdministration();

    var user/*:User*/ =AS3.as( moderationContributionAdministration.getDisplayed(),  com.coremedia.elastic.social.studio.model.User);
    if (user) {
      if (user.hasChangedSinceLastModeration() ||
              user && user.hasStageChanges() && user.hasLastModeratedProperties()) {
        user.reject(moderationContributionAdministration, null, function (messages/*:Array*/)/*:void*/ {
          this$.restoreUserFailed$WP18(messages);
        });
      } else {
        this.deleteUser$WP18(user);
      }
    }
  }/*

  private*/ function restoreUserFailed(messages/*:Object*/)/*:void*/ {
    var message/*:String*/ = "";
    var i/*:uint*/ = 1;
    for (var property/*:String*/ in messages) {
      //noinspection JSUnfilteredForInLoop
      message = message + (i++) + ") " + mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_restore_" + messages[property]) + "<br/>";
      //noinspection JSUnfilteredForInLoop
      this.invalidPropertyCallback$WP18(property, mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', "userdetail_validate_restore_" + messages[property]));
    }
    var validationMessageBoxConfig/*:ValidationMessageBox*/ = AS3.cast(com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox,{});
    AS3.setBindable(validationMessageBoxConfig,"title" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validation_window_title'));
    AS3.setBindable(validationMessageBoxConfig,"message" , message);
    var msgBox/*:Window*/ = AS3.cast(Ext.window.Window,Ext.ComponentManager.create(validationMessageBoxConfig));
    msgBox.expand(true);
    msgBox.setSize(460, 150);
    msgBox.show();
  }/*

  private*/ function deleteUser(user/*:User*/)/*:void*/ {
    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance().getModerationContributionAdministration();
    var title/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_user_confirmation_title');
    var message/*:String*/ = Ext.String.format(
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_user_confirmation_message'),
            Ext.util.Format.htmlEncode(user.getName()));
    var confirmationButtonText/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_confirm');
    var callback/*:Function*/ = function (button/*:String*/)/*:void*/ {
      if (button === "ok") {
        user.reject(moderationContributionAdministration);
      }
    };
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showConfirmation(title, message, confirmationButtonText, callback, false);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.actions.ContributionAction",
      invalidPropertyCallback$WP18: null,
      constructor: RejectUserActionBase$,
      super$WP18: function() {
        com.coremedia.elastic.social.studio.actions.ContributionAction.prototype.constructor.apply(this, arguments);
      },
      isDisabledFor: isDisabledFor,
      rejectUser$WP18: rejectUser,
      restoreUserFailed$WP18: restoreUserFailed,
      deleteUser$WP18: deleteUser,
      requires: [
        "Ext.ComponentManager",
        "Ext.String",
        "Ext.util.Format",
        "Ext.window.Window",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
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
