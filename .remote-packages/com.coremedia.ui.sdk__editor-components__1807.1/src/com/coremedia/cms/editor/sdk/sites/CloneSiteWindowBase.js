Ext.define("com.coremedia.cms.editor.sdk.sites.CloneSiteWindowBase", function(CloneSiteWindowBase) {/*package com.coremedia.cms.editor.sdk.sites {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.Group;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.cms.editor.sdk.util.WorkflowUtils;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Locale;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;

import ext.Component;
import ext.StringUtil;
import ext.event.Event;

[ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class CloneSiteWindowBase extends StudioDialog {
  internal static const LOCALE_FIELD:String = 'localeField';
  internal static const URI_SEGMENT_FIELD:String = 'uriSegmentField';
  internal static const SITE_MANAGER_GROUP_FIELD:String = 'siteManagerGroupField';
  internal static const SITE_IN_SYNC_WITH_MASTER_FIELD:String = 'siteInSyncWithMasterField';
  internal static const OK_BUTTON:String = 'okButton';
  internal static const CANCEL_BUTTON:String = 'cancelButton';

  internal static const MODEL_LOCALE:String = 'locale';
  internal static const MODEL_URI_SEGMENT:String = 'uriSegment';
  internal static const MODEL_SITE_MANAGER_GROUP:String = 'siteManagerGroup';
  internal static const TRANSLATION_STRATEGY:String = 'translationStrategy';

  private static const*/var DERIVE_SITE_PROCESS_DEFINITION_NAME$static/*:String*/ = "DeriveSite";/*

  private var site:SiteImpl;
  //noinspection JSUnusedGlobalSymbols
  internal var derivedSiteDummy:SiteImpl; // internal for testing

  private var disabledExpression:ValueExpression;

  private var checkedUriSegment:String;
  //noinspection JSFieldCanBeLocal
  private var uriSegmentValid:Boolean = false;

  private var checkedSiteManagerGroup:String;
  //noinspection JSFieldCanBeLocal
  private var siteManagerGroupValid:Boolean = false;

  private var sitesService:ExtendedSitesServiceImpl;
  private var model:Bean;


  public*/ function CloneSiteWindowBase$(config/*:CloneSiteWindow = null*/) {if(arguments.length<=0)config=null;
    this.super$ypC9(config);

    this.sitesService$ypC9 = AS3.getBindable(config,"sitesService");
    this.site$ypC9 = AS3.cast(com.coremedia.cms.editor.sdk.sites.SiteImpl,this.sitesService$ypC9.getSite(AS3.getBindable(config,"siteId")));
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$ypC9) {
      this.model$ypC9 = com.coremedia.ui.data.beanFactory.createLocalBean();
      this.model$ypC9.addPropertyChangeListener(CloneSiteWindowBase.MODEL_LOCALE,AS3.bind( this,"paramsChanged"));
    }
    return this.model$ypC9;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.afterRender.call(this);
    this.getModel().set(CloneSiteWindowBase.MODEL_LOCALE, this.site$ypC9.getLocale().getLanguageTag());

    this.onChange$ypC9(); // initializes and verifies all text fields
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    this.getModel().removePropertyChangeListener(CloneSiteWindowBase.MODEL_LOCALE,AS3.bind( this,"paramsChanged"));
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.onDestroy.call(this);
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function keyPressed(textfield/*:**/, e/*:Event*/)/*:void*/ {
    if (e.getKey() == Ext.event.Event.ENTER) {
      if (!this.disabledExpression$ypC9.getValue()) {
        this.deriveSite();
      }
      e.stopEvent();
    }
  }/*

  internal*/ function deriveSite()/*:void*/ {var this$=this;
    var workflowVariables/*:Object*/ = {
      "masterSiteId": this.site$ypC9.getId(),
      "targetLocale": this.getModel().get(CloneSiteWindowBase.MODEL_LOCALE),
      "targetUriSegment": this.getModel().get(CloneSiteWindowBase.MODEL_URI_SEGMENT),
      "targetSiteManagerGroup": this.getModel().get(CloneSiteWindowBase.MODEL_SITE_MANAGER_GROUP),
      "translationStrategy": this.getModel().get(CloneSiteWindowBase.TRANSLATION_STRATEGY)
    };

    com.coremedia.cms.editor.sdk.util.WorkflowUtils.startProcess(DERIVE_SITE_PROCESS_DEFINITION_NAME$static, workflowVariables,
            function (process/*:Process*/, error/*:Error = null*/)/*:void*/ {if(arguments.length<=1)error=null;
              if (error) {
                com.coremedia.cms.editor.sdk.util.WorkflowUtils.showStartProcessErrorDialog();
                return;
              }

              new com.coremedia.cms.editor.sdk.sites.CloneSiteProcessMonitor(process, this$.sitesService$ypC9);
            }
    );

    this.close();
  }/*

  internal*/ function getDisabledExpression()/*:ValueExpression*/ {
    if (!this.disabledExpression$ypC9) {
      this.disabledExpression$ypC9 = com.coremedia.ui.data.ValueExpressionFactory.create('disabled', com.coremedia.ui.data.beanFactory.createLocalBean());
      this.disabledExpression$ypC9.setValue(true);
      this.getModel().addValueChangeListener(AS3.bind(this,"onChange$ypC9"));
    }
    return this.disabledExpression$ypC9;
  }/*

  private*/ function formatByPattern(pattern/*:String*/)/*:String*/ {
    var languageTag/*:String*/ = this.getModel().get(CloneSiteWindowBase.MODEL_LOCALE);
    if (!languageTag) {
      return '';
    }

    var locale/*:Locale*/ = com.coremedia.ui.data.Locale.forLanguageTag(languageTag);
    return Ext.String.format(pattern,
            this.site$ypC9.getName(),
            locale.getLanguage(),
            locale.getCountry() || locale.getLanguage(),
            locale.getVariant() || locale.getCountry() || locale.getLanguage(),
            locale.getLanguageTag());
  }/*

  //noinspection JSUnusedLocalSymbols
  protected*/ function paramsChanged(pce/*:PropertyChangeEvent*/)/*:void*/ {
    var siteModel/*:SiteModel*/ = this.sitesService$ypC9.getSiteModel();
    if (siteModel.getUriSegmentPattern()) {
      this.getModel().set(CloneSiteWindowBase.MODEL_URI_SEGMENT, this.formatByPattern$ypC9(siteModel.getUriSegmentPattern()).toLocaleLowerCase());
    }

    if (siteModel.getSiteManagerGroupPattern()) {
      this.getModel().set(CloneSiteWindowBase.MODEL_SITE_MANAGER_GROUP, this.formatByPattern$ypC9(siteModel.getSiteManagerGroupPattern()));
    }
  }/*

  private*/ function onChange()/*:void*/ {
    this.getDisabledExpression().setValue(true);

    var localeValid/*:Boolean*/ = this.isLocaleValid$ypC9(this.getModel().get(CloneSiteWindowBase.MODEL_LOCALE));
    var uriSegmentValid/*:Boolean*/ = this.isUriSegmentValid$ypC9(this.getModel().get(CloneSiteWindowBase.MODEL_URI_SEGMENT));
    var siteManagerGroupValid/*:Boolean*/ = this.isSiteManagerGroupValid$ypC9(this.getModel().get(CloneSiteWindowBase.MODEL_SITE_MANAGER_GROUP));

    this.highlightFieldIfInvalid$ypC9(CloneSiteWindowBase.LOCALE_FIELD, localeValid,
            this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_invalid_locale'));
    this.highlightFieldIfInvalid$ypC9(CloneSiteWindowBase.URI_SEGMENT_FIELD, uriSegmentValid,
            this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_invalid_uriSegment'));
    this.highlightFieldIfInvalid$ypC9(CloneSiteWindowBase.SITE_MANAGER_GROUP_FIELD, siteManagerGroupValid,
            this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'CloneSiteWindow_invalid_siteManagerGroup'));

    var disabled/*:Boolean*/ = !(localeValid && uriSegmentValid && siteManagerGroupValid);
    this.getDisabledExpression().setValue(disabled);
  }/*

  private*/ function highlightFieldIfInvalid(field/*:String*/, valid/*:Boolean*/, errorMsg/*:String*/)/*:void*/ {
    var component/*:Component*/ = this.queryById(field);
    var statefulComponent/*:IValidationStateMixin*/ =AS3.as( component,  com.coremedia.ui.mixins.ValidationStateMixin);

    if (component && statefulComponent) {
      if (valid) {
        AS3.setBindable(statefulComponent,"validationState" , null);
        AS3.setBindable(statefulComponent,"validationMessage" , null);
      } else {
        AS3.setBindable(statefulComponent,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
        AS3.setBindable(statefulComponent,"validationMessage" , errorMsg);
      }
    }
  }/*

  private*/ function isLocaleValid(locale/*:String*/)/*:Boolean*/ {
    if (!locale || locale.length <= 0) {
      return false;
    }

    var allMasterSiteIds/*:Array*/ = this.site$ypC9.getAllMasterSiteIds();
    var masterSite/*:Site*/ = this.sitesService$ypC9.getSite(allMasterSiteIds[0]);
    return this.isLocaleAvailableInSiteHierarchy$ypC9(masterSite, locale);
  }/*

  //noinspection JSMethodCanBeStatic
  private*/ function isLocaleAvailableInSiteHierarchy(masterSite/*:Site*/, locale/*:String*/)/*:Boolean*/ {
    if (masterSite.getLocale().getLanguageTag() === locale) {
      return false;
    }

    var derivedSites/*:Array*/ = masterSite.getDerivedSites();
    if (!derivedSites) {
      return true;
    }

    for (var i/*:int*/ = 0; i < derivedSites.length; i++) {
      var derivedSite/*:Site*/ = derivedSites[i];
      if (!this.isLocaleAvailableInSiteHierarchy$ypC9(derivedSite, locale)) {
        return false;
      }
    }

    return true;
  }/*

  private*/ function isUriSegmentValid(uriSegment/*:String*/)/*:Boolean*/ {var this$=this;
    if (!uriSegment || uriSegment.length === 0) {
      return false;
    }

    if (this.checkedUriSegment$ypC9 !== uriSegment) {
      this.checkedUriSegment$ypC9 = uriSegment;
      this.sitesService$ypC9.validateUriSegment(uriSegment, function (valid/*:Boolean*/)/*:void*/ {
        if (this$.checkedUriSegment$ypC9 === uriSegment) {
          this$.uriSegmentValid$ypC9 = valid;
          this$.onChange$ypC9();
        }
      });
    }

    return this.uriSegmentValid$ypC9;
  }/*


  private*/ function isSiteManagerGroupValid(siteManagerGroup/*:String*/)/*:Boolean*/ {var this$=this;
    if (!siteManagerGroup || siteManagerGroup.length === 0) {
      return true;
    }

    if (this.checkedSiteManagerGroup$ypC9 !== siteManagerGroup) {
      this.checkedSiteManagerGroup$ypC9 = siteManagerGroup;
      com.coremedia.cap.common.SESSION.getConnection().getUserRepository().getGroupByName(siteManagerGroup, function (group/*:Group*/)/*:void*/ {
        if (this$.checkedSiteManagerGroup$ypC9 === siteManagerGroup) {
          this$.siteManagerGroupValid$ypC9 = ! !group;
          this$.onChange$ypC9();
        }
      });
    }

    return this.siteManagerGroupValid$ypC9;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      site$ypC9: null,
      derivedSiteDummy: null,
      disabledExpression$ypC9: null,
      checkedUriSegment$ypC9: null,
      uriSegmentValid$ypC9: false,
      checkedSiteManagerGroup$ypC9: null,
      siteManagerGroupValid$ypC9: false,
      sitesService$ypC9: null,
      model$ypC9: null,
      constructor: CloneSiteWindowBase$,
      super$ypC9: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      getModel: getModel,
      afterRender: afterRender,
      onDestroy: onDestroy,
      keyPressed: keyPressed,
      deriveSite: deriveSite,
      getDisabledExpression: getDisabledExpression,
      formatByPattern$ypC9: formatByPattern,
      paramsChanged: paramsChanged,
      onChange$ypC9: onChange,
      highlightFieldIfInvalid$ypC9: highlightFieldIfInvalid,
      isLocaleValid$ypC9: isLocaleValid,
      isLocaleAvailableInSiteHierarchy$ypC9: isLocaleAvailableInSiteHierarchy,
      isUriSegmentValid$ypC9: isUriSegmentValid,
      isSiteManagerGroupValid$ypC9: isSiteManagerGroupValid,
      statics: {
        LOCALE_FIELD: 'localeField',
        URI_SEGMENT_FIELD: 'uriSegmentField',
        SITE_MANAGER_GROUP_FIELD: 'siteManagerGroupField',
        SITE_IN_SYNC_WITH_MASTER_FIELD: 'siteInSyncWithMasterField',
        OK_BUTTON: 'okButton',
        CANCEL_BUTTON: 'cancelButton',
        MODEL_LOCALE: 'locale',
        MODEL_URI_SEGMENT: 'uriSegment',
        MODEL_SITE_MANAGER_GROUP: 'siteManagerGroup',
        TRANSLATION_STRATEGY: 'translationStrategy'
      },
      requires: [
        "Ext.String",
        "Ext.event.Event",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.data.Locale",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.sites.CloneSiteProcessMonitor",
        "com.coremedia.cms.editor.sdk.sites.SiteImpl",
        "com.coremedia.cms.editor.sdk.util.WorkflowUtils"
      ]
    };
});
