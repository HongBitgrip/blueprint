Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase", function(DefaultTranslationWorkflowFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.WorkflowForm;
import com.coremedia.cms.editor.sdk.columns.grid.NameColumn;
import com.coremedia.cms.editor.sdk.columns.grid.StatusColumn;
import com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.premular.PremularConfiguration;
import com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn;
import com.coremedia.cms.editor.sdk.sites.SitesService;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Ext;

import ext.grid.column.Column;

[PublicApi]
public class DefaultTranslationWorkflowFormBase extends WorkflowForm {
  internal static const CONTENTS_ITEM_ID:String = 'contentsItemId';

  private var derivedContentsValueExpression:ValueExpression;
  private var notesValueExpression:ValueExpression;
  private var premularConfigurationsValueExpression:ValueExpression;

  public*/ function DefaultTranslationWorkflowFormBase$(config/*:WorkflowForm = null*/) {if(arguments.length<=0)config=null;
    this.derivedContentsValueExpression$bx6q = AS3.getBindable(config,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
            com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.DERIVED_CONTENTS_VARIABLE);

    this.super$bx6q(config);
  }/*

  internal*/ function getDerivedContentsValueExpression()/*:ValueExpression*/ {
    return this.derivedContentsValueExpression$bx6q;
  }/*

  internal*/ function getNotesValueExpression(bindTo/*:ValueExpression*/)/*:ValueExpression*/ {
    if (!this.notesValueExpression$bx6q) {
      this.notesValueExpression$bx6q = bindTo.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES, com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.COMMENT_VARIABLE);
    }
    return this.notesValueExpression$bx6q;
  }/*

  internal static*/ function getColumns$static(showTranslationStatus/*:Boolean*/)/*:Array*/ {
    var theNameColumn/*:Column*/ = showTranslationStatus === true ?
            new com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn() :
            new com.coremedia.cms.editor.sdk.columns.grid.NameColumn();

    return [Ext.create(com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn, {}), theNameColumn, new com.coremedia.cms.editor.sdk.columns.grid.StatusColumn()];
  }/*

  internal*/ function getTranslationStatus(content/*:Content*/)/*:String*/ {
    var process/*:Process*/ = AS3.getBindable(this,"bindTo").getValue();
    return com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil.getTranslationStatus(content, process);
  }/*

  /**
   * <p>
   * Creates value expression to calculate the premular configurations for the translation
   * content set. Thus the configuration is especially enriched by information of the master
   * of each content, so that it can be opened in side-by-side-view.
   * </p>
   * <p>
   * The value expression might evaluate to <code>undefined</code> if not all required information
   * are loaded yet, such as versions and master contents.
   * </p>
   * @return value function to return {@link PremularConfiguration}
   * /
  internal*/ function getPremularConfigurationsValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.premularConfigurationsValueExpression$bx6q) {
      this.premularConfigurationsValueExpression$bx6q = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Object*/ {
        var masterVersionsExpression/*:ValueExpression*/ = AS3.getBindable(this$,"bindTo").extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
                com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE);
        var masterVersions/*:Array*/ = masterVersionsExpression.getValue();
        var i/*:int*/;

        if (masterVersions === undefined) {
          return undefined;
        }

        if (masterVersions === null) {
          return [];
        }

        var masterVersionNotLoaded/*:Boolean*/ = false;

        // first build up a map from masterContent -> masterVersion
        var masterContentToMasterVersionMap/*:Object*/ = {};
        for (i = 0; i < masterVersions.length; i++) {
          var masterVersion/*:Version*/ = masterVersions[i];

          switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(masterVersion)) {
            case undefined: {
              masterVersionNotLoaded = true;
              break;
            }
            case true: {
              masterContentToMasterVersionMap[masterVersion.getContainingContent().getUriPath()] = masterVersion;
              break;
            }
          }
        }

        if (masterVersionNotLoaded) {
          return undefined;
        }

        // then go through derived content, get the master content via siteService and use the previously built map to find the master version
        var premularConfigurations/*:Array*/ = [];
        var derivedContents/*:Array*/ = this$.derivedContentsValueExpression$bx6q.getValue();

        var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();

        var masterContentUndefined/*:Boolean*/ = false;

        for (i = 0; i < derivedContents.length; i++) {
          var derivedContent/*:Content*/ = derivedContents[i];
          var accessible/*:Boolean*/ = com.coremedia.ui.data.RemoteBeanUtil.isAccessible(derivedContent);
          if (accessible === undefined) {
            masterContentUndefined = true;
          }
          if (!accessible) {
            continue;
          }
          var masterContent/*:Content*/ = sitesService.getMaster(derivedContent);
          if (masterContent === undefined) {
            // Continue to query masters so that they are loaded when we
            // are asked next time.
            masterContentUndefined = true;
            continue;
          }
          var masterVersionToTranslate/*:Version*/ = masterContentToMasterVersionMap[masterContent.getUriPath()];

          premularConfigurations.push(new com.coremedia.cms.editor.sdk.premular.PremularConfiguration(derivedContent, masterVersionToTranslate, false, true));
        }

        return masterContentUndefined ? undefined : premularConfigurations;
      });
    }

    return this.premularConfigurationsValueExpression$bx6q;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
      metadata: {"": ["PublicApi"]},
      derivedContentsValueExpression$bx6q: null,
      notesValueExpression$bx6q: null,
      premularConfigurationsValueExpression$bx6q: null,
      constructor: DefaultTranslationWorkflowFormBase$,
      super$bx6q: function() {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowForm.prototype.constructor.apply(this, arguments);
      },
      getDerivedContentsValueExpression: getDerivedContentsValueExpression,
      getNotesValueExpression: getNotesValueExpression,
      getTranslationStatus: getTranslationStatus,
      getPremularConfigurationsValueExpression: getPremularConfigurationsValueExpression,
      statics: {
        CONTENTS_ITEM_ID: 'contentsItemId',
        getColumns: getColumns$static
      },
      requires: [
        "Ext",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
        "com.coremedia.cms.editor.sdk.columns.grid.NameColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.StatusColumn",
        "com.coremedia.cms.editor.sdk.columns.grid.TypeIconColumn",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularConfiguration",
        "com.coremedia.cms.editor.sdk.sites.NameTranslationStatusColumn",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
