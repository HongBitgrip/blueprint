Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase", function(DefaultStartTranslationWorkflowPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.CheckInResult;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel;
import com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.cms.editor.sdk.util.contentUtil;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ObjectUtils;

import ext.ComponentManager;
import ext.Ext;
import ext.StringUtil;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class DefaultStartTranslationWorkflowPanelBase extends AbstractStartTranslationWorkflowPanel {
  private static const*/var START_TRANSLATION_VALIDATION_CODE$static/*:String*/ = "translationWorkflowStart";/*
  public static const TRANSLATION_SET_PANEL_ITEM_ID:String = "translationSetPanel";

  private var model:Bean;
  private var userChosenContentsValueExpression:ValueExpression;
  private var sitesValueExpression:ValueExpression;
  private var selectedSitesValueExpression:ValueExpression;
  private var masterSiteLabelValueExpression:ValueExpression;
  private var notesValueExpression:ValueExpression;
  private var removeEditedContentValueExpression:ValueExpression;

  private var translationSetValueExpression:ValueExpression;
  private var errorIssuesValueExpression:ValueExpression;

  /**
   * Sets whether separate workflow processes should be created per target site. This is true by default.
   * If true, separate processes will be started with different values in workflow variable 'targetSiteId', which
   * must be of type String. If false, one workflow will be started and all target site ids are stored in workflow
   * variable 'targetSiteId', which in this case must be an aggregation variable of type String.
   * /
  [Bindable]
  public var createWorkflowPerTargetSite:Boolean = true;

  public*/ function DefaultStartTranslationWorkflowPanelBase$(config/*:DefaultStartTranslationWorkflowPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$vzlM(config);
    this.determineMyEditedContentRemoval$vzlM();
    this.selectedSitesValueExpression$vzlM && this.selectedSitesValueExpression$vzlM.addChangeListener(AS3.bind(this,"getTranslationSetIssues"));
  }/*

  override public*/ function destroy(/*...params*/)/*:void*/ {var params=Array.prototype.slice.call(arguments);
    this.selectedSitesValueExpression$vzlM && this.selectedSitesValueExpression$vzlM.removeChangeListener(AS3.bind(this,"getTranslationSetIssues"));
    com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel.prototype.destroy.call(this,params);
  }/*

  internal*/ function getUserChosenContentsValueExpression()/*:ValueExpression*/ {
    return this.userChosenContentsValueExpression$vzlM ||
        (this.userChosenContentsValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]));
  }/*

  internal*/ function getRemoveEditedContentValueExpression()/*:ValueExpression*/ {
    return this.removeEditedContentValueExpression$vzlM ||
        (this.removeEditedContentValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false));
  }/*

  internal*/ function getWorkflowSetPanel()/*:WorkflowSetPanel*/ {
    var component/*:WorkflowSetPanel*/ =AS3.as( this.getComponent(DefaultStartTranslationWorkflowPanelBase.TRANSLATION_SET_PANEL_ITEM_ID),  com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel);
    if (component) {
      return component;
    }
    return null;
  }/*

  internal*/ function getWorkflowSetPanelModel()/*:Bean*/ {
    if (this.getWorkflowSetPanel()) {
      return this.getWorkflowSetPanel().getModel();
    }
    return undefined;
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$vzlM) {
      this.model$vzlM = com.coremedia.ui.data.beanFactory.createLocalBean({
        'userChosenContents': []
      });
    }
    return this.model$vzlM;
  }/*

  internal*/ function getErrorIssuesExistValueExpression()/*:ValueExpression*/ {
    if (!this.errorIssuesValueExpression$vzlM) {
      this.errorIssuesValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(false);
    }
    return this.errorIssuesValueExpression$vzlM;
  }/*

  protected*/ function getTranslationSetValueExpression()/*:ValueExpression*/ {
    if (!this.translationSetValueExpression$vzlM) {
      this.translationSetValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.translationSetValueExpression$vzlM;
  }/*

  protected*/ function getValidationCode()/*:String*/ {
    return START_TRANSLATION_VALIDATION_CODE$static;
  }/*

  public*/ function getTranslationSetIssues(callback/*:Function = null*/, translationSet/*:CapList = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:callback=null;case 1:translationSet=null;}
    translationSet = this.userChosenContentsValueExpression$vzlM.getValue();
    var sites = [];
    var selectedSites = this.getSelectedSites();

    var validationCode = this.getValidationCode();
    if (selectedSites.length > 0) {
      for (var index in selectedSites) {
        sites.push(selectedSites[index].getId());
      }
    }

    com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService.loadTranslationSetIssues(
            translationSet,
            sites,
            validationCode,
            function (workflowSetIssues/*:WorkflowSetIssues*/)/*:void*/ {

              if (this$.getWorkflowSetPanel()) {
                if (!com.coremedia.ui.util.ObjectUtils.equal(workflowSetIssues, this$.getWorkflowSetPanelModel().get(this$.getWorkflowSetPanel().getWorkflowSetIssuesPropertyName()))) {
                  this$.getWorkflowSetPanelModel().set(this$.getWorkflowSetPanel().getWorkflowSetIssuesPropertyName(), workflowSetIssues);
                }

                (AS3.is(callback,  Function)) && callback(workflowSetIssues);
              }
            });
  }/*

  internal*/ function getSelectedSites()/*:Array*/ {
    return this.getSelectedSitesValueExpression().getValue();
  }/*

  private*/ function getContentsForCheckIn()/*:Array*/ {
    var contents/*:Array*/ = this.getUserChosenContentsValueExpression().getValue();
    var contentsForCheckIn/*:Array*/ = [];

    for/* each*/ (var $1=0;$1</* in*/ contents.length;++$1) {var content/*:Content*/ =contents[$1];
      if (!content.isCheckedIn()) {
        contentsForCheckIn.push(content);
      }
    }
    return contentsForCheckIn;
  }/*

  private*/ function determineMyEditedContentRemoval()/*:void*/ {
    var preferences/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences();
    var removeEditedContents/*:Boolean*/ =AS3.as( preferences.get(com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase.REMOVE_EDITED_CONTENTS),  Boolean) || false;

    this.getRemoveEditedContentValueExpression().setValue(removeEditedContents);
  }/*


  private static*/ function getMasterProperty$static()/*:String*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel().getMasterProperty();
  }/*

  private static*/ function getLocaleProperty$static()/*:String*/ {
    return com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteModel().getLocaleProperty();
  }/*

  internal static*/ function getSite$static(contents/*:Array*/)/*:Site*/ {
    if (contents && contents.length > 0) {
      var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(contents[0]);
      return site;
    }
    return null;
  }/*

  /**
   * Retrieve the site from the first chosen content (event if contents from different sites have been selected)
   * @return Name of the site
   * /
  internal*/ function getMasterSiteLabelText()/*:ValueExpression*/ {var this$=this;
    return this.masterSiteLabelValueExpression$vzlM ||
        (this.masterSiteLabelValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(
            function ()/*:String*/ {
              var contents/*:Array*/ = this$.getUserChosenContentsValueExpression().getValue();
              if (!contents || contents.length === 0) {
                return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_masterSite_label_no_locale');
              }

              var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSiteFor(contents[0]);
              if (!site) {
                return this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_masterSite_label_no_locale');
              }
              var locale/*:String*/ = site.getLocale().getDisplayName();

              return Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'StartWorkflowWindow_masterSite_label'),
                  locale);
            }));
  }/*

  public override*/ function initializeContents(initialContents/*:Array*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.util.contentUtil.expandFolders(function (documents/*:Array*/)/*:void*/ {
      if (documents.length === 0) {
        return;
      }
      this$.getUserChosenContentsValueExpression().setValue(documents);
    }, initialContents);
  }/*

  internal*/ function getSitesValueExpression()/*:ValueExpression*/ {
    if (!this.sitesValueExpression$vzlM) {
      this.sitesValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calcDerivedSites$vzlM"));
    }
    return this.sitesValueExpression$vzlM;
  }/*

  internal*/ function getSelectedSitesValueExpression()/*:ValueExpression*/ {
    if (!this.selectedSitesValueExpression$vzlM) {
      this.selectedSitesValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.selectedSitesValueExpression$vzlM;
  }/*

  private*/ function calcDerivedSites()/*:Array*/ {
    var contents/*:Array*/ = this.getMasterContents();
    if (contents && contents.length > 0) {
      var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
      var masterSite/*:Site*/ = sitesService.getSiteFor(contents[0]);
      if (masterSite) {
        return this.getDerivedSites(masterSite, com.coremedia.cap.common.SESSION.getUser());
      }
    }
    return [];
  }/*

  internal*/ function getDerivedSites(masterSite/*:Site*/, currentUser/*:User*/)/*:Array*/ {
    if (this.isPullTranslation()) {
      var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
      var preferredSite/*:Site*/ = sitesService.getPreferredSite();
      return preferredSite ? [preferredSite] : [];
    } else {
      var derivedSites/*:Array*/ = this.getDerivedSitesForTranslation(masterSite);
      if (!currentUser.isMemberOf(masterSite.getSiteManagerGroup())) {
        // Pull Scenario: As we are not site manager of the master site the assumption is that we want to
        // pull translations to our sites, which are those we are site manager of.
        derivedSites = derivedSites.filter(function (site/*:Site*/)/*:Boolean*/ {
          return currentUser.isMemberOf(site.getSiteManagerGroup());
        });
      }
      return derivedSites;
    }
  }/*

  internal*/ function getDerivedSitesForTranslation(masterSite/*:Site*/)/*:Array*/ {
    var allDerivedSites/*:Array*/ = masterSite.getDerivedSites().concat();
    var translationSites/*:Array*/ = allDerivedSites.filter(function(site/*:Site*/)/*:Boolean*/ {
      return site.isLanguageTranslationTargetSite();
    });
    this.sortSites(translationSites);
    return translationSites;
  }/*

  internal*/ function sortSites(sites/*:Array*/)/*:void*/ {
    sites.sort(function (ssi1/*:Site*/, ssi2/*:Site*/)/*:Number*/ {
      var lowerCaseCompare/*:Number*/ = ssi1.getLocale().getDisplayName().toLowerCase().localeCompare(ssi2.getLocale().getDisplayName().toLocaleLowerCase());
      var actualCaseCompare/*:Number*/ = ssi1.getLocale().getDisplayName().localeCompare(ssi2.getLocale().getDisplayName());
      return lowerCaseCompare || actualCaseCompare;
    });
  }/*

  override public*/ function computeProcessVariableMappings(callback/*:Function*/)/*:void*/ {
    var sites/*:Array*/ = this.getSelectedSitesValueExpression().getValue().slice();
    var result/*:Array*/ = [];

    var notes/*:String*/ = this.getNotesValueExpression().getValue();
    var masterContents/*:Array*/ = this.getMasterContents();

    var staticVariables/*:Object*/ = {
      'masterContentObjects': masterContents,
      'comment': notes
    };
    if (this.isPullTranslation()) {
      staticVariables[com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.AUTO_SELF_ASSIGNED_VARIABLE] = true;
    }

    if (AS3.getBindable(this,"createWorkflowPerTargetSite")) {
      for (var i/*:int*/ = 0; i < sites.length; i++) {
        result.push(Ext.apply({'targetSiteId': sites[i].getId()}, staticVariables));
      }
    } else {
      result.push(Ext.apply({
        'targetSiteId': sites.map(function (site/*:Site*/)/*:String*/ {
          return site.getId();
        })
      }, staticVariables));
    }

    callback(result);
  }/*

  override public*/ function getMasterContents()/*:Array*/ {
    return this.getUserChosenContentsValueExpression().getValue();
  }/*

  override public*/ function getRemoveEditedContent()/*:Boolean*/ {
    return this.getRemoveEditedContentValueExpression().getValue();
  }/*

  override public*/ function isStartButtonDisabled()/*:Boolean*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var issues/*:Boolean*/ =  this.getErrorIssuesExistValueExpression().getValue();
    return (issues === undefined) ? true : issues;
  }/*

  override public*/ function beforeStartWorkflow(callback/*:Function*/)/*:void*/ {
    var contentsForCheckIn/*:Array*/ = this.getContentsForCheckIn$vzlM();
    if (contentsForCheckIn.length > 0) {
      com.coremedia.cap.common.SESSION.getConnection().getContentRepository().checkInAll(contentsForCheckIn, function (result/*:CheckInResult*/)/*:void*/ {
        // Show error message box if disapprove did not succeed.
        if (!result.successful) {
          var checkInResultWindowCfg/*:CheckInResultWindow*/ = AS3.cast(com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow,{});
          AS3.setBindable(checkInResultWindowCfg,"bulkResultItems" , result.results);
          Ext.ComponentManager.create(checkInResultWindowCfg).show();
        } else {
          callback();
        }
      });
    } else {
      callback();
    }
  }/*

  internal*/ function getNotesValueExpression()/*:ValueExpression*/ {
    return this.notesValueExpression$vzlM ||
        (this.notesValueExpression$vzlM = com.coremedia.ui.data.ValueExpressionFactory.createFromValue());
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel",
      metadata: {"": ["PublicApi"]},
      model$vzlM: null,
      userChosenContentsValueExpression$vzlM: null,
      sitesValueExpression$vzlM: null,
      selectedSitesValueExpression$vzlM: null,
      masterSiteLabelValueExpression$vzlM: null,
      notesValueExpression$vzlM: null,
      removeEditedContentValueExpression$vzlM: null,
      translationSetValueExpression$vzlM: null,
      errorIssuesValueExpression$vzlM: null,
      constructor: DefaultStartTranslationWorkflowPanelBase$,
      super$vzlM: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel.prototype.constructor.apply(this, arguments);
      },
      destroy: destroy,
      getUserChosenContentsValueExpression: getUserChosenContentsValueExpression,
      getRemoveEditedContentValueExpression: getRemoveEditedContentValueExpression,
      getWorkflowSetPanel: getWorkflowSetPanel,
      getWorkflowSetPanelModel: getWorkflowSetPanelModel,
      getModel: getModel,
      getErrorIssuesExistValueExpression: getErrorIssuesExistValueExpression,
      getTranslationSetValueExpression: getTranslationSetValueExpression,
      getValidationCode: getValidationCode,
      getTranslationSetIssues: getTranslationSetIssues,
      getSelectedSites: getSelectedSites,
      getContentsForCheckIn$vzlM: getContentsForCheckIn,
      determineMyEditedContentRemoval$vzlM: determineMyEditedContentRemoval,
      getMasterSiteLabelText: getMasterSiteLabelText,
      initializeContents: initializeContents,
      getSitesValueExpression: getSitesValueExpression,
      getSelectedSitesValueExpression: getSelectedSitesValueExpression,
      calcDerivedSites$vzlM: calcDerivedSites,
      getDerivedSites: getDerivedSites,
      getDerivedSitesForTranslation: getDerivedSitesForTranslation,
      sortSites: sortSites,
      computeProcessVariableMappings: computeProcessVariableMappings,
      getMasterContents: getMasterContents,
      getRemoveEditedContent: getRemoveEditedContent,
      isStartButtonDisabled: isStartButtonDisabled,
      beforeStartWorkflow: beforeStartWorkflow,
      getNotesValueExpression: getNotesValueExpression,
      config: {createWorkflowPerTargetSite: true},
      statics: {
        TRANSLATION_SET_PANEL_ITEM_ID: "translationSetPanel",
        getSite: getSite$static
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.String",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanel",
        "com.coremedia.cms.editor.sdk.bulkOperation.CheckInResultWindow",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.util.contentUtil",
        "com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowSetPanel",
        "com.coremedia.cms.editor.controlroom.workflow.translation.StartTranslationWorkflowWindowBase"
      ]
    };
});
