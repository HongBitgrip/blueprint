Ext.define("com.coremedia.cms.editor.sdk.translate.TranslationWorkflowUtil", function(TranslationWorkflowUtil) {/*package com.coremedia.cms.editor.sdk.translate {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentObject;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessDefinition;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.*;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class TranslationWorkflowUtil {

  private static*/ var versionsToBeTranslatedByContentUriPathValueExpression$static/*:ValueExpression*/=null;/*

  /**
   * Retrieve translation status for given content relative to the master content object that the
   * content was derived from.
   * If the master content object is not contained in the given process
   * com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.INVALID is returned.
   *
   * @param derivedContent the content for which the translation status should be computed
   * @param process the translation process that created the derivedContent
   *
   * @return the translation status for the given content
   *
   * @see com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil#getTranslationStatus()
   * /
  public static*/ function getTranslationStatus$static(derivedContent/*:Content*/, process/*:Process*/)/*:String*/ {
    if (!process) {
      return undefined;
    }

    if (!process.isLoaded()) {
      process.load();
      return undefined;
    }

    if (!derivedContent.isLoaded()) {
      derivedContent.load();
      return undefined;
    }

    var sitesService/*:SitesService*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService();
    var master/*:Content*/ = sitesService.getMaster(derivedContent);

    if (master === undefined) {
      return undefined;
    }

    var masterContentObjects/*:Array*/ = process.getProperties().get(com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE);
    for (var i/*:int*/ = 0; i < masterContentObjects.length; i++) {
      var masterContentObject/*:ContentObject*/ = masterContentObjects[i];
      var isMasterContentObjectAVersion/*:Boolean*/ = masterContentObject.isVersion();

      if (masterContentObject.getUriPath().indexOf(master.getUriPath()) === 0) {
        var masterVersion/*:Version*/ = isMasterContentObjectAVersion ? AS3.cast(com.coremedia.cap.content.Version,masterContentObject) : null;
        return com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.getTranslationStatusAgainstVersion(derivedContent, masterVersion);
      }
    }

    return com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil.INVALID;
  }/*

  public static*/ function getVersionToBeTranslated$static(content/*:Content*/)/*:Version*/ {
    if (!versionsToBeTranslatedByContentUriPathValueExpression$static) {
      versionsToBeTranslatedByContentUriPathValueExpression$static = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(getVersionsToBeTranslatedByContentUriPath$static);
    }

    var versionsToBeTranslatedByContentUriPath/*:**/ = versionsToBeTranslatedByContentUriPathValueExpression$static.getValue();
    if (!versionsToBeTranslatedByContentUriPath) {
      return undefined;
    }

    return versionsToBeTranslatedByContentUriPath[content.getUriPath()] || null;
  }/*

  private static*/ function getVersionsToBeTranslatedByContentUriPath$static()/*:Object*/ {
    var result/*:Object*/ = {};
    var returnUndefined/*:Boolean*/ = false;

    var acceptedTasks/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository().getWorklistService().getTasksAccepted();
    for (var i/*:int*/ = 0; i < acceptedTasks.length; i++) {
      var task/*:Task*/ = acceptedTasks[i];
      var process/*:Process*/ = task.getContainingProcess();
      if (!process) {
        returnUndefined = true;
        continue;
      }
      var processDefinition/*:ProcessDefinition*/ = process.getDefinition();
      if (!processDefinition) {
        returnUndefined = true;
        continue;
      }
      var processDefinitionName/*:String*/ = processDefinition.getName();
      if (processDefinitionName === undefined) {
        returnUndefined = true;
        continue;
      }
      if (processDefinitionName.indexOf('Translation') != -1) {
        // Task and process are loaded and hint at a translation process.
        var masterContentObjects/*:Array*/ = process.getProperties().get(com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE);
        if (masterContentObjects) {
          for (var j/*:int*/ = 0; j < masterContentObjects.length; j++) {
            var contentObject/*:ContentObject*/ = masterContentObjects[j];
            if (AS3.is(contentObject,  com.coremedia.cap.content.Version)) {
              var version/*:Version*/ = AS3.cast(com.coremedia.cap.content.Version,contentObject);
              var containingContent/*:Content*/ = version.getContainingContent();
              var uriPath/*:String*/ = containingContent.getUriPath();
              var existingVersion/*:Version*/ = result[uriPath];
              if (!existingVersion || existingVersion.getVersionNumber() < version.getVersionNumber()) {
                result[uriPath] = version;
              }
            }
          }
        } else if (process.getState() === com.coremedia.ui.data.BeanState.UNKNOWN) {
          returnUndefined = true;
        }
      }
    }

    if (returnUndefined) {
      return undefined;
    }

    return result;
  }/*
}*/function TranslationWorkflowUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationWorkflowUtil$,
      statics: {
        getTranslationStatus: getTranslationStatus$static,
        getVersionToBeTranslated: getVersionToBeTranslated$static
      },
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.content.Version",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.translate.TranslationStatusUtil"
      ]
    };
});
