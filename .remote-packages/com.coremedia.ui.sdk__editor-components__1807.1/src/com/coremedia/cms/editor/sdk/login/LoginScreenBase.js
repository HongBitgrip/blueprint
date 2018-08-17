Ext.define("com.coremedia.cms.editor.sdk.login.LoginScreenBase", function(LoginScreenBase) {/*package com.coremedia.cms.editor.sdk.login {
import com.coremedia.cap.common.CapLoginService;
import com.coremedia.cap.common.CapSession;
import com.coremedia.cms.editor.sdk.util.FormatUtil;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.cms.editor.sdk.validation.IssuesToolTip;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.LocalStorageUtil;

import ext.ComponentManager;
import ext.Ext;
import ext.button.Button;
import ext.container.Viewport;
import ext.data.ArrayStore;
import ext.data.Store;
import ext.dom.Element;
import ext.form.field.ComboBox;
import ext.form.field.TextField;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class LoginScreenBase extends Viewport {

  private static const*/var DEFAULT_DOMAIN$static/*:String*/ = "THE_DEFAULT_DOMAIN_ID";/*
  private static const*/var LOGINDOMAIN_LOCALSTORAGE$static/*:String*/ = "cmLoginDomain";/*
  private static const*/var TOOLTIP_CMP_TOP_MARGIN$static/*:Number*/ = 18;/*

  public static const FORM_PANEL_ITEMID:String = "form-panel";
  public static const LOGIN_BTN_ITEMID:String = "submit";
  public static const LOGIN_BTN_ID:String = "login-submit";
  public static const USERNAME_FIELD_ITEMID:String = "username";
  public static const PASSWD_FIELD_ITEMID:String = "password";
  public static const DOMAIN_FIELD_ITEMID:String = "domain";

  private var capLoginService:CapLoginService;
  private var callback:Function;
  private var arrayStore:ArrayStore;

  private var usernameField:TextField;
  private var passwordField:TextField;
  private var domainField:ComboBox;
  private var submitButton:Button;

  public static const BLOCK:BEMBlock =*/function BLOCK$static_(){LoginScreenBase.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-login-screen"));}/*;
  public static const LOGO_ELEMENT:BEMElement =*/function LOGO_ELEMENT$static_(){LoginScreenBase.LOGO_ELEMENT=( LoginScreenBase.BLOCK.createElement("logo"));}/*;
  public static const TITLE_ELEMENT:BEMElement =*/function TITLE_ELEMENT$static_(){LoginScreenBase.TITLE_ELEMENT=( LoginScreenBase.BLOCK.createElement("title"));}/*;
  public static const USERNAME_ELEMENT:BEMElement =*/function USERNAME_ELEMENT$static_(){LoginScreenBase.USERNAME_ELEMENT=( LoginScreenBase.BLOCK.createElement("username"));}/*;
  public static const PASSWORD_ELEMENT:BEMElement =*/function PASSWORD_ELEMENT$static_(){LoginScreenBase.PASSWORD_ELEMENT=( LoginScreenBase.BLOCK.createElement("password"));}/*;
  public static const DOMAIN_ELEMENT:BEMElement =*/function DOMAIN_ELEMENT$static_(){LoginScreenBase.DOMAIN_ELEMENT=( LoginScreenBase.BLOCK.createElement("domain"));}/*;
  public static const BUTTON_ELEMENT:BEMElement =*/function BUTTON_ELEMENT$static_(){LoginScreenBase.BUTTON_ELEMENT=( LoginScreenBase.BLOCK.createElement("button"));}/*;

  /**
   * @param config the configuration object
   * /
  public*/ function LoginScreenBase$(config/*:LoginScreen = null*/) {if(arguments.length<=0)config=null;
    this.super$Kb77(config);
    this.capLoginService$Kb77 = AS3.getBindable(config,"capLoginService");
    this.callback$Kb77 = AS3.getBindable(config,"callback");

    var autoLogoutDate/*:String*/ = com.coremedia.cms.editor.sdk.login.LogoutUtil.getAndClearAutoLogoutDate();
    if (autoLogoutDate) {
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showInfo(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_autoLogout_title'),
              com.coremedia.cms.editor.sdk.util.FormatUtil.format(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_autoLogout_message'), com.coremedia.ui.util.EncodingUtil.encodeForHTML(autoLogoutDate)),
              null,
              false);
    }
  }/*

  public static*/ function openLoginScreen$static(capLoginService/*:CapLoginService*/, callback/*:Function*/)/*:void*/ {
    var loginScreenCfg/*:LoginScreen*/ = AS3.cast(com.coremedia.cms.editor.sdk.login.LoginScreen,{});
    AS3.setBindable(loginScreenCfg,"capLoginService" , capLoginService);
    AS3.setBindable(loginScreenCfg,"callback" , callback);
    Ext.ComponentManager.create(loginScreenCfg);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    Ext.container.Viewport.prototype.afterRender.call(this);
    this.getUsernameField$Kb77().on('specialkey',AS3.bind( this,"onEnter$Kb77"));
    this.getPasswordField$Kb77().on('specialkey',AS3.bind( this,"onEnter$Kb77"));
    this.getDomainField$Kb77().on('specialkey',AS3.bind( this,"onEnter$Kb77"));
    this.getUsernameField$Kb77().focus(false, 10);
  }/*

  protected*/ function getInitialDomain(config/*:Object*/)/*:String*/ {
    var domain/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(LOGINDOMAIN_LOCALSTORAGE$static);
    return domain ? domain : String(this.getDomainStore(config).getAt(0).get('id'));
  }/*

  protected*/ function getDomainStore(config/*:Object*/)/*:Store*/ {
    if (!this.arrayStore$Kb77) {
      var domains/*:Array*/ = AS3.cast(com.coremedia.cap.common.CapLoginService,config['capLoginService']).getDomains();
      var data/*:Array*/ = [];
      for (var i/*:Number*/ = 0; i < domains.length; i++) {
        var domain/*:String*/ = domains[i];
        if (domain === "") {
          domain = DEFAULT_DOMAIN$static;
        }
        var displayName/*:Object*/ = this.resourceManager.getString('com.coremedia.cms.editor.Editor', "Login_displayName_" + domain) || domain;
        data[i] = [domain, displayName];
      }
      var arrayStoreCfg/*:ArrayStore*/ = AS3.cast(Ext.data.ArrayStore,{});
      AS3.setBindable(arrayStoreCfg,"fields" , ['id', 'displayName']);
      AS3.setBindable(arrayStoreCfg,"data" , data);
      this.arrayStore$Kb77 = new Ext.data.ArrayStore(arrayStoreCfg);
    }
    return this.arrayStore$Kb77;
  }/*

  private*/ function getUsernameField()/*:TextField*/ {
    if(!this.usernameField$Kb77) {
      this.usernameField$Kb77 =AS3.as( this.queryById(LoginScreenBase.USERNAME_FIELD_ITEMID),  Ext.form.field.Text);
    }
    return this.usernameField$Kb77;
  }/*

  private*/ function getPasswordField()/*:TextField*/ {
    if(!this.passwordField$Kb77) {
      this.passwordField$Kb77 =AS3.as( this.queryById(LoginScreenBase.PASSWD_FIELD_ITEMID),  Ext.form.field.Text);
    }
    return this.passwordField$Kb77;
  }/*

  private*/ function getDomainField()/*:TextField*/ {
    if(!this.domainField$Kb77) {
      this.domainField$Kb77 =AS3.as(  this.queryById(LoginScreenBase.DOMAIN_FIELD_ITEMID),  Ext.form.field.ComboBox);
    }
    return this.domainField$Kb77;
  }/*

  private*/ function getSubmitButton()/*:Button*/ {
    if(!this.submitButton$Kb77) {
       this.submitButton$Kb77 =AS3.as( this.queryById(LoginScreenBase.LOGIN_BTN_ITEMID),  Ext.button.Button);
    }
    return this.submitButton$Kb77;
  }/*

  private*/ function onEnter(field/*:**/, e/*:**/)/*:void*/ {var this$=this;
    if (e.getKey() == e.ENTER) {
      // on autofill of username password, the username is focused
      // but the password is blank until that field also gains focus
      if(field.getItemId() === 'username') {
        var onFocus/*:Function*/ = function ()/*:void*/ {
          this$.getPasswordField$Kb77().un('focus', onFocus);
          this$.loginButtonPressed();
        };
        this.getPasswordField$Kb77().on('focus', onFocus);
        this.getPasswordField$Kb77().focus(true, 10);
      } else {
        this.loginButtonPressed();
      }
    }
  }/*

  public*/ function loginButtonPressed()/*:void*/ {var this$=this;
    this.getSubmitButton$Kb77().setDisabled(true);
    this.getSubmitButton$Kb77().setText(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_in_progress'));

    var user/*:String*/ = this.getUsernameField$Kb77().getValue();
    var password/*:String*/ = this.getPasswordField$Kb77().getValue();
    var domain/*:String*/ = this.getDomainField$Kb77().getValue();
    if (domain === DEFAULT_DOMAIN$static) {
      domain = "";
    }

    if(domain) {
      com.coremedia.ui.util.LocalStorageUtil.setItem(LOGINDOMAIN_LOCALSTORAGE$static, domain);
    } else {
      com.coremedia.ui.util.LocalStorageUtil.removeItem(LOGINDOMAIN_LOCALSTORAGE$static);
    }

    this.getSubmitButton$Kb77().getEl().dom['click']();

    this.capLoginService$Kb77.login(user, domain, password, function (session/*:CapSession*/)/*:void*/ {
      if (session) {
        this$.el.removeCls('login-screen-base');
        this$.destroy();
        this$.callback$Kb77();
      } else {
        this$.getSubmitButton$Kb77().setDisabled(false);
        this$.getSubmitButton$Kb77().setText(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_submit'));

        var message/*:String*/ = this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_failedMessage');
        var tooltipMargin/*:Number*/ = Number(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_failedMessageMargin'));

        var toolTipCfg/*:IssuesToolTip*/ = AS3.cast(com.coremedia.cms.editor.sdk.validation.IssuesToolTip,{});
        AS3.setBindable(toolTipCfg,"html" , message);
        AS3.setBindable(toolTipCfg,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
        toolTipCfg.hideDelay = 700;
        var warningTooltip/*:IssuesToolTip*/ = new com.coremedia.cms.editor.sdk.validation.IssuesToolTip(toolTipCfg);
        var targetButton/*:Element*/ = Ext.getCmp(LoginScreenBase.LOGIN_BTN_ID).getEl();
        AS3.setBindable(warningTooltip,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
        warningTooltip.showAt([targetButton.getX() - tooltipMargin, targetButton.getY() + TOOLTIP_CMP_TOP_MARGIN$static]);
        warningTooltip.addListener('beforehide',AS3.bind(warningTooltip,"destroy"));
      }
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Viewport",
      capLoginService$Kb77: null,
      callback$Kb77: null,
      arrayStore$Kb77: null,
      usernameField$Kb77: null,
      passwordField$Kb77: null,
      domainField$Kb77: null,
      submitButton$Kb77: null,
      constructor: LoginScreenBase$,
      super$Kb77: function() {
        Ext.container.Viewport.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getInitialDomain: getInitialDomain,
      getDomainStore: getDomainStore,
      getUsernameField$Kb77: getUsernameField,
      getPasswordField$Kb77: getPasswordField,
      getDomainField$Kb77: getDomainField,
      getSubmitButton$Kb77: getSubmitButton,
      onEnter$Kb77: onEnter,
      loginButtonPressed: loginButtonPressed,
      statics: {
        FORM_PANEL_ITEMID: "form-panel",
        LOGIN_BTN_ITEMID: "submit",
        LOGIN_BTN_ID: "login-submit",
        USERNAME_FIELD_ITEMID: "username",
        PASSWD_FIELD_ITEMID: "password",
        DOMAIN_FIELD_ITEMID: "domain",
        BLOCK: undefined,
        LOGO_ELEMENT: undefined,
        TITLE_ELEMENT: undefined,
        USERNAME_ELEMENT: undefined,
        PASSWORD_ELEMENT: undefined,
        DOMAIN_ELEMENT: undefined,
        BUTTON_ELEMENT: undefined,
        openLoginScreen: openLoginScreen$static,
        __initStatics__: function() {
          BLOCK$static_();
          LOGO_ELEMENT$static_();
          TITLE_ELEMENT$static_();
          USERNAME_ELEMENT$static_();
          PASSWORD_ELEMENT$static_();
          DOMAIN_ELEMENT$static_();
          BUTTON_ELEMENT$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.button.Button",
        "Ext.container.Viewport",
        "Ext.data.ArrayStore",
        "Ext.form.field.ComboBox",
        "Ext.form.field.Text",
        "com.coremedia.cap.common.CapLoginService",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.LocalStorageUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.login.LoginScreen",
        "com.coremedia.cms.editor.sdk.login.LogoutUtil",
        "com.coremedia.cms.editor.sdk.util.FormatUtil",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.cms.editor.sdk.validation.IssuesToolTip"
      ]
    };
});
