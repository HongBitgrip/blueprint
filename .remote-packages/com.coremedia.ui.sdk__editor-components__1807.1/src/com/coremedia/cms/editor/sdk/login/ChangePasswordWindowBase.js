Ext.define("com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase", function(ChangePasswordWindowBase) {/*package com.coremedia.cms.editor.sdk.login {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.UserErrorCodes;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.desktop.EditorMainView;
import com.coremedia.cms.editor.sdk.validation.IssuesToolTip;
import com.coremedia.ui.components.StatefulQuickTip;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.util.createComponentSelector;

import ext.Ext;
import ext.container.Container;
import ext.dom.Element;
import ext.event.Event;
import ext.form.field.Field;
import ext.form.field.TextField;
import ext.tip.ToolTip;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class ChangePasswordWindowBase extends StudioDialog {

  internal static const OLD_PASSWORD:String = "oldPassword";
  internal static const NEW_PASSWORD:String = "newPassword";
  internal static const REPEAT_PASSWORD:String = "repeatPassword";

  private static const*/var ERROR_PASSWORDS_DONT_MATCH$static/*:String*/;/* =*/function ERROR_PASSWORDS_DONT_MATCH$static_(){ERROR_PASSWORDS_DONT_MATCH$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'changePassword_passwordsDontMatch_text'));};/*
  private static const*/var ERROR_INVALID_PASSWORD$static/*:String*/;/* =*/function ERROR_INVALID_PASSWORD$static_(){ERROR_INVALID_PASSWORD$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'changePassword_invalidPassword_text'));};/*
  private static const*/var ERROR_NAME$static/*:String*/ = "errorName";/*
  private static const*/var PASSWORDS_DONT_MATCH$static/*:String*/ = "PASSWORDS_DONT_MATCH";/*

  private var model:Bean;

  private var oldPasswordField:TextField;
  private var newPasswordField:TextField;
  private var repeatPasswordField:TextField;

  private static*/ function createToolTip$static(message/*:String*/)/*:IssuesToolTip*/ {
    var toolTipCfg/*:IssuesToolTip*/ = AS3.cast(com.coremedia.cms.editor.sdk.validation.IssuesToolTip,{});
    AS3.setBindable(toolTipCfg,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
    toolTipCfg.anchor = 'top';
    AS3.setBindable(toolTipCfg,"html" , message);
    toolTipCfg.hideDelay = 800;
    return new com.coremedia.cms.editor.sdk.validation.IssuesToolTip(toolTipCfg);
  }/*

  private var invalidRepeatError:ToolTip =*/function invalidRepeatError_(){this.invalidRepeatError$kpYh=( createToolTip$static(ERROR_PASSWORDS_DONT_MATCH$static));}/*;

  private var oldPasswordError:ToolTip =*/function oldPasswordError_(){this.oldPasswordError$kpYh=( createToolTip$static(ERROR_INVALID_PASSWORD$static));}/*;

  /**
   * @param config the config object
   * /
  public*/ function ChangePasswordWindowBase$(config/*:ChangePasswordWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$kpYh(config);invalidRepeatError_.call(this);oldPasswordError_.call(this);;

    this.on("show",AS3.bind( this,"afterShow$kpYh"));
  }/*

  private*/ function afterShow()/*:void*/ {var this$=this;
    var form/*:Container*/ = this;
    this.oldPasswordField$kpYh = AS3.cast(Ext.form.field.Text,form.down(com.coremedia.ui.util.createComponentSelector().attr('name', ChangePasswordWindowBase.OLD_PASSWORD).build()));
    this.oldPasswordField$kpYh.on("validitychange", function(field/*:Field*/, isValid/*:Boolean*/)/*:void*/ {
      if (isValid) {
        this$.oldPasswordError$kpYh.hide();
      } else {
        var elem/*:Element*/ = this$.oldPasswordField$kpYh.getEl();
        this$.oldPasswordError$kpYh.showAt([elem.getX(), elem.getY() + 50]);
      }
    });

    this.newPasswordField$kpYh = AS3.cast(Ext.form.field.Text,form.down(com.coremedia.ui.util.createComponentSelector().attr('name', ChangePasswordWindowBase.NEW_PASSWORD).build()));

    this.repeatPasswordField$kpYh = AS3.cast(Ext.form.field.Text,form.down(com.coremedia.ui.util.createComponentSelector().attr('name', ChangePasswordWindowBase.REPEAT_PASSWORD).build()));
    this.repeatPasswordField$kpYh.on("validitychange", function(field/*:Field*/, isValid/*:Boolean*/)/*:void*/ {
      if (isValid) {
        this$.invalidRepeatError$kpYh.hide();
      } else {
        var elem/*:Element*/ = this$.repeatPasswordField$kpYh.getEl();
        this$.invalidRepeatError$kpYh.showAt([elem.getX(), elem.getY() + 50]);
      }
    });

    this.oldPasswordField$kpYh.focus(true, 500);
  }/*


  internal*/ function handleSpecialKey(textfield/*:**/, e/*:Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER) {
      this.saveAndClose();
    }
  }/*

  internal*/ function saveAndClose()/*:void*/ {var this$=this;
    if (!this.calculateDisableStatus$kpYh()) {
      com.coremedia.cap.common.SESSION.getUser().changePassword(this.getOldPassword$kpYh(), this.getNewPassword$kpYh(),
              function (error/*:RemoteError*/)/*:void*/ {
                if (!error) {
                  this$.setError$kpYh(null);
                  showSuccessFeedback$static();
                  this$.close();
                } else {
                  if (error.errorName === com.coremedia.cap.user.UserErrorCodes.INVALID_PASSWORD) {
                    this$.setError$kpYh(com.coremedia.cap.user.UserErrorCodes.INVALID_PASSWORD);
                    error.setHandled(true);
                  } else {
                    this$.setError$kpYh(error.errorName);
                    //the error is now handled by UserImpl.
                  }
                  this$.resetData$kpYh();
                  this$.oldPasswordField$kpYh.focus(true);
                }
              });
    }
  }/*

  internal*/ function onlyClose()/*:void*/ {
    this.invalidRepeatError$kpYh.hide();
    this.oldPasswordError$kpYh.hide();
    this.close();
  }/*

  private static*/ function showSuccessFeedback$static()/*:void*/ {
    var targetEl/*:Element*/ = Ext.getCmp(com.coremedia.cms.editor.sdk.desktop.EditorMainView.HEADER_TOOLBAR_ID).getEl();
    var toolTipCfg/*:StatefulQuickTip*/ = AS3.cast(com.coremedia.ui.components.StatefulQuickTip,{});
    toolTipCfg.id = 'changePasswordSuccessToolTip';
    AS3.setBindable(toolTipCfg,"title" , null);
    AS3.setBindable(toolTipCfg,"html" , mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ChangePassword_successMessage'));
    AS3.setBindable(toolTipCfg,"validationState" , com.coremedia.ui.mixins.ValidationState.SUCCESS);
    var successTooltip/*:StatefulQuickTip*/ = new com.coremedia.ui.components.StatefulQuickTip(toolTipCfg);

    successTooltip.showAt([targetEl.getX() - 87, targetEl.getY() + 26]);
    successTooltip.addListener('beforehide',function()/*:void*/ {
      window.setTimeout(function()/*:void*/ {
        successTooltip.destroy();
      }, 300);
    });
  }/*

  private*/ function getModel()/*:Bean*/ {
    if (!this.model$kpYh) {
      this.model$kpYh = com.coremedia.ui.data.beanFactory.createLocalBean({
        oldPassword:"",
        newPassword:"",
        repeatPassword:"",
        errorName:null
      });
    }
    return this.model$kpYh;
  }/*

  private*/ function resetData()/*:void*/ {
    this.oldPasswordField$kpYh.setValue('');
    this.newPasswordField$kpYh.setValue('');
    this.repeatPasswordField$kpYh.setValue('');
  }/*

  private static*/ function getErrorText$static(errorName/*:String*/)/*:String*/ {
    if (!errorName) {
      return '';
    }
    switch (errorName) {
      case PASSWORDS_DONT_MATCH$static:
        return ERROR_PASSWORDS_DONT_MATCH$static;
      case com.coremedia.cap.user.UserErrorCodes.INVALID_PASSWORD:
        return ERROR_INVALID_PASSWORD$static;
      default:
        return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'changePassword_generalError_text');
    }
  }/*

  internal*/ function validateOldPassword(value/*:String*/)/*:**/ {
    this.setOldPassword$kpYh(value);
    if (this.getError$kpYh() === com.coremedia.cap.user.UserErrorCodes.INVALID_PASSWORD) {
      if (value) {
        this.setError$kpYh(null);
        return true;
      } else {
        return getErrorText$static(this.getError$kpYh());
      }
    }
    return true;
  }/*

  internal*/ function validateNewPassword(value/*:String*/)/*:**/ {
    this.setNewPassword$kpYh(value);
    if (this.repeatPasswordField$kpYh && this.repeatPasswordField$kpYh.getValue()) {
      return this.repeatPasswordField$kpYh.validate();
    }
    return true;
  }/*

  internal*/ function validateRepeatPassword(value/*:String*/)/*:**/ {
    this.setRepeatPassword$kpYh(value);
    return this.validateNewAndRepeatPasswords$kpYh();
  }/*

  private*/ function validateNewAndRepeatPasswords()/*:**/ {
    if (this.getNewPassword$kpYh() !== this.getRepeatPassword$kpYh()) {
      this.setError$kpYh(PASSWORDS_DONT_MATCH$static);
      return getErrorText$static(this.getError$kpYh());
    } else {
      if (this.getError$kpYh() === PASSWORDS_DONT_MATCH$static) {
        this.setError$kpYh(null);
      }
      return true;
    }
  }/*


  internal*/ function getSaveDisabledValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculateDisableStatus$kpYh"));
  }/*

  private*/ function calculateDisableStatus()/*:Boolean*/ {
    return ! !this.getError$kpYh() || !this.getOldPassword$kpYh() || !this.getNewPassword$kpYh() || !this.getRepeatPassword$kpYh();
  }/*

  /****convenience functions***** /

  private*/ function getOldPassword()/*:String*/ {
    return this.getModel$kpYh().get(ChangePasswordWindowBase.OLD_PASSWORD);
  }/*

  private*/ function setOldPassword(value/*:String*/)/*:void*/ {
    this.getModel$kpYh().set(ChangePasswordWindowBase.OLD_PASSWORD, value);
  }/*

  private*/ function getNewPassword()/*:String*/ {
    return this.getModel$kpYh().get(ChangePasswordWindowBase.NEW_PASSWORD);
  }/*

  private*/ function setNewPassword(value/*:String*/)/*:void*/ {
    this.getModel$kpYh().set(ChangePasswordWindowBase.NEW_PASSWORD, value);
  }/*

  private*/ function getRepeatPassword()/*:String*/ {
    return this.getModel$kpYh().get(ChangePasswordWindowBase.REPEAT_PASSWORD);
  }/*

  private*/ function setRepeatPassword(value/*:String*/)/*:void*/ {
    this.getModel$kpYh().set(ChangePasswordWindowBase.REPEAT_PASSWORD, value);
  }/*

  private*/ function getError()/*:String*/ {
    return this.getModel$kpYh().get(ERROR_NAME$static);
  }/*

  private*/ function setError(error/*:String*/)/*:void*/ {
    this.getModel$kpYh().set(ERROR_NAME$static, error);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      model$kpYh: null,
      oldPasswordField$kpYh: null,
      newPasswordField$kpYh: null,
      repeatPasswordField$kpYh: null,
      constructor: ChangePasswordWindowBase$,
      super$kpYh: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      afterShow$kpYh: afterShow,
      handleSpecialKey: handleSpecialKey,
      saveAndClose: saveAndClose,
      onlyClose: onlyClose,
      getModel$kpYh: getModel,
      resetData$kpYh: resetData,
      validateOldPassword: validateOldPassword,
      validateNewPassword: validateNewPassword,
      validateRepeatPassword: validateRepeatPassword,
      validateNewAndRepeatPasswords$kpYh: validateNewAndRepeatPasswords,
      getSaveDisabledValueExpression: getSaveDisabledValueExpression,
      calculateDisableStatus$kpYh: calculateDisableStatus,
      getOldPassword$kpYh: getOldPassword,
      setOldPassword$kpYh: setOldPassword,
      getNewPassword$kpYh: getNewPassword,
      setNewPassword$kpYh: setNewPassword,
      getRepeatPassword$kpYh: getRepeatPassword,
      setRepeatPassword$kpYh: setRepeatPassword,
      getError$kpYh: getError,
      setError$kpYh: setError,
      statics: {
        OLD_PASSWORD: "oldPassword",
        NEW_PASSWORD: "newPassword",
        REPEAT_PASSWORD: "repeatPassword",
        ERROR_PASSWORDS_DONT_MATCH: undefined,
        ERROR_INVALID_PASSWORD: undefined,
        __initStatics__: function() {
          ERROR_PASSWORDS_DONT_MATCH$static_();
          ERROR_INVALID_PASSWORD$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.event.Event",
        "Ext.form.field.Text",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.user.UserErrorCodes",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.components.StatefulQuickTip",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.util.createComponentSelector",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.desktop.EditorMainView",
        "com.coremedia.cms.editor.sdk.validation.IssuesToolTip"
      ]
    };
});
