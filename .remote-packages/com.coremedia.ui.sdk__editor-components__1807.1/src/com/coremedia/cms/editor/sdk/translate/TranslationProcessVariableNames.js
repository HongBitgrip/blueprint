Ext.define("com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames", function(TranslationProcessVariableNames) {/*package com.coremedia.cms.editor.sdk.translate {

/**
 * The constant in this class defines the name of a process
 * variable that must be present in all translation processes.
 * /
public class TranslationProcessVariableNames {

  /**
   * The name of the subject variable in translation processes.
   * /
  public static const SUBJECT_VARIABLE:String = 'subject';

  /**
   * The name of the comment variable in the default translation process.
   * /
  public static const COMMENT_VARIABLE:String = 'comment';

  /**
   * The name of the derivedContents variable in the default translation process.
   * /
  public static const DERIVED_CONTENTS_VARIABLE:String = 'derivedContents';

  /**
   * The name of the masterContentObjects variable in the default translation process.
   * /
  public static const MASTER_CONTENT_OBJECTS_VARIABLE:String = 'masterContentObjects';

  /**
   * The name of the targetSiteId variable in the default translation process.
   * /
  public static const TARGET_SITE_ID_VARIABLE:String = 'targetSiteId';

  /**
   * The name of the autoMergeConflicts variable in the default translation process.
   * /
  public static const AUTO_MERGE_CONFLICTS_VARIABLE:String = 'autoMergeConflicts';

  /**
   * Signal if the "Translate" User Task should be auto-accepted by the user
   * who started the process. Defaults to <code>false</code>.
   * /
  public static const AUTO_SELF_ASSIGNED_VARIABLE:String = 'autoSelfAssigned';

}*/function TranslationProcessVariableNames$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TranslationProcessVariableNames$,
      statics: {
        SUBJECT_VARIABLE: 'subject',
        COMMENT_VARIABLE: 'comment',
        DERIVED_CONTENTS_VARIABLE: 'derivedContents',
        MASTER_CONTENT_OBJECTS_VARIABLE: 'masterContentObjects',
        TARGET_SITE_ID_VARIABLE: 'targetSiteId',
        AUTO_MERGE_CONFLICTS_VARIABLE: 'autoMergeConflicts',
        AUTO_SELF_ASSIGNED_VARIABLE: 'autoSelfAssigned'
      }
    };
});
